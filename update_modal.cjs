const fs = require('fs');
const path = require('path');

const en = {
  title: "Book a Consultation",
  desc: "Leave your phone number and our engineers will contact you shortly to discuss your project.",
  btnSubmit: "Request Callback",
  successTitle: "Request Sent!",
  successDesc: "We have received your contact details and will reach out to you very soon."
};

const fr = {
  title: "Réserver une Consultation",
  desc: "Laissez votre numéro de téléphone et nos ingénieurs vous contacteront sous peu pour discuter de votre projet.",
  btnSubmit: "Demander un Rappel",
  successTitle: "Demande Envoyée !",
  successDesc: "Nous avons reçu vos coordonnées et vous contacterons très bientôt."
};

const nl = {
  title: "Boek een Consult",
  desc: "Laat uw telefoonnummer achter en onze ingenieurs nemen binnenkort contact met u op om uw project te bespreken.",
  btnSubmit: "Terugbelverzoek Indienen",
  successTitle: "Verzoek Verzonden!",
  successDesc: "We hebben uw contactgegevens ontvangen en nemen zeer binnenkort contact met u op."
};

const updateJson = (lang, obj) => {
  const filePath = path.join(__dirname, `src/shared/config/i18n/locales/${lang}.json`);
  const parsed = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  parsed.modal = obj;
  fs.writeFileSync(filePath, JSON.stringify(parsed, null, 2));
};

updateJson('en', en);
updateJson('fr', fr);
updateJson('nl', nl);

// Update BookingModal.jsx
const modalFile = path.join(__dirname, 'src/widgets/marketing/BookingModal/ui/BookingModal.jsx');
let content = fs.readFileSync(modalFile, 'utf8');

// Add import
if (!content.includes("useTranslation")) {
  content = content.replace("import { motion, AnimatePresence } from 'framer-motion';", "import { motion, AnimatePresence } from 'framer-motion';\nimport { useTranslation } from 'react-i18next';");
}

// Add hook
if (!content.includes("const { t } = useTranslation();")) {
  content = content.replace("export const BookingModal = ({ isOpen, onClose }) => {", "export const BookingModal = ({ isOpen, onClose }) => {\n  const { t } = useTranslation();");
}

// Replace texts
const replaces = [
  ['<h3 className={styles.title}>Book a Consultation</h3>', '<h3 className={styles.title}>{t("modal.title")}</h3>'],
  ['Leave your phone number and our engineers will contact you shortly to discuss your project.', '{t("modal.desc")}'],
  ['Request Callback', '{t("modal.btnSubmit")}'],
  ['<h3>Request Sent!</h3>', '<h3>{t("modal.successTitle")}</h3>'],
  ['<p>We have received your contact details and will reach out to you very soon.</p>', '<p>{t("modal.successDesc")}</p>']
];

for (const [search, replace] of replaces) {
  content = content.replace(search, replace);
}

fs.writeFileSync(modalFile, content);
console.log('Successfully updated modal translations.');
