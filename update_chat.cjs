const fs = require('fs');
const path = require('path');

const en = {
  welcome: "Hello! How can we help you with your electrical project today?",
  support: "Support",
  placeholder: "Type your message...",
  button: "Chat"
};

const fr = {
  welcome: "Bonjour ! Comment pouvons-nous vous aider avec votre projet électrique aujourd'hui ?",
  support: "Support",
  placeholder: "Tapez votre message...",
  button: "Chat"
};

const nl = {
  welcome: "Hallo! Hoe kunnen we u vandaag helpen met uw elektrische project?",
  support: "Support",
  placeholder: "Typ uw bericht...",
  button: "Chat"
};

const updateJson = (lang, obj) => {
  const filePath = path.join(__dirname, `src/shared/config/i18n/locales/${lang}.json`);
  const parsed = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  parsed.chat = obj;
  fs.writeFileSync(filePath, JSON.stringify(parsed, null, 2));
};

updateJson('en', en);
updateJson('fr', fr);
updateJson('nl', nl);

// Update ChatWidget.jsx
const chatFile = path.join(__dirname, 'src/widgets/marketing/ChatWidget/ui/ChatWidget.jsx');
let content = fs.readFileSync(chatFile, 'utf8');

// Add import
if (!content.includes("useTranslation")) {
  content = content.replace("import { motion, AnimatePresence } from 'framer-motion';", "import { motion, AnimatePresence } from 'framer-motion';\nimport { useTranslation } from 'react-i18next';");
}

// Add hook
if (!content.includes("const { t } = useTranslation();")) {
  content = content.replace("export const ChatWidget = () => {", "export const ChatWidget = () => {\n  const { t } = useTranslation();");
}

// Replace texts
const replaces = [
  ['"Hello! How can we help you with your electrical project today?"', 't("chat.welcome")'],
  ['Support\n              </div>', '{t("chat.support")}\n              </div>'],
  ['placeholder="Type your message..."', 'placeholder={t("chat.placeholder")}'],
  ['        </svg>\n        Chat\n      </motion.button>', '        </svg>\n        {t("chat.button")}\n      </motion.button>']
];

for (const [search, replace] of replaces) {
  // Use replaceAll for the welcome string since it appears twice
  if (search.includes("Hello!")) {
    content = content.replaceAll(search, replace);
  } else {
    content = content.replace(search, replace);
  }
}

fs.writeFileSync(chatFile, content);
console.log('Successfully updated chat widget translations.');
