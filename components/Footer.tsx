import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-ink/10 py-10 px-8">
      <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row justify-between gap-3 text-sm text-ink/60">
        <div>
          <span className="font-display font-semibold">
            Brane<span className="text-forest">tor</span>
          </span>{" "}
          — {t("tagline")}
        </div>
        <div>© {new Date().getFullYear()} Branetor. {t("rights")}</div>
      </div>
    </footer>
  );
}
