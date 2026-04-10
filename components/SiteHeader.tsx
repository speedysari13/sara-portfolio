import Link from "next/link";

type Props = {
  active?: "home" | "work" | "resume";
};

export default function SiteHeader({ active }: Props) {
  return (
    <header className="mx-auto max-w-6xl px-6 pt-10">
      <div className="flex items-center justify-between">
        <Link href="/" className="block leading-tight hover:opacity-90 transition">
          <span className="block font-serif text-xl text-[#152438]">
            Sara Joyce
          </span>
          <span className="block text-sm text-slate-600">
            Tulsa, OK • Remote
          </span>
        </Link>
      </div>
    </header>
  );
}