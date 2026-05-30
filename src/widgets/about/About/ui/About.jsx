import React from 'react';
import styles from './About.module.css';

import panelAfter from '../../../../assets/panel_after.png';
import heroImg from '../../../../assets/hero.png';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>About Tempelor</span>
          <h2 className={styles.title}>Precision. Safety. Innovation.</h2>
        </div>

        <div className={styles.bentoGrid}>
          {/* Card 1: Large Text (2x2) */}
          <div className={`${styles.card} ${styles.textCard} ${styles.span2x2}`}>
            <h3 className={styles.cardTitle}>Who We Are</h3>
            <p className={styles.cardDesc}>
              Tempelor is a premier electrical contractor dedicated to redefining residential power systems.
              With a deep understanding of both traditional engineering and cutting-edge smart home technology,
              we bridge the gap between robust infrastructure and modern convenience. <br /><br />
              Every wire we run, every panel we install is a testament to our commitment to absolute
              perfection and uncompromising safety standards.
            </p>
          </div>

          {/* Card 2: Image (1x2) */}
          <div className={`${styles.card} ${styles.imageCard} ${styles.span1x2}`}>
            <img src={panelAfter} alt="Modern Electrical Panel" />
          </div>

          {/* Card 3: Small Stat (1x1) */}
          <div className={`${styles.card} ${styles.textCard} ${styles.span1x1}`}>
            <div className={styles.statValue}>15+</div>
            <div className={styles.statLabel}>Years Experience</div>
          </div>

          {/* Card 4: Small Stat (1x1) */}
          <div className={`${styles.card} ${styles.textCard} ${styles.span1x1}`}>
            <div className={styles.statValue}>500+</div>
            <div className={styles.statLabel}>Projects Completed</div>
          </div>

          {/* Card 5: Image Wide (2x1) */}
          <div className={`${styles.card} ${styles.imageCard} ${styles.span2x1}`}>
            <img src={heroImg} alt="Smart Home Integration" />
          </div>

          {/* Card 6: Wide Text (2x1) */}
          <div className={`${styles.card} ${styles.textCard} ${styles.span2x1}`}>
            <h3 className={styles.cardTitle} style={{ marginBottom: '8px' }}>100% Certified & Insured</h3>
            <p className={styles.cardDesc}>
              Fully licensed professionals compliant with all state and federal electrical codes.
              Your peace of mind is our highest priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
