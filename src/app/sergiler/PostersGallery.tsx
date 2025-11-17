"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

type Poster = {
  id: string;
  src: string;
  alt: string;
  caption: string;
};

const posters: Poster[] = [
  {
    id: "art-ankara-24",
    src: "/art-ankara-24.jpg",
    alt: "ArtAnkara 2024 afişi",
    caption: "ArtAnkara 2024 – Fırça Sanat Galerisi",
  },
  {
    id: "art-ankara-25",
    src: "/art-ankara-25.jpg",
    alt: "ArtAnkara 2025 afişi",
    caption: "ArtAnkara 2025 – Sergimiz.com Sanat Galerisi",
  },
  {
    id: "art-contact-25",
    src: "/art-contact.jpg",
    alt: "ArtContact İstanbul 2025 afişi",
    caption: "ArtContact İstanbul 2025 – Sergimiz.com Sanat Galerisi",
  },
  {
    id: "ilk",
    src: "/ilk.jpg",
    alt: "Kayihan Keskinok Atölyesi ressamları sergi afişi",
    caption: "Kayihan Keskinok Atölyesi Ressamları – Resim Sergisi",
  },
  {
    id: "paris",
    src: "/paris.jpg",
    alt: "Paris Couleurs de la Turquie sergisi afişi",
    caption: "“Couleurs de la Turquie 8” – Paris, 2009",
  },
  {
    id: "sanatla-bulusan",
    src: "/sanatla-bulusan.jpg",
    alt: "Sanatla Buluşan Duvarlar sergisi afişi",
    caption: "“Sanatla Buluşan Duvarlar” – Sergimiz.com Sanat Galerisi",
  },
];

export default function PostersGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(() => {
    if (openIndex === null) return;
    setOpenIndex((i) => (i! - 1 + posters.length) % posters.length);
  }, [openIndex]);
  const next = useCallback(() => {
    if (openIndex === null) return;
    setOpenIndex((i) => (i! + 1) % posters.length);
  }, [openIndex]);

  // keyboard support
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (openIndex === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, close, prev, next]);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {posters.map((poster, idx) => (
          <button
            key={poster.id}
            type="button"
            onClick={() => setOpenIndex(idx)}
            className="group overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50/80 shadow-sm transition-transform duration-500 hover:-translate-y-[3px] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={poster.src}
                alt={poster.alt}
                fill
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
            </div>
            <div className="px-4 py-3">
              <p className="font-urbanist text-sm text-neutral-900">
                {poster.caption}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full overflow-hidden rounded-2xl bg-black aspect-[3/4] md:aspect-[4/5]">
              <Image
                src={posters[openIndex].src}
                alt={posters[openIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <div className="mt-4 text-center">
              <p className="font-urbanist text-sm text-neutral-100">
                {posters[openIndex].caption}
              </p>
            </div>

            {/* Controls */}
            <button
              type="button"
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-3 text-lg shadow hover:bg-white"
              aria-label="Önceki afiş"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-3 text-lg shadow hover:bg-white"
              aria-label="Sonraki afiş"
            >
              ›
            </button>

            <button
              type="button"
              onClick={close}
              className="absolute -top-4 right-0 rounded-full bg-white/90 p-2.5 text-sm shadow hover:bg-white"
              aria-label="Kapat"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
