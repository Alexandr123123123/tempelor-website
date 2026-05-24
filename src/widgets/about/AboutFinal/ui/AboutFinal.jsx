import React from 'react';
import styles from './AboutFinal.module.css';

import panelAfter from '../../../../assets/panel_after.png';
import heroImg from '../../../../assets/hero.png';

const AboutFinal = () => {
  return (
    <section className={styles.about} id="about-final">
      <div className={styles.container}>
        <div className={`${styles.card} ${styles.textCard} ${styles.headerCard}`}>
          <span className={styles.label}>
            <span className={styles.accentSlash}>//</span> About Tempelor 1
          </span>
          <h2 className={styles.title}>Precision. Safety. Innovation.</h2>
        </div>
      </div>

      <div className={styles.chaoticContainer}>
        {/* Card 1 */}
        <div 
          className={`${styles.card} ${styles.textCard} ${styles.card1}`}
          style={{
            transform: 'translate(582px, 210px) rotate(0deg)',
            '--hover-transform': 'translate(582px, 210px) rotate(0deg)',
            zIndex: 2,
            width: 400,
            height: 220
          }}
        >
          <h3 className={styles.cardTitle}>Who We Are</h3>
          <p className={styles.cardDesc}>
            Premier electrical contractor redefining residential power systems with modern tech.
          </p>
        </div>

        {/* Card 2 */}
        <div 
          className={`${styles.card} ${styles.imageCard} ${styles.card2}`}
          style={{
            transform: 'translate(69px, -194px) rotate(3deg)',
            '--hover-transform': 'translate(69px, -194px) rotate(3deg)',
            zIndex: 1,
            width: 460,
            height: 520
          }}
        >
          <img src={panelAfter} alt="Modern Electrical Panel" />
        </div>

        {/* Card 3 */}
        <div 
          className={`${styles.card} ${styles.textCard} ${styles.card3}`}
          style={{
            transform: 'translate(-50px, -480px) rotate(0deg)',
            '--hover-transform': 'translate(-50px, -480px) rotate(0deg)',
            zIndex: 5,
            width: 190,
            height: 180
          }}
        >
          <div className={styles.statValue}>15+</div>
          <div className={styles.statLabel}>Years Experience</div>
        </div>

        {/* Card 4 (snapped right) */}
        <div 
          className={`${styles.card} ${styles.textCard} ${styles.card4}`}
          style={{
            transform: 'translate(0px, -249px) rotate(0deg)',
            '--hover-transform': 'translate(0px, -249px) rotate(0deg)',
            zIndex: 1,
            width: 280,
            height: 220,
            left: 'auto',
            right: 0,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
          }}
        >
          <div className={styles.statValue}>500+</div>
          <div className={styles.statLabel}>Projects Done</div>
        </div>

        {/* Card 5 */}
        <div 
          className={`${styles.card} ${styles.imageCard} ${styles.card5}`}
          style={{
            transform: 'translate(-693px, 17px) rotate(-5deg)',
            '--hover-transform': 'translate(-693px, 17px) rotate(-5deg)',
            zIndex: 1,
            width: 320,
            height: 220
          }}
        >
          <img src={heroImg} alt="Smart Home" />
        </div>

        {/* Card 6 */}
        <div 
          className={`${styles.card} ${styles.textCard} ${styles.card6}`}
          style={{
            transform: 'translate(272px, -220px) rotate(0deg)',
            '--hover-transform': 'translate(272px, -220px) rotate(0deg)',
            zIndex: 1,
            width: 360,
            height: 300
          }}
        >
          <h3 className={styles.cardTitle}>100% Certified</h3>
          <p className={styles.cardDesc}>
            Fully licensed professionals compliant with all electrical codes.
          </p>
        </div>

        {/* Extra Card 1 (Photo, snapped left) */}
        <div 
          className={`${styles.card} ${styles.imageCard} ${styles.extraCard}`}
          style={{
            transform: 'translate(0px, -298px) rotate(0deg)',
            '--hover-transform': 'translate(0px, -298px) rotate(0deg)',
            zIndex: 1,
            width: 260,
            height: 260,
            left: 0,
            right: 'auto',
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          }}
        >
          <img src={panelAfter} alt="Extra Photo 1" />
        </div>

        {/* Extra Card 2 (Photo) */}
        <div 
          className={`${styles.card} ${styles.imageCard} ${styles.extraCard}`}
          style={{
            transform: 'translate(469px, -169px) rotate(0deg)',
            '--hover-transform': 'translate(469px, -169px) rotate(0deg)',
            zIndex: 1,
            width: 200,
            height: 200
          }}
        >
          <img src={heroImg} alt="Extra Photo 2" />
        </div>

      </div>
    </section>
  );
};

export default AboutFinal;
