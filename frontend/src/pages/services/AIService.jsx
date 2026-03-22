import Container from "../../layout/Container";

export default function AIService() {
  return (
    <main className="pt-24 bg-[#0B0F19]">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">
        <Container>
          <h1 className="text-5xl font-semibold mb-6">AI & Machine Learning</h1>
          <p className="text-lg text-gray-200 max-w-3xl">
            We build intelligent AI systems that enable predictive analytics,
            automation, and data-driven decision making.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <h2 className="text-4xl font-semibold mb-8 text-white">AI Powered Innovation</h2>
          <p className="text-gray-400 max-w-3xl">
            Artificial intelligence allows organizations to unlock insights
            from massive data and automate complex processes.
          </p>
        </Container>
      </section>

      <section className="bg-[#0B0F19] py-24">
        <Container>
          <h2 className="text-4xl font-semibold mb-12 text-white">AI Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-8 rounded-xl">
              <h3 className="font-semibold mb-3 text-white">Predictive Analytics</h3>
              <p className="text-gray-400">Machine learning models to forecast business outcomes.</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-8 rounded-xl">
              <h3 className="font-semibold mb-3 text-white">AI Automation</h3>
              <p className="text-gray-400">Automate enterprise workflows using AI models.</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-8 rounded-xl">
              <h3 className="font-semibold mb-3 text-white">Data Intelligence</h3>
              <p className="text-gray-400">Transform raw data into strategic insights.</p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}