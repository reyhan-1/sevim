'use client';

import { useState } from "react";
import Link from "next/link";

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
      // If you add the API route below, this will send the message to your email service.
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Gönderim başarısız görünüyor.");
      setState("success");
      form.reset();
    } catch (err: any) {
      setErrorMsg(err?.message || "Bilinmeyen bir hata oluştu.");
      setState("error");
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
        <h1 className="font-goldman text-4xl sm:text-5xl text-gray-900 text-center">
          İletişim
        </h1>
        <p className="mt-4 text-center text-base sm:text-lg text-gray-600 font-urbanist">
          Sorularınız, sergi ve satın alma talepleriniz için formu doldurabilir
          veya Instagram’dan ulaşabilirsiniz.
        </p>
      </section>

      {/* Grid: Instagram + Form */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Instagram / Info */}
          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h2 className="font-goldman text-2xl text-gray-900 mb-3">Instagram</h2>
              <p className="text-gray-700 font-urbanist leading-relaxed">
                <span className="block">🎨 Akrilik Dökme · Acrylic Pouring</span>
                <span className="block">🌊 Akışkan Sanat · Fluid Art</span>
              </p>
              <a
                href="https://www.instagram.com/sevimgulecart"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-cyan-600 hover:text-cyan-800 font-goldman text-lg"
              >
                @sevimgulecart
              </a>

              <div className="mt-8 text-sm text-gray-500 font-urbanist">
                <p>Ankara, Türkiye</p>
                <p className="mt-1">Yanıt süresi: 24–48 saat</p>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-gray-200 p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-1 font-urbanist">Ad Soyad</label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Adınız Soyadınız"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1 font-urbanist">E-posta</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="ornek@mail.com"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm text-gray-700 mb-1 font-urbanist">Konu</label>
                  <input
                    name="subject"
                    type="text"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Konu"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm text-gray-700 mb-1 font-urbanist">Mesaj</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Mesajınız..."
                  />
                </div>
              </div>

              {/* Status */}
              {state === "error" && (
                <p className="mt-4 text-sm text-red-600">{errorMsg}</p>
              )}
              {state === "success" && (
                <p className="mt-4 text-sm text-green-600">
                  Teşekkürler! Mesajınız alındı. En kısa sürede geri dönüş yapacağım.
                </p>
              )}

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-gray-900 text-white hover:bg-gray-800 transition disabled:opacity-60"
                >
                  {state === "submitting" ? "Gönderiliyor..." : "Mesaj Gönder"}
                </button>

                {/* Fallback: direct mail if needed */}
                <a
                  href="mailto:hello@example.com?subject=İletişim%20Talebi%20-%20Sevim%20Güleç"
                  className="text-sm text-gray-600 hover:text-gray-900 underline"
                >
                  E-posta ile gönder
                </a>
              </div>
            </form>

            <p className="mt-4 text-xs text-gray-500 font-urbanist">
              Bu form kişisel verilerinizi yalnızca talebinizi yanıtlamak için kullanır.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
