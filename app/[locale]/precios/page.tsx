import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function PreciosPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  const t = useTranslations("pricingPage");

  return (
    <main>
      <Nav />
      <section className="max-w-[1080px] mx-auto px-8 pt-14 pb-4">
        <h1 className="font-display font-medium text-3xl mb-4">{t("title")}</h1>
        <p className="text-ink/70 max-w-[560px]">{t("intro")}</p>
      </section>

      <section className="max-w-[1080px] mx-auto px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="border border-ink/10 rounded-lg p-7 flex flex-col h-full">
            <h3 className="font-display font-medium text-xl mb-1">{t("tier1Name")}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="font-display text-3xl font-medium">{t("tier1Price")}</span>
            </div>
            <ul className="flex flex-col gap-2.5 text-sm text-ink/70 mb-8 flex-1">
              <li>✓ {t("tier1Feat1")}</li>
              <li>✓ {t("tier1Feat2")}</li>
              <li>✓ {t("tier1Feat3")}</li>
            </ul>
            <Link
              href={`https://app.branetor.com/${locale}`}
              className="border border-ink/20 rounded px-5 py-3 text-sm font-medium text-center"
            >
              {t("tier1Cta")}
            </Link>
          </div>

          <div className="border border-ink/10 rounded-lg p-7 flex flex-col h-full">
            <h3 className="font-display font-medium text-xl mb-1">{t("tier2Name")}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="font-display text-3xl font-medium">{t("tier2Price")}</span>
              <span className="text-ink/50 text-sm">{t("tier2Period")}</span>
            </div>
            <ul className="flex flex-col gap-2.5 text-sm text-ink/70 mb-8 flex-1">
              <li>✓ {t("tier2Feat1")}</li>
              <li>✓ {t("tier2Feat2")}</li>
              <li>✓ {t("tier2Feat3")}</li>
              <li>✓ {t("tier2Feat4")}</li>
              <li>✓ {t("tier2Feat5")}</li>
            </ul>
            <Link
              href={`https://app.branetor.com/${locale}`}
              className="border border-ink/20 rounded px-5 py-3 text-sm font-medium text-center"
            >
              {t("tier2Cta")}
            </Link>
          </div>

          <div className="border-2 border-forest rounded-lg p-7 flex flex-col h-full relative bg-forest/5">
            <span className="absolute -top-3 left-7 bg-gold text-ink text-xs font-mono font-medium px-3 py-1 rounded-full">
              {t("tier3Badge")}
            </span>
            <h3 className="font-display font-medium text-xl mb-1">{t("tier3Name")}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="font-display text-3xl font-medium">{t("tier3Price")}</span>
              <span className="text-ink/50 text-sm">{t("tier3Period")}</span>
            </div>
            <ul className="flex flex-col gap-2.5 text-sm text-ink/70 mb-8 flex-1">
              <li>✓ {t("tier3Feat1")}</li>
              <li>✓ {t("tier3Feat2")}</li>
              <li className="text-forest font-medium">{t("tier3Feat3")}</li>
            </ul>
            <Link
              href={`https://app.branetor.com/${locale}`}
              className="bg-forest text-paper rounded px-5 py-3 text-sm font-medium text-center"
            >
              {t("tier3Cta")}
            </Link>
          </div>
        </div>

        <p className="text-sm text-ink/50 mt-8">
          {t("footnote")}{" "}
          <Link href={`/${locale}/contacto`} className="text-forest hover:underline">
            {t("footnoteLink")}
          </Link>
        </p>
      </section>

      <Footer />
    </main>
  );
}
