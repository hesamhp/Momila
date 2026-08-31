import { Sparkle } from "lucide-react";

const items = [
  "دفترهای پاستلی",
  "خودنویس و روان‌نویس",
  "جامدادی‌های نرم",
  "مداد رنگی و نقاشی",
  "کیف و کوله‌پشتی",
  "استیکر و برچسب",
  "پاک‌کن‌های بامزه",
  "خط‌کش و گونیا",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative z-10 -my-2 overflow-hidden py-8">
      <div
        dir="ltr"
        className="-rotate-1 scale-[1.03] border-y-2 border-lilac-300/60 bg-gradient-to-r from-lilac-600 via-lilac-500 to-lilac-600 py-4 shadow-xl shadow-lilac-300/50"
      >
        <div className="animate-marquee flex w-max items-center gap-9">
          {row.map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-9 whitespace-nowrap text-sm font-extrabold text-white"
            >
              {t}
              <Sparkle className="h-4 w-4 fill-lilac-200 text-lilac-200" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
