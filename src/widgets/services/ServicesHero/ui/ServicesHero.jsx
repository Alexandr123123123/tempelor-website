import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import styles from './ServicesHero.module.css';

export const ServicesHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Link to="/" className={styles.logo} style={{textDecoration: 'none'}}>
            <div className={styles.logoIcon}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            Tempelor
          </Link>
          <div className={styles.navLinks}>
            <Link to="/#about1" className={styles.navLink}>About</Link>
            <Link to="/services" className={styles.navLink}>Services</Link>
            <Link to="/#contact" className={styles.navLink}>Contact</Link>
          </div>
        </div>
      </nav>
      <section className={styles.hero} id="services-hero">
        <div className={styles.bgGlow1} />
        <div className={styles.bgGlow2} />
        <div className={styles.bgGlow3} />
        <div className={styles.bgGlow4} />
        <div className={styles.bgGlow5} />
        <div className={styles.container}>
          <div className={styles.heroLayout}>
            <motion.div 
              className={styles.contentWrapper}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.span className={styles.label} variants={itemVariants}>
                <span className={styles.accentSlash}>//</span> Expertise
              </motion.span>
              
              <motion.div className={styles.content} variants={itemVariants}>
                <h1 className={styles.title}>
                  Our Premium Services
                </h1>
                
                <p className={styles.desc}>
                  From complete electrical wiring and smart home integration to solar panels and EV charging. We deliver top-tier solutions tailored to your needs.
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              className={styles.photosWrapper}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <img src="/hero_photo_1.png" alt="Modern Home" className={styles.photo1} />
              <img src="/hero_photo_2.png" alt="Smart Home Panel" className={styles.photo2} />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
