
export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-16">
      <section className="space-y-2">
        <h1 className="text-5xl font-bold tracking-tight">Nicholas Shadle</h1>
        <h2 className="text-xl text-gray-600">
          Operations • Supply Chain • Continuous Improvement
        </h2>
<div className="flex gap-4 mt-4 text-blue-600">
  <a
    href="https://www.linkedin.com/in/nick-shadle-679461230"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>

  <a href="mailto:NICHOLAS.SHADLE78@GMAIL.COM">
    Email
  </a>
</div>
        <a
          href="/resume.pdf"
          className="inline-block mt-4 px-4 py-2 bg-black text-white rounded"
        >
          Download Resume
        </a>
      </section>

      
      <section className="space-y-2">
  <h3 className="text-2xl font-semibold">About</h3>

  <p className="text-gray-700">
    I'm an operations and manufacturing professional with more than 13 years of experience leading production operations, inventory management, procurement, production planning, and process improvement within fast-paced manufacturing environments.
  </p>

  <p className="text-gray-700 mt-4">
    My experience spans brewing, beverage manufacturing, packaging, and supply chain operations, where I've developed a reputation for hands-on leadership, adaptability, and data-driven decision making. This website serves as my professional portfolio and a record of ongoing projects and learning.
  </p>
</section>

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
