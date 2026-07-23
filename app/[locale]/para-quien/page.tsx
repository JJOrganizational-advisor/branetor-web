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
        <p className="text-ink/70 max-w-[560px]">{t("intro")}</p>
      </section>

      <section className="max-w-[1080px] mx-auto px-8 py-10">
        <h2 className="font-display font-medium text-xl mb-6">
          {t("segmentsHeading")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {segments.map((s) => (
            <div
              key={s}
              className="border border-forest/30 bg-forest/5 rounded-md p-5"
            >
              <h3 className="font-display font-medium text-[17px] mb-2 text-forest">
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
        <button className="bg-forest text-paper rounded px-6 py-3.5 text-[15px] font-medium">
          {t("cta")}
        </button>
      </section>

      <Footer />
    </main>
  );
}
