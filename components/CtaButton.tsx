import { useLocale, useTranslations } from "next-intl";

export default function CtaButton() {
  const t = useTranslations("common");
  const locale = useLocale();

  return (
    <a
      href={`https://app.branetor.com${locale === "en" ? "/en" : ""}`}
      className="bg-forest text-paper rounded px-6 py-3.5 text-[15px] font-medium inline-block"
    >
      {t("cta")}
    </a>
  );
}
