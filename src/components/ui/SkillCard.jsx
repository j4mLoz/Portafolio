export default function SkillCard({ title, items }) {
  return (
    <div
      className="bg-background border border-slate-800 rounded-xl p-6 hover:border-primary transition-all duration-300
"
    >
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-slate-400">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
