"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactClient() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Gönderim başarısız görünüyor.");
      setState("success");
      form.reset();
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "Bilinmeyen bir hata oluştu.";
      setErrorMsg(msg);
      setState("error");
    }
  }

  return (
    <main className="min-h-screen bg-[#f7f3ee] text-neutral-900">
      {/* Parallax Hero */}
      <section className="relative overflow-hidden">
        {/* Parallax background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[url('/sevim-bio.JPG')] bg-cover bg-center bg-fixed opacity-30 blur-sm scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f7f3ee] via-[#f7f3ee]/96 to-[#f7f3ee]" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-black/5 bg-white/70 px-4 py-1 text-xs font-urbanist uppercase tracking-[0.28em] text-neutral-500 backdrop-blur">
                <span className="h-[1px] w-6 bg-neutral-400/60" />
                İletişim
              </div>
              <h1 className="font-goldman text-4xl sm:text-5xl md:text-6xl tracking-tight text-neutral-900">
                İletişim
              </h1>
              <p className="max-w-xl font-urbanist text-base sm:text-lg text-neutral-700 leading-relaxed">
                Sorularınız, sergi ve satın alma talepleriniz için formu
                doldurabilir veya Instagram’dan ulaşabilirsiniz.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-urbanist text-neutral-500">
              <span className="h-px w-10 bg-neutral-400/60" />
              <span className="tracking-[0.22em] uppercase">
                Sanatçı İletişimi
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Content Card */}
      <section className="relative -mt-10 pb-24 sm:-mt-16 sm:pb-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-black/[0.04] bg-white/95 shadow-[0_28px_120px_rgba(15,23,42,0.18)] backdrop-blur-sm">
            <div className="grid grid-cols-1 gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:px-14 lg:py-16">
              {/* Instagram / Info */}
              <aside className="space-y-8">
                <div className="space-y-4">
                  <h2 className="font-goldman text-2xl md:text-3xl tracking-tight text-neutral-900">
                    Instagram
                  </h2>
                  <p className="font-urbanist text-[15px] text-neutral-700 leading-7">
                    <span className="block">
                      🎨 Akrilik Dökme · Acrylic Pouring
                    </span>
                    <span className="block">
                      🌊 Akışkan Sanat · Fluid Art
                    </span>
                  </p>
                  <a
                    href="https://www.instagram.com/sevimgulecart"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center font-goldman text-lg text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900"
                  >
                    @sevimgulecart
                  </a>
                  <a
                      href="mailto:hello@example.com?subject=İletişim%20Talebi%20-%20Sevim%20Güleç"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center font-goldman text-lg text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900"
                  >
                    sevimgulecart@gmail.com
                  </a>
                </div>

                <div className="h-px w-16 bg-neutral-200" />

                <div className="space-y-2 font-urbanist text-sm text-neutral-600">
                  <p>Ankara, Türkiye</p>
                  <p className="text-xs text-neutral-500">
                    Çalışmalar ve sergi talepleri için doğrudan mesaj veya form
                    üzerinden iletişime geçebilirsiniz.
                  </p>
                </div>
              </aside>

              {/* Form */}
              <div className="lg:col-span-1">
                <form
                  onSubmit={onSubmit}
                  className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 px-5 py-6 sm:px-7 sm:py-8"
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-urbanist text-neutral-700">
                        Ad Soyad
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 font-urbanist text-sm text-neutral-900 outline-none ring-0 transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/60"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-urbanist text-neutral-700">
                        E-posta
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 font-urbanist text-sm text-neutral-900 outline-none ring-0 transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/60"
                        placeholder="ornek@mail.com"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="mb-1 block text-sm font-urbanist text-neutral-700">
                        Konu
                      </label>
                      <input
                        name="subject"
                        type="text"
                        className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 font-urbanist text-sm text-neutral-900 outline-none ring-0 transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/60"
                        placeholder="Konu"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="mb-1 block text-sm font-urbanist text-neutral-700">
                        Mesaj
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 font-urbanist text-sm text-neutral-900 outline-none ring-0 transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/60"
                        placeholder="Mesajınız..."
                      />
                    </div>
                  </div>

                  {/* Status */}
                  {state === "error" && (
                    <p className="mt-4 text-sm font-urbanist text-red-600">
                      {errorMsg}
                    </p>
                  )}
                  {state === "success" && (
                    <p className="mt-4 text-sm font-urbanist text-emerald-600">
                      Teşekkürler! Mesajınız alındı. En kısa sürede geri dönüş
                      yapacağım.
                    </p>
                  )}

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button
                      type="submit"
                      disabled={state === "submitting"}
                      className="inline-flex items-center justify-center rounded-full border border-neutral-900/10 bg-neutral-900 px-6 py-3 text-sm font-medium text-neutral-50 shadow-sm transition-all duration-200 hover:-translate-y-[1px] hover:bg-white hover:text-neutral-900 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {state === "submitting"
                        ? "Gönderiliyor..."
                        : "Mesaj Gönder"}
                    </button>

                    <a
                      href="mailto:hello@example.com?subject=İletişim%20Talebi%20-%20Sevim%20Güleç"
                      className="text-xs font-urbanist text-neutral-600 underline underline-offset-4 hover:text-neutral-900"
                    >
                      Formda sorun yaşarsanız e-posta ile gönderin
                    </a>
                  </div>
                </form>

                <p className="mt-4 text-xs font-urbanist text-neutral-500">
                  Bu form, kişisel verilerinizi yalnızca talebinizi yanıtlamak
                  amacıyla kullanır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
