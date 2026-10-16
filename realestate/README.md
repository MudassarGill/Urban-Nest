# Urban Nest

Urban Nest is a real-estate browsing app built with React and Vite. Explore property listings in Lahore, Karachi, and Islamabad, filter by location, property type, price, and bedrooms, and save favorites for later.

## Features

- Browse featured homes, apartments, villas, and commercial properties.
- Search and filter listings, with filter state reflected in the URL.
- View property details and agent profiles.
- Save favorite properties; favorites are stored in the browser's local storage.
- Visit About, Contact, Login, and Sign Up pages.

Listings and agent profiles currently come from local project data. The app does not use a backend service.

## Requirements

- Node.js and npm

## Getting started

From this directory, install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. Run `npm run build` first. |
| `npm run lint` | Check the project with Oxlint. |

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/properties` | Property listings and filters |
| `/properties/:id` | Property details |
| `/agents` | Agent directory |
| `/about` | About Urban Nest |
| `/contact` | Contact |
| `/login` | Login |
| `/signup` | Sign up |
| `/favorites` | Saved properties |

## Tech stack

- React 19
- Vite
- React Router
- Tailwind CSS 4
- lucide-react icons

## Project structure

```text
src/
  assets/       Images and videos
  components/   Shared interface components
  context/      Favorites state
  data/         Local property and agent data
  pages/        Route-level pages
```
