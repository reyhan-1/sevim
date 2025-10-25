'use client';
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

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

      <div className="min-h-screen w-full relative overflow-hidden bg-black">
        {/* Show black screen before video mounts */}
        {!showVideo && <div className="absolute inset-0 bg-black z-30" />}

        {/* Video background */}
        {showVideo && (
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/sevim_background.webm"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Centered header + nav */}
        <header className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-6 py-8">
            <h1 className="font-goldman text-white drop-shadow-md tracking-wide text-4xl sm:text-5xl md:text-6xl">
              Sevim Güleç
            </h1>

            <nav
              aria-label="Primary"
              className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-lg md:text-xl"
            >
              <a href="/resimler" className="font-goldman text-white/90 hover:text-cyan-300 transition-colors">
                Resimler
              </a>
              <a href="/sergiler" className="font-goldman  text-white/90 hover:text-cyan-300 transition-colors">
                Sergiler
              </a>
              <a href="/hakkinda" className="font-goldman  text-white/90 hover:text-cyan-300 transition-colors">
                Hakkında
              </a>
              <a href="/iletisim" className="font-goldman  text-white/90 hover:text-cyan-300 transition-colors">
                İletişim
              </a>
            </nav>
          </div>
        </header>


      </div>
    </>
  );
}
