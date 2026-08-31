import { motion } from "framer-motion";
import { BadgeCheck, Mail, Send, Sparkles } from "lucide-react";
import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  };

  return (
    <section id="newsletter" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-lilac-500 via-lilac-600 to-lilac-700 px-6 py-16 text-center text-white shadow-2xl shadow-lilac-300 md:rounded-[3.5rem] md:px-16 md:py-20">
            {/* decorations */}
            <div className="dot-grid-fine absolute inset-0 opacity-30" />
            <div className="absolute -start-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-24 -end-16 h-72 w-72 rounded-full bg-lilac-300/40 blur-3xl" />
            <motion.span
              animate={{ y: [0, -14, 0], rotate: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute start-10 top-10 text-lilac-300/80 max-md:hidden"
            >
              <Sparkles className="h-8 w-8" />
            </motion.span>
            <motion.span
              animate={{ y: [0, 12, 0], rotate: [0, -10, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
              className="absolute bottom-12 end-12 text-lilac-300/70 max-md:hidden"
            >
              <Mail className="h-9 w-9" />
            </motion.span>

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                خبرنامه‌ی مومیلا
              </span>

              <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-black leading-[1.3] sm:text-4xl lg:text-[2.9rem]">
                برای مهرماه آماده‌اید؟
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-lilac-100 sm:text-base sm:leading-9">
                همین حالا عضو خبرنامه شوید تا ۱۰٪ تخفیف اولین خرید را هدیه
                بگیرید و از کالکشن‌های محدودِ هر فصل، زودتر از همه باخبر شوید.
              </p>

              {done ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mx-auto mt-9 flex max-w-md items-center justify-center gap-3 rounded-full border border-white/25 bg-white/15 px-6 py-4 backdrop-blur"
                >
                  <BadgeCheck className="h-5 w-5 shrink-0 text-butter-200" />
                  <p className="text-sm font-bold">
                    آفرین! به خانواده‌ی مومیلا خوش آمدید؛ کد تخفیف به ایمیل‌تان
                    رسید.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={submit}
                  className="mx-auto mt-9 flex max-w-lg flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ایمیل شما…"
                    className="w-full flex-1 rounded-full border border-white/25 bg-white/15 px-6 py-4 text-sm font-semibold text-white placeholder:text-lilac-200/80 backdrop-blur transition focus:border-white/60 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-black text-lilac-700 shadow-lg transition hover:bg-butter-100 active:scale-95"
                  >
                    عضویت می‌کنم
                    <Send className="h-4 w-4 -scale-x-100 transition-transform duration-300 group-hover:-translate-x-1" />
                  </button>
                </form>
              )}

              <p className="mt-5 text-[11px] font-medium text-lilac-200/90">
                بدون اسپم، قول می‌دهیم؛ فقط خبرهای خوب و رنگی
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
