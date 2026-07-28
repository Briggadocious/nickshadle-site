export default function BrewingPage() {
  const skills = [
    "Brewhouse Operations",
    "Recipe Development",
    "Production Planning",
    "Raw Material Procurement",
    "Inventory Management",
    "Quality Assurance",
    "Packaging Operations",
    "Preventive Maintenance",
    "Team Leadership",
    "ERP Documentation",
  ];

  const career = [
    {
      company: "Quaff On Brewing Company",
      role: "Brewing Operations Leadership",
      description:
        "Directed daily brewhouse operations, coordinated wort production, supervised an assistant brewer, and operated the system hands-on as needed. Managed production planning, raw-material procurement, inventory control, quality checks, maintenance coordination, and detailed production records in Ekos.",
    },
    {
      company: "Indiana City Brewing Company",
      role: "Head Brewer",
      description:
        "Led brewing operations from raw-material preparation through fermentation and packaging. Developed recipes, monitored gravity and pH, planned production, maintained records, coordinated purchasing, supported preventive maintenance, and represented the brewery at public and industry events.",
    },
    {
      company: "Hotel Tango Distillery",
      role: "Packaging and Warehouse Technician",
      description:
        "Operated bottling, labeling, and conveyor equipment while supporting batching, blending, proofing, warehouse activity, forklift operation, and basic equipment maintenance in a fast-paced beverage production environment.",
    },
    {
      company: "Blue Marble",
      role: "Packaging Operations",
      description:
        "Supported beverage packaging operations and gained hands-on experience with production lines, packaging equipment, material handling, and quality-focused manufacturing practices.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#080a0f] text-white">
      <div className="mx-auto max-w-5xl space-y-14 px-6 py-12">
        <nav className="flex flex-wrap items-center justify-between gap-4">
          <a href="/" className="text-sm font-semibold text-amber-300 hover:text-white">
            ← Back to Home
          </a>
          <a
            href="/resume.pdf"
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10"
          >
            Download Resume
          </a>
        </nav>

        <header className="mx-auto max-w-3xl space-y-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Brewing Career
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Brewing, Beverage Production, and Operations
          </h1>
          <p className="text-lg leading-8 text-gray-300">
            More than a decade of hands-on experience spanning brewhouse
            operations, recipe development, production leadership, packaging,
            procurement, inventory management, quality assurance, and
            continuous improvement.
          </p>
        </header>

        <section className="rounded-2xl border border-amber-300/20 bg-black/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold">My Brewing Story</h2>
          <div className="mt-4 space-y-4 leading-7 text-gray-300">
            <p>
              Brewing began as a passion and became the foundation of my
              manufacturing career. Over the years, I progressed from
              production and packaging work into head-brewer and operations
              leadership responsibilities.
            </p>
            <p>
              My work required far more than making beer. I coordinated people,
              materials, schedules, equipment, quality standards, production
              records, and maintenance priorities while adapting to changing
              conditions on the floor.
            </p>
          </div>
        </section>

        <section className="space-y-5">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
              Experience
            </p>
            <h2 className="mt-2 text-3xl font-bold">Career Highlights</h2>
          </div>

          <div className="grid gap-5">
            {career.map((job) => (
              <article
                key={job.company}
                className="rounded-2xl border border-white/10 bg-black/30 p-6"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-semibold">{job.company}</h3>
                  <p className="text-sm font-medium text-amber-300">{job.role}</p>
                </div>
                <p className="mt-3 leading-7 text-gray-300">{job.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
              Capabilities
            </p>
            <h2 className="mt-2 text-3xl font-bold">
              Brewing and Production Skills
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm text-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <p className="text-3xl font-bold text-amber-300">13+</p>
            <h3 className="mt-2 font-semibold">Years in Manufacturing</h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Experience across brewing, beverage production, packaging, and
              warehouse operations.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <p className="text-3xl font-bold text-amber-300">$250K</p>
            <h3 className="mt-2 font-semibold">Annual Raw Materials</h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Managed approximately $250,000 in annual raw-material planning,
              purchasing, and inventory.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <p className="text-3xl font-bold text-amber-300">End-to-End</p>
            <h3 className="mt-2 font-semibold">Production Experience</h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Hands-on work from raw materials and brewing through quality,
              packaging, warehousing, and finished product.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-6 text-center md:p-8">
          <h2 className="text-2xl font-semibold">Brewing Built My Operations Career</h2>
          <p className="mx-auto mt-3 max-w-3xl leading-7 text-gray-300">
            The brewing industry taught me how to balance craftsmanship with
            disciplined manufacturing. It strengthened my ability to lead,
            troubleshoot, plan production, control inventory, maintain quality,
            and improve processes under real-world operating pressure.
          </p>
          <a
            href="/"
            className="mt-6 inline-block rounded-lg bg-white px-5 py-3 font-semibold text-black hover:bg-gray-200"
          >
            Return to Main Portfolio
          </a>
        </section>
      </div>
    </main>
  );
}
