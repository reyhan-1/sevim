'use client'

import { useEffect, useState } from 'react'
import Footer from "@/components/Footer";

const images = [
  '/bg1.jpeg',
  '/bg2.jpeg',
  '/bg3.jpeg',
  '/bg4.jpeg',
  '/bg5.jpeg',
  '/bg6.jpeg',
]

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="relative h-screen w-screen overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white bg-black/50">
        <h1 className="cinzel-heading text-5xl md:text-7xl font-bold mb-6 text-center">
          NUROL KAYMAZ
        </h1>
        <nav className="flex space-x-8 text-lg md:text-xl font-medium">
          <a href="/resimler" className="hover:text-cyan-600">Resimler</a>
          <a href="/sergiler" className="hover:text-cyan-600">Sergiler</a>
          <a href="/hakkinda" className="hover:text-cyan-600">Hakkında</a>
          <a href="/iletisim" className="hover:text-cyan-600">İletişim</a>
        </nav>
      </div>
    </main>
  )
}
