import SiteHeader from "@/components/SiteHeader";

export default function TBLPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <SiteHeader />

      <h1 className="font-serif text-4xl text-[color:var(--ink)]">
        The Bottom Line Newsletter
      </h1>

      <p className="mt-2 text-sm text-slate-600">
        Newsletter · Content strategy, editorial judgment, positioning
      </p>

      <p className="mt-6 text-slate-700 leading-relaxed">
        Twice-weekly newsletter for <em>Dental Economics</em>, focused on surfacing high-value, practical content for dental professionals.
      </p>

      <div className="mt-8">
        <h2 className="text-sm font-medium uppercase tracking-wide text-slate-500">
          What I contributed
        </h2>

        <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
          <li>Selected and prioritized articles based on audience value and engagement patterns</li>
          <li>Wrote subject lines and editorial framing to improve clarity and drive opens</li>
          <li>Established a consistent standard for what was worth including vs excluded</li>
          <li>Used performance signals to refine content selection and positioning over time</li>
        </ul>

        <p className="mt-6 text-slate-700">
          Focused on high-signal, actionable content rather than volume or generic thought leadership.
        </p>
      </div>

      <div className="mt-10 space-y-3">
        <a
          href="/samples/TBL_Mar4.pdf"
          target="_blank"
          rel="noreferrer"
          className="block text-[color:var(--accent)] hover:underline"
        >
          View sample issue (March 4) →
        </a>

        <a
          href="/samples/TBL_Mar22.pdf"
          target="_blank"
          rel="noreferrer"
          className="block text-[color:var(--accent)] hover:underline"
        >
          View sample issue (March 22) →
        </a>
      </div>
    </main>
  );
}