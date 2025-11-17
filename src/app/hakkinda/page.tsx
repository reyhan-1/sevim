import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Hakkında | Sevim Güleç",
  description: "Sevim Güleç hakkında",
};

export default function HakkindaPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ee] text-neutral-900">
      {/* Parallax Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[url('/sevim-bio.JPG')] bg-cover bg-center bg-fixed opacity-30 blur-sm scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f7f3ee] via-[#f7f3ee]/96 to-[#f7f3ee]" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-black/5 bg-white/70 px-4 py-1 text-xs font-urbanist uppercase tracking-[0.28em] text-neutral-500 backdrop-blur">
                <span className="h-[1px] w-6 bg-neutral-400/60" />
                Hakkında
              </div>
              <h1 className="font-goldman text-4xl sm:text-5xl md:text-6xl tracking-tight text-neutral-900">
                Hakkında
              </h1>
              <p className="max-w-xl font-urbanist text-base sm:text-lg text-neutral-700 leading-relaxed">
                Sevim Güleç&apos;in resimleri renk ve duygunun kesişimindedir.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-urbanist text-neutral-500">
              <span className="h-px w-10 bg-neutral-400/60" />
              <span className="tracking-[0.22em] uppercase">
                Sanatçı Biyografisi &amp; Sanat Anlayışı
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Content Card */}
      <section className="relative -mt-10 pb-24 sm:-mt-16 sm:pb-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-black/[0.04] bg-white/95 shadow-[0_28px_120px_rgba(15,23,42,0.18)] backdrop-blur-sm">
            <div className="grid grid-cols-1 gap-12 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:px-14 lg:py-16">

              {/* Portrait / Visual */}
<div className="flex flex-col justify-between gap-10">
  <div className="space-y-5">
    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-3xl border border-neutral-200/80 bg-neutral-100 shadow-lg">
      {/* Atölye fotoğrafı */}
      <Image
        src="/atolyekahve.JPG"   // ensure this exists in /public
        alt="Sevim Güleç atölyesinde"
        fill
        className="object-contain object-center"
        priority
      />
    </div>

    {/* Quick facts / caption */}
    <div className="space-y-3">
      <p className="font-urbanist text-[13px] uppercase tracking-[0.22em] text-neutral-500">
        Sevim Güleç, Ankara&apos;da atölyesinde
      </p>

      <div className="h-px w-16 bg-neutral-300" />

      <div>
        <Link
          href="/iletisim"
          className="inline-flex items-center justify-center rounded-full border border-neutral-900/10 bg-neutral-900 px-5 py-2.5 text-sm font-medium text-neutral-50 shadow-sm transition-all duration-200 hover:-translate-y-[1px] hover:bg-white hover:text-neutral-900 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/60"
        >
          İletişim
        </Link>
      </div>
    </div>
  </div>
</div>


              {/* Main text */}
              <div className="space-y-14">

                {/* 🎨 Sanatçı Biyografisi */}
                <section className="space-y-7">
                  <div className="space-y-2">
                    <p className="font-urbanist text-[11px] uppercase tracking-[0.3em] text-neutral-400">01</p>
                    <h2 className="font-goldman text-2xl md:text-3xl tracking-tight text-neutral-900">🎨 Sanatçı Biyografisi</h2>
                  </div>

                  <div className="font-urbanist text-[15px] md:text-[16px] text-neutral-700 leading-7 md:leading-8 space-y-4">
                    <p>
                      1950 yılında Silifke&apos;de doğdu. Liseyi Silifke&apos;de
                      tamamladıktan sonra Mersin Kız Öğretmen Okulu&apos;ndan
                      mezun oldu. Öğretmenlik kariyerine devam ederken yüksek
                      lisansını tamamladı ve 15 yıl süren öğretmenlik görevinin
                      ardından resim çalışmalarına başladı.
                    </p>
                    <p>
                      Kayihan Keskinok Resim Atölyesi&apos;nde dört yıl eğitim
                      aldıktan sonra Ankara Beyaz Sanat Galerisi&apos;ni kurdu.
                      Daha sonra Sabri Akça ile Ankara Beyaz Sanat
                      Atölyesi&apos;nde çalışmalarını sürdürdü. Ardından Hikmet
                      Çetinkaya&apos;nın özel ders ve atölye çalışmalarına
                      katılarak sanat hayatına devam etti.
                    </p>
                    <p>
                      Yıllar içinde birçok kişisel ve karma sergide yer aldı.
                      Sanat yolculuğuna ilham veren ve desteğini esirgemeyen
                      hocası Kayihan Keskinok&apos;a teşekkürlerini sunmaktadır.
                    </p>

                    {/* NEW CURATORIAL PARAGRAPH */}
                    <p>
                      Sevim Güleç’in sanat pratiği, yıllar içinde teknik ve
                      ifade bakımından belirgin bir dönüşüm geçirmiştir. Sanat
                      hayatına klasik yağlıboya ile başlamış; özellikle manolya
                      tablolarındaki detay, ışık ve duygu yoğunluğuyla
                      tanınmıştır. Bu dönem, sanatçının doğaya ve estetik
                      zarafete olan bakışını yansıtan güçlü bir temel oluşturur.
                      2023’ten itibaren ise akrilik dökme (pouring) tekniğine
                      yönelerek daha akışkan, sezgisel ve deneysel bir anlatım
                      dili geliştirmiş; böylece resim yüzeyinde tesadüf, kontrol
                      ve renk hareketi arasındaki ilişkiyi keşfetmeye
                      başlamıştır. Güleç’in eserleri bugün, geleneğin birikimiyle
                      modern bir özgürleşmenin katmanlı bir bileşimini sunmaktadır.
                    </p>
                  </div>

                  {/* Artistic evolution gallery */}
                  <div className="mt-8 space-y-5">
                    <p className="font-urbanist text-[11px] uppercase tracking-[0.3em] text-neutral-400">
                      Sanatsal Yolculuk
                    </p>

                    <div className="grid gap-6 md:grid-cols-3">
                      <figure className="group relative overflow-hidden rounded-2xl border bg-neutral-50/80 shadow-sm hover:-translate-y-1 transition-transform duration-500 ease-out">
                        <div className="relative aspect-[4/5] overflow-hidden">
                          <Image src="/manolya2.JPG" alt="Eski yağlıboya" fill className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
                        </div>
                        <figcaption className="px-4 py-3">
                          <p className="font-urbanist text-xs uppercase tracking-[0.18em] text-neutral-500">2010</p>
                          <p className="mt-1 font-urbanist text-sm text-neutral-800">Yağlıboya</p>
                        </figcaption>
                      </figure>

                      <figure className="group relative overflow-hidden rounded-2xl border bg-neutral-50/80 shadow-sm hover:-translate-y-1 transition-transform duration-500 ease-out">
                        <div className="relative aspect-[4/5] overflow-hidden">
                          <Image src="/akrilik-manolya-50-70.jpg" alt="Akrilik ve yağlıboya" fill className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
                        </div>
                        <figcaption className="px-4 py-3">
                          <p className="font-urbanist text-xs uppercase tracking-[0.18em] text-neutral-500">
                            2024 &amp; 2025
                          </p>
                          <p className="mt-1 font-urbanist text-sm text-neutral-800">
                            Akrilik &amp; Yağlıboya
                          </p>
                        </figcaption>
                      </figure>

                      <figure className="group relative overflow-hidden rounded-2xl border bg-neutral-50/80 shadow-sm hover:-translate-y-1 transition-transform duration-500 ease-out">
                        <div className="relative aspect-[4/5] overflow-hidden">
                          <Image src="/akrilik-40x40.jpg" alt="Akrilik" fill className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
                        </div>
                        <figcaption className="px-4 py-3">
                          <p className="font-urbanist text-xs uppercase tracking-[0.18em] text-neutral-500">
                            2025
                          </p>
                          <p className="mt-1 font-urbanist text-sm text-neutral-800">
                            Akrilik
                          </p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </section>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

                {/* 🌊 Sanat Anlayışı */}
                <section className="space-y-5">
                  <div className="space-y-2">
                    <p className="font-urbanist text-[11px] uppercase tracking-[0.3em] text-neutral-400">02</p>
                    <h2 className="font-goldman text-2xl md:text-3xl tracking-tight text-neutral-900">
                      🌊 Sanat Anlayışı
                    </h2>
                  </div>

                  <div className="font-urbanist text-[15px] md:text-[16px] text-neutral-700 leading-7 md:leading-8 space-y-4">
                    <p>
                      Eserlerinde akışkan sanat (Fluid Art / Pouring) tekniğini
                      benimsemektedir. Akışkan boyaların sanatta kullanılmaya
                      başlanmasıyla doğan bu teknik, renklerin doğal akışıyla
                      soyut ve özgün formlar oluşturur.
                    </p>
                    <p>
                      Sanatçı, Osmanlı döneminin ebru sanatı ile Japon Sumi-e
                      mürekkep sanatından esinlenerek modern akrilik pouring
                      tekniğini kullanır. Eserlerinde renklerin
                      rastlantısallığıyla doğanın enerjisini birleştirir; her
                      bir tablo, kendine özgü bir denge ve duygusal akış sunar.
                    </p>
                  </div>
                </section>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

                {/* 🌸 Neden Manolya? */}
                <section className="space-y-5">
                  <div className="space-y-2">
                    <p className="font-urbanist text-[11px] uppercase tracking-[0.3em] text-neutral-400">
                      03
                    </p>
                    <h2 className="font-goldman text-2xl md:text-3xl tracking-tight text-neutral-900">
                      Neden Manolya?
                    </h2>
                  </div>

                  <div className="font-urbanist text-[15px] md:text-[16px] text-neutral-700 leading-7 md:leading-8 space-y-4">
                    <p>
                      Manolya çiçeği, aşkın asaleti, temizliği ve saf
                      güzelliğini temsil eder. Alçak gönüllülük, sezgi, iç
                      huzur ve sadakatle ilişkilendirilir. Bulunduğu ortama
                      şans getirdiğine inanılır; benzersiz kokusuyla büyüleyici,
                      zamansız bir çiçektir.
                    </p>
                    <p>
                      Günlerden bir gün, manolya çiçeği hemen yanındaki açelya
                      çiçeğine âşık olur. Ancak bu aşk karşılık bulmaz. Aşk
                      acısı çeken manolyanın kalbi zamanla ikiye ayrılarak
                      vücudundan kopar — böylece iki ağaç oluşur:
                    </p>
                    <p className="italic text-neutral-600">
                      “Bunlar, uzun ve güçlü manolya ile beyaz ve kırılgan
                      yıldızlı saray manolyasıdır.”
                    </p>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
