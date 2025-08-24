export default function Home() {
  return (
    <main>
      <section className="hero-gradient">
        <div className="container py-24 sm:py-32 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[color:var(--hero-foreground)]">
            Data Science Club
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-[color:var(--hero-foreground)]/90">
            Learn, build, and collaborate on real-world data projects.
            Workshops, hack nights, and a community of curious minds.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium bg-[color:var(--primary)] text-[color:var(--hero-foreground)] shadow hover:opacity-90 transition"
              href="#join"
            >
              Join the Club
            </a>
            <a
              className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium border border-[color:var(--hero-foreground)] text-[color:var(--hero-foreground)] hover:bg-[color:var(--hero-foreground)]/10 transition"
              href="#learn-more"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
      <section className="container py-16">
        <h2 className="text-2xl font-bold">What we do</h2>
        <p className="mt-4 text-[color:var(--foreground)]/70">
          Hands-on workshops, speaker sessions, project teams, and competitions
          to level up your skills.
        </p>
      </section>
    </main>
  );
}
