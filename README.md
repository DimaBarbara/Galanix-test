# HTML, CSS, and JS Test Assignments

Hey! This repo contains three independent tasks, each runnable and testable on its own.

---

## Task #1 — Flags using plain HTML and CSS

**What’s done:**  
Rendered 4 flags (Ukraine, Japan, Iceland, Czech Republic) with correct proportions, each 300px wide, stacked vertically with spacing.

**How to run:**  
Open `task1/index.html` in any modern browser.  
No build or server required — just static HTML and CSS.

---

## Task #2 — Image gallery with React + CSS

**What’s done:**

- Grid 4x3 with even spacing, centered, 80% screen width.
- Images with 5px dark gray border, first in each row has a red border.
- Images are circular (clipped).
- On hover, border turns yellow and image rotates 45°.
- Responsive layout: ≤900px — 2 per row, ≤500px — 1 per row.
- Image count and date displayed on top.
- Modal popup with full-size image and dark overlay on click.
- Delete icon on each image to remove it — deleted images persist in `localStorage`.
- Restore button to bring back all deleted images.

**How to run:**

1. Navigate to the project folder:

```bash
   cd task-2-react
```

2. Install dependencies and start the React app:

```bash
   npm install
```

3. Start the development server:

```bash
   npm start
```

4. Open your browser and go to:

```bash
   http://localhost:3000
```

# Task #3 — University Search App with React and API

## Description

This is a React web application that allows users to search for universities by country using the public API from [http://universities.hipolabs.com](http://universities.hipolabs.com).

## Features

- Input field for entering the country name in Latin letters.
- **Send** button to fetch university data based on the country.
- **Reset** button to clear input, results, saved states, and localStorage.
- Displays results in a table with the following columns:
  - Number (row index)
  - University name
  - Country
  - City (state/province)
  - Domains
  - Website (clickable link)
  - Checkbox "Save to my list" for each university
- Shows a counter of saved universities at the top.
- Persists data, saved items, and input value using `localStorage`, so the state is maintained after page reload.

## How to run

1. Navigate to the project folder:

```bash
   cd task-3-react
```

2. Install dependencies:

```bash
   npm install
```

3. Start the development server:

```bash
   npm start
```

4. Open your browser and go to:

```bash
   http://localhost:3000
```
