import { useTranslations } from "next-intl";

export default function ModuleSequence() {
  const t = useTranslations("sequence");
  const keys = ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8", "m9"] as const;

  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 font-mono text-[11px] tracking-wide text-ink/60 mb-8">
      {keys.map((key, i) => (
        <span key={key} className="flex items-center gap-2">
          <span>{t(key)}</span>
          {i < keys.length - 1 && <span className="text-gold">→</span>}
        </span>
      ))}
    </div>
  );
}
