export default function SectionDivider() {
  return (
    <div className="relative py-24 bg-[linear-gradient(90deg,#000000,#555555,#838383)]">
      {/* Overlay para continuidad visual */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <div className="relative flex items-center justify-center">
        {/* Línea central */}
        <span className="block w-px h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent" />

        {/* Glow ambiental sutil */}
        <span className="absolute w-24 h-24 rounded-full bg-white/5 blur-2xl" />
      </div>
    </div>
  );
}
