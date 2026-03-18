import { Link } from "react-router-dom";
import { 
  Heart, 
  Star, 
  Shield, 
  Zap, 
  Users,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Palette,
  MessageCircle,
  Eye
} from "lucide-react";

export default function Brand() {
  const values = [
    {
      icon: Heart,
      title: "Founder-First",
      desc: "We put founders at the center of everything. Your success is our success.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Radical Transparency",
      desc: "No hidden costs, no surprises. You always know what's happening.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Speed with Quality",
      desc: "We move fast, but never at the cost of quality.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Partnership, Not Vendor",
      desc: "We're in this together. Long-term relationships over short-term gains.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const personality = [
    {
      trait: "Approachable",
      desc: "No corporate jargon. We talk like humans.",
      icon: MessageCircle
    },
    {
      trait: "Bold",
      desc: "We're not afraid to challenge the status quo.",
      icon: Zap
    },
    {
      trait: "Authentic",
      desc: "We are who we are. No pretense.",
      icon: Eye
    },
    {
      trait: "Creative",
      desc: "We find elegant solutions to complex problems.",
      icon: Palette
    }
  ];

  const promises = [
    "You'll always talk to a real person, not a sales bot",
    "We'll never surprise you with hidden costs",
    "Your success metrics are our success metrics",
    "We build for the long term, not quick wins",
    "Your code is yours - full ownership, always"
  ];

  return (
    <main className="pt-24 bg-white">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our
            <span className="block text-yellow-300">Brand</span>
          </h1>
          <p className="text-xl max-w-2xl text-purple-100">
            More than a logo. More than a name. This is who we are and what we stand for.
          </p>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND PERSONALITY */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Personality</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              If we were a person, this is who we'd be
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {personality.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.trait}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND PROMISES */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <Sparkles className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Our Promises to You</h2>
            <p className="text-xl text-gray-600">
              Things you can count on, every single time
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-12 rounded-3xl">
            <div className="space-y-6">
              {promises.map((promise, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-lg text-gray-800">{promise}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY IN NUMBERS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Brand in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">100%</div>
              <p className="text-gray-600">Founder Focused</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">0</div>
              <p className="text-gray-600">Hidden Costs</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">24/7</div>
              <p className="text-gray-600">Founder Support</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">∞</div>
              <p className="text-gray-600">Partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the Difference</h2>
          <p className="text-xl text-gray-600 mb-8">
            Work with a team that actually cares about your success.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition"
          >
            Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}