import FadeInSection from "./FadeInSection";
import { ShieldCheck, Cpu, Globe, Users, HeartHandshake, Zap } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <FadeInSection>
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-4">
            Why Choose Fintech IT Solutions
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            As a solo founder, I bring something big agencies can't: 
            complete focus on your success.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

            {/* Innovation - Just Me */}
            <div className="border p-8 hover:shadow-xl transition rounded-2xl">
              <Cpu className="mx-auto mb-4 w-12 h-12 text-blue-600"/>
              <h3 className="font-semibold text-lg mb-3">
                Modern Tech Stack
              </h3>
              <p className="text-gray-600 text-sm">
                I use cutting-edge technologies like React, Node.js, and cloud platforms 
                to build future-ready solutions.
              </p>
            </div>

            {/* Security - My Focus */}
            <div className="border p-8 hover:shadow-xl transition rounded-2xl">
              <ShieldCheck className="mx-auto mb-4 w-12 h-12 text-green-600"/>
              <h3 className="font-semibold text-lg mb-3">
                Security First
              </h3>
              <p className="text-gray-600 text-sm">
                Every line of code follows security best practices. Your data's safety is my priority.
              </p>
            </div>

            {/* Global - Vision */}
            <div className="border p-8 hover:shadow-xl transition rounded-2xl">
              <Globe className="mx-auto mb-4 w-12 h-12 text-purple-600"/>
              <h3 className="font-semibold text-lg mb-3">
                Global Vision
              </h3>
              <p className="text-gray-600 text-sm">
                Based in India, serving startups everywhere. Location doesn't matter - great code does.
              </p>
            </div>

            {/* Direct Access - This is the key difference */}
            <div className="border p-8 hover:shadow-xl transition rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <Users className="mx-auto mb-4 w-12 h-12 text-orange-600"/>
              <h3 className="font-semibold text-lg mb-3">
                Direct Access
              </h3>
              <p className="text-gray-600 text-sm">
                <span className="font-bold text-orange-600">You talk to me directly</span> - 
                no account managers, no sales team, no middlemen. Just me and your project.
              </p>
            </div>

          </div>

          {/* Honest Solo Founder Message */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center">
            <HeartHandshake className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">It's Just Me — And That's a Good Thing</h3>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              No big agency overhead. No team of 50 people billing you. 
              Just one passionate developer who cares deeply about your success.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">✅ You get my full attention</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✅ No hidden costs</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✅ Direct communication</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">✅ Startup-friendly rates</span>
            </div>
          </div>

        </div>
      </section>
    </FadeInSection>
  );
}