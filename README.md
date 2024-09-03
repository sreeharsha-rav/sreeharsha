# My Portfolio

## Description

This is my portfolio. It contains information about me, my projects, and contact communication.

Latest Update: 09-02-2024
Live Site: [https://www.sreeharsha.vercel.app](https://www.sreeharsha.vercel.app)

## Technologies

- React
- TypeScript
- Tailwind CSS
- Astro
- Vercel
- Resend

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

```
|-- app/
    |--about/
        |--page.tsx
    |--contact/
        |--sendMail/
            |--route.ts
        |--page.tsx
    |--projects/
        |--all/
            |--page.tsx
        |--page.tsx
        |--recent-projects.tsx
    |--global.css
    |--layout.tsx
    |--page.tsx
|--components
    |--about/
    |--contact/
    |--projects/
    |--home/
    |--ui/
    |--navbar.tsx
|--lib/
|--public/
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command            | Action                                       |
| :----------------- | :------------------------------------------- |
| `pnpm install`     | Installs dependencies                        |
| `pnpm run dev`     | Starts local dev server at `localhost:4321`  |
| `pnpm run build`   | Build your production site to `./dist/`      |
| `pnpm run preview` | Preview your build locally, before deploying |
| `pnpm run format`  | Format your code with Prettier               |
| `pnpm run lint`    | Lint your code with ESLint                   |

### Roadmap

- [ ] Add recent project cards and articles to home page as a carousel auto-slider
- [ ] Add certifications to about page, use accordion to show more details
- [ ] UI adjustments in projects page
- [ ] UI show current page highlight option in navbar
- [ ] UI enhancements to projects page, just view all projects and articles with scroll loading or pagination
- [ ] Add pictures to project cards
- [ ] Optimize loading time and route rendering
- [ ] Imlement partial server-side rendering
- [ ] Add animation to Project cards, Skills, and Contact form
- [ ] Set up live updates for articles and projects
