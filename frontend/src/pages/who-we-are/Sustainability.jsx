import { Link } from "react-router-dom";
import { 
  Leaf, 
  Heart, 
  Users, 
  Globe, 
  TreePine,
  ArrowRight,
  Sparkles,
  Target,
  Coffee
} from "lucide-react";

export default function Sustainability() {
  // Honest sustainability goals - just starting!
  const goals = [
    {
      icon: TreePine,
      title: "Plant Trees",
      desc: "Goal: Plant 10 trees for every project delivered. We'll start as soon as we deliver our first project.",
      timeline: "Starting 2024",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Teach Coding",
      desc: "Goal: Free workshops for underprivileged students. Planning our first session.",
      timeline: "Planning phase",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Founder Wellness",
      desc: "Goal: Free therapy/resources for bootstrapped founders. Researching partners.",
      timeline: "Exploring options",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Digital Sustainability",
      desc: "Goal: Optimize code to reduce server usage. Already practicing this!",
      timeline: "In progress",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const commitments = [
    "When we profit, we'll plant",
    "When we grow, we'll teach",
    "When we scale, we'll give back",
    "But first, we need to build"
  ];

  const currentActions = [
    "Writing efficient, optimized code (less server usage = smaller carbon footprint)",
    "Remote-first culture (no commuting emissions)",
    "Digital documentation (no paper)",
    "Planning first tree planting for first client project"
  ];

  return (
    <main className="pt-24 bg-white">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our
            <span className="block text-yellow-300">Sustainability</span>
          </h1>
          <p className="text-xl max-w-2xl text-green-100">
            We're just getting started, but we're already thinking about how to give back.
          </p>
        </div>
      </section>

      {/* HONEST INTRODUCTION */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-green-50 p-12 rounded-3xl text-center">
            <Coffee className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">The Honest Truth</h2>
            <p className="text-xl text-gray-700 mb-6">
              I'm a solo founder, bootstrapping this company. I don't have millions in funding 
              or a big corporate sustainability budget. But I believe in starting small and 
              growing with purpose.
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-bold text-green-600">Today:</span> I'm focused on building 
              a sustainable business first. But I'm also planning how to give back when I can.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT I'M DOING NOW */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">What I'm Doing Today</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Small steps that don't require a big budget
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {currentActions.map((action, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-gray-700">{action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE GOALS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Future Goals</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            What I want to do when the business grows
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${goal.color} flex items-center justify-center mb-4`}>
                  <goal.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{goal.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{goal.desc}</p>
                <p className="text-xs text-green-600 font-semibold">{goal.timeline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MY COMMITMENT */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">My Promise</h2>
            <div className="space-y-4 mb-8">
              {commitments.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 italic">
              "I'm building this company to last. When it does, giving back will be part of its DNA."
            </p>
            <p className="text-right mt-4 font-semibold">— Sumit</p>
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4 text-center">No Greenwashing Here</h2>
            <p className="text-lg text-center text-green-100 mb-6">
              I won't pretend to be a sustainable company until I actually am. 
              But I'll be transparent about every step of the journey.
            </p>
            <div className="flex justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition"
              >
                Have Ideas? Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Help Me Do Better</h2>
          <p className="text-xl text-gray-600 mb-8">
            If you have ideas for how a bootstrapped startup can give back, I'm all ears.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition"
          >
            Share Your Ideas <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}