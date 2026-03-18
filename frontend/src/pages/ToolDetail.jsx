import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  Code, 
  Download,
  Github,
  Star,
  Users,
  Calendar,
  Zap
} from "lucide-react";

// This would normally come from a data file
const toolsData = {
  "mvp-boilerplate": {
    title: "MVP Launch Boilerplate",
    description: "Ready-to-use React + Node.js starter kit with authentication, database, and API setup. Launch your MVP in days, not weeks.",
    longDescription: `Building an MVP from scratch takes time. Our boilerplate gives you everything you need to start building your product immediately.

    Includes user authentication, database integration, RESTful API structure, and an admin dashboard. Just clone, configure, and start building your unique features.`,
    tech: ["React", "Node.js", "PostgreSQL", "JWT", "Redis"],
    features: [
      "User authentication & authorization",
      "Database integration with Prisma",
      "RESTful API structure",
      "Admin dashboard template",
      "Email service integration",
      "Payment gateway ready",
      "Docker setup included",
      "CI/CD ready"
    ],
    howToUse: [
      "Clone the repository",
      "Install dependencies",
      "Configure environment variables",
      "Run database migrations",
      "Start building your features"
    ],
    updates: "Monthly updates with new features",
    support: "6 months free support",
    price: "Free for personal use",
    github: "#",
    docs: "#"
  }
};

export default function ToolDetail() {
  const { slug } = useParams();
  const tool = toolsData[slug];

  if (!tool) {
    return (
      <div className="pt-32 text-center min-h-screen">
        <h1 className="text-3xl mb-4">Tool not found</h1>
        <Link to="/tools" className="text-blue-600 hover:underline">
          Browse all tools
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-24 bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">{tool.title}</h1>
          <p className="text-xl max-w-3xl text-blue-100">{tool.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left Column - Main Info */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 whitespace-pre-line">
                {tool.longDescription}
              </p>

              <h2 className="text-3xl font-bold mb-6">Features</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {tool.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold mb-6">How to Use</h2>
              <div className="space-y-4 mb-8">
                {tool.howToUse.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div>
              <div className="bg-gray-50 p-6 rounded-2xl sticky top-28">
                <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {tool.tech.map((t, i) => (
                    <span key={i} className="bg-white px-3 py-1 rounded-full text-sm shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{tool.updates}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{tool.support}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{tool.price}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={tool.github}
                    className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View on GitHub
                  </a>
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition flex items-center justify-center"
                  >
                    Get Support <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}