# Newsletters – Frontend Test

## 🧠 Overview

This project implements a newsletters listing page based on a provided design and dataset.

The goal was to focus on:

- clean architecture
- server-side rendering (SSR) with Next.js
- clear separation of concerns (data / business logic / UI)
- responsive and accessible UI

---

## ⚙️ Tech Stack

- Next.js (App Router)
- React
- TypeScript
- CSS (no external UI library)

---

## 🏗️ Architecture

The project is structured to separate responsibilities:

- `data/` → data fetching (mocked async)
- `services/` → business rules (access, CTA, grouping)
- `components/` → UI components
- `types/` → TypeScript types

---

## 🔁 Data Flow

1. Data is fetched server-side using an async function
2. Newsletters are grouped by `site`
3. Access rules are applied based on user subscriptions
4. CTA is computed:
   - "S'inscrire" if accessible
   - "S'abonner" otherwise

---

## 🖥️ Rendering

The page uses **Server-Side Rendering (SSR)**:

- no client-side data fetching
- no unnecessary hydration
- better performance and simplicity

---

## 🎨 Styling

- Global CSS with a component-based naming convention
- No UI library was used to keep the implementation lightweight
- Focus on layout, readability and responsiveness

---

## 🧪 Testing

- business logic (`newsletter access`)

---

## 🚀 Getting Started

```bash
npm install
npm run dev



## 🤖 Use of AI

AI tools were used as a support during the development process to explore alternatives and speed up implementation.

I made the final decisions regarding architecture, data flow and UI structure, with a focus on simplicity, readability and maintainability.
```
