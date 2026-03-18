import { useState } from "react";
import { 
  Target, 
  Users, 
  Heart, 
  Zap, 
  Shield, 
  Globe,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Sparkles,
  Coffee,
  Code
} from "lucide-react";
import { Link } from "react-router-dom";

import heroImg from "../assets/about/about-hero.jpg";
import whoImg from "../assets/about/who-we-are.jpg";
import leaderImg from "../assets/about/leadership.jpg";
import cultureImg from "../assets/about/culture.jpg";

export default function About() {
  const [open, setOpen] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Our Story",
      image: whoImg,
      text: `Founded by developers who understand the challenges of building from scratch, Fintech IT Solutions was born from a simple idea: every startup deserves access to great technology without the corporate markup.

We started this company because we saw too many early-stage companies struggle with expensive agencies and outdated tech. We believe that great software should be accessible, transparent, and built with genuine partnership.

Today, we're a team of passionate developers, designers, and strategists dedicated to helping startups launch and grow.`,
    },
    {
      id: 2,
      title: "Our Mission",
      image: leaderImg,
      text: `Our mission is simple: Help startups succeed through custom software solutions.

We envision a world where every early-stage company, regardless of funding or size, has access to enterprise-grade technology that helps them compete and win.

We're building long-term partnerships, not just completing projects. Your growth is our growth, and we're committed to being there for you every step of the way.`,
    },
    {
      id: 3,
      title: "Our Culture",
      image: cultureImg,
      text: `We're builders, learners, and problem-solvers. Our culture is built on:

• Continuous Learning - We're always exploring new technologies
• Collaboration - Great ideas come from teamwork
• Quality - We take pride in clean, efficient code
• Transparency - No hidden agendas, just honest communication
• Startup Mindset - We move fast and adapt quickly

We're a small team with big ambitions, and we're looking for partners who share our passion for building amazing things.`,
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Client Success First",
      desc: "Your success is our success. We measure our performance by your results.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Quality Without Compromise",
      desc: "Every line of code is tested, reviewed, and optimized for performance.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Passion for Technology",
      desc: "We love what we do, and it shows in every project we deliver.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Partnership, Not Vendor",
      desc: "We're your technology partners, here to guide you through your journey.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Agile & Adaptive",
      desc: "We move fast and adapt to changing requirements.",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: Globe,
      title: "Startup-Friendly",
      desc: "Flexible terms and special rates for early-stage companies.",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const whyWorkWithUs = [
    "Fresh perspective - We're not stuck in old ways of thinking",
    "Hungry for success - Your project gets our full attention",
    "Modern tech stack - We use the latest tools and frameworks",
    "Direct access - Talk directly to the people building your software",
    "Flexible partnership - We adapt to your needs, not the other way around"
  ];

  const expertise = [
    { number: "6+", label: "Technologies Mastered", icon: Code },
    { number: "100%", label: "Focus on Startups", icon: Target },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "∞", label: "Passion for Code", icon: Heart }
  ];

  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section
        className="h-[80vh] flex items-center relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.6)), url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            We're a Fresh,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Passionate Tech Team
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-gray-300 text-xl leading-relaxed">
            Building software for startups since 2024. No bureaucracy, 
            no corporate jargon—just great code and genuine partnerships.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              Start a Conversation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Expertise Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {expertise.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300 flex items-center justify-center">
                    <stat.icon className="w-4 h-4 mr-2" />
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STORY SECTIONS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {sections.map((item, index) => (
            <div
              key={item.id}
              className={`grid md:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}
            >
              {/* IMAGE */}
              <div className={`overflow-hidden rounded-2xl shadow-2xl ${
                index % 2 === 1 ? 'md:col-start-2' : ''
              }`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[400px] object-cover hover:scale-110 transition duration-700"
                />
              </div>

              {/* TEXT */}
              <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                <h2 className="text-4xl font-bold mb-6">{item.title}</h2>

                <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                  {open === item.id
                    ? item.text
                    : item.text.slice(0, 250) + "..."}
                </p>

                <button
                  onClick={() => setOpen(open === item.id ? null : item.id)}
                  className="mt-6 inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all"
                >
                  {open === item.id ? "Show Less" : "Read More"}
                  <ArrowRight className={`w-4 h-4 ml-2 transition-transform ${
                    open === item.id ? 'rotate-90' : ''
                  }`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Work With a New Startup?</h2>
              <div className="space-y-4 mb-8">
                {whyWorkWithUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Sparkles className="w-6 h-6 text-blue-600 mr-2" />
                  Our Commitment to Startups
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">Special rates for first-time founders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">Flexible payment terms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">Equity options for promising startups</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-2xl">
              <h3 className="text-3xl font-bold mb-4">Ready to Build?</h3>
              <p className="text-xl text-blue-100 mb-8">
                Let's create something amazing together. We're just a message away.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
              >
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}