export default function HeroVideo() {
  return (

<section className="relative h-[90vh] overflow-hidden">

{/* VIDEO BACKGROUND */}

<video
autoPlay
muted
loop
playsInline
className="absolute w-full h-full object-cover"
>
<source src="/hero-tech.mp4" type="video/mp4" />
</video>

{/* DARK OVERLAY */}

<div className="absolute inset-0 bg-black/60"></div>

{/* CONTENT */}

<div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">

<div>

<h1 className="text-5xl md:text-6xl font-bold mb-6">
Engineering Future Digital Platforms
</h1>

<p className="max-w-2xl mx-auto text-lg text-gray-200">
FINTECH IT SOLUTIONS builds enterprise cloud platforms,
AI systems and secure digital infrastructure.
</p>

<a
href="/contact"
className="inline-block mt-8 bg-white text-black px-8 py-3 rounded hover:scale-105 transition"
>
Talk To Our Experts
</a>

</div>

</div>

</section>

  );
}