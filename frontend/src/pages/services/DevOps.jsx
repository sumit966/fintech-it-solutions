import Container from "../../layout/Container";

export default function DevOps() {
  return (
    <main className="pt-24 bg-[#0B0F19]">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">
        <Container>
          <h1 className="text-5xl font-semibold mb-6">DevOps & Automation</h1>
          <p className="text-lg text-gray-200 max-w-3xl">
            Accelerate delivery with continuous integration, deployment, and infrastructure as code.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <h2 className="text-4xl font-semibold mb-8 text-white">Our DevOps Solutions</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-8 rounded-xl">
              <h3 className="font-semibold mb-3 text-white">CI/CD Pipelines</h3>
              <p className="text-gray-400">Automated build, test, and deployment workflows.</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-8 rounded-xl">
              <h3 className="font-semibold mb-3 text-white">Infrastructure as Code</h3>
              <p className="text-gray-400">Manage cloud resources with Terraform, CloudFormation.</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-8 rounded-xl">
              <h3 className="font-semibold mb-3 text-white">Container Orchestration</h3>
              <p className="text-gray-400">Kubernetes, Docker Swarm for scalable microservices.</p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}