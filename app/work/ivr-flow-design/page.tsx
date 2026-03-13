import SiteHeader from "@/components/SiteHeader";

export default function IVRFlowDesign() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <SiteHeader active="work" />

      
        <a href="/work"
        className="reveal-up mt-10 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--accent)] underline decoration-transparent underline-offset-4 transition hover:decoration-[color:var(--accent)]"
      >
        <span aria-hidden>←</span> Back to work
      </a>

      <header className="mt-6">
        <p className="text-sm text-slate-600">
          Sample work • Conversation design • IVR &amp; chat
        </p>

        <h1 className="mt-3 font-serif text-4xl leading-tight text-[color:var(--ink)]">
          Designing for recovery: IVR intent routing and fallback flows
        </h1>

        <p className="mt-5 text-lg text-slate-700">
          These sample flows demonstrate conversation design principles for healthcare IVR systems,
          including NLU-based intent routing, confidence thresholds, graceful fallback handling,
          and escalation to a live agent.
        </p>
      </header>

      {/* Summary card */}
      <section className="mt-10 reveal-up reveal-delay-1">
        <div className="card p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">My role</p>
              <p className="mt-2 text-slate-700">
                Conversation design, flow documentation, technical annotation
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Context</p>
              <p className="mt-2 text-slate-700">
                Illustrative sample flows created to demonstrate IVR conversation design best practices
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Tools</p>
              <p className="mt-2 text-slate-700">
                Lucidchart, conversation design principles, NLU intent modeling
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Focus areas</p>
              <p className="mt-2 text-slate-700">
                Intent routing, confidence thresholds, fallback logic, graceful escalation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design approach */}
      <section className="mt-14 reveal-up">
        <h2 className="font-serif text-2xl tracking-tight text-[color:var(--ink)]">Design approach</h2>

        <p className="mt-4 text-slate-700">
          Good IVR design isn't just about the happy path — it's about what happens when things go wrong.
          These flows were designed with member experience at the center, prioritizing accuracy over speed
          and graceful recovery over silent failure.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Intent first",
              body: "Open-ended prompts capture natural language input, which is passed to an NLU model for intent classification rather than forcing menu-driven responses.",
            },
            {
              title: "Calibrated confidence",
              body: "A confidence threshold (suggested: 0.7) determines whether the system routes or asks for clarification — prioritizing accuracy over speed.",
            },
            {
              title: "Graceful recovery",
              body: "When the system can't understand a member, it re-prompts with concrete examples rather than failing silently or misrouting — with a maximum of 2 retries before warm transfer.",
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

      {/* Diagram 1 */}
      <section className="mt-14 reveal-up">
        <h2 className="font-serif text-2xl tracking-tight text-[color:var(--ink)]">
          Flow 1: Healthcare Member Support IVR — Intent Routing
        </h2>

        <p className="mt-4 text-slate-700">
          This flow demonstrates NLU-based intent routing for a healthcare member support IVR,
          including confidence threshold logic, clarification loops, and escalation handling.
          Annotations document the design rationale behind each decision.
        </p>

        <div className="mt-6 card p-4">
          <a href="/ivr-intent-routing-flow.pdf" target="_blank" rel="noopener noreferrer" className="w-full block">
            <img
              src="/ivr-intent-routing-flow.png"
              alt="Healthcare Member Support IVR Intent Routing Flow diagram"
              className="w-full max-w-sm mx-auto rounded-xl border border-[color:var(--line)] cursor-zoom-in hover:opacity-90 transition"
            />
            <p className="mt-2 text-center text-xs text-slate-500">Click to view full size</p>
          </a>
        </div>
      </section>

      {/* Diagram 2 */}
      <section className="mt-14 reveal-up">
        <h2 className="font-serif text-2xl tracking-tight text-[color:var(--ink)]">
          Flow 2: Conversational Recovery — Unrecognized User Input
        </h2>

        <p className="mt-4 text-slate-700">
          This companion flow demonstrates graceful recovery when NLU intent detection fails.
          It shows how to keep members engaged through structured fallback prompting
          rather than dropping the call or misrouting.
        </p>

        <div className="mt-6 card p-4">
          <a href="/conversational-recovery-flow.pdf" target="_blank" rel="noopener noreferrer" className="w-full block">
            <img
              src="/conversational-recovery-flow.png"
              alt="Conversational Recovery Flow diagram for unrecognized user input"
              className="w-full max-w-sm mx-auto rounded-xl border border-[color:var(--line)] cursor-zoom-in hover:opacity-90 transition"
            />
            <p className="mt-2 text-center text-xs text-slate-500">Click to view full size</p>
          </a>
        </div>
      </section>

      {/* Bottom nav */}
      <section className="mt-16 reveal-up reveal-delay-3">
        <div className="card p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          
            <a href="/work"
            className="focus-ring inline-flex items-center gap-2 text-sm font-medium text-[color:var(--accent)] underline decoration-transparent underline-offset-4 transition hover:decoration-[color:var(--accent)]"
          >
            <span aria-hidden>←</span> Back to work
          </a>
        </div>
      </section>
    </main>
  );
}
