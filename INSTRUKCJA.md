# Instrukcja obsługi strony Mieszkan.com

---

## 1. Dodawanie nowego projektu

Projekty są zarządzane w jednym pliku: **`src/projekty-data.js`**

### Krok 1 — Przygotuj zdjęcia

Utwórz folder dla nowego projektu według wzoru:

```
public/images/projects/005/   ← następny wolny numer
```

Nazwy plików: `1.jpg`, `2.jpg`, `3.jpg` itd.
Zalecana rozdzielczość: **1920 × 1080 px**, format JPG lub PNG.
Minimum: 800 × 500 px.
Pierwsze zdjęcie (`1.jpg`) to miniatura widoczna jako thumbnail.

### Krok 2 — Dodaj wpis w `src/projekty-data.js`

Otwórz plik i dopisz nowy obiekt na końcu tablicy (przed ostatnim `]`):

```js
{
  id: 5,                          // następny wolny numer
  title: "Nazwa projektu",
  type: "Kamienica",              // np. Kamienica / Mieszkanie / Jednorodzinny / Stare budownictwo
  size: "55m²",                   // powierzchnia
  date: "2025",                   // rok realizacji
  images: [
    "/images/projects/005/1.jpg",
    "/images/projects/005/2.jpg",
    "/images/projects/005/3.jpg"
  ],
  problem: "Opis problemu / wyzwania. 2–4 zdania.",
  solution: "Opis zastosowanego rozwiązania. 2–4 zdania.",
  result: "Opis efektu końcowego. 2–4 zdania.",
  benefits: [
    "Krótka korzyść 1",
    "Krótka korzyść 2",
    "Krótka korzyść 3"
  ]
}
```

> **Uwaga:** Każdy wpis (poza ostatnim) musi kończyć się przecinkiem `,`

---

## 2. Włączanie i wyłączanie Scenariuszy

Scenariusze w sekcji „Dlaczego audyt nieruchomości?" zarządza plik: **`src/schemat.js`**

Na początku pliku znajduje się jeden wiersz konfiguracji:

```js
const scenarioConfigAlter2 = { 1: true, 2: true, 3: true, 4: true, 5: false, 6: true };
```

Każda liczba to numer scenariusza:

| Nr | Tytuł scenariusza |
|----|-------------------|
| 1  | PLANUJESZ ZAKUP   |
| 2  | JUŻ KUPIONE       |
| 3  | POTRZEBA ZMIAN    |
| 4  | POD WYNAJEM       |
| 5  | Nowy Projekt Wnętrza |
| 6  | JESTEŚ DEWELOPEREM |

Aby **wyłączyć** scenariusz — zmień `true` na `false`:
```js
{ 1: true, 2: true, 3: false, 4: true, 5: false, 6: true }
//                     ↑ wyłączony
```

Aby **włączyć** — zmień `false` na `true`:
```js
{ 1: true, 2: true, 3: true, 4: true, 5: true, 6: true }
//                                       ↑ włączony
```

---

## 3. Elementy kontaktowe — włączanie i wyłączanie

### Email, telefon, lokalizacja

Te elementy są zawsze widoczne. Aby zmienić dane, edytuj plik **`index.html`** w sekcji `#kontakt`:

```html
<!-- Email -->
<a href="projekt@mieszkan.com">projekt@mieszkan.com</a>

<!-- Telefon -->
<a href="tel:+48791240584">+48 791 240 584</a>
<p>pn - pt: 10:00 - 17:00</p>

<!-- Lokalizacja -->
<p>Wrocław, Polska</p>
<p>Spotkania po umówieniu</p>
```

### Instagram

Aby **wyłączyć** — dodaj klasę `contact-social--hidden` do elementu:

```html
<!-- PRZED (widoczny) -->
<article class="contact-item contact-instagram">

<!-- PO (ukryty) -->
<article class="contact-item contact-instagram contact-social--hidden">
```

Aby **zmienić link lub nazwę**:
```html
<a href="https://www.instagram.com/TWOJ_PROFIL/" ...>@TWOJ_PROFIL</a>
```

### Facebook

Domyślnie ukryty. Aby **włączyć** — usuń klasę `contact-social--hidden`:

```html
<!-- PRZED (ukryty) -->
<article class="contact-item contact-facebook contact-social--hidden">

<!-- PO (widoczny) -->
<article class="contact-item contact-facebook">
```

Aby **zmienić link**:
```html
<a href="https://www.facebook.com/TWOJA_STRONA/" ...>TWOJA_STRONA</a>
```

---

## 4. Sekcja Hero — rotujące teksty

W pliku `index.html`, w sekcji `#hero`, znajdują się rotujące hasła:

```html
<div class="hero-rotating">
  <span class="rotating-text active">Nowa jakość na miarę</span>
  <span class="rotating-text">Po Targach -20%</span>
  <span class="rotating-text">Zamów AUDYT na wiosnę</span>
  <!-- dodaj lub usuń dowolną linię -->
</div>
```

Aby dodać nowe hasło — dopisz linię:
```html
<span class="rotating-text">Twój nowy tekst</span>
```

Aby usunąć — skasuj całą linię `<span class="rotating-text">...</span>`.

> Pierwsze hasło powinno mieć klasę `active` — to ono wyświetli się jako pierwsze.

---

## 5. Szybkie podsumowanie — gdzie co jest

| Co chcesz zmienić | Plik |
|---|---|
| Projekty (dodaj/usuń/edytuj) | `src/projekty-data.js` |
| Scenariusze (włącz/wyłącz) | `src/schemat.js` — linia 1 |
| Dane kontaktowe | `index.html` → sekcja `#kontakt` |
| Rotujące hasła w Hero | `index.html` → sekcja `#hero` |
| Kolory i typografia | `design-tokens.css` |
| Treść sekcji Idea | `index.html` → sekcja `#idea` |
