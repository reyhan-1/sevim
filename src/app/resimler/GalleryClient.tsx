'use client';

import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';

export const metadata = {
  title: 'Resimler | Sevim Güleç',
  description: 'Sevim Güleç’in yağlı boya ve akrilik eserleri.',
};

type Artwork = {
  id: string;
  title: string;
  year: string;
  medium: string;
  size: string;
  src: string;
  alt?: string;
};

const artworks: Artwork[] = [
  // Replace these with real artwork paths in /public/paintings/
  {
    id: 'sg-01',
    title: 'Sessiz Akış',
    year: '2024',
    medium: 'Akrilik, tuval',
    size: '80 × 120 cm',
    src: '/paintings/sessiz-akis.jpg',
  },
  {
    id: 'sg-02',
    title: 'Gün Işığı',
    year: '2023',
    medium: 'Yağlıboya, tuval',
    size: '70 × 100 cm',
    src: '/paintings/gun-isigi.jpg',
  },
  {
    id: 'sg-03',
    title: 'Derin Mavi',
    year: '2025',
    medium: 'Akrilik, tuval',
    size: '90 × 90 cm',
    src: '/paintings/derin-mavi.jpg',
  },
  {
    id: 'sg-04',
    title: 'Hafif Rüzgar',
    year: '2022',
    medium: 'Yağlıboya, tuval',
    size: '60 × 80 cm',
    src: '/paintings/hafif-ruzgar.jpg',
  },
];

export default function ResimlerPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(() => {
    if (openIndex === null) return;
    setOpenIndex((i) => (i! - 1 + artworks.length) % artworks.length);
  }, [openIndex]);
  const next = useCallback(() => {
    if (openIndex === null) return;
    setOpenIndex((i) => (i! + 1) % artworks.length);
  }, [openIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (openIndex === null) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openIndex, close, prev, next]);

  return (
    <main className="min-h-screen bg-[#f7f3ee] text-neutral-900">
      {/* Parallax Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[url('/sevim-bio.JPG')] bg-cover bg-center bg-fixed opacity-20 blur-sm scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f7f3ee] via-[#f7f3ee]/96 to-[#f7f3ee]" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 rounded-full border border-black/5 bg-white/70 px-4 py-1 text-xs font-urbanist uppercase tracking-[0.28em] text-neutral-500 backdrop-blur">
              <span className="h-[1px] w-6 bg-neutral-400/60" />
              Galeri
            </div>
            <h1 className="font-goldman text-4xl sm:text-5xl md:text-6xl tracking-tight text-neutral-900">
              Resimler
            </h1>
            <p className="max-w-xl font-urbanist text-base sm:text-lg text-neutral-700 leading-relaxed">
              Sevim Güleç’in seçili yağlıboya ve akrilik eserlerinden bir derleme.
            </p>
          </div>
        </div>
      </section>

      {/* Floating Art Grid */}
      <section className="relative -mt-10 pb-24 sm:-mt-16 sm:pb-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-black/[0.04] bg-white/95 shadow-[0_28px_120px_rgba(15,23,42,0.18)] backdrop-blur-sm p-8 sm:p-10 lg:p-14">

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
              {artworks.map((art, idx) => (
                <li key={art.id}>
                  <button
                    onClick={() => setOpenIndex(idx)}
                    className="group block w-full overflow-hidden rounded-2xl border border-neutral-200/70 bg-neutral-50/80 shadow-sm transition transform hover:-translate-y-[3px] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                    aria-label={`${art.title} ${art.year}`}
                  >
                    <div className="relative w-full aspect-[4/5] overflow-hidden">
                      <Image
                        src={art.src}
                        alt={art.alt || art.title}
                        fill
                        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        priority={idx < 4}
                      />
                    </div>

                    <div className="px-4 py-3">
                      <h3 className="font-goldman text-sm text-neutral-900 tracking-tight">
                        {art.title}
                      </h3>
                      <p className="mt-1 font-urbanist text-xs uppercase tracking-wider text-neutral-500">
                        {art.year} · {art.medium}
                      </p>
                      <p className="font-urbanist text-[11px] text-neutral-400">
                        {art.size}
                      </p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-black">
              <Image
                src={artworks[openIndex].src}
                alt={artworks[openIndex].alt || artworks[openIndex].title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <div className="mt-4 text-center">
              <h4 className="font-goldman text-neutral-100 text-xl">
                {artworks[openIndex].title}
              </h4>
              <p className="mt-1 font-urbanist text-neutral-300 text-sm">
                {artworks[openIndex].year} · {artworks[openIndex].medium} · {artworks[openIndex].size}
              </p>
            </div>

            {/* Controls */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 hover:bg-white"
              aria-label="Önceki"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 hover:bg-white"
              aria-label="Sonraki"
            >
              ›
            </button>

            <button
              onClick={close}
              className="absolute -top-4 right-0 rounded-full bg-white/90 hover:bg-white p-2.5 shadow"
              aria-label="Kapat"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
