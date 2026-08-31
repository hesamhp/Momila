import {
  BadgePercent,
  Palette,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const features = [
  {
    icon: ShieldCheck,
    title: "کیفیت تضمینی",
    desc: "کاغذ ۸۰ گرمی کرم، جوهر و مواد استانداردِ کودک؛ هر محصول پیش از ارسال، کنترل کیفیت می‌شود.",
    iconCls: "bg-lilac-100 text-lilac-600",
    glowCls: "bg-lilac-200/50",
  },
  {
    icon: Truck,
    title: "ارسال سریع سراسری",
    desc: "ثبت تا ارسال در همان روز کاری؛ تحویل به سراسر کشور ظرف ۲ تا ۴ روز با بسته‌بندی شاد مومیلا.",
    iconCls: "bg-blush-100 text-blush-400",
    glowCls: "bg-blush-200/50",
  },
  {
    icon: BadgePercent,
    title: "قیمتِ منصفانه",
    desc: "خرید مستقیم از تولید و بدون واسطه؛ کیفیت بالا با قیمتی که با بودجه‌ی مدرسه جور درمی‌آید.",
    iconCls: "bg-butter-100 text-butter-500",
    glowCls: "bg-butter-200/50",
  },
  {
    icon: Palette,
    title: "طراحی اختصاصی",
    desc: "هر جلد و هر رنگ را تیم کوچک ما خلق می‌کند؛ کالکشن‌های محدود و تازه برای هر فصل مدرسه.",
    iconCls: "bg-mint-100 text-emerald-600",
    glowCls: "bg-emerald-100/60",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-lilac-25 via-lilac-50 to-lilac-25" />
      <div className="dot-grid pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 opacity-40 [mask-image:linear-gradient(to_top,black,transparent)]" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="چرا مومیلا؟"
          icon={Sparkles}
          title={
            <>
              خریدی مطمئن، برای شروعی{" "}
              <span className="marker">درخشان</span>
            </>
          }
          description="ما می‌دانیم کیف مدرسه چقدر مهم است؛ برای همین هر جزئیات را مثل یک والد وسواسی بررسی می‌کنیم."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.09}>
              <div className="group relative h-full overflow-hidden rounded-[2rem] border border-lilac-100 bg-white p-7 shadow-sm shadow-lilac-100 transition-all duration-500 hover:-translate-y-2 hover:border-lilac-200 hover:shadow-xl hover:shadow-lilac-200/70">
                <div
                  className={`absolute -end-10 -top-10 h-28 w-28 rounded-full ${f.glowCls} blur-2xl transition-transform duration-500 group-hover:scale-150`}
                />
                <span
                  className={`relative grid h-14 w-14 place-items-center rounded-2xl ${f.iconCls} transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110`}
                >
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold">{f.title}</h3>
                <p className="mt-2.5 text-[13px] leading-7 text-mist">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
