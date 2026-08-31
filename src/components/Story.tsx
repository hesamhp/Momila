import { motion } from "framer-motion";
import { BookHeart, Check, HeartHandshake, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const values = [
  {
    title: "مواد سالم و استاندارد کودک",
    desc: "کاغذ کرم بدون آزار چشم، جوهر و مواد با گواهی بهداشت",
  },
  {
    title: "طراحی اختصاصی فارسی",
    desc: "سطرنویسی، حاشیه و جلدهایی که برای مدرسه‌ی ما طراحی شده‌اند",
  },
  {
    title: "نسخه‌های محدود هر فصل",
    desc: "هر ترم یک کالکشن رنگی تازه، الهام‌گرفته از رویاهای بچه‌ها",
  },
];

export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -start-40 top-1/3 h-96 w-96 rounded-full bg-lilac-100/80 blur-3xl" />
        <div className="absolute -end-40 bottom-0 h-96 w-96 rounded-full bg-blush-100/70 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12">
        {/* visual */}
        <Reveal className="relative order-2 mx-auto w-full max-w-lg lg:order-1">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-lilac-200/70 to-blush-200/60 blur-2xl" />
            <img
              src="/images/story.jpg"
              alt="میز تحریر کودک با لوازم‌التحریر مومیلا"
              loading="lazy"
              className="relative aspect-[4/3.4] w-full rounded-[2.5rem] border-8 border-white object-cover shadow-2xl shadow-lilac-200"
            />

            {/* since sticker */}
            <motion.div
              animate={{ rotate: [6, 11, 6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 start-8 grid h-24 w-24 place-items-center rounded-2xl bg-white text-center shadow-xl shadow-lilac-200"
            >
              <p className="text-[11px] font-black leading-5 text-lilac-700">
                از سالِ
                <br />
                <span className="text-base">۱۳۹۸</span>
                <br />
                کنار شما
              </p>
            </motion.div>

            {/* floating card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 end-4 sm:-end-6"
            >
              <div className="flex items-center gap-3 rounded-2xl border border-lilac-100 bg-white/95 p-4 pe-6 shadow-xl shadow-lilac-200/80 backdrop-blur">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-blush-100 text-blush-400">
                  <HeartHandshake className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-extrabold">
                    +۱۵ هزار خانواده
                  </span>
                  <span className="block text-[11px] font-medium text-mist">
                    هر مهر با مومیلا به مدرسه می‌روند
                  </span>
                </span>
              </div>
            </motion.div>

            <motion.span
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3.4, repeat: Infinity }}
              className="absolute -start-5 top-1/2 text-lilac-400"
            >
              <Sparkles className="h-6 w-6" />
            </motion.span>
          </div>
        </Reveal>

        {/* copy */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            align="start"
            label="داستان ما"
            icon={BookHeart}
            title={
              <>
                از یک کشوی کوچک،
                <br />
                تا هزاران <span className="marker-blush">کیف مدرسه</span>
              </>
            }
          />

          <Reveal delay={0.2}>
            <p className="mt-6 text-sm leading-8 text-mist sm:text-[15px] sm:leading-9">
              مومیلا سال ۱۳۹۸ با یک سؤال ساده شروع شد: چرا لوازم‌التحریر
              مدرسه باید خشک و بیروح باشد؟ ما دفترهایی می‌سازیم که بچه‌ها
              از باز کردنشان لذت ببرند؛ با رنگ‌های پاستلی آرام، کاغذ کرمِ
              مهربان با چشم و طرح‌هایی که هر ترم تازه می‌شوند.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <p className="mt-4 text-sm leading-8 text-mist sm:text-[15px] sm:leading-9">
              امروز تیم کوچک ما هنوز همان وسواسِ روز اول را دارد: هر جلد،
              هر رنگ و هر بسته‌بندی، با همین فکر انتخاب می‌شود که «بچه‌ی ما
              این را دوست دارد؟»
            </p>
          </Reveal>

          <div className="mt-8 space-y-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.34 + i * 0.08}>
                <div className="flex items-start gap-3.5">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-lilac-100 text-lilac-600">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold sm:text-base">
                      {v.title}
                    </p>
                    <p className="mt-0.5 text-xs leading-6 text-mist sm:text-[13px]">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.55}>
            <p className="mt-9 text-sm font-black text-lilac-600">
              — تیم کوچکِ مومیلا
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
