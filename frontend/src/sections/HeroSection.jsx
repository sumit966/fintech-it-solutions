import Container from "../layout/Container";
import heroImage from "../assets/home/hero.jpg";

export default function Home() {
  return (
    <main className="pt-20">

      {/* HERO */}
      <section className="relative h-[85vh]">
        <img
          src={heroImage}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <Container className="relative z-10 flex items-center h-full">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-semibold leading-tight">
              Engineering Intelligent  
              Enterprise Transformation
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              We partner with global enterprises to design, build and scale mission-critical digital platforms.
            </p>

            <button className="mt-8 bg-white text-black px-6 py-3 rounded">
              Learn More
            </button>
          </div>
        </Container>
      </section>

    </main>
  );
}