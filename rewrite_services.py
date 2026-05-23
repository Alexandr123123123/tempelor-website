import re

with open('C:/Users/a4674/OneDrive/Desktop/tempelor/src/widgets/services/Services/ui/Services.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("import React from 'react';", "import React, { useState } from 'react';")

new_data = """  const [activeCategory, setActiveCategory] = useState(0);

  const categoriesData = [
    {
      id: "rewiring",
      label: "Rewiring",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
        </svg>
      ),
      cards: [
        { id: 1, title: "Whole House Wiring", desc: "Complete electrical system design and installation from the ground up for luxury homes.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 2, title: "Partial Rewiring", desc: "Targeted updates to outdated or unsafe wiring sections without major disruption.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><polyline points="16 6 12 2 8 6" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="12" y1="2" x2="12" y2="15" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 3, title: "Code Upgrades", desc: "Bringing old electrical systems fully up to modern safety standards and building codes.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> }
      ]
    },
    {
      id: "panel",
      label: "Panel Upgrades",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
          <path d="M9 3v18M15 3v18" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
          <path d="M9 9h6M9 15h6" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
        </svg>
      ),
      cards: [
        { id: 1, title: "Main Breakers", desc: "Upgrading your main service panel for increased capacity, safety, and reliability.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><path d="M9 3v18M15 3v18" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><path d="M9 9h6M9 15h6" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 2, title: "Subpanels", desc: "Adding new subpanels for extensions, garages, or dedicated high-draw circuits.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="4" width="14" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="8" y1="9" x2="16" y2="9" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="8" y1="13" x2="16" y2="13" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 3, title: "Smart Panels", desc: "Installation of next-generation electrical panels with advanced energy monitoring.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> }
      ]
    },
    {
      id: "lighting",
      label: "Lighting",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18h6v1H9zM9 21h6v1H9zM12 2a6 6 0 0 0-6 6c0 4 3 5 3 8h6c0-3 3-4 3-8a6 6 0 0 0-6-6z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
        </svg>
      ),
      cards: [
        { id: 1, title: "Interior Lighting", desc: "Recessed lights, custom chandeliers, and beautiful architectural illumination.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18h6v1H9zM9 21h6v1H9zM12 2a6 6 0 0 0-6 6c0 4 3 5 3 8h6c0-3 3-4 3-8a6 6 0 0 0-6-6z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 2, title: "Landscape Lighting", desc: "Premium exterior security lights, pathway illumination, and facade highlighting.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 3, title: "LED Upgrades", desc: "Complete energy-efficient LED retrofitting tailored for your entire property.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> }
      ]
    },
    {
      id: "outlets",
      label: "Outlets",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="4" width="12" height="16" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
          <circle cx="12" cy="10" r="1.5" fill="currentColor" stroke="none"/>
          <circle cx="12" cy="15" r="1.5" fill="currentColor" stroke="none"/>
        </svg>
      ),
      cards: [
        { id: 1, title: "New Receptacles", desc: "Adding convenient and safe power access exactly where you need it most.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="4" width="12" height="16" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><circle cx="12" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="15" r="1.5" fill="currentColor" stroke="none"/></svg> },
        { id: 2, title: "Smart Outlets", desc: "Modernizing your home with built-in USB/Type-C and Wi-Fi enabled outlets.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 3, title: "High Voltage", desc: "Dedicated high-amperage lines for heavy appliances, welders, or hot tubs.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> }
      ]
    },
    {
      id: "protection",
      label: "Protection",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
        </svg>
      ),
      cards: [
        { id: 1, title: "Surge Protection", desc: "Whole-house surge arresters to protect expensive electronics from spikes.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 2, title: "Grounding Systems", desc: "Ensuring proper earth grounding for total safety and absolute code compliance.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="4" x2="12" y2="12" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="8" y1="16" x2="16" y2="16" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="10" y1="20" x2="14" y2="20" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 3, title: "AFCI/GFCI Breakers", desc: "Advanced arc-fault and ground-fault circuit interrupters for critical areas.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="12" y1="8" x2="12" y2="12" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="12" y1="16" x2="12.01" y2="16" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="2" stroke="currentColor"/></svg> }
      ]
    },
    {
      id: "smart",
      label: "Smart Home",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
          <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
        </svg>
      ),
      cards: [
        { id: 1, title: "Automated Controls", desc: "Centralized smart systems for lighting, climate, and seamless security management.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 2, title: "Voice Integration", desc: "Flawless setup and synchronization with Alexa, Google Home, or Apple HomeKit.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><path d="M19 10v2a7 7 0 0 1-14 0v-2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="12" y1="19" x2="12" y2="22" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 3, title: "Network Wiring", desc: "Robust Wi-Fi mesh systems and hardwired Ethernet for reliable connectivity.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> }
      ]
    },
    {
      id: "ev",
      label: "EV Charging",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
        </svg>
      ),
      cards: [
        { id: 1, title: "Level 2 Chargers", desc: "Fast and reliable home charging stations compatible with all electric vehicles.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 2, title: "Load Management", desc: "Smart distribution systems to balance the charging load with your home's capacity.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><path d="M9 3v18M15 3v18" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><path d="M9 9h6M9 15h6" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 3, title: "Custom Routing", desc: "Clean, professional, and completely hidden cable runs to your preferred parking spot.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> }
      ]
    }
  ];"""

content = re.sub(r'const servicesList = \[.*?\];', new_data, content, flags=re.DOTALL)

old_grid = """        <motion.div 
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {servicesList.map((service) => (
            <motion.div key={service.id} className={styles.card} variants={itemVariants}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.desc}</p>
              <a href="#contact" className={styles.learnMore}>Learn more →</a>
            </motion.div>
          ))}
        </motion.div>"""

new_grid = """        <motion.div 
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          key={activeCategory} /* Force re-render animation when category changes */
        >
          {categoriesData[activeCategory].cards.map((card) => (
            <motion.div key={card.id} className={styles.card} variants={itemVariants}>
              <div className={styles.iconWrapper}>
                {card.icon}
              </div>
              <h3 className={styles.serviceTitle}>{card.title}</h3>
              <p className={styles.serviceDesc}>{card.desc}</p>
              <a href="#contact" className={styles.learnMore}>Learn more →</a>
            </motion.div>
          ))}
        </motion.div>"""

content = content.replace(old_grid, new_grid)

old_banner_middle = """          <div className={styles.bannerMiddle}>
            <div className={styles.bannerItem}>
              <div className={styles.bannerItemIcon}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
                </svg>
              </div>
              <span className={styles.bannerItemLabel}>Rewiring</span>
            </div>

            <div className={styles.bannerItem}>
              <div className={styles.bannerItemIcon}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
                  <path d="M9 3v18M15 3v18" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
                  <path d="M9 9h6M9 15h6" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
                </svg>
              </div>
              <span className={styles.bannerItemLabel}>Panel Upgrades</span>
            </div>

            <div className={styles.bannerItem}>
              <div className={styles.bannerItemIcon}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18h6v1H9zM9 21h6v1H9zM12 2a6 6 0 0 0-6 6c0 4 3 5 3 8h6c0-3 3-4 3-8a6 6 0 0 0-6-6z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
                </svg>
              </div>
              <span className={styles.bannerItemLabel}>Lighting</span>
            </div>

            <div className={styles.bannerItem}>
              <div className={styles.bannerItemIcon}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="4" width="12" height="16" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
                  <circle cx="12" cy="10" r="1.5" fill="currentColor" stroke="none"/>
                  <circle cx="12" cy="15" r="1.5" fill="currentColor" stroke="none"/>
                </svg>
              </div>
              <span className={styles.bannerItemLabel}>Outlets</span>
            </div>

            <div className={styles.bannerItem}>
              <div className={styles.bannerItemIcon}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
                </svg>
              </div>
              <span className={styles.bannerItemLabel}>Protection</span>
            </div>

            <div className={styles.bannerItem}>
              <div className={styles.bannerItemIcon}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
                  <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
                </svg>
              </div>
              <span className={styles.bannerItemLabel}>Smart Home</span>
            </div>

            <div className={styles.bannerItem}>
              <div className={styles.bannerItemIcon}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
                </svg>
              </div>
              <span className={styles.bannerItemLabel}>EV Charging</span>
            </div>
          </div>"""

new_banner_middle = """          <div className={styles.bannerMiddle}>
            {categoriesData.map((category, index) => (
              <div 
                key={category.id} 
                className={`${styles.bannerItem} ${activeCategory === index ? styles.activeBannerItem : ''}`}
                onClick={() => setActiveCategory(index)}
                style={{ cursor: 'pointer' }}
              >
                <div className={styles.bannerItemIcon}>
                  {category.icon}
                </div>
                <span className={styles.bannerItemLabel}>{category.label}</span>
              </div>
            ))}
          </div>"""

content = content.replace(old_banner_middle, new_banner_middle)

with open('C:/Users/a4674/OneDrive/Desktop/tempelor/src/widgets/services/Services/ui/Services.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
