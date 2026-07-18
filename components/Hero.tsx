import { useTranslations } from "next-intl";
import RouteMap from "./RouteMap";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <header className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-12 items-center max-w-[1080px] mx-auto px-8 pt-10 pb-8">
      <div>
        <div className="font-mono text-xs tracking-wide uppercase text-teal mb-4">
          {t("eyebrow")}
        </div>
        <h1 className="font-display font-medium text-4xl md:text-[44px] leading-[1.12] tracking-tight mb-5">
          {t("title")}
        </h1>
        <p className="text-[17px] leading-relaxed text-ink/70 max-w-[440px] mb-8">
          {t("subtitle")}
        </p>
        <div className="flex gap-3.5">
          <button className="bg-forest text-paper rounded px-6 py-3.5 text-[15px] font-medium">
            {t("ctaPrimary")}
          </button>
          <button className="border border-ink/15 rounded px-6 py-3.5 text-[15px]">
            {t("ctaSecondary")}
          </button>
        </div>
      </div>
      <RouteMap />
    </header>
  );
}
