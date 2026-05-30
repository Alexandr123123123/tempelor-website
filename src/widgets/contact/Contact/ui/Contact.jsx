import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../../../shared/api/supabase';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email && !formData.firstName) return;

    setIsSubmitting(true);

    let sessionId = localStorage.getItem('tempelor_chat_session');
    if (!sessionId) {
      sessionId = 'session_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('tempelor_chat_session', sessionId);
    }

    const textToSend = [
      `📝 Новая заявка (Contact Form)`,
      `Имя: ${formData.firstName} ${formData.lastName}`.trim(),
      `Email: ${formData.email}`,
      `Сообщение: ${formData.message}`
    ].join('\n');

    try {
      const currentThreadTs = localStorage.getItem(`tempelor_chat_thread_${sessionId}`);
      
      const { data, error } = await supabase.functions.invoke('slack-webhook', {
        body: {
          source: 'website',
          sessionId: sessionId,
          text: textToSend,
          threadTs: currentThreadTs,
          messageType: 'contact_form'
        }
      });

      if (data && data.ts && (!currentThreadTs || data.threadReset)) {
        localStorage.setItem(`tempelor_chat_thread_${sessionId}`, data.ts);
      }
      
      if (data && data.ok === false) {
        localStorage.removeItem(`tempelor_chat_thread_${sessionId}`);
      }

      if (error) console.error('Edge Function Error:', error);
      
      setIsSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
      
    } catch (err) {
      console.error('Failed to send contact request to Slack', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <div className={styles.label}>
            <span className={styles.accentSlash}>//</span> Get in Touch
          </div>
          <h2 className={styles.title}>Request an Engineer</h2>
          <p className={styles.subtitle}>
            Ready to upgrade your home's electrical system? Leave a request, and our 
            lead engineer will contact you within 30 minutes for a free consultation.
          </p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className={styles.infoWrapper} variants={containerVariants}>
            <motion.div 
              className={styles.bentoCard} 
              variants={itemVariants}
              onClick={() => handleCopy('+1 (800) 555-0199', 0)}
              title="Click to copy"
            >
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg>
              </div>
              <div className={styles.bentoContent}>
                <h4>Phone</h4>
                <p>+1 (800) 555-0199</p>
              </div>
              <div className={`${styles.copyIcon} ${copiedIndex === 0 ? styles.copied : ''}`}>
                {copiedIndex === 0 ? (
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                )}
              </div>
            </motion.div>
            
            <motion.div 
              className={styles.bentoCard} 
              variants={itemVariants}
              onClick={() => handleCopy('hello@tempelor.com', 1)}
              title="Click to copy"
            >
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg>
              </div>
              <div className={styles.bentoContent}>
                <h4>Email</h4>
                <p>hello@tempelor.com</p>
              </div>
              <div className={`${styles.copyIcon} ${copiedIndex === 1 ? styles.copied : ''}`}>
                {copiedIndex === 1 ? (
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                )}
              </div>
            </motion.div>

            <motion.div 
              className={styles.bentoCard} 
              variants={itemVariants}
              onClick={() => handleCopy('123 Energy Blvd, Tech District, New York, NY 10001', 2)}
              title="Click to copy"
            >
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><path d="M9 7h6M9 11h6M9 15h6" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg>
              </div>
              <div className={styles.bentoContent}>
                <h4>Office</h4>
                <p>123 Energy Blvd, Tech District<br />New York, NY 10001</p>
              </div>
              <div className={`${styles.copyIcon} ${copiedIndex === 2 ? styles.copied : ''}`}>
                {copiedIndex === 2 ? (
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                )}
              </div>
            </motion.div>
          </motion.div>

          <motion.div className={styles.formCard} variants={itemVariants}>
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--color-text)' }}
                >
                  <div style={{ fontSize: '3rem', color: '#00c3ff', marginBottom: '16px' }}>✓</div>
                  <h3 style={{ marginBottom: '8px', color: '#fff', fontSize: '1.5rem' }}>Message Sent!</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)' }}>We will reach out to you very soon.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  className={styles.form} 
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" id="firstName" value={formData.firstName} onChange={handleInputChange} required placeholder="John" />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="lastName">Last Name</label>
                      <input type="text" id="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Doe" />
                    </div>
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" value={formData.email} onChange={handleInputChange} required placeholder="john.doe@example.com" />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" value={formData.message} onChange={handleInputChange} required rows="4" placeholder="Briefly describe your project..."></textarea>
                  </div>
                  <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Request'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
