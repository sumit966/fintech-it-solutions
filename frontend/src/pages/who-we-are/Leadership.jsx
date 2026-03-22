import { Link } from "react-router-dom";
import { Linkedin, Mail, Award, BookOpen, ArrowRight, Users, Target, Heart, Lightbulb, Coffee, Code, Rocket } from "lucide-react";

export default function Leadership() {
  const founder = {
    name: "Sumit Raj",
    role: "Founder & Solo Developer",
    bio: "I started Fintech IT Solutions because I believed startups deserve better. No corporate nonsense, no hidden costs—just honest, quality code from someone who's been in your shoes.",
    story: "After years of building products for other startups, I decided to go solo. I wanted to create the kind of development experience I always wished existed: transparent, founder-first, and focused on what actually matters.",
    expertise: ["Full-Stack Development", "Product Strategy", "Startup Mentoring"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    linkedin: "https://linkedin.com/in/er-sumit-raj-/",
    email: "sumit@fintechitsolutions.com",
    color: "from-blue-600 to-cyan-600"
  };

  const philosophy = [
    { icon: Heart, title: "Founder-First", desc: "I've been there. I understand the struggle. Your success is my success." },
    { icon: Coffee, title: "Bootstrapped Mentality", desc: "I know what it's like to build with limited resources. Every rupee counts." },
    { icon: Code, title: "Hands-On Development", desc: "I write the code myself. No outsourcing, no junior devs learning on your project." },
    { icon: Rocket, title: "Hungry for Your Success", desc: "As a solo founder, your success is literally my success. I'm all in." }
  ];

  const whySolo = [
    "You talk directly to the developer - no account managers, no middlemen",
    "Faster decisions - I don't need to consult anyone",
    "Lower costs - no corporate overhead, no big team salaries",
    "Full accountability - my reputation is on every line of code",
    "Personal attention - your project gets my complete focus"
  ];

  return (
    <main className="pt-24 bg-[#0B0F19]">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Just Me,
            <span className="block text-yellow-300">For Now</span>
          </h1>
          <p className="text-xl max-w-2xl text-blue-100">
            Solo founder, solo developer, fully committed to your success. 
            Here's why that's actually a good thing.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#0B0F19]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-12 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-white">Hi, I'm Sumit 👋</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              I'm the entire company. Developer, designer, strategist, and coffee maker. 
              And you know what? That means you get 100% of my attention.
            </p>
            <div className="flex justify-center gap-4">
              <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition">
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a href={`mailto:${founder.email}`} className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition">
                <Mail className="w-6 h-6 text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Why Solo Works for You</h2>
              <div className="space-y-4">
                {whySolo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-400 text-sm font-bold">✓</span>
                    </div>
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">The Truth?</h3>
              <p className="text-xl text-blue-100 mb-4">Big agencies have big overhead. You pay for their offices, their sales team, their managers.</p>
              <p className="text-xl text-blue-100">With me, you pay for code. That's it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">How I Work</h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">My philosophy as a solo founder</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophy.map((item, index) => (
              <div key={index} className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8 text-white">What I Bring to the Table</h2>
          <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-8 rounded-2xl shadow-lg">
            <div className="flex flex-wrap gap-3 mb-6">
              {founder.expertise.map((skill, i) => (
                <span key={i} className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full font-medium">{skill}</span>
              ))}
            </div>
            <p className="text-gray-300 text-lg">{founder.story}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0B0F19]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">What's Next?</h2>
          <p className="text-xl text-gray-400 mb-8">I'm growing, but slowly and deliberately. When I do hire, it'll be people who share my values.</p>
          <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-8 rounded-2xl shadow-lg">
            <p className="text-gray-300 mb-4"><span className="font-bold text-white">Today:</span> Just me, giving 100% to each client</p>
            <p className="text-gray-300 mb-4"><span className="font-bold text-white">Tomorrow:</span> A small team of hand-picked experts</p>
            <p className="text-gray-300"><span className="font-bold text-white">Always:</span> Founder-first, transparent, quality-focused</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Want to Work Directly With Me?</h2>
          <p className="text-xl text-blue-100 mb-8">No account managers. No sales calls. Just me and your project.</p>
          <Link to="/contact" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition">
            Let's Talk <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}