import SiteHeader from "@/components/SiteHeader";
export default function WorkPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      <SiteHeader active="work" />

      <header className="reveal-up">
  <p className="text-sm tracking-wide text-slate-600">
    Selected projects • Case studies • Experiments
  </p>

  <h1 className="mt-2 font-serif text-5xl leading-[1.06] tracking-tight text-[color:var(--ink)]">
    Work
  </h1>

  <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700">
    Selected projects in conversation design, content operations, and AI workflows.
  </p>
</header>


      <div className="mt-12 grid gap-4 reveal-up reveal-delay-1">

        {/* Live case study */}
        <div className="card card-hover p-8">

          <h2 className="font-serif text-2xl tracking-tight text-[color:var(--ink)]">
            Helping small content teams decide what to post next with a Voiceflow AI assistant
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Conversation design · Prompt design · Prototyping
          </p>

          <p className="mt-4 text-slate-700">
            A Voiceflow chatbot that guides small content teams through goals, audience,
            channels, and tone, then evaluates messy content ideas and recommends what to
            publish next.
          </p>

          <a
  href="/work/voiceflow-bot"
  className="focus-ring mt-5 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--accent)] underline decoration-transparent underline-offset-4 transition hover:decoration-[color:var(--accent)]"
>
  Read case study <span className="opacity-70">→</span>
</a>

        </div>

        {/* Coming soon: Recruiter bot */}
       <div className="card p-8 bg-[color:var(--paper)]/70">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-serif text-2xl tracking-tight text-[color:var(--ink)]">
              Interactive resume bot for recruiters
            </h2>
            <span className="rounded-full border border-[color:var(--line)] bg-[color:var(--mint)] px-3 py-1 text-xs text-[color:var(--ink-2)]">
              Coming soon
            </span>
          </div>

          <p className="mt-2 text-sm text-slate-600">
            Conversation design · Information architecture · Guardrails
          </p>

          <p className="mt-4 text-slate-700">
            A lightweight chatbot that helps visitors explore my experience quickly—without
            hiding the resume or forcing anyone into a “chat with my AI clone” situation.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Planned: intent-based routing (roles, skills, projects), short answers with links to source sections,
            and an “export summary” option.
          </p>
        </div>

        {/* Coming soon: AI workflow */}
        <div className="card p-8 bg-[color:var(--paper)]/70">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-serif text-2xl tracking-tight text-[color:var(--ink)]">
              AI-assisted editorial workflow system
            </h2>
            <span className="rounded-full border border-[color:var(--line)] bg-[color:var(--mint)] px-3 py-1 text-xs text-[color:var(--ink-2)]">
              Coming soon
            </span>
          </div>

          <p className="mt-2 text-sm text-slate-600">
            Content ops · Workflow design · QA + standards
          </p>

          <p className="mt-4 text-slate-700">
            A set of repeatable frameworks and checklists that make high-volume content easier to plan,
            edit, and ship—without sacrificing quality or voice.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Planned: templates, decision logs, quality gates, and examples of AI used responsibly in the workflow.
          </p>
        </div>
      </div>
      <section className="mt-16 reveal-up reveal-delay-2">
  <div className="card p-6">
    <p className="text-sm text-slate-700">
      Want something specific? Email me at{" "}
      <a
        className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
        href="mailto:saradjoyce@gmail.com"
      >
        saradjoyce@gmail.com
      </a>
      .
    </p>
  </div>
</section>

    </main>
  );
}
