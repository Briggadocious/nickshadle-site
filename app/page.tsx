export default function Home() {
  const skills = [
    "Production Planning",
    "Inventory Management",
    "Process Improvement",
    "Lean Manufacturing",
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
      {/* Soft background glow */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_45%)]" />

      {/* Flower of Life background */}
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

      {/* Page content */}
      <div className="relative z-10 mx-auto max-w-4xl space-y-16 px-6 py-16">
        <section className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
            Professional Portfolio
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Nicholas Shadle
          </h1>

          <h2 className="text-xl text-gray-300">
            Operations • Supply Chain • Continuous Improvement
          </h2>

          <div className="flex gap-5 pt-3 text-blue-300">
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
          <h3 className="text-2xl font-semibold">About</h3>

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

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">Skills</h3>

          <div className="flex flex-wrap gap-2">
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

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold">Projects</h3>

          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-black/30 p-5 backdrop-blur-sm">
              <h4 className="font-semibold">Production Tracking System</h4>

              <p className="mt-2 text-sm leading-6 text-gray-300">
                Built a system to track output and identify bottlenecks in
                production flow.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/30 p-5 backdrop-blur-sm">
              <h4 className="font-semibold">Inventory Optimization</h4>

              <p className="mt-2 text-sm leading-6 text-gray-300">
                Improved forecasting and reduced waste through better inventory
                planning.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
