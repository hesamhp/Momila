import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Preloader() {
  return (
    <motion.div
      exit={{ y: "-100%" }}
      transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden rounded-b-[3rem] bg-gradient-to-b from-lilac-50 to-lilac-100"
    >
      {/* soft decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -start-24 -top-24 h-72 w-72 rounded-full bg-lilac-200/70 blur-3xl" />
        <div className="absolute -bottom-24 -end-24 h-72 w-72 rounded-full bg-blush-200/60 blur-3xl" />
        <div className="dot-grid absolute inset-0 opacity-40" />
      </div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotate: -12 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 16 }}
        className="relative grid h-20 w-20 place-items-center rounded-[1.75rem] bg-gradient-to-br from-lilac-500 to-lilac-700 text-white shadow-2xl shadow-lilac-300"
      >
        <Sparkles className="h-9 w-9" />
        <motion.span
          animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-[1.75rem] border-2 border-lilac-400"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="mt-6 text-3xl font-black tracking-tight text-ink"
      >
        مومیلا
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-2 text-xs font-bold text-mist"
      >
        مدرسه را به رنگ رویاها درمی‌آوریم…
      </motion.p>

      <div className="mt-8 h-1 w-40 overflow-hidden rounded-full bg-lilac-200">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.15, ease: "easeInOut", delay: 0.15 }}
          className="h-full w-full rounded-full bg-gradient-to-l from-lilac-500 to-blush-400"
        />
      </div>
    </motion.div>
  );
}
