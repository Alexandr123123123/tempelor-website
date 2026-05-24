import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Projects.module.css';

import beforeImg from '../../../../assets/panel_before.png';
import afterImg from '../../../../assets/panel_after.png';
import heroImg from '../../../../assets/hero.png';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

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

  const projects = [
    {
      id: 'villa-oak',
      label: 'Villa Oak',
      year: '2024',
      location: 'Beverly Hills, CA',
      title: 'Full Estate Rewiring',
      desc: 'Complete rewiring of a 6,000 sq ft luxury estate. Replaced all outdated knob-and-tube wiring, installed a 400A smart panel, EV charging stations, and a whole-home surge protection system.',
      tags: ['Rewiring', 'Smart Panel', 'EV Charging'],
      photos: [afterImg, beforeImg, heroImg],
    },
    {
      id: 'penthouse-m',
      label: 'Penthouse M',
      year: '2024',
      location: 'Manhattan, NY',
      title: 'Smart Home Integration',
      desc: 'Seamless smart home installation across a 3,200 sq ft penthouse. Full Lutron lighting automation, voice-integrated climate control, and a custom network infrastructure with Cat6A throughout.',
      tags: ['Smart Home', 'Lighting', 'Network'],
      photos: [heroImg, afterImg, beforeImg],
    },
    {
      id: 'coastal-retreat',
      label: 'Coastal Retreat',
      year: '2023',
      location: 'Malibu, CA',
      title: 'Panel Upgrade & Solar Tie-in',
      desc: 'Upgraded a 200A panel to a 320A smart breaker system and integrated a 24kW solar array with battery backup. Custom landscape lighting design for the oceanfront property.',
      tags: ['Panel Upgrade', 'Solar', 'Landscape Lighting'],
      photos: [beforeImg, heroImg, afterImg],
    },
    {
      id: 'sky-loft',
      label: 'Sky Loft',
      year: '2023',
      location: 'Chicago, IL',
      title: 'Industrial Loft Conversion',
      desc: 'Transformed a raw industrial space into a modern loft. Custom exposed conduit routing, designer lighting installation, and a fully automated smart environment with integrated security.',
      tags: ['Commercial', 'Lighting Design', 'Automation'],
      photos: [afterImg, heroImg, beforeImg],
    },
    {
      id: 'highland-manor',
      label: 'Highland Manor',
      year: '2023',
      location: 'Austin, TX',
      title: 'Historic Home Modernization',
      desc: 'Carefully modernized a 1920s historic manor while preserving its architectural integrity. All new grounding, AFCI/GFCI protection, and a concealed smart panel matching the home\'s aesthetic.',
      tags: ['Rewiring', 'Code Compliance', 'AFCI/GFCI'],
      photos: [heroImg, beforeImg, afterImg],
    },
  ];

  const active = projects[activeProject];

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
          <span className={styles.accentSlash}>//</span> Portfolio
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
              {/* Card 1: Project description */}
              <motion.div className={styles.descCard} variants={itemVariants}>
                <div className={styles.descYear}>{active.year}</div>
                <div className={styles.descLocation}>{active.location}</div>
                <h3 className={styles.descTitle}>{active.title}</h3>
                <p className={styles.descText}>{active.desc}</p>
                <div className={styles.tags}>
                  {active.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <a href="#contact" className={styles.descCta}>Request similar →</a>
              </motion.div>

              {/* Cards 2-4: Photos */}
              {active.photos.map((photo, idx) => (
                <motion.div key={idx} className={styles.photoCard} variants={itemVariants}>
                  <img src={photo} alt={`${active.title} photo ${idx + 1}`} className={styles.photo} />
                </motion.div>
              ))}
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
          <div className={styles.bannerLeft}>
            <div className={styles.bannerIcon}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="7" height="7" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
                <rect x="14" y="3" width="7" height="7" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
                <rect x="3" y="14" width="7" height="7" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
                <rect x="14" y="14" width="7" height="7" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
              </svg>
            </div>
            <div className={styles.bannerInfo}>
              <h4 className={styles.bannerTitle}>Tempelor Portfolio</h4>
              <p className={styles.bannerSubtitle}>{projects.length} featured projects</p>
            </div>
          </div>

          <div className={styles.bannerMiddle}>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`${styles.bannerItem} ${activeProject === index ? styles.activeBannerItem : ''}`}
                onClick={() => setActiveProject(index)}
              >
                <span className={styles.bannerItemLabel}>{project.label}</span>
                <span className={styles.bannerItemYear}>{project.year}</span>
              </div>
            ))}
          </div>

          <div className={styles.bannerRight}>
            <motion.a
              href="#contact"
              className={styles.bannerBtn}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Start a Project (→)
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
