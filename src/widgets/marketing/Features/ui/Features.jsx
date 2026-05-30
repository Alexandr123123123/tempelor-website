import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useBookingModal } from '../../../../app/providers/BookingModalProvider';
import styles from './Features.module.css';

const Features = () => {
  const { openModal } = useBookingModal();
  const { t } = useTranslation();

  const features = [
    {
      id: 1,
      title: t('features.items.1.title'),
      desc: t('features.items.1.desc'),
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      title: t('features.items.2.title'),
      desc: t('features.items.2.desc'),
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
      title: t('features.items.3.title'),
      desc: t('features.items.3.desc'),
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
      title: t('features.items.4.title'),
      desc: t('features.items.4.desc'),
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
            <span className={styles.accentSlash}>//</span> {t('features.label')}
          </span>
          <h2 className={styles.title}>{t('features.title')}</h2>
          <p className={styles.subtitle}>
            {t('features.subtitle')}
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
            <h4 className={styles.bannerTitle}>{t('features.bannerTitle')}</h4>
            <p className={styles.bannerSubtitle}>{t('features.bannerSubtitle')}</p>
          </div>

          <div className={styles.bannerMiddle}>
            <span className={styles.bannerItemLabel}>{t('features.consultation')}</span>
            <span className={styles.bannerItemLabel}>{t('features.safety')}</span>
            <span className={styles.bannerItemLabel}>{t('features.installation')}</span>
            <span className={styles.bannerItemLabel}>{t('features.support')}</span>
          </div>

          <button className={styles.bannerBtn} onClick={openModal}>
            <span className={styles.btnLine1}>{t('features.bookBtnLine1')}</span>
            <span className={styles.btnLine2}>{t('features.bookBtnLine2')}</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
