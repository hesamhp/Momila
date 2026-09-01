import { MessageCircleHeart, Quote, Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote:
     "از وقتی «دفتر ابرِ بنفش» را به کیف دخترم انداختم، مشق‌نوشتن برایش به یک بازی تبدیل شده.",
    name: "سارا محمدی",
    role: "مادرِ آوا",
    initials: "س",
    avatarCls: "bg-lilac-200 text-lilac-700",
    rotateCls: "md:-rotate-1",
  },
  {
    quote:
      "به‌عنوان معلم کلاس اول ، خرید از مومیلا رو برای بچه هاتون پیشنهاد میکنم ، چون خیلی خوشگل و گوگولین",
    name: "مریم رضایی",
    role: "معلم دبستان",
    initials: "م",
    avatarCls: "bg-blush-200 text-rose-600",
    rotateCls: "md:translate-y-6",
  },
  {
    quote:
      "سفارش‌مان سه روزه به دستمان رسید و بسته‌بندی آن‌قدر قشنگ بود که جعبه‌اش هنوز توی اتاق کیان مانده! کیان از خرید ذوق زده شد.",
    name: "امیر کریمی",
    role: "پدرِ کیان",
    initials: "ا",
    avatarCls: "bg-butter-200 text-amber-700",
    rotateCls: "md:rotate-1",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -end-40 top-10 h-96 w-96 rounded-full bg-lilac-100/80 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="دوستان مومیلا"
          icon={MessageCircleHeart}
          title={
            <>
             حرف‌هایی که به <span className="marker-blush">انرژی</span>{" "}
              می‌دهد
            </>
          }
          description="صدها خانواده و معلم، هر مهر همراه مومیلا به مدرسه می‌روند؛ این چند جمله، دلیل ادامه دادنِ ماست."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure
                className={`relative flex h-full flex-col rounded-[2rem] border border-lilac-100 bg-white p-8 shadow-sm shadow-lilac-100 transition-all duration-500 hover:-translate-y-2 hover:rotate-0 hover:shadow-xl hover:shadow-lilac-200/70 ${t.rotateCls}`}
              >
                <Quote className="h-8 w-8 fill-lilac-100 text-lilac-200" />
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-butter-300 text-butter-300"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[13.5px] leading-8 text-ink/85">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-lilac-100 pt-5">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-full text-lg font-black ${t.avatarCls}`}
                  >
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-extrabold">
                      {t.name}
                    </span>
                    <span className="block text-[11px] font-semibold text-mist">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
