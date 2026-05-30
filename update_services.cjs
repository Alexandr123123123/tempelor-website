const fs = require('fs');
const path = require('path');

const servicesFile = path.join(__dirname, 'src/widgets/services/Services/ui/Services.jsx');
let content = fs.readFileSync(servicesFile, 'utf8');

// The replacement logic. We will replace the text with t('servicesData.<category>.<key>')
// And we also need to generate the JSON objects for en, fr, nl.

const en = {};
const fr = {};
const nl = {};

const data = {
  wiring: {
    label: ["Wiring & Cabling", "Câblage", "Bedrading & Bekabeling"],
    c1t: ["Rough-in Wiring", "Pré-câblage", "Ruwe Bedrading"],
    c1d: ["Complete cable routing according to European standards considering all loads.", "Cheminement complet des câbles selon les normes européennes en tenant compte de toutes les charges.", "Volledige kabelroutering volgens Europese normen, rekening houdend met alle belastingen."],
    c2t: ["Professional Wiring Solutions", "Solutions de Câblage Professionnelles", "Professionele Bedradingsoplossingen"],
    c2d: ["Professional wiring services for projects of any scale. We handle complete electrical distribution: from the main service entrance to the final points for outlets, switches, and networking. We use reliable materials and design the wiring to be easy to maintain.", "Services de câblage professionnels pour des projets de toute envergure. Nous gérons la distribution électrique complète : de l'entrée de service principale aux points finaux pour les prises, les interrupteurs et les réseaux. Nous utilisons des matériaux fiables et concevons le câblage pour qu'il soit facile à entretenir.", "Professionele bedradingsdiensten voor projecten van elke omvang. Wij verzorgen de complete elektrische distributie: van de hoofdaansluiting tot de eindpunten voor stopcontacten, schakelaars en netwerken. Wij gebruiken betrouwbare materialen en ontwerpen de bedrading zodat deze eenvoudig te onderhouden is."],
    g1: ["System Design", "Conception du système", "Systeemontwerp"],
    g2: ["Cable Routing", "Cheminement des câbles", "Kabelroutering"],
    g3: ["Easy Maintenance", "Entretien facile", "Eenvoudig onderhoud"],
    g4: ["Precision & Safety", "Précision et sécurité", "Precisie & Veiligheid"],
  },
  panels: {
    label: ["Switchboards", "Tableaux Électriques", "Schakelborden"],
    c1t: ["Professional Switchboard Installations", "Installations de Tableaux Professionnelles", "Professionele Schakelbordinstallaties"],
    c1d: ["Professional switchboard installations designed for modern high-load households. We build meticulously organized panels equipped with advanced protection systems to safeguard your electronics from surges and electrical faults.", "Installations de tableaux professionnels conçues pour les foyers modernes à forte charge. Nous construisons des panneaux méticuleusement organisés équipés de systèmes de protection avancés pour protéger vos appareils électroniques contre les surtensions et les défauts électriques.", "Professionele schakelbordinstallaties ontworpen voor moderne huishoudens met een hoge belasting. Wij bouwen zorgvuldig georganiseerde panelen uitgerust met geavanceerde beveiligingssystemen om uw elektronica te beschermen tegen stroompieken en elektrische storingen."],
    c2t: ["Protection Automation", "Automatisation de la Protection", "Beschermingsautomatisering"],
    c2d: ["Image Card (Text ignored)", "Image Card (Text ignored)", "Image Card (Text ignored)"],
    g1: ["Advanced Protection", "Protection avancée", "Geavanceerde bescherming"],
    g2: ["Smart Integration", "Intégration intelligente", "Slimme integratie"],
    g3: ["Professional Design", "Conception professionnelle", "Professioneel ontwerp"],
    g4: ["Clean Assembly", "Montage soigné", "Nette montage"],
  },
  smart: {
    label: ["Smart Home", "Maison Intelligente", "Smart Home"],
    c1t: ["Complete Home Automation", "Domotique Complète", "Volledige Huisautomatisering"],
    c1d: ["Complete home automation for effortless control over your environment. We synchronize your lighting, climate systems, and motorized blinds, creating a stable infrastructure that works exactly as you want it to.", "Domotique complète pour un contrôle sans effort de votre environnement. Nous synchronisons votre éclairage, vos systèmes de climatisation et vos stores motorisés, créant une infrastructure stable qui fonctionne exactement comme vous le souhaitez.", "Volledige huisautomatisering voor moeiteloze controle over uw omgeving. We synchroniseren uw verlichting, klimaatsystemen en gemotoriseerde zonwering en creëren een stabiele infrastructuur die precies werkt zoals u dat wilt."],
    g1: ["Intelligent Lighting", "Éclairage intelligent", "Intelligente verlichting"],
    g2: ["Precision Climate", "Climat de précision", "Precisieklimaat"],
    g3: ["Automated Shading", "Ombrage automatisé", "Geautomatiseerde zonwering"],
    g4: ["Centralized Control", "Contrôle centralisé", "Gecentraliseerde bediening"],
  },
  power: {
    label: ["Backup Power", "Alimentation de Secours", "Noodstroom"],
    c1t: ["Professional Power Integration", "Intégration Électrique Professionnelle", "Professionele Stroomintegratie"],
    c1d: ["Professional integration of independent power sources tailored to your home's energy demands. We provide full-cycle installation of UPS systems and standby generators, guaranteeing stable electricity for your most critical systems.", "Intégration professionnelle de sources d'énergie indépendantes adaptées aux exigences énergétiques de votre maison. Nous proposons une installation complète de systèmes onduleurs (UPS) et de générateurs de secours, garantissant une électricité stable pour vos systèmes les plus critiques.", "Professionele integratie van onafhankelijke stroombronnen afgestemd op de energiebehoefte van uw huis. Wij bieden een volledige installatie van UPS-systemen en noodgeneratoren en garanderen stabiele elektriciteit voor uw meest kritieke systemen."],
    c2t: ["UPS Systems", "Systèmes ASI", "UPS-systemen"],
    c2d: ["Uninterruptible power supplies to protect servers, boilers, and smart homes.", "Alimentations sans interruption pour protéger les serveurs, les chaudières et les maisons intelligentes.", "Ononderbroken stroomvoorziening om servers, ketels en slimme huizen te beschermen."],
    g1: ["Standby Generators", "Générateurs de secours", "Noodgeneratoren"],
    g2: ["Battery Storage & UPS", "Stockage sur batterie et ASI", "Batterijopslag & UPS"],
    g3: ["Automatic Transfer", "Transfert automatique", "Automatische overdracht"],
    g4: ["Total Autonomy", "Autonomie totale", "Totale autonomie"],
  },
  heating: {
    label: ["Heating & Climate", "Chauffage et Climatisation", "Verwarming & Klimaat"],
    c1t: ["Comprehensive Heating Solutions", "Solutions de Chauffage Complètes", "Uitgebreide Verwarmingsoplossingen"],
    c1d: ["Comprehensive heating solutions for absolute comfort in any weather. We specialize in energy-efficient underfloor heating and smart climate control, ensuring your home maintains the perfect temperature all year round.", "Des solutions de chauffage complètes pour un confort absolu par tous les temps. Nous nous spécialisons dans le chauffage au sol économe en énergie et la régulation climatique intelligente, veillant à ce que votre maison maintienne une température parfaite tout au long de l'année.", "Uitgebreide verwarmingsoplossingen voor absoluut comfort onder alle weersomstandigheden. Wij zijn gespecialiseerd in energiezuinige vloerverwarming en slimme klimaatbeheersing, zodat uw huis het hele jaar door de perfecte temperatuur behoudt."],
    g1: ["Underfloor Heating", "Plancher chauffant", "Vloerverwarming"],
    g2: ["Boiler Integration", "Intégration de la chaudière", "Ketelintegratie"],
    g3: ["Smart Thermostats", "Thermostats intelligents", "Slimme thermostaten"],
    g4: ["App Climate Control", "Contrôle du climat par application", "App-klimaatregeling"],
    c3t: ["Boiler Room Wiring", "Câblage de la Chaufferie", "Bedrading Stookruimte"],
    c3d: ["Electrical connection of heat pumps, boilers, and pump groups.", "Raccordement électrique des pompes à chaleur, des chaudières et des groupes de pompage.", "Elektrische aansluiting van warmtepompen, ketels en pompgroepen."],
  },
  security: {
    label: ["Security", "Sécurité", "Beveiliging"],
    c1t: ["Video Surveillance", "Vidéosurveillance", "Videobewaking"],
    c1d: ["Installation of IP cameras with remote access and cloud storage.", "Installation de caméras IP avec accès à distance et stockage cloud.", "Installatie van IP-camera's met toegang op afstand en cloudopslag."],
    c2t: ["Comprehensive Property Protection", "Protection Complète de la Propriété", "Uitgebreide Eigendomsbescherming"],
    c2d: ["Comprehensive property protection built on smart technologies. From reliable IP cameras and video intercoms to automated water shut-off valves, we install a robust security network tailored to your specific needs.", "Protection complète de la propriété basée sur des technologies intelligentes. Des caméras IP fiables et interphones vidéo aux vannes d'arrêt d'eau automatisées, nous installons un réseau de sécurité robuste adapté à vos besoins spécifiques.", "Uitgebreide eigendomsbescherming gebouwd op slimme technologieën. Van betrouwbare IP-camera's en video-intercoms tot automatische waterafsluiters, wij installeren een robuust beveiligingsnetwerk afgestemd op uw specifieke behoeften."],
    g1: ["Video Surveillance", "Vidéosurveillance", "Videobewaking"],
    g2: ["Access Control", "Contrôle d'accès", "Toegangscontrole"],
    g3: ["Leak Detection", "Détection de fuite", "Lekdetectie"],
    g4: ["Gas & Fire Safety", "Sécurité gaz et incendie", "Gas- en brandveiligheid"],
  },
  solar: {
    label: ["Alternative Energy", "Énergie Alternative", "Alternatieve Energie"],
    c1t: ["Renewable Energy Systems", "Systèmes d'Énergie Renouvelable", "Hernieuwbare Energiesystemen"],
    c1d: ["Professional integration of renewable energy systems. We expertly install high-efficiency solar panels, grid inverters, and home EV chargers, creating a seamless ecosystem that maximizes your energy production and usage.", "Intégration professionnelle de systèmes d'énergie renouvelable. Nous installons habilement des panneaux solaires à haute efficacité, des onduleurs réseau et des chargeurs pour VE domestiques, créant un écosystème transparent qui maximise votre production et utilisation d'énergie.", "Professionele integratie van hernieuwbare energiesystemen. Wij installeren vakkundig hoogrenderende zonnepanelen, netomvormers en EV-laders voor thuis, waardoor een naadloos ecosysteem ontstaat dat uw energieproductie en -gebruik maximaliseert."],
    c2t: ["Grid Inverters", "Onduleurs Réseau", "Netomvormers"],
    c2d: ["Equipment for converting solar energy and transmitting it to the internal grid.", "Équipement pour la conversion de l'énergie solaire et sa transmission au réseau interne.", "Apparatuur voor het omzetten van zonne-energie en het verzenden ervan naar het interne net."],
    g1: ["Solar Panels", "Panneaux solaires", "Zonnepanelen"],
    g2: ["Grid Inverters", "Onduleurs réseau", "Netomvormers"],
    g3: ["EV Charging", "Recharge VE", "EV-laden"],
    g4: ["Energy Storage", "Stockage d'énergie", "Energieopslag"],
  },
  ev: {
    label: ["EV Charging", "Recharge VE", "EV-laden"],
    c1t: ["Premium EV Charging Stations", "Bornes de Recharge VE Premium", "Premium EV-laadstations"],
    c1d: ["Power up your vehicle safely and efficiently from the comfort of your home. We install premium EV charging stations with smart load balancing, ensuring fast, reliable charging without overloading your home's electrical grid.", "Rechargez votre véhicule en toute sécurité et efficacité dans le confort de votre maison. Nous installons des bornes de recharge pour VE premium avec équilibrage de charge intelligent, garantissant une charge rapide et fiable sans surcharger le réseau électrique de votre maison.", "Laad uw voertuig veilig en efficiënt op vanuit het comfort van uw huis. Wij installeren premium EV-laadstations met slimme load balancing, zodat u snel en betrouwbaar kunt opladen zonder het elektriciteitsnet van uw huis te overbelasten."],
    g1: ["Premium Chargers", "Chargeurs premium", "Premium Laders"],
    g2: ["Weatherproof Units", "Unités étanches", "Weerbestendige units"],
    g3: ["Compact Wallboxes", "Boîtiers muraux compacts", "Compacte Wallboxes"],
    g4: ["Load Balancing", "Équilibrage de charge", "Load Balancing"],
    c3t: ["Outdoor Stations", "Bornes Extérieures", "Buitenstations"],
    c3d: ["Installation of protected stations in open-air parking spaces.", "Installation de bornes protégées sur les places de parking en plein air.", "Installatie van beschermde stations op openluchtparkeerplaatsen."],
  },
  spa: {
    label: ["Spa Zones", "Espaces Spa", "Spa-zones"],
    c1t: ["Pools & Jacuzzis", "Piscines et Jacuzzis", "Zwembaden & Jacuzzi's"],
    c1d: ["Safe connection of pumps, filters, and underwater lighting.", "Raccordement sécurisé des pompes, filtres et éclairages sous-marins.", "Veilige aansluiting van pompen, filters en onderwaterverlichting."],
    c2t: ["Specialized Electrical Engineering", "Ingénierie Électrique Spécialisée", "Gespecialiseerde Elektrotechniek"],
    c2d: ["Specialized electrical engineering for wet and aggressive environments. We safely connect pool filtration systems, steam generators, and specialized lighting using heat-resistant and fully waterproof materials.", "Ingénierie électrique spécialisée pour les environnements humides et agressifs. Nous raccordons en toute sécurité les systèmes de filtration de piscine, les générateurs de vapeur et l'éclairage spécialisé à l'aide de matériaux résistants à la chaleur et entièrement étanches.", "Gespecialiseerde elektrotechniek voor natte en agressieve omgevingen. We sluiten zwembadfiltratiesystemen, stoomgeneratoren en gespecialiseerde verlichting veilig aan met behulp van hittebestendige en volledig waterdichte materialen."],
    g1: ["Pools & Jacuzzis", "Piscines et Jacuzzis", "Zwembaden & Jacuzzi's"],
    g2: ["Saunas & Hammams", "Saunas et Hammams", "Sauna's & Hammams"],
    g3: ["IP68 Protection", "Protection IP68", "IP68-bescherming"],
    g4: ["Pump Filtration", "Filtration par pompe", "Pompfiltratie"],
  }
};

for (const [key, vals] of Object.entries(data)) {
  en[key] = {};
  fr[key] = {};
  nl[key] = {};
  
  for (const [prop, arr] of Object.entries(vals)) {
    en[key][prop] = arr[0];
    fr[key][prop] = arr[1];
    nl[key][prop] = arr[2];
  }
}

const enPath = path.join(__dirname, 'src/shared/config/i18n/locales/en.json');
const frPath = path.join(__dirname, 'src/shared/config/i18n/locales/fr.json');
const nlPath = path.join(__dirname, 'src/shared/config/i18n/locales/nl.json');

const updateJson = (file, obj) => {
  const parsed = JSON.parse(fs.readFileSync(file, 'utf8'));
  parsed.servicesData = obj;
  fs.writeFileSync(file, JSON.stringify(parsed, null, 2));
};

updateJson(enPath, en);
updateJson(frPath, fr);
updateJson(nlPath, nl);

// Replace hardcoded strings in Services.jsx
const replaces = {
  '"Wiring & Cabling"': "t('servicesData.wiring.label')",
  '"Rough-in Wiring"': "t('servicesData.wiring.c1t')",
  '"Полная прокладка кабельных трасс по европейским стандартам с учетом всех нагрузок."': "t('servicesData.wiring.c1d')",
  '"Professional Wiring Solutions"': "t('servicesData.wiring.c2t')",
  '"Professional wiring services for projects of any scale. We handle complete electrical distribution: from the main service entrance to the final points for outlets, switches, and networking. We use reliable materials and design the wiring to be easy to maintain."': "t('servicesData.wiring.c2d')",
  '>System Design<': ">{t('servicesData.wiring.g1')}<",
  '>Cable Routing<': ">{t('servicesData.wiring.g2')}<",
  '>Easy Maintenance<': ">{t('servicesData.wiring.g3')}<",
  '>Precision & Safety<': ">{t('servicesData.wiring.g4')}<",

  '"Switchboards"': "t('servicesData.panels.label')",
  '"Professional Switchboard Installations"': "t('servicesData.panels.c1t')",
  '"Professional switchboard installations designed for modern high-load households. We build meticulously organized panels equipped with advanced protection systems to safeguard your electronics from surges and electrical faults."': "t('servicesData.panels.c1d')",
  '"Protection Automation"': "t('servicesData.panels.c2t')",
  '"Image Card (Text ignored)"': "t('servicesData.panels.c2d')",
  '>Advanced Protection<': ">{t('servicesData.panels.g1')}<",
  '>Smart Integration<': ">{t('servicesData.panels.g2')}<",
  '>Professional Design<': ">{t('servicesData.panels.g3')}<",
  '>Clean Assembly<': ">{t('servicesData.panels.g4')}<",

  '"Smart Home"': "t('servicesData.smart.label')",
  '"Complete Home Automation"': "t('servicesData.smart.c1t')",
  '"Complete home automation for effortless control over your environment. We synchronize your lighting, climate systems, and motorized blinds, creating a stable infrastructure that works exactly as you want it to."': "t('servicesData.smart.c1d')",
  '>Intelligent Lighting<': ">{t('servicesData.smart.g1')}<",
  '>Precision Climate<': ">{t('servicesData.smart.g2')}<",
  '>Automated Shading<': ">{t('servicesData.smart.g3')}<",
  '>Centralized Control<': ">{t('servicesData.smart.g4')}<",

  '"Backup Power"': "t('servicesData.power.label')",
  '"Professional Power Integration"': "t('servicesData.power.c1t')",
  [`"Professional integration of independent power sources tailored to your home's energy demands. We provide full-cycle installation of UPS systems and standby generators, guaranteeing stable electricity for your most critical systems."`]: "t('servicesData.power.c1d')",
  '"UPS Systems"': "t('servicesData.power.c2t')",
  '"Источники бесперебойного питания для защиты серверов, котлов и умного дома."': "t('servicesData.power.c2d')",
  '>Standby Generators<': ">{t('servicesData.power.g1')}<",
  '>Battery Storage & UPS<': ">{t('servicesData.power.g2')}<",
  '>Automatic Transfer<': ">{t('servicesData.power.g3')}<",
  '>Total Autonomy<': ">{t('servicesData.power.g4')}<",

  '"Heating & Climate"': "t('servicesData.heating.label')",
  '"Comprehensive Heating Solutions"': "t('servicesData.heating.c1t')",
  '"Comprehensive heating solutions for absolute comfort in any weather. We specialize in energy-efficient underfloor heating and smart climate control, ensuring your home maintains the perfect temperature all year round."': "t('servicesData.heating.c1d')",
  '>Underfloor Heating<': ">{t('servicesData.heating.g1')}<",
  '>Boiler Integration<': ">{t('servicesData.heating.g2')}<",
  '>Smart Thermostats<': ">{t('servicesData.heating.g3')}<",
  '>App Climate Control<': ">{t('servicesData.heating.g4')}<",
  '"Boiler Room Wiring"': "t('servicesData.heating.c3t')",
  '"Электрическое подключение тепловых насосов, котлов и насосных групп."': "t('servicesData.heating.c3d')",

  '"Security"': "t('servicesData.security.label')",
  '"Video Surveillance"': "t('servicesData.security.c1t')",
  '"Установка IP-камер с удаленным доступом и облачным хранением архива."': "t('servicesData.security.c1d')",
  '"Comprehensive Property Protection"': "t('servicesData.security.c2t')",
  '"Comprehensive property protection built on smart technologies. From reliable IP cameras and video intercoms to automated water shut-off valves, we install a robust security network tailored to your specific needs."': "t('servicesData.security.c2d')",
  '>Video Surveillance<': ">{t('servicesData.security.g1')}<",
  '>Access Control<': ">{t('servicesData.security.g2')}<",
  '>Leak Detection<': ">{t('servicesData.security.g3')}<",
  '>Gas & Fire Safety<': ">{t('servicesData.security.g4')}<",

  '"Alternative Energy"': "t('servicesData.solar.label')",
  '"Renewable Energy Systems"': "t('servicesData.solar.c1t')",
  '"Professional integration of renewable energy systems. We expertly install high-efficiency solar panels, grid inverters, and home EV chargers, creating a seamless ecosystem that maximizes your energy production and usage."': "t('servicesData.solar.c1d')",
  '"Grid Inverters"': "t('servicesData.solar.c2t')",
  '"Оборудование для конвертации солнечной энергии и передачи её во внутреннюю сеть."': "t('servicesData.solar.c2d')",
  '>Solar Panels<': ">{t('servicesData.solar.g1')}<",
  '>Grid Inverters<': ">{t('servicesData.solar.g2')}<",
  '>EV Charging<': ">{t('servicesData.solar.g3')}<",
  '>Energy Storage<': ">{t('servicesData.solar.g4')}<",

  '"EV Charging"': "t('servicesData.ev.label')",
  '"Premium EV Charging Stations"': "t('servicesData.ev.c1t')",
  [`"Power up your vehicle safely and efficiently from the comfort of your home. We install premium EV charging stations with smart load balancing, ensuring fast, reliable charging without overloading your home's electrical grid."`]: "t('servicesData.ev.c1d')",
  '>Premium Chargers<': ">{t('servicesData.ev.g1')}<",
  '>Weatherproof Units<': ">{t('servicesData.ev.g2')}<",
  '>Compact Wallboxes<': ">{t('servicesData.ev.g3')}<",
  '>Load Balancing<': ">{t('servicesData.ev.g4')}<",
  '"Outdoor Stations"': "t('servicesData.ev.c3t')",
  '"Монтаж защищенных станций на парковочных местах под открытым небом."': "t('servicesData.ev.c3d')",

  '"Spa Zones"': "t('servicesData.spa.label')",
  '"Pools & Jacuzzis"': "t('servicesData.spa.c1t')",
  '"Безопасное подключение насосов, фильтров и подводного освещения."': "t('servicesData.spa.c1d')",
  '"Specialized Electrical Engineering"': "t('servicesData.spa.c2t')",
  '"Specialized electrical engineering for wet and aggressive environments. We safely connect pool filtration systems, steam generators, and specialized lighting using heat-resistant and fully waterproof materials."': "t('servicesData.spa.c2d')",
  '>Pools & Jacuzzis<': ">{t('servicesData.spa.g1')}<",
  '>Saunas & Hammams<': ">{t('servicesData.spa.g2')}<",
  '>IP68 Protection<': ">{t('servicesData.spa.g3')}<",
  '>Pump Filtration<': ">{t('servicesData.spa.g4')}<",
};

for (const [search, replace] of Object.entries(replaces)) {
  content = content.replaceAll(search, replace);
}

fs.writeFileSync(servicesFile, content);
console.log('Successfully updated Services.jsx and JSON files.');
