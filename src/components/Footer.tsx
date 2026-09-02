import {
  Camera,
  Heart,
  Mail,
  MapPin,
  Phone,
  Play,
  Send,
} from "lucide-react";
import Logo from "./Logo";

const quickLinks = [
  { label: "دوستان مومیلا", href: "#customers" },
  { label: "داستان ما", href: "#story" },
  { label: "چرا مومیلا؟", href: "#features" },
  { label: "نظرات دوستان", href: "#testimonials" },
];

const services = [
  { label: "باشگاه دوستان", href: "#customers" },
  { label: "خبرنامه‌ی مهر", href: "#newsletter" },
  { label: "سوالات متداول", href: "#faq" },
  { label: "داستان مومیلا", href: "#story" },
];

const socials = [
  { icon: Camera, label: "اینستاگرام" },
  { icon: Send, label: "تلگرام" },
  { icon: Play, label: "یوتیوب" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-lilac-950 text-lilac-100">
      <div className="dot-grid-fine absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 md:pt-20">
        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr]">
          {/* brand */}
          <div>
            <a href="#hero" className="flex items-center gap-2.5">
              <Logo className="h-11 w-11 drop-shadow-[0_6px_16px_rgba(116,79,196,0.55)] transition-transform duration-300 hover:-rotate-6 hover:scale-105" />
              <span className="leading-none">
                <span className="block text-xl font-black text-white">
                  مومیلا
                </span>
                <span className="block pt-1 text-[10px] font-semibold tracking-[0.35em] text-lilac-400">
                  MOMILA
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-[13px] leading-7 text-lilac-300">
              فروشنده لوازم‌التحریر مدرسه با تنوع زیاد و طراحی کودک‌پسند;
              چون باور داریم خلاقیت، از یک دفترِ دوست‌داشتنی شروع می‌شود.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#hero"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-lilac-200 transition hover:border-lilac-400/50 hover:bg-white/10 hover:text-white active:scale-95"
                >
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* quick links */}
          <nav>
            <p className="text-sm font-black text-white">دسترسی سریع</p>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[13px] font-semibold text-lilac-300 transition hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* services */}
          <nav>
            <p className="text-sm font-black text-white">خدمات مومیلا</p>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.href + s.label}>
                  <a
                    href={s.href}
                    className="text-[13px] font-semibold text-lilac-300 transition hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact */}
          <div>
            <p className="text-sm font-black text-white">در تماس باشیم</p>
            <ul className="mt-5 space-y-4 text-[13px] font-semibold text-lilac-300">
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/5 text-lilac-300">
                  <Phone className="h-4 w-4" />
                </span>
                <span dir="ltr">۰۹۱۱ ۶۸۱ ۵۴۵۸</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/5 text-lilac-300">
                  <Mail className="h-4 w-4" />
                </span>
                <span dir="ltr">hello@momila.ir</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/5 text-lilac-300">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="leading-6">
                  جویبار ، میدان شهدا پاساژ اقبال
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 sm:flex-row">
          <p className="text-[12px] font-semibold text-lilac-300">
            © ۱۴۰۵ مومیلا؛ همه‌ی حقوق محفوظ است
          </p>
          <p className="flex items-center gap-1.5 text-[12px] font-semibold text-lilac-300">
            ساخته‌شده توسط Hesvm با
            <Heart className="h-3.5 w-3.5 fill-blush-400 text-blush-400" />
            برای مدرسه‌ی بچه‌ها
          </p>
        </div>
      </div>

      {/* giant watermark */}
      <div
        aria-hidden
        className="pointer-events-none relative select-none overflow-hidden pb-2"
      >
        <p className="ghost-text -mb-6 text-center text-[26vw] font-black leading-[0.85] sm:-mb-10">
          مومیلا
        </p>
      </div>
    </footer>
  );
}
