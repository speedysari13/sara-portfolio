import SiteHeader from "@/components/SiteHeader";

export default function CoversPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <SiteHeader />

      <h1 className="font-serif text-4xl text-[color:var(--ink)]">
        Dental Economics & RDH magazine covers
      </h1>

      <p className="mt-2 text-sm text-slate-600">
        Copywriting · Brand stewardship · Creative direction
      </p>

      <p className="mt-6 max-w-2xl text-slate-700 leading-relaxed">
        Led messaging and contributed to creative direction for cover packages across two national dental publications, balancing clarity, specificity, and visual impact.
      </p>

      <div className="mt-8">
        <h2 className="text-sm font-medium uppercase tracking-wide text-slate-500">
          What I contributed
        </h2>

        <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
          <li>Wrote cover headlines designed to resonate with target audiences and drive engagement</li>
          <li>Collaborated with editors-in-chief and art directors to develop strong, audience-relevant concepts</li>
          <li>Selected and prioritized which stories to feature on the cover based on audience interest and editorial value</li>
        </ul>
      </div>

      {/* Cover grid */}
      <div className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Selected covers
        </h2>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <img src="/samples/DE_Sept22.png" className="rounded-lg shadow" />
          <img src="/samples/DE_Sept23.png" className="rounded-lg shadow" />
          <img src="/samples/DE_Feb24.png" className="rounded-lg shadow" />
          <img src="/samples/DE_Apr24.png" className="rounded-lg shadow" />
          <img src="/samples/RDH_Dec22.png" className="rounded-lg shadow" />
          <img src="/samples/RDH_Oct23.png" className="rounded-lg shadow" />
          <img src="/samples/RDH_Nov23.png" className="rounded-lg shadow" />
          <img src="/samples/RDH_Mar26.png" className="rounded-lg shadow" />
        </div>
      </div>
    </main>
  );
}