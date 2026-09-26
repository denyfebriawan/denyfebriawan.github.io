// Every project on the site. Keep tool names spelled exactly the same across
// projects ("Next.js", not "NextJS" in one and "Next.js" in another), because
// the Tools section merges identical names into one chip.
export const projects = [
  {
    title: "Ngajarin",
    description:
      "Online lesson booking platform for tutors and tutoring centers: each workspace gets a public page where students pick a subject, a teacher and a free time slot. " +
      "Double-booking is prevented at the database level with a PostgreSQL exclusion constraint, so no two confirmed bookings for the same teacher can ever overlap, even under simultaneous requests.",
    tools: ["Laravel", "React", "TypeScript", "Inertia.js", "PostgreSQL", "Pest", "PHPStan"],
    image: null, // TODO: add a screenshot, e.g. "img/projects/ngajarin.png"
    repo: "https://github.com/denyfebriawan/ngajarin",
    demo: "https://ngajarin.denyfebriawan.dev",
    status: null,
  },
  {
    title: "Buyin It Now",
    description:
      "Full-stack e-commerce shop with an admin dashboard, built so a flash sale can never oversell. " +
      "Stock is checked and taken in one atomic SQL statement: in a load test, 120 buyers raced for 50 units and exactly 50 won.",
    tools: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Zod", "Tailwind CSS", "shadcn/ui", "Docker"],
    image: null, // TODO: add a screenshot, e.g. "img/projects/buyin-it-now.png"
    repo: "https://github.com/denyfebriawan/buyin-it-now",
    demo: null,
    status: null,
  },
  {
    title: "Beli Tiket",
    description:
      "Ticket-drop platform where organizers release a limited number of tickets at a set time. " +
      "Accounts and the database schema are built; live drop browsing is next.",
    tools: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Better Auth", "Tailwind CSS", "shadcn/ui"],
    image: null, // TODO: add a screenshot
    repo: "https://github.com/denyfebriawan/beli-tiket",
    demo: null,
    status: "In progress",
  },
  {
    title: "ArthaPlan",
    description:
      "Personal finance web app for tracking income and spending, setting budgets and reading monthly reports, with interactive charts.",
    tools: ["HTML", "JavaScript", "Tailwind CSS", "Flowbite", "ApexCharts"],
    image: "img/projects/finance-app.png",
    repo: "https://github.com/denyfebriawan/manajemen-keuangan-pribadi",
    demo: null,
    status: null,
  },
  {
    title: "My Lawyer",
    description:
      "PLACEHOLDER: describe what the site does. " +
      "Built with PT Cipta Mandiri Solusindo as a project-based learning collaboration.",
    tools: ["PLACEHOLDER tool"], // TODO: the tools you used, e.g. "PHP", "MySQL"
    image: "img/projects/my-lawyer.jpg",
    repo: null,
    demo: null,
    status: null,
  },
  {
    title: "Twitter Clone",
    description: "PLACEHOLDER: describe what the app does (posting, likes, login, ...).",
    tools: ["React", "Redux", "React Router", "Material UI", "Firebase", "Axios"],
    image: null, // TODO: add a screenshot
    repo: "https://github.com/denyfebriawan/twitter-clone",
    demo: null,
    status: null,
  },
];
