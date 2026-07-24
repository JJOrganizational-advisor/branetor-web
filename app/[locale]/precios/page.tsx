import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaButton from "@/components/CtaButton";

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
      <section className="max-w-[1080px] mx-auto px-8 py-14">
        <h1 className="font-display font-medium text-3xl mb-4">{t("title")}</h1>
        <p className="text-ink/70 max-w-[560px] mb-8">{t("intro")}</p>
        <CtaButton />
      </section>
      <Footer />
    </main>
  );
}
