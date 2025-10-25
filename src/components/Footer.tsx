'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 text-gray-700 font-urbanist px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Left Column – Site Links */}
        <nav className="flex flex-col justify-center space-y-2">
          <h2 className="font-goldman text-xl text-gray-900 mb-2">Menü</h2>
          <Link href="/hakkinda" className="hover:text-cyan-600 transition-colors">
            Hakkında
          </Link>
          <Link href="/resimler" className="hover:text-cyan-600 transition-colors">
            Resimler
          </Link>
          <Link href="/sergiler" className="hover:text-cyan-600 transition-colors">
            Sergiler
          </Link>
          <Link href="/iletisim" className="hover:text-cyan-600 transition-colors">
            İletişim
          </Link>
        </nav>

        {/* Center Column – Instagram Bio */}
        <section className="text-center sm:text-left">
          <h2 className="font-goldman text-2xl text-gray-900 mb-3">Instagram</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            <span className="block">🎨 Akrilik Dökme · Acrylic Pouring</span>
            <span className="block">🌊 Akışkan Sanat · Fluid Art</span>
          </p>
          <a
            href="https://www.instagram.com/sevimgulecart"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 text-cyan-600 hover:text-cyan-800 font-goldman text-lg"
          >
            @sevimgulecart
          </a>
        </section>

        {/* Right Column – Signature */}
        <div className="flex flex-col items-center sm:items-end justify-center text-sm text-gray-500">
          <p className="text-center sm:text-right leading-relaxed">
            © {new Date().getFullYear()} SEVIM GÜLEÇ ART
            <br />
            Website by{" "}
            <a
              href="https://reyhanuyanik.art/"
              target="_blank"
              rel="noreferrer"
              className="font-goldman text-gray-800 hover:text-cyan-700 transition"
            >
              Reyhan Uyanik
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
