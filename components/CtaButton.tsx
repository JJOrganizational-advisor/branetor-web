import { useTranslations } from "next-intl";

export default function CtaButton() {
  const t = useTranslations("common");

  return (
    <button className="bg-forest text-paper rounded px-6 py-3.5 text-[15px] font-medium">
      {t("cta")}
    </button>
  );
}
