import { Goldman, Urbanist } from 'next/font/google'
import Footer from '@/components/Footer'
import SiteNavGate from '@/components/SiteNavGate'
import "./globals.css";

const goldman = Goldman({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-goldman',
  display: 'swap',
})

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-urbanist',
  display: 'swap',
})

export const metadata = {
  title: 'Sevim Güleç',
  description: 'Sevim Güleç',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${goldman.variable} ${urbanist.variable}`}>
      <body className="flex flex-col min-h-screen font-urbanist">
        <SiteNavGate />
        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
