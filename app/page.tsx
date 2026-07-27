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

          <a
            href="/resume.pdf"
            className="mt-5 inline-block rounded-lg border border-white/20 bg-white px-5 py-3 font-medium text-black transition hover:bg-gray-200"
          >
            Download Resume
          </a>
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

        <section className="space-y-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              Featured Project
            </p>

            <h3 className="mt-2 text-3xl font-bold tracking-tight">
              Building NickShadle.com
            </h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6 shadow-xl backdrop-blur-sm md:p-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-2xl font-semibold">
                  Personal Portfolio Website
                </h4>

                <p className="mt-3 leading-7 text-gray-300">
                  I designed, built, and deployed this website to showcase my
                  professional experience while expanding my technical skills.
                  Although software development is not my primary profession,
                  this project demonstrates the same curiosity, adaptability,
                  problem-solving, and continuous-improvement mindset that I
                  have applied throughout my manufacturing career.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold">Tools Used</h4>

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
                <h4 className="text-lg font-semibold">Skills Demonstrated</h4>

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {projectSkills.map((skill) => (
                    <div
                      key={skill}
                      className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm text-gray-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm leading-6 text-gray-300">
                  <span className="font-semibold text-white">
                    Why it matters:
                  </span>{" "}
                  Building this site required me to learn unfamiliar tools,
                  resolve technical problems, manage changes through GitHub,
                  and continuously improve the final product—skills that
                  directly support my work in operations, manufacturing, and
                  process improvement.
                </p>
              </div>

              <div>
                <a
                  href="https://github.com/Briggadocious/nickshadle-site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-gray-200"
                >
                  View GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
