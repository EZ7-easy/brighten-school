export const locales = ["en", "ru", "uz"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

// Translation dictionaries
export const translations = {
  en: {
    About: "About Us",
    Team: "Team",
    Prices: "Prices",
    Gallery: "Gallery",
    Careers: "Careers",
    firstLesson: "Sign up for your first lesson!",
    firstLessonDescription: "Leave a request and our manager will contact you",
    name: "Name",
    signUp: "Sign up",
    loading: "Loading...",
    success: "Success",
    error: "Error",
  },
  ru: {
    About: "О нас",
    Team: "Команда",
    Prices: "Цены",
    Gallery: "Галерея",
    Careers: "Карьера",
    firstLesson: "Запишитесь на первый урок!",
    firstLessonDescription: "Оставьте заявку, и наш менеджер свяжется с вами",
    name: "Имя",
    signUp: "Записаться",
    loading: "Загрузка...",
    success: "Успех",
    error: "Ошибка",
  },
  uz: {
    About: "Biz haqimizda",
    Team: "Jamoa",
    Prices: "Narxlar",
    Gallery: "Galereya",
    Careers: "Ish imkoniyatlari",
    firstLesson: "Birinchi darsingizga yoziling!",
    firstLessonDescription:
      "So'rov qoldiring va menejerimiz siz bilan bog'lanadi",
    name: "Ism",
    signUp: "Ro'yxatdan o'tish",
    loading: "Yuklanmoqda...",
    success: "Muvaffaqiyatli",
    error: "Xato",
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
