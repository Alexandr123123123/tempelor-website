import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './Process.module.css';

const Process = () => {
  const { t } = useTranslation();

  const steps = [
    {
      step: "01",
      title: t('process.items.1.title'),
      desc: t('process.items.1.desc')
    },
    {
      step: "02",
      title: t('process.items.2.title'),
      desc: t('process.items.2.desc')
    },
    {
      step: "03",
      title: t('process.items.3.title'),
      desc: t('process.items.3.desc')
    },
    {
      step: "04",
      title: t('process.items.4.title'),
      desc: t('process.items.4.desc')
    }
  ];

  return (
    <section className={styles.process} id="process">
      <div className={styles.container}>

        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>
            <span className={styles.accentSlash}>//</span> {t('process.label')}
          </span>
          <h2 className={styles.title}>{t('process.title')}</h2>
          <p className={styles.subtitle}>
            {t('process.subtitle')}
          </p>
        </motion.div>

        {/* One unified card wrapped in neon border */}
        <motion.div
          className={styles.cardWrapper}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className={styles.card}>
          {steps.map((item, index) => (
            <div key={index} className={styles.stepItem}>
              {/* Vertical divider between steps */}
              {index !== 0 && <div className={styles.divider} />}

              <motion.div
                className={styles.stepInner}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <div className={styles.stepNum}>{item.step}</div>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDesc}>{item.desc}</p>
              </motion.div>
            </div>
          ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Process;
