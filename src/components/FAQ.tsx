import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Plus } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "ارسال به سراسر کشور دارید؟",
    a: "بله؛ سفارش‌ها هر روز کاری از انبار مومیلا ارسال می‌شوند و به همه‌ی شهرها و روستاها می‌رسند. خریدهای بالای ۵۰۰ هزار تومان هم ارسال رایگان دارند.",
  },
  {
    q: "سفارش‌ام چه زمانی به دستم می‌رسد؟",
    a: "ثبت تا ارسال در همان روز کاری انجام می‌شود؛ تهران معمولاً ۱ تا ۲ روز و سایر شهرها ۲ تا ۴ روز کاری طول می‌کشد. کد رهگیری هم بلافاصله برای‌تان پیامک می‌شود.",
  },
  {
    q: "اگر از محصول راضی نبودم چه؟",
    a: "تا ۷ روز پس از تحویل، بدون قید و شرط می‌توانید کالا را بازگردانید یا با رنگ و مدل دیگری تعویض کنید؛ رضایت شما برایمان از خودِ فروش مهم‌تر است.",
  },
  {
    q: "کاغذ دفترهای مومیلا چه فرقی با بقیه دارد؟",
    a: "کاغذ کرم ۸۰ گرمی ما با روشنایی استاندارد از خستگی چشم بچه‌ها جلوگیری می‌کند، با خودنویس جوهر پس نمی‌دهد و برای مداد رنگی و نقاشی هم مناسب است.",
  },
  {
    q: "برای مدارس و خرید گروهی تخفیف دارید؟",
    a: "بله؛ «باشگاه مدارسِ مومیلا» برای سفارش‌های گروهی و کلاس‌به‌کلاس تا ۲۵٪ تخفیف، فاکتور رسمی و بسته‌بندی اختصاصیِ هر کلاس ارائه می‌دهد.",
  },
  {
    q: "کالکشن‌های جدید چه زمانی معرفی می‌شوند؟",
    a: "آغاز هر فصل تحصیلی، یک کالکشن محدود با رنگ‌های تازه معرفی می‌کنیم؛ اعضای خبرنامه، ۲۴ ساعت زودتر از همه از رسیدن طرح‌های جدید باخبر می‌شوند.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <section id="faq" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -end-40 top-16 h-96 w-96 rounded-full bg-lilac-100/90 blur-3xl" />
        <div className="dot-grid absolute inset-x-0 bottom-0 h-40 opacity-40 [mask-image:linear-gradient(to_top,black,transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="سوالات متداول"
          icon={MessageCircle}
          title={
            <>
              هر چیزی که پیش از خرید{" "}
              <span className="marker">باید بدانید</span>
            </>
          }
          description="اگر پاسخ سؤال‌تان را این‌جا پیدا نکردید، پشتیبانی مومیلا همه‌روزه از ۹ صبح تا ۹ شب کنار شماست."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    open
                      ? "border-lilac-300 bg-white shadow-lg shadow-lilac-200/60"
                      : "border-lilac-100 bg-white/70 hover:border-lilac-300 hover:bg-white"
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(open ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-start sm:px-6 sm:py-5"
                    aria-expanded={open}
                  >
                    <span className="text-sm font-extrabold sm:text-base">
                      {f.q}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                        open
                          ? "rotate-45 bg-lilac-600 text-white shadow-md shadow-lilac-300"
                          : "bg-lilac-100 text-lilac-600"
                      }`}
                    >
                      <Plus className="h-4 w-4" strokeWidth={3} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <p className="px-5 pb-5 text-[13px] leading-7 text-mist sm:px-6 sm:pb-6 sm:leading-8">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
