import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaButton from "@/components/CtaButton";

export default function SobreNosotrosPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  const t = useTranslations("aboutPage");

  return (
    <main>
      <Nav />
      <section className="max-w-[1080px] mx-auto px-8 py-14">
        <h1 className="font-display font-medium text-3xl mb-5">{t("title")}</h1>
        <p className="text-ink/70 max-w-[560px] mb-4">{t("intro")}</p>
        <p className="text-ink/70 max-w-[560px] mb-8">{t("body")}</p>
        <CtaButton />
      </section>
      <Footer />
    </main>
  );
}
