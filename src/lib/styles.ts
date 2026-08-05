import styleScandi from "@/assets/style-scandi.jpg";
import styleLoft from "@/assets/style-loft.jpg";
import styleMinimal from "@/assets/style-minimal.jpg";
import styleClassic from "@/assets/style-classic.jpg";
import styleJapandi from "@/assets/style-japandi.jpg";
import styleHygge from "@/assets/style-hygge.jpg";
import styleNeoclassic from "@/assets/style-neoclassic.jpg";
import styleEclectic from "@/assets/style-eclectic.jpg";
import styleBoho from "@/assets/style-boho.jpg";
import roomKitchen from "@/assets/room-kitchen.jpg";
import roomBath from "@/assets/room-bath.jpg";
import roomKids from "@/assets/room-kids.jpg";

import facadeModern from "@/assets/facade-modern.jpg";
import facadeScandi from "@/assets/facade-scandi.jpg";
import facadeClassic from "@/assets/facade-classic.jpg";
import facadeLoft from "@/assets/facade-loft.jpg";
import facadeChalet from "@/assets/facade-chalet.jpg";
import facadeHitech from "@/assets/facade-hitech.jpg";
import facadeMedit from "@/assets/facade-medit.jpg";
import facadeEco from "@/assets/facade-eco.jpg";
import facadeMinimal from "@/assets/facade-minimal.jpg";
import facadeBarnhouse from "@/assets/facade-barnhouse.jpg";

import landNatural from "@/assets/land-natural.jpg";
import landFormal from "@/assets/land-formal.jpg";
import landMinimal from "@/assets/land-minimal.jpg";
import landJapan from "@/assets/land-japan.jpg";
import landMedit from "@/assets/land-medit.jpg";
import landCountry from "@/assets/land-country.jpg";
import landNordic from "@/assets/land-nordic.jpg";
import landModern from "@/assets/land-modern.jpg";
import landAlpine from "@/assets/land-alpine.jpg";
import landProvence from "@/assets/land-provence.jpg";
import landManor from "@/assets/land-manor.jpg";
import landContemporary from "@/assets/land-contemporary.jpg";

/**
 * ЕДИНЫЙ ИСТОЧНИК СТИЛЕЙ ДЛЯ ВСЕГО САЙТА.
 * Используется на публичных страницах (/interior, /landscape, /facade),
 * в списке стилей на /pricing и в карточках выбора стиля в генераторе.
 * Правки вносим только здесь.
 */
export type StyleItem = { id: string; name: string; desc: string; image: string };

export const interiorStyleList: StyleItem[] = [
  { id: "scandi", name: "Сканди", desc: "Светлое дерево и мягкий текстиль", image: styleScandi },
  { id: "loft", name: "Лофт", desc: "Кирпич, металл, открытые коммуникации", image: styleLoft },
  { id: "minimal", name: "Минимализм", desc: "Чистые линии, ничего лишнего", image: styleMinimal },
  { id: "classic", name: "Классика", desc: "Молдинги, симметрия, благородные тона", image: styleClassic },
  { id: "japandi", name: "Джапанди", desc: "Японская сдержанность и северный уют", image: styleJapandi },
  { id: "hygge", name: "Хюгге", desc: "Тёплый свет, пледы, натуральные фактуры", image: styleHygge },
  { id: "modern", name: "Современный", desc: "Актуальные формы и материалы", image: roomKitchen },
  { id: "boho", name: "Бохо", desc: "Ротанг, растения, этнические узоры", image: styleBoho },
  { id: "spa-minimal", name: "Спа-минимализм", desc: "Микроцемент и мягкий свет", image: roomBath },
  { id: "warm-neutral", name: "Тёплый нейтральный", desc: "Дерево и молочные оттенки", image: roomKids },
  { id: "neoclassic", name: "Неоклассика", desc: "Лепнина в спокойной серой гамме", image: styleNeoclassic },
  { id: "eclectic", name: "Эклектика", desc: "Смешение эпох, яркое искусство", image: styleEclectic },
];

export const facadeStyleList: StyleItem[] = [
  { id: "modern-facade", name: "Современный", desc: "Чистые формы, большие окна, минимум декора", image: facadeModern },
  { id: "scandi-facade", name: "Скандинавский", desc: "Светлое дерево, простые линии, тёплый уют", image: facadeScandi },
  { id: "classic-facade", name: "Классический", desc: "Симметрия, лепнина, благородные пропорции", image: facadeClassic },
  { id: "loft-facade", name: "Лофт", desc: "Кирпич, металл, индустриальные детали", image: facadeLoft },
  { id: "chalet", name: "Шале", desc: "Дерево и камень, покатая крыша, горный характер", image: facadeChalet },
  { id: "hitech", name: "Хай-тек", desc: "Стекло, металл, технологичный силуэт", image: facadeHitech },
  { id: "medit-facade", name: "Средиземноморский", desc: "Штукатурка, черепица, тёплые оттенки", image: facadeMedit },
  { id: "eco-facade", name: "Эко-стиль", desc: "Натуральные материалы и зелёные акценты", image: facadeEco },
  { id: "minimal-facade", name: "Минимализм", desc: "Белая штукатурка и лаконичная геометрия", image: facadeMinimal },
  { id: "barnhouse", name: "Барнхаус", desc: "Тёмное дерево, острый щипец, панорамы", image: facadeBarnhouse },
];

export const landscapeStyleList: StyleItem[] = [
  { id: "natural", name: "Природный", desc: "Свободные формы, естественные посадки, минимум ухода", image: landNatural },
  { id: "formal", name: "Регулярный", desc: "Симметрия, стриженые кустарники, чёткие линии", image: landFormal },
  { id: "minimal-yard", name: "Минималистичный двор", desc: "Газон, мощение, несколько акцентных растений", image: landMinimal },
  { id: "jp-garden", name: "Японский сад", desc: "Камни, вода, сдержанная палитра", image: landJapan },
  { id: "medit-garden", name: "Средиземноморский", desc: "Гравий, хвойники, керамика, тёплые тона", image: landMedit },
  { id: "country", name: "Кантри", desc: "Грядки, плодовые деревья, домашний уют", image: landCountry },
  { id: "nordic", name: "Северный/хвойный", desc: "Хвойники, натуральный камень, приглушённые тона", image: landNordic },
  { id: "modern-yard", name: "Современный", desc: "Геометричное мощение, чёткие зоны, лаконичное озеленение", image: landModern },
  { id: "alpine", name: "Альпийский", desc: "Камни, террасы и карликовые хвойники", image: landAlpine },
  { id: "provence", name: "Прованс", desc: "Лаванда, гравий, тёплый южный свет", image: landProvence },
  { id: "manor", name: "Русская усадьба", desc: "Березовая аллея, беседка, яблони", image: landManor },
  { id: "contemporary", name: "Контемпорари", desc: "Крупноформатные плиты, злаки, подсветка", image: landContemporary },
];

export const styleGroups = [
  { tab: "interior" as const, group: "Интерьер", items: interiorStyleList },
  { tab: "facade" as const, group: "Фасад", items: facadeStyleList },
  { tab: "landscape" as const, group: "Ландшафт", items: landscapeStyleList },
];

export const totalStyles = styleGroups.reduce((n, g) => n + g.items.length, 0);
