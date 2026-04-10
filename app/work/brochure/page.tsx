import SiteHeader from "@/components/SiteHeader";

export default function BrochurePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <SiteHeader />

      <h1 className="font-serif text-4xl text-[color:var(--ink)]">
        Hogan Assessments Corporate Brochure
      </h1>

      <p className="mt-2 text-sm text-slate-600">
        Print and digital marketing brochure · Editorial review, messaging refinement, and QA
      </p>

      <p className="mt-6 text-slate-700 leading-relaxed">
        Corporate brochure designed to introduce Hogan Assessments and communicate core offerings to prospective clients.
      </p>

      <div className="mt-8">
        <h2 className="text-sm font-medium uppercase tracking-wide text-slate-500">
          What I contributed
        </h2>

        <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
          <li>Reviewed and refined all copy for clarity, tone, and consistency</li>
          <li>Ensured messaging aligned with brand voice and audience expectations</li>
          <li>Identified and corrected errors across both content and design elements</li>
          <li>Provided final QA to ensure a polished, accurate, and cohesive deliverable</li>
        </ul>
      </div>

      <div className="mt-10">
        <a
          href="/samples/Hogan_brochure.pdf"
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