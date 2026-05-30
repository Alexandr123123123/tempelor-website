import React from 'react';
import { motion } from 'framer-motion';
import { useBookingModal } from '../../../../app/providers/BookingModalProvider';
import styles from './Features.module.css';

const Features = () => {
  const { openModal } = useBookingModal();

  const features = [
    {
      id: 1,
      title: 'Uncompromising Safety',
      desc: 'Multi-level protection systems including RCDs and advanced surge arresters for your peace of mind.',
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Strict Quality Control',
      desc: 'Every connection is verified, panels are assembled to strict standards, and all lines undergo mandatory load testing.',
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          <path d="M9 11l1.5 1.5L14 9"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Strict Code Compliance',
      desc: 'All projects adhere to local building codes, passing any inspection with flying colors.',
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2v6h6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 13H8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 17H8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 9H8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 4,
      title: 'On-Time Delivery',
      desc: 'Streamlined processes guarantee that your project will be completed within the timeline.',
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className={styles.section} id="features">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className={styles.label}>
            <span className={styles.accentSlash}>//</span> Why Choose Us
          </span>
          <h2 className={styles.title}>The Tempelor Advantage</h2>
          <p className={styles.subtitle}>
            We don't just run wires; we build the invisible foundation of your home. 
            Discover the core principles that make us the leading choice for premium residential electrical deployment.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {features.map((feat) => (
            <motion.div 
              key={feat.id} 
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className={styles.iconWrapper}>
                {feat.icon}
              </div>
              <div className={styles.content}>
                <h3 className={styles.itemTitle}>{feat.title}</h3>
                <p className={styles.itemDesc}>{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM ADVANTAGE BANNER (Simplified) */}
        <motion.div 
          className={styles.banner}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className={styles.bannerInfo}>
            <h4 className={styles.bannerTitle}>Tempelor Solutions</h4>
            <p className={styles.bannerSubtitle}>Smart energy for your home</p>
          </div>

          <div className={styles.bannerMiddle}>
            <span className={styles.bannerItemLabel}>Free consultation</span>
            <span className={styles.bannerItemLabel}>Safety</span>
            <span className={styles.bannerItemLabel}>Installation</span>
            <span className={styles.bannerItemLabel}>Support</span>
          </div>

          <button className={styles.bannerBtn} onClick={openModal}>
            <span className={styles.btnLine1}>Book a</span>
            <span className={styles.btnLine2}>consultation →</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
