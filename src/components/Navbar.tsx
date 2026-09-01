import { AnimatePresence, motion } from "framer-motion";
import { Camera, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { label: "دوستان مومیلا", href: "#customers" },
  { label: "داستان ما", href: "#story" },
  { label: "چرا مومیلا؟", href: "#features" },
  { label: "نظرها", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <motion.div
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border px-4 py-3 transition-all duration-500 sm:px-5 ${
          scrolled
            ? "border-lilac-200 bg-white/85 shadow-lg shadow-lilac-200/60 backdrop-blur-xl"
            : "border-white/60 bg-white/55 backdrop-blur-md"
        }`}
      >
        {/* logo */}
        <a href="#hero" className="flex items-center gap-2.5">
          <Logo className="h-10 w-10 drop-shadow-[0_4px_10px_rgba(139,99,220,0.5)] transition-transform duration-300 hover:rotate-6 hover:scale-105" />
          <span className="leading-none">
            <span className="block text-lg font-black tracking-tight">
              مومیلا
            </span>
            <span className="block pt-1 text-[10px] font-semibold tracking-[0.35em] text-lilac-500">
              MOMILA
            </span>
          </span>
        </a>

        {/* desktop links */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-ink/80 transition hover:bg-lilac-100 hover:text-lilac-700"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* actions */}
        <div className="flex items-center gap-2">
          <a
            href="#customers"
            aria-label="گالری مشتریان"
            className="grid h-11 w-11 place-items-center rounded-full border border-lilac-200 bg-white text-lilac-700 transition hover:border-lilac-400 hover:text-lilac-600 active:scale-95"
          >
            <Camera className="h-5 w-5" />
          </a>

          <a
            href="#newsletter"
            className="hidden items-center gap-2 rounded-full bg-lilac-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-lilac-300 transition hover:bg-lilac-700 active:scale-95 sm:inline-flex"
          >
            باشگاه مومیلا
          </a>

          <button
            aria-label="منو"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-lilac-200 bg-white text-ink transition hover:border-lilac-400 active:scale-95 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.div>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-3xl border border-lilac-200 bg-white/95 p-3 shadow-xl shadow-lilac-200/60 backdrop-blur-xl md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-ink transition hover:bg-lilac-100"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#newsletter"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-2xl bg-lilac-600 px-4 py-3 text-center text-sm font-bold text-white"
            >
              باشگاه مومیلا
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
