import { useNavigate } from "react-router-dom";

export default function Stats() {
  const navigate = useNavigate();

  const stats = [
    {
      value: "3+",
      label: "Years Experience",
      route: "/experience"
    },
    {
      value: "13+",
      label: "Enterprise Clients",
      route: "/clients"
    },
    {
      value: "20+",
      label: "Projects Delivered",
      route: "/projects-portfolio"
    },
    {
      value: "24/7",
      label: "Support Availability",
      route: "/support"
    }
  ];

  return (
    <section className="bg-gradient-to-r from-black via-slate-900 to-black py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((item, i) => (
          <div
            key={i}
            onClick={() => navigate(item.route)}
            className="cursor-pointer group"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white group-hover:text-blue-500 transition">
              {item.value}
            </h2>
            <p className="mt-3 text-gray-400 group-hover:text-gray-200 transition">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
