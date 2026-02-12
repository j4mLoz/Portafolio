import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [extraScrolls, setExtraScrolls] = useState(0);

  // Detectar scroll normal (desktop + mobile)
  useEffect(() => {
    const handleScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (!atBottom) {
        setExtraScrolls(0);
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detectar intento extra de scroll hacia abajo
  useEffect(() => {
    const handleWheel = (e) => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (atBottom && e.deltaY > 0) {
        setExtraScrolls((prev) => prev + 1);
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  // Activar visibilidad después de 3 intentos
  useEffect(() => {
    if (extraScrolls >= 3) {
      setVisible(true);
    }
  }, [extraScrolls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Ocultarla inmediatamente al iniciar el scroll
    setVisible(false);
    setExtraScrolls(0);
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-out
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}
        bg-white/10 backdrop-blur-md border border-white/20
        hover:bg-white/20 text-white p-3 rounded-full shadow-lg
        md:bottom-8 md:right-8`}
    >
      ↑
    </button>
  );
}
