import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useBookingModal } from '../../../../app/providers/BookingModalProvider';
import styles from './Projects.module.css';

import beforeImg from '../../../../assets/panel_before.png';
import afterImg from '../../../../assets/panel_after.png';
import heroImg from '../../../../assets/hero.png';

const projectsData = [
  {
    id: 'boudewijn',
    label: 'Boudewijn',
    year: '2024',
    location: 'Boudewijn',
    title: 'Project Boudewijn',
    desc: 'Complete electrical installation and smart home integration for the Boudewijn project. We ensured maximum safety and flawless aesthetic integration.',
    tags: ['Installation', 'Smart Home'],
    photos: Array.from({ length: 12 }, (_, i) => `${import.meta.env.BASE_URL}project/Boudewijn/${i + 1}.jpg`),
  },
  {
    id: 'edegem',
    label: 'Edegem',
    year: '2023',
    location: 'Edegem',
    title: 'Project Edegem',
    desc: 'Modernization of electrical systems and custom lighting design.',
    tags: ['Modernization', 'Lighting'],
    photos: Array.from({ length: 7 }, (_, i) => `${import.meta.env.BASE_URL}project/Edegem/${i + 1}.jpg`),
  },
  {
    id: 'heideland',
    label: 'Heideland',
    year: '2023',
    location: 'Heideland',
    title: 'Project Heideland',
    desc: 'Full residential rewiring and safety upgrades.',
    tags: ['Rewiring', 'Safety'],
    photos: Array.from({ length: 5 }, (_, i) => `${import.meta.env.BASE_URL}project/Heideland/${i + 1}.jpg`),
  },
  {
    id: 'laureysstraat',
    label: 'Laureysstraat',
    year: '2024',
    location: 'Laureysstraat',
    title: 'Project Laureysstraat',
    desc: 'Advanced panel upgrades and exterior lighting.',
    tags: ['Panel Upgrade', 'Exterior'],
    photos: Array.from({ length: 4 }, (_, i) => `${import.meta.env.BASE_URL}project/Laureysstraat/${i + 1}.jpg`),
  },
  {
    id: 'leksklyuze',
    label: 'Leksklyuze',
    year: '2023',
    location: 'Leksklyuze',
    title: 'Project Leksklyuze',
    desc: 'Smart climate control and network infrastructure.',
    tags: ['Network', 'Automation'],
    photos: Array.from({ length: 7 }, (_, i) => `${import.meta.env.BASE_URL}project/Leksklyuze/${i + 1}.jpg`),
  },
  {
    id: 'oogststraat',
    label: 'Oogststraat',
    year: '2024',
    location: 'Oogststraat',
    title: 'Project Oogststraat',
    desc: 'Comprehensive energy management and solar integration.',
    tags: ['Solar', 'Energy'],
    photos: Array.from({ length: 6 }, (_, i) => `${import.meta.env.BASE_URL}project/Oogststraat/${i + 1}.jpg`),
  },
  {
    id: 'potter',
    label: 'Potter',
    year: '2023',
    location: 'Potter',
    title: 'Project Potter',
    desc: 'Industrial style residential electrical setup and custom routing.',
    tags: ['Industrial', 'Routing'],
    photos: Array.from({ length: 11 }, (_, i) => `${import.meta.env.BASE_URL}project/Potter/${i + 1}.jpg`),
  },
  {
    id: 'spoorweglaan',
    label: 'Spoorweglaan',
    year: '2024',
    location: 'Spoorweglaan',
    title: 'Project Spoorweglaan',
    desc: 'Luxury estate electrical foundation and security systems.',
    tags: ['Security', 'Luxury Estate'],
    photos: Array.from({ length: 5 }, (_, i) => `${import.meta.env.BASE_URL}project/Spoorweglaan/${i + 1}.jpg`),
  }
];

const Projects = () => {
  const { t } = useTranslation();
  const { openModal } = useBookingModal();
  const [activeProject, setActiveProject] = useState(0);
  const active = projectsData[activeProject];
  const START_OFFSET = active.photos.length * 10; // Dynamically set to multiple of array length
  const [photoOffset, setPhotoOffset] = useState(START_OFFSET);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [bannerStartIndex, setBannerStartIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const middleRef = useRef(null);
  const hiddenMeasureRef = useRef(null);
  const [itemWidths, setItemWidths] = useState([]);
  const [middleWidth, setMiddleWidth] = useState(0);
  const [maxTextHeight, setMaxTextHeight] = useState('auto');
  const textObserverRef = useRef(null);

  const textMeasurerCallback = (node) => {
    if (textObserverRef.current) {
      textObserverRef.current.disconnect();
      textObserverRef.current = null;
    }
    
    if (node) {
      const updateHeight = () => {
        if (window.innerWidth <= 600) {
          const textBlocks = Array.from(node.querySelectorAll(`.${styles.descCard}`));
          let maxH = 0;
          textBlocks.forEach(block => {
            block.style.height = 'auto'; // reset
            const h = block.getBoundingClientRect().height;
            if (h > maxH) maxH = h;
          });
          setMaxTextHeight(maxH > 0 ? `${maxH}px` : 'auto');
        } else {
          setMaxTextHeight('auto');
        }
      };

      textObserverRef.current = new ResizeObserver(() => {
        updateHeight();
      });
      textObserverRef.current.observe(node);
      updateHeight();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (hiddenMeasureRef.current) {
      const children = Array.from(hiddenMeasureRef.current.children);
      const widths = children.map(child => child.offsetWidth);
      setItemWidths(widths);
    }
  }, []);

  useEffect(() => {
    if (!middleRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setMiddleWidth(entry.contentRect.width);
      }
    });
    observer.observe(middleRef.current);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    setPhotoOffset(START_OFFSET);
  }, [activeProject, START_OFFSET]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  // Duplicate photos 20 times to simulate infinite looping
  const extendedPhotos = Array(20).fill(active.photos).flat();

  // Calculate slider shift depending on screen width
  let slidePct = 33.333333;
  let slidePx = 5.333333;

  if (windowWidth <= 1000) {
    slidePct = 100;
    slidePx = 16;
  } else if (windowWidth <= 1100) {
    slidePct = 50;
    slidePx = 8;
  }

  let bannerVisibleCount = 5;
  if (windowWidth < 600) {
    bannerVisibleCount = 2;
  } else if (windowWidth < 900) {
    bannerVisibleCount = 3;
  } else if (windowWidth < 1200) {
    bannerVisibleCount = 4;
  }

  // Dynamic override
  if (itemWidths.length === projectsData.length && middleWidth > 0) {
    const availableWidth = middleWidth - 112; // 112px for arrows and gaps
    let foundN = 1;
    for (let N = projectsData.length; N >= 1; N--) {
      let maxWindowWidth = 0;
      for (let i = 0; i <= projectsData.length - N; i++) {
        let windowWidth = 0;
        for (let j = 0; j < N; j++) {
          windowWidth += itemWidths[i + j];
        }
        windowWidth += (N - 1) * 16;
        if (windowWidth > maxWindowWidth) {
          maxWindowWidth = windowWidth;
        }
      }
      if (maxWindowWidth <= availableWidth) {
        foundN = N;
        break;
      }
    }
    bannerVisibleCount = foundN;
  }

  const nextBanner = () => {
    if (bannerStartIndex + bannerVisibleCount < projectsData.length) {
      setBannerStartIndex(prev => prev + 1);
    }
  };

  const prevBanner = () => {
    if (bannerStartIndex > 0) {
      setBannerStartIndex(prev => prev - 1);
    }
  };

  return (
    <div className={styles.portfolioWrapper}>

      {/* Header — above the dark block */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.label}>
          <span className={styles.accentSlash}>//</span> {t("portfolio.label")}
        </span>
      </motion.div>

      {/* Dark section block */}
      <section className={styles.projects} id="portfolio">
        <div className={styles.container}>

          {/* 4-card grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              className={styles.grid}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
            >
              {/* HIDDEN MEASURER */}
              <div 
                ref={textMeasurerCallback} 
                style={{ position: 'absolute', visibility: 'hidden', pointerEvents: 'none', width: '100%', zIndex: -1, top: 0, left: 0 }}
              >
                {projectsData.map(proj => (
                  <div key={proj.id} className={styles.descCard} style={{ width: '100%' }}>
                    <div className={styles.descYear}>{proj.year}</div>
                    <div className={styles.descLocation}>{proj.location}</div>
                    <h3 className={styles.descTitle}>{t(`portfolio.${proj.id}.title`)}</h3>
                    <p className={styles.descText}>{t(`portfolio.${proj.id}.desc`)}</p>
                    <div className={styles.tags}>
                      <span className={styles.tag}>{t(`portfolio.${proj.id}.tag1`)}</span>
                      <span className={styles.tag}>{t(`portfolio.${proj.id}.tag2`)}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card 1: Project description */}
              <motion.div className={styles.descCard} variants={itemVariants} style={{ height: maxTextHeight !== 'auto' ? maxTextHeight : undefined }}>
                <div className={styles.descYear}>{active.year}</div>
                <div className={styles.descLocation}>{active.location}</div>
                <h3 className={styles.descTitle}>{t(`portfolio.${active.id}.title`)}</h3>
                <p className={styles.descText}>{t(`portfolio.${active.id}.desc`)}</p>
                <div className={styles.tags}>
                  <span className={styles.tag}>{t(`portfolio.${active.id}.tag1`)}</span>
                  <span className={styles.tag}>{t(`portfolio.${active.id}.tag2`)}</span>
                </div>
              </motion.div>

              {/* Cards 2-4: Photos */}
              {/* Cards 2-4: Photos (Slider) */}
              <div className={styles.sliderWindow}>
                <motion.div 
                  className={styles.sliderTrack}
                  initial={false}
                  animate={{ x: `calc(-${photoOffset * slidePct}% - ${photoOffset * slidePx}px)` }}
                  transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }}
                >
                  {extendedPhotos.map((photo, idx) => (
                    <div key={idx} className={styles.sliderSlide}>
                      <div className={styles.photoCard}>
                        <img src={photo} alt={`${active.title} photo ${(idx % active.photos.length) + 1}`} className={styles.photo} />
                      </div>
                    </div>
                  ))}
                </motion.div>

                <button 
                  className={`${styles.sliderBtn} ${styles.prevBtn}`} 
                  onClick={() => setPhotoOffset(prev => prev - 1)}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button 
                  className={`${styles.sliderBtn} ${styles.nextBtn}`} 
                  onClick={() => setPhotoOffset(prev => prev + 1)}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom project switcher banner */}
        <motion.div
          className={styles.banner}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div 
            className={styles.bannerLeft} 
            ref={dropdownRef}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className={`${styles.bannerIcon} ${isDropdownOpen ? styles.iconActive : ''}`}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="7" height="7" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
                <rect x="14" y="3" width="7" height="7" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
                <rect x="14" y="14" width="7" height="7" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
                <rect x="3" y="14" width="7" height="7" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
              </svg>
            </div>
            <div className={styles.bannerInfo}>
              <h4 className={styles.bannerTitle}>{t("portfolio.allProjects")}</h4>
            </div>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  className={styles.dropdownMenu}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={styles.dropdownHeader}>{t("portfolio.selectProject")}</div>
                  <div className={styles.dropdownList}>
                    {projectsData.map((proj, idx) => (
                      <div 
                        key={proj.id} 
                        className={`${styles.dropdownItem} ${activeProject === idx ? styles.dropdownItemActive : ''}`}
                        onClick={() => {
                          setActiveProject(idx);
                          setIsDropdownOpen(false);
                          if (idx < bannerStartIndex || idx >= bannerStartIndex + bannerVisibleCount) {
                            setBannerStartIndex(Math.max(0, Math.min(idx, projectsData.length - bannerVisibleCount)));
                          }
                        }}
                      >
                        {t(`portfolio.${proj.id}.label`)}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className={styles.bannerMiddle} ref={middleRef}>
            <button 
              className={styles.bannerArrow} 
              onClick={prevBanner}
              disabled={bannerStartIndex === 0}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>

            <div className={styles.bannerItemsWrapper}>
              {projectsData.slice(bannerStartIndex, bannerStartIndex + bannerVisibleCount).map((proj, idx) => {
                const globalIndex = bannerStartIndex + idx;
                return (
                  <div 
                    key={proj.id} 
                    className={`${styles.bannerItem} ${activeProject === globalIndex ? styles.activeBannerItem : ''}`}
                    onClick={() => setActiveProject(globalIndex)}
                  >
                    <span className={styles.bannerItemLabel}>{t(`portfolio.${proj.id}.label`)}</span>
                  </div>
                );
              })}
            </div>

            <button 
              className={styles.bannerArrow} 
              onClick={nextBanner}
              disabled={bannerStartIndex + bannerVisibleCount >= projectsData.length}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          <div className={styles.bannerRight}>
            <motion.button 
              onClick={openModal}
              className={styles.bannerBtn}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {t("portfolio.bookConsultation")} (→)
            </motion.button>
          </div>
        </motion.div>
        
        {/* Hidden measurement container */}
        <div 
          ref={hiddenMeasureRef} 
          style={{ position: 'absolute', visibility: 'hidden', opacity: 0, pointerEvents: 'none', display: 'flex', whiteSpace: 'nowrap' }}
        >
          {projectsData.map(proj => (
            <div key={proj.id} className={styles.bannerItem}>
              <span className={styles.bannerItemLabel}>{t(`portfolio.${proj.id}.label`)}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
