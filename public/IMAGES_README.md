# Remplacer les images par tes captures (bon endroit + qualité parfaite)

Les **anciennes images** dans `public/` sont **remplacées** par les nouvelles. Le script place chaque fichier au **bon endroit** pour que Vue d’ensemble = 3.png, Planning = 7.png, etc.

---

## Option A — Script automatique (recommandé)

1. Mets tes **10 captures** dans le dossier **`captures_a_remplacer`** à la racine du projet.
2. Nomme-les **exactement** : **1.png**, **2.png**, **3.png**, … **10.png** (si Windows affiche "1.png.png", renomme en "1" pour obtenir "1.png").
3. Lance dans PowerShell à la racine du projet :
   ```powershell
   .\scripts\copy-images-vers-public.ps1
   ```

**Correspondance (bon endroit) :**

| Ton fichier | Où ça s’affiche |
|-------------|------------------|
| **1.png** | Hero (page d’accueil) → hero-aos-renov.png |
| **2.png** | Connexion → app-login.png |
| **3.png** | **Vue d’ensemble** → app-dashboard.png |
| **5.png** | **Estimation automatique** → app-estimation.png |
| **6.png** | **Mes Chantiers** → app-chantiers.png |
| **7.png** | **Planning des chantiers** → app-planning.png |
| **8.png** | **Générateur de devis** → app-devis.png |
| **9.png** | **Facturation** → app-facturation.png |
| **10.png** | **Dossiers** → app-dossiers.png |

(4.png n’est pas utilisé.)

---

## Option B — Copie manuelle

Copie tes fichiers dans **`public/`** en les renommant comme ci-dessous.

| Section sur le site | Nom du fichier dans `public/` |
|--------------------|--------------------------------|
| Hero | hero-aos-renov.png (ta 1.png) |
| Connexion | app-login.png (ta 2.png) |
| **Vue d’ensemble** | app-dashboard.png (ta **3.png**) |
| **Estimation automatique** | app-estimation.png (ta **5.png**) |
| **Mes Chantiers** | app-chantiers.png (ta **6.png**) |
| **Planning des chantiers** | app-planning.png (ta **7.png**) |
| **Générateur de devis** | app-devis.png (ta **8.png**) |
| **Facturation** | app-facturation.png (ta **9.png**) |
| **Dossiers** | app-dossiers.png (ta **10.png**) |

---

Les images de la section « L’app en images » sont servies **sans compression** (qualité identique à tes fichiers). En agrandissant au clic, la même image en pleine qualité s’affiche.
