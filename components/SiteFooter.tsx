export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[color:var(--line)] py-12">
      <div className="mx-auto max-w-4xl px-6 text-sm text-slate-600">

        <p className="text-[color:var(--ink)] font-medium">
          Let’s build something useful.
        </p>

        <div className="mt-4 flex flex-wrap gap-6">
          <a
            href="mailto:saradjoyce@gmail.com"
            className="hover:text-[color:var(--ink)] hover:underline"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/saradjoyce/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[color:var(--ink)] hover:underline"
          >
            LinkedIn
          </a>

          <a
            href="https://calendly.com/saradjoyce"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[color:var(--ink)] hover:underline"
          >
            Book a call
          </a>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Sara Joyce
        </p>
      </div>
    </footer>
  );
}
