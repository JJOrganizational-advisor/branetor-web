import { useTranslations } from "next-intl";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ComoFuncionaPage() {
  const t = useTranslations("howItWorksPage");

  return (
    <main>
      <Nav />
      <section className="max-w-[1080px] mx-auto px-8 py-14">
        <h1 className="font-display font-medium text-3xl mb-4">{t("title")}</h1>
        <p className="text-ink/70 max-w-[560px]">{t("intro")}</p>
        {/* TODO: línea de tiempo de los 9 módulos con capturas de pantalla — Paso 4b */}
      </section>
      <Footer />
    </main>
  );
}
