"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaButton from "@/components/CtaButton";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdaqpolb";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactoPage() {
  const t = useTranslations("contactPage");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main>
      <Nav />
      <section className="max-w-[560px] mx-auto px-8 py-14">
        <h1 className="font-display font-medium text-3xl mb-4">{t("title")}</h1>
        <p className="text-ink/70 mb-8">{t("intro")}</p>

        {status === "success" ? (
          <div className="border border-forest/30 bg-forest/5 rounded-md p-5 text-forest text-sm">
            {t("successMessage")}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              required
              className="border border-ink/15 rounded px-4 py-3 text-sm bg-transparent"
              placeholder={t("name")}
            />
            <input
              name="organization"
              required
              className="border border-ink/15 rounded px-4 py-3 text-sm bg-transparent"
              placeholder={t("org")}
            />
            <input
              name="email"
              required
              className="border border-ink/15 rounded px-4 py-3 text-sm bg-transparent"
              placeholder={t("email")}
              type="email"
            />
            <textarea
              name="message"
              required
              className="border border-ink/15 rounded px-4 py-3 text-sm bg-transparent min-h-[120px]"
              placeholder={t("message")}
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-forest text-paper rounded px-6 py-3.5 text-[15px] font-medium self-start disabled:opacity-60"
            >
              {status === "sending" ? t("sending") : t("send")}
            </button>
            {status === "error" && (
              <p className="text-sm text-red-700">{t("errorMessage")}</p>
            )}
          </form>
        )}

        <div className="border-t border-ink/10 mt-10 pt-8">
          <CtaButton />
        </div>
      </section>
      <Footer />
    </main>
  );
}
