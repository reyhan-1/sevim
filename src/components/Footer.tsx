'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/[0.06] bg-[#f7f3ee] text-neutral-700 font-urbanist">
      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 py-14">

        {/* Left Column – Navigation */}
        <nav className="flex flex-col justify-center space-y-2">
          <h2 className="font-goldman text-lg tracking-tight text-neutral-900 mb-3">
            Menü
          </h2>

          <Link href="/hakkinda" className="hover:text-neutral-900 transition-all">
            Hakkında
          </Link>
          <Link href="/resimler" className="hover:text-neutral-900 transition-all">
            Resimler
          </Link>
          <Link href="/sergiler" className="hover:text-neutral-900 transition-all">
            Sergiler
          </Link>
          <Link href="/iletisim" className="hover:text-neutral-900 transition-all">
            İletişim
          </Link>
        </nav>

        {/* Center Column – Instagram */}
        <section className="text-center sm:text-left">
          <h2 className="font-goldman text-lg tracking-tight text-neutral-900 mb-3">
            Instagram
          </h2>

          <p className="text-neutral-700 text-sm leading-relaxed space-y-1">
            <span className="block">🎨 Akrilik Dökme · Acrylic Pouring</span>
            <span className="block">🌊 Akışkan Sanat · Fluid Art</span>
          </p>

          <a
            href="https://www.instagram.com/sevimgulecart"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 font-goldman text-neutral-800 tracking-wide hover:text-neutral-900 transition-all"
          >
            @sevimgulecart
          </a>
        </section>

        {/* Right Column – Signature */}
        <div className="flex flex-col items-center sm:items-end justify-center text-sm text-neutral-500">
          <p className="text-center sm:text-right leading-relaxed">
            © {new Date().getFullYear()} SEVIM GÜLEÇ ART
            <br />
            Website by{" "}
            <a
              href="https://reyhanuyanik.art/"
              target="_blank"
              rel="noreferrer"
              className="font-goldman text-neutral-700 hover:text-neutral-900 transition-all"
            >
              Reyhan Uyanik
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
