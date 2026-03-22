import Container from "../../layout/Container";

export default function CloudEngineering() {
  return (
    <main className="pt-24 bg-[#0B0F19]">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-28">
        <Container>
          <h1 className="text-5xl font-semibold mb-6">Cloud Engineering</h1>
          <p className="text-lg text-gray-200 max-w-3xl">
            FINTECH IT SOLUTIONS helps enterprises migrate, design,
            and scale cloud infrastructure using AWS, Azure and Google Cloud.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <h2 className="text-4xl font-semibold mb-6 text-white">The Enterprise Challenge</h2>
          <p className="text-gray-400 max-w-3xl leading-relaxed">
            Many organizations still rely on legacy infrastructure that
            limits scalability and increases operational costs. Without
            modern cloud platforms, enterprises struggle with slow
            deployment cycles and limited global availability.
          </p>
        </Container>
      </section>

      <section className="bg-[#0B0F19] py-24">
        <Container>
          <h2 className="text-4xl font-semibold mb-12 text-white">Our Cloud Solutions</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-8 rounded-xl">
              <h3 className="font-semibold mb-3 text-white">Cloud Migration</h3>
              <p className="text-gray-400">Seamlessly migrate enterprise workloads from legacy data centers to AWS, Azure or Google Cloud.</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-8 rounded-xl">
              <h3 className="font-semibold mb-3 text-white">Cloud Architecture</h3>
              <p className="text-gray-400">Design resilient infrastructure capable of supporting millions of global users.</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-8 rounded-xl">
              <h3 className="font-semibold mb-3 text-white">DevOps Automation</h3>
              <p className="text-gray-400">Automated CI/CD pipelines and infrastructure as code for faster deployment cycles.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <h2 className="text-4xl font-semibold mb-10 text-white">Enterprise Cloud Architecture</h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-8 rounded-xl">
              <h3 className="font-semibold mb-3 text-white">Global Infrastructure</h3>
              <p className="text-gray-400">Deploy applications across global cloud regions.</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-8 rounded-xl">
              <h3 className="font-semibold mb-3 text-white">High Availability</h3>
              <p className="text-gray-400">Redundant systems ensure 99.99% uptime.</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-8 rounded-xl">
              <h3 className="font-semibold mb-3 text-white">Security</h3>
              <p className="text-gray-400">Enterprise security frameworks and identity access control.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">
        <Container>
          <h2 className="text-4xl font-semibold mb-4">Start Your Cloud Transformation</h2>
          <p className="text-gray-200 max-w-xl">Partner with FINTECH IT SOLUTIONS to design scalable cloud platforms that accelerate innovation.</p>
          <a href="/contact" className="inline-block mt-8 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition">
            Talk to Our Experts
          </a>
        </Container>
      </section>
    </main>
  );
}