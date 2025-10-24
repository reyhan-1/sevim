'use client';
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Footer from "@/components/Footer";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setShowVideo(true);
  }, []);


  return (
    <>
      <Head>
        <title>Reyhan Uyanık</title>
      </Head>

      <div className="min-h-screen w-full relative overflow-hidden bg-black">
        {/* Show black screen for 1 sec before video loads */}
        {!showVideo && (
          <div className="absolute inset-0 bg-black z-20"></div>
        )}

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

        {/* Overlay for darkening */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        <nav className="flex space-x-8 text-lg md:text-xl font-medium">
          <a href="/resimler" className="hover:text-cyan-600">Resimler</a>
          <a href="/sergiler" className="hover:text-cyan-600">Sergiler</a>
          <a href="/hakkinda" className="hover:text-cyan-600">Hakkında</a>
          <a href="/iletisim" className="hover:text-cyan-600">İletişim</a>
        </nav>
      </div>

    </>
  );
}
