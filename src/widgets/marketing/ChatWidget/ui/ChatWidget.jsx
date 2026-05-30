import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { supabase } from '../../../../shared/api/supabase';
import styles from './ChatWidget.module.css';

export const ChatWidget = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 'welcome', text: t("chat.welcome"), sender: 'support' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  
  // Create or retrieve session ID
  const getSessionId = () => {
    let currentSessionId = localStorage.getItem('tempelor_chat_session');
    if (!currentSessionId) {
      currentSessionId = 'session_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('tempelor_chat_session', currentSessionId);
    }
    return currentSessionId;
  };

  const sessionId = getSessionId();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  useEffect(() => {
    // Fetch Chat History
    const fetchHistory = async () => {
      const { data } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('session_id', sessionId)
        .order('created_at', { ascending: true });
        
      if (data && data.length > 0) {
        setMessages([
          { id: 'welcome', text: t("chat.welcome"), sender: 'support' },
          ...data
        ]);
      }
    };

    fetchHistory();

    // Subscribe to Realtime Updates
    const channel = supabase
      .channel('chat_updates')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: `session_id=eq.${sessionId}`
        },
        (payload) => {
          // If the message is from the operator, add it to our state
          if (payload.new.sender === 'operator') {
            setMessages((prev) => {
              // Avoid duplicates if we already have this message ID
              if (prev.find(m => m.id === payload.new.id)) return prev;
              return [...prev, payload.new];
            });
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [sessionId]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const textToSend = inputValue.trim();
    
    // Optimistically add to UI
    const tempId = Date.now().toString();
    const userMsg = { id: tempId, text: textToSend, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    // 1. Save to Supabase DB
    try {
      const { error: dbError } = await supabase.from('chat_messages').insert([
        { session_id: sessionId, text: textToSend, sender: 'user' }
      ]);
      if (dbError) {
        console.error("Supabase Insert Error:", dbError);
      }
    } catch (err) {
      console.error("Exception when saving message to DB", err);
    }

    // 2. Notify Slack via Edge Function
    try {
      const currentThreadTs = localStorage.getItem(`tempelor_chat_thread_${sessionId}`);
      
      console.log("Calling Edge Function 'slack-webhook' with text:", textToSend);
      
      const { data, error } = await supabase.functions.invoke('slack-webhook', {
        body: {
          source: 'website',
          sessionId: sessionId,
          text: textToSend,
          threadTs: currentThreadTs
        }
      });

      console.log("Edge Function Response Data:", data);

      if (error) {
        console.error('Edge Function Error Object:', error);
      }

      if (data && data.ts && (!currentThreadTs || data.threadReset)) {
        localStorage.setItem(`tempelor_chat_thread_${sessionId}`, data.ts);
      }

      if (data && data.ok === false) {
        localStorage.removeItem(`tempelor_chat_thread_${sessionId}`);
      }
      
      if (error) console.error('Edge Function Error:', error);
    } catch (err) {
      console.error("Failed to send message to Slack", err);
    }
  };

  return (
    <div className={styles.chatContainer}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatWindow}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className={styles.header}>
              <div className={styles.headerTitle}>
                <div className={styles.onlineIndicator} />
                {t("chat.support")}
              </div>
              <button 
                className={styles.closeButton} 
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <div className={styles.messages}>
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`${styles.message} ${msg.sender === 'user' ? styles.messageUser : styles.messageSupport}`}
                >
                  {msg.id === 'welcome' ? t("chat.welcome") : msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form className={styles.inputArea} onSubmit={handleSend}>
              <input
                type="text"
                className={styles.input}
                placeholder={t("chat.placeholder")}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit" className={styles.sendButton} aria-label="Send message">
                <svg viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={styles.chatButton}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className={styles.chatIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        </svg>
        {t("chat.button")}
      </motion.button>
    </div>
  );
};
