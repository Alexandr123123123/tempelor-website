import React from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const Contact = () => {
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
            <motion.div className={styles.bentoCard} variants={itemVariants}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg>
              </div>
              <div className={styles.bentoContent}>
                <h4>Phone</h4>
                <p>+1 (800) 555-0199</p>
              </div>
            </motion.div>
            
            <motion.div className={styles.bentoCard} variants={itemVariants}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg>
              </div>
              <div className={styles.bentoContent}>
                <h4>Email</h4>
                <p>hello@tempelor.com</p>
              </div>
            </motion.div>

            <motion.div className={styles.bentoCard} variants={itemVariants}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><path d="M9 7h6M9 11h6M9 15h6" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg>
              </div>
              <div className={styles.bentoContent}>
                <h4>Office</h4>
                <p>123 Energy Blvd, Tech District<br />New York, NY 10001</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className={styles.formCard} variants={itemVariants}>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" placeholder="John" />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john.doe@example.com" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" placeholder="Briefly describe your project..."></textarea>
              </div>
              <button className={styles.submitBtn}>
                Send Request
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
