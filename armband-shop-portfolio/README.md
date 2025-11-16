# Armband Shop Portfolio

Dieses Projekt ist eine Webanwendung für einen Armband-Onlineshop und ein Portfolio, das mit Framer und Figma erstellt wurde. Die Anwendung bietet eine benutzerfreundliche Oberfläche, um Armbänder zu durchsuchen und Designs zu präsentieren.

## Projektstruktur

- **src/**: Enthält den Quellcode der Anwendung.
  - **index.jsx**: Einstiegspunkt der Anwendung.
  - **App.jsx**: Haupt-App-Komponente mit Routing-Logik.
  - **Pages/**: Enthält die verschiedenen Seiten der Anwendung.
    - **Projekte.jsx**: Projektseite mit Navigation und Projektkomponenten.
    - **ProjekteArmband.jsx**: Seite für Armbandprojekte mit Produktdetails.
    - **ProjektePortfolio.jsx**: Seite für Portfolio-Designs mit Figma und Framer.
  - **components/**: Wiederverwendbare Komponenten der Anwendung.
    - **NavBar.jsx**: Navigationsleiste mit Links zu den Seiten.
    - **ProjectCard.jsx**: Komponente für Projektkarten.
    - **ShopProductCard.jsx**: Komponente für Produkte im Shop.
    - **FramerPreview.jsx**: Vorschau-Komponente für Framer-Designs.
  - **hooks/**: Benutzerdefinierte Hooks.
    - **useCart.js**: Hook zur Verwaltung des Warenkorb-Zustands.
  - **styles/**: Globale CSS-Stile.
    - **main.css**: Haupt-CSS-Datei.
  - **routes/**: Definiert die Routen der Anwendung.
    - **index.jsx**: Bindet Seitenkomponenten an Routen.

- **design/**: Enthält Designressourcen.
  - **framer/**: Informationen zur Verwendung von Framer.
    - **README.md**: Anleitung zur Verwendung von Framer im Projekt.
  - **figma/**: Informationen zur Verwendung von Figma.
    - **README.md**: Anleitung zur Verwendung von Figma im Projekt.

- **tests/**: Enthält Tests für die Projektkomponenten.
  - **Projects.test.jsx**: Tests für die Projektkomponenten.

- **package.json**: Konfigurationsdatei für npm mit Abhängigkeiten und Skripten.

- **vite.config.js**: Konfigurationsdatei für Vite.

- **.gitignore**: Dateien und Verzeichnisse, die von Git ignoriert werden sollen.

## Installation

1. Klone das Repository:
   ```
   git clone <repository-url>
   ```

2. Navigiere in das Projektverzeichnis:
   ```
   cd armband-shop-portfolio
   ```

3. Installiere die Abhängigkeiten:
   ```
   npm install
   ```

4. Starte die Entwicklungsumgebung:
   ```
   npm run dev
   ```

## Nutzung

- Besuche die verschiedenen Seiten, um die Armbänder zu durchsuchen und das Portfolio anzusehen.
- Nutze die Navigationsleiste, um zwischen den Seiten zu wechseln.

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert.