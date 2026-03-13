import FadeInSection from "./FadeInSection";
import { ShieldCheck, Cpu, Globe, Users } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <FadeInSection>
      <section className="py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-semibold text-center mb-16">
            Why Choose Fintech IT Solutions
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-center">

            {/* Innovation */}

            <div className="border p-8 hover:shadow-xl transition">

              <Cpu className="mx-auto mb-4 w-10 h-10 text-blue-600"/>

              <h3 className="font-semibold text-lg mb-3">
                Innovation Driven
              </h3>

              <p className="text-gray-600 text-sm">
                We leverage cutting-edge technologies like AI,
                cloud computing and automation to build modern
                enterprise platforms.
              </p>

            </div>


            {/* Security */}

            <div className="border p-8 hover:shadow-xl transition">

              <ShieldCheck className="mx-auto mb-4 w-10 h-10 text-green-600"/>

              <h3 className="font-semibold text-lg mb-3">
                Enterprise Security
              </h3>

              <p className="text-gray-600 text-sm">
                Our cybersecurity frameworks ensure secure
                digital infrastructure for mission-critical systems.
              </p>

            </div>


            {/* Global */}

            <div className="border p-8 hover:shadow-xl transition">

              <Globe className="mx-auto mb-4 w-10 h-10 text-purple-600"/>

              <h3 className="font-semibold text-lg mb-3">
                Global Delivery
              </h3>

              <p className="text-gray-600 text-sm">
                Engineering teams across multiple locations
                delivering scalable technology solutions.
              </p>

            </div>


            {/* Talent */}

            <div className="border p-8 hover:shadow-xl transition">

              <Users className="mx-auto mb-4 w-10 h-10 text-orange-600"/>

              <h3 className="font-semibold text-lg mb-3">
                Expert Talent
              </h3>

              <p className="text-gray-600 text-sm">
                Experienced engineers specializing in
                AI, cloud architecture and enterprise systems.
              </p>

            </div>

          </div>

        </div>

      </section>
    </FadeInSection>
  );
}