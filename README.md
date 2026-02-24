# HeroApp — App Showcase & Installation Tracker

A clean, responsive React web app that showcases a curated list of popular apps, lets users explore app details (downloads, ratings, reviews, and rating breakdown charts), and “install/uninstall” apps using local storage persistence.
<img width="1699" height="856" alt="image" src="https://github.com/user-attachments/assets/0140144a-a3b5-43f0-a9f0-5131f978d983" />
> Built with **React + React Router**, styled with **Tailwind CSS + DaisyUI**, icons from **Lucide**, and charts from **Recharts**.
<img width="1681" height="840" alt="image" src="https://github.com/user-attachments/assets/a8e5acff-1c79-400f-a0d6-cef3add73283" />
---

## ✨ Features

- **Home (Trending Apps)**
  - Highlights top-rated apps (e.g., ratingAvg ≥ 4.6)
  - Professional landing hero section + trending grid

- **All Apps**
  - Displays the full catalog in a modern card grid
  - Quick stats: downloads + rating

- **App Details**
  - App info: title, company, downloads, rating, reviews
  - **Rating breakdown chart** (BarChart with Recharts)
  - **Install / Uninstall** toggle

- **Installation Tracking**
  - Installation state is persisted via **localStorage**
  - Uses small utility helpers:
    - `addToStoreDb(appId)`
    - `removeFromStoreDb(appId)`
    - `isAppInStore(appId)`

- **Reusable UI**
  - Consistent layout with `Root` (Navbar + Outlet + Footer)
  - Responsive design for mobile / tablet / desktop

---
<img width="1519" height="828" alt="image" src="https://github.com/user-attachments/assets/0e9fee8e-ada6-4086-adf4-86df24affa57" />
<img width="1522" height="825" alt="image" src="https://github.com/user-attachments/assets/9ee8d752-0cfe-472a-9500-b524911a84f4" />

## 🧰 Tech Stack

- **Frontend:** React
- **Routing & Data Loading:** React Router (`useLoaderData`, `useParams`)
- **Styling:** Tailwind CSS + DaisyUI
- **Icons:** Lucide React
- **Charts:** Recharts
- **Storage:** localStorage (install/uninstall persistence)

---

## 🗂 Data Format (Example)

- The UI expects each app item like:
```
{
  "id": 1,
  "title": "Forest: Focus for Productivity",
  "companyName": "Seekrtech",
  "image": "https://...",
  "description": "....",
  "downloads": 29600000,
  "reviews": 906421,
  "ratingAvg": 4.7,
  "ratings": [
    { "name": "1 star", "count": 15241 },
    { "name": "2 star", "count": 21366 },
    { "name": "3 star", "count": 74122 },
    { "name": "4 star", "count": 256891 },
    { "name": "5 star", "count": 538801 }
  ]
}
```