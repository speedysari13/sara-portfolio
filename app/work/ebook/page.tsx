import SiteHeader from "@/components/SiteHeader";

export default function EbookPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <SiteHeader />

      <h1 className="font-serif text-4xl text-[color:var(--ink)]">
        DentistryIQ Ergonomics E-book
      </h1>

      <p className="mt-2 text-sm text-slate-600">
        Gated editorial e-book · Editorial direction, writing, and production leadership
      </p>

      <p className="mt-6 text-slate-700 leading-relaxed">
        Gated digital feature designed to grow audience engagement and drive email acquisition.
      </p>

      <div className="mt-8">
        <h2 className="text-sm font-medium uppercase tracking-wide text-slate-500">
          What I contributed
        </h2>

        <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
          <li>Identified high-value topics based on audience interest and performance signals</li>
          <li>Wrote headline and introductory copy to establish a clear hook and framing</li>
          <li>Directed SME contributions and shaped content for clarity, flow, and usefulness</li>
          <li>Partnered on design and production to ensure a cohesive, high-quality final asset</li>
        </ul>
      </div>

      <div className="mt-10">
        <a
          href="/samples/DIQ-ebook.pdf"
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