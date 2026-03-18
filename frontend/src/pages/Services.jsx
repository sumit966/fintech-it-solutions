import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  Code,
  Globe,
  Smartphone,
  ShoppingCart,
  GitBranch,
  Users,
  Rocket,
  Zap,
  Settings,
  Database,
  Shield,
  BarChart,
  Layers,
  Target,
  HeartHandshake,
  Lightbulb,
  Sparkles
} from "lucide-react";
import PageTransition from "../components/PageTransition";

export default function Services() {
  const services = [
    {
      title: "Custom Software Development",
      shortDesc: "Tailored business applications built for your unique needs",
      icon: Code,
      slug: "custom-software",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Business automation tools",
        "Internal dashboards",
        "Admin panels",
        "Workflow management"
      ]
    },
    {
      title: "Website & Web Applications",
      shortDesc: "Modern, responsive websites and powerful web applications",
      icon: Globe,
      slug: "web-development",
      color: "from-purple-500 to-pink-500",
      features: [
        "Startup landing pages",
        "SaaS platforms",
        "Member portals",
        "Content management"
      ]
    },
    {
      title: "MVP Development",
      shortDesc: "Rapid prototyping to validate your idea with real users",
      icon: Rocket,
      slug: "mvp-development",
      color: "from-orange-500 to-red-500",
      features: [
        "Rapid prototyping",
        "Core feature focus",
        "Investor demo ready",
        "Iterative development"
      ]
    },
    {
      title: "Mobile App Development",
      shortDesc: "Native and cross-platform apps for iOS and Android",
      icon: Smartphone,
      slug: "mobile",
      color: "from-green-500 to-emerald-500",
      features: [
        "iOS & Android apps",
        "Cross-platform solutions",
        "Mobile-first design",
        "Push notifications"
      ]
    },
    {
      title: "API Development & Integration",
      shortDesc: "Connect your tools and services with custom APIs",
      icon: GitBranch,
      slug: "api",
      color: "from-yellow-500 to-amber-500",
      features: [
        "Payment gateways",
        "Third-party services",
        "Custom APIs",
        "Data synchronization"
      ]
    },
    {
      title: "CRM Development",
      shortDesc: "Custom systems to manage leads and customer relationships",
      icon: Users,
      slug: "crm",
      color: "from-indigo-500 to-blue-500",
      features: [
        "Lead management",
        "Customer tracking",
        "Sales pipelines",
        "Task automation"
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Lightbulb,
      title: "Fresh Perspective",
      desc: "No legacy thinking, just modern solutions built for today's challenges."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      desc: "MVP in weeks, not months. Launch and iterate quickly."
    },
    {
      icon: HeartHandshake,
      title: "True Partnership",
      desc: "We're invested in your success, not just the project."
    },
    {
      icon: Sparkles,
      title: "Modern Tech Stack",
      desc: "We use the latest tools and frameworks for future-ready solutions."
    }
  ];

  const process = [
    {
      step: "Discovery",
      desc: "We learn about your idea, goals, and requirements",
      icon: Target
    },
    {
      step: "Design",
      desc: "We create beautiful, user-friendly designs",
      icon: Layers
    },
    {
      step: "Build",
      desc: "We develop your solution using modern technologies",
      icon: Code
    },
    {
      step: "Launch",
      desc: "We deploy and ensure everything works perfectly",
      icon: Rocket
    },
    {
      step: "Support",
      desc: "We're here to help long after launch",
      icon: HeartHandshake
    }
  ];

  return (
    <PageTransition>
      <main className="pt-24 bg-white">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              What We Build for
              <span className="block text-yellow-300">Startups Like Yours</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100 mb-8">
              Custom software solutions tailored for early-stage companies. 
              From MVPs to full-scale platforms, we help you launch and grow.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              Discuss Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Why Startups Choose Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Comprehensive software development services for startups
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={`/services/${service.slug}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <div className="p-8">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.shortDesc}</p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <span className="text-blue-600 font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* OUR PROCESS */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">How We Work</h2>
            <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
              A transparent, collaborative process from idea to launch
            </p>

            <div className="grid md:grid-cols-5 gap-8 relative">
              {process.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10">
                    <step.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.step}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">What You Get</h2>
            <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Every project comes with these deliverables
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                "Fully Functional Software",
                "Complete Source Code",
                "Technical Documentation",
                "User Training & Manuals",
                "Admin Dashboard",
                "API Documentation",
                "3 Months Free Support",
                "Future Growth Roadmap"
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Startup?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your idea and see how we can help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Start the Conversation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <p className="text-sm text-blue-200 mt-6">
              ✨ First-time founders get 15% off their first project
            </p>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}