# Jessica's Tea Collection 🍵

> Kleine Menge in hoher Qualität – Schweizer Tees inspiriert von der Traditionellen Chinesischen Medizin.

**Live-Seite:** [https://philippe-ong.github.io/jessicas-tea-collection/](https://philippe-ong.github.io/jessicas-tea-collection/)

---

## Übersicht

Jessica's Tea Collection ist ein Schweizer Tee-Webshop von **Jessica Huang**, TCM-Therapeutin aus Luzern. Die Seite präsentiert 58 Produkte (55 Tees + 3 Zubehör) in 10 Tee-Kategorien, alle inspiriert von der Traditionellen Chinesischen Medizin. Herzstück ist der «Finde deinen Tee»-Pfad: 8 TCM-Empfindungen leiten die Kundschaft zu passenden Tees. Ein Warenkorb mit Schweizer Versandlogik und transaktionale E-Mail-Vorlagen runden den Shop ab – alles als statische Site mit **Astro 7** (Static Site Generation) gebaut.

**Seitenanzahl:** 87 (1 Startseite + 9 «Finde deinen Tee»-Seiten + 10 Kategorie-Seiten + 58 Produkt-Seiten + 9 Content-/Rechtliche Seiten)

---

## Live-Demo

👉 [https://philippe-ong.github.io/jessicas-tea-collection/](https://philippe-ong.github.io/jessicas-tea-collection/)

---

## Tech-Stack

| Kategorie           | Technologie                              |
|---------------------|------------------------------------------|
| **Framework**       | Astro 7 (Static Site Generation)         |
| **Sprache**         | TypeScript (strict mode)                 |
| **Styling**         | CSS Custom Properties (Design Tokens)    |
| **Sitemap**         | @astrojs/sitemap                         |
| **Deployment**      | GitHub Pages via GitHub Actions          |
| **i18n**            | Astro i18n (DE default, FR/EN vorbereitet) |
| **Node**            | >= 22.12.0                               |

---

## Projekt-Struktur

```
webshop/
├── .github/workflows/deploy.yml   # GitHub Actions Deploy-Workflow
├── public/
│   ├── emails/                     # 2 E-Mail-Vorlagen (Bestell-/Versandbestaetigung)
│   ├── images/                     # Tee-Fotos, Logo, Landschaftsbilder
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/                 # 10 wiederverwendbare Komponenten
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ProductCard.astro
│   │   ├── CategoryBlock.astro
│   │   ├── EmpfindungBlock.astro
│   │   ├── CategoryBanner.astro
│   │   ├── PillButton.astro
│   │   ├── Breadcrumb.astro
│   │   ├── CartDrawer.astro
│   │   └── SEO.astro
│   ├── data/                       # Datenlayer
│   │   ├── products.ts             # 58 Produkte
│   │   ├── categories.ts           # 10 Kategorien
│   │   ├── empfindungen.ts         # 8 TCM-Empfindungen
│   │   └── site.ts                 # Site-Konfiguration
│   ├── layouts/
│   │   └── BaseLayout.astro        # Basis-Layout + Warenkorb-JS
│   ├── pages/                      # Alle Seiten
│   │   ├── index.astro             # Startseite
│   │   ├── finde-deinen-tee/       # Index + 8 Unterseiten
│   │   ├── kategorie/[slug].astro  # 10 Kategorie-Seiten
│   │   ├── produkt/[slug].astro    # 58 Produkt-Seiten
│   │   ├── ueber-mich.astro
│   │   ├── infokasten.astro
│   │   ├── kontakt.astro
│   │   └── ... (rechtliche Seiten)
│   ├── styles/
│   │   └── global.css              # Design Tokens + Basis-Styles
│   └── utils/
│       └── url.ts                  # URL-Helper fuer Base-Path
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Dev-Server starten (http://localhost:4321)
npm run dev

# Production-Build
npm run build

# Build lokal previewen
npm run preview

# TypeScript-Check
npx astro check
```

---

## Deployment

Die Seite wird automatisch auf **GitHub Pages** deployed – bei jedem Push auf den `main`-Branch. Der Workflow liegt in `.github/workflows/deploy.yml`.

**So wird die Site aktualisiert:**

```bash
git add -A
git commit -m "Beschreibung der Aenderung"
git push
```

Der GitHub Actions-Workflow läuft automatisch (~1–2 Minuten Build + Deploy). Nach erfolgreichem Abschluss ist die Änderung live.

---

## Design-System

Das visuelle Erscheinungsbild verwendet eine erdige Palette (Crème, Terracotta, Sauge, Ochre, Olive). Schriftzüge in **Playfair Display** (Serif) Überschriften, **Inter** (Sans-Serif) für Fliesstext. Pill-Buttons, Kategorie-Banner mit weissen Icons auf farbigem Hintergrund, chinesische Kalligrafie als dekoratives Wasserzeichen.

Detailierte Spezifikation: [`../design_system_prompt.md`](../design_system_prompt.md)

---

## Inhalte

| Seite / Bereich                    | Beschreibung                                                       |
|------------------------------------|--------------------------------------------------------------------|
| **Startseite**                     | Hero + Willkommenstext + 10 Kategorie-Blöcke                     |
| **Finde deinen Tee**               | TCM-Orientierung mit 8 Empfindungen + passenden Tees              |
| **Kategorie-Seiten** (10)          | Produkt-Grids pro Kategorie                                       |
| **Produkt-Seiten** (58)            | Galerie, Beschreibung, TCM-Einordnung, Zubereitung, Zutaten, ähnliche Tees |
| **Über mich**                     | Jessica Huang Vorstellung                                          |
| **Infokasten TCM**                 | 4 Sektionen (TCM erklärt, Tee als Lebenspflege, Tee-Wirkung, Einzeltee vs. Mischung) |
| **Kontakt**                        | Formular, WhatsApp, OpenStreetMap                                  |
| **Rechtliche Seiten**              | Bestellung & Versand, Rückgabe, AGB, Allergie-Hinweis, Datenschutz, Impressum |
| **E-Mail-Vorlagen** (2)            | Bestellbestätigung, Versandbestätigung                           |

---

## Warenkorb-Logik

Der Warenkorb ist ein **Side-Drawer** (Tiroir lateral) mit Fortschrittsanzeige und rein clientseitig via `localStorage` umgesetzt – kein Backend erforderlich.

- **Versandkosten:** CHF 9 pauschal (Schweiz), gratis ab CHF 80
- **Rabatt:** 5 % ab CHF 100 Bestellwert
- **Kumulierung:** Gratis Versand + 5 % Rabatt ab CHF 100
- **Kein Mindestbestellwert**

---

## Noch zu ergänzen (To-Do)

Folgende Inhalte sind Platzhalter und müssen von Jessica ausgefüllt werden:

- [ ] **Preise + Gewichte** der 58 Produkte (aktuell `CHF 0.00 · {Gewicht}`)
- [ ] **Produkt-Beschreibungen** (Beschreibung, TCM-Einordnung, Zubereitung, Zutaten)
- [ ] **Foto von Jessica** (Über mich-Seite)
- [ ] **Hoster** für die Website (Datenschutz-Seite)
- [ ] **UID-Nummer + Handelsregister** (Impressum)
- [ ] **Zahlungsintegration** (TWINT / Stripe / Payrexx)
- [ ] **Domain** `jessicasteacollection.ch` registrieren und konfigurieren

---

## Lizenz / Urheberrecht

Sämtliche Inhalte – Texte, Fotos, Logo, Design – sind urheberrechtlich geschütztes Eigentum von **Jessica Huang**. Eine Vervielfältigung, Weitergabe oder Nutzung ausserhalb des Webshops ist ohne schriftliche Genehmigung nicht gestattet.

---

**GitHub Repository:** [https://github.com/Philippe-Ong/jessicas-tea-collection](https://github.com/Philippe-Ong/jessicas-tea-collection)
