import SiteHeader from "@/components/SiteHeader";

export default function EbookPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <SiteHeader />

      <h1 className="font-serif text-4xl text-[color:var(--ink)]">
        Hogan Assessments safety e-book
      </h1>

      <p className="mt-2 text-sm text-slate-600">
        Print & digital e-book · Copyriting · Thought leadership
      </p>

      <p className="mt-6 text-slate-700 leading-relaxed">
        A research-driven ebook promoting a report that translates complex safety and personality data into a clear, compelling story—connecting human behavior to real-world risk, outcomes, and ROI.
      </p>

      <div className="mt-8">
        <h2 className="text-sm font-medium uppercase tracking-wide text-slate-500">
          What I contributed
        </h2>

        <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
          <li>Led copy development from early inputs and existing materials, shaping the narrative and messaging</li>
          <li>Partnered closely with design and production to ensure a cohesive, polished final asset</li>
        </ul>
      </div>

      <div className="mt-10">
        <a
          href="/samples/hogan.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-[color:var(--accent)] hover:underline"
        >
          View PDF →
        </a>
      </div>
    </main>
  );
}