export default function ResumePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      {/* Top nav */}
      <nav className="mb-12 flex items-center justify-between">
  <a href="/" className="font-serif text-xl text-[color:var(--ink)]">
    Sara Joyce
  </a>

  <div className="flex gap-4 text-sm">
    <a className="text-slate-600 hover:text-[color:var(--ink)] hover:underline" href="/work">Work</a>
    <a className="text-[color:var(--ink)] font-medium underline" href="/resume">Resume</a>
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

      <header className="reveal-up flex flex-wrap items-end justify-between gap-6">
  <div>
    <h1 className="font-serif text-4xl text-[color:var(--ink)]">Resume</h1>
    <p className="mt-2 text-slate-700">
      Conversation design • Content ops • AI workflows
    </p>
    <p className="mt-1 text-sm text-slate-500">Tulsa, OK • Remote</p>
  </div>

  <div className="flex flex-wrap gap-3">
    <a
      href="/Sara_Joyce_Resume.pdf"
      className="rounded-full bg-[color:var(--ink)] px-5 py-2 text-sm font-medium text-white shadow hover:-translate-y-0.5 hover:shadow-md transition"
    >
      Download PDF
    </a>

    <a
      href="mailto:saradjoyce@gmail.com"
      className="rounded-full border border-[color:var(--line)] bg-white px-5 py-2 text-sm font-medium text-[color:var(--ink)] hover:bg-slate-50"
    >
      Email
    </a>

    <a
      href="https://calendly.com/saradjoyce"
      target="_blank"
      rel="noreferrer"
      className="rounded-full bg-[color:var(--sage)] px-5 py-2 text-sm font-medium text-[color:var(--ink)] shadow hover:-translate-y-0.5 hover:shadow-md transition"
    >
      Book a call
    </a>
  </div>
</header>

      {/* Resume content card */}
      <section className="card mt-10 p-8 reveal-up reveal-delay-1">
        <h2 className="font-serif text-2xl text-[#152438]">Summary</h2>
        <p className="mt-3 text-slate-700">
          Linguistics-trained content + creative operations leader specializing in turning messy ideas,
          rough drafts, and complex workflows into clear, usable work that ships.
        </p>

        {/* Resume-at-a-glance */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { k: "Focus", v: "Conversation design • Content ops • AI workflows" },
            { k: "Strengths", v: "Editorial leadership • PM • Enablement" },
            { k: "Location", v: "Tulsa, OK • Remote" },
          ].map((item) => (
            <div
              key={item.k}
              className="rounded-2xl border border-[#C7CCCD] bg-[#FAFAF8] p-4"
            >
              <p className="text-xs uppercase tracking-wide text-slate-500">{item.k}</p>
              <p className="mt-2 text-sm text-slate-700">{item.v}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-10 font-serif text-2xl text-[#152438]">Core strengths</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Conversation design",
            "Content operations",
            "AI enablement",
            "Editorial leadership",
            "Workflow design",
            "Stakeholder management",
            "Prompt design",
            "Project management",
          ].map((t) => (
            <span
              key={t}
              className="rounded-full border border-[#C7CCCD] bg-white px-3 py-1 text-xs text-[#253953]"
            >
              {t}
            </span>
          ))}
        </div>

        <h2 className="mt-10 font-serif text-2xl text-[#152438]">Prompt design experience</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
          <li>Design structured prompts and conversational flows to turn messy inputs into actionable outputs.</li>
          <li>Build AI-assisted workflows that support editorial planning, content evaluation, and decision-making.</li>
          <li>Experiment with Voiceflow and LLM-based tools to prototype real-world AI assistants.</li>
        </ul>

        <h2 className="mt-10 font-serif text-2xl text-[#152438]">Education</h2>
        <p className="mt-3 text-slate-700">
          BA, Linguistics — University of Oklahoma
        </p>
      </section>
     {/* EXPERIENCE SECTION */}
<section className="mt-20 bg-[color:var(--ink-section)] py-20 text-white">
  <div className="mx-auto max-w-4xl px-6">
    <h2 className="font-serif text-3xl">Professional Experience</h2>

    <div className="mt-10 space-y-12">
      <div>
        <p className="text-lg font-medium">EndeavorB2B — Content Strategist</p>
        <p className="text-sm text-white/70">Remote • Oct 2022–Present</p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-white/85">
          <li>Lead cross-functional content workflows for two national healthcare publications.</li>
          <li>Use analytics and audience behavior data to refine content strategy.</li>
          <li>Build repeatable content frameworks that standardize tone, structure, and quality.</li>
        </ul>
      </div>

      <div>
        <p className="text-lg font-medium">EndeavorB2B — Associate Editor</p>
        <p className="text-sm text-white/70">Remote • May 2020–Oct 2022</p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-white/85">
          <li>Improved discoverability and clarity using SEO and user-intent research.</li>
          <li>Partnered with marketing and clinical teams to align messaging.</li>
        </ul>
      </div>

      <div>
        <p className="text-lg font-medium">Red Pen Girl — Owner & Freelance Editor/Writer</p>
        <p className="text-sm text-white/70">Remote • Oct 2015–May 2020</p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-white/85">
          <li>Helped agencies translate complex subject matter into concise communication.</li>
        </ul>
      </div>

      <div>
        <p className="text-lg font-medium">Funnel Design Group — Creative Services Manager</p>
        <p className="text-sm text-white/70">Oklahoma City • Apr 2013–May 2015</p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-white/85">
          <li>Managed end-to-end delivery of client communication projects across design, writing, and development teams.</li>
          <li>Served as the central liaison between clients and creatives, translating requirements into clear, actionable deliverables.</li>
        </ul>
      </div>

      <div className="mt-8">
        <p className="text-lg font-medium">Staplegun — VP, Creative Services</p>
        <p className="text-sm text-white/70">Oklahoma City • Feb 2010–Apr 2013</p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-white/85">
          <li>Directed project delivery and resource planning for a 30+ person creative team across digital and advertising initiatives.</li>
          <li>Led client meetings and translated strategic goals into clear execution plans and workflows.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

</main>
  );
}
