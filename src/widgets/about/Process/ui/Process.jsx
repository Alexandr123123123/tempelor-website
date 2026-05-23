import React from 'react';
import { motion } from 'framer-motion';
import styles from './Process.module.css';

const Process = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
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
        <motion.div 
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <span className={styles.label}>How We Work</span>
          <h2 className={styles.title}>Our Proven Process</h2>
          <p className={styles.subtitle}>
            From the initial handshake to flipping the switch, our transparent workflow 
            ensures peace of mind at every stage.
          </p>
        </motion.div>

        <motion.div 
          className={styles.stepsWrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {steps.map((item, index) => (
            <motion.div key={index} className={styles.stepCard} variants={itemVariants}>
              <div className={styles.stepIcon}>
                <div className={styles.stepNum}>{item.step}</div>
              </div>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDesc}>{item.desc}</p>
              {index !== steps.length - 1 && (
                <div className={styles.connector}></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
