'use client';

import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';

export const metadata = {
  title: 'Resimler | Sevim Güleç',
  description: 'Sevim Güleç’in yağlı boya eserleri.',
};

type Artwork = {
  id: string;
  title: string;
  year: string;
  medium: string;
  size: string;
  src: string;       // /public relative (e.g., /paintings/name.jpg)
  alt?: string;
};

const artworks: Artwork[] = [
  // TODO: Replace with your real images & info (place files in public/paintings/)
  {
    id: 'sg-01',
    title: 'Sessiz Akış',
    year: '2024',
    medium: 'Yağlı boya, tuval',
    size: '80 × 120 cm',
    src: '/paintings/sessiz-akis.jpg',
    alt: 'Sessiz Akış',
  },
  {
    id: 'sg-02',
    title: 'Gün Işığı',
    year: '2023',
    medium: 'Yağlı boya, tuval',
    size: '70 × 100 cm',
    src: '/paintings/gun-isigi.jpg',
    alt: 'Gün Işığı',
  },
  {
    id: 'sg-03',
    title: 'Derin Mavi',
    year: '2025',
    medium: 'Yağlı boya, tuval',
    size: '90 × 90 cm',
    src: '/paintings/derin-mavi.jpg',
    alt: 'Derin Mavi',
  },
  {
    id: 'sg-04',
    title: 'Hafif Rüzgar',
    year: '2022',
    medium: 'Yağlı boya, tuval',
    size: '60 × 80 cm',
    src: '/paintings/hafif-ruzgar.jpg',
    alt: 'Hafif Rüzgar',
  },
  // add more...
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
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-goldman text-3xl sm:text-4xl text-gray-900 text-center">
          Yağlı Boya Resimler
        </h1>
        <p className="mt-3 text-center text-gray-600 font-urbanist">
          Seçili yağlı boya eserlerinden bir derleme.
        </p>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {artworks.map((art, idx) => (
            <li key={art.id}>
              <button
                onClick={() => setOpenIndex(idx)}
                className="group block w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
                aria-label={`${art.title} ${art.year}`}
              >
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src={art.src}
                    alt={art.alt || art.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    priority={idx < 4}
                  />
                </div>

                {/* Overlay info */}
                <div className="p-3">
                  <h3 className="font-goldman text-base text-gray-900">
                    {art.title}
                  </h3>
                  <p className="mt-1 font-urbanist text-sm text-gray-600">
                    {art.year} · {art.medium}
                  </p>
                  <p className="font-urbanist text-xs text-gray-500">
                    {art.size}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Lightbox Modal */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={artworks[openIndex].src}
                alt={artworks[openIndex].alt || artworks[openIndex].title}
                fill
                className="object-contain bg-black"
                sizes="100vw"
                priority
              />
            </div>

            {/* Caption */}
            <div className="mt-3 text-center">
              <h4 className="font-goldman text-white text-lg">
                {artworks[openIndex].title}
              </h4>
              <p className="font-urbanist text-white/80 text-sm">
                {artworks[openIndex].year} · {artworks[openIndex].medium} · {artworks[openIndex].size}
              </p>
            </div>

            {/* Controls */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
              <button
                onClick={prev}
                className="rounded-full bg-white/90 hover:bg-white p-2 shadow focus:outline-none"
                aria-label="Önceki"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="rounded-full bg-white/90 hover:bg-white p-2 shadow focus:outline-none"
                aria-label="Sonraki"
              >
                ›
              </button>
            </div>

            <button
              onClick={close}
              className="absolute -top-3 -right-3 rounded-full bg-white/90 hover:bg-white p-2 shadow"
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
