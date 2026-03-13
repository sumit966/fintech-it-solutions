import { useParams, Link } from "react-router-dom";

const data = {
  "web-development": {
    title: "Web Application Development",
    desc: "Enterprise-grade web platforms using React, Angular, Node, Java, and secure APIs.",
  },
  "mobile-development": {
    title: "Mobile App Development",
    desc: "Android & iOS apps with scalable backend systems.",
  },
  "cloud-devops": {
    title: "Cloud & DevOps",
    desc: "AWS, Azure, CI/CD, Kubernetes, Infrastructure automation.",
  },
  "ai-ml": {
    title: "AI & Machine Learning",
    desc: "Predictive analytics, computer vision, NLP solutions.",
  },
  cybersecurity: {
    title: "Cybersecurity",
    desc: "VAPT, SOC, compliance, data protection.",
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const s = data[slug];

  if (!s) return <div>Not Found</div>;

  return (
    <main className="pt-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{s.title}</h1>
      <p className="text-lg text-gray-700">{s.desc}</p>

      <Link to="/contact" className="mt-8 inline-block bg-black text-white px-6 py-3 rounded">
        Discuss This Service
      </Link>
    </main>
  );
}
