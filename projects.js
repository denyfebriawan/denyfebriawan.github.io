// Every project on the site. Keep tool names spelled exactly the same across
// projects ("Next.js", not "NextJS" in one and "Next.js" in another), because
// the Tools section merges identical names into one chip.
export const projects = [
  {
    title: "Kinoo",
    description:
      "Watch-party app where friends watch the same YouTube video in sync, with live chat. " +
      "The server is the single source of truth for playback, and viewers who slowly drift out of sync are pulled back automatically.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Socket.io", "Node.js"],
    image: "img/projects/kinoo-app.png",
    repo: "https://github.com/denyfebriawan/kinoo",
    demo: "https://kinoo-nine.vercel.app",
    status: null,
  },
  {
    title: "Ngajarin",
    description:
      "Online lesson booking platform for tutors and tutoring centers: each workspace gets a public page where students pick a subject, a teacher and a free time slot. " +
      "Double-booking is prevented at the database level with a PostgreSQL exclusion constraint, so no two confirmed bookings for the same teacher can ever overlap, even under simultaneous requests.",
    tools: ["Laravel", "React", "TypeScript", "Inertia.js", "PostgreSQL", "Pest", "PHPStan"],
    image: "img/projects/ngajarin-app.png", // TODO: add a screenshot, e.g. "img/projects/ngajarin.png"
    repo: "https://github.com/denyfebriawan/ngajarin",
    demo: "https://ngajarin.denyfebriawan.dev",
    status: null,
  },

];
