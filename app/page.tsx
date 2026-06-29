export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-10 space-y-12">

      {/* HERO */}
      <section className="space-y-2">
        <h1 className="text-5xl font-bold">Nick Shadle</h1>
        <h2 className="text-xl text-gray-600">
          Operations • Supply Chain • Continuous Improvement
        </h2>

        {/* RESUME BUTTON */}
        <a
          href="/resume.pdf"
          className="inline-block mt-4 px-4 py-2 bg-black text-white rounded"
        >
          Download Resume
        </a>
      </section>

      {/* ABOUT */}
      <section className="space-y-2">
        <h3 className="text-2xl font-semibold">About</h3>
        <p className="text-gray-700">
          I improve manufacturing systems through production planning, inventory control,
          and process optimization.
        </p>
      </section>

      {/* SKILLS */}
      <section className="space-y-2">
        <h3 className="text-2xl font-semibold">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Production Planning",
            "Inventory Management",
            "Process Improvement",
            "Lean Manufacturing",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">Projects</h3>

        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold">Production Tracking System</h4>
            <p className="text-gray-600 text-sm">
              Built a system to track output and identify bottlenecks in production flow.
            </p>
          </div>

          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold">Inventory Optimization</h4>
            <p className="text-gray-600 text-sm">
              Improved forecasting and reduced waste through better inventory planning.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}