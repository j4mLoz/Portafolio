import { useEffect, useState } from "react";
import Container from "../ui/Container";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
        setOpen(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        backdrop-blur-md bg-black/40
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <Container>
        <nav className="flex items-center justify-between py-6 border-b border-white/30">
          {/* MARCA */}
          <a
            href="#home"
            className="text-lg font-medium tracking-wider text-[#e9da98] cursor-pointer"
          >
            JL
          </a>

          {/* LINKS DESKTOP */}
          <ul className="hidden md:flex items-center gap-12 text-base">
            {["Home", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="cursor-pointer text-white/90 hover:text-[#e9da98] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* HAMBURGUESA MOBILE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-xl cursor-pointer"
            aria-label="Open menu"
          >
            ☰
          </button>
        </nav>
      </Container>

      {/* MENÚ MOBILE */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0.95 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0.95 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
        md:hidden
        origin-top
        bg-black/70
        backdrop-blur-md
        border-t border-white/20
      "
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.06,
                  },
                },
              }}
              className="
          flex
          items-center
          justify-around
          px-6
          py-8
          text-lg
        "
            >
              {["Home", "About", "Contact"].map((item) => (
                <motion.li
                  key={item}
                  variants={{
                    hidden: { opacity: 0, y: 6 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="
                cursor-pointer
                text-white
                hover:text-[#e9da98]
                transition-colors
              "
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
