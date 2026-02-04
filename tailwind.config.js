/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#22c55e", // Verde tech (acción, links, acentos)
        background: "#0f172a", // Fondo principal (oscuro elegante)
        surface: "#020617", // Tarjetas, bloques, avatar bg
        muted: "#94a3b8", // Texto secundario
        border: "#1e293b", // Bordes sutiles
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
