import Image from "next/image";

export default function AiEnablementPage() {
  const videos = [
  {
    title: "AI Tip: Feedback --> direction",
    image: "/ai/feedback-ss.png",
    tiktok: "https://www.tiktok.com/@speedysari/video/7595290121058995511",
    linkedin: "https://www.linkedin.com/posts/saradjoyce_aiadoption-contentstrategy-creativeoperations-activity-7417278688834105344-OAcB",
    note: "Use AI to turn scattered opinions into useful feedback.",
  },
  {
    title: "AI Tip: Stress-free version control",
    image: "/ai/version-ss.png",
    tiktok: "https://www.tiktok.com/@speedysari/video/7600558218565242126",
    linkedin:
      "https://www.linkedin.com/posts/saradjoyce_aitips-creativeoperations-marketingoperations-activity-7422423239097966592-keuZ",
    note: "Turn ‘what changed?’ into a repeatable workflow.",
  },
  {
    title: "AI Tip: Use AI to maintain consistency",
    image: "/ai/consistency-ss.png",
    tiktok: "https://www.tiktok.com/@speedysari/video/7593376533486619917",
    linkedin:
      "https://www.linkedin.com/posts/saradjoyce_aiadoption-contentoperations-enablement-activity-7415410842029985792-zY38",
    note: "Inconsistency is the nemesis of any good editor. AI is here to help.",
  },
];


  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      {/* Top nav (matches your other pages) */}
      <nav className="mb-10 flex items-center justify-between">
        <a href="/" className="font-serif text-xl text-[color:var(--ink)]">
          Sara Joyce
        </a>

        <div className="flex gap-4 text-sm">
          <a className="text-slate-600 hover:text-[color:var(--ink)] hover:underline" href="/work">
            Work
          </a>
          <a className="text-slate-600 hover:text-[color:var(--ink)] hover:underline" href="/resume">
            Resume
          </a>
          <a
            className="text-slate-600 hover:text-[color:var(--ink)] hover:underline"
            href="https://www.linkedin.com/in/saradjoyce/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </nav>

      <header className="reveal-up">
        <p className="text-sm text-slate-600">Work sample • AI enablement • Public tutorials</p>

        <h1 className="mt-3 font-serif text-4xl tracking-tight text-[color:var(--ink)]">
          AI Enablement: short tutorials for real humans
        </h1>

        {/* Sara voice intro */}
        <p className="mt-5 text-lg text-slate-700">
          I make quick AI tips for busy people who want better output with less drama.
          No hype. No “the robots are coming.” Just practical patterns you can steal and use immediately.
        </p>
      </header>

      {/* Grid */}
      <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v) => (
          <div key={v.title} className="card p-6 card-hover reveal-up">
            {/* Simple thumbnail placeholder (clean + consistent) */}
            <a
  href={v.linkedin || v.tiktok}
  target="_blank"
  rel="noreferrer"
  className="block overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--paper)]"
>
  <div className="relative aspect-[9/16] w-full">
    <Image
      src={v.image}
      alt={v.title}
      fill
      className="object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  </div>

  <div className="p-4">
    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">AI Enablement</p>
    <p className="mt-2 font-medium text-[color:var(--ink)]">{v.title}</p>
  </div>
</a>


            <p className="mt-4 text-sm text-slate-700">{v.note}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={v.tiktok}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[color:var(--ink)] px-4 py-2 text-xs font-medium text-white hover:opacity-90"
              >
                Watch on TikTok →
              </a>

              {v.linkedin ? (
                <a
                  href={v.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[color:var(--line)] bg-white px-4 py-2 text-xs font-medium text-[color:var(--ink)] hover:bg-slate-50"
                >
                  LinkedIn →
                </a>
              ) : (
                <span className="rounded-full border border-[color:var(--line)] bg-white px-4 py-2 text-xs text-slate-500">
                  LinkedIn (soon)
                </span>
              )}
            </div>
          </div>
        ))}
      </section>

      <p className="mt-10 text-sm text-slate-500 reveal-up">
        More coming soon.
      </p>
    </main>
  );
}
