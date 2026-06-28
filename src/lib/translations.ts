export type TranslationType = typeof translations.en;

export const translations = {
  ru: {
    hero: {
      title: "From business idea to working product.",
      subtitle: "Техническая реализация идей, автоматизация и маркетинг для растущих проектов.",
      status: "СТАТУС: ДОСТУПНА ДЛЯ ПРОЕКТОВ // 2026",
      connect: "Связаться"
    },
    sections: {
      product: "РАЗРАБОТКА IT-ПРОДУКТОВ",
      marketing: "МАРКЕТИНГ И УДЕРЖАНИЕ",
      content: "МОНЕТИЗАЦИЯ КОНТЕНТА",
      team: "ВНУТРЕННИЕ КОММУНИКАЦИИ",
      events: "ОРГАНИЗАЦИЯ МЕРОПРИЯТИЙ",
      background: "ПРИЛОЖЕНИЕ // BACKGROUND & EDUCATION"
    },
    labels: {
      case: "КЕЙС",
      client: "Заказчик",
      details: "Подробнее",
      links: "ссылки по запросу"
    }
    // Сюда мы добавим весь остальной массив текста на двух языках на следующем шаге
  },
  en: {
    hero: {
      title: "From business idea to working product.",
      subtitle: "Technical execution of ideas, automation, and marketing for growing projects.",
      status: "STATUS: AVAILABLE FOR PROJECTS // 2026",
      connect: "Connect"
    },
    sections: {
      product: "PRODUCT DEVELOPMENT",
      marketing: "MARKETING & GROWTH",
      content: "CONTENT MONETIZATION",
      team: "TEAM COMMUNICATIONS",
      events: "EVENTS & OPERATIONS",
      background: "APPENDIX // BACKGROUND & EDUCATION"
    },
    labels: {
      case: "CASE",
      client: "Client",
      details: "Details",
      links: "links upon request"
    }
  }
};