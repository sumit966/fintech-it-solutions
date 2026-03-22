import { Link } from "react-router-dom";

const cases = [
  {
    title: "Cloud Infrastructure Modernization",
    desc: "Designed a scalable cloud-native infrastructure for a fintech platform enabling high availability and performance.",
    tag: "Cloud Engineering"
  },
  {
    title: "AI Data Analytics Platform",
    desc: "Developed intelligent analytics pipelines enabling predictive insights and automated reporting.",
    tag: "Artificial Intelligence"
  },
  {
    title: "Enterprise DevOps Automation",
    desc: "Implemented CI/CD pipelines and container platforms improving software delivery speed and reliability.",
    tag: "DevOps"
  }
];

export default function CaseStudies() {
  return (
    <section className="py-28 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-16 text-white">Case Studies</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {cases.map((item, i) => (
            <div
              key={i}
              className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-8 rounded-xl hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              <span className="text-sm text-blue-400 font-semibold">{item.tag}</span>
              <h3 className="text-xl font-semibold mt-3 mb-4 text-white">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              <Link to="/projects" className="inline-block mt-6 text-blue-400 hover:underline">
                View Project →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}