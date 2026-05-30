const fs = require('fs');
const path = require('path');

const en = {
  label: "Get in Touch",
  title: "Request an Engineer",
  subtitle: "Ready to upgrade your home's electrical system? Leave a request, and our lead engineer will contact you within 30 minutes for a free consultation.",
  phone: "Phone",
  email: "Email",
  office: "Office",
  officeAddress1: "123 Energy Blvd, Tech District",
  officeAddress2: "New York, NY 10001",
  successTitle: "Message Sent!",
  successText: "We will reach out to you very soon.",
  formFirstName: "First Name",
  formFirstNamePh: "John",
  formLastName: "Last Name",
  formLastNamePh: "Doe",
  formEmail: "Email Address",
  formEmailPh: "john.doe@example.com",
  formMessage: "Message",
  formMessagePh: "Briefly describe your project...",
  btnSending: "Sending...",
  btnSend: "Send Request"
};

const fr = {
  label: "Nous Contacter",
  title: "Demander un Ingénieur",
  subtitle: "Prêt à moderniser le système électrique de votre maison ? Laissez une demande, et notre ingénieur principal vous contactera dans les 30 minutes pour une consultation gratuite.",
  phone: "Téléphone",
  email: "E-mail",
  office: "Bureau",
  officeAddress1: "123 Energy Blvd, Tech District",
  officeAddress2: "New York, NY 10001",
  successTitle: "Message Envoyé !",
  successText: "Nous vous contacterons très bientôt.",
  formFirstName: "Prénom",
  formFirstNamePh: "Jean",
  formLastName: "Nom",
  formLastNamePh: "Dupont",
  formEmail: "Adresse E-mail",
  formEmailPh: "jean.dupont@exemple.com",
  formMessage: "Message",
  formMessagePh: "Décrivez brièvement votre projet...",
  btnSending: "Envoi...",
  btnSend: "Envoyer la Demande"
};

const nl = {
  label: "Neem Contact Op",
  title: "Vraag een Ingenieur Aan",
  subtitle: "Klaar om het elektrische systeem van uw huis te upgraden? Laat een verzoek achter en onze hoofdingenieur neemt binnen 30 minuten contact met u op voor een gratis consult.",
  phone: "Telefoon",
  email: "E-mail",
  office: "Kantoor",
  officeAddress1: "123 Energy Blvd, Tech District",
  officeAddress2: "New York, NY 10001",
  successTitle: "Bericht Verzonden!",
  successText: "We nemen zeer binnenkort contact met u op.",
  formFirstName: "Voornaam",
  formFirstNamePh: "Jan",
  formLastName: "Achternaam",
  formLastNamePh: "Jansen",
  formEmail: "E-mailadres",
  formEmailPh: "jan.jansen@voorbeeld.com",
  formMessage: "Bericht",
  formMessagePh: "Beschrijf kort uw project...",
  btnSending: "Verzenden...",
  btnSend: "Verzoek Verzenden"
};

const updateJson = (lang, obj) => {
  const filePath = path.join(__dirname, `src/shared/config/i18n/locales/${lang}.json`);
  const parsed = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  parsed.contact = obj;
  fs.writeFileSync(filePath, JSON.stringify(parsed, null, 2));
};

updateJson('en', en);
updateJson('fr', fr);
updateJson('nl', nl);

// Update Contact.jsx
const contactFile = path.join(__dirname, 'src/widgets/contact/Contact/ui/Contact.jsx');
let content = fs.readFileSync(contactFile, 'utf8');

// Add import
if (!content.includes("useTranslation")) {
  content = content.replace("import { motion, AnimatePresence } from 'framer-motion';", "import { motion, AnimatePresence } from 'framer-motion';\nimport { useTranslation } from 'react-i18next';");
}

// Add hook
if (!content.includes("const { t } = useTranslation();")) {
  content = content.replace("const Contact = () => {", "const Contact = () => {\n  const { t } = useTranslation();");
}

// Replace texts
const replaces = [
  ['<span className={styles.accentSlash}>//</span> Get in Touch', '<span className={styles.accentSlash}>//</span> {t("contact.label")}'],
  ['<h2 className={styles.title}>Request an Engineer</h2>', '<h2 className={styles.title}>{t("contact.title")}</h2>'],
  ['Ready to upgrade your home\'s electrical system? Leave a request, and our \n            lead engineer will contact you within 30 minutes for a free consultation.', '{t("contact.subtitle")}'],
  ['<h4>Phone</h4>', '<h4>{t("contact.phone")}</h4>'],
  ['<h4>Email</h4>', '<h4>{t("contact.email")}</h4>'],
  ['<h4>Office</h4>', '<h4>{t("contact.office")}</h4>'],
  ['<p>123 Energy Blvd, Tech District<br />New York, NY 10001</p>', '<p>{t("contact.officeAddress1")}<br />{t("contact.officeAddress2")}</p>'],
  ['<h3 style={{ marginBottom: \'8px\', color: \'#fff\', fontSize: \'1.5rem\' }}>Message Sent!</h3>', '<h3 style={{ marginBottom: \'8px\', color: \'#fff\', fontSize: \'1.5rem\' }}>{t("contact.successTitle")}</h3>'],
  ['<p style={{ color: \'rgba(255,255,255,0.7)\' }}>We will reach out to you very soon.</p>', '<p style={{ color: \'rgba(255,255,255,0.7)\' }}>{t("contact.successText")}</p>'],
  ['<label htmlFor="firstName">First Name</label>', '<label htmlFor="firstName">{t("contact.formFirstName")}</label>'],
  ['placeholder="John"', 'placeholder={t("contact.formFirstNamePh")}'],
  ['<label htmlFor="lastName">Last Name</label>', '<label htmlFor="lastName">{t("contact.formLastName")}</label>'],
  ['placeholder="Doe"', 'placeholder={t("contact.formLastNamePh")}'],
  ['<label htmlFor="email">Email Address</label>', '<label htmlFor="email">{t("contact.formEmail")}</label>'],
  ['placeholder="john.doe@example.com"', 'placeholder={t("contact.formEmailPh")}'],
  ['<label htmlFor="message">Message</label>', '<label htmlFor="message">{t("contact.formMessage")}</label>'],
  ['placeholder="Briefly describe your project..."', 'placeholder={t("contact.formMessagePh")}'],
  ['{isSubmitting ? \'Sending...\' : \'Send Request\'}', '{isSubmitting ? t("contact.btnSending") : t("contact.btnSend")}']
];

for (const [search, replace] of replaces) {
  content = content.replace(search, replace);
}

fs.writeFileSync(contactFile, content);
console.log('Successfully updated contact translations.');
