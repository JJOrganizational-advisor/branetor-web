"use client";

import { useTranslations } from "next-intl";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ContactoPage() {
  const t = useTranslations("contactPage");

  return (
    <main>
      <Nav />
      <section className="max-w-[560px] mx-auto px-8 py-14">
        <h1 className="font-display font-medium text-3xl mb-4">{t("title")}</h1>
        <p className="text-ink/70 mb-8">{t("intro")}</p>

        <form className="flex flex-col gap-4">
          <input
            className="border border-ink/15 rounded px-4 py-3 text-sm bg-transparent"
            placeholder={t("name")}
          />
          <input
            className="border border-ink/15 rounded px-4 py-3 text-sm bg-transparent"
            placeholder={t("org")}
          />
          <input
            className="border border-ink/15 rounded px-4 py-3 text-sm bg-transparent"
            placeholder={t("email")}
            type="email"
          />
          <textarea
            className="border border-ink/15 rounded px-4 py-3 text-sm bg-transparent min-h-[120px]"
            placeholder={t("message")}
          />
          <button
            type="button"
            className="bg-forest text-paper rounded px-6 py-3.5 text-[15px] font-medium self-start"
          >
            {t("send")}
          </button>
        </form>
        {/* TODO: conectar envío real (API route + email o Supabase) — Paso 4b */}
      </section>
      <Footer />
    </main>
  );
}
