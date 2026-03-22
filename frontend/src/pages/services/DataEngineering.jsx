import Container from "../../layout/Container";

export default function DataEngineering() {
  return (
    <main className="pt-24 bg-[#0B0F19]">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">
        <Container>
          <h1 className="text-5xl font-semibold mb-6">Data Engineering</h1>
          <p className="text-lg text-gray-200 max-w-3xl">
            Build modern data pipelines and analytics platforms to power
            enterprise intelligence.
          </p>
        </Container>
      </section>
    </main>
  );
}