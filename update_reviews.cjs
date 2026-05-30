const fs = require('fs');
const path = require('path');

const en = {
  label: "Testimonials",
  title: "What Our Clients Say",
  r1: { role: "Homeowner", text: "Tempelor completely rewired our 1950s house. The team was incredibly professional, clean, and the final panel looks like a work of art. I sleep much better knowing our home is safe." },
  r2: { role: "Architect", text: "As an architect, I appreciate contractors who understand both functionality and aesthetics. Tempelor's smart home integration was flawless. Highly recommended for luxury builds." },
  r3: { role: "Business Owner", text: "We hired them for a custom lighting and electrical setup in our new smart home. They finished exactly on schedule and passed all city inspections on the very first try." }
};

const fr = {
  label: "Témoignages",
  title: "Ce Que Disent Nos Clients",
  r1: { role: "Propriétaire", text: "Tempelor a entièrement recâblé notre maison des années 1950. L'équipe était incroyablement professionnelle, propre, et le tableau final ressemble à une œuvre d'art. Je dors beaucoup mieux en sachant que notre maison est en sécurité." },
  r2: { role: "Architecte", text: "En tant qu'architecte, j'apprécie les entrepreneurs qui comprennent à la fois la fonctionnalité et l'esthétique. L'intégration de la maison intelligente par Tempelor était impeccable. Fortement recommandé pour les constructions de luxe." },
  r3: { role: "Chef d'entreprise", text: "Nous les avons engagés pour une installation électrique et un éclairage sur mesure dans notre nouvelle maison intelligente. Ils ont terminé exactement dans les délais et ont réussi toutes les inspections de la ville du premier coup." }
};

const nl = {
  label: "Getuigenissen",
  title: "Wat Onze Klanten Zeggen",
  r1: { role: "Huiseigenaar", text: "Tempelor heeft ons huis uit de jaren 50 volledig opnieuw bedraad. Het team was ongelooflijk professioneel, netjes en het uiteindelijke paneel ziet eruit als een kunstwerk. Ik slaap een stuk beter in de wetenschap dat ons huis veilig is." },
  r2: { role: "Architect", text: "Als architect waardeer ik aannemers die zowel functionaliteit als esthetiek begrijpen. De smart home integratie van Tempelor was vlekkeloos. Ten zeerste aanbevolen voor luxe bouwprojecten." },
  r3: { role: "Ondernemer", text: "We hebben ze ingehuurd voor een op maat gemaakte verlichting en elektrische installatie in ons nieuwe smart home. Ze waren precies op schema klaar en kwamen in één keer door alle stadsinspecties." }
};

const updateJson = (lang, obj) => {
  const filePath = path.join(__dirname, `src/shared/config/i18n/locales/${lang}.json`);
  const parsed = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  parsed.reviews = obj;
  fs.writeFileSync(filePath, JSON.stringify(parsed, null, 2));
};

updateJson('en', en);
updateJson('fr', fr);
updateJson('nl', nl);

const reviewsFile = path.join(__dirname, 'src/widgets/marketing/Reviews/ui/Reviews.jsx');
let content = fs.readFileSync(reviewsFile, 'utf8');

if (!content.includes("useTranslation")) {
  content = content.replace("import { motion } from 'framer-motion';", "import { motion } from 'framer-motion';\nimport { useTranslation } from 'react-i18next';");
}

if (!content.includes("const { t } = useTranslation();")) {
  content = content.replace("const Reviews = () => {", "const Reviews = () => {\n  const { t } = useTranslation();");
}

const replaces = [
  ['<span className={styles.accentSlash}>//</span> Testimonials', '<span className={styles.accentSlash}>//</span> {t("reviews.label")}'],
  ['<h2 className={styles.title}>What Our Clients Say</h2>', '<h2 className={styles.title}>{t("reviews.title")}</h2>']
];

for (const [search, replace] of replaces) {
  content = content.replace(search, replace);
}

// Replace the array content with translations
const oldArray = `  const reviewsList = [
    {
      name: "Arthur De Smet",
      role: "Homeowner",
      text: "Tempelor completely rewired our 1950s house. The team was incredibly professional, clean, and the final panel looks like a work of art. I sleep much better knowing our home is safe."
    },
    {
      name: "Sophie Van den Berghe",
      role: "Architect",
      text: "As an architect, I appreciate contractors who understand both functionality and aesthetics. Tempelor's smart home integration was flawless. Highly recommended for luxury builds."
    },
    {
      name: "Laurent Dubois",
      role: "Business Owner",
      text: "We hired them for a custom lighting and electrical setup in our new smart home. They finished exactly on schedule and passed all city inspections on the very first try."
    }
  ];`;

const newArray = `  const reviewsList = [
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
  ];`;

content = content.replace(oldArray, newArray);

fs.writeFileSync(reviewsFile, content);
console.log('Successfully updated reviews translations.');
