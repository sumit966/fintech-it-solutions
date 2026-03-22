import { Link } from "react-router-dom";
import { Rocket, Target, Heart, Globe, Users, ArrowRight, CheckCircle, Sparkles, Lightbulb, Zap, Star } from "lucide-react";

export default function OurAspiration() {
  const aspirations = [
    { icon: Rocket, title: "Build 100+ Successful Startups", desc: "We aspire to help 100+ startups launch and scale their products over the next 5 years.", color: "from-blue-500 to-cyan-500" },
    { icon: Heart, title: "Make Quality Tech Accessible", desc: "Democratize access to enterprise-grade technology for early-stage companies.", color: "from-red-500 to-pink-500" },
    { icon: Users, title: "Create 50+ Tech Jobs", desc: "Build a team of 50+ passionate developers, designers, and strategists.", color: "from-green-500 to-emerald-500" },
    { icon: Globe, title: "Global Impact", desc: "Help startups from India reach customers worldwide.", color: "from-purple-500 to-indigo-500" }
  ];

  const goals = [
    { year: "Year 1", title: "Foundation", targets: ["Launch 10 MVPs", "Build team of 10", "Establish startup program", "Create open-source tools"] },
    { year: "Year 2", title: "Growth", targets: ["20+ successful launches", "Team of 25", "Startup workshops", "First international client"] },
    { year: "Year 3", title: "Scale", targets: ["50+ startups launched", "Team of 40", "Global partnerships", "Investor network"] },
    { year: "Year 5", title: "Impact", targets: ["100+ startups launched", "Team of 50+", "Global recognition", "Ecosystem leaders"] }
  ];

  return (
    <main className="pt-24 bg-[#0B0F19]">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our
            <span className="block text-yellow-300">Aspiration</span>
          </h1>
          <p className="text-xl max-w-2xl text-blue-100">
            We're building more than a company. We're building a movement to make 
            quality technology accessible to every startup.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">What We Dream of Achieving</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Big dreams that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aspirations.map((item, index) => (
              <div key={index} className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Why We Started This Journey</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">We Saw a Problem</h3>
                    <p className="text-gray-400">Startups were being charged ₹10L+ for simple MVPs. Agencies didn't understand their constraints. We knew there had to be a better way.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">We Believed in Change</h3>
                    <p className="text-gray-400">Every founder deserves access to quality technology, regardless of their budget. We decided to build the solution ourselves.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Now We're Building</h3>
                    <p className="text-gray-400">One startup at a time, we're making our dream a reality. Join us on this journey.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-2xl">
              <Sparkles className="w-16 h-16 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our North Star</h3>
              <p className="text-xl text-blue-100 mb-6">"Make quality technology accessible to every startup, everywhere."</p>
              <p className="text-blue-200">This simple statement guides every decision we make.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Our 5-Year Roadmap</h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">How we'll achieve our aspiration, step by step</p>
          <div className="grid md:grid-cols-4 gap-8">
            {goals.map((goal, index) => (
              <div key={index} className="relative">
                <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-6 rounded-2xl shadow-lg border-t-4 border-blue-500">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{goal.year}</div>
                  <h3 className="text-xl font-bold mb-4 text-white">{goal.title}</h3>
                  <ul className="space-y-2">
                    {goal.targets.map((target, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400">{target}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {index < goals.length - 1 && <div className="hidden md:block absolute top-1/2 -right-4 text-2xl text-gray-600">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0B0F19]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Be Part of Our Story</h2>
          <p className="text-xl text-gray-400 mb-8">Whether you're a founder, developer, or dreamer - there's a place for you in our journey.</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link to="/careers" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition">
              Join Our Team <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/contact" className="inline-flex items-center border-2 border-blue-600 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600/10 transition">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}