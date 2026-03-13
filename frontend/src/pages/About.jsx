import { useState } from "react";

import heroImg from "../assets/about/about-hero.jpg";
import whoImg from "../assets/about/who-we-are.jpg";
import leaderImg from "../assets/about/leadership.jpg";
import cultureImg from "../assets/about/culture.jpg";

export default function About() {
  const [open, setOpen] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Who We Are",
      image: whoImg,
      text: `
FINTECH IT SOLUTIONS is a technology-driven organization focused on building
secure, scalable, and enterprise-grade digital solutions.

We partner with startups, enterprises, and global clients to modernize
systems, improve efficiency, and deliver measurable business value through
technology.
      `,
    },
    {
      id: 2,
      title: "Leadership & Vision",
      image: leaderImg,
      text: `
Our leadership believes in long-term partnerships, innovation with purpose,
and building systems that last.

We focus on technology excellence, ethical delivery, and future-ready
solutions that help businesses grow sustainably.
      `,
    },
    {
      id: 3,
      title: "Our Culture",
      image: cultureImg,
      text: `
We foster a collaborative, inclusive, and growth-oriented culture where
learning never stops.

Our teams work with modern tools, global best practices, and a strong focus
on quality, security, and performance.
      `,
    },
  ];

  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section
        className="h-[70vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.5)), url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-semibold">
            Who We Are
          </h1>
          <p className="mt-6 max-w-3xl text-gray-300 text-lg">
            A global technology company delivering enterprise-grade
            digital solutions with a focus on innovation, security,
            and long-term value.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {sections.map((item) => (
            <div
              key={item.id}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* TEXT */}
              <div>
                <h2 className="text-3xl font-semibold">
                  {item.title}
                </h2>

                <p className="mt-6 text-gray-600 leading-relaxed whitespace-pre-line">
                  {open === item.id
                    ? item.text
                    : item.text.slice(0, 180) + "..."}
                </p>

                <button
                  onClick={() =>
                    setOpen(open === item.id ? null : item.id)
                  }
                  className="mt-6 inline-block text-blue-600 font-medium hover:underline"
                >
                  {open === item.id ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12">
            Our Principles
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Customer-Centric Approach",
              "Enterprise-Grade Quality",
              "Security & Compliance",
              "Continuous Innovation",
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <p className="font-medium text-gray-800">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}