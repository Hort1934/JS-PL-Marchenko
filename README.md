# JS-PL-Marchenko
Zadanie 2.3

Stwórz aplikację, która pobiera i wyświetla aktualne wiadomości z wybranego API newsowego. Użytkownik może filtrować wiadomości według kategorii (np. sport, technologia, zdrowie).

Oto przykładowa instrukcja instalacji i uruchomienia projektu, którą możesz umieścić w pliku `README.md`:

```markdown
# News App

## Opis
Aplikacja pobiera i wyświetla aktualne wiadomości z wybranego API newsowego. Użytkownik może filtrować wiadomości według kategorii (np. sport, technologia, zdrowie).

## Wymagania
- Node.js (wersja 14 lub nowsza)
- npm (wersja 6 lub nowsza)

## Instalacja
1. Sklonuj repozytorium:
   ```sh
   git clone https://github.com/Hort1934/JS-PL-Marchenko.git
   ```
2. Przejdź do katalogu projektu:
   ```sh
   cd js-pl-marchenko
   ```
3. Zainstaluj zależności:
   ```sh
   npm install
   ```

## Uruchomienie projektu
1. Uruchom serwer deweloperski:
   ```sh
   npm run dev
   ```
2. Otwórz przeglądarkę i przejdź do adresu:
   ```
   http://localhost:5173
   ```

## Budowanie projektu do produkcji
1. Zbuduj projekt:
   ```sh
   npm run build
   ```
2. Podgląd zbudowanego projektu:
   ```sh
   npm run serve
   ```

## Struktura projektu
```
JS-PL-Marchenko/
├── index.html
├── package.json
└── src/
    ├── index.js
    └── styles.css
```

## Użycie
1. Wybierz kategorię wiadomości z rozwijanego menu.
2. Aplikacja automatycznie pobierze i wyświetli wiadomości z wybranej kategorii.

## Konfiguracja API
- Upewnij się, że masz poprawny klucz API z [newsapi.org](https://newsapi.org/).
- Klucz API możesz zmienić w pliku `src/index.js`:
  ```javascript
  const apiKey = 'YOUR_API_KEY';
  ```

## Autor
Ihor Marchenko
