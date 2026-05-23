import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const stats = [
    {
      title: "10+ Years",
      desc: "Of premium industry experience delivering high-end residential solutions."
    },
    {
      title: "500+ Projects",
      desc: "Successfully completed smart homes and electrical installations."
    },
    {
      title: "100% Certified",
      desc: "Fully licensed, insured, and compliant with state and federal codes."
    }
  ];

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <span className={styles.label}>About Us</span>
          <h2 className={styles.title}>Expertise You Can Trust</h2>
          <p className={styles.subtitle}>
            We specialize in advanced electrical systems, smart home integrations, 
            and architectural lighting for modern luxury homes. Our mission is to 
            provide safe, efficient, and aesthetic energy solutions.
          </p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} className={styles.card} variants={itemVariants}>
              <h3 className={styles.statTitle}>{stat.title}</h3>
              <p className={styles.statDesc}>{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
