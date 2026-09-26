import { projects } from "./projects.js";
import { baseSkills, toolInfo } from "./skills.js";

const toolList = document.querySelector("#tool-list");
const skillList = document.querySelector("#skill-list");
const projectList = document.querySelector("#project-list");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// How many projects use each tool, e.g. { "React": 3, "Prisma": 2 }
const toolCounts = {};
for (const tool of projects.flatMap((project) => project.tools)) {
  toolCounts[tool] = (toolCounts[tool] ?? 0) + 1;
}

// One filter chip per tool, most-used first; tools with the same count in alphabetical order
const tools = Object.keys(toolCounts).sort((a, b) => toolCounts[b] - toolCounts[a] || a.localeCompare(b));

// The tool picked in the filter; null means "All"
let selectedTool = null;

// Tailwind only generates CSS for class names it finds written out in full,
// so every class below is a complete string, never built from pieces.
const LINK_CLASSES =
  "rounded-full border border-line bg-surface px-4 py-2 font-semibold transition-colors hover:border-accent hover:text-accent";

// The icon is a mask painted with the tag's own text color, so it follows the light/dark theme.
// Tools without an icon in skills.js just show text.
function toolIconHTML(tool) {
  const icon = toolInfo[tool]?.icon;
  if (!icon) return "";

  const url = `url(img/tech/${icon}.svg)`;
  return `<span aria-hidden="true" class="size-3.5 shrink-0 bg-current" style="mask: ${url} center / contain no-repeat; -webkit-mask: ${url} center / contain no-repeat"></span>`;
}

function chipHTML(tool) {
  const label = tool ?? "All";
  const count = tool ? `<span class="text-xs opacity-70">${toolCounts[tool]}</span>` : "";

  return `
    <button type="button" data-tool="${tool ?? ""}" aria-pressed="${tool === selectedTool}"
      class="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm transition-colors hover:border-accent aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-on-accent">
      ${label}${count}
    </button>`;
}

function projectCardHTML(project) {
  const image = project.image
    ? `<img src="${project.image}" alt="Screenshot of ${project.title}" loading="lazy"
        class="aspect-video w-full border-b border-line object-cover object-top">`
    : `<div class="grid aspect-video w-full place-items-center border-b border-line bg-accent-soft text-sm text-muted">Screenshot coming soon</div>`;

  const status = project.status
    ? `<span class="ml-2 rounded-full border border-accent px-2.5 py-0.5 align-middle text-xs font-semibold text-accent">${project.status}</span>`
    : "";

  const toolTags = project.tools
    .map((tool) => {
      const colors = tool === selectedTool ? "bg-accent text-on-accent" : "bg-accent-soft text-accent";
      return `<li class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${colors}">${toolIconHTML(tool)}${tool}</li>`;
    })
    .join("");

  const codeLink = project.repo
    ? `<a href="${project.repo}" target="_blank" rel="noopener" class="${LINK_CLASSES}">Code</a>`
    : "";
  const demoLink = project.demo
    ? `<a href="${project.demo}" target="_blank" rel="noopener" class="${LINK_CLASSES}">Live demo</a>`
    : "";

  // A unique name per card lets the browser animate each card to its new spot when the filter changes
  const transitionName = `project-${projects.indexOf(project)}`;

  return `
    <article style="view-transition-name: ${transitionName}" class="flex flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-sm transition motion-safe:hover:-translate-y-1 hover:border-accent hover:shadow-md">
      ${image}
      <div class="flex flex-1 flex-col gap-3 p-5">
        <h3 class="text-lg font-bold">${project.title}${status}</h3>
        <p class="text-muted">${project.description}</p>
        <ul class="flex flex-wrap gap-1.5">${toolTags}</ul>
        <div class="mt-auto flex flex-wrap gap-2">${codeLink}${demoLink}</div>
      </div>
    </article>`;
}

function renderProjects() {
  const visibleProjects = selectedTool
    ? projects.filter((project) => project.tools.includes(selectedTool))
    : projects;

  projectList.innerHTML = visibleProjects.map(projectCardHTML).join("");
}

// Re-render the cards with an animation, unless the browser can't do it or the visitor prefers less motion
function renderProjectsAnimated() {
  if (!document.startViewTransition || prefersReducedMotion) {
    renderProjects();
    return;
  }

  document.startViewTransition(renderProjects);
}

// Start from the hand-written skills, then add every project tool that is not listed yet
function renderSkills() {
  const groups = Object.fromEntries(Object.entries(baseSkills).map(([group, items]) => [group, [...items]]));

  for (const tool of Object.keys(toolCounts)) {
    if (!toolInfo[tool]) console.warn(`"${tool}" has no entry in toolInfo (skills.js), so it has no card icon and no Skills category`);

    const alreadyListed = Object.values(groups).some((items) => items.includes(tool));
    if (alreadyListed) continue;

    const group = toolInfo[tool]?.category ?? "Other tools";
    groups[group] ??= [];
    groups[group].push(tool);
  }

  skillList.innerHTML = Object.entries(groups)
    .map(([group, items]) => `
      <div>
        <dt class="text-sm font-semibold text-accent">${group}</dt>
        <dd>${items.join(", ")}</dd>
      </div>`)
    .join("");
}

toolList.addEventListener("click", (event) => {
  const clickedChip = event.target.closest("button");
  if (!clickedChip) return;

  selectedTool = clickedChip.dataset.tool || null;

  for (const chip of toolList.querySelectorAll("button")) {
    chip.setAttribute("aria-pressed", chip === clickedChip);
  }

  renderProjectsAnimated();
});

// Highlight the nav link of the section currently in view ("#top" is the logo, not a section)
const navLinks = [...document.querySelectorAll('header nav a[href^="#"]:not([href="#top"])')];

function highlightCurrentSection() {
  const scrolledToBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
  let currentLink = null;

  for (const link of navLinks) {
    const section = document.querySelector(link.hash);
    if (section.getBoundingClientRect().top <= window.innerHeight / 2) currentLink = link;
  }

  // The footer is too short to reach the middle of the screen, so the bottom of the page counts as Contact
  if (scrolledToBottom) currentLink = navLinks.at(-1);

  for (const link of navLinks) {
    if (link === currentLink) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
}

toolList.innerHTML = [null, ...tools].map(chipHTML).join("");
renderProjects();
renderSkills();

highlightCurrentSection();
window.addEventListener("scroll", highlightCurrentSection, { passive: true });
