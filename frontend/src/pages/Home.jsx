import { Link } from "react-router-dom";
import Container from "../layout/Container";
import heroImage from "../assets/home/hero.jpg";
import StatsSection from "../components/StatsSection";
import FadeInSection from "../components/FadeInSection";
import OfficeMap from "../components/OfficeMap";
import WhyChooseUs from "../components/WhyChooseUs";
import GlobalPresence from "../components/GlobalPresence";

export default function Home() {
  return (
    <main className="pt-20 bg-white">

      {/* HERO */}
      <section className="relative h-[90vh] overflow-hidden">

        <img
          src={heroImage}
          alt="Enterprise Technology"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>

        <div className="absolute inset-0 hero-glow"></div>

        <Container className="relative z-10 flex items-center h-full">

          <div className="max-w-3xl text-white">

            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
              Engineering Intelligent Enterprise Transformation
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              FINTECH IT SOLUTIONS partners with global enterprises to design,
              build and scale mission-critical digital platforms across
              cloud computing, artificial intelligence, cybersecurity,
              and enterprise architecture.
            </p>

            <div className="mt-10 flex gap-6">

              <Link
                to="/services"
                className="bg-white text-black px-8 py-3 hover:bg-gray-200 transition hover:scale-105"
              >
                Explore Services
              </Link>

              <Link
                to="/contact"
                className="border border-white px-8 py-3 hover:bg-white hover:text-black transition hover:scale-105"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </Container>

      </section>


      {/* SERVICES */}
      <FadeInSection>
      <section className="py-28">
        <Container>

          <h2 className="text-4xl font-semibold mb-16">
            Our Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            <div className="border p-8 hover:shadow-2xl transition duration-300 card-hover">
              <h3 className="text-xl font-semibold mb-4">
                ☁️ Cloud Engineering
              </h3>
              <p className="text-gray-600">
                Design and deploy highly scalable infrastructure across
                AWS, Azure, and hybrid enterprise environments.
              </p>
            </div>

            <div className="border p-8 hover:shadow-2xl transition duration-300 card-hover">
              <h3 className="text-xl font-semibold mb-4">
                🤖 AI & Data Platforms
              </h3>
              <p className="text-gray-600">
                Build machine learning platforms and data ecosystems
                that enable predictive insights and intelligent automation.
              </p>
            </div>

            <div className="border p-8 hover:shadow-2xl transition duration-300 card-hover">
              <h3 className="text-xl font-semibold mb-4">
                🔐 Cybersecurity
              </h3>
              <p className="text-gray-600">
                Implement zero-trust architectures and enterprise security
                frameworks to protect mission-critical infrastructure.
              </p>
            </div>

          </div>

        </Container>
      </section>
      </FadeInSection>


      {/* CORPORATE STATS */}
      <FadeInSection>
        <StatsSection />
      </FadeInSection>


      {/* CLIENT LOGOS */}
      <FadeInSection>
      <section className="bg-gray-100 py-20">

        <Container>

          <h2 className="text-3xl font-semibold text-center mb-12">
            Trusted by Global Technology Leaders
          </h2>

          <div className="overflow-hidden">

            <div className="flex gap-20 animate-scroll opacity-70">

              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" className="h-10"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" className="h-10"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="h-10"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" className="h-10"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Oracle_logo.svg" className="h-10"/>

              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" className="h-10"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" className="h-10"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="h-10"/>

            </div>

          </div>

        </Container>

      </section>
      </FadeInSection>


      {/* TECHNOLOGY STACK */}
      <FadeInSection>
      <section className="py-24 bg-gray-50">

        <Container>

          <h2 className="text-4xl font-semibold mb-16 text-center">
            Technology Stack
          </h2>

          <div className="grid md:grid-cols-5 gap-10 text-center">

            <div className="border p-8 hover:shadow-xl transition">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="h-12 mx-auto mb-4"/>
              React
            </div>

            <div className="border p-8 hover:shadow-xl transition">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="h-12 mx-auto mb-4"/>
              Node.js
            </div>

            <div className="border p-8 hover:shadow-xl transition">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="h-12 mx-auto mb-4"/>
              Python
            </div>

            <div className="border p-8 hover:shadow-xl transition">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="h-12 mx-auto mb-4"/>
              Docker
            </div>

            <div className="border p-8 hover:shadow-xl transition">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" className="h-12 mx-auto mb-4"/>
              Kubernetes
            </div>

          </div>

        </Container>

      </section>
      </FadeInSection>


      {/* WHY CHOOSE US */}
      <WhyChooseUs />


      {/* GLOBAL PRESENCE MAP */}
      <GlobalPresence />


      {/* INDIA OFFICE MAP */}
      <OfficeMap />


      {/* CTA */}
      <FadeInSection>
      <section className="bg-black text-white py-28">

        <Container>

          <div className="max-w-3xl">

            <h2 className="text-4xl font-semibold">
              Let’s build the future of enterprise technology together
            </h2>

            <p className="mt-6 text-gray-300">
              Partner with FINTECH IT SOLUTIONS to accelerate your
              digital transformation journey.
            </p>

            <Link
              to="/contact"
              className="mt-10 inline-block bg-white text-black px-8 py-3 hover:bg-gray-200 transition"
            >
              Get in Touch
            </Link>

          </div>

        </Container>

      </section>
      </FadeInSection>

    </main>
  );
}