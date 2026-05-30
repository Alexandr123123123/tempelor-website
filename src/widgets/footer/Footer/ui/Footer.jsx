import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              TEMP<span className={styles.logoAccent}>ELOR</span>
            </div>
            <p className={styles.desc}>
              Premium residential electrical deployment. We build the invisible foundation of your home.
            </p>
          </div>

          <div className={styles.column}>
            <h4>Navigation</h4>
            <ul className={styles.links}>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#process">How We Work</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#reviews">Reviews</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Services</h4>
            <ul className={styles.links}>
              <li><a href="#">Wiring Setup</a></li>
              <li><a href="#">Panel Upgrades</a></li>
              <li><a href="#">Smart Home</a></li>
              <li><a href="#">Lighting Design</a></li>
              <li><a href="#">Maintenance</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Contact</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>+1 (800) 555-0199</span>
              </div>
              <div className={styles.contactItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>hello@tempelor.com</span>
              </div>
              <div className={styles.contactItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>123 Energy Blvd, Tech District<br/>New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            © {currentYear} Tempelor. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
