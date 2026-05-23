import React from 'react';
import { motion } from 'framer-motion';
import styles from './Features.module.css';

const Features = () => {
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
      title: 'Extended Warranty',
      desc: 'We offer a minimum 5-year warranty on all structural electrical work and materials used.',
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" strokeLinecap="round" strokeLinejoin="round"/>
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
          transition={{ duration: 0.6 }}
        >
          <div className={styles.headerGlass}>
            <span className={styles.label}>
              <span className={styles.accentSlash}>//</span> Why Choose Us
            </span>
            <h2 className={styles.title}>The Tempelor Advantage</h2>
            <p className={styles.subtitle}>
              We don't just run wires; we build the invisible foundation of your home. 
              Discover the core principles that make us the leading choice for premium residential electrical deployment.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {features.map((feat) => (
            <motion.div 
              key={feat.id} 
              className={styles.card}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
              }}
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
        </motion.div>
      </div>

      {/* BOTTOM ADVANTAGE BANNER */}
      <motion.div 
        className={styles.banner}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
      >
        <div className={styles.bannerLeft}>
          <div className={styles.bannerIcon}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <div className={styles.bannerInfo}>
            <h4 className={styles.bannerTitle}>Tempelor Solutions</h4>
            <p className={styles.bannerSubtitle}>Smart energy for your home</p>
          </div>
        </div>

        <div className={styles.bannerMiddle}>
          <div className={styles.bannerItem}>
            <div className={styles.bannerItemIcon}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className={styles.bannerItemLabel}>Free consultation</span>
          </div>

          <div className={styles.bannerItem}>
            <div className={styles.bannerItemIcon}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className={styles.bannerItemLabel}>Site visit & estimate</span>
          </div>

          <div className={styles.bannerItem}>
            <div className={styles.bannerItemIcon}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className={styles.bannerItemLabel}>Installation & support</span>
          </div>

          <div className={styles.bannerItem}>
            <div className={styles.bannerItemIcon}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className={styles.bannerItemLabel}>Support</span>
          </div>
        </div>

        <div className={styles.bannerRight}>
          <motion.button 
            className={styles.bannerBtn}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Leave a request (→)
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
