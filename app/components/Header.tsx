"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { FaHome, FaBook, FaUsers, FaHeartbeat, FaLaptop, FaNewspaper } from "react-icons/fa";

const navIcons: Record<string, React.ReactNode> = {
  "/": <FaHome className="h-3.5 w-3.5" />,
  "/childrens-books": <FaBook className="h-3.5 w-3.5" />,
  "/parenting-books": <FaUsers className="h-3.5 w-3.5" />,
  "/medical-books": <FaHeartbeat className="h-3.5 w-3.5" />,
  "https://hernandoabella.com": <FaLaptop className="h-3.5 w-3.5" />,
  "/blog": <FaNewspaper className="h-3.5 w-3.5" />,
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/childrens-books", label: "Children's Books" },
  { href: "/parenting-books", label: "Parenting Books" },
  { href: "/medical-books", label: "Medical Books" },
  {
    href: "https://hernandoabella.com",
    label: "Programming Books",
    external: true,
  },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <Link href="/" className="flex items-center gap-3 text-slate-900">
          <Image
            src="/logo.png"
            alt="PRAXMED Publishing logo"
            width={72}
            height={72}
            className="h-10 w-auto object-contain md:h-20 drop-shadow-none"
          />
        </Link>

        <button
          className="flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <nav className="hidden items-stretch self-stretch md:flex">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center border border-slate-200 px-4 text-sm font-medium text-slate-700 transition hover:border-[#0B8288] hover:text-[#0B8288]"
                style={{ clipPath: "polygon(0% 0%, 100% 0%, 92% 100%, 8% 100%)" }}
              >
                <span className="flex items-center gap-1.5">{navIcons[item.href]} {item.label}</span>
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center border px-4 text-sm font-medium transition ${
                  isActive(item.href)
                    ? "border-[#0B8288] bg-[#0B8288] text-white"
                    : "border-slate-200 text-slate-700 hover:border-[#0B8288] hover:text-[#0B8288]"
                }`}
                style={{ clipPath: "polygon(0% 0%, 100% 0%, 92% 100%, 8% 100%)" }}
              >
                <span className="flex items-center gap-1.5">{navIcons[item.href]} {item.label}</span>
              </Link>
            )
          )}
        </nav>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  <span className="flex items-center gap-2">{navIcons[item.href]} {item.label}</span>
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive(item.href)
                      ? "bg-[#0B8288]/10 text-[#0B8288] font-semibold"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span className="flex items-center gap-2">{navIcons[item.href]} {item.label}</span>
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
