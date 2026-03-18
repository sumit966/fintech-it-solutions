import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Rocket, 
  Code, 
  Shield, 
  Zap, 
  Users, 
  Smartphone,
  Globe,
  Database,
  ArrowRight,
  CheckCircle,
  Cpu,
  Box,
  GitBranch,
  Cloud
} from "lucide-react";

const tools = [
  {
    slug: "mvp-boilerplate",
    title: "MVP Launch Boilerplate",
    category: "Template",
    desc: "Ready-to-use React + Node.js starter kit with authentication, database, and API setup. Launch your MVP in days, not weeks.",
    tech: "React • Node.js • PostgreSQL • JWT",
    icon: Rocket,
    color: "from-blue-500 to-cyan-500",
    features: [
      "User authentication & authorization",
      "Database integration",
      "RESTful API structure",
      "Admin dashboard template",
      "Email service integration",
      "Payment gateway ready"
    ]
  },
  {
    slug: "startup-auth-system",
    title: "Startup Auth System",
    category: "Security",
    desc: "Complete authentication system with social login, magic links, 2FA, and role-based access control.",
    tech: "Node.js • Passport • JWT • OAuth",
    icon: Shield,
    color: "from-purple-500 to-pink-500",
    features: [
      "Social login (Google, GitHub)",
      "Magic link authentication",
      "Two-factor authentication",
      "Role-based access control",
      "Session management",
      "Password reset flow"
    ]
  },
  {
    slug: "admin-dashboard-template",
    title: "Admin Dashboard Template",
    category: "UI Kit",
    desc: "Beautiful, responsive admin dashboard with analytics, user management, and data visualization components.",
    tech: "React • Tailwind • Chart.js",
    icon: Box,
    color: "from-green-500 to-emerald-500",
    features: [
      "Analytics dashboard",
      "User management panel",
      "Data tables with filters",
      "Charts and graphs",
      "Dark/light mode",
      "Mobile responsive"
    ]
  },
  {
    slug: "api-gateway-starter",
    title: "API Gateway Starter",
    category: "Backend",
    desc: "Scalable API gateway with rate limiting, caching, and microservices support for your startup.",
    tech: "Node.js • Redis • GraphQL • REST",
    icon: GitBranch,
    color: "from-orange-500 to-red-500",
    features: [
      "Rate limiting",
      "Response caching",
      "GraphQL support",
      "Microservices ready",
      "API documentation",
      "Request logging"
    ]
  },
  {
    slug: "payment-integration-kit",
    title: "Payment Integration Kit",
    category: "Integration",
    desc: "Ready-to-use payment integration with Razorpay, Stripe, and PayPal. Subscription management included.",
    tech: "Node.js • Stripe • Razorpay",
    icon: Zap,
    color: "from-yellow-500 to-amber-500",
    features: [
      "Multiple payment gateways",
      "Subscription management",
      "Invoice generation",
      "Webhook handling",
      "Refund processing",
      "Payment analytics"
    ]
  },
  {
    slug: "saas-boilerplate",
    title: "SaaS Boilerplate",
    category: "Template",
    desc: "Complete SaaS starter with multi-tenant architecture, billing, user management, and analytics.",
    tech: "Next.js • Node.js • PostgreSQL • Redis",
    icon: Cloud,
    color: "from-indigo-500 to-blue-500",
    features: [
      "Multi-tenant architecture",
      "Subscription billing",
      "User management",
      "Usage analytics",
      "API rate limiting",
      "Admin dashboard"
    ]
  }
];

const categories = [
  "All",
  "Template",
  "Security",
  "UI Kit",
  "Backend",
  "Integration"
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredTools = activeFilter === "All"
    ? tools
    : tools.filter(t => t.category === activeFilter);

  return (
    <main className="pt-28 bg-white">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">
            Startup Tools & Templates
          </h1>
          <p className="text-xl max-w-3xl text-blue-100">
            Ready-to-use components, boilerplates, and tools to help you launch faster. 
            Built by developers, for startups.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-4">
          {categories.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* TOOLS GRID */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool, index) => (
              <Link
                key={index}
                to={`/tools/${tool.slug}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${tool.color}`}></div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center`}>
                      <tool.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      {tool.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{tool.desc}</p>
                  
                  <p className="text-sm text-gray-500 mb-4">
                    {tool.tech}
                  </p>

                  {/* Features preview */}
                  <div className="mb-6">
                    {tool.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <span className="text-blue-600 font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                    View Details <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">More Tools Coming Soon</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're constantly building new tools to help startups launch faster. 
            Want early access?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
          >
            Get Early Access <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}