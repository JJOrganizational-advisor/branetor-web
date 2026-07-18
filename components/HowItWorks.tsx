import { useTranslations } from "next-intl";

export default function HowItWorks() {
  const t = useTranslations("how");

  const cards = [
    { num: "01–02", title: t("card1Title"), body: t("card1Body") },
    { num: "03–04", title: t("card2Title"), body: t("card2Body") },
    { num: "05–09", title: t("card3Title"), body: t("card3Body") },
  ];

  return (
    <section className="max-w-[1080px] mx-auto px-8 pb-20 border-t border-ink/10 mt-2">
      <div className="flex justify-between items-baseline pt-11 mb-7">
        <h2 className="font-display font-medium text-2xl">{t("heading")}</h2>
        <span className="font-mono text-xs text-teal">{t("range")}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map((c) => (
          <div key={c.num} className="border border-ink/10 rounded-md p-5 px-5">
            <div className="font-mono text-xs text-gold mb-2.5">{c.num}</div>
            <h3 className="font-display font-medium text-[17px] mb-2">{c.title}</h3>
            <p className="text-[13.5px] text-ink/65 leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
