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

  return (
    <main>
      <Nav />
      <section className="max-w-[1080px] mx-auto px-8 py-14">
        <h1 className="font-display font-medium text-3xl mb-4">{t("title")}</h1>
        <p className="text-ink/70 max-w-[560px]">{t("intro")}</p>
        {/* TODO: segmentos de organización + caso de uso Semillas Urbanas — Paso 4b */}
      </section>
      <Footer />
    </main>
  );
}
