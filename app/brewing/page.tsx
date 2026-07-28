import SiteNav from "../components/SiteNav";

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

  const chapters = [
    {
      marker: "2011",
      eyebrow: "Where It Began",
      title: "A Garage, Five Gallons, and a New Passion",
      paragraphs: [
        "My brewing story began in a garage in 2011. I started as a homebrewer working in five-gallon batches, learning through experimentation and becoming fascinated by the combination of science, process, creativity, and craftsmanship.",
        "What began as curiosity quickly became a serious pursuit. Every batch taught me more about fermentation, ingredients, sanitation, recipe formulation, and the importance of controlling a process from beginning to end.",
      ],
    },
    {
      marker: "Indiana City",
      eyebrow: "Taking the Leap",
      title: "From Homebrewing to a Commercial Brewhouse",
      paragraphs: [
        "That passion eventually led me to Indiana City Brewing Company in Indianapolis. Moving from five-gallon garage batches to commercial production was exciting, humbling, and demanding. Professional brewing required precision, consistency, teamwork, quality control, production planning, and a completely different level of technical responsibility.",
        "As Indiana City grew, I grew alongside it. The brewery developed from a local operation into a brand distributed throughout Indiana. It was incredibly rewarding to walk into bars, restaurants, and liquor stores across the state and see beer I had helped brew on tap or on the shelf.",
      ],
    },
    {
      marker: "2017",
      eyebrow: "Looking Back",
      title: "A Snapshot from Indiana City",
      paragraphs: [
        "This interview from 2017 captures a snapshot of my brewing career during my time at Indiana City Brewing. Looking back, it is interesting to see what excited me, how I approached the craft, and how much I have grown since then.",
        "It reminds me where the journey began—and how a hobby that started in my garage eventually led to brewing beer that found its way into bars, restaurants, and liquor stores across Indiana.",
      ],
      link: {
        href: "https://indybrewreviewcom.wordpress.com/2017/08/18/nick-shadle-indiana-city-brewing-company/",
        label: "Read the interview",
      },
    },
    {
      marker: "Hotel Tango",
      eyebrow: "Broadening My Experience",
      title: "Learning Another Side of Beverage Manufacturing",
      paragraphs: [
        "At Hotel Tango Distillery, I expanded my experience beyond beer and into spirits production and packaging. I operated bottling, labeling, and conveyor equipment while supporting batching, blending, proofing, warehouse activity, forklift operation, and basic equipment maintenance.",
        "That chapter strengthened my understanding of beverage manufacturing as a larger system—one that depends on reliable equipment, accurate measurements, careful material handling, quality standards, and close coordination across production and packaging.",
      ],
    },
    {
      marker: "Quaff ON!",
      eyebrow: "Bringing It All Together",
      title: "Heading Up Brewing Operations",
      paragraphs: [
        "At Quaff ON! Brewing Company, the experience I had built over the years came together. I headed up brewing operations, directed daily wort production, supervised an assistant brewer, and remained hands-on with the brewhouse whenever the work required it.",
        "My responsibilities extended well beyond brewing individual batches. I coordinated production planning, raw-material procurement, inventory control, forecasting, quality checks, maintenance priorities, recipe development, and detailed production records in Ekos. I managed approximately $250,000 in annual raw-material planning and purchasing while helping keep brewing operations efficient and consistent.",
      ],
    },
    {
      marker: "Today",
      eyebrow: "The Next Chapter",
      title: "Carrying the Craft Forward",
      paragraphs: [
        "Brewing gave me far more than a career. It taught me discipline, problem-solving, leadership, continuous improvement, and the importance of doing things the right way—even when no one is watching.",
        "As my professional path expands beyond craft beer, I carry nearly fifteen years of manufacturing, production, procurement, quality, and brewing experience into every new opportunity. The industry may be changing, but the skills, standards, and perspective it gave me continue to shape how I work.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#080a0f] text-white">
      <SiteNav />

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.14),transparent_42%)]" />

      <div className="relative z-10 mx-auto max-w-5xl space-y-16 px-6 py-14">
        <header className="mx-auto max-w-3xl space-y-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Brewing
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            My Brewing Story
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            From five-gallon batches in a garage to heading up brewing
            operations at a brewery whose beer reached bars, restaurants, and
            liquor stores across Indiana.
          </p>
        </header>

        <section className="relative mx-auto max-w-4xl">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-amber-300/60 via-amber-300/25 to-transparent md:left-1/2" />

          <div className="space-y-10 md:space-y-14">
            {chapters.map((chapter, index) => (
              <article
                key={chapter.title}
                className={`relative pl-12 md:grid md:grid-cols-2 md:gap-12 md:pl-0 ${
                  index % 2 === 0 ? "" : "md:[&>div]:col-start-2"
                }`}
              >
                <div className="absolute left-[9px] top-7 h-4 w-4 rounded-full border-4 border-[#080a0f] bg-amber-300 shadow-[0_0_0_1px_rgba(252,211,77,0.45)] md:left-1/2 md:-translate-x-1/2" />

                <div
                  className={`rounded-2xl border p-6 backdrop-blur-sm md:p-7 ${
                    chapter.link
                      ? "border-amber-300/30 bg-amber-300/10"
                      : "border-white/10 bg-black/30"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
                      {chapter.eyebrow}
                    </p>
                    <span className="rounded-full border border-amber-300/20 bg-black/20 px-3 py-1 text-xs font-semibold text-amber-200">
                      {chapter.marker}
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                    {chapter.title}
                  </h2>

                  <div className="mt-4 space-y-4 leading-7 text-gray-300">
                    {chapter.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {chapter.link && (
                    <a
                      href={chapter.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center rounded-lg border border-amber-300/30 bg-black/20 px-4 py-2.5 font-semibold text-amber-200 transition hover:bg-amber-300/10 hover:text-white"
                    >
                      {chapter.link.label} →
                    </a>
                  )}
                </div>
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
            <p className="text-3xl font-bold text-amber-300">2011</p>
            <h3 className="mt-2 font-semibold">The First Garage Batch</h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              The beginning of a homebrewing passion that grew into a
              professional brewing career.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <p className="text-3xl font-bold text-amber-300">$250K</p>
            <h3 className="mt-2 font-semibold">Annual Raw Materials</h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Approximately $250,000 in annual raw-material planning,
              purchasing, and inventory responsibility.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <p className="text-3xl font-bold text-amber-300">Statewide</p>
            <h3 className="mt-2 font-semibold">Beer Distribution</h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Helped produce beer that reached bars, restaurants, and liquor
              stores throughout Indiana.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-6 text-center md:p-8">
          <h2 className="text-2xl font-semibold">
            Brewing Built My Manufacturing Career
          </h2>

          <p className="mx-auto mt-3 max-w-3xl leading-7 text-gray-300">
            The brewing industry taught me how to balance craftsmanship with
            disciplined manufacturing. It strengthened my ability to lead
            brewing operations, troubleshoot equipment and processes, plan
            production, control inventory, maintain quality, and keep improving
            under real-world operating pressure.
          </p>

          <a
            href="/"
            className="mt-6 inline-block rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-gray-200"
          >
            Return to Main Portfolio
          </a>
        </section>
      </div>
    </main>
  );
}
