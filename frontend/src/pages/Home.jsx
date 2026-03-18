import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Shield, 
  Zap, 
  Users, 
  Target,
  Code,
  Cloud,
  Smartphone,
  ShoppingCart,
  Building2,
  BarChart,
  Layers,
  GitBranch,
  Settings,
  Rocket,
  Award,
  Briefcase,
  Cpu,
  Lock,
  Globe,
  Database,
  PieChart,
  Server,
  Workflow,
  Box,
  HardDrive,
  Network,
  PenTool,
  BookOpen,
  MessageCircle,
  Download,
  FileText,
  HelpCircle,
  Sparkles,
  TrendingUp,
  HeartHandshake,
  Lightbulb,
  Star,
  ChevronRight,
  ChevronLeft,
  FlaskConical,
  Atom,
  Microscope,
  Brain,
  Cpu as CpuIcon,
  Wifi,
  Bot,
  Fingerprint,
  Gem,
  Rocket as RocketIcon,
  Handshake,
  BriefcaseBusiness,
  RocketIcon as RocketLaunch
} from "lucide-react";

import Container from "../layout/Container";
import StatsSection from "../components/StatsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import GlobalPresence from "../components/GlobalPresence";
import OfficeMap from "../components/OfficeMap";

export default function Home() {
  const slides = [
    "/hero/hero1.jpg",
    "/hero/hero2.jpg",
    "/hero/hero3.jpg"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // What We Do - Quick Overview
  const quickServices = [
    {
      title: "Custom Software Development",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      slug: "custom-software"
    },
    {
      title: "Website & Web Apps",
      icon: Globe,
      color: "from-purple-500 to-pink-500",
      slug: "web-development"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
      slug: "mobile"
    },
    {
      title: "MVP Development",
      icon: RocketLaunch,
      color: "from-orange-500 to-red-500",
      slug: "mvp-development"
    }
  ];

  // Why Startups Choose Us
  const whyStartups = [
    {
      icon: Lightbulb,
      title: "Fresh Perspective",
      desc: "No legacy thinking, just modern solutions built for today's challenges.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: HeartHandshake,
      title: "Partner, Not Vendor",
      desc: "We grow together. Your success is our success.",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      desc: "MVP in weeks, not months. Launch and iterate quickly.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Gem,
      title: "Startup Friendly Rates",
      desc: "Flexible terms and special pricing for early-stage companies.",
      color: "from-green-400 to-emerald-500"
    }
  ];

  // Our Expertise
  const expertise = [
    {
      icon: Code,
      title: "Full-Stack Development",
      skills: ["React", "Node.js", "Python", "TypeScript"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      icon: GitBranch,
      title: "API Development",
      skills: ["REST", "GraphQL", "Microservices"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "iOS", "Android"]
    }
  ];

  // Startup Packages
  const startupPackages = [
    {
      title: "MVP Launch",
      price: "₹2L - ₹5L",
      timeline: "8-12 weeks",
      features: [
        "Core features only",
        "Basic UI/UX design",
        "Essential integrations",
        "3 months support"
      ],
      icon: Rocket,
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      title: "Growth Package",
      price: "₹5L - ₹10L",
      timeline: "12-16 weeks",
      features: [
        "Full feature set",
        "Custom design",
        "Advanced integrations",
        "6 months priority support",
        "Team training"
      ],
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      title: "Scale Ready",
      price: "₹10L+",
      timeline: "16-20 weeks",
      features: [
        "Scalable architecture",
        "Performance optimization",
        "Security audit",
        "12 months dedicated support",
        "Future roadmap"
      ],
      icon: Award,
      color: "from-orange-500 to-red-500",
      popular: false
    }
  ];

  // Research & Innovation
  const innovations = [
    {
      icon: Brain,
      title: "AI Integration Templates",
      desc: "Ready-to-use AI components for ChatGPT, image recognition, and more"
    },
    {
      icon: Fingerprint,
      title: "Startup Auth Systems",
      desc: "Pre-built authentication with social login, magic links, and 2FA"
    },
    {
      icon: Box,
      title: "MVP Boilerplates",
      desc: "Reusable code templates to launch your MVP 3x faster"
    },
    {
      icon: Zap,
      title: "Quick Deploy Solutions",
      desc: "One-click deployment setups for AWS, Vercel, and Netlify"
    }
  ];

  // Partnerships & Alliances
  const alliances = [
    { name: "AWS", logo: "amazonwebservices", tier: "Startup Program", url: "#" },
    { name: "Vercel", logo: "vercel", tier: "For Startups", url: "#" },
    { name: "Stripe", logo: "stripe", tier: "Atlas Partner", url: "#" },
    { name: "GitHub", logo: "github", tier: "Education Partner", url: "#" },
    { name: "MongoDB", logo: "mongodb", tier: "Startup Program", url: "#" },
    { name: "Figma", logo: "figma", tier: "Design Partner", url: "#" }
  ];

  // How We Work
  const howWeWork = [
    { step: "Discovery", desc: "We learn about your idea and goals", icon: Lightbulb },
    { step: "MVP Planning", desc: "Define core features for launch", icon: Target },
    { step: "Build & Iterate", desc: "Fast development with your feedback", icon: Code },
    { step: "Launch & Support", desc: "Go live and grow together", icon: Rocket }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Founder, TechStart",
      content: "They built our MVP in just 3 months. Perfect for our seed round demo. The team truly understands startup constraints.",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "CEO, EcomMart",
      content: "Finally found a tech team that understands startups. They're responsive, skilled, and care about our success.",
      rating: 5
    },
    {
      name: "Amit Kumar",
      role: "Co-founder, LogiTrack",
      content: "They're not just developers - they're true partners who helped us shape our product from day one.",
      rating: 5
    }
  ];

  return (
    <main className="pt-20 bg-white">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        
        <Container className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              We Build Software for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Startups Like Yours
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-200 max-w-2xl mx-auto">
              Custom software, websites, and mobile apps tailored for early-stage companies. 
              We're a startup too - we understand your journey.
            </p>
            <div className="mt-10 flex justify-center gap-6 flex-wrap">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all inline-flex items-center"
              >
                Discuss Your Startup 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
              <Link 
                to="/services" 
                className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center"
              >
                How We Help
              </Link>
            </div>
            <p className="text-sm text-gray-300 mt-8">
              ✨ Special rates for first-time founders and bootstrapped startups
            </p>
          </div>
        </Container>

        {/* Slider Controls */}
        <button 
          onClick={prevSlide} 
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur text-white p-3 rounded-full hover:bg-white/20 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur text-white p-3 rounded-full hover:bg-white/20 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        <div className="absolute bottom-8 w-full flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current 
                  ? "bg-white w-8" 
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </section>

      {/* WHAT WE DO - QUICK OVERVIEW */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What We Build</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Custom software solutions tailored for early-stage startups
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickServices.map((service, index) => (
              <Link
                key={index}
                to={`/services/${service.slug}`}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 text-center"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} mx-auto mb-4 flex items-center justify-center`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-700 transition">
                  Learn more <ArrowRight className="w-4 h-4 inline ml-1" />
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all"
            >
              View All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* WHY STARTUPS CHOOSE US */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Startups Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're in the same boat - building something from scratch
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyStartups.map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.color} mx-auto mb-4 flex items-center justify-center`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* OUR EXPERTISE */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Skills and technologies we bring to your startup
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, i) => (
                    <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* STARTUP PACKAGES */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Startup-Friendly Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible options designed for early-stage companies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {startupPackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 ${
                  pkg.popular 
                    ? 'border-2 border-blue-600 shadow-xl scale-105' 
                    : 'border border-gray-200 shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-8 bg-blue-600 text-white px-4 py-1 text-sm rounded-b-lg">
                    Most Popular
                  </div>
                )}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${pkg.color} flex items-center justify-center mb-6`}>
                  <pkg.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">{pkg.price}</p>
                <p className="text-sm text-gray-500 mb-6">Timeline: {pkg.timeline}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-lg font-semibold transition ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl'
                      : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* RESEARCH & INNOVATION */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Research & Innovation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What we're exploring to help startups launch faster
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovations.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/insights"
              className="inline-flex items-center text-purple-600 font-semibold hover:gap-2 transition-all"
            >
              Read Our Research Blog <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* PARTNERSHIPS & ALLIANCES */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Partnerships & Alliances</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tools and platforms we work with to deliver better solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {alliances.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center group"
              >
                <div className="bg-gray-50 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${partner.logo}/${partner.logo}-original.svg`}
                    alt={partner.name}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/48?text=${partner.name.charAt(0)}`;
                    }}
                  />
                </div>
                <h3 className="font-semibold text-sm">{partner.name}</h3>
                <p className="text-xs text-gray-500">{partner.tier}</p>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
            <Handshake className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Want to Partner With Us?</h3>
            <p className="text-gray-600 mb-4">
              We're always looking for new tools and platforms to help our startup clients
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all"
            >
              Let's Talk Partnership <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* HOW WE WORK WITH STARTUPS */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How We Work with Startups</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From idea to launch in 4 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {howWeWork.map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10">
                  <item.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
                <p className="text-gray-600">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TECH STACK */}
      <section className="py-20 bg-gray-900 text-white">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-4">Our Tech Stack</h2>
          <p className="text-xl text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Modern technologies we use to build your startup's software
          </p>
          
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "react", "nodejs", "python", "docker", "kubernetes", "aws",
              "postgresql", "mongodb", "typescript", "nextjs", "graphql", "redis"
            ].map((tech, index) => (
              <Tech key={index} name={tech} icon={tech} />
            ))}
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-4">What Founders Say</h2>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Real feedback from startup founders we've worked with
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">What You Get When You Work With Us</h2>
              <div className="space-y-4">
                {[
                  "Fully functional software tailored to your startup",
                  "Complete source code ownership",
                  "Technical documentation and user manuals",
                  "3 months free support after launch",
                  "Admin dashboard and analytics",
                  "Future growth roadmap",
                  "Startup-friendly payment terms",
                  "Direct access to developers"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
              >
                Start Your Startup Journey <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="/hero/hero-team.jpg"
                alt="Our team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold text-blue-600">100%</p>
                <p className="text-gray-600">Startup Friendly</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* STATS */}
      <StatsSection />

      {/* WHY CHOOSE US - DETAILED */}
      <WhyChooseUs />

      {/* GLOBAL PRESENCE */}
      <GlobalPresence />

      {/* MAP */}
      <OfficeMap />

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your Startup?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your idea and see how we can help you launch.
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
        </Container>
      </section>
    </main>
  );
}

/* TECH COMPONENT */
function Tech({ name, icon }) {
  const getIconUrl = () => {
    const iconMap = {
      'react': 'react',
      'nodejs': 'nodejs',
      'python': 'python',
      'docker': 'docker',
      'kubernetes': 'kubernetes',
      'aws': 'amazonwebservices',
      'postgresql': 'postgresql',
      'mongodb': 'mongodb',
      'typescript': 'typescript',
      'nextjs': 'nextjs',
      'graphql': 'graphql',
      'redis': 'redis'
    };
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconMap[icon] || icon}/${iconMap[icon] || icon}-original.svg`;
  };

  return (
    <div className="group flex flex-col items-center">
      <img
        src={getIconUrl()}
        className="w-12 h-12 object-contain mb-2 group-hover:scale-110 transition duration-300 filter brightness-0 invert"
        alt={name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://via.placeholder.com/48/ffffff/000000?text=${name.charAt(0).toUpperCase()}`;
        }}
      />
      <span className="text-sm text-gray-300 capitalize">{name}</span>
    </div>
  );
}