# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Kontaktformular mit EmailJS (kostenlos)

Das Kontaktformular versendet E-Mails jetzt direkt mit EmailJS und braucht kein Firebase Blaze-Upgrade.

### 1) EmailJS vorbereiten

1. Bei EmailJS einen Service erstellen (z. B. Gmail oder Outlook).
2. Ein Template anlegen.
3. Public Key kopieren.

### 2) Umgebungsvariablen setzen

`.env.example` nach `.env.local` kopieren und eintragen:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

### 3) Template-Felder in EmailJS

Im Template diese Variablen verwenden:
- `{{name}}`
- `{{email}}`
- `{{nachricht}}`

Hinweis: Der Code sendet zusätzlich kompatible Felder wie `from_name`, `from_email` und `message`.

## E2E Tests mit Playwright

1. Browser installieren:
   - `npx playwright install chromium`
2. E2E Tests ausführen:
   - `npm run test:e2e`
3. Report anzeigen:
   - `npm run test:e2e:report`
