import interiorBefore from "@/assets/interior-before.jpg";
import interiorAfter from "@/assets/interior-after.jpg";
import exteriorBefore from "@/assets/exterior-before.jpg";
import exteriorAfter from "@/assets/exterior-after.jpg";
import landscapeBefore from "@/assets/landscape-before.jpg";
import landscapeAfter from "@/assets/landscape-after.jpg";
import styleNeoclassic from "@/assets/style-neoclassic.jpg";
import styleMinimal from "@/assets/style-minimal.jpg";
import styleHygge from "@/assets/style-hygge.jpg";
import styleJapandi from "@/assets/style-japandi.jpg";
import roomKitchen from "@/assets/room-kitchen.jpg";
import roomKids from "@/assets/room-kids.jpg";
import personAnna from "@/assets/person-anna.jpg";
import personIgor from "@/assets/person-igor.jpg";
import personMarina from "@/assets/person-marina.jpg";
import personDmitry from "@/assets/person-dmitry.jpg";
import personOlga from "@/assets/person-olga.jpg";
import personArtem from "@/assets/person-artem.jpg";
import personPolina from "@/assets/person-polina.jpg";
import personSergey from "@/assets/person-sergey.jpg";
import personKsenia from "@/assets/person-ksenia.jpg";
import personVladimir from "@/assets/person-vladimir.jpg";


export const images = {
  interiorBefore,
  interiorAfter,
  facadeBefore: exteriorBefore,
  facadeAfter: exteriorAfter,
  landscapeBefore,
  landscapeAfter,
};

export type TabId = "interior" | "landscape" | "facade";

export const tabs: { id: TabId; label: string }[] = [
  { id: "interior", label: "Интерьер" },
  { id: "landscape", label: "Ландшафт" },
  { id: "facade", label: "Фасад" },
];

export const interiorStyles = [
  { id: "scandi", name: "Сканди", desc: "Светлое дерево, мягкий текстиль" },
  { id: "loft", name: "Лофт", desc: "Кирпич, металл, открытые коммуникации" },
  { id: "minimal", name: "Минимализм", desc: "Чистые линии, ничего лишнего" },
  { id: "classic", name: "Классика", desc: "Молдинги, симметрия, благородные тона" },
  { id: "japandi", name: "Джапанди", desc: "Японская сдержанность и уют скандинавии" },
  { id: "hygge", name: "Хюгге", desc: "Тёплый свет, пледы, натуральные фактуры" },
  { id: "modern", name: "Современный", desc: "Актуальные формы и материалы" },
  { id: "boho", name: "Бохо", desc: "Ротанг, растения, этнические узоры" },
];

export const landscapeStyles = [
  { id: "eng-garden", name: "Английский сад", desc: "Живые изгороди, миксбордеры" },
  { id: "jp-garden", name: "Японский сад", desc: "Камни, вода, хвойные" },
  { id: "minimal-yard", name: "Минималистичный участок", desc: "Газон, геометрия дорожек" },
  { id: "eco", name: "Эко-стиль", desc: "Природные материалы, злаки" },
  { id: "meadow", name: "Природный луг", desc: "Злаки и многолетники без стрижки" },
  { id: "patio", name: "Патио и терраса", desc: "Зона отдыха, мощение, свет" },
];

export const facadeStyles = [
  { id: "modern-facade", name: "Современный фасад", desc: "Панели, панорамные окна" },
  { id: "scandi-house", name: "Скандинавский дом", desc: "Дерево, тёмная крыша" },
  { id: "barn", name: "Барнхаус", desc: "Строгий силуэт, тёмная отделка" },
  { id: "brick", name: "Кирпич", desc: "Клинкер и спокойная классика" },
  { id: "plaster", name: "Штукатурка", desc: "Светлые нейтральные тона" },
  { id: "night-light", name: "Вечерний свет", desc: "Архитектурная подсветка фасада" },
];

export const roomTypes = [
  "Гостиная",
  "Спальня",
  "Кухня",
  "Ванная",
  "Детская",
  "Прихожая",
  "Кабинет",
  "Студия",
];

export const landscapeTypes = [
  "Участок с газоном",
  "Двор",
  "Сад",
  "Дорожки и мощение",
  "Терраса",
  "Зона барбекю",
];
export const facadeTypes = [
  "Фасад дома",
  "Входная группа",
  "Отделка стен",
  "Кровля",
  "Вечерняя подсветка",
];


export const galleryExamples = [
  {
    style: "Сканди",
    room: "Гостиная",
    before: interiorBefore,
    after: interiorAfter,
  },
  {
    style: "Современный фасад",
    room: "Фасад дома",
    before: exteriorBefore,
    after: exteriorAfter,
  },
  {
    style: "Английский сад",
    room: "Участок с газоном",
    before: landscapeBefore,
    after: landscapeAfter,
  },
];

export const testimonials = [
  {
    name: "Анна",
    city: "Москва",
    text: "Загрузила фото пустой гостиной — за минуту получила три варианта. Ремонт наконец сдвинулся с места.",
  },
  {
    name: "Игорь",
    city: "Казань",
    text: "Показал жене визуализацию участка до начала работ. Спор о том, где будет терраса, закончился за 5 минут.",
  },
  {
    name: "Марина",
    city: "Санкт-Петербург",
    text: "Показываю клиенту варианты фасада прямо на встрече. Экономия часов работы.",
  },
];

export const plans = [
  {
    id: "start",
    name: "Старт",
    price: 490,
    credits: 20,
    desc: "Попробовать на одной комнате",
    features: ["20 генераций", "HD-качество", "Коммерческая лицензия", "История 30 дней"],
  },
  {
    id: "optimum",
    name: "Оптимум",
    price: 1290,
    credits: 70,
    popular: true,
    desc: "Для ремонта целой квартиры",
    features: [
      "70 генераций",
      "HD-качество",
      "Коммерческая лицензия",
      "Приоритетная очередь",
      "История без ограничений",
    ],
  },
  {
    id: "max",
    name: "Максимум",
    price: 2990,
    credits: 200,
    desc: "Для дизайнеров и студий",
    features: [
      "200 генераций",
      "Максимальное разрешение",
      "Коммерческая лицензия",
      "Приоритетная очередь",
      "Поддержка в чате",
    ],
  },
];

export const faqItems = [
  {
    q: "Есть ли бесплатные генерации?",
    a: "Да, после регистрации на счёт зачисляется 3 бесплатные генерации. Карта для этого не нужна.",
  },
  {
    q: "Нужно ли привязывать банковскую карту?",
    a: "Нет. Мы не используем подписки: вы покупаете разовый пакет кредитов, когда бесплатные генерации закончатся.",
  },
  {
    q: "Сохраняется ли структура помещения?",
    a: "Да. Нейросеть удерживает геометрию комнаты, окна и двери, меняя отделку, мебель и освещение.",
  },
  {
    q: "Сколько занимает генерация?",
    a: "Около 60 секунд. В часы пиковой нагрузки — до 2 минут, пакеты «Оптимум» и «Максимум» идут в приоритетной очереди.",
  },
  {
    q: "Можно ли использовать результат в коммерческих проектах?",
    a: "Да, коммерческая лицензия включена в любой платный пакет и не требует отдельной подписки.",
  },
  {
    q: "Какие фото подходят лучше всего?",
    a: "Горизонтальный кадр при дневном свете, из угла комнаты, чтобы были видны две стены и пол. Формат JPG или PNG до 15 МБ.",
  },
  {
    q: "Чем отличаются вкладки «Ландшафт» и «Фасад»?",
    a: "«Ландшафт» работает с участком: газон, дорожки, посадки и зона отдыха. «Фасад» меняет отделку дома, входную группу и подсветку.",
  },
  {
    q: "Сгорают ли кредиты?",
    a: "Нет, купленные кредиты бессрочные и остаются на счёте до момента использования.",
  },
];

export const generationHistory = [
  {
    id: "gen-1041",
    date: "2 августа 2026",
    tab: "Интерьер",
    style: "Сканди",
    room: "Гостиная",
    thumb: interiorAfter,
  },
  {
    id: "gen-1038",
    date: "28 июля 2026",
    tab: "Фасад",
    style: "Современный фасад",
    room: "Фасад дома",
    thumb: exteriorAfter,
  },
  {
    id: "gen-1032",
    date: "21 июля 2026",
    tab: "Ландшафт",
    style: "Английский сад",
    room: "Участок с газоном",
    thumb: landscapeAfter,
  },
  {
    id: "gen-1027",
    date: "14 июля 2026",
    tab: "Интерьер",
    style: "Джапанди",
    room: "Спальня",
    thumb: interiorAfter,
  },
];

export const howItWorks = [
  { title: "Загрузите фото", text: "Снимок комнаты, фасада или участка." },
  { title: "Выберите стиль", text: "Более 20 готовых направлений и поле для уточнений." },
  { title: "Генерация ИИ", text: "Нейросеть создаёт результат примерно за 60 секунд." },
  { title: "Результат", text: "Сравнение до/после, скачивание и повторная генерация." },
];

export const testimonialsExtended = [
  { name: "Анна", city: "Москва", role: "ремонт квартиры", duration: "0:38", poster: personAnna, text: "Загрузила фото пустой гостиной — за минуту получила три варианта. Ремонт наконец сдвинулся с места." },
  { name: "Игорь", city: "Казань", role: "загородный дом", duration: "0:52", poster: personIgor, text: "Показал жене визуализацию участка до начала работ. Спор о том, где будет терраса, закончился за пять минут." },
  { name: "Марина", city: "Санкт-Петербург", role: "дизайнер интерьера", duration: "1:04", poster: personMarina, text: "Показываю клиенту варианты фасада прямо на встрече. Экономия часов работы." },
  { name: "Дмитрий", city: "Екатеринбург", role: "риелтор", duration: "0:41", poster: personDmitry, text: "Пустая квартира на фото выглядела уныло. С меблированным кадром показы пошли заметно бодрее." },
  { name: "Ольга", city: "Новосибирск", role: "ремонт кухни", duration: "0:47", poster: personOlga, text: "Сравнила пять вариантов фасадов кухни за вечер. Выбрала тот, о котором сама бы не подумала." },
  { name: "Артём", city: "Краснодар", role: "строительная бригада", duration: "0:33", poster: personArtem, text: "Заказчику проще согласовать отделку по картинке, чем по описанию. Правок стало меньше." },
  { name: "Полина", city: "Нижний Новгород", role: "съёмная квартира", duration: "0:29", poster: personPolina, text: "Хотела понять, что изменит текстиль и свет. Оказалось, половину ремонта делать не нужно." },
  { name: "Сергей", city: "Самара", role: "фасад дома", duration: "0:56", poster: personSergey, text: "Примерил три варианта облицовки на своё фото. Выбор занял вечер, а не месяц." },
  { name: "Ксения", city: "Тюмень", role: "детская комната", duration: "0:35", poster: personKsenia, text: "Показала дочке два варианта комнаты — выбрали вместе, без слёз и споров." },
  { name: "Владимир", city: "Пермь", role: "архитектор", duration: "1:12", poster: personVladimir, text: "Быстрый черновой рендер по плану — удобно для первой встречи, когда идею надо показать сразу." },
];

