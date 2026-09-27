# Deny's portfolio

## What this is

A static personal portfolio site: About, Skills, Projects (filterable by tool) and Contact on one page. No framework, no backend, no database — plain HTML, one ES module JS file, and Tailwind CSS built ahead of time into a static stylesheet.

This repo **is** `denyfebriawan.github.io`, so anything pushed to `main` is live within a minute or two at that URL (GitHub Pages serves the repo directly, with no build step of its own — `style.css` must already be built and committed).

## File map

- **`index.html`** — the page shell and all content that isn't data-driven: hero, About, Work experience, Education, "What I'm looking for", Contact. The Skills `<dl>` and the Projects section are just empty containers (`#skill-list`, `#tool-list`, `#project-list`) that `main.js` fills in.
- **`projects.js`** — the single source of truth for the Projects section. Each entry is `{ title, description, tools, image, repo, demo, status }`. Adding a project here is enough; nothing else needs manual updates (see "Adding a project" below).
- **`skills.js`** — `baseSkills` (your hand-maintained skill groups, for things not tied to a specific project) and `toolInfo` (tool name → `{ category, icon }`, used to auto-place project tools into a Skills group and to pick a card icon).
- **`main.js`** — renders the filter chips, project cards (with icons), and the Skills list from the two files above; handles the filter-by-tool click behavior and the scroll-based nav highlight.
- **`src/input.css`** → **`style.css`** — Tailwind CSS v4 source and its built, minified output. Never hand-edit `style.css`; run `npm run build` after changing `src/input.css` or after adding a Tailwind class that only exists as a literal string somewhere (Tailwind only generates CSS for class names it finds written out in full in the source, so a class built by string concatenation never gets generated — see the comment at the top of `main.js`).
- **`img/projects/`** — one screenshot per project, referenced by `projects.js`.
- **`img/tech/`** — one SVG per tool that has a card icon, from [Simple Icons](https://simpleicons.org). Each icon is painted via a CSS `mask` filled with `currentColor`, so it's monochrome and follows the tag's own light/dark color instead of the logo's brand color.

## Adding a project

Add one object to the `projects` array in `projects.js`. That's it — the filter chips, the card's tool tags with icons, and the Skills list all update automatically from `main.js` reading that array. Keep tool name spelling exactly consistent with any existing project using the same tool (e.g. always `"Next.js"`, never `"NextJS"` in one place and `"Next.js"` in another), since the filter and Skills list merge by exact string match.

If a project uses a tool that has no entry in `skills.js`'s `toolInfo`, it still works — it shows on the card and in the filter, and lands under an auto-created "Other tools" group in Skills — but it has no icon and `main.js` will `console.warn` naming the tool. To give it an icon and put it in the right Skills group, add one line to `toolInfo` in `skills.js` and, if you want an icon, drop a matching SVG in `img/tech/` (Simple Icons is the easiest source; not every tool has one, e.g. Pest and PHPStan don't).

## Working conventions

- This repo has standing permission (see project memory) for Claude to `git add`, `commit` and `push` on its own, without asking first — stage specific files rather than a blanket `add`, and still check `git status`/`git diff` before pushing.
- After editing `src/input.css`, or after adding a project/tool whose classes are new, run `npm run build` and commit the resulting `style.css` along with the change — a change that isn't reflected in `style.css` won't show up on the live site even though `index.html`/`main.js` are correct.
- There's no dev server for the page itself; `npm run dev` only watches and rebuilds Tailwind. To preview the page, open `index.html` directly or serve the folder with any static file server.
