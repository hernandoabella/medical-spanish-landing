"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/for-kids", label: "For Kids" },
  { href: "/parenting-books", label: "Parenting Books" },
  {
    href: "https://hernandoabella.com",
    label: "Programming Books",
    external: true,
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-slate-900">
          <Image
            src="/logo.png"
            alt="PRAXMED Publishing logo"
            width={72}
            height={72}
            className="h-16 w-auto object-contain md:h-20"
          />
        </Link>

        <nav className="flex flex-wrap items-center justify-end gap-2 md:gap-3">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#0B8288] hover:text-[#0B8288]"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  pathname === item.href
                    ? "border-[#0B8288] bg-[#0B8288] text-white"
                    : "border-slate-200 text-slate-700 hover:border-[#0B8288] hover:text-[#0B8288]"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
