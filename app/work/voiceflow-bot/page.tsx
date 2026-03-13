"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import SiteHeader from "@/components/SiteHeader";
import VoiceflowWidget from "@/components/VoiceflowWidget";
export default function VoiceflowCaseStudy() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <SiteHeader active="work" />

<a
  href="/work"
  className="reveal-up mt-10 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--accent)] underline decoration-transparent underline-offset-4 transition hover:decoration-[color:var(--accent)]"
>
  <span aria-hidden>←</span> Back to work
</a>

      <header className="mt-6">
        <p className="text-sm text-slate-600">
          Case study • Conversation design • Content ops tooling
        </p>

        <h1 className="mt-3 font-serif text-4xl leading-tight text-[color:var(--ink)]">
          Helping small content teams decide what to post next with a Voiceflow AI assistant
        </h1>

        <p className="mt-5 text-lg text-slate-700">
          Small creative and content teams rarely struggle with a lack of ideas—they struggle
          with deciding what to prioritize and where it should live.
        </p>
      </header>

      {/* Summary card */}
<section className="mt-10 reveal-up reveal-delay-1">
  <div className="card p-8">
    <div className="grid gap-6 sm:grid-cols-2">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">My role</p>
        <p className="mt-2 text-slate-700">
          Conversation design, prompt design, Voiceflow prototyping
        </p>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Audience</p>
        <p className="mt-2 text-slate-700">
          Small creative/content teams (understaffed, multi-channel)
        </p>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Tools</p>
        <p className="mt-2 text-slate-700">
          Voiceflow, LLM prompting, structured evaluation prompts
        </p>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Outcome</p>
        <p className="mt-2 text-slate-700">
          Reduced “what do we post?” decision friction by turning messy idea dumps into a ranked plan.
        </p>
      </div>
    </div>

    <div className="mt-8 flex flex-wrap gap-3">
      <a
        href="#demo"
        className="focus-ring group inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-2 text-sm font-medium text-white shadow transition-transform hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
      >
        Try the bot (demo)
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </a>

      <a
        href="#screens"
        className="focus-ring group inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white/70 px-5 py-2 text-sm font-medium text-[color:var(--ink)] shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-white active:translate-y-0"
      >
        See screenshots
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </a>
    </div>
  </div>
</section>

      {/* The problem */}
      <section className="mt-14 reveal-up">
        <h2 className="font-serif text-2xl tracking-tight text-[color:var(--ink)]">The problem</h2>

        <p className="mt-4 text-slate-700">
          Most small content teams don’t have a content shortage. They have a prioritization problem:
          too many ideas, too many channels, not enough time, and no clean way to make decisions quickly.
        </p>

        <ul className="mt-5 list-disc space-y-2 pl-6 text-slate-700">
          <li>Backlogs of drafts and half-finished ideas</li>
          <li>Limited bandwidth for strategy and planning</li>
          <li>Multiple channels with different audience expectations</li>
          <li>Decision-making becomes the bottleneck (not creativity)</li>
        </ul>
      </section>

      {/* What I built */}
      <section className="mt-14 reveal-up">
        <h2 className="font-serif text-2xl tracking-tight text-[color:var(--ink)]">What I built</h2>

        <p className="mt-4 text-slate-700">
          The chatbot guides users through a structured decision flow—basically a lightweight strategy session
          in conversational form.
        </p>

        {/* Key decisions */}
<div className="mt-14">
  <h2 className="font-serif text-2xl tracking-tight text-[color:var(--ink)]">Key design decisions</h2>

  <div className="mt-6 space-y-6">
    <div>
      <h3 className="font-medium text-[color:var(--ink)]">
        1. Lower the friction to start
      </h3>
      <p className="mt-2 text-slate-700">
        Users are explicitly told that messy input is welcome. This reduces hesitation,
        encourages brainstorming, and mirrors real creative workflows where ideas rarely
        start fully formed.
      </p>
    </div>

    <div>
      <h3 className="font-medium text-[color:var(--ink)]">
        2. Gather context before generating output
      </h3>
      <p className="mt-2 text-slate-700">
        The bot asks about goals, audience, channels, and tone before evaluating ideas.
        This structured context dramatically improves the relevance of the final output
        and prevents generic recommendations.
      </p>
    </div>

    <div>
      <h3 className="font-medium text-[color:var(--ink)]">
        3. Position AI as a collaborator, not a replacement
      </h3>
      <p className="mt-2 text-slate-700">
        The bot focuses on analysis and prioritization—tasks many creative teams find
        draining—while leaving ideation and execution to humans. This framing makes the
        tool feel supportive rather than threatening.
      </p>
    </div>
  </div>
</div>

        <ol className="mt-5 list-decimal space-y-2 pl-6 text-slate-700">
          <li>Clarifies the team’s primary goal</li>
          <li>Defines the target audience</li>
          <li>Identifies available content channels</li>
          <li>Establishes tone and positioning</li>
          <li>Collects a “messy is fine” list of 5–10 content ideas</li>
          <li>Evaluates and compares each idea</li>
          <li>Recommends what to publish next</li>
        </ol>
      </section>

            {/* Process */}
      <section className="mt-14 reveal-up reveal-delay-2">
        <h2 className="font-serif text-2xl tracking-tight text-[color:var(--ink)]">
          Process
        </h2>
        <p className="mt-4 max-w-3xl text-slate-700">
          The assistant works best when it behaves like a structured planning partner: gather context,
          accept messy input, then evaluate ideas against the team’s real constraints.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "1) Intake",
              body:
                "Collect goal, audience, channels, and tone before touching the idea backlog. Context first, always.",
            },
            {
              title: "2) Evaluation",
              body:
                "Score ideas against relevance, effort, and fit. Compare options instead of generating endless new ones.",
            },
            {
              title: "3) Output",
              body:
                "Return a ranked recommendation plus a simple next-step plan so the team can actually ship.",
            },
          ].map((item) => (
            <div key={item.title} className="card card-hover p-6">
              <h3 className="text-base font-semibold tracking-tight text-[color:var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Flow diagram */}
      <section id="screens" className="mt-14 reveal-up">
        <h2 className="font-serif text-2xl tracking-tight text-[color:var(--ink)]">Conversation flow</h2>

        <p className="mt-4 text-slate-700">
          The diagram below documents the full conversation flow, including timeout handling,
          platform validation, fallback logic, a confirmation step, and edit routing —
          designed to guide users through a structured content planning session.
        </p>

        <div className="mt-6 card p-4">
          <a href="/ai-content-editor-flow.pdf" target="_blank" rel="noopener noreferrer" className="w-full block">
            <img
              src="/ai-content-editor-flow.png"
              alt="AI Content Editor conversation flow diagram"
              className="w-full max-w-sm mx-auto rounded-xl border border-[color:var(--line)] cursor-zoom-in hover:opacity-90 transition"
            />
            <p className="mt-2 text-center text-xs text-slate-500">Click to view full size</p>
          </a>
        </div>
      </section>

{/* Behind the scenes */}
      <section className="mt-14 reveal-up">
        <h2 className="font-serif text-2xl tracking-tight text-[color:var(--ink)]">Behind the scenes</h2>

        <p className="mt-4 text-slate-700">
          The Voiceflow canvas combines structured conversation logic with LLM-powered evaluation — 
          and knowing where to use each was the core design challenge.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="card p-6">
            <h3 className="font-medium text-[color:var(--ink)]">Structured logic (designed by me)</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              The intake flow — questions, capture blocks, platform validation, timeout handling, 
              retry loops, and the confirmation step — is all hand-built logic. I used a JavaScript 
              array to validate platform inputs rather than relying on the LLM to interpret them, 
              which keeps that part of the flow predictable and testable.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="font-medium text-[color:var(--ink)]">LLM behavior (prompt-governed)</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              The actual idea evaluation and ranking at the end of the flow is LLM-powered, 
              governed by a structured prompt that uses the captured variables as context — 
              goal, platform, audience, and tone all feed directly into the evaluation.
            </p>
          </div>
        </div>

        <div className="mt-6 card p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500 mb-3">Voiceflow canvas</p>
          <a href="/voiceflow-canvas.png" target="_blank" rel="noopener noreferrer" className="w-full block">
            <img
              src="/voiceflow-canvas.png"
              alt="Voiceflow canvas showing structured logic nodes and live bot preview"
              className="w-full max-w-sm mx-auto rounded-xl border border-[color:var(--line)] cursor-zoom-in hover:opacity-90 transition"
            />
            <p className="mt-2 text-center text-xs text-slate-500">Click to view full size</p>
          </a>
        </div>
      </section>

      {/* Learnings */}
      <section className="mt-14 reveal-up">
        <h2 className="font-serif text-2xl tracking-tight text-[color:var(--ink)]">What I learned</h2>

        <p className="mt-4 text-slate-700">
          This project taught me to think about AI and creativity differently. Creative teams aren't short on ideas — they're short on time, clarity, and decision support. But that was just the beginning.
        </p>

        <p className="mt-4 text-slate-700">
          Building the conversation flow forced me to think beyond the happy path. Designing for timeouts, retries, fallback prompts, and graceful defaults taught me that good conversation design is mostly about what happens when things go wrong. The moments where a user hesitates, misunderstands, or gives unexpected input — those are where the real design work lives.
        </p>

        <p className="mt-4 text-slate-700">
          I also learned the importance of knowing when not to use an LLM. The intake flow — validation logic, retry loops, confirmation steps — is all structured, hand-built logic. Keeping that predictable and testable made the LLM-powered evaluation at the end more trustworthy, not less. The two approaches work better together when you're deliberate about the boundary between them.
        </p>

         <p className="mt-4 text-slate-700">
          Most importantly: I learned by doing. Voiceflow, Lucidchart, flow documentation, technical annotation — none of this was in my toolkit six months ago. This project is proof that the right problem will teach you what you need to know.
        </p>
      </section>

      {/* Demo */}
      <section id="screens" className="mt-14 reveal-up">
        <h2 className="font-serif text-2xl tracking-tight text-[color:var(--ink)]">Try the bot</h2>

      <div className="mt-6 card p-6">
  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
    Demo
  </p>

  <div
  id="vf-embed"
  className="mt-4 overflow-hidden rounded-2xl border border-[color:var(--line)] bg-white/70"
>
  <div className="p-4 text-sm text-slate-600">Loading the demo…</div>
</div>

</div>

      </section>

            {/* Bottom nav */}
      <section className="mt-16 reveal-up reveal-delay-3">
        <div className="card p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <a
            href="/work"
            className="focus-ring inline-flex items-center gap-2 text-sm font-medium text-[color:var(--accent)] underline decoration-transparent underline-offset-4 transition hover:decoration-[color:var(--accent)]"
          >
            <span aria-hidden>←</span> Back to work
          </a>

          <span className="text-sm text-slate-600">
            Next: Interactive resume bot <span className="text-slate-400">(coming soon)</span>
          </span>
        </div>
      </section>
      <VoiceflowWidget />
    </main>
  );
}
