'use client';

import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';

export const metadata = {
  title: 'Resimler | Sevim Güleç',
  description: 'Sevim Güleç’in yağlı boya ve akrilik eserleri.',
};

type Category = 'akrilik' | 'akrilik-manolya' | 'yagliboya-manolya';

type Artwork = {
  id: string;
  title: string;
  year: string;
  medium: string;
  size: string;
  src: string;
  category: Category;
  alt?: string;
};

const artworks: Artwork[] = [
  // --- A K R İ L İ K ---
  { id: 'akrilik-01', title: '', year: '', medium: 'Akrilik, tuval', size: '', src: '/akrilik.JPG', category: 'akrilik' },
  { id: 'akrilik-02', title: '', year: '', medium: 'Akrilik, tuval', size: '30 × 30 cm (4’lü seri)', src: '/akrilik30-30-4lu4.JPG', category: 'akrilik' },
  { id: 'akrilik-03', title: '', year: '', medium: 'Akrilik, tuval', size: '', src: '/akrilik-5.jpg', category: 'akrilik' },
  { id: 'akrilik-04', title: '', year: '', medium: 'Akrilik, tuval', size: '', src: '/akrilik-6.JPG', category: 'akrilik' },
  { id: 'akrilik-05', title: '', year: '', medium: 'Akrilik, tuval', size: '', src: '/akrilik-8.JPG', category: 'akrilik' },
  { id: 'akrilik-06', title: '', year: '', medium: 'Akrilik, tuval', size: '', src: '/akrilik-9.JPG', category: 'akrilik' },
  { id: 'akrilik-07', title: '', year: '', medium: 'Akrilik, tuval', size: '', src: '/akrilik-10.JPG', category: 'akrilik' },
  { id: 'akrilik-08', title: '', year: '', medium: 'Akrilik, tuval', size: '25 × 30 cm', src: '/akrilik-25x30.jpg', category: 'akrilik' },
  { id: 'akrilik-09', title: '', year: '', medium: 'Akrilik, tuval', size: '25 × 30 cm', src: '/akrilik-25x30-2.JPG', category: 'akrilik' },
  { id: 'akrilik-10', title: '', year: '', medium: 'Akrilik, tuval', size: '30 × 30 cm (4’lü seri)', src: '/akrilik-30-30-4lu2.JPG', category: 'akrilik' },
  { id: 'akrilik-11', title: '', year: '', medium: 'Akrilik, tuval', size: '30 × 30 cm', src: '/akrilik-30x30.jpg', category: 'akrilik' },
  { id: 'akrilik-12', title: '', year: '', medium: 'Akrilik, tuval', size: '30 × 30 cm (4’lü seri)', src: '/akrilik-30x30-4lu1.JPG', category: 'akrilik' },
  { id: 'akrilik-13', title: '', year: '', medium: 'Akrilik, tuval', size: '30 × 30 cm (4’lü seri)', src: '/akrilik-30x30-4lu3.JPG', category: 'akrilik' },
  { id: 'akrilik-14', title: '', year: '', medium: 'Akrilik, tuval', size: '40 × 40 cm', src: '/akrilik-40x40.jpg', category: 'akrilik' },
  { id: 'akrilik-15', title: '', year: '', medium: 'Akrilik, tuval', size: '40 × 40 cm', src: '/akrilik-40x40-3.JPG', category: 'akrilik' },
  { id: 'akrilik-16', title: '', year: '', medium: 'Akrilik, tuval', size: '40 × 50 cm', src: '/akrilik-40x50.JPG', category: 'akrilik' },
  { id: 'akrilik-17', title: '', year: '', medium: 'Akrilik, tuval', size: '40 × 50 cm', src: '/akrilik-40x50-2.jpg', category: 'akrilik' },
  { id: 'akrilik-18', title: '', year: '', medium: 'Akrilik, tuval', size: '40 × 60 cm', src: '/akrilik-40x60.jpg', category: 'akrilik' },
  { id: 'akrilik-19', title: '', year: '', medium: 'Akrilik, tuval', size: '40 × 60 cm', src: '/akrilik-40x60-3.JPG', category: 'akrilik' },
  { id: 'akrilik-20', title: '', year: '', medium: 'Akrilik, tuval', size: '40 × 70 cm', src: '/akrilik-40x70.jpg', category: 'akrilik' },
  { id: 'akrilik-21', title: 'Okyanus', year: '', medium: 'Akrilik, tuval', size: '40 × 70 cm', src: '/akrilik-40x70-okyanus.jpg', category: 'akrilik' },
  { id: 'akrilik-22', title: '', year: '', medium: 'Akrilik, tuval', size: '40 × 80 cm', src: '/akrilik-40x80.jpg', category: 'akrilik' },
  { id: 'akrilik-24', title: '', year: '', medium: 'Akrilik, tuval', size: '50 × 50 cm', src: '/akrilik-50x50.JPG', category: 'akrilik' },
  { id: 'akrilik-25', title: '', year: '', medium: 'Akrilik, tuval', size: '50 × 70 cm', src: '/akrilik-50x70.jpg', category: 'akrilik' },
  { id: 'akrilik-26', title: '', year: '', medium: 'Akrilik, tuval', size: '50 × 70 cm', src: '/akrilik-50x70-4.jpg', category: 'akrilik' },
  { id: 'akrilik-27', title: '', year: '', medium: 'Akrilik, tuval', size: '70 × 90 cm', src: '/akrilik-70x90.JPG', category: 'akrilik' },
  { id: 'akrilik-28', title: '', year: '', medium: 'Akrilik, tuval', size: '80 × 80 cm', src: '/akrilik-80x80.JPG', category: 'akrilik' },
  { id: 'akrilik-29', title: '', year: '', medium: 'Akrilik, tuval', size: '80 × 200 cm', src: '/akrilik-80x200.JPG', category: 'akrilik' },
  { id: 'akrilik-30', title: '', year: '', medium: 'Akrilik, tuval', size: '', src: '/akrilik-80x802.jpg', category: 'akrilik' },

  // Yuvarlak / nazar
  { id: 'akrilik-nazar', title: 'Nazar', year: '', medium: 'Akrilik, yuvarlak tuval', size: '', src: '/akrilik-nazar.JPG', category: 'akrilik' },
  { id: 'akrilik-yuvarlak-1', title: '', year: '', medium: 'Akrilik, yuvarlak tuval', size: 'Ø 40 cm', src: '/akrilik-yuvarlak-cap40.JPG', category: 'akrilik' },
  { id: 'akrilik-yuvarlak-2', title: '', year: '', medium: 'Akrilik, yuvarlak tuval', size: 'Ø 40 cm', src: '/akrilik-yuvarlak-cap40-2.JPG', category: 'akrilik' },
  { id: 'akrilik-yuvarlak-3', title: '', year: '', medium: 'Akrilik, yuvarlak tuval', size: 'Ø 40 cm', src: '/akrilik-yuvarlak-cap40-3.JPG', category: 'akrilik' },
  { id: 'akrilik-yuvarlak-4', title: '', year: '', medium: 'Akrilik, yuvarlak tuval', size: 'Ø 40 cm', src: '/akrilik-yuvarlak-cap40-4.JPG', category: 'akrilik' },
  { id: 'akrilik-yuvarlak-5', title: '', year: '', medium: 'Akrilik, yuvarlak tuval', size: 'Ø 40 cm', src: '/akrilik-yuvarlak-cap40-5.jpg', category: 'akrilik' },

  // Mixed – still in akrilik block
  { id: 'mixed-40x70', title: '', year: '', medium: 'Karışık teknik (akrilik & yağlıboya)', size: '40 × 70 cm', src: '/mixed-40x70.jpg', category: 'akrilik' },
  { id: 'mixed-60x50', title: '', year: '', medium: 'Karışık teknik (akrilik & yağlıboya)', size: '60 × 50 cm', src: '/mixed-60x50.jpg', category: 'akrilik' },

  // --- A K R İ L İ K  M A N O L Y A ---
  { id: 'akrilik-manolya-30x30', title: 'Manolya', year: '', medium: 'Akrilik, tuval', size: '30 × 30 cm', src: '/akrilik-manolya-30x30art-ankara2024.JPG', category: 'akrilik-manolya' },
  { id: 'akrilik-manolya-40x60', title: 'Manolya', year: '', medium: 'Akrilik, tuval', size: '40 × 60 cm', src: '/akrilik-manolya-40x60-artankara2024.JPG', category: 'akrilik-manolya' },
  { id: 'akrilik-manolya-50x70', title: 'Manolya', year: '', medium: 'Akrilik, tuval', size: '50 × 70 cm', src: '/akrilik-manolya-50-70.jpg', category: 'akrilik-manolya' },
  { id: 'akrilik-manolya-50x50-1', title: 'Manolya', year: '', medium: 'Akrilik, tuval', size: '50 × 50 cm', src: '/akrilik-manolya-50x50-artankara2025.jpg', category: 'akrilik-manolya' },
  { id: 'akrilik-manolya-50x50-2', title: 'Manolya', year: '', medium: 'Akrilik, tuval', size: '50 × 50 cm', src: '/akrilik-manolya-50x50-artankara2025-2.jpg', category: 'akrilik-manolya' },
  { id: 'akrilik-manolya-60x50-1', title: 'Manolya', year: '', medium: 'Akrilik, tuval', size: '60 × 50 cm', src: '/akrilik-manolya-60x50-artankara2025.jpg', category: 'akrilik-manolya' },
  { id: 'akrilik-manolya-70x50', title: 'Manolya Turuncu', year: '', medium: 'Akrilik, tuval', size: '70 × 50 cm', src: '/akrilik-manolya-70x50-artankara20250turuncu.jpg', category: 'akrilik-manolya' },
  { id: 'akrilik-manolya-80x40', title: 'Manolya', year: '', medium: 'Akrilik, tuval', size: '80 × 40 cm', src: '/akrilik-manolya-80x40-artankara2025.JPG', category: 'akrilik-manolya' },
  { id: 'akrilik-manolya-100x100', title: 'Manolya', year: '', medium: 'Akrilik, tuval', size: '100 × 100 cm', src: '/akrilik-manolya-100x100.JPG', category: 'akrilik-manolya' },
  { id: 'akrilik-manolya-100x150', title: 'Manolya', year: '', medium: 'Akrilik, tuval', size: '100 × 150 cm', src: '/akrilik-manolya-100x150.JPG', category: 'akrilik-manolya' },
  { id: 'akrilik-manolya-arili', title: 'Arılı Manolya', year: '', medium: 'Akrilik, tuval', size: '', src: '/akrilik-manolya-artankara2024-arili.JPG', category: 'akrilik-manolya' },
  { id: 'akrilik-manolya-2025-3', title: 'Manolya', year: '', medium: 'Akrilik, tuval', size: '', src: '/akrilik-manolya-artankara2025-3.JPG', category: 'akrilik-manolya' },
  { id: 'akrilik-manolya-2025-5', title: 'Manolya', year: '', medium: 'Akrilik, tuval', size: '', src: '/akrilik-manolya-artankara2025-5.JPG', category: 'akrilik-manolya' },
  { id: 'akrilik-manolya-2025-8', title: 'Manolya', year: '', medium: 'Akrilik, tuval', size: '', src: '/akrilik-manolya-artankara2025-8.JPG', category: 'akrilik-manolya' },
  { id: 'akrilik-manolya-2025-alt', title: 'Manolya', year: '', medium: 'Akrilik, tuval', size: '', src: '/akrilik-manolya-artankara-2025-3.JPG', category: 'akrilik-manolya' },

  // --- Y A Ğ L I B O Y A  M A N O L Y A ---
  { id: 'yagliboya-art-2024-main',    title: 'Manolya', year: '2024', medium: 'Yağlıboya, tuval', size: '',             src: '/yagliboya-manolya-artankara2024.JPG',          category: 'yagliboya-manolya' },
  { id: 'yagliboya-art-2024-main-2',  title: 'Manolya', year: '2024', medium: 'Yağlıboya, tuval', size: '',             src: '/yagli-boya-manolya-artankara2024.JPG',        category: 'yagliboya-manolya' },
  { id: 'yagliboya-40x50',            title: 'Manolya', year: '2024', medium: 'Yağlıboya, tuval', size: '50 × 50 cm',   src: '/yagli-manolya-40x50-artankara2024.JPG',       category: 'yagliboya-manolya' },
  { id: 'yagliboya-50x50',            title: 'Manolya', year: '2024', medium: 'Yağlıboya, tuval', size: '50 × 50 cm',   src: '/yagli-manolya-50x50-artankara2024-3.jpg',     category: 'yagliboya-manolya' },
  { id: 'yagliboya-30x30-1',          title: 'Manolya', year: '2024', medium: 'Yağlıboya, tuval', size: '30 × 30 cm',   src: '/yagliboya-manolya-30x30-artankara2024.jpg',   category: 'yagliboya-manolya' },
  { id: 'yagliboya-30x30-2',          title: 'Manolya', year: '2024', medium: 'Yağlıboya, tuval', size: '30 × 30 cm',   src: '/yagliboya-manolya-30x30-artankara2024-3.JPG', category: 'yagliboya-manolya' },
  { id: 'yagliboya-40x80',            title: 'Manolya', year: '2024', medium: 'Yağlıboya, tuval', size: '40 × 80 cm',   src: '/yagliboya-manolya-40x80-artankara2024-2.jpg', category: 'yagliboya-manolya' },
  { id: 'yagliboya-45x45',            title: 'Manolya', year: '2024', medium: 'Yağlıboya, tuval', size: '45 × 45 cm',   src: '/yagliboya-manolya-45x45-artankara2024.jpg',   category: 'yagliboya-manolya' },
  { id: 'yagliboya-60x60-1',          title: 'Manolya', year: '2024', medium: 'Yağlıboya, tuval', size: '60 × 60 cm',   src: '/yagliboya-manolya-60x60-artankara2024.jpg',   category: 'yagliboya-manolya' },
  { id: 'yagliboya-60x60-2',          title: 'Manolya', year: '2024', medium: 'Yağlıboya, tuval', size: '60 × 60 cm',   src: '/yagliboya-manolya-60x60-artankara2024-2.JPG', category: 'yagliboya-manolya' },
  { id: 'yagliboya-100x100',          title: 'Manolya', year: '2024', medium: 'Yağlıboya, tuval', size: '100 × 100 cm', src: '/yagliboya-manolya-100x100-artankara2024.JPG', category: 'yagliboya-manolya' },
  { id: 'yagliboya-art-3',            title: 'Manolya', year: '2024', medium: 'Yağlıboya, tuval', size: '',             src: '/yagliboya-manolya-artankara2024-3.JPG',       category: 'yagliboya-manolya' },
  { id: 'yagliboya-art-4',            title: 'Manolya', year: '2024', medium: 'Yağlıboya, tuval', size: '',             src: '/yagliboya-manolya-artankara2024-4.JPG',       category: 'yagliboya-manolya' },
  { id: 'yagliboya-art-5',            title: 'Manolya', year: '2024', medium: 'Yağlıboya, tuval', size: '',             src: '/yagliboya-manolya-artankara2024-5.JPG',       category: 'yagliboya-manolya' },
  { id: 'yagliboya-art-6',            title: 'Manolya', year: '2024', medium: 'Yağlıboya, tuval', size: '',             src: '/yagliboya-manolya-artankara2024-6.JPG',       category: 'yagliboya-manolya' },

  // Eski Manolya (klasik)
  { id: 'manolya2', title: 'Manolya', year: '', medium: 'Yağlıboya, tuval', size: '', src: '/manolya2.JPG', category: 'yagliboya-manolya' },
];

// map id -> index for the lightbox
const indexById = new Map<string, number>(
  artworks.map((a, i) => [a.id, i])
);

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

  const groups: { key: Category; label: string; subtitle?: string }[] = [
    {
      key: 'akrilik',
      label: 'Akrilik',
      subtitle: 'Akışkan yüzeyler, modern renkler ve karışık teknikler.',
    },
    {
      key: 'akrilik-manolya',
      label: 'Akrilik Manolya Serisi',
      subtitle: 'Manolyanın akrilik yorumları, çağdaş bir dilde.',
    },
    {
      key: 'yagliboya-manolya',
      label: 'Yağlıboya Manolya',
      subtitle: 'Klasik, zamansız ve resim kariyerinin imzası haline gelen seri.',
    },
  ];

  const handlePillClick = (id: string) => {
    if (typeof document === 'undefined') return;
    const el = document.getElementById(id);
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const offset = 120; // approximate navbar + spacing
    const scrollTop = window.scrollY + rect.top - offset;

    window.scrollTo({
      top: scrollTop,
      behavior: 'smooth',
    });
  };

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
              Sevim Güleç’in seçili yağlıboya, akrilik ve karışık teknik
              eserlerinden bir seçki.
            </p>
          </div>
        </div>
      </section>

      {/* Floating Art – Grouped Bento Sections */}
      <section className="relative -mt-10 pb-24 sm:-mt-16 sm:pb-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-black/[0.04] bg-white/95 shadow-[0_28px_120px_rgba(15,23,42,0.18)] backdrop-blur-sm p-6 sm:p-8 lg:p-10 space-y-14">

            {/* Filter / Section pills */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <p className="font-urbanist text-[11px] uppercase tracking-[0.3em] text-neutral-400">
                Bölümler
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {groups.map((group) => (
                  <button
                    key={group.key}
                    type="button"
                    onClick={() => handlePillClick(group.key)}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1.5 text-xs font-urbanist uppercase tracking-[0.22em] text-neutral-600 transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-neutral-50"
                  >
                    {group.label}
                  </button>
                ))}
              </div>
            </div>

            {groups.map((group, groupIndex) => {
              const groupItems = artworks.filter((a) => a.category === group.key);
              if (!groupItems.length) return null;

              return (
                <section
                  key={group.key}
                  id={group.key}
                  className="space-y-6 scroll-mt-32"
                >
                  {/* Divider between sections (except first) */}
                  {groupIndex > 0 && (
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
                  )}

                  {/* Section header */}
                  <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="font-urbanist text-[11px] uppercase tracking-[0.3em] text-neutral-400">
                        {String(groupIndex + 1).padStart(2, '0')}
                      </p>
                      <h2 className="mt-1 font-goldman text-xl sm:text-2xl tracking-tight text-neutral-900">
                        {group.label}
                      </h2>
                      {group.subtitle && (
                        <p className="mt-2 max-w-xl font-urbanist text-sm text-neutral-600">
                          {group.subtitle}
                        </p>
                      )}
                    </div>
                  </header>

                  {/* Masonry columns for this group */}
                  <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:balance]">
                    {groupItems.map((art) => {
                      const index = indexById.get(art.id)!;
                      return (
                        <button
                          key={art.id}
                          onClick={() => setOpenIndex(index)}
                          className="mb-6 w-full break-inside-avoid text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                          aria-label={art.title || 'Eser'}
                        >
                          <div className="overflow-hidden rounded-2xl border border-neutral-200/70 bg-neutral-50/80 shadow-sm transition-transform duration-300 group-hover:-translate-y-[3px] group-hover:shadow-lg">
                            <div className="relative w-full">
                              <Image
                                src={art.src}
                                alt={art.alt || art.title || 'Sevim Güleç eseri'}
                                width={1200}
                                height={1600}
                                className="w-full h-auto object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                              />
                            </div>

                            <div className="px-4 py-3">
                              {art.title && (
                                <h3 className="font-goldman text-sm text-neutral-900 tracking-tight">
                                  {art.title}
                                </h3>
                              )}

                              <p className="mt-1 font-urbanist text-xs uppercase tracking-[0.22em] text-neutral-500">
                                {art.year && `${art.year} · `}
                                {art.medium}
                              </p>

                              {art.size && (
                                <p className="font-urbanist text-[11px] text-neutral-400">
                                  {art.size}
                                </p>
                              )}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </section>
              );
            })}
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
                alt={artworks[openIndex].alt || artworks[openIndex].title || 'Sevim Güleç eseri'}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <div className="mt-4 text-center">
              {artworks[openIndex].title && (
                <h4 className="font-goldman text-neutral-100 text-xl">
                  {artworks[openIndex].title}
                </h4>
              )}
              <p className="mt-1 font-urbanist text-neutral-300 text-sm">
                {artworks[openIndex].year && `${artworks[openIndex].year} · `}
                {artworks[openIndex].medium}
                {artworks[openIndex].size && ` · ${artworks[openIndex].size}`}
              </p>
            </div>

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
