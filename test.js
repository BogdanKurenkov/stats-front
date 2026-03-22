// =============================================
// 1. ПОДГОТОВКА (установите node-fetch если нужно)
// =============================================
// Для Node.js версии 18+ fetch уже встроен
// Для более старых версий: npm install node-fetch
// и добавьте: import fetch from 'node-fetch';

const NEWS_API_KEY = "85097adfce5e43ed84f49fd9cffb2dea"; // Зарегистрируйтесь на newsapi.org!
const NEWS_URL = "https://newsapi.org/v2/everything";

// =============================================
// 2. УЛУЧШЕННАЯ ФУНКЦИЯ С ОБРАБОТКОЙ ОШИБОК
// =============================================
async function getFootballNews() {
  console.log("🔍 Запрос футбольных новостей...");

  // Проверяем наличие ключа
  if (!NEWS_API_KEY || NEWS_API_KEY === "123") {
    console.error("❌ Ошибка: Не указан API-ключ NewsAPI");
    console.log("📝 Получите ключ бесплатно: https://newsapi.org/register");
    return;
  }

  try {
    const response = await fetch(
      `${NEWS_URL}?q=football+soccer&language=en&sortBy=publishedAt&pageSize=10&apiKey=${NEWS_API_KEY}`
    );

    // Проверяем HTTP статус
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `HTTP ${response.status}: ${errorData.message || response.statusText}`
      );
    }

    const data = await response.json();

    // Проверяем статус ответа от API
    if (data.status === "error") {
      throw new Error(data.message);
    }

    if (!data.articles || data.articles.length === 0) {
      console.log("ℹ️ Новостей не найдено");
      return;
    }

    console.log(`\n📰 Найдено новостей: ${data.totalResults}`);
    console.log("=".repeat(60));

    data.articles.forEach((article, index) => {
      console.log(`\n${index + 1}. 📰 ${article.title}`);
      console.log(`📝 ${article.description || "Описание отсутствует"}`);
      console.log(`🏷️  Источник: ${article.source.name}`);
      console.log(`📅 ${new Date(article.publishedAt).toLocaleString()}`);
      console.log(`🔗 ${article.url}\n`);
    });
  } catch (error) {
    console.error("❌ Ошибка при получении новостей:", error.message);

    // Дополнительная диагностика
    if (error.message.includes("API key")) {
      console.log(
        "💡 Совет: Проверьте API-ключ. Бесплатный план требует регистрации на newsapi.org"
      );
    } else if (error.message.includes("rate limit")) {
      console.log(
        "💡 Совет: Превышен лимит запросов. Бесплатный план: 100 запросов/день"
      );
    }
  }
}

// =============================================
// 3. ЗАПУСК
// =============================================
getFootballNews();
