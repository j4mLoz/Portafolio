import { useEffect, useState } from "react";
import Container from "../ui/Container";

export default function NavBar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scroll down → ocultar
        setVisible(false);
      } else {
        // scroll up → mostrar
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
    ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
  `}
    >
      <Container>
        <nav className="flex items-center justify-between py-8 border-b border-white/40">
          {/* MARCA */}
          <a
            href="#home"
            className="
    text-lg
    font-medium
    tracking-wider
    text-[#e9da98]
    cursor-pointer
    hover:opacity-80
    transition-opacity
  "
          >
            JL
          </a>

          {/* LINKS */}
          <ul className="flex items-center gap-12 text-base">
            <li>
              <a
                href="#home"
                className="
        block
        px-3 py-2
        cursor-pointer
        text-white/90
        hover:text-[#e9da98]
        transition-colors
      "
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="
    inline
    cursor-pointer
    text-white/90
    hover:text-[#e9da98]
    transition-colors
  "
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="
        block
        px-3 py-2
        cursor-pointer
        text-white/90
        hover:text-[#e9da98]
        transition-colors
      "
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
