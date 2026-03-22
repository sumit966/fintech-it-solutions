export default function FeatureCard({ title, desc, icon }) {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-8 rounded-xl shadow hover:shadow-2xl transition duration-300 hover:-translate-y-2">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}