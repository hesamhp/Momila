import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 650);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 16 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="بازگشت به بالای صفحه"
          className="fixed bottom-6 end-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-lilac-600 text-white shadow-xl shadow-lilac-400/50 transition-colors hover:bg-lilac-700 active:scale-90"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
