import React from 'react';
import { motion } from 'framer-motion';
import beforeImg from '../../../../assets/panel_before.png';
import afterImg from '../../../../assets/panel_after.png';
import styles from './Projects.module.css';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.projects} id="portfolio">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Portfolio</span>
          <h2 className={styles.title}>The Difference is Clear</h2>
          <p className={styles.subtitle}>
            See the transformation. We take chaotic, unsafe, and outdated electrical 
            setups and turn them into meticulously organized, modern systems.
          </p>
        </motion.div>

        <motion.div 
          className={styles.comparisonWrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className={styles.imageCard} variants={itemVariants}>
            <div className={styles.badge}>Before</div>
            <img src={beforeImg} alt="Old messy electrical panel" />
            <div className={styles.desc}>
              <h3>Outdated & Unsafe</h3>
              <p>Tangled wires, obsolete breakers, and fire hazards typical in older homes.</p>
            </div>
          </motion.div>

          <motion.div className={styles.vs} variants={itemVariants}>
            <div className={styles.vsLine}></div>
            <div className={styles.vsCircle}>VS</div>
            <div className={styles.vsLine}></div>
          </motion.div>

          <motion.div className={`${styles.imageCard} ${styles.afterCard}`} variants={itemVariants}>
            <div className={`${styles.badge} ${styles.afterBadge}`}>After</div>
            <img src={afterImg} alt="Modern organized smart electrical panel" />
            <div className={styles.desc}>
              <h3>Premium & Organized</h3>
              <p>Smart breakers, perfect routing, and labeled systems ensuring total safety.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
