import SiteHeader from "@/components/SiteHeader";

export default function VideoPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <SiteHeader />

      <h1 className="font-serif text-4xl text-[color:var(--ink)]">
        Video & Creative Strategy
      </h1>

      <p className="mt-2 text-sm text-slate-600">
        Creative direction · Project leadership · Production oversight
      </p>

      <p className="mt-6 text-slate-700 leading-relaxed">
        Selected video projects where I led production from concept through delivery—assigning teams, guiding creative development, reviewing scripts and edits, and ensuring high-quality final output aligned with client goals.
      </p>

      <div className="mt-10 space-y-12">

        {/* Devon Energy */}
        <div>
          <h2 className="font-serif text-xl text-[color:var(--ink)]">
            Devon Energy: Culture of Achievement
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Internal communications · Brand storytelling · Creative direction · Production leadership
          </p>

          <p className="mt-3 text-slate-700">
            Internal video developed to communicate Devon Energy’s work in water conservation, translating complex initiatives into a clear, engaging narrative for employees.
          </p>

          <a
            href="https://vimeo.com/1181778727?fl=tl&fe=ec"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-[color:var(--accent)] hover:underline"
          >
            Watch on Vimeo →
          </a>
        </div>

        {/* Cage App */}
        <div>
          <h2 className="font-serif text-xl text-[color:var(--ink)]">
            Cage App Explainer
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Product explainer · Creative direction · Production leadership
          </p>

          <p className="mt-3 text-slate-700">
            Sales enablement video designed to clearly communicate the value of a media collaboration and workflow platform to creative teams and agencies.
          </p>

          <a
            href="https://vimeo.com/1181778708"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-[color:var(--accent)] hover:underline"
          >
            Watch on Vimeo →
          </a>
        </div>

        {/* OU Medicine */}
        <div>
          <h2 className="font-serif text-xl text-[color:var(--ink)]">
            OU Medicine: Alive & Well Campaign (:30 TV)
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Campaign video · Broadcast · Creative direction · Production leadership
          </p>

          <p className="mt-3 text-slate-700">
            :30 television spot developed as part of a broader healthcare campaign, supporting brand positioning and audience engagement across broadcast channels.
          </p>

          <a
            href="https://vimeo.com/1181778759"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-[color:var(--accent)] hover:underline"
          >
            Watch on Vimeo →
          </a>
        </div>

        {/* RibCrib */}
        <div>
          <h2 className="font-serif text-xl text-[color:var(--ink)]">
            RibCrib :30 TV Commercial
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Campaign video · Broadcast · Creative direction · Production leadership
          </p>

          <p className="mt-3 text-slate-700">
            Broadcast commercial supporting brand awareness and marketing initiatives, developed in collaboration with creative, production, and client teams.
          </p>

          <a
            href="https://vimeo.com/1181778768"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-[color:var(--accent)] hover:underline"
          >
            Watch on Vimeo →
          </a>
        </div>

        {/* OKC Thunder */}
        <div>
          <h2 className="font-serif text-xl text-[color:var(--ink)]">
            OKC Thunder / Fox Sports :30 TV Commercial
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Campaign video · Broadcast · Creative direction · Production leadership
          </p>

          <p className="mt-3 text-slate-700">
            Broadcast spot created in partnership with Fox Sports, supporting sports media promotion and audience engagement.
          </p>

          <a
            href="https://vimeo.com/1181778788"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-[color:var(--accent)] hover:underline"
          >
            Watch on Vimeo →
          </a>
        </div>

      </div>
    </main>
  );
}