import { useTranslations } from "next-intl";
import ModuleSequence from "./ModuleSequence";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <header className="max-w-[1080px] mx-auto px-8 pt-10 pb-8">
      <div className="max-w-[760px] mx-auto text-center flex flex-col items-center">
        <div className="font-mono text-xs tracking-wide uppercase text-teal mb-4">
          {t("eyebrow")}
        </div>
        <h1 className="font-display font-medium tracking-tight mb-5">
          <span className="block text-4xl md:text-[46px] leading-[1.12]">
            {t("title")}
          </span>
          <span className="block text-2xl md:text-[26px] leading-[1.3] text-ink/70 mt-1">
            {t("titleSub")}
          </span>
        </h1>
        <p className="text-[17px] leading-relaxed text-ink/70 mb-6">
          {t("subtitle")}
        </p>
        <div className="flex justify-center">
          <ModuleSequence />
        </div>
        <div className="flex justify-center gap-3.5">
          <button className="bg-forest text-paper rounded px-6 py-3.5 text-[15px] font-medium">
            {t("ctaPrimary")}
          </button>
          <button className="border border-ink/15 rounded px-6 py-3.5 text-[15px]">
            {t("ctaSecondary")}
          </button>
        </div>
      </div>
    </header>
  );
}
