const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, 'src/shared/config/i18n/locales/en.json');
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

// Restore original strings in English JSON that were translated from Russian
en.servicesData.wiring.c1d = "Полная прокладка кабельных трасс по европейским стандартам с учетом всех нагрузок.";
en.servicesData.power.c2d = "Источники бесперебойного питания для защиты серверов, котлов и умного дома.";
en.servicesData.heating.c3d = "Электрическое подключение тепловых насосов, котлов и насосных групп.";
en.servicesData.security.c1d = "Установка IP-камер с удаленным доступом и облачным хранением архива.";
en.servicesData.solar.c2d = "Оборудование для конвертации солнечной энергии и передачи её во внутреннюю сеть.";
en.servicesData.ev.c3d = "Монтаж защищенных станций на парковочных местах под открытым небом.";
en.servicesData.spa.c1d = "Безопасное подключение насосов, фильтров и подводного освещения.";

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
console.log('Restored original texts to en.json');
