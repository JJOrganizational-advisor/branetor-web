"use client";

import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav() {
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const otherLocale = locale === "es" ? "en" : "es";
  const pathname = usePathname();
  const pathWithoutLocale = pathname.replace(/^\/(es|en)/, "") || "";
  const otherLocaleHref = `/${otherLocale}${pathWithoutLocale}`;
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setMenuOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/como-funciona`, label: t("howItWorks") },
    { href: `/${locale}/para-quien`, label: t("whoFor") },
    { href: `/${locale}/precios`, label: t("pricing") },
    { href: `/${locale}/sobre-nosotros`, label: t("about") },
    { href: `/${locale}/contacto`, label: t("contact") },
  ];

  return (
    <nav className="max-w-[1080px] mx-auto px-8 py-7">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <Link
            href={`/${locale}`}
            className="font-display font-semibold text-[28px] tracking-tight leading-none"
          >
            Brane<span className="text-forest">tor</span>
          </Link>
          <span className="font-mono text-[11px] text-ink/40 mt-1">
            {tCommon("credit")}
          </span>
        </div>

        {/* Menú completo — solo en pantallas medianas en adelante */}
        <div className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="opacity-75 hover:opacity-100">
              {l.label}
            </Link>
          ))}
          <Link
            href={otherLocaleHref}
            className="font-mono text-xs tracking-wide opacity-60 hover:opacity-100"
          >
            {otherLocale === "en" ? "EN" : "ES"}
          </Link>
          <a
            href={`https://app.branetor.com${locale === "en" ? "/en" : ""}`}
            className="border border-ink rounded px-4 py-2 text-sm"
          >
            {t("login")}
          </a>
        </div>

        {/* Botón hamburguesa — solo visible en pantallas angostas */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
          aria-label={locale === "en" ? "Open menu" : "Abrir menú"}
        >
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="block h-0.5 w-6 bg-ink" />
        </button>
      </div>

      {/* Panel desplegable — solo en móvil, solo cuando está abierto */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 pt-6 pb-2 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="opacity-75 hover:opacity-100"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={otherLocaleHref}
            onClick={() => setMenuOpen(false)}
            className="font-mono text-xs tracking-wide opacity-60"
          >
            {otherLocale === "en" ? "EN" : "ES"}
          </Link>
          <a
            href={`https://app.branetor.com${locale === "en" ? "/en" : ""}`}
            className="border border-ink rounded px-4 py-2 text-sm text-center"
          >
            {t("login")}
          </a>
        </div>
      )}
    </nav>
  );
}
