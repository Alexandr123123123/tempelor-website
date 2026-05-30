import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { t } = useTranslation();
  const reviewsList = [
    {
      name: "Arthur De Smet",
      role: t("reviews.r1.role"),
      text: t("reviews.r1.text")
    },
    {
      name: "Sophie Van den Berghe",
      role: t("reviews.r2.role"),
      text: t("reviews.r2.text")
    },
    {
      name: "Laurent Dubois",
      role: t("reviews.r3.role"),
      text: t("reviews.r3.text")
    }
  ];

  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth > 1200 : true);
  const [isTablet, setIsTablet] = useState(typeof window !== 'undefined' ? window.innerWidth > 768 && window.innerWidth <= 1200 : false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);

  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  const totalItems = reviewsList.length;
  
  // Infinite slider logic
  const extendedReviews = [...reviewsList, ...reviewsList, ...reviewsList];
  const startIndex = totalItems;
  const [activeIndex, setActiveIndex] = useState(startIndex);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setIsDesktop(w > 1200);
      setIsTablet(w > 768 && w <= 1200);
      setIsMobile(w <= 768);

      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    
    // Initial measurement
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ensure width is measured when switching from desktop to mobile/tablet
  useEffect(() => {
    if (!isDesktop && containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, [isDesktop]);

  // Reset index when breakpoint changes
  useEffect(() => {
    setActiveIndex(startIndex);
  }, [isTablet, isMobile, isDesktop, startIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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

  const handleDotClick = (index) => {
    if (isAnimating) return;
    setActiveIndex(startIndex + index);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => prev - 1);
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
    
    // Seamless jump
    if (activeIndex >= startIndex + totalItems) {
      setActiveIndex(activeIndex - totalItems);
    } else if (activeIndex < startIndex) {
      setActiveIndex(activeIndex + totalItems);
    }
  };

  const visibleItems = isTablet ? 2.08 : (isMobile ? 1.04 : 3);
  const slideWidth = containerWidth / visibleItems;
  
  const numFullCards = isTablet ? 2 : (isMobile ? 1 : 3);
  const trackOffset = isDesktop ? 0 : (containerWidth - (numFullCards * slideWidth)) / 2;

  return (
    <section className={styles.reviews} id="reviews">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <div className={styles.label}>
            <span className={styles.accentSlash}>//</span> {t("reviews.label")}
          </div>
          <h2 className={styles.title}>{t("reviews.title")}</h2>
        </motion.div>

        {isDesktop ? (
          <motion.div 
            className={styles.grid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {reviewsList.map((review, index) => (
              <motion.div key={index} className={styles.card} variants={itemVariants}>
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.text}>{review.text}</p>
                <div className={styles.author}>
                  <div className={styles.avatar}>{review.name.charAt(0)}</div>
                  <div className={styles.authorInfo}>
                    <div className={styles.name}>{review.name}</div>
                    <div className={styles.role}>{review.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className={styles.sliderWrapper}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.sliderMain}>
              <button 
                className={`${styles.navBtn} ${styles.prevBtn}`} 
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>

              <div className={styles.sliderContainer} ref={containerRef}>
                  <motion.div 
                  className={styles.sliderTrack}
                  style={{ gap: 0 }}
                  animate={{ x: -activeIndex * slideWidth + trackOffset }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 300, 
                    damping: 30,
                    duration: isAnimating ? undefined : 0
                  }}
                  onAnimationComplete={handleAnimationComplete}
                >
                  {extendedReviews.map((review, index) => (
                    <div 
                      key={index} 
                      className={`${styles.slide} ${isTablet ? styles.tabletSlide : styles.mobileSlide}`} 
                      style={{ width: slideWidth, flex: `0 0 ${slideWidth}px` }}
                    >
                      <div className={styles.card}>
                        <div className={styles.quoteIcon}>"</div>
                        <p className={styles.text}>{review.text}</p>
                        <div className={styles.author}>
                          <div className={styles.avatar}>{review.name.charAt(0)}</div>
                          <div className={styles.authorInfo}>
                            <div className={styles.name}>{review.name}</div>
                            <div className={styles.role}>{review.role}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <button 
                className={`${styles.navBtn} ${styles.nextBtn}`} 
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>

            <div className={styles.pagination}>
              {reviewsList.map((_, idx) => (
                <button 
                  key={idx} 
                  className={`${styles.dot} ${idx === (activeIndex % totalItems) ? styles.dotActive : ''}`}
                  onClick={() => handleDotClick(idx)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Reviews;
