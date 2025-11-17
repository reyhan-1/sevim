'use client';

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setShowVideo(true);
  }, []);

  return (
    <>
      <Head>
        <title>Sevim Güleç</title>
      </Head>

      <main className="bg-black">
        {/* HERO – VIDEO */}
        <section className="relative min-h-screen w-full overflow-hidden">
          {/* Fallback black screen before video mounts */}
          {!showVideo && <div className="absolute inset-0 z-30 bg-black" />}

          {/* Video background */}
          {showVideo && (
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              src="/sevim_background.webm"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          )}

          {/* Layered overlays */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/65 via-black/55 to-black/70" />
          <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_55%)] opacity-60" />

          {/* Centered header + nav */}
          <header className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="px-6 py-8 text-center">
              <h1 className="font-goldman text-4xl sm:text-5xl md:text-6xl tracking-tight text-white drop-shadow-[0_18px_45px_rgba(0,0,0,0.8)]">
                Sevim Güleç
              </h1>

              <p className="mt-3 font-urbanist text-xs sm:text-sm uppercase tracking-[0.28em] text-white/70">
                Akrilik Dökme · Fluid Art · Yağlıboya
              </p>

              <nav
                aria-label="Primary"
                className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm sm:text-base md:text-lg"
              >
                <Link
                  href="/resimler"
                  className="font-goldman text-white/85 tracking-wide transition-all hover:text-white hover:opacity-100"
                >
                  Resimler
                </Link>
                <Link
                  href="/sergiler"
                  className="font-goldman text-white/85 tracking-wide transition-all hover:text-white hover:opacity-100"
                >
                  Sergiler
                </Link>
                <Link
                  href="/hakkinda"
                  className="font-goldman text-white/85 tracking-wide transition-all hover:text-white hover:opacity-100"
                >
                  Hakkında
                </Link>
                <Link
                  href="/iletisim"
                  className="font-goldman text-white/85 tracking-wide transition-all hover:text-white hover:opacity-100"
                >
                  İletişim
                </Link>
              </nav>
            </div>
          </header>
        </section>

        {/* CURATED SELECTIONS */}
        <section className="bg-[#f7f3ee] text-neutral-900">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <div className="mb-10 sm:mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-urbanist text-[11px] uppercase tracking-[0.3em] text-neutral-400">
                  Seçili Eserler
                </p>
                <h2 className="mt-1 font-goldman text-2xl sm:text-3xl tracking-tight text-neutral-900">
                  Sevim Güleç&apos;in Dünyasına Giriş
                </h2>
              </div>
              <Link
                href="/resimler"
                className="font-urbanist text-xs sm:text-sm uppercase tracking-[0.22em] text-neutral-600 hover:text-neutral-900"
              >
                Tüm resimleri gör
              </Link>
            </div>

            <div className="space-y-14">
              {/* Akrilik Seçkisi */}
              <section className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-goldman text-xl sm:text-2xl tracking-tight text-neutral-900">
                    Akrilik Seçkisi
                  </h3>
                  <p className="hidden sm:block font-urbanist text-xs uppercase tracking-[0.25em] text-neutral-500">
                    Akışkan yüzeyler · Modern renkler
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {[
                    {
                      src: '/akrilik-10.JPG',
                      title: '',
                      meta: '2025 · Akrilik, tuval',
                    },
                    {
                      src: '/akrilik-9.JPG',
                      title: '',
                      meta: '2024 · Akrilik, tuval',
                    },
                    {
                      src: '/akrilik-25x30.jpg',
                      title: '',
                      meta: '2025 · Akrilik, tuval',
                    },
                  ].map((item) => (
                    <figure
                      key={item.src}
                      className="group overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50/80 shadow-sm transition-transform duration-500 hover:-translate-y-[3px] hover:shadow-lg"
                    >
                      <div className="relative aspect-[4/5] w-full overflow-hidden">
                        <Image
                          src={item.src}
                          alt={item.title || 'Akrilik eser'}
                          fill
                          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                        />
                      </div>
                      <figcaption className="px-4 py-3">
                        <p className="font-goldman text-sm text-neutral-900">
                          {item.title}
                        </p>
                        <p className="mt-1 font-urbanist text-xs text-neutral-600">
                          {item.meta}
                        </p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              {/* Manolyalar */}
              <section className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-goldman text-xl sm:text-2xl tracking-tight text-neutral-900">
                    Manolya Serisi
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {[
                    {
                      src: '/manolya2.JPG',
                      title: '',
                      meta: '2010 · Yağlıboya, tuval',
                    },
                    {
                      src: '/yagliboya-manolya-60x60-artankara2024.JPG',
                      title: '',
                      meta: '2024 · Akrilik & yağlıboya, tuval',
                    },
                    {
                      src: '/yagliboya-manolya-30x30-artankara2024.jpg',
                      title: 'Gün Işığı',
                      meta: '2023 · Yağlıboya, tuval',
                    },
                  ].map((item) => (
                    <figure
                      key={item.src}
                      className="group overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50/80 shadow-sm transition-transform duration-500 hover:-translate-y-[3px] hover:shadow-lg"
                    >
                      <div className="relative aspect-[4/5] w-full overflow-hidden">
                        <Image
                          src={item.src}
                          alt={item.title || 'Manolya serisinden eser'}
                          fill
                          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                        />
                      </div>
                      <figcaption className="px-4 py-3">
                        <p className="font-goldman text-sm text-neutral-900">
                          {item.title}
                        </p>
                        <p className="mt-1 font-urbanist text-xs text-neutral-600">
                          {item.meta}
                        </p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              {/* Akrilik & Yağlıboya */}
              <section className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-goldman text-xl sm:text-2xl tracking-tight text-neutral-900">
                    Akrilik &amp; Yağlıboya
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {[
                    {
                      src: '/akrilik-manolya-artankara-2025-3.JPG',
                      title: '',
                      meta: '2024 · Akrilik & yağlıboya, tuval',
                    },
                    {
                      src: '/akrilik-manolya-100x100.JPG',
                      title: '',
                      meta: '2022 · Yağlıboya, tuval',
                    },
                    {
                      src: '/akrilik-manolya-artankara2025-3.JPG',
                      title: '',
                      meta: '2024 · Akrilik & yağlıboya, tuval',
                    },
                  ].map((item) => (
                    <figure
                      key={item.src}
                      className="group overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50/80 shadow-sm transition-transform duration-500 hover:-translate-y-[3px] hover:shadow-lg"
                    >
                      <div className="relative aspect-[4/5] w-full overflow-hidden">
                        <Image
                          src={item.src}
                          alt={item.title || 'Akrilik ve yağlıboya eser'}
                          fill
                          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                        />
                      </div>
                      <figcaption className="px-4 py-3">
                        <p className="font-goldman text-sm text-neutral-900">
                          {item.title}
                        </p>
                        <p className="mt-1 font-urbanist text-xs text-neutral-600">
                          {item.meta}
                        </p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              {/* Karantina – Tek Eser */}
<section className="space-y-6">
  <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <h3 className="font-goldman text-xl sm:text-2xl tracking-tight text-neutral-900">
        Karantina
      </h3>
      <p className="mt-1 font-urbanist text-xs uppercase tracking-[0.25em] text-neutral-500">
        Umutlu bir gün batımı · At figürü
      </p>
    </div>
  </div>

  <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
    {/* Painting */}
<div className="relative w-full h-[85vh] overflow-hidden rounded-3xl border border-neutral-200/80 bg-neutral-50/80 shadow-lg">
  <Image
    src="/karantina.JPG"
    alt="Karantina – gün batımında at figürü"
    fill
    sizes="100vw"
    className="object-contain object-center"
    priority
  />
</div>


                  {/* Text */}
                  <div className="flex items-center">
                    <div className="space-y-4 font-urbanist text-[15px] leading-7 text-neutral-700">
                      <p>
                        “Karantina”, sanatçının pandemi dönemindeki iç dünyasını
                        yansıttığı, ancak karanlığa değil umuda odaklanan bir
                        çalışmadır. Sıcak gün batımı tonları, ayçiçek tarlası, at ailesi kapanmanın içinden
                        doğan özgürlük arzusunu taşır.
                      </p>
                      <p>
                        Sevim Güleç için bu tablo, belirsizlik zamanlarında bile
                        hayata, renklere ve harekete olan inancın görsel bir
                        notu gibidir; karanlıktan çok, sonrasında gelecek
                        ışığa işaret eder. Ressamın pozitif ve umutlu iç dünyasını yansıtır.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* INSTAGRAM SECTION – DIFFERENT BACKGROUND */}
        <section className="bg-neutral-950 text-neutral-50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-urbanist text-[11px] uppercase tracking-[0.3em] text-neutral-500">
                  Instagram&apos;dan
                </p>
                <h2 className="mt-1 font-goldman text-2xl sm:text-3xl tracking-tight text-neutral-50">
                  Atölyeden Kısa Anlar
                </h2>
                <p className="mt-3 max-w-xl font-urbanist text-sm text-neutral-300 leading-relaxed">
                  Akışkan boyalar, süreç videoları ve bitmiş tabloların
                  detayları. Güncel çalışmalar için Instagram hesabını takip
                  edebilirsiniz.
                </p>
              </div>

              <a
                href="https://www.instagram.com/sevimgulecart"
                target="_blank"
                rel="noreferrer"
                className="font-urbanist text-xs sm:text-sm uppercase tracking-[0.22em] text-neutral-300 hover:text-white"
              >
                @sevimgulecart&apos;a git
              </a>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {/* Post 1 */}
              <article className="flex h-full flex-col rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.6)]">
                <p className="text-[11px] font-urbanist uppercase tracking-[0.28em] text-neutral-500">
                  Reel · Akrilik Pouring
                </p>
                <p className="mt-3 font-urbanist text-sm text-neutral-100 leading-relaxed">
                  40×60 tual üzerine akışkan sanat; renklerin akışı ve denge
                  arayışı.
                </p>
                <div className="mt-4 flex-1" />
                <a
                  href="https://www.instagram.com/p/DP1G7aWjFOs/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-xs font-urbanist uppercase tracking-[0.22em] text-neutral-300 hover:text-white"
                >
                  Instagram&apos;da izle
                </a>
              </article>

              {/* Post 2 */}
              <article className="flex h-full flex-col rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.6)]">
                <p className="text-[11px] font-urbanist uppercase tracking-[0.28em] text-neutral-500">
                  Karışık Teknik · 80×80
                </p>
                <p className="mt-3 font-urbanist text-sm text-neutral-100 leading-relaxed">
                  Tuval üzerine akrilik, üzerine yağlıboya; katmanlı ve yoğun
                  bir yüzey.
                </p>
                <div className="mt-4 flex-1" />
                <a
                  href="https://www.instagram.com/p/DJjm0yKoSLg/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-xs font-urbanist uppercase tracking-[0.22em] text-neutral-300 hover:text-white"
                >
                  Gönderiyi gör
                </a>
              </article>

              {/* Post 3 */}
              <article className="flex h-full flex-col rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.6)]">
                <p className="text-[11px] font-urbanist uppercase tracking-[0.28em] text-neutral-500">
                  Reel · 40×40 Akrilik
                </p>
                <p className="mt-3 font-urbanist text-sm text-neutral-100 leading-relaxed">
                  Flip cup ve kaydırma tekniğiyle yapılmış akrilik dökme
                  çalışma.
                </p>
                <div className="mt-4 flex-1" />
                <a
                  href="https://www.instagram.com/reel/DQ7M92_Dse6/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-xs font-urbanist uppercase tracking-[0.22em] text-neutral-300 hover:text-white"
                >
                  Instagram&apos;da izle
                </a>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
