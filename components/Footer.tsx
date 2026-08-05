import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="border-t border-ink/10 py-10 px-8">
      <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-ink/60">
        <div>
          <span className="font-display font-semibold">
            Brane<span className="text-forest">tor</span>
          </span>{" "}
          — {t("tagline")}
        </div>
        <div className="flex gap-4">
          <Link href={`/${locale}/privacidad`} className="hover:text-forest hover:underline">
            {t("privacyLink")}
          </Link>
          <Link href={`/${locale}/terminos`} className="hover:text-forest hover:underline">
            {t("termsLink")}
          </Link>
        </div>
        <div>© {new Date().getFullYear()} Branetor. {t("rights")}</div>
      </div>
    </footer>
  );
}
