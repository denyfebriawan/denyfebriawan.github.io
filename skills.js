// Skills you already have, grouped for the Skills section. Tools from projects.js are added
// to these groups automatically, so you only edit this list for skills that are not in a project.
export const baseSkills = {
  "Frontend": ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Inertia.js", "Vue.js", "Tailwind CSS", "Bootstrap"],
  "Backend": ["PHP", "Laravel", "CodeIgniter", "Node.js", "Express", "Socket.io", "WebSockets", "Python", "REST APIs"],
  "Database": ["MySQL", "PostgreSQL", "MongoDB", "Prisma"],
  "DevOps & tools": ["Git", "GitHub Actions", "GitLab CI/CD", "Docker", "Nginx", "Linux server deployment (Azure VM)", "Vercel"],
  "Testing & quality": ["Pest", "PHPStan"],
};

// One line per tool used in projects.js. When a new project uses a tool that is not listed here,
// it still shows on the card, in the filter and under "Other tools" in Skills. Add a line here to
// put it in the right Skills group (category) and give it a card icon (an SVG in img/tech/, optional).
export const toolInfo = {
  "React": { category: "Frontend", icon: "react" },
  "TypeScript": { category: "Frontend", icon: "typescript" },
  "Inertia.js": { category: "Frontend", icon: "inertia" },
  "Next.js": { category: "Frontend", icon: "nextdotjs" },
  "Tailwind CSS": { category: "Frontend", icon: "tailwindcss" },
  "Laravel": { category: "Backend", icon: "laravel" },
  "Node.js": { category: "Backend", icon: "nodedotjs" },
  "Socket.io": { category: "Backend", icon: "socketdotio" },
  "PostgreSQL": { category: "Database", icon: "postgresql" },
  "Pest": { category: "Testing & quality" },
  "PHPStan": { category: "Testing & quality" },
};
