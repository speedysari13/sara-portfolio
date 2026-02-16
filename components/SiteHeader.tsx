import Link from "next/link";

type Props = {
  active?: "home" | "work" | "resume";
};

export default function SiteHeader({ active }: Props) {
  const linkBase =
    "text-sm font-medium text-slate-700 hover:text-[#152438] transition";
  const linkActive = "text-[#152438] underline underline-offset-8";

  return (
    <header className="mx-auto max-w-6xl px-6 pt-10">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl text-[#152438] hover:opacity-90 transition"
        >
          Sara Joyce
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/work"
            className={`${linkBase} ${active === "work" ? linkActive : ""}`}
          >
            Work
          </Link>
          <Link
            href="/resume"
            className={`${linkBase} ${active === "resume" ? linkActive : ""}`}
          >
            Resume
          </Link>
          <a
            href="https://www.linkedin.com/in/saradjoyce/"
            target="_blank"
            rel="noreferrer"
            className={`${linkBase} hover:underline underline-offset-8`}
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}
