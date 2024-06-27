import './styles.css';

// Funkcja do pobierania wiadomości z API
async function fetchNews(category) {
  const apiKey = 'bcfb5a809f6d4668b57c6305df60880a';
  const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Fetched articles:', data.articles); // Sprawdź dane w konsoli
    return data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}

// Funkcja do aktualizacji interfejsu użytkownika
function updateNewsList(articles) {
  const newsList = document.getElementById('news-list');
  newsList.innerHTML = '';

  articles.forEach(article => {
    const li = document.createElement('li');
    li.textContent = article.title;
    newsList.appendChild(li);
  });

  if (articles.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'No news articles found.';
    newsList.appendChild(li);
  }
}

// Funkcja inicjalizująca aplikację
async function init() {
  const categorySelect = document.getElementById('category-select');
  categorySelect.addEventListener('change', async (event) => {
    const category = event.target.value;
    const articles = await fetchNews(category);
    updateNewsList(articles);
  });

  // Pobierz i wyświetl wiadomości dla domyślnej kategorii
  const defaultCategory = categorySelect.value;
  const articles = await fetchNews(defaultCategory);
  updateNewsList(articles);
}

// Uruchom aplikację po załadowaniu strony
window.addEventListener('DOMContentLoaded', init);
