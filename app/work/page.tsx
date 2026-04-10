import SiteHeader from "@/components/SiteHeader";

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <SiteHeader active="work" />

      <header className="reveal-up">
        <p className="text-sm tracking-wide text-slate-600">
          Content strategy • Editorial leadership • Creative operations
        </p>

        <h1 className="mt-2 font-serif text-5xl leading-[1.06] tracking-tight text-[color:var(--ink)]">
          Work
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700">
          Selected work spanning content strategy, editorial direction, creative operations, and conversation design. Some pieces are fully mine; others reflect my role in shaping, directing, and improving the final result.
        </p>
      </header>

      <div className="mt-12 grid gap-4 reveal-up reveal-delay-1">
        {/* Conversation Design */}
        <div className="mt-12">
          <h2 className="font-serif text-3xl text-[color:var(--ink)]">
            Conversation Design & Systems Thinking
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Selected work focused on designing structured interactions, decision flows, and systems that help users navigate complex tasks.
          </p>
        </div>

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

        <div className="card card-hover p-8">
          <h2 className="font-serif text-2xl tracking-tight text-[color:var(--ink)]">
            Designing for recovery: IVR intent routing and fallback flows
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Conversation design · IVR flows · Technical documentation
          </p>

          <p className="mt-4 text-slate-700">
            Two annotated sample flows demonstrating NLU-based intent routing, confidence
            thresholds, graceful fallback handling, and escalation logic for a healthcare
            member support IVR.
          </p>

          <a
            href="/work/ivr-flow-design"
            className="focus-ring mt-5 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--accent)] underline decoration-transparent underline-offset-4 transition hover:decoration-[color:var(--accent)]"
          >
            View flow diagrams <span className="opacity-70">→</span>
          </a>
        </div>

        {/* Editorial & Content Strategy */}
        <div className="mt-12">
          <h2 className="font-serif text-3xl text-[color:var(--ink)]">
            Editorial & Content Strategy
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Selected work where I’ve written, edited, directed, or shaped content—focusing on clarity, usefulness, and what’s actually worth publishing.
          </p>
        </div>

        <div className="card card-hover p-8 mt-6">
          <h3 className="font-serif text-2xl text-[color:var(--ink)]">
            The Bottom Line Newsletter
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Newsletter · Content strategy · Editorial judgment
          </p>

          <p className="mt-4 text-slate-700">
            Twice-weekly newsletter for <em>Dental Economics</em>, focused on surfacing high-value, practical content for dental professionals.
          </p>

          <a
            href="/work/tbl"
            className="mt-5 inline-block text-[color:var(--accent)] hover:underline"
          >
            View samples →
          </a>
        </div>

        <div className="card card-hover p-8 mt-4">
          <h3 className="font-serif text-2xl text-[color:var(--ink)]">
            DentistryIQ Ergonomics E-book
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Gated editorial e-book · Editorial direction · Writing · Production leadership
          </p>

          <p className="mt-4 text-slate-700">
            Gated digital feature designed to grow audience engagement and drive email acquisition.
          </p>

          <a
            href="/work/ebook"
            className="mt-5 inline-block text-[color:var(--accent)] hover:underline"
          >
            View sample →
          </a>
        </div>

        <div className="card card-hover p-8 mt-4">
          <h3 className="font-serif text-2xl text-[color:var(--ink)]">
            Hogan Assessments Corporate Brochure
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Print and digital marketing brochure · Editorial review · Messaging refinement · QA
          </p>

          <p className="mt-4 text-slate-700">
            Corporate brochure designed to introduce Hogan Assessments and communicate core offerings to prospective clients.
          </p>

          <a
            href="/work/brochure"
            className="mt-5 inline-block text-[color:var(--accent)] hover:underline"
          >
            View sample →
          </a>
        </div>

        <div className="card card-hover p-8 mt-4">
          <h3 className="font-serif text-2xl text-[color:var(--ink)]">
            Dental Economics & RDH Magazine Covers
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Magazine cover headlines and creative direction
          </p>

          <p className="mt-4 text-slate-700">
            Led messaging and contributed to creative direction for cover packages across two national dental publications.
          </p>

          <a
            href="/work/covers"
            className="mt-5 inline-block text-[color:var(--accent)] hover:underline"
          >
            View samples →
          </a>
        </div>

        {/* Video & Creative */}
        <div className="mt-12">
          <h2 className="font-serif text-3xl text-[color:var(--ink)]">
            Video & Creative Strategy
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Selected work leading creative production across video projects, from concept through delivery.
          </p>
        </div>

         <div className="card card-hover p-8 mt-6">
  <h3 className="font-serif text-2xl text-[color:var(--ink)]">
    Video production: Creative direction & project leadership
  </h3>

  <p className="mt-2 text-sm text-slate-600">
    Creative direction · Project management · Production oversight
  </p>

  <p className="mt-4 text-slate-700">
    Led creative production across a range of video projects, managing cross-functional teams and ensuring alignment from concept through final delivery.
  </p>

  <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
    <li>Assigned creative teams and coordinated project timelines</li>
    <li>Reviewed scripts, storyboards, and rough edits to guide direction</li>
    <li>Partnered with stakeholders and clients to align on creative approach</li>
    <li>Oversaw QA and final delivery to ensure high-quality output</li>
  </ul>

  <a
    href="/work/video"
    className="mt-5 inline-block text-[color:var(--accent)] hover:underline"
  >
    View selected work →
  </a>
</div>


        {/* AI Enablement / tutorials */}
        <div className="card p-8 card-hover">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-serif text-2xl text-[color:var(--ink)]">
              AI enablement: Public tutorials + tips
            </h2>
            <span className="rounded-full bg-[color:var(--mint)] px-3 py-1 text-xs text-[color:var(--ink-2)]">
              New
            </span>
          </div>

          <p className="mt-2 text-sm text-slate-600">
            AI enablement · Practical workflows · Creator-to-teams translation
          </p>

          <p className="mt-4 text-slate-700">
            Short, real-world AI tips designed for busy professionals—focused on prompt patterns,
            decision support, and making AI more useful, less scary.
          </p>

          <a
            href="/ai-enablement"
            className="mt-4 inline-block text-[color:var(--accent)] hover:underline"
          >
            View tutorials →
          </a>
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