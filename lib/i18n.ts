export const locales = ["en", "ru", "uz"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "uz";

// Translation dictionaries
export const translations = {
  en: {
    About: "About Us",
    Team: "Team",
    Quiz: "Quiz",
    Statistics: "Statistics",
    Gallery: "Gallery",
    Careers: "Careers",
    Listening: "Listening",
    AI: "AI",
    Profile: "Profile",
    firstLesson: "Sign up for your first lesson!",
    firstLessonDescription: "Leave a request and our manager will contact you",
    name: "Name",
    signUp: "Sign up",
    loading: "Loading...",
    success: "Success",
    error: "Error",

    // Auth
    logout: "Log out",
  },
  ru: {
    About: "О нас",
    Team: "Команда",
    Quiz: "Тесты",
    Statistics: "Статистика",
    Gallery: "Галерея",
    Careers: "Карьера",
    Listening: "Listening",
    AI: "AI",
    Profile: "Профиль",
    firstLesson: "Запишитесь на первый урок!",
    firstLessonDescription: "Оставьте заявку, и наш менеджер свяжется с вами",
    name: "Имя",
    signUp: "Записаться",
    loading: "Загрузка...",
    success: "Успех",
    error: "Ошибка",

    // Auth
    logout: "Выход",
  },
  uz: {
    About: "Biz haqimizda",
    Team: "Jamoa",
    Quiz: "Testlar",
    Statistics: "Statistika",
    Gallery: "Galereya",
    Listening: "Listening",
    AI: "AI",
    Profile: "Profil",
    Careers: "Ish imkoniyatlari",
    firstLesson: "Birinchi darsingizga yoziling!",
    firstLessonDescription:
      "So'rov qoldiring va menejerimiz siz bilan bog'lanadi",
    name: "Ism",
    signUp: "Ro'yxatdan o'tish",
    loading: "Yuklanmoqda...",
    success: "Muvaffaqiyatli",
    error: "Xato",

    // Auth
    logout: "Chiqish",
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
