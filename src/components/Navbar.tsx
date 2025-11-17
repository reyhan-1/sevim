// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/resimler", label: "Resimler" },
    { href: "/sergiler", label: "Sergiler" },
    { href: "/hakkinda", label: "Hakkında" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/60 bg-white/60 backdrop-blur-md supports-[backdrop-filter]:bg-white/50">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-goldman text-base tracking-tight text-neutral-900 transition hover:opacity-80 md:text-lg"
        >
          Sevim Güleç
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-6 font-urbanist text-sm md:text-base">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`transition-all ${
                    isActive
                      ? "text-neutral-900 font-medium"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
