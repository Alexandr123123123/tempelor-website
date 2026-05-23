import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../../../shared/ui/Button';
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
          <span className={styles.label}>Get in Touch</span>
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
          <motion.div className={styles.formWrapper} variants={itemVariants}>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="John Doe" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="+1 (555) 000-0000" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message">Message (Optional)</label>
                <textarea id="message" rows="4" placeholder="Briefly describe your project..."></textarea>
              </div>
              <Button variant="primary" className={styles.submitBtn}>
                Send Request
              </Button>
            </form>
          </motion.div>

          <motion.div className={styles.infoWrapper} variants={itemVariants}>
            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <h4>Phone</h4>
                <p>+1 (800) 555-0199</p>
              </div>
              <div className={styles.detailItem}>
                <h4>Email</h4>
                <p>hello@tempelor.com</p>
              </div>
              <div className={styles.detailItem}>
                <h4>Office</h4>
                <p>123 Energy Blvd, Tech District<br />New York, NY 10001</p>
              </div>
            </div>
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapText}>Interactive Map Here</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
