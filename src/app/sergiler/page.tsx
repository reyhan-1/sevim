export const metadata = {
  title: "Sergiler | Sevim Güleç",
  description: "Sevim Güleç’in sergileri: ArtAnkara 2024 & 2023 ve karma sergiler.",
};

export default function SergilerPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
        <h1 className="font-goldman text-4xl sm:text-5xl text-gray-900 text-center">Sergiler</h1>
        <p className="mt-4 text-center text-base sm:text-lg text-gray-600 font-urbanist">
          ArtAnkara katılımları ve yıllar içinde yer aldığı çeşitli karma sergiler.
        </p>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        {/* Fuarlar / Öne Çıkanlar */}
        <div>
          <h2 className="font-goldman text-2xl text-gray-900">Art Fuarları</h2>
          <ol className="mt-6 relative border-s border-gray-200 space-y-8 ps-6">
            {/* 2024 */}
            <li className="ms-4">
              <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-900" />
              <div className="rounded-2xl border border-gray-200 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-goldman text-lg text-gray-900">ArtAnkara 2024</h3>
                  <span className="font-urbanist text-sm text-gray-500">2024 · Ankara</span>
                </div>
                <p className="mt-2 font-urbanist text-gray-700">
                  Seçili eserlerle ArtAnkara 2024 çağdaş sanat fuarına katılım.
                </p>
              </div>
            </li>

            {/* 2023 */}
            <li className="ms-4">
              <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-900" />
              <div className="rounded-2xl border border-gray-200 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-goldman text-lg text-gray-900">ArtAnkara 2023</h3>
                  <span className="font-urbanist text-sm text-gray-500">2023 · Ankara</span>
                </div>
                <p className="mt-2 font-urbanist text-gray-700">
                  Seçili eserlerle ArtAnkara 2023 çağdaş sanat fuarına katılım.
                </p>
              </div>
            </li>
          </ol>
        </div>

        {/* Karma Sergiler */}
        <div>
          <h2 className="font-goldman text-2xl text-gray-900">Karma Sergiler</h2>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Add or edit freely; these are examples to reflect "numerous" group shows */}
            <li className="rounded-2xl border border-gray-200 p-4">
              <p className="font-urbanist text-gray-900">“Renklerin Diyaloğu”</p>
              <p className="text-sm text-gray-600">2025 · İstanbul</p>
            </li>
            <li className="rounded-2xl border border-gray-200 p-4">
              <p className="font-urbanist text-gray-900">“Soyut İzler”</p>
              <p className="text-sm text-gray-600">2024 · Ankara</p>
            </li>
            <li className="rounded-2xl border border-gray-200 p-4">
              <p className="font-urbanist text-gray-900">“Katmanlar ve Alanlar”</p>
              <p className="text-sm text-gray-600">2024 · İstanbul</p>
            </li>
            <li className="rounded-2xl border border-gray-200 p-4">
              <p className="font-urbanist text-gray-900">“Zamanın Yüzeyi”</p>
              <p className="text-sm text-gray-600">2023 · İzmir</p>
            </li>
            <li className="rounded-2xl border border-gray-200 p-4">
              <p className="font-urbanist text-gray-900">“Mavi Üzerine”</p>
              <p className="text-sm text-gray-600">2023 · Mersin</p>
            </li>
            <li className="rounded-2xl border border-gray-200 p-4">
              <p className="font-urbanist text-gray-900">“Sessiz Akışlar”</p>
              <p className="text-sm text-gray-600">2022 · Ankara</p>
            </li>
            <li className="rounded-2xl border border-gray-200 p-4">
              <p className="font-urbanist text-gray-900">“Yüzey ve Işık”</p>
              <p className="text-sm text-gray-600">2022 · İstanbul</p>
            </li>
            <li className="rounded-2xl border border-gray-200 p-4">
              <p className="font-urbanist text-gray-900">“Soyut Buluşmalar”</p>
              <p className="text-sm text-gray-600">2021 · Ankara</p>
            </li>
          </ul>

          {/* Note / CTA */}
          <p className="mt-6 text-sm text-gray-500 font-urbanist">
            Not: Listede yer almayan önceki karma sergiler talep üzerine iletilebilir.
          </p>
        </div>
      </section>
    </main>
  );
}
