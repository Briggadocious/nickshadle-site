import SiteNav from "../components/SiteNav";

export default function ProjectsPage() {
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

  const demonstratedSkills = [
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
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_45%)]" />

      <div className="pointer-events-none fixed inset-0 flex items-center justify-center overflow-hidden">
        <svg
          viewBox="0 0 600 600"
          aria-hidden="true"
          className="h-[900px] w-[900px] max-w-none opacity-[0.08]"
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

      <div className="relative z-10 mx-auto max-w-5xl space-y-14 px-6 py-12">

        <header className="mx-auto max-w-3xl space-y-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Projects
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Learning Through Building
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            A growing collection of projects that demonstrate curiosity,
            adaptability, independent learning, and a continuous-improvement
            mindset.
          </p>
        </header>

        <section className="rounded-2xl border border-blue-300/20 bg-black/30 p-6 shadow-xl backdrop-blur-sm md:p-8">
          <div className="space-y-7">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
                Featured Project
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                Building NickShadle.com
              </h2>

              <p className="mt-4 leading-7 text-gray-300">
                I designed, built, and deployed this website to showcase my
                professional experience while expanding my technical skills.
                Although software development is not my primary profession,
                this project demonstrates the same curiosity, adaptability,
                problem-solving, and continuous-improvement mindset that I have
                applied throughout my manufacturing career.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Tools Used</h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Skills Demonstrated</h3>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {demonstratedSkills.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm text-gray-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="leading-7 text-gray-300">
                <span className="font-semibold text-white">Why it matters:</span>{" "}
                Building this site required me to learn unfamiliar tools,
                troubleshoot technical problems, manage changes through GitHub,
                and improve the final product through repeated testing and
                refinement. Those same abilities directly support my work in
                operations, manufacturing, and process improvement.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/Briggadocious/nickshadle-site"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-gray-200"
              >
                View GitHub Repository
              </a>

              <a
                href="/"
                className="inline-block rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-semibold transition hover:bg-white/10"
              >
                View Live Website
              </a>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-black/30 p-6 text-center backdrop-blur-sm md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            More to Come
          </p>

          <h2 className="mt-2 text-2xl font-semibold">
            An Ongoing Project Portfolio
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-300">
            This page will grow as I complete new technical, operational, and
            continuous-improvement projects.
          </p>
        </section>
      </div>
    </main>
  );
}
