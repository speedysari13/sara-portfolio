import SiteHeader from "@/components/SiteHeader";

import Image from "next/image";

function WorkThumb({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition duration-300 group-hover:scale-[1.02]"
      />
    </div>
  );
}

export default function WorkPage() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-6 pt-16">
        <SiteHeader active="work" />
      </div>

      <div className="bg-[#d8c7cf]">
        <header className="mx-auto max-w-5xl px-6 py-16">

          <h1 className="mt-0 font-serif text-5xl leading-[1.06] tracking-tight text-[color:var(--ink)]">
            Work
          </h1>

          <div className="mt-4 h-1 w-20 rounded-full bg-[color:var(--accent)]" />

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-800">
            Selected work spanning content strategy, editorial direction, creative
            operations, and conversation design. Some pieces are fully mine; others
            reflect my role in shaping, directing, and improving the final result.
          </p>

          <div className="bg-[#d8c7cf] border-b border-slate-200/60"></div>
        </header>
      </div>

      <main className="mx-auto max-w-5xl px-6 py-16">
                {/* Conversation Design */}
        <div className="mt-0">
          <h2 className="font-serif text-3xl text-[color:var(--ink)]">
            Conversation Design & Systems Thinking
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Selected work focused on designing structured interactions, decision
            flows, and systems that help users navigate complex tasks.
          </p>
        </div>

        <div className="card card-hover group mt-6 p-8">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_240px] md:items-start">
            <div>
              <h2 className="font-serif text-2xl tracking-tight text-[color:var(--ink)]">
                The Content Decider Voiceflow chatbot
              </h2>

              <div className="mt-3 flex flex-wrap gap-2">
                {["Conversation design", "Prompt design", "Prototyping"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-300/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-slate-700">
                A Voiceflow chatbot that guides small content teams through goals,
                audience, channels, and tone, then evaluates messy content ideas and
                recommends what to publish next.
              </p>

              <a
                href="/work/voiceflow-bot"
                className="focus-ring mt-5 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--accent)] underline decoration-transparent underline-offset-4 transition hover:decoration-[color:var(--accent)]"
              >
                Read case study <span className="opacity-70">→</span>
              </a>
            </div>

            <WorkThumb
              src="/thumbnails/voiceflow-bot-v2.png"
              alt="Screenshot of The Content Decider Voiceflow chatbot"
            />
          </div>
        </div>

        <div className="card card-hover group mt-4 p-8">
  <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_240px] md:items-start">
    <div>
      <h2 className="font-serif text-2xl tracking-tight text-[color:var(--ink)]">
        IVR intent routing and fallback flows
      </h2>

      <div className="mt-3 flex flex-wrap gap-2">
        {["Conversation design", "IVR flows", "Technical documentation"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-300/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-4 text-slate-700">
        Two annotated sample flows demonstrating NLU-based intent routing,
        confidence thresholds, graceful fallback handling, and escalation logic
        for a healthcare member support IVR.
      </p>

      <a
        href="/work/ivr-flow-design"
        className="focus-ring mt-5 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--accent)] underline decoration-transparent underline-offset-4 transition hover:decoration-[color:var(--accent)]"
      >
        View flow diagrams <span className="opacity-70">→</span>
      </a>
    </div>

    <WorkThumb
      src="/thumbnails/ivr-v2.png"
      alt="Screenshot of IVR intent routing and fallback flows"
    />
  </div>
</div>

        {/* Editorial & Content Strategy */}
        <div className="mt-12">
          <h2 className="font-serif text-3xl text-[color:var(--ink)]">
            Editorial & Content Strategy
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Selected work where I’ve written, edited, directed, or shaped
            content—focusing on clarity, usefulness, and what’s actually worth
            publishing.
          </p>
        </div>

        <div className="card card-hover group mt-6 p-8">
  <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_240px] md:items-start">
    <div>
      <h3 className="font-serif text-2xl text-[color:var(--ink)]">
        The Bottom Line newsletter
      </h3>

      <div className="mt-3 flex flex-wrap gap-2">
        {["Copywriting", "Content curation", "Editorial judgment"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-300/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-4 text-slate-700">
        Twice-weekly newsletter for <em>Dental Economics</em>, focused on
        surfacing high-value, practical content for dental professionals.
      </p>

      <a
        href="/work/tbl"
        className="mt-5 inline-block text-[color:var(--accent)] hover:underline"
      >
        View samples →
      </a>
    </div>

    <WorkThumb
      src="/thumbnails/tbl.png"
      alt="Screenshot of The Bottom Line newsletter"
    />
  </div>
</div>
        

        <div className="card card-hover group mt-6 p-8">
  <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_240px] md:items-start">
    <div>
      <h3 className="font-serif text-2xl text-[color:var(--ink)]">
        DentistryIQ ergonomics e-book
      </h3>

      <div className="mt-3 flex flex-wrap gap-2">
        {["Audience development", "Editorial direction", "Copywriting", "Production leadership"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-300/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-4 text-slate-700">
        Gated digital feature on the DentistryIQ website designed to grow audience engagement and drive email acquisition.
      </p>

      <a
        href="/work/ebook"
        className="mt-5 inline-block text-[color:var(--accent)] hover:underline"
      >
        View sample →
      </a>
    </div>

    <WorkThumb
      src="/thumbnails/diq.png"
      alt="Screenshot of DentistryIQ e-book"
    />
  </div>
</div>

        <div className="card card-hover group mt-4 p-8">
  <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_240px] md:items-start">
    <div>
      <h3 className="font-serif text-2xl text-[color:var(--ink)]">
        Hogan Assessments corporate brochure
      </h3>

      <div className="mt-3 flex flex-wrap gap-2">
        {["Marketing collateral", "Editorial review", "Messaging refinement", "QA"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-300/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-4 text-slate-700">
        Corporate brochure designed to introduce Hogan Assessments and
        communicate core offerings to prospective clients.
      </p>

      <a
        href="/work/brochure"
        className="mt-5 inline-block text-[color:var(--accent)] hover:underline"
      >
        View sample →
      </a>
    </div>

    <WorkThumb
      src="/thumbnails/brochure.png"
      alt="Screenshot of Hogan Assessments corporate brochure"
    />
  </div>
</div>

        <div className="card card-hover group mt-6 p-8">
  <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_240px] md:items-start">
    <div>
      <h3 className="font-serif text-2xl text-[color:var(--ink)]">
        Hogan Assessments safety e-book
      </h3>

      <div className="mt-3 flex flex-wrap gap-2">
        {["Copywriting", "Thought leadership", "QA"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-300/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-4 text-slate-700">
        A research-driven ebook promoting a report that translates complex safety and personality data into a clear, compelling story—connecting human behavior to real-world risk, outcomes, and ROI.
      </p>

      <a
        href="/work/hogan"
        className="mt-5 inline-block text-[color:var(--accent)] hover:underline"
      >
        View sample →
      </a>
    </div>

    <WorkThumb
      src="/thumbnails/safety.png"
      alt="Screenshot of the Hogan Assessments safety e-book"
    />
  </div>
</div>

        <div className="card card-hover group mt-6 p-8">
  <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_240px] md:items-start">
    <div>
      <h3 className="font-serif text-2xl text-[color:var(--ink)]">
        Dental Economics & RDH magazine covers
      </h3>

      <div className="mt-3 flex flex-wrap gap-2">
        {["Copywriting", "Creative direction", "Brand stewardship"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-300/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>

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

    <WorkThumb
      src="/thumbnails/cover.png"
      alt="Screenshot of a Dental Economics magazine cover"
    />
  </div>
</div>

        {/* Video & Creative */}
        <div className="mt-12">
          <h2 className="font-serif text-3xl text-[color:var(--ink)]">
            Video & Creative Strategy
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Selected work leading creative production across video projects, from
            concept through delivery.
          </p>
        </div>

        <div className="card card-hover group mt-6 p-8">
  <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_240px] md:items-start">
    <div>
      <h3 className="font-serif text-2xl text-[color:var(--ink)]">
        Video production: Creative direction & project leadership
      </h3>

      <div className="mt-3 flex flex-wrap gap-2">
        {["Project management", "Production oversight", "Client communication"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-300/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-4 text-slate-700">
        Led creative production across a range of video projects, managing
        cross-functional teams and ensuring alignment from concept through
        final delivery.
      </p>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
        <li>Assigned creative teams and coordinated project timelines</li>
        <li>
          Reviewed scripts, storyboards, and rough edits to guide direction
        </li>
        <li>
          Partnered with stakeholders and clients to align on creative
          approach
        </li>
        <li>
          Oversaw QA and final delivery to ensure high-quality output
        </li>
      </ul>

      <a
        href="/work/video"
        className="mt-5 inline-block text-[color:var(--accent)] hover:underline"
      >
        View selected work →
      </a>
    </div>

    <WorkThumb
      src="/thumbnails/video.png"
      alt="Screenshot of video production projects"
    />
  </div>
</div>

        {/* AI Enablement / tutorials */}
<div className="mt-12">
  <h2 className="font-serif text-3xl text-[color:var(--ink)]">
    AI enablement: Public tutorials + tips
  </h2>
</div>

<div className="card card-hover group mt-6 p-8">
  <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_240px] md:items-start">
    <div>
      <h3 className="font-serif text-2xl text-[color:var(--ink)]">
        AI enablement: Public tutorials + tips
      </h3>

      <div className="mt-3 flex flex-wrap gap-2">
        {["AI enablement", "Practical workflows", "Creator-to-teams translation"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-300/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-4 text-slate-700">
        Short, real-world AI tips designed for busy professionals—focused on
        prompt patterns, decision support, and making AI more useful, less scary.
      </p>

      <a
        href="/ai-enablement"
        className="mt-5 inline-block text-[color:var(--accent)] hover:underline"
      >
        View tutorials →
      </a>
    </div>

    <WorkThumb
      src="/thumbnails/ai.png"
      alt="Screenshot of an AI enablement tutorial"
    />
  </div>
</div>

        {/* Coming soon: AI workflow */}
        <div className="card mt-4 bg-[color:var(--paper)]/70 p-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-serif text-2xl tracking-tight text-[color:var(--ink)]">
              AI-assisted editorial workflow system
            </h2>
            <span className="rounded-full border border-[color:var(--line)] bg-[color:var(--mint)] px-3 py-1 text-xs text-[color:var(--ink-2)]">
              Coming soon
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {["Content ops", "Workflow design", "QA + standards"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-300/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-4 text-slate-700">
            A set of repeatable frameworks and checklists that make high-volume
            content easier to plan, edit, and ship—without sacrificing quality or
            voice.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Planned: templates, decision logs, quality gates, and examples of AI
            used responsibly in the workflow.
          </p>
        </div>

        <section className="reveal-up reveal-delay-2 mt-16">
          <div className="rounded-2xl bg-[#152438] p-6 text-white">
            <p className="text-sm text-white/90">
              Want something specific? Email me at{" "}
              <a
                className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
                href="mailto:saradjoyce@gmail.com"
              >
                saradjoyce@gmail.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </>
  );
}