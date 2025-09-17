import { Cinzel } from 'next/font/google'
import Footer from '@/components/Footer'

import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-cinzel',
  display: 'swap',
})

export const metadata = {
  title: 'Nurol Kaymaz',
  description: 'Nurol Kaymaz',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en" className={cinzel.variable}>
      <body className="flex flex-col min-h-screen">{children}
            <Footer/>
      <footer className="footer sm:footer-horizontal bg-white footer-center p-4">
        <aside>
          <p className="font-quicksand text-center text-gray-800 text-sm">
            © NUROL KAYMAZ {new Date().getFullYear()} | WEBSITE BY Reyhan Uyanik
          </p>
        </aside>
      </footer>
      </body>
    </html>
  );
}
