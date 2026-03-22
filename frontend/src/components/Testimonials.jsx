import { useState } from "react";

const testimonials = [
  {
    name: "Enterprise Client",
    text: "Fintech IT Solutions delivered a scalable platform."
  },
  {
    name: "Banking Partner",
    text: "Excellent AI and cloud engineering expertise."
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index + 1) % testimonials.length);
  };

  return (
    <section className="py-24 text-center bg-[#0B0F19]">
      <h2 className="text-4xl font-semibold mb-10 text-white">Client Testimonials</h2>
      <div className="max-w-3xl mx-auto bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-10 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
        <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
        <p className="text-lg mb-6 text-gray-300 leading-relaxed">
          "{testimonials[index].text}"
        </p>
        <h3 className="font-semibold text-lg text-blue-400">{testimonials[index].name}</h3>
        <button
          onClick={next}
          className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded hover:shadow-xl transition hover:scale-105"
        >
          Next
        </button>
      </div>
    </section>
  );
}