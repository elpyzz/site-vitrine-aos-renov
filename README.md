# Aos Renov — Site vitrine

Site vitrine (landing page) pour l’application SaaS Aos Renov, destinée aux artisans du BTP.

## Stack

- **Next.js 14+** (App Router) + TypeScript
- **TailwindCSS**
- **shadcn/ui** (Button, Card, Accordion, Dialog, Input, Textarea, Label)
- **Lucide** icons
- **Zod** pour la validation des formulaires

## Arborescence des fichiers créés

```
├── public/
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── api/lead/route.ts      # POST → enregistre les leads (JSON local)
│   │   ├── contact/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── merci/page.tsx
│   │   ├── mentions-legales/page.tsx
│   │   ├── cgv/page.tsx
│   │   ├── confidentialite/page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx               # Landing
│   │   ├── globals.css
│   │   └── sitemap.ts             # /sitemap.xml
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── landing/
│   │   │   ├── Hero.tsx
│   │   │   ├── ProblemSolution.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── ForWho.tsx
│   │   │   ├── Faq.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── Trust.tsx
│   │   │   ├── CtaSection.tsx
│   │   │   └── DemoDialog.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── textarea.tsx
│   │       ├── label.tsx
│   │       ├── accordion.tsx
│   │       └── dialog.tsx
│   └── lib/
│       ├── utils.ts
│       └── validations/lead.ts
├── data/
│   └── leads.json                 # Créé à la volée par l’API (ne pas committer)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── postcss.config.js
└── README.md
```

## Commandes

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

```bash
# Build production
npm run build

# Démarrer en production
npm start
```

## Déploiement sur Vercel

1. Pousser le projet sur GitHub (ou GitLab, Bitbucket).
2. Aller sur [vercel.com](https://vercel.com) → **Add New Project** → importer le dépôt.
3. Laisser les options par défaut (Framework: Next.js) et déployer.
4. Optionnel : définir la variable d’environnement `NEXT_PUBLIC_SITE_URL` avec l’URL finale du site (ex. `https://aos-renov.fr`) pour le sitemap.

**Note :** Les leads sont enregistrés dans `data/leads.json` sur le serveur. En production sur Vercel (serverless), ce fichier n’est pas persistant entre les invocations. Pour une vraie persistance, brancher une base de données ou un service (ex. Airtable, Notion, CRM) dans `src/app/api/lead/route.ts`.

## TODO personnalisation

- **Nom / marque :** Remplacer "Aos Renov" par le nom final du produit (recherche globale).
- **Logo :** Ajouter le logo dans le Header (fichier dans `public/` et composant `<Image>` ou `<img>`).
- **Textes :** Adapter tous les textes placeholder (hero, sections, FAQ, tarifs, légales).
- **Images :**
  - Hero : remplacer le placeholder du mockup par une vraie capture d’écran ou image (ex. `public/hero-mockup.png`).
  - Section démo : remplacer la zone vidéo placeholder par une vraie vidéo (iframe ou `video`).
- **Pages légales :** Remplir mentions légales, CGV et politique de confidentialité avec les vrais contenus (éditeur, hébergeur, RGPD, etc.).
- **Favicon :** Ajouter `app/icon.ico` ou `public/favicon.ico` (favicon réel).
- **Domaine :** Mettre à jour `robots.txt` et `NEXT_PUBLIC_SITE_URL` avec le domaine de production.
- **Couleur d’accent :** Modifier la variable `--accent` dans `src/app/globals.css` si besoin.

## SEO

- Metadata (title, description, keywords) dans `src/app/layout.tsx` et sur les pages.
- OpenGraph et Twitter cards configurés.
- Sitemap dynamique : `/sitemap.xml` (fichier `src/app/sitemap.ts`).
- `public/robots.txt` : adapter l’URL du Sitemap au domaine final.

## Formulaire contact / leads

- **Landing :** mini-formulaire (nom, email, téléphone) dans la section CTA.
- **Page /contact :** formulaire complet (nom, email, téléphone, message).
- Validation côté client avec Zod.
- Envoi en POST vers `/api/lead`, enregistrement dans `data/leads.json`.
- Après succès : redirection vers `/merci`.
