const fs = require('fs');
const path = require('path');

const en = {
  desc: "Premium residential electrical deployment. We build the invisible foundation of your home.",
  mission: "Our Mission",
  slogan: "Flawless Electrical Solutions.",
  services: "Services",
  link1: "Wiring Setup",
  link2: "Panel Upgrades",
  link3: "Smart Home",
  link4: "Lighting Design",
  link5: "Maintenance",
  contactTitle: "Contact",
  copyright: "All rights reserved.",
  privacyPolicy: "Privacy Policy",
  termsOfService: "Terms of Service"
};

const fr = {
  desc: "Déploiement électrique résidentiel haut de gamme. Nous construisons la fondation invisible de votre maison.",
  mission: "Notre Mission",
  slogan: "Des Solutions Électriques Impeccables.",
  services: "Services",
  link1: "Câblage",
  link2: "Mise à Niveau de Panneaux",
  link3: "Maison Intelligente",
  link4: "Conception d'Éclairage",
  link5: "Entretien",
  contactTitle: "Contact",
  copyright: "Tous droits réservés.",
  privacyPolicy: "Politique de Confidentialité",
  termsOfService: "Conditions d'Utilisation"
};

const nl = {
  desc: "Hoogwaardige residentiële elektrische implementatie. Wij bouwen de onzichtbare fundering van uw huis.",
  mission: "Onze Missie",
  slogan: "Foutloze Elektrische Oplossingen.",
  services: "Diensten",
  link1: "Bedrading",
  link2: "Paneelupgrades",
  link3: "Smart Home",
  link4: "Lichtontwerp",
  link5: "Onderhoud",
  contactTitle: "Contact",
  copyright: "Alle rechten voorbehouden.",
  privacyPolicy: "Privacybeleid",
  termsOfService: "Servicevoorwaarden"
};

const updateJson = (lang, obj) => {
  const filePath = path.join(__dirname, `src/shared/config/i18n/locales/${lang}.json`);
  const parsed = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  parsed.footer = obj;
  fs.writeFileSync(filePath, JSON.stringify(parsed, null, 2));
};

updateJson('en', en);
updateJson('fr', fr);
updateJson('nl', nl);

// Update Footer.jsx
const footerFile = path.join(__dirname, 'src/widgets/footer/Footer/ui/Footer.jsx');
let content = fs.readFileSync(footerFile, 'utf8');

if (!content.includes("useTranslation")) {
  content = content.replace("import styles from './Footer.module.css';", "import styles from './Footer.module.css';\nimport { useTranslation } from 'react-i18next';");
}

if (!content.includes("const { t } = useTranslation();")) {
  content = content.replace("const currentYear = new Date().getFullYear();", "const currentYear = new Date().getFullYear();\n  const { t } = useTranslation();");
}

const replaces = [
  ['Premium residential electrical deployment. We build the invisible foundation of your home.', '{t("footer.desc")}'],
  ['<h4>Our Mission</h4>', '<h4>{t("footer.mission")}</h4>'],
  ['Flawless Electrical Solutions.', '{t("footer.slogan")}'],
  ['<h4>Services</h4>', '<h4>{t("footer.services")}</h4>'],
  ['<li><a href="#">Wiring Setup</a></li>', '<li><a href="#">{t("footer.link1")}</a></li>'],
  ['<li><a href="#">Panel Upgrades</a></li>', '<li><a href="#">{t("footer.link2")}</a></li>'],
  ['<li><a href="#">Smart Home</a></li>', '<li><a href="#">{t("footer.link3")}</a></li>'],
  ['<li><a href="#">Lighting Design</a></li>', '<li><a href="#">{t("footer.link4")}</a></li>'],
  ['<li><a href="#">Maintenance</a></li>', '<li><a href="#">{t("footer.link5")}</a></li>'],
  ['<h4>Contact</h4>', '<h4>{t("footer.contactTitle")}</h4>'],
  ['<span>123 Energy Blvd, Tech District<br/>New York, NY 10001</span>', '<span>{t("contact.officeAddress1")}<br/>{t("contact.officeAddress2")}</span>'],
  ['All rights reserved.', '{t("footer.copyright")}'],
  ['<a href="#">Privacy Policy</a>', '<a href="#">{t("footer.privacyPolicy")}</a>'],
  ['<a href="#">Terms of Service</a>', '<a href="#">{t("footer.termsOfService")}</a>']
];

for (const [search, replace] of replaces) {
  content = content.replace(search, replace);
}

fs.writeFileSync(footerFile, content);
console.log('Successfully updated footer translations.');
