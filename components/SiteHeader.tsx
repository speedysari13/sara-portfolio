import Link from "next/link";

type Props = {
  active?: "home" | "work" | "resume";
};

export default function SiteHeader({ active }: Props) {
  return (
    <header className="mx-auto max-w-6xl px-6 pt-10">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl text-[#152438] hover:opacity-90 transition"
        >
          Sara Joyce
        </Link>
      </div>
    </header>
  );
}