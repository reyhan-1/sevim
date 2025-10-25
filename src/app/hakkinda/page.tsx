import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Hakkında | Sevim Güleç",
  description:
    "Sevim Güleç hakkında",
};

export default function HakkindaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
          <h1 className="font-goldman text-4xl sm:text-5xl text-gray-900 text-center">
            Hakkında
          </h1>
          <p className="mt-4 text-center text-base sm:text-lg text-gray-600 font-urbanist">
            Sevim Güleç&apos;in resimleri renk ve duygunun kesişimindedir.
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Portrait / Visual */}
          <div className="lg:col-span-1">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow">
              <Image
                src="/sevim-bio.JPG"
                alt="Sevim Güleç portre"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Quick facts */}
            <div className="mt-6 space-y-2">
              <h2 className="font-urbanist text-l text-gray-900">Sevim Güleç, Ankara&apos;da atölyesinde</h2>
              {/*<ul className="font-urbanist text-gray-700 text-sm leading-7">*/}
              {/*  <li><span className="text-gray-500">Temsil: </span>Bağımsız</li>*/}
              {/*  <li><span className="text-gray-500">Yer: </span>İstanbul, Türkiye</li>*/}
              {/*  <li><span className="text-gray-500">Disiplin: </span>Resim</li>*/}
              {/*</ul>*/}

              <div className=" justify-center">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 transition"
                >
                  İletişim
                </Link>
              </div>
            </div>
          </div>

          {/* Main text */}
          <div className="lg:col-span-2 space-y-12">
            {/* 🎨 Sanatçı Biyografisi */}
            <section>
              <h2 className="font-goldman text-2xl text-gray-900">
                🎨 Sanatçı Biyografisi
              </h2>
              <div className="mt-4 font-urbanist text-gray-700 leading-7 space-y-4">
                <p>
                  1950 yılında Silifke&apos;de doğdu. Liseyi Silifke&apos;de tamamladıktan sonra Mersin Kız Öğretmen Okulu&apos;ndan mezun oldu. Öğretmenlik kariyerine devam ederken yüksek lisansını tamamladı ve 15 yıl süren öğretmenlik görevinin ardından resim çalışmalarına başladı.
                </p>
                <p>
                  Kayihan Keskinok Resim Atölyesi&apos;nde dört yıl eğitim aldıktan sonra Ankara Beyaz Sanat Galerisi&apos;ni kurdu. Daha sonra Sabri Akça ile Ankara Beyaz Sanat Atölyesi&apos;nde çalışmalarını sürdürdü. Ardından Hikmet Çetinkaya&apos;nın özel ders ve atölye çalışmalarına katılarak sanat hayatına devam etti.
                </p>
                <p>
                  Yıllar içinde birçok kişisel ve karma sergide yer aldı. Sanat yolculuğuna ilham veren ve desteğini esirgemeyen hocası Kayihan Keskinok&apos;a teşekkürlerini sunmaktadır.
                </p>
              </div>
            </section>

            {/* 🌊 Sanat Anlayışı */}
            <section>
              <h2 className="font-goldman text-2xl text-gray-900">
                🌊 Sanat Anlayışı
              </h2>
              <div className="mt-4 font-urbanist text-gray-700 leading-7 space-y-4">
                <p>
                  Eserlerinde akışkan sanat (Fluid Art / Pouring) tekniğini benimsemektedir. Akışkan boyaların sanatta kullanılmaya başlanmasıyla doğan bu teknik, renklerin doğal akışıyla soyut ve özgün formlar oluşturur.
                </p>
                <p>
                  Sanatçı, Osmanlı döneminin ebru sanatı ile Japon Sumi-e mürekkep sanatından esinlenerek modern akrilik pouring tekniğini kullanır. Eserlerinde renklerin rastlantısallığıyla doğanın enerjisini birleştirir; her bir tablo, kendine özgü bir denge ve duygusal akış sunar.
                </p>
              </div>
            </section>

            {/* (Optional) Other sections you had */}
            {/*
            <section>
              <h2 className="font-goldman text-2xl text-gray-900">Seçilmiş Sergiler</h2>
              ...
            </section>
            */}
          </div>
        </div>
      </section>
    </main>
  );
}
