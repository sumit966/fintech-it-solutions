import Container from "../../layout/Container";

export default function Cybersecurity() {
  return (
    <main className="pt-24 bg-[#0B0F19]">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">
        <Container>
          <h1 className="text-5xl font-semibold mb-6">Cybersecurity</h1>
          <p className="text-lg text-gray-200 max-w-3xl">
            Protect enterprise systems with advanced security architecture
            and real-time threat detection.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <h2 className="text-4xl font-semibold mb-8 text-white">Enterprise Security</h2>
          <p className="text-gray-400 max-w-3xl">
            Cybersecurity protects digital infrastructure from evolving
            threats and ensures data protection across systems.
          </p>
        </Container>
      </section>
    </main>
  );
}