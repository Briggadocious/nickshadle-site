export default function SiteNav() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/brewing", label: "Brewing" },
    { href: "/projects", label: "Projects" },
    { href: "/beyond-work", label: "Beyond Work" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080a0f]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <a
          href="/"
          className="text-lg font-bold tracking-tight text-white transition hover:text-blue-200"
        >
          Nicholas Shadle
        </a>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center justify-end gap-1 text-sm"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            className="ml-1 rounded-lg border border-white/15 bg-white px-3 py-2 font-semibold text-black transition hover:bg-gray-200"
          >
            Resume
          </a>

          <a
            href="mailto:NICHOLAS.SHADLE78@GMAIL.COM"
            className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 font-semibold text-white transition hover:bg-white/10"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
