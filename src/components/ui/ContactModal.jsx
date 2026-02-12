import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function ContactModal({ isOpen, onClose }) {
  // 🔒 Bloquear scroll del body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // ⌨️ Cerrar con ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.08, // ✨ micro delay premium
            }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#111] border border-white/10 rounded-2xl p-8 w-full max-w-md text-white shadow-2xl"
            >
              {/* Botón cerrar */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              >
                ✕
              </button>

              <h3 className="text-lg mb-8 text-white/80">Hablemos</h3>

              <div className="flex flex-col gap-6">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/573007022596"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-[#e9da98] transition-colors"
                >
                  {/* SVG WhatsApp */}
                  <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
                  <span>+57 300 7022596</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:juan.lozaa2812@gmail.com"
                  className="flex items-center gap-4 hover:text-[#e9da98] transition-colors"
                >
                  {/* SVG Email */}
                  <BiLogoGmail className="w-6 h-6 text-[#EA4335]" />
                  <span>juan.lozaa2812@gmail.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
