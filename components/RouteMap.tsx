import { useTranslations } from "next-intl";

export default function RouteMap() {
  const t = useTranslations("map");

  return (
    <div className="bg-forest-dark rounded-lg p-7 px-5">
      <div className="font-mono text-[11px] tracking-wide uppercase text-paper/50 mb-1">
        {t("label")}
      </div>
      <svg viewBox="0 0 320 300" width="100%" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M30,20 C90,40 20,80 70,105 C120,130 40,150 90,175 C140,200 70,215 110,240 C150,265 190,255 230,275"
          fill="none"
          stroke="#3C7A82"
          strokeWidth="1.5"
          strokeDasharray="3,4"
          opacity="0.7"
        />
        <g fontFamily="var(--font-plex-mono)" fontSize="9">
          <circle cx="30" cy="20" r="4.5" fill="#E3A438" />
          <text x="42" y="24" fill="#FBFAF6" opacity="0.9">
            {t("m1")}
          </text>

          <circle cx="70" cy="105" r="4" fill="#3C7A82" />
          <text x="82" y="109" fill="#FBFAF6" opacity="0.75">
            {t("m2")}
          </text>

          <circle cx="90" cy="175" r="4" fill="#3C7A82" />
          <text x="102" y="179" fill="#FBFAF6" opacity="0.75">
            {t("m3")}
          </text>

          <circle cx="110" cy="240" r="4" fill="#3C7A82" />
          <text x="122" y="244" fill="#FBFAF6" opacity="0.75">
            {t("m4")}
          </text>

          <text x="200" y="292" fill="#FBFAF6" opacity="0.55">
            {t("m5")}
          </text>
        </g>
      </svg>
    </div>
  );
}
