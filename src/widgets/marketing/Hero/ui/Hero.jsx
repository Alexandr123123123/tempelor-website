import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import heroImg from '../../../../assets/hero.png';
import { Button } from '../../../../shared/ui/Button';
import { useBookingModal } from '../../../../app/providers/BookingModalProvider';
import styles from './Hero.module.css';

export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useBookingModal();
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'fr';
  const navigate = useNavigate();
  const location = useLocation();

  const handleLangChange = (newLang) => {
    const pathParts = location.pathname.split('/');
    if (pathParts.length > 1 && ['fr', 'nl', 'en'].includes(pathParts[1])) {
      pathParts[1] = newLang;
      navigate(pathParts.join('/') + location.search + location.hash);
    } else {
      navigate(`/${newLang}` + location.search + location.hash);
    }
  };

  const getLangClass = (l) => `${styles.langItem} ${lang === l ? styles.langActive : ''}`;

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

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Link to={`/${lang}`} className={styles.logo} style={{textDecoration: 'none'}}>
            <div className={styles.logoIcon}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            Tempelor
          </Link>
          <div className={styles.rightNav}>
            <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
              <a href={`/${lang}/#about-final`} className={styles.navLink} onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</a>
              <a href={`/${lang}/#services`} className={styles.navLink} onClick={() => setIsMenuOpen(false)}>{t('nav.services')}</a>
              <a href={`/${lang}/#contact`} className={styles.navLink} onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</a>
            </div>
            <div className={styles.langSwitcher}>
              <span className={getLangClass('fr')} onClick={() => handleLangChange('fr')}>FR</span>
              <span className={styles.langSep}>/</span>
              <span className={getLangClass('nl')} onClick={() => handleLangChange('nl')}>NL</span>
              <span className={styles.langSep}>/</span>
              <span className={getLangClass('en')} onClick={() => handleLangChange('en')}>EN</span>
            </div>
            <button 
              className={`${styles.burgerBtn} ${isMenuOpen ? styles.open : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
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
            <span className={styles.accentSlash}>//</span> {t('hero.label')}
          </motion.span>
          <motion.div className={styles.glassPanel} variants={itemVariants}>
            <motion.h1 className={styles.title} variants={itemVariants}>
              {t('hero.title')}
            </motion.h1>
            <motion.p className={styles.desc} variants={itemVariants}>
              {t('hero.desc')}
            </motion.p>
          </motion.div>

          <motion.div className={styles.actions} variants={itemVariants}>
            <Button 
              as="button"
              onClick={openModal}
              className={styles.glassBtnPrimary}
            >
              {t('hero.ctaPrimary')}
            </Button>
            <Button href={`/${lang}/#services`} className={styles.glassBtnSecondary}>{t('hero.ctaSecondary')}</Button>
          </motion.div>
        </motion.div>
      </div>
      </section>
    </>
  );
};

export default Hero;
