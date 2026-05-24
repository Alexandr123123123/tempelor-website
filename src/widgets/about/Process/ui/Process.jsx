import React from 'react';
import { motion } from 'framer-motion';
import styles from './Process.module.css';

const Process = () => {
  const steps = [
    {
      step: "01",
      title: "Request & Consultation",
      desc: "We begin with a thorough assessment of your needs, site visit, and preliminary estimation."
    },
    {
      step: "02",
      title: "Engineering Design",
      desc: "Our engineers create a detailed blueprint and load calculation tailored to your specific project."
    },
    {
      step: "03",
      title: "Expert Installation",
      desc: "Certified electricians execute the plan with precision, using premium materials and equipment."
    },
    {
      step: "04",
      title: "Testing & Handover",
      desc: "Rigorous stress testing is performed before the final walk-through and system handover."
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
            <span className={styles.accentSlash}>//</span> How We Work
          </span>
          <h2 className={styles.title}>Our Proven Process</h2>
          <p className={styles.subtitle}>
            From the initial handshake to flipping the switch, our transparent workflow
            ensures peace of mind at every stage.
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
