import { motion } from "framer-motion";
import { ArrowLeft, Heart, Sparkles, Star, Truck } from "lucide-react";
import Reveal from "./Reveal";

const stats = [
  { value: "+۱۲۰", label: "محصول اورجینال" },
  { value: "+۱۵ هزار", label: "خانواده‌ی همراه" },
  { value: "٪۹۸", label: "رضایت از خرید" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-44">
      {/* background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 start-[-8rem] h-[30rem] w-[30rem] rounded-full bg-lilac-200/70 blur-3xl" />
        <div className="absolute -end-48 top-24 h-[34rem] w-[34rem] rounded-full bg-lilac-100 blur-3xl" />
        <div className="absolute bottom-[-6rem] start-1/3 h-80 w-80 rounded-full bg-blush-100/80 blur-3xl" />
        <div className="dot-grid absolute inset-x-0 top-0 h-72 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* copy */}
        <div className="text-center lg:text-start">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-lilac-200 bg-white/80 px-4 py-2 text-xs font-bold text-lilac-700 shadow-sm shadow-lilac-100 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-lilac-500" />
              لوازم‌التحریر، این بار به رنگِ رویاها
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-7 text-[2.7rem] font-black leading-[1.18] tracking-tight sm:text-6xl lg:text-[4.1rem]">
              مدرسه را به رنگِ
              <br />
              <span className="marker">رویاها</span> دربیاورید
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-8 text-mist sm:text-base sm:leading-9 lg:mx-0">
              مومیلا با دفترهای پاستلی، نوشت‌افزارهای رنگی و طراحیِ
              کودک‌پسند، خلاقیت را به کلاس درس می‌آورد؛ سبک، مینیمال و
              دوست‌داشتنی، درست مثل کیف مدرسه‌ی رویاییِ بچه‌ها.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="#customers"
                className="group inline-flex items-center gap-2 rounded-full bg-lilac-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-lilac-300 transition hover:bg-lilac-700 hover:shadow-xl hover:shadow-lilac-300 active:scale-95"
              >
                دیدن دوستان مومیلا
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              </a>
              <a
                href="#story"
                className="inline-flex items-center gap-2 rounded-full border border-lilac-200 bg-white/70 px-7 py-4 text-sm font-bold text-lilac-700 backdrop-blur transition hover:border-lilac-400 hover:bg-white active:scale-95"
              >
                <Heart className="h-4 w-4 text-blush-400" />
                داستان مومیلا
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-12 flex items-center justify-center gap-7 sm:gap-11 lg:justify-start">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`text-center lg:text-start ${
                    i > 0 ? "border-s border-lilac-200 ps-7 sm:ps-11" : ""
                  }`}
                >
                  <p className="text-2xl font-black text-lilac-600 sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold text-mist sm:text-xs">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* visual */}
        <Reveal delay={0.18} className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="relative">
            <div className="absolute -inset-5 rounded-b-[3rem] rounded-t-[999px] bg-gradient-to-b from-lilac-300/60 via-lilac-200/50 to-blush-200/50 blur-2xl" />
            <img
              src="/images/hero.jpg"
              alt="ست لوازم‌التحریر پاستلی مومیلا"
              className="relative aspect-[4/5] w-full rounded-b-[2.75rem] rounded-t-[999px] border-[10px] border-white object-cover shadow-2xl shadow-lilac-200"
            />

            {/* floating card: shipping */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -start-3 top-14 sm:-start-8"
            >
              <div className="flex items-center gap-3 rounded-2xl border border-lilac-100 bg-white/90 p-3 pe-5 shadow-xl shadow-lilac-200/70 backdrop-blur">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-lilac-100 text-lilac-600">
                  <Truck className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-extrabold">ارسال رایگان</span>
                  <span className="block text-[11px] font-medium text-mist">
                    خرید بالای ۵۰۰ هزار تومان
                  </span>
                </span>
              </div>
            </motion.div>

            {/* floating card: rating */}
            <motion.div
              animate={{ y: [0, 11, 0] }}
              transition={{
                duration: 5.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -end-2 bottom-16 sm:-end-8"
            >
              <div className="rounded-2xl border border-lilac-100 bg-white/90 p-3.5 px-5 text-center shadow-xl shadow-lilac-200/70 backdrop-blur">
                <div className="flex items-center justify-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-butter-300 text-butter-300"
                    />
                  ))}
                </div>
                <p className="mt-1.5 text-sm leading-none">
                  <span className="font-black">۴.۹</span>
                  <span className="text-[11px] font-medium text-mist"> از ۵</span>
                </p>
                <p className="mt-1 text-[10px] font-semibold text-mist">
                  رضایت خانواده‌ها
                </p>
              </div>
            </motion.div>

            {/* rotating sticker */}
            <motion.div
              animate={{ rotate: [-10, -3, -10], y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 end-6 grid h-24 w-24 place-items-center rounded-full bg-butter-200 text-center shadow-lg shadow-butter-300/50"
            >
              <p className="px-3 text-[11px] font-black leading-5 text-amber-800">
                ٪۱۰۰
                <br />
                اورجینال
              </p>
            </motion.div>

            {/* sparkles */}
            <motion.span
              animate={{ scale: [1, 1.35, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -start-6 bottom-32 text-lilac-400"
            >
              <Sparkles className="h-6 w-6" />
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 3.6, repeat: Infinity, delay: 0.8 }}
              className="absolute -end-4 top-24 text-blush-400"
            >
              <Sparkles className="h-5 w-5" />
            </motion.span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
