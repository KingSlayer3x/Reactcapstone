# Little Lemon Reservation App

A React and Vite capstone project for the Little Lemon restaurant. The app presents the restaurant home page, highlights menu items, shows testimonials and about content, and includes a table-booking flow where users can choose a date, time, guest count, and occasion.

## Project Overview

This project was built as a front-end restaurant reservation experience. It uses client-side routing for the main pages and a booking form that updates available reservation times based on the selected date.

Main routes:

- `/` - Little Lemon home page
- `/BookingPage` - table reservation form
- `/ConfirmedBooking` - booking confirmation page

## Local Mock API

The original project requirement expects API-style functions for fetching available booking times and submitting a reservation. Because there is no real backend service connected to this capstone project, I mocked the API locally in [public/api.js](public/api.js).

That file defines:

- `fetchAPI(date)` - returns a deterministic list of available times for the selected date
- `submitAPI(formData)` - returns `true` to simulate a successful booking submission

The mock is loaded in [index.html](index.html) before the React app starts:

```html
<script src="./api.js"></script>
```

The React code then reads the mock functions from `window.fetchAPI` and `window.submitAPI`, mainly in [src/components/timeReducer.js](src/components/timeReducer.js) and [src/components/BookingPage.tsx](src/components/BookingPage.tsx).

This keeps the application functional without requiring a server, database, or external API account.

## Features

- Responsive Little Lemon restaurant landing page
- Navigation with React Router
- Booking form with date, time, guest count, and occasion fields
- Date-based available time updates
- Submit flow that redirects to a confirmed booking page
- Local mock API for booking availability and submission
- Unit test setup with Vitest and React Testing Library

## Tech Stack

- React
- Vite
- React Router
- Tailwind CSS
- Vitest
- React Testing Library

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run tests:

```bash
npm test
```

## Project Structure

```text
public/
  api.js                 Local mock API for booking data
  *.jpg, *.svg, *.png    Restaurant images and UI assets

src/
  App.jsx                Application routes and booking state
  main.jsx               React entry point
  style.css              Global styles and Tailwind import
  components/            Page sections and booking components
  utils/                 Static data for cards, reviews, and menu content
  tests/                 Test setup files
```

## Notes

- The project is front-end only.
- The booking data is mocked locally instead of being fetched from a live backend.
- `fetchAPI` uses a seeded random function so each date returns a predictable set of time slots.
