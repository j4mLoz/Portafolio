export default function ProjectCard({ title, description, stack }) {
  return (
    <div className="bg-background border border-slate-800 rounded-xl overflow-hidden hover:border-primary transition-all duration-300">
      {/* Imagen placeholder */}
      <div className="h-48 bg-surface flex items-center justify-center text-slate-500">
        Preview
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        <p className="text-slate-400 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full border border-slate-700 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <button className="text-sm text-primary hover:underline">Demo</button>
          <button className="text-sm text-slate-300 hover:underline">
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
