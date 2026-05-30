import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBookingModal } from '../../../../app/providers/BookingModalProvider';
import styles from './Services.module.css';

import panelAfter from '../../../../assets/panel_after.png';
import heroImg from '../../../../assets/hero.png';
import switchboardsImg from '../../../../assets/switchboards_img.png';
import residentialWiringImg from '../../../../assets/residential_wiring_img.png';
import smartHomeImg from '../../../../assets/smart_home_img.png';
import lightingImg from '../../../../assets/lighting_img.png';
import backupPowerImg from '../../../../assets/backup_power_img.png';
import heatingClimateImg from '../../../../assets/heating_climate_img.png';
import securityImg from '../../../../assets/security_img.png';
import solarImg from '../../../../assets/solar_img.png';
import evChargingImg from '../../../../assets/ev_charging_img.png';
import spaZonesImg from '../../../../assets/spa_zones_img.png';

const Services = () => {
  const { openModal } = useBookingModal();
  const [activeCategory, setActiveCategory] = useState(0);
  const [bannerStartIndex, setBannerStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);
  const [maxTextHeight, setMaxTextHeight] = useState('auto');
  const observerRef = useRef(null);

  const measurerCallback = (node) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    
    if (node) {
      const updateMaxHeight = () => {
        const children = Array.from(node.children);
        let maxH = 0;
        children.forEach(child => {
          if (child.scrollHeight > maxH) {
            maxH = child.scrollHeight;
          }
        });
        if (maxH > 0) {
          setMaxTextHeight(maxH + 'px');
        }
      };
      
      updateMaxHeight();
      setTimeout(updateMaxHeight, 100);
      setTimeout(updateMaxHeight, 300);
      
      if (window.ResizeObserver) {
        const observer = new ResizeObserver(updateMaxHeight);
        observer.observe(node);
        Array.from(node.children).forEach(c => observer.observe(c));
        observerRef.current = observer;
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 500) {
        setVisibleCount(2);
      } else if (width <= 700) {
        setVisibleCount(3);
      } else if (width <= 800) {
        setVisibleCount(2);
      } else if (width < 1100) {
        setVisibleCount(3);
      } else {
        setVisibleCount(5);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextBanner = () => {
    if (bannerStartIndex + visibleCount < categoriesData.length) {
      setBannerStartIndex(prev => prev + 1);
    }
  };

  const prevBanner = () => {
    if (bannerStartIndex > 0) {
      setBannerStartIndex(prev => prev - 1);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
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

  const categoriesData = [
    {
      id: "wiring",
      label: "Wiring & Cabling",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" y="8" width="10" height="8" rx="3" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
          <path d="M10 8V3M14 8V3M12 16v5" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
        </svg>
      ),
      cards: [
        { id: 1, title: "Rough-in Wiring", desc: "Полная прокладка кабельных трасс по европейским стандартам с учетом всех нагрузок.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 2, title: "Professional Wiring Solutions", desc: "Professional wiring services for projects of any scale. We handle complete electrical distribution: from the main service entrance to the final points for outlets, switches, and networking. We use reliable materials and design the wiring to be easy to maintain.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="4" width="12" height="16" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><circle cx="12" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="15" r="1.5" fill="currentColor" stroke="none"/></svg> },
        { id: 3, title: null, desc: (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '16px', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>System Design</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Cable Routing</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Easy Maintenance</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Precision & Safety</span>
            </div>
          </div>
        ), icon: null }
      ]
    },
    {
      id: "panels",
      label: "Switchboards",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
          <path d="M9 3v18M15 3v18" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
          <path d="M9 9h6M9 15h6" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
        </svg>
      ),
      cards: [
        { id: 1, title: "Professional Switchboard Installations", desc: "Professional switchboard installations designed for modern high-load households. We build meticulously organized panels equipped with advanced protection systems to safeguard your electronics from surges and electrical faults.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><path d="M9 3v18M15 3v18" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><path d="M9 9h6M9 15h6" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 2, title: "Protection Automation", desc: "Image Card (Text ignored)", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="12" y1="8" x2="12" y2="12" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="12" y1="16" x2="12.01" y2="16" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="2" stroke="currentColor"/></svg> },
        { id: 3, title: null, desc: (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '16px', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Advanced Protection</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Smart Integration</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 9h18M9 21V9" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Professional Design</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 3v18M15 3v18" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 9h6M9 15h6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Clean Assembly</span>
            </div>
          </div>
        ), icon: null }
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
        { id: 1, title: "Complete Home Automation", desc: "Complete home automation for effortless control over your environment. We synchronize your lighting, climate systems, and motorized blinds, creating a stable infrastructure that works exactly as you want it to.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 2, title: null, desc: (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '16px', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18h6v1H9zM9 21h6v1H9zM12 2a6 6 0 0 0-6 6c0 4 3 5 3 8h6c0-3 3-4 3-8a6 6 0 0 0-6-6z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Intelligent Lighting</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 12h16" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Precision Climate</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="16" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" strokeLinejoin="round"/><line x1="3" y1="16" x2="21" y2="16" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Automated Shading</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Centralized Control</span>
            </div>
          </div>
        ), icon: null },
        { id: 3, title: "Motorized Systems", desc: "Автоматическое открытие штор, ворот, жалюзи и проекционных экранов.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="16" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="3" y1="16" x2="21" y2="16" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> }
      ]
    },
    {
      id: "lighting",
      label: "Lighting",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
        </svg>
      ),
      cards: [
        { id: 1, title: "Facade Illumination", desc: "Подчеркивание архитектуры дома с помощью всепогодных влагозащищенных светильников.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 2, title: "Premium Lighting Solutions", desc: "Premium lighting solutions tailored to your space. From precise architectural lighting to custom LED profiles and smooth dimming controls, we provide flawless installation that brings modern aesthetics and comfort to your environment.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 3, title: null, desc: (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '16px', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="10" width="18" height="4" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Custom LED Profiles</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18h6v1H9zM9 21h6v1H9zM12 2a6 6 0 0 0-6 6c0 4 3 5 3 8h6c0-3 3-4 3-8a6 6 0 0 0-6-6z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Smart Lighting</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Magnetic Track Systems</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Hidden LED Lighting</span>
            </div>
          </div>
        ), icon: null }
      ]
    },
    {
      id: "power",
      label: "Backup Power",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
        </svg>
      ),
      cards: [
        { id: 1, title: "Professional Power Integration", desc: "Professional integration of independent power sources tailored to your home's energy demands. We provide full-cycle installation of UPS systems and standby generators, guaranteeing stable electricity for your most critical systems.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><path d="M9 3v18M15 3v18" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 2, title: "UPS Systems", desc: "Источники бесперебойного питания для защиты серверов, котлов и умного дома.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 3, title: null, desc: (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '16px', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 3v18M15 3v18" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Standby Generators</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="6" width="20" height="12" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="6" y1="12" x2="6" y2="12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/><line x1="10" y1="12" x2="10" y2="12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Battery Storage & UPS</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Automatic Transfer</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Total Autonomy</span>
            </div>
          </div>
        ), icon: null }
      ]
    },
    {
      id: "heating",
      label: "Heating & Climate",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
        </svg>
      ),
      cards: [
        { id: 1, title: "Comprehensive Heating Solutions", desc: "Comprehensive heating solutions for absolute comfort in any weather. We specialize in energy-efficient underfloor heating and smart climate control, ensuring your home maintains the perfect temperature all year round.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><path d="M3 9h18M3 15h18" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 2, title: null, desc: (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '16px', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9h18M3 15h18" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Underfloor Heating</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 2a10 10 0 0 1 10 10h-10V2z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Boiler Integration</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 12h16" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Smart Thermostats</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>App Climate Control</span>
            </div>
          </div>
        ), icon: null },
        { id: 3, title: "Boiler Room Wiring", desc: "Электрическое подключение тепловых насосов, котлов и насосных групп.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><path d="M12 2a10 10 0 0 1 10 10h-10V2z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> }
      ]
    },
    {
      id: "security",
      label: "Security",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
        </svg>
      ),
      cards: [
        { id: 1, title: "Video Surveillance", desc: "Установка IP-камер с удаленным доступом и облачным хранением архива.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><path d="M22 12c-2.66 4.67-6.67 7-10 7s-7.34-2.33-10-7c2.66-4.67 6.67-7 10-7s7.34 2.33 10 7z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 2, title: "Comprehensive Property Protection", desc: "Comprehensive property protection built on smart technologies. From reliable IP cameras and video intercoms to automated water shut-off valves, we install a robust security network tailored to your specific needs.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 3, title: null, desc: (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '16px', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 12c-2.66 4.67-6.67 7-10 7s-7.34-2.33-10-7c2.66-4.67 6.67-7 10-7s7.34 2.33 10 7z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Video Surveillance</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="6" y="10" width="12" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 10V7a4 4 0 0 1 8 0v3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Access Control</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Leak Detection</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Gas & Fire Safety</span>
            </div>
          </div>
        ), icon: null }
      ]
    },
    {
      id: "solar",
      label: "Alternative Energy",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
          <line x1="12" y1="1" x2="12" y2="4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
          <line x1="12" y1="20" x2="12" y2="23" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
          <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
          <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
          <line x1="1" y1="12" x2="4" y2="12" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
          <line x1="20" y1="12" x2="23" y2="12" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
          <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
          <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
        </svg>
      ),
      cards: [
        { id: 1, title: "Renewable Energy Systems", desc: "Professional integration of renewable energy systems. We expertly install high-efficiency solar panels, grid inverters, and home EV chargers, creating a seamless ecosystem that maximizes your energy production and usage.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="3" y1="9" x2="21" y2="9" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="3" y1="15" x2="21" y2="15" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="9" y1="3" x2="9" y2="21" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="15" y1="3" x2="15" y2="21" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 2, title: "Grid Inverters", desc: "Оборудование для конвертации солнечной энергии и передачи её во внутреннюю сеть.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 3, title: null, desc: (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '16px', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="3" y1="9" x2="21" y2="9" strokeLinecap="round" strokeLinejoin="round"/><line x1="3" y1="15" x2="21" y2="15" strokeLinecap="round" strokeLinejoin="round"/><line x1="9" y1="3" x2="9" y2="21" strokeLinecap="round" strokeLinejoin="round"/><line x1="15" y1="3" x2="15" y2="21" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Solar Panels</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Grid Inverters</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>EV Charging</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="6" width="20" height="12" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="6" y1="12" x2="6" y2="12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/><line x1="10" y1="12" x2="10" y2="12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Energy Storage</span>
            </div>
          </div>
        ), icon: null }
      ]
    },
    {
      id: "ev",
      label: "EV Charging",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="4" width="8" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
          <path d="M14 9h2a3 3 0 0 1 3 3v2a3 3 0 0 0 3 3" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
          <rect x="20" y="15" width="2" height="4" rx="1" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
          <path d="M8 10h4M8 14h4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
        </svg>
      ),
      cards: [
        { id: 1, title: "Premium EV Charging Stations", desc: "Power up your vehicle safely and efficiently from the comfort of your home. We install premium EV charging stations with smart load balancing, ensuring fast, reliable charging without overloading your home's electrical grid.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 2, title: null, desc: (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '16px', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Premium Chargers</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Weatherproof Units</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Compact Wallboxes</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 3v18M15 3v18" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 9h6M9 15h6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Load Balancing</span>
            </div>
          </div>
        ), icon: null },
        { id: 3, title: "Outdoor Stations", desc: "Монтаж защищенных станций на парковочных местах под открытым небом.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> }
      ]
    },
    {
      id: "spa",
      label: "Spa Zones",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.5c-3.5 0-6.5-3-6.5-6.5 0-4.5 6.5-12.5 6.5-12.5s6.5 8 6.5 12.5c0 3.5-3 6.5-6.5 6.5z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
        </svg>
      ),
      cards: [
        { id: 1, title: "Pools & Jacuzzis", desc: "Безопасное подключение насосов, фильтров и подводного освещения.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h20M12 2v20" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 2, title: "Specialized Electrical Engineering", desc: "Specialized electrical engineering for wet and aggressive environments. We safely connect pool filtration systems, steam generators, and specialized lighting using heat-resistant and fully waterproof materials.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 3, title: null, desc: (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '16px', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12h20M12 2v20" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Pools & Jacuzzis</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Saunas & Hammams</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>IP68 Protection</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#00c3ff', width: '32px', height: '32px', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem', lineHeight: 1.2 }}>Pump Filtration</span>
            </div>
          </div>
        ), icon: null }
      ]
    }
  ];

  return (
    <section className={styles.services} id="services">
      {/* TOP MOBILE BANNER (Visible only <= 900px) */}
      <div className={styles.topBannerMobile}>
        <div className={styles.bannerLeft}>
          <div className={styles.bannerIcon}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 22h20L12 2z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
              <path d="M12 16v.01M12 8v5" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
            </svg>
          </div>
          <div className={styles.bannerInfo}>
            <h4 className={styles.bannerTitle}>Tempelor Power</h4>
            <p className={styles.bannerSubtitle}>Premium electrical solutions</p>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <div className={styles.headerGlass}>
            <span className={styles.label}>
              <span className={styles.accentSlash}>//</span> Our Core Services
            </span>
            <h2 className={styles.title}>What We Do Best</h2>
            <p className={styles.subtitle}>
              We deliver state-of-the-art electrical solutions, tailored for safety, 
              longevity, and modern convenience.
            </p>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className={styles.grid}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
          >
            <motion.div className={styles.mainCardsContainer} variants={itemVariants}>
              {categoriesData[activeCategory].cards.map((card, idx) => {
                const imageIndex = activeCategory % 3;
                const isImageCard = idx === imageIndex;
                if (!card.title) return null;

                return (
                  <div 
                    key={card.id} 
                    className={`${styles.card} ${isImageCard ? styles.imageCard : ''}`}
                  >
                    {isImageCard ? (
                      <img 
                        src={
                          activeCategory === 0 ? residentialWiringImg : 
                          activeCategory === 1 ? switchboardsImg : 
                          activeCategory === 2 ? smartHomeImg :
                          activeCategory === 3 ? lightingImg :
                          activeCategory === 4 ? backupPowerImg :
                          activeCategory === 5 ? heatingClimateImg :
                          activeCategory === 6 ? securityImg :
                          activeCategory === 7 ? solarImg :
                          activeCategory === 8 ? evChargingImg :
                          activeCategory === 9 ? spaZonesImg :
                          activeCategory % 2 === 0 ? heroImg : panelAfter
                        } 
                        alt={card.title} 
                        className={styles.cardImage} 
                      />
                    ) : (
                      <>
                        <div style={{ position: 'relative', width: '100%', minHeight: maxTextHeight !== 'auto' ? maxTextHeight : 'auto' }}>
                          {card.title && card.icon && (
                            <div className={styles.cardHeader}>
                              <div className={styles.iconWrapper}>
                                {card.icon}
                              </div>
                              <h3 className={styles.serviceTitle}>{card.title}</h3>
                            </div>
                          )}
                          <div className={styles.serviceDesc}>{card.desc}</div>

                          <div 
                            ref={measurerCallback}
                            style={{ 
                              position: 'absolute', 
                              top: 0, 
                              left: 0, 
                              width: '100%', 
                              visibility: 'hidden', 
                              pointerEvents: 'none', 
                              zIndex: -1 
                            }}
                          >
                            {categoriesData.map((cat, catIdx) => {
                              const imgIdx = catIdx % 3;
                              const tc = cat.cards.find((c, i) => c.title && i !== imgIdx);
                              if (!tc) return null;
                              return (
                                <div key={`measure-${cat.id}-${tc.id}`} style={{ width: '100%', overflow: 'hidden' }}>
                                  <div className={styles.cardHeader}>
                                    <div className={styles.iconWrapper}>{tc.icon}</div>
                                    <h3 className={styles.serviceTitle}>{tc.title}</h3>
                                  </div>
                                  <div className={styles.serviceDesc}>{tc.desc}</div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </motion.div>
            
            {categoriesData[activeCategory].cards.map((card, idx) => {
              if (card.title) return null;
              return (
                <motion.div key={card.id} className={`${styles.card} ${styles.gridCard}`} variants={itemVariants}>
                  <div className={styles.serviceDesc} style={{ flexGrow: 1, width: '100%', marginBottom: 0 }}>{card.desc}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* BOTTOM SERVICES BANNER */}
      <div className={styles.banner}>
          <div className={styles.bannerLeft}>
            <div className={styles.bannerIcon}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 22h20L12 2z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
                <path d="M12 16v.01M12 8v5" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
              </svg>
            </div>
            <div className={styles.bannerInfo}>
              <h4 className={styles.bannerTitle}>Tempelor Power</h4>
              <p className={styles.bannerSubtitle}>Premium electrical solutions</p>
            </div>
          </div>

          <div className={styles.bannerMiddle}>
            <button 
              className={styles.bannerArrow} 
              onClick={prevBanner}
              disabled={bannerStartIndex === 0}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>

            <div className={styles.bannerItemsWrapper}>
              {categoriesData.slice(bannerStartIndex, bannerStartIndex + visibleCount).map((category, idx) => {
                const globalIndex = bannerStartIndex + idx;
                return (
                  <div 
                    key={category.id} 
                    className={`${styles.bannerItem} ${activeCategory === globalIndex ? styles.activeBannerItem : ''}`}
                    onClick={() => setActiveCategory(globalIndex)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className={styles.bannerItemIcon}>
                      {category.icon}
                    </div>
                    <span className={styles.bannerItemLabel}>{category.label}</span>
                  </div>
                );
              })}
            </div>

            <button 
              className={styles.bannerArrow} 
              onClick={nextBanner}
              disabled={bannerStartIndex + visibleCount >= categoriesData.length}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          <div className={styles.bannerRight}>
            <motion.button 
              className={styles.bannerBtn}
              onClick={openModal}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a consultation (→)
            </motion.button>
          </div>
        </div>
    </section>
  );
};

export default Services;
