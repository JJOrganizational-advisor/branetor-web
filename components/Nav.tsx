"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Nav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const otherLocale = locale === "es" ? "en" : "es";

  return (
    <nav className="flex items-center justify-between px-8 py-7 max-w-[1080px] mx-auto">
      <Link href={`/${locale}`} className="font-display font-semibold text-[28px] tracking-tight">
        Brane<span className="text-forest">tor</span>
      </Link>
      <div className="flex items-center gap-7 text-sm">
        <Link href={`/${locale}/como-funciona`} className="opacity-75 hover:opacity-100">
          {t("howItWorks")}
        </Link>
        <Link href={`/${locale}/para-quien`} className="opacity-75 hover:opacity-100">
          {t("whoFor")}
        </Link>
        <Link href={`/${locale}/precios`} className="opacity-75 hover:opacity-100">
          {t("pricing")}
        </Link>
        <Link
          href={`/${otherLocale}`}
          className="font-mono text-xs tracking-wide opacity-60 hover:opacity-100"
        >
          {otherLocale === "en" ? "EN" : "ES"}
        </Link>
        <a
          href={`https://app.branetor.com/${locale}/login`}
          className="border border-ink rounded px-4 py-2 text-sm"
        >
          {t("login")}
        </a>
      </div>
    </nav>
  );
}
