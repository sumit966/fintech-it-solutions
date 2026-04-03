import FadeInSection from "../components/FadeInSection";

export default function CEO() {
  return (
    <main className="pt-24 bg-[#0B0F19] min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <FadeInSection>
            <div>
              <h1 className="text-5xl font-semibold mb-6">Leadership Message</h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                At <strong>Fintech IT Solutions</strong>, our mission is to empower
                organizations with intelligent technology platforms that accelerate
                digital transformation, strengthen financial infrastructure,
                and enable businesses to thrive in the modern digital economy.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="text-center">
              <img
                src="/ceo.jpg"
                alt="Sumit Raj CEO"
                className="rounded-xl shadow-2xl w-full"
              />
              <p className="mt-4 text-sm text-gray-400">
                Sumit Raj â€” Founder & CEO, Fintech IT Solutions
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ABOUT CEO */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInSection>
            <h2 className="text-4xl font-semibold mb-8 text-white">About the CEO</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              <strong>Sumit Raj</strong> is the Founder and CEO of
              <strong> Fintech IT Solutions</strong>, where he leads the companyâ€™s
              vision of building innovative and reliable technology solutions
              for the financial sector.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              With a strong passion for technology and entrepreneurship,
              he focuses on developing scalable digital products and IT
              services that help businesses adapt to the rapidly evolving
              fintech landscape.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              He completed his <strong>Masterâ€™s degree from Visvesvaraya National
              Institute of Technology (VNIT), Nagpur</strong>, one of Indiaâ€™s
              premier engineering institutions, and earned his
              <strong> B.Tech from Dr. D. Y. Patil Institute of Technology, Pune</strong>.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              His academic background has provided him with a solid foundation
              in engineering, technology, and problem-solving.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-[#0B0F19] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-16 text-white">Leadership Vision</h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-8 rounded-2xl hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4 text-white">Innovation</h3>
              <p className="text-gray-400">Driving innovation in fintech technologies and enterprise software solutions.</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-8 rounded-2xl hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4 text-white">Technology</h3>
              <p className="text-gray-400">Building scalable digital platforms using AI, cloud computing and modern engineering practices.</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-8 rounded-2xl hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4 text-white">Growth</h3>
              <p className="text-gray-400">Helping organizations adopt modern technology to accelerate digital transformation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 text-center">
        <h2 className="text-4xl font-semibold mb-6">Connect with the CEO</h2>
        <p className="text-gray-200 mb-8">
          Follow Sumit Raj on for insights on technology,
          innovation, and entrepreneurship.
        </p>
        
      </section>
    </main>
  );
}


