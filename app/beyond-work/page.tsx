import SiteNav from "../components/SiteNav";

export default function BeyondWorkPage() {
  const interests = [
    {
      title: "Travel and Adventure",
      description:
        "Travel gives me perspective, challenges my comfort zone, and keeps me curious about people, places, and new experiences.",
    },
    {
      title: "Photography",
      description:
        "Photography encourages me to slow down, pay attention to detail, and find meaning in everyday places and moments.",
    },
    {
      title: "Bitcoin and Technology",
      description:
        "I enjoy learning about Bitcoin, running small mining equipment, and exploring how emerging technology can reshape established systems.",
    },
    {
      title: "Brewing and Craftsmanship",
      description:
        "Brewing remains more than a career chapter. It reflects my appreciation for creativity, process, quality, and making something tangible.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080a0f] text-white">
      <SiteNav />

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.16),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-5xl space-y-14 px-6 py-14">
        <header className="mx-auto max-w-3xl space-y-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
            Beyond Work
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            There Is More to Me Than a Résumé
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Work is an important part of my story, but curiosity, creativity,
            travel, technology, and the experiences I pursue outside of work
            shape how I think and who I am.
          </p>
        </header>

        <section className="rounded-2xl border border-violet-300/20 bg-black/30 p-6 backdrop-blur-sm md:p-8">
          <h2 className="text-2xl font-semibold">The Person Behind the Work</h2>

          <div className="mt-4 space-y-4 leading-7 text-gray-300">
            <p>
              I believe a meaningful life should include more than a job title.
              I value experiences that keep me learning, challenge my
              assumptions, and give me a broader view of the world.
            </p>

            <p>
              The interests below may seem different from manufacturing and
              operations, but they draw on many of the same qualities:
              curiosity, patience, problem-solving, attention to detail, and a
              willingness to keep learning.
            </p>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {interests.map((interest) => (
            <article
              key={interest.title}
              className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-sm"
            >
              <h2 className="text-xl font-semibold text-violet-200">
                {interest.title}
              </h2>

              <p className="mt-3 leading-7 text-gray-300">
                {interest.description}
              </p>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-violet-300/20 bg-violet-300/10 p-6 text-center md:p-8">
          <h2 className="text-2xl font-semibold">A Page That Will Grow</h2>

          <p className="mx-auto mt-3 max-w-3xl leading-7 text-gray-300">
            This page is the beginning of a more personal side of the site.
            Over time, it can grow to include travel stories, photography,
            favorite experiences, technical hobbies, and other parts of life
            that matter to me.
          </p>
        </section>
      </div>
    </main>
  );
}
