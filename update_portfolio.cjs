const fs = require('fs');
const path = require('path');

const en = {
  label: "Portfolio",
  allProjects: "All projects",
  selectProject: "Select a project",
  bookConsultation: "Book a consultation",
  boudewijn: { label: "Boudewijn", title: "Project Boudewijn", desc: "Complete electrical installation and smart home integration for the Boudewijn project. We ensured maximum safety and flawless aesthetic integration.", tag1: "Installation", tag2: "Smart Home" },
  edegem: { label: "Edegem", title: "Project Edegem", desc: "Modernization of electrical systems and custom lighting design.", tag1: "Modernization", tag2: "Lighting" },
  heideland: { label: "Heideland", title: "Project Heideland", desc: "Full residential rewiring and safety upgrades.", tag1: "Rewiring", tag2: "Safety" },
  laureysstraat: { label: "Laureysstraat", title: "Project Laureysstraat", desc: "Advanced panel upgrades and exterior lighting.", tag1: "Panel Upgrade", tag2: "Exterior" },
  leksklyuze: { label: "Leksklyuze", title: "Project Leksklyuze", desc: "Smart climate control and network infrastructure.", tag1: "Network", tag2: "Automation" },
  oogststraat: { label: "Oogststraat", title: "Project Oogststraat", desc: "Comprehensive energy management and solar integration.", tag1: "Solar", tag2: "Energy" },
  potter: { label: "Potter", title: "Project Potter", desc: "Industrial style residential electrical setup and custom routing.", tag1: "Industrial", tag2: "Routing" },
  spoorweglaan: { label: "Spoorweglaan", title: "Project Spoorweglaan", desc: "Luxury estate electrical foundation and security systems.", tag1: "Security", tag2: "Luxury Estate" }
};

const fr = {
  label: "Portefeuille",
  allProjects: "Tous les projets",
  selectProject: "Sélectionnez un projet",
  bookConsultation: "Réserver une consultation",
  boudewijn: { label: "Boudewijn", title: "Projet Boudewijn", desc: "Installation électrique complète et intégration de maison intelligente pour le projet Boudewijn. Nous avons assuré une sécurité maximale et une intégration esthétique parfaite.", tag1: "Installation", tag2: "Maison Intelligente" },
  edegem: { label: "Edegem", title: "Projet Edegem", desc: "Modernisation des systèmes électriques et conception d'éclairage sur mesure.", tag1: "Modernisation", tag2: "Éclairage" },
  heideland: { label: "Heideland", title: "Projet Heideland", desc: "Recâblage résidentiel complet et mises aux normes de sécurité.", tag1: "Recâblage", tag2: "Sécurité" },
  laureysstraat: { label: "Laureysstraat", title: "Projet Laureysstraat", desc: "Mises à niveau de panneaux avancées et éclairage extérieur.", tag1: "Mise à Niveau Panneau", tag2: "Extérieur" },
  leksklyuze: { label: "Leksklyuze", title: "Projet Leksklyuze", desc: "Contrôle climatique intelligent et infrastructure réseau.", tag1: "Réseau", tag2: "Automatisation" },
  oogststraat: { label: "Oogststraat", title: "Projet Oogststraat", desc: "Gestion globale de l'énergie et intégration solaire.", tag1: "Solaire", tag2: "Énergie" },
  potter: { label: "Potter", title: "Projet Potter", desc: "Installation électrique résidentielle de style industriel et routage sur mesure.", tag1: "Industriel", tag2: "Routage" },
  spoorweglaan: { label: "Spoorweglaan", title: "Projet Spoorweglaan", desc: "Fondation électrique pour domaine de luxe et systèmes de sécurité.", tag1: "Sécurité", tag2: "Domaine de Luxe" }
};

const nl = {
  label: "Portfolio",
  allProjects: "Alle projecten",
  selectProject: "Selecteer een project",
  bookConsultation: "Boek een consult",
  boudewijn: { label: "Boudewijn", title: "Project Boudewijn", desc: "Complete elektrische installatie en smart home integratie voor het Boudewijn project. We zorgden voor maximale veiligheid en een feilloze esthetische integratie.", tag1: "Installatie", tag2: "Smart Home" },
  edegem: { label: "Edegem", title: "Project Edegem", desc: "Modernisering van elektrische systemen en op maat gemaakt lichtontwerp.", tag1: "Modernisering", tag2: "Verlichting" },
  heideland: { label: "Heideland", title: "Project Heideland", desc: "Volledige residentiële herbedrading en veiligheidsupgrades.", tag1: "Herbedrading", tag2: "Veiligheid" },
  laureysstraat: { label: "Laureysstraat", title: "Project Laureysstraat", desc: "Geavanceerde paneelupgrades en buitenverlichting.", tag1: "Paneelupgrade", tag2: "Buiten" },
  leksklyuze: { label: "Leksklyuze", title: "Project Leksklyuze", desc: "Slimme klimaatregeling en netwerkinfrastructuur.", tag1: "Netwerk", tag2: "Automatisering" },
  oogststraat: { label: "Oogststraat", title: "Project Oogststraat", desc: "Uitgebreid energiebeheer en zonne-integratie.", tag1: "Zonne-energie", tag2: "Energie" },
  potter: { label: "Potter", title: "Project Potter", desc: "Residentiële elektrische installatie in industriële stijl en op maat gemaakte routing.", tag1: "Industrieel", tag2: "Routing" },
  spoorweglaan: { label: "Spoorweglaan", title: "Project Spoorweglaan", desc: "Elektrische fundering en beveiligingssystemen voor luxe landgoed.", tag1: "Beveiliging", tag2: "Luxe Landgoed" }
};

const updateJson = (lang, obj) => {
  const filePath = path.join(__dirname, `src/shared/config/i18n/locales/${lang}.json`);
  const parsed = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  parsed.portfolio = obj;
  fs.writeFileSync(filePath, JSON.stringify(parsed, null, 2));
};

updateJson('en', en);
updateJson('fr', fr);
updateJson('nl', nl);

// Update Projects.jsx
const projectsFile = path.join(__dirname, 'src/widgets/projects/Projects/ui/Projects.jsx');
let content = fs.readFileSync(projectsFile, 'utf8');

// Add import
if (!content.includes("useTranslation")) {
  content = content.replace("import { useBookingModal }", "import { useTranslation } from 'react-i18next';\nimport { useBookingModal }");
}

// Add hook
if (!content.includes("const { t } = useTranslation();")) {
  content = content.replace("const Projects = () => {", "const Projects = () => {\n  const { t } = useTranslation();");
}

// Replace texts
const replaces = [
  ['<span className={styles.accentSlash}>//</span> Portfolio', '<span className={styles.accentSlash}>//</span> {t("portfolio.label")}'],
  ['<h4 className={styles.bannerTitle}>All projects</h4>', '<h4 className={styles.bannerTitle}>{t("portfolio.allProjects")}</h4>'],
  ['<div className={styles.dropdownHeader}>Select a project</div>', '<div className={styles.dropdownHeader}>{t("portfolio.selectProject")}</div>'],
  ['Book a consultation (→)', '{t("portfolio.bookConsultation")} (→)']
];

for (const [search, replace] of replaces) {
  content = content.replace(search, replace);
}

// Replace mapping inside loop for proj
content = content.replace(
  /<h3 className={styles\.descTitle}>{proj\.title}<\/h3>\s*<p className={styles\.descText}>{proj\.desc}<\/p>\s*<div className={styles\.tags}>\s*\{proj\.tags\.map\(tag => \(\s*<span key={tag} className={styles\.tag}>{tag}<\/span>\s*\)\)\}\s*<\/div>/g,
  `<h3 className={styles.descTitle}>{t(\`portfolio.\${proj.id}.title\`)}</h3>
                    <p className={styles.descText}>{t(\`portfolio.\${proj.id}.desc\`)}</p>
                    <div className={styles.tags}>
                      <span className={styles.tag}>{t(\`portfolio.\${proj.id}.tag1\`)}</span>
                      <span className={styles.tag}>{t(\`portfolio.\${proj.id}.tag2\`)}</span>
                    </div>`
);

// Replace mapping for active
content = content.replace(
  /<h3 className={styles\.descTitle}>{active\.title}<\/h3>\s*<p className={styles\.descText}>{active\.desc}<\/p>\s*<div className={styles\.tags}>\s*\{active\.tags\.map\(tag => \(\s*<span key={tag} className={styles\.tag}>{tag}<\/span>\s*\)\)\}\s*<\/div>/g,
  `<h3 className={styles.descTitle}>{t(\`portfolio.\${active.id}.title\`)}</h3>
                <p className={styles.descText}>{t(\`portfolio.\${active.id}.desc\`)}</p>
                <div className={styles.tags}>
                  <span className={styles.tag}>{t(\`portfolio.\${active.id}.tag1\`)}</span>
                  <span className={styles.tag}>{t(\`portfolio.\${active.id}.tag2\`)}</span>
                </div>`
);

// Replace dropdown proj.label
content = content.replace(
  /\{proj\.label\}/g,
  `{t(\`portfolio.\${proj.id}.label\`)}`
);

fs.writeFileSync(projectsFile, content);
console.log('Successfully updated portfolio translations.');
