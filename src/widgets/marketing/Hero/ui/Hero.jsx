import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImg from '../../../../assets/hero.png';
import { Button } from '../../../../shared/ui/Button';
import { useBookingModal } from '../../../../app/providers/BookingModalProvider';
import styles from './Hero.module.css';

const Hero = () => {
  const { openModal } = useBookingModal();

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

  const particles = React.useMemo(() => Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: `${Math.random() * 10 + 10}s`,
    delay: `${Math.random() * 5}s`,
    size: `${Math.random() * 3 + 2}px`,
  })), []);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
          <button 
            className={`${styles.burgerBtn} ${isMenuOpen ? styles.open : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
            <Link to="/#about1" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/services" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/#contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      </nav>
      <section className={styles.hero} id="hero">
        <div className={styles.bg}>
        <img src={heroImg} alt="Premium electrical panel installation" />
        <div className={styles.overlay}></div>
        <div className={styles.particlesContainer}>
          {particles.map((p) => (
            <div 
              key={p.id}
              className={styles.particle}
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                animationDuration: p.duration,
                animationDelay: p.delay,
              }}
            />
          ))}
        </div>
      </div>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Glowing background blobs removed for now */}

          <motion.span className={styles.label} variants={itemVariants}>
            <span className={styles.accentSlash}>//</span> Electrical Development
          </motion.span>
          <motion.div className={styles.glassPanel} variants={itemVariants}>
            <motion.h1 className={styles.title} variants={itemVariants}>
              Safety and Technology for Your Home
            </motion.h1>
            <motion.p className={styles.desc} variants={itemVariants}>
              Turnkey design and installation of modern power supply systems. 
              Compliance with all safety standards, ensuring reliable performance for years to come.
            </motion.p>
          </motion.div>

          <motion.div className={styles.actions} variants={itemVariants}>
            <Button 
              as="button"
              onClick={openModal}
              className={styles.glassBtnPrimary}
            >
              Book a Consultation
            </Button>
            <Button href="#services" className={styles.glassBtnSecondary}>Our Services</Button>
          </motion.div>
        </motion.div>
      </div>
      </section>
    </>
  );
};

export default Hero;
