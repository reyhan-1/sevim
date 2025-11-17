import PostersGallery from "./PostersGallery";

export const metadata = {
  title: "Sergiler | Sevim Güleç",
  description:
    "Sevim Güleç’in sergileri: ArtAnkara 2025 & 2024, uluslararası fuarlar ve karma sergiler.",
};

export default function SergilerPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ee] text-neutral-900">
      {/* Parallax Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[url('/sevim-bio.JPG')] bg-cover bg-center bg-fixed opacity-20 blur-sm scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f7f3ee] via-[#f7f3ee]/96 to-[#f7f3ee]" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-black/5 bg-white/70 px-4 py-1 text-xs font-urbanist uppercase tracking-[0.28em] text-neutral-500 backdrop-blur">
                <span className="h-[1px] w-6 bg-neutral-400/60" />
                Sergiler
              </div>
              <h1 className="font-goldman text-4xl sm:text-5xl md:text-6xl tracking-tight text-neutral-900 text-left">
                Sergiler
              </h1>
              <p className="max-w-xl font-urbanist text-base sm:text-lg text-neutral-700 leading-relaxed">
                ArtAnkara katılımları, uluslararası fuarlar ve yıllar içinde yer
                aldığı sayısız karma sergi.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-urbanist text-neutral-500">
              <span className="h-px w-10 bg-neutral-400/60" />
              <span className="tracking-[0.22em] uppercase">
                Art Fuarları &amp; Karma Sergiler
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Content Card */}
      <section className="relative -mt-10 pb-24 sm:-mt-16 sm:pb-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 rounded-3xl border border-black/[0.04] bg-white/95 px-6 py-10 shadow-[0_28px_120px_rgba(15,23,42,0.18)] backdrop-blur-sm sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            {/* Art Fuarları */}
            <section>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-urbanist text-[11px] uppercase tracking-[0.3em] text-neutral-400">
                    01
                  </p>
                  <h2 className="mt-1 font-goldman text-2xl md:text-3xl tracking-tight text-neutral-900">
                    Art Fuarları
                  </h2>
                </div>
              </div>

              <ol className="mt-8 relative space-y-8 border-s border-neutral-200 ps-6">
                {/* 2025 ArtAnkara */}
                <li className="relative ms-4">
                  <div className="absolute -start-[1.38rem] top-2 h-3 w-3 rounded-full bg-neutral-900" />
                  <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/70 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-goldman text-lg text-neutral-900">
                        ArtAnkara 2025
                      </h3>
                      <span className="font-urbanist text-sm text-neutral-500">
                        2025 · Ankara
                      </span>
                    </div>
                    <p className="mt-2 font-urbanist text-[15px] leading-7 text-neutral-700">
                      Seçili eserlerle ArtAnkara 2025 çağdaş sanat fuarına
                      katılım (Sergimiz.com Sanat Galerisi).
                    </p>
                  </div>
                </li>

                {/* 2024 ArtAnkara */}
                <li className="relative ms-4">
                  <div className="absolute -start-[1.38rem] top-2 h-3 w-3 rounded-full bg-neutral-900" />
                  <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/70 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-goldman text-lg text-neutral-900">
                        ArtAnkara 2024
                      </h3>
                      <span className="font-urbanist text-sm text-neutral-500">
                        2024 · Ankara
                      </span>
                    </div>
                    <p className="mt-2 font-urbanist text-[15px] leading-7 text-neutral-700">
                      Fırça Sanat Galerisi standında ArtAnkara 2024 çağdaş sanat
                      fuarına katılım.
                    </p>
                  </div>
                </li>

                {/* 2025 ArtContact İstanbul */}
                <li className="relative ms-4">
                  <div className="absolute -start-[1.38rem] top-2 h-3 w-3 rounded-full bg-neutral-900" />
                  <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/70 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-goldman text-lg text-neutral-900">
                        ArtContact İstanbul 2025
                      </h3>
                      <span className="font-urbanist text-sm text-neutral-500">
                        2025 · İstanbul
                      </span>
                    </div>
                    <p className="mt-2 font-urbanist text-[15px] leading-7 text-neutral-700">
                      5. Uluslararası Çağdaş Sanat Fuarı kapsamında Sergimiz.com
                      Sanat Galerisi ile karma sergide yer aldı.
                    </p>
                  </div>
                </li>
              </ol>
            </section>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

            {/* Karma Sergiler – short note only */}
            <section>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-urbanist text-[11px] uppercase tracking-[0.3em] text-neutral-400">
                    02
                  </p>
                  <h2 className="mt-1 font-goldman text-2xl md:text-3xl tracking-tight text-neutral-900">
                    Karma Sergiler
                  </h2>
                </div>
              </div>

              <p className="mt-5 max-w-2xl font-urbanist text-sm text-neutral-600 leading-relaxed">
                Sevim Güleç, Türkiye ve yurtdışında sayısız karma sergi ve
                proje içinde yer almıştır. Detaylı sergi listesi, talep eden
                galeriler ve koleksiyonerlerle ayrıca paylaşılmaktadır.
              </p>
            </section>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

            {/* Sergi Afişleri with lightbox */}
            <section>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-urbanist text-[11px] uppercase tracking-[0.3em] text-neutral-400">
                    03
                  </p>
                  <h2 className="mt-1 font-goldman text-2xl md:text-3xl tracking-tight text-neutral-900">
                    Sergi Afişleri
                  </h2>
                </div>
              </div>

              <p className="mt-3 max-w-2xl font-urbanist text-sm text-neutral-600">
                Fuarlar ve karma sergilerden seçilmiş afiş ve davetiyeler. Afişe
                tıklayarak daha büyük görebilirsiniz.
              </p>

              <div className="mt-8">
                <PostersGallery />
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
