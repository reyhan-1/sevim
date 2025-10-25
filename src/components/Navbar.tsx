// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="font-goldman text-base md:text-lg">
          Sevim Güleç
        </Link>

        <ul className="flex items-center gap-6 text-sm md:text-base font-urbanist">
          <li><Link href="/resimler" className="hover:text-gray-900 text-gray-700">Resimler</Link></li>
          <li><Link href="/sergiler" className="hover:text-gray-900 text-gray-700">Sergiler</Link></li>
          <li><Link href="/hakkinda" className="hover:text-gray-900 text-gray-700">Hakkında</Link></li>
          <li><Link href="/iletisim" className="hover:text-gray-900 text-gray-700">İletişim</Link></li>
        </ul>
      </nav>
    </header>
  );
}
