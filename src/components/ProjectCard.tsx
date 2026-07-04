export default function ProjectCard({ tag, title, description, color }: any) {
  return (
    <div className="p-8 border border-white/10 rounded-xl bg-white/5 hover:border-white/30 transition">
      <span className={`text-xs uppercase tracking-widest font-bold ${color}`}>{tag}</span>
      <h4 className="text-xl font-bold mt-2">{title}</h4>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
  );
}
