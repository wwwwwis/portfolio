# Kurt Luis Grape — Portfolio

A minimalist, monochrome portfolio site built with **React + TypeScript + Tailwind CSS**, using **Vite** as the build tool. Supports light/dark mode and is fully responsive.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── App.tsx                 # composes all sections
├── main.tsx                # React entry point
├── index.css                # Tailwind + design tokens (light/dark CSS vars)
├── types.ts                 # shared TypeScript types
├── data/
│   └── portfolio.ts         # ← EDIT THIS to change all copy, projects, links
├── hooks/
│   ├── useTheme.ts           # light/dark mode, persisted to localStorage
│   ├── useScrollProgress.ts  # top progress bar
│   ├── useScrollSpy.ts       # active nav link highlighting
│   └── useReveal.ts          # fade-in-on-scroll
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── FeaturedProject.tsx   # the carousel card in the hero
    ├── Marquee.tsx
    ├── Approach.tsx
    ├── Experience.tsx
    ├── Stack.tsx
    ├── Projects.tsx
    ├── ProjectPlaceholder.tsx # abstract SVG placeholder graphics
    ├── Contact.tsx
    ├── Footer.tsx
    ├── ScrollProgress.tsx
    ├── SectionHead.tsx
    ├── Reveal.tsx
    ├── BackgroundGrain.tsx
    └── icons.tsx
```

## Adding your own content

Almost everything — your name, bio, projects, experience, stack, social
links, email, CV link — lives in **`src/data/portfolio.ts`**. Edit that
one file and the whole site updates.

## Adding real images

Every image slot currently renders a placeholder:

- **Avatar**: in `src/data/portfolio.ts`, set `profile.avatarSrc` to an image
  path (e.g. drop a file in `public/avatar.jpg` and set it to
  `/avatar.jpg`), then in `src/components/Hero.tsx` swap the placeholder
  `<div>` for `<img src={profile.avatarSrc} className="h-[88px] w-[88px] rounded-full object-cover" />`.
- **Project thumbnails**: add an `image` field to any project object in
  `src/data/portfolio.ts` (e.g. `image: '/projects/01.png'`) — both the
  featured card and the project grid automatically use it instead of the
  generated placeholder once it's set.

Put image files in a `public/` folder at the project root (create it if it
doesn't exist) — anything in `public/` is served from `/`.

## Theming

Colors are monochrome CSS variables defined in `src/index.css` (`:root` for
light, `.dark` for dark) and mapped into Tailwind via `tailwind.config.ts`.
To adjust the palette, edit the RGB values there — every component already
uses the token classes (`bg-bg`, `text-ink`, `border-line`, etc.) so a
single edit updates the whole site in both themes.

## Deploying

This is a standard Vite app — it deploys to Vercel, Netlify, GitHub Pages,
or any static host by running `npm run build` and serving the `dist/`
folder.
