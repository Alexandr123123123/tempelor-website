const fs = require('fs');
const path = require('path');

const en = {
  hero: {
    label: "Expertise",
    title: "Our Premium Services",
    desc: "From complete electrical wiring and smart home integration to solar panels and EV charging. We deliver top-tier solutions tailored to your needs."
  },
  blocks: {
    block1: {
      title: "Engineering & Basic Wiring",
      description: "Professional electrical layout, robust switchboard assembly, and comprehensive heating solutions forming the core of any modern building."
    },
    block2: {
      title: "Smart Home",
      description: "Seamless automation of lighting, climate control, and smart shading, bringing ultimate comfort and intelligent living to your fingertips."
    },
    block3: {
      title: "Lighting & Spa Zones",
      description: "Expert installation of dynamic facade lighting, landscape illumination, and specialized waterproof electrical systems for pools and saunas."
    },
    block4: {
      title: "Energy Independence",
      description: "Reliable backup power systems, advanced solar integration, and high-efficiency EV charging stations for sustainable energy."
    },
    block5: {
      title: "Security & Protection",
      description: "State-of-the-art surveillance, smart access control, and proactive anti-leakage systems to ensure maximum safety for your property."
    }
  },
  cats: {
    wiring: "Wiring & Cabling",
    panels: "Switchboards",
    heating: "Heating & Climate",
    smart: "Smart Home",
    lighting: "Lighting Systems",
    spa: "Spa Zones",
    backup: "Backup Power",
    solar: "Alternative Energy",
    ev: "EV Charging",
    security: "Security Systems"
  },
  cards: {
    wiring_1: { title: "Rough-in Wiring", desc: "Complete cable routing according to European standards considering all loads." },
    wiring_2: { title: "Devices Installation", desc: "Installation of sockets, switches, and thermostats with perfect alignment." },
    wiring_3: { title: "Low-Voltage Networks", desc: "Organization of seamless Wi-Fi, internet, and multi-room systems throughout the house." },
    panels_1: { title: "Main Distribution Boards", desc: "Design and assembly of distribution boards based on premium components." },
    panels_2: { title: "Protection Automation", desc: "Installation of modern protection against leakage currents (RCD), short circuits, and surges." },
    panels_3: { title: "Zonal Subpanels", desc: "Installation of additional panels for garages, boiler rooms, saunas, and outdoor lighting." },
    heating_1: { title: "Underfloor Heating", desc: "Installation of heating mats and cables with smart thermostats." },
    heating_2: { title: "De-icing Systems", desc: "Heating for roofs, gutters, driveways, and open terraces." },
    heating_3: { title: "Boiler Room Wiring", desc: "Electrical connection of heat pumps, boilers, and pump groups." },
    smart_1: { title: "Lighting Control", desc: "Lighting scenarios, dimming, and centralized control (KNX, Loxone)." },
    smart_2: { title: "Climate Control", desc: "Intelligent control of heating, air conditioning, and ventilation." },
    smart_3: { title: "Motorized Systems", desc: "Automatic opening of curtains, gates, blinds, and projection screens." },
    lighting_1: { title: "Facade Illumination", desc: "Highlighting house architecture with all-weather waterproof fixtures." },
    lighting_2: { title: "Landscape Lighting", desc: "Illumination of garden paths, trees, terraces, and BBQ areas." },
    lighting_3: { title: "Architectural Interior", desc: "Integration of magnetic tracks, hidden niches, and shadow LED profiles." },
    spa_1: { title: "Pools & Jacuzzis", desc: "Safe connection of pumps, filters, and underwater lighting." },
    spa_2: { title: "Saunas & Hammams", desc: "Heat-resistant installation for electric heaters, steam generators, and LED lighting." },
    spa_3: { title: "IP68 Moisture Protection", desc: "Use of specialized materials for aggressive wet environments." },
    backup_1: { title: "Generators & ATS", desc: "Installation of diesel/gas generators with automatic transfer switches during outages." },
    backup_2: { title: "UPS Systems", desc: "Uninterruptible power supplies to protect servers, boilers, and smart homes." },
    backup_3: { title: "Inverter Systems", desc: "Battery assemblies to ensure complete silence and autonomy at night." },
    solar_1: { title: "Solar Panels", desc: "Installation of panels on roofs or properties for partial home autonomy." },
    solar_2: { title: "Grid Inverters", desc: "Equipment for converting solar energy and transmitting it to the internal grid." },
    solar_3: { title: "Integration", desc: "Synchronization of solar batteries with the generator and overall smart home system." },
    ev_1: { title: "Wallbox Stations", desc: "Installation of fast and powerful EV charging stations in the garage." },
    ev_2: { title: "Load Balancing", desc: "Smart load distribution so charging does not overload the home grid." },
    ev_3: { title: "Outdoor Stations", desc: "Installation of protected stations in open-air parking spaces." },
    security_1: { title: "Video Surveillance", desc: "Installation of IP cameras with remote access and cloud storage." },
    security_2: { title: "Access Control", desc: "Installation of video intercoms, electric locks, and access control systems for gates." },
    security_3: { title: "Accident Protection", desc: "Installation of leak and gas sensors with automatic valve shut-off." }
  },
  banner: {
    title: "Professional",
    subtitle: "Guaranteed quality and safety standards",
    btn: "Request Service"
  }
};

const fr = {
  hero: {
    label: "Expertise",
    title: "Nos Services Premium",
    desc: "Du câblage électrique complet et l'intégration de la maison intelligente aux panneaux solaires et la recharge de VE. Nous offrons des solutions de premier ordre."
  },
  blocks: {
    block1: {
      title: "Ingénierie & Câblage de Base",
      description: "Agencement électrique professionnel, assemblage de tableaux de distribution robustes et solutions de chauffage complètes."
    },
    block2: {
      title: "Maison Intelligente",
      description: "Automatisation de l'éclairage, contrôle du climat et ombrage intelligent, apportant un confort absolu à portée de main."
    },
    block3: {
      title: "Éclairage & Espaces Spa",
      description: "Installation d'éclairage de façade, éclairage paysager et systèmes électriques étanches pour piscines et saunas."
    },
    block4: {
      title: "Indépendance Énergétique",
      description: "Systèmes d'alimentation de secours fiables, intégration solaire avancée et stations de recharge de VE à haute efficacité."
    },
    block5: {
      title: "Sécurité & Protection",
      description: "Surveillance de pointe, contrôle d'accès intelligent et systèmes anti-fuite proactifs pour assurer la sécurité maximale."
    }
  },
  cats: {
    wiring: "Câblage & Routage",
    panels: "Tableaux Électriques",
    heating: "Chauffage & Climat",
    smart: "Maison Intelligente",
    lighting: "Systèmes d'Éclairage",
    spa: "Espaces Spa",
    backup: "Alimentation de Secours",
    solar: "Énergie Alternative",
    ev: "Recharge VE",
    security: "Systèmes de Sécurité"
  },
  cards: {
    wiring_1: { title: "Câblage Intégré", desc: "Cheminement complet des câbles selon les normes européennes compte tenu de toutes les charges." },
    wiring_2: { title: "Installation des Appareils", desc: "Installation de prises, d'interrupteurs et de thermostats avec un alignement parfait." },
    wiring_3: { title: "Réseaux à Faible Tension", desc: "Organisation de systèmes Wi-Fi, Internet et multi-pièces sans faille dans toute la maison." },
    panels_1: { title: "Tableaux de Distribution", desc: "Conception et assemblage de tableaux de distribution à partir de composants premium." },
    panels_2: { title: "Automatisation de Protection", desc: "Installation d'une protection contre les fuites de courant (RCD), les courts-circuits et les surtensions." },
    panels_3: { title: "Sous-panneaux Zonaux", desc: "Installation de panneaux supplémentaires pour garages, chaufferies, saunas et éclairage extérieur." },
    heating_1: { title: "Chauffage au Sol", desc: "Installation de tapis chauffants et de câbles avec thermostats intelligents." },
    heating_2: { title: "Systèmes de Dégivrage", desc: "Chauffage pour toits, gouttières, allées et terrasses." },
    heating_3: { title: "Câblage de Chaufferie", desc: "Connexion électrique des pompes à chaleur, chaudières et groupes de pompage." },
    smart_1: { title: "Contrôle de l'Éclairage", desc: "Scénarios d'éclairage, variation d'intensité et contrôle centralisé (KNX, Loxone)." },
    smart_2: { title: "Contrôle du Climat", desc: "Contrôle intelligent du chauffage, de la climatisation et de la ventilation." },
    smart_3: { title: "Systèmes Motorisés", desc: "Ouverture automatique de rideaux, portails, stores et écrans de projection." },
    lighting_1: { title: "Illumination de Façade", desc: "Mise en valeur de l'architecture avec des luminaires étanches et tout temps." },
    lighting_2: { title: "Éclairage Paysager", desc: "Éclairage des allées, des arbres, des terrasses et des zones de barbecue." },
    lighting_3: { title: "Intérieur Architectural", desc: "Intégration de rails magnétiques, niches cachées et profils LED ombrés." },
    spa_1: { title: "Piscines & Jacuzzis", desc: "Connexion sûre des pompes, des filtres et de l'éclairage sous-marin." },
    spa_2: { title: "Saunas & Hammams", desc: "Installation thermorésistante pour radiateurs électriques, générateurs de vapeur et éclairage LED." },
    spa_3: { title: "Protection IP68", desc: "Utilisation de matériaux spécialisés pour les environnements humides agressifs." },
    backup_1: { title: "Générateurs & ATS", desc: "Installation de générateurs diesel/gaz avec démarrage automatique en cas de coupure." },
    backup_2: { title: "Systèmes UPS", desc: "Onduleurs pour protéger les serveurs, les chaudières et la maison intelligente." },
    backup_3: { title: "Systèmes d'Onduleurs", desc: "Assemblages de batteries pour assurer un silence et une autonomie complets la nuit." },
    solar_1: { title: "Panneaux Solaires", desc: "Installation de panneaux sur le toit ou le terrain pour une autonomie partielle." },
    solar_2: { title: "Onduleurs Réseau", desc: "Équipement pour convertir l'énergie solaire et la transmettre au réseau interne." },
    solar_3: { title: "Intégration", desc: "Synchronisation des batteries solaires avec le générateur et le système domotique." },
    ev_1: { title: "Stations Murales", desc: "Installation de bornes de recharge pour VE rapides et puissantes dans le garage." },
    ev_2: { title: "Équilibrage de Charge", desc: "Répartition intelligente pour ne pas surcharger le réseau électrique de la maison." },
    ev_3: { title: "Stations Extérieures", desc: "Installation de stations protégées sur des places de parking à l'air libre." },
    security_1: { title: "Vidéosurveillance", desc: "Installation de caméras IP avec accès à distance et stockage cloud." },
    security_2: { title: "Contrôle d'Accès", desc: "Interphones vidéo, serrures électriques et systèmes d'accès pour les portails." },
    security_3: { title: "Protection contre les Accidents", desc: "Installation de détecteurs de fuites et de gaz avec fermeture automatique des vannes." }
  },
  banner: {
    title: "Professionnel",
    subtitle: "Normes de qualité et de sécurité garanties",
    btn: "Demander un Service"
  }
};

const nl = {
  hero: {
    label: "Expertise",
    title: "Onze Premium Diensten",
    desc: "Van complete elektrische bedrading en smart home integratie tot zonnepanelen en EV-laden. Wij leveren oplossingen van topklasse."
  },
  blocks: {
    block1: {
      title: "Techniek & Basisbedrading",
      description: "Professionele lay-out, robuuste montage van verdeelborden en uitgebreide verwarmingsoplossingen."
    },
    block2: {
      title: "Smart Home",
      description: "Naadloze automatisering van verlichting, klimaatbeheersing en slimme zonwering voor ultiem comfort."
    },
    block3: {
      title: "Verlichting & Spa-zones",
      description: "Vakkundige installatie van gevelverlichting, landschapsverlichting en waterdichte elektrische systemen."
    },
    block4: {
      title: "Energieonafhankelijkheid",
      description: "Betrouwbare back-upstroom, zonne-integratie en zeer efficiënte laadstations voor duurzame energie."
    },
    block5: {
      title: "Beveiliging & Bescherming",
      description: "Geavanceerde bewaking, slimme toegangscontrole en proactieve anti-lek systemen voor maximale veiligheid."
    }
  },
  cats: {
    wiring: "Bedrading & Bekabeling",
    panels: "Schakelborden",
    heating: "Verwarming & Klimaat",
    smart: "Smart Home",
    lighting: "Verlichtingssystemen",
    spa: "Spa-zones",
    backup: "Back-upstroom",
    solar: "Alternatieve Energie",
    ev: "EV-laden",
    security: "Beveiligingssystemen"
  },
  cards: {
    wiring_1: { title: "Ruwbouw Bedrading", desc: "Volledige kabelroutering volgens Europese normen met inachtneming van alle belastingen." },
    wiring_2: { title: "Apparaatinstallatie", desc: "Installatie van stopcontacten, schakelaars en thermostaten met perfecte uitlijning." },
    wiring_3: { title: "Laagspanningsnetwerken", desc: "Organisatie van naadloze Wi-Fi, internet en multi-room systemen." },
    panels_1: { title: "Hoofdverdeelborden", desc: "Ontwerp en montage van verdeelborden op basis van hoogwaardige componenten." },
    panels_2: { title: "Beschermingsautomatisering", desc: "Moderne bescherming tegen lekstromen (RCD), kortsluiting en overspanning." },
    panels_3: { title: "Zonale Subpanelen", desc: "Installatie van extra panelen voor garages, stookruimten, sauna's en buitenverlichting." },
    heating_1: { title: "Vloerverwarming", desc: "Installatie van verwarmingsmatten en -kabels met slimme thermostaten." },
    heating_2: { title: "Ontdooisystemen", desc: "Verwarming voor daken, dakgoten, opritten en open terrassen." },
    heating_3: { title: "Stookruimte Bedrading", desc: "Elektrische aansluiting van warmtepompen, ketels en pompgroepen." },
    smart_1: { title: "Lichtregeling", desc: "Verlichtingsscenario's, dimmen en gecentraliseerde regeling (KNX, Loxone)." },
    smart_2: { title: "Klimaatregeling", desc: "Intelligente regeling van verwarming, airconditioning en ventilatie." },
    smart_3: { title: "Gemotoriseerde Systemen", desc: "Automatische opening van gordijnen, poorten, jaloezieën en projectieschermen." },
    lighting_1: { title: "Gevelverlichting", desc: "Markering van de architectuur met weerbestendige armaturen." },
    lighting_2: { title: "Landschapsverlichting", desc: "Verlichting van tuinpaden, bomen, terrassen en BBQ-ruimtes." },
    lighting_3: { title: "Architectonisch Interieur", desc: "Integratie van magnetische tracks, verborgen nissen en schaduw-LED-profielen." },
    spa_1: { title: "Zwembaden & Jacuzzi's", desc: "Veilige aansluiting van pompen, filters en onderwaterverlichting." },
    spa_2: { title: "Sauna's & Hammams", desc: "Hittebestendige installatie voor kachels, stoomgeneratoren en LED-verlichting." },
    spa_3: { title: "IP68 Vochtbeveiliging", desc: "Gebruik van gespecialiseerde materialen voor agressieve natte omgevingen." },
    backup_1: { title: "Generatoren & ATS", desc: "Installatie van diesel-/gasgeneratoren met automatische start bij uitval." },
    backup_2: { title: "UPS Systemen", desc: "Ononderbroken stroomvoorzieningen om servers, ketels en het slimme huis te beschermen." },
    backup_3: { title: "Invertersystemen", desc: "Batterij-assemblages om 's nachts volledige stilte en autonomie te garanderen." },
    solar_1: { title: "Zonnepanelen", desc: "Installatie van panelen op daken of percelen voor gedeeltelijke autonomie." },
    solar_2: { title: "Netomvormers", desc: "Apparatuur voor het omzetten en overbrengen van zonne-energie naar het interne netwerk." },
    solar_3: { title: "Integratie", desc: "Synchronisatie van zonnebatterijen met de generator en het domoticasysteem." },
    ev_1: { title: "Wallbox-stations", desc: "Installatie van snelle en krachtige EV-laadstations in de garage." },
    ev_2: { title: "Load Balancing", desc: "Slimme belastingverdeling zodat het opladen het elektriciteitsnet niet overbelast." },
    ev_3: { title: "Buitenstations", desc: "Installatie van beveiligde stations op openluchtparkeerplaatsen." },
    security_1: { title: "Videobewaking", desc: "Installatie van IP-camera's met toegang op afstand en cloudopslag." },
    security_2: { title: "Toegangscontrole", desc: "Installatie van video-intercoms, elektrische sloten en toegangssystemen voor poorten." },
    security_3: { title: "Ongevallenpreventie", desc: "Lek- en gassensoren met automatische klepafsluiting." }
  },
  banner: {
    title: "Professioneel",
    subtitle: "Gegarandeerde kwaliteits- en veiligheidsnormen",
    btn: "Service Aanvragen"
  }
};

const updateJson = (lang, obj) => {
  const filePath = path.join(__dirname, `src/shared/config/i18n/locales/${lang}.json`);
  const parsed = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  parsed.servicesPage = obj;
  fs.writeFileSync(filePath, JSON.stringify(parsed, null, 2));
};

updateJson('en', en);
updateJson('fr', fr);
updateJson('nl', nl);

// Update ServicesHero.jsx
const heroFile = path.join(__dirname, 'src/widgets/services/ServicesHero/ui/ServicesHero.jsx');
let heroContent = fs.readFileSync(heroFile, 'utf8');
if (!heroContent.includes("useTranslation")) {
  heroContent = heroContent.replace("import { Link } from 'react-router-dom';", "import { Link, useNavigate, useLocation } from 'react-router-dom';\nimport { useTranslation } from 'react-i18next';");
}
if (!heroContent.includes("const { t, i18n } = useTranslation();")) {
  heroContent = heroContent.replace("export const ServicesHero = () => {", "export const ServicesHero = () => {\n  const { t, i18n } = useTranslation();\n  const lang = i18n.language || 'fr';\n  const navigate = useNavigate();\n  const location = useLocation();\n  const handleLangChange = (newLang) => {\n    const pathParts = location.pathname.split('/');\n    if (pathParts.length > 1 && ['fr', 'nl', 'en'].includes(pathParts[1])) {\n      pathParts[1] = newLang;\n      navigate(pathParts.join('/') + location.search + location.hash);\n    } else {\n      navigate(`/${newLang}` + location.search + location.hash);\n    }\n  };\n  const getLangClass = (l) => `${styles.langItem} ${lang === l ? styles.langActive : ''}`;");
}
heroContent = heroContent.replace(/<Link to="\/"/g, `<Link to={\`/\${lang}\`}`);
heroContent = heroContent.replace(/<Link to="\/#about1"/g, `<Link to={\`/\${lang}/#about1\`}`);
heroContent = heroContent.replace(/<Link to="\/services"/g, `<Link to={\`/\${lang}/services\`}`);
heroContent = heroContent.replace(/<Link to="\/#contact"/g, `<Link to={\`/\${lang}/#contact\`}`);
heroContent = heroContent.replace(/>About<\/Link>/g, `>{t('nav.about')}</Link>`);
heroContent = heroContent.replace(/>Services<\/Link>/g, `>{t('nav.services')}</Link>`);
heroContent = heroContent.replace(/>Contact<\/Link>/g, `>{t('nav.contact')}</Link>`);

// Add lang switcher to ServicesHero
if (!heroContent.includes("langSwitcher")) {
  heroContent = heroContent.replace(
    /<\/div>\s*<\/nav>/,
    `  <div className={styles.langSwitcher}>
              <span className={getLangClass('fr')} onClick={() => handleLangChange('fr')}>FR</span>
              <span className={styles.langSep}>/</span>
              <span className={getLangClass('nl')} onClick={() => handleLangChange('nl')}>NL</span>
              <span className={styles.langSep}>/</span>
              <span className={getLangClass('en')} onClick={() => handleLangChange('en')}>EN</span>
            </div>
          </div>
        </div>
      </nav>`
  );
}
// Fix inner div match since we replaced '</div></nav>'
// Actually simpler replacement for langSwitcher:
const langSwitcherCode = `<div className={styles.langSwitcher}>
              <span className={getLangClass('fr')} onClick={() => handleLangChange('fr')}>FR</span>
              <span className={styles.langSep}>/</span>
              <span className={getLangClass('nl')} onClick={() => handleLangChange('nl')}>NL</span>
              <span className={styles.langSep}>/</span>
              <span className={getLangClass('en')} onClick={() => handleLangChange('en')}>EN</span>
            </div>`;

if (!heroContent.includes("styles.langSwitcher")) {
  heroContent = heroContent.replace('<div className={styles.navLinks}>', `<div className={styles.rightNav}><div className={styles.navLinks}>`);
  heroContent = heroContent.replace('</Link>\n          </div>\n        </div>', `</Link>\n          </div>\n${langSwitcherCode}\n</div>\n        </div>`);
}

heroContent = heroContent.replace('<span className={styles.accentSlash}>//</span> Expertise', '<span className={styles.accentSlash}>//</span> {t("servicesPage.hero.label")}');
heroContent = heroContent.replace('Our Premium Services', '{t("servicesPage.hero.title")}');
heroContent = heroContent.replace('From complete electrical wiring and smart home integration to solar panels and EV charging. We deliver top-tier solutions tailored to your needs.', '{t("servicesPage.hero.desc")}');
fs.writeFileSync(heroFile, heroContent);


// Update ServicesGrouped.jsx
const groupedFile = path.join(__dirname, 'src/widgets/services/ServicesGrouped/ui/ServicesGrouped.jsx');
let groupedContent = fs.readFileSync(groupedFile, 'utf8');

if (!groupedContent.includes("useTranslation")) {
  groupedContent = groupedContent.replace("import styles from './ServicesGrouped.module.css';", "import styles from './ServicesGrouped.module.css';\nimport { useTranslation } from 'react-i18next';");
}

if (!groupedContent.includes("const { t } = useTranslation();")) {
  groupedContent = groupedContent.replace("export const ServicesGrouped = () => {", "export const ServicesGrouped = () => {\n  const { t } = useTranslation();");
}

// Remove static texts and use t() inside blocks rendering
// In return statement:
groupedContent = groupedContent.replace(
  /<span className={styles\.accentSlash}>[\/\/\s]*<\/span>\s*\{block\.title\}/,
  '<span className={styles.accentSlash}>//</span> {t(`servicesPage.blocks.${block.id}.title`)}'
);
groupedContent = groupedContent.replace(
  /<p className={styles\.description}>\{block\.description\}<\/p>/,
  '<p className={styles.description}>{t(`servicesPage.blocks.${block.id}.description`)}</p>'
);
groupedContent = groupedContent.replace(
  /<h3 className={styles\.cardTitle}>\{cat\.label\}<\/h3>/,
  '<h3 className={styles.cardTitle}>{t(`servicesPage.cats.${cat.id}`)}</h3>'
);
groupedContent = groupedContent.replace(
  /<li key=\{card\.id\}>\{card\.title\}<\/li>/,
  '<li key={card.id}>{t(`servicesPage.cards.${cat.id}_${card.id}.title`)}</li>'
);
groupedContent = groupedContent.replace(
  /<h4 className={styles\.bannerTitle}>Professional \{block\.title\}<\/h4>/,
  '<h4 className={styles.bannerTitle}>{t("servicesPage.banner.title")} {t(`servicesPage.blocks.${block.id}.title`)}</h4>'
);
groupedContent = groupedContent.replace(
  /<p className={styles\.bannerSubtitle}>Guaranteed quality and safety standards<\/p>/,
  '<p className={styles.bannerSubtitle}>{t("servicesPage.banner.subtitle")}</p>'
);
groupedContent = groupedContent.replace(
  /Request Service/,
  '{t("servicesPage.banner.btn")}'
);

fs.writeFileSync(groupedFile, groupedContent);

console.log('Successfully updated services page translations.');
