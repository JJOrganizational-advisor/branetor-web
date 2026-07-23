import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ComoFuncionaPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  const t = useTranslations("howItWorksPage");

  const modules = [
    { key: "m1", accent: "gold" },
    { key: "m2", accent: "teal" },
    { key: "m3", accent: "teal" },
    { key: "m4", accent: "teal" },
    { key: "m5", accent: "forest" },
    { key: "m6", accent: "forest" },
    { key: "m7", accent: "forest" },
    { key: "m8", accent: "forest" },
    { key: "m9", accent: "gold" },
  ] as const;

  const accentClass: Record<string, string> = {
    gold: "text-gold",
    teal: "text-teal",
    forest: "text-forest",
  };

  return (
    <main>
      <Nav />
      <section className="max-w-[720px] mx-auto px-8 pt-14 pb-4">
        <h1 className="font-display font-medium text-3xl mb-4">{t("title")}</h1>
        <p className="text-ink/70">{t("intro")}</p>
      </section>

      <section className="max-w-[720px] mx-auto px-8 py-10">
        <ol className="flex flex-col">
          {modules.map((m, i) => (
            <li
              key={m.key}
              className="flex gap-5 pb-8 border-l border-ink/10 pl-6 relative last:pb-0"
            >
              <span
                className={`absolute -left-[9px] top-0 font-mono text-[11px] ${accentClass[m.accent]} bg-paper`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-0.5">
                <h3 className="font-display font-medium text-lg mb-1.5">
                  {t(`${m.key}Title`)}
                </h3>
                <p className="text-sm text-ink/65 leading-relaxed max-w-[520px]">
                  {t(`${m.key}Desc`)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="max-w-[720px] mx-auto px-8 pb-16">
        <div className="border border-ink/10 rounded-md p-6 mb-8">
          <p className="text-sm text-ink/70 leading-relaxed">{t("contextNote")}</p>
        </div>
        <button className="bg-forest text-paper rounded px-6 py-3.5 text-[15px] font-medium">
          {t("cta")}
        </button>
      </section>
      <Footer />
    </main>
  );
}
