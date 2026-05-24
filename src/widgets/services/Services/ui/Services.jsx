import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Services.module.css';

import panelAfter from '../../../../assets/panel_after.png';
import heroImg from '../../../../assets/hero.png';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [bannerStartIndex, setBannerStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1100) {
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
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
        </svg>
      ),
      cards: [
        { id: 1, title: "Rough-in Wiring", desc: "Полная прокладка кабельных трасс по европейским стандартам с учетом всех нагрузок.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 2, title: "Devices Installation", desc: "Монтаж розеток, выключателей и терморегуляторов с идеальным выравниванием.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="4" width="12" height="16" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><circle cx="12" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="15" r="1.5" fill="currentColor" stroke="none"/></svg> },
        { id: 3, title: "Low-Voltage Networks", desc: "Организация бесшовного Wi-Fi, интернета и мультирум-систем по всему дому.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> }
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
        { id: 1, title: "Main Distribution Boards", desc: "Проектирование и сборка распределительных щитов на базе комплектующих премиум-класса.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><path d="M9 3v18M15 3v18" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><path d="M9 9h6M9 15h6" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 2, title: "Protection Automation", desc: "Установка современной защиты от токов утечки (УЗО), короткого замыкания и перенапряжений.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="12" y1="8" x2="12" y2="12" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="12" y1="16" x2="12.01" y2="16" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="2" stroke="currentColor"/></svg> },
        { id: 3, title: "Zonal Subpanels", desc: "Установка дополнительных щитов для гаражей, котельных, бань и уличного освещения.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="4" width="14" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="8" y1="9" x2="16" y2="9" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="8" y1="13" x2="16" y2="13" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> }
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
        { id: 1, title: "Lighting Control", desc: "Сценарии света, диммирование и централизованное управление (KNX, Loxone).", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18h6v1H9zM9 21h6v1H9zM12 2a6 6 0 0 0-6 6c0 4 3 5 3 8h6c0-3 3-4 3-8a6 6 0 0 0-6-6z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 2, title: "Climate Control", desc: "Интеллектуальное управление отоплением, кондиционерами и вентиляцией.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><path d="M4 12h16" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
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
        { id: 2, title: "Landscape Lighting", desc: "Освещение садовых дорожек, деревьев, террас и зон барбекю.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 3, title: "Architectural Interior", desc: "Интеграция магнитных треков, скрытых ниш и теневых LED-профилей.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> }
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
        { id: 1, title: "Generators & ATS", desc: "Установка дизельных/газовых генераторов с системой автоматического запуска при отключении.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><path d="M9 3v18M15 3v18" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 2, title: "UPS Systems", desc: "Источники бесперебойного питания для защиты серверов, котлов и умного дома.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 3, title: "Inverter Systems", desc: "Аккумуляторные сборки для обеспечения полной тишины и автономности ночью.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="6" width="20" height="12" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="6" y1="12" x2="6" y2="12" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="2" stroke="currentColor"/><line x1="10" y1="12" x2="10" y2="12" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="2" stroke="currentColor"/></svg> }
      ]
    },
    {
      id: "heating",
      label: "Heating & Climate",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
          <path d="M4 12h16" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
        </svg>
      ),
      cards: [
        { id: 1, title: "Underfloor Heating", desc: "Монтаж нагревательных матов и кабелей с установкой умных терморегуляторов.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><path d="M3 9h18M3 15h18" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 2, title: "De-icing Systems", desc: "Обогрев кровли, водостоков, въездных групп и открытых террас.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M8 6l4-4 4 4M8 18l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
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
        { id: 2, title: "Access Control", desc: "Монтаж видеодомофонов, электрозамков и систем СКУД для ворот и калиток.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="10" width="12" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><path d="M8 10V7a4 4 0 0 1 8 0v3" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 3, title: "Accident Protection", desc: "Установка датчиков протечки и газа с автоматическим перекрытием клапанов.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> }
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
        { id: 1, title: "Solar Panels", desc: "Монтаж панелей на кровле или участке для частичной автономности дома.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="3" y1="9" x2="21" y2="9" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="3" y1="15" x2="21" y2="15" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="9" y1="3" x2="9" y2="21" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="15" y1="3" x2="15" y2="21" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 2, title: "Grid Inverters", desc: "Оборудование для конвертации солнечной энергии и передачи её во внутреннюю сеть.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 3, title: "Integration", desc: "Синхронизация солнечных батарей с генератором и общей системой умного дома.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="12" y1="8" x2="12" y2="16" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><line x1="8" y1="12" x2="16" y2="12" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> }
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
        { id: 1, title: "Wallbox Stations", desc: "Установка быстрых и мощных зарядных станций для электромобилей в гараже.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 2, title: "Load Balancing", desc: "Умное распределение нагрузки, чтобы зарядка не перегружала сеть дома.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><path d="M9 3v18M15 3v18" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><path d="M9 9h6M9 15h6" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 3, title: "Outdoor Stations", desc: "Монтаж защищенных станций на парковочных местах под открытым небом.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> }
      ]
    },
    {
      id: "spa",
      label: "Spa Zones",
      icon: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12h20M12 2v20" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/>
        </svg>
      ),
      cards: [
        { id: 1, title: "Pools & Jacuzzis", desc: "Безопасное подключение насосов, фильтров и подводного освещения.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h20M12 2v20" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/><circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 2, title: "Saunas & Hammams", desc: "Термостойкий монтаж для электрических печей, парогенераторов и LED-подсветки.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> },
        { id: 3, title: "IP68 Moisture Protection", desc: "Использование специализированных материалов для работы в агрессивной влажной среде.", icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="1.5" stroke="currentColor"/></svg> }
      ]
    }
  ];

  return (
    <section className={styles.services} id="services">
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
            {categoriesData[activeCategory].cards.map((card, idx) => {
              const imageIndex = activeCategory % 3;
              const isImageCard = idx === imageIndex;

              return (
                <motion.div key={card.id} className={`${styles.card} ${isImageCard ? styles.imageCard : ''}`} variants={itemVariants}>
                  {isImageCard ? (
                    <img 
                      src={activeCategory % 2 === 0 ? heroImg : panelAfter} 
                      alt={card.title} 
                      className={styles.cardImage} 
                    />
                  ) : (
                    <>
                      <div className={styles.iconWrapper}>
                        {card.icon}
                      </div>
                      <h3 className={styles.serviceTitle}>{card.title}</h3>
                      <p className={styles.serviceDesc}>{card.desc}</p>
                      <a href="#contact" className={styles.learnMore}>Learn more →</a>
                    </>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* BOTTOM SERVICES BANNER */}
      <motion.div 
          className={styles.banner}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
        >
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
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Get a Quote (→)
            </motion.button>
          </div>
        </motion.div>
    </section>
  );
};

export default Services;
