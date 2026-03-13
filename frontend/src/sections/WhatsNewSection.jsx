import { useState } from "react";
import ImageCard from "../components/ImageCard";
import ImageModal from "../components/ImageModal";

import industriesImg from "../assets/home/industries.jpg";
import servicesImg from "../assets/home/services.jpg";
import platformsImg from "../assets/home/platforms.jpg";

export default function WhatWeDo() {
  const [active, setActive] = useState(null);

  const data = [
    {
      title: "Industries",
      subtitle: "Driving transformation across sectors",
      image: industriesImg,
      content:
        "We partner with enterprises across BFSI, Healthcare, Retail, Manufacturing, and Technology to modernize operations and deliver measurable business outcomes."
    },
    {
      title: "Services",
      subtitle: "End-to-end digital capabilities",
      image: servicesImg,
      content:
        "Our services span application development, cloud engineering, AI & ML, data analytics, cybersecurity, and enterprise system integration."
    },
    {
      title: "Products & Platforms",
      subtitle: "Accelerating innovation",
      image: platformsImg,
      content:
        "We build scalable platforms, internal tools, dashboards, and enterprise products that accelerate digital adoption and improve operational efficiency."
    }
  ];

  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-white mb-12">
          What We Do
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, i) => (
            <ImageCard
              key={i}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              onClick={() => setActive(item)}
            />
          ))}
        </div>

        <ImageModal
          open={!!active}
          onClose={() => setActive(null)}
          title={active?.title}
          content={active?.content}
        />

      </div>
    </div>
  );
}
