import CountUp from "react-countup";
import { useState, useEffect } from "react";

export default function StatsSection() {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    // Start counting when component mounts
    setStartCount(true);
  }, []);

  const stats = [
    {
      value: 3,
      label: "Projects Delivered",
      icon: "🚀",
      description: "Helping startups launch"
    },
    {
      value: 1,
      label: "Engineer",
      icon: "👨‍💻",
      description: "That's me! Solo founder"
    },
    {
      value: 1,
      label: "Country",
      icon: "🇮🇳",
      description: "India (for now)"
    },
    {
      value: 100,
      label: "Client Satisfaction",
      icon: "⭐",
      description: "So far, so good!",
      suffix: "%"
    }
  ];

  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl font-bold mb-4">Growing Strong</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Small team, big dreams. Here's where we stand today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((item, i) => (
            <div 
              key={i} 
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-5xl font-bold text-white mb-2">
                {startCount ? (
                  <>
                    <CountUp
                      end={item.value}
                      duration={2.5}
                    />
                    {item.suffix || "+"}
                  </>
                ) : (
                  "0+"
                )}
              </h3>
              <p className="text-xl font-semibold text-white mb-2">
                {item.label}
              </p>
              <p className="text-sm text-blue-200">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Honest Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-blue-200 bg-white/10 inline-block px-6 py-3 rounded-full">
            ✨ Bootstrapped, solo-founded, and growing one project at a time
          </p>
        </div>

        {/* Future Goals */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <p className="text-white/60 text-sm">Next milestone:</p>
            <p className="text-white font-semibold">10 projects delivered</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <p className="text-white/60 text-sm">Future goal:</p>
            <p className="text-white font-semibold">Build a small team</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center">
            <p className="text-white/60 text-sm">Vision:</p>
            <p className="text-white font-semibold">Help 100+ startups</p>
          </div>
        </div>
      </div>
    </section>
  );
}