import { motion } from "framer-motion";
import { AlarmClock, ArrowLeft, PartyPopper } from "lucide-react";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const TARGET = new Date("2026-09-22T00:00:00").getTime();

const faDigits = (n: number) =>
  String(n)
    .padStart(2, "0")
    .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

export default function Countdown() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, TARGET - now);
  const arrived = diff <= 0;

  const units = [
    { label: "روز", value: Math.floor(diff / 86_400_000) },
    { label: "ساعت", value: Math.floor(diff / 3_600_000) % 24 },
    { label: "دقیقه", value: Math.floor(diff / 60_000) % 60 },
    { label: "ثانیه", value: Math.floor(diff / 1_000) % 60 },
  ];

  return (
    <section className="relative px-6 pb-4 md:pb-8">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-lilac-200 bg-gradient-to-l from-lilac-100 via-white to-blush-100/70 p-8 shadow-xl shadow-lilac-200/50 md:p-12">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-30" />
          <div className="pointer-events-none absolute -start-16 -top-16 h-48 w-48 rounded-full bg-lilac-200/60 blur-3xl" />

          <div className="relative flex flex-wrap items-center justify-between gap-10">
            {/* copy */}
            <div className="max-w-md text-center sm:text-start">
              <span className="inline-flex items-center gap-2 rounded-full bg-lilac-600 px-4 py-1.5 text-xs font-black text-white shadow-md shadow-lilac-300">
                <AlarmClock className="h-3.5 w-3.5" />
                کمپین بازگشت به مدرسه
              </span>
              <h2 className="mt-5 text-2xl font-black leading-[1.35] sm:text-3xl">
                شمارش معکوس تا{" "}
                <span className="marker">اولِ مهر</span>
              </h2>
              <p className="mt-4 text-[13.5px] leading-8 text-mist">
                کالکشن «مهر ۱۴۰۵» با رنگ‌های تازه در راه است؛ اعضای خبرنامه،
                ۲۴ ساعت زودتر از همه دعوت می‌شوند.
              </p>
              {arrived ? (
                <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-mint-100 px-5 py-3 text-sm font-black text-emerald-700">
                  <PartyPopper className="h-4 w-4" />
                  مهر رسید؛ کالکشن جدید منتظر شماست
                </p>
              ) : (
                <a
                  href="#newsletter"
                  className="group mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-lilac-800 active:scale-95"
                >
                  زودتر خبرم کنید
                  <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                </a>
              )}
            </div>

            {/* timer */}
            {!arrived && (
              <div dir="ltr" className="mx-auto flex gap-3 sm:mx-0 sm:gap-4">
                {units.map((u) => (
                  <div
                    key={u.label}
                    className="flex w-[70px] flex-col items-center rounded-2xl border border-lilac-200 bg-white/80 py-4 shadow-md shadow-lilac-200/60 backdrop-blur sm:w-20 sm:py-5"
                  >
                    <motion.span
                      key={u.value}
                      initial={{ y: 8, opacity: 0.3 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-black tabular-nums text-lilac-700 sm:text-3xl"
                    >
                      {faDigits(u.value)}
                    </motion.span>
                    <span className="mt-1.5 text-[10px] font-bold text-mist sm:text-[11px]">
                      {u.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
