import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ParaQuienPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = useTranslations("whoForPage");

  const segments = ["seg1", "seg2", "seg3"] as const;

  return (
    <main>
      <Nav />
      <section className="max-w-[1080px] mx-auto px-8 pt-14 pb-4">
        <h1 className="font-display font-medium text-3xl mb-4">{t("title")}</h1>
        <p className="text-ink/70 max-w-[560px] mb-2">{t("intro")}</p>
        <p className="text-sm text-teal">{t("futureNote")}</p>
      </section>

      <section className="max-w-[1080px] mx-auto px-8 py-10">
        <h2 className="font-display font-medium text-xl mb-6">
          {t("segmentsHeading")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {segments.map((s) => (
            <div key={s} className="border border-ink/10 rounded-md p-5">
              <h3 className="font-display font-medium text-[17px] mb-2">
                {t(`${s}Title`)}
              </h3>
              <p className="text-[13.5px] text-ink/65 leading-relaxed">
                {t(`${s}Desc`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1080px] mx-auto px-8 pb-16">
        <div className="bg-forest-dark rounded-lg p-7">
          <div className="font-mono text-[11px] tracking-wide uppercase text-paper/50 mb-3">
            {t("caseHeading")}
          </div>
          <p className="text-paper/90 text-[15px] leading-relaxed max-w-[620px] mb-3">
            {t("caseBody")}
          </p>
          <p className="text-paper/45 text-xs italic">{t("caseNote")}</p>
        </div>

        <button className="bg-forest text-paper rounded px-6 py-3.5 text-[15px] font-medium mt-8">
          {t("cta")}
        </button>
      </section>

      <Footer />
    </main>
  );
}
