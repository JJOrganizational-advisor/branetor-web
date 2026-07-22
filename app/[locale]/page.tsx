import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProductPreview from "@/components/ProductPreview";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import { setRequestLocale } from "next-intl/server";

export default function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <main>
      <Nav />
      <Hero />
      <ProductPreview />
      <HowItWorks />
      <Footer />
    </main>
  );
}
