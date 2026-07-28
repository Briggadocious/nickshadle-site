import SiteNav from "./components/SiteNav";

export default function Home() {
  const skills = [
    "Production Planning",
    "Inventory Management",
    "Process Improvement",
    "Lean Manufacturing",
  ];

  const tools = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Vercel",
    "ChatGPT",
  ];

  const projectSkills = [
    "Responsive website development",
    "Version control and Git workflows",
    "Production deployment",
    "Debugging and troubleshooting",
    "User-interface design",
    "AI-assisted development",
    "Iterative improvement",
    "Independent technical learning",
  ];

  const flowerCircles = [
    [300, 300],
    [300, 220],
    [369, 260],
    [369, 340],
    [300, 380],
    [231, 340],
    [231, 260],
    [300, 140],
    [369, 180],
    [438, 220],
    [438, 300],
    [438, 380],
    [369, 420],
    [300, 460],
    [231, 420],
    [162, 380],
    [162, 300],
    [162, 220],
    [231, 180],
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080a0f] text-white">
      <SiteNav />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_45%)]" />

      <div className="pointer-events-none fixed inset-0 flex items-center justify-center overflow-hidden">
        <svg
          viewBox="0 0 600 600"
          aria-hidden="true"
          className="h-[900px] w-[900px] max-w-none opacity-[0.09]"
        >
          <g
            fill="none"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="1.25"
          >
            {flowerCircles.map(([cx, cy], index) => (
              <circle key={index} cx={cx} cy={cy} r="80" />
            ))}

            <circle cx="300" cy="300" r="240" />
            <circle cx="300" cy="300" r="280" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl space-y-16 px-6 py-16">
        <section className="flex flex-col items-center space-y-4 text-center">
          <img
            src="/profile.jpg"
            alt="Nicholas Shadle"
            className="h-40 w-40 rounded-full border-4 border-white/15 object-cover shadow-2xl"
          />

          <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
            Professional Portfolio
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Nicholas Shadle
          </h1>

          <h2 className="text-xl text-gray-300">
            Operations • Supply Chain • Continuous Improvement
          </h2>

          <div className="flex justify-center gap-5 pt-3 text-blue-300">
            <a
              href="https://www.linkedin.com/in/nick-shadle-679461230"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="mailto:NICHOLAS.SHADLE78@GMAIL.COM"
              className="transition hover:text-white"
            >
              Email
            </a>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href="/resume.pdf"
              className="inline-block rounded-lg border border-white/20 bg-white px-5 py-3 font-medium text-black transition hover:bg-gray-200"
            >
              Download Resume
            </a>

            <a
              href="/brewing"
              className="inline-block rounded-lg border border-amber-300/40 bg-amber-300/10 px-5 py-3 font-medium text-amber-200 transition hover:bg-amber-300/20 hover:text-white"
            >
              Explore My Brewing Career
            </a>

            <a
              href="/projects"
              className="inline-block rounded-lg border border-blue-300/40 bg-blue-400/10 px-5 py-3 font-medium text-blue-200 transition hover:bg-blue-400/20 hover:text-white"
            >
              View My Projects
            </a>

            <a
              href="/beyond-work"
              className="inline-block rounded-lg border border-violet-300/40 bg-violet-400/10 px-5 py-3 font-medium text-violet-200 transition hover:bg-violet-400/20 hover:text-white"
            >
              Beyond Work
            </a>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-sm">
          <h3 className="text-center text-2xl font-semibold">About</h3>

          <p className="mt-4 leading-7 text-gray-300">
            I&apos;m an operations and manufacturing professional with more
            than 13 years of experience leading production operations,
            inventory management, procurement, production planning, and
            process improvement within fast-paced manufacturing environments.
          </p>

          <p className="mt-4 leading-7 text-gray-300">
            My experience spans brewing, beverage manufacturing, packaging,
            and supply chain operations, where I&apos;ve developed a reputation
            for hands-on leadership, adaptability, and data-driven decision
            making. This website serves as my professional portfolio and a
            record of ongoing projects and learning.
          </p>
        </section>

        <section className="space-y-4 text-center">
          <h3 className="text-2xl font-semibold">Skills</h3>

          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-gray-200 backdrop-blur-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
