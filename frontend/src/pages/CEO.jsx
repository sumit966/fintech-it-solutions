import FadeInSection from "../components/FadeInSection";

export default function CEO(){

return(

<main className="pt-24 bg-white min-h-screen">


{/* HERO SECTION */}

<section className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white py-24">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

<FadeInSection>

<div>

<h1 className="text-5xl font-semibold mb-6">
Leadership Message
</h1>

<p className="text-gray-300 text-lg leading-relaxed">

At <strong>Fintech IT Solutions</strong>, our mission is to empower
organizations with intelligent technology platforms that accelerate
digital transformation, strengthen financial infrastructure,
and enable businesses to thrive in the modern digital economy.

</p>

</div>

</FadeInSection>


<FadeInSection>

<div className="text-center">

<img
src="/ceo.jpg"
alt="Sumit Raj CEO"
className="rounded-xl shadow-2xl w-full"
/>

<p className="mt-4 text-sm text-gray-400">
Sumit Raj — Founder & CEO, Fintech IT Solutions
</p>

</div>

</FadeInSection>

</div>

</section>



{/* ABOUT CEO */}

<section className="py-24">

<div className="max-w-5xl mx-auto px-6">

<FadeInSection>

<h2 className="text-4xl font-semibold mb-8">
About the CEO
</h2>

<p className="text-gray-600 text-lg leading-relaxed mb-6">

<strong>Sumit Raj</strong> is the Founder and CEO of
<strong> Fintech IT Solutions</strong>, where he leads the company’s
vision of building innovative and reliable technology solutions
for the financial sector.

</p>

<p className="text-gray-600 text-lg leading-relaxed mb-6">

With a strong passion for technology and entrepreneurship,
he focuses on developing scalable digital products and IT
services that help businesses adapt to the rapidly evolving
fintech landscape.

</p>

<p className="text-gray-600 text-lg leading-relaxed mb-6">

He completed his <strong>Master’s degree from Visvesvaraya National
Institute of Technology (VNIT), Nagpur</strong>, one of India’s
premier engineering institutions, and earned his
<strong> B.Tech from Dr. D. Y. Patil Institute of Technology, Pune</strong>.

</p>

<p className="text-gray-600 text-lg leading-relaxed">

His academic background has provided him with a solid foundation
in engineering, technology, and problem-solving.

</p>

</FadeInSection>

</div>

</section>



{/* LEADERSHIP */}

<section className="bg-gray-100 py-24">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-4xl font-semibold text-center mb-16">
Leadership Vision
</h2>

<div className="grid md:grid-cols-3 gap-10 text-center">

<div className="border p-8 bg-white hover:shadow-xl transition">

<h3 className="text-2xl font-semibold mb-4">
Innovation
</h3>

<p className="text-gray-600">
Driving innovation in fintech technologies and enterprise
software solutions.
</p>

</div>


<div className="border p-8 bg-white hover:shadow-xl transition">

<h3 className="text-2xl font-semibold mb-4">
Technology
</h3>

<p className="text-gray-600">
Building scalable digital platforms using AI,
cloud computing and modern engineering practices.
</p>

</div>


<div className="border p-8 bg-white hover:shadow-xl transition">

<h3 className="text-2xl font-semibold mb-4">
Growth
</h3>

<p className="text-gray-600">
Helping organizations adopt modern technology
to accelerate digital transformation.
</p>

</div>

</div>

</div>

</section>



{/* LINKEDIN */}

<section className="bg-black text-white py-24 text-center">

<h2 className="text-4xl font-semibold mb-6">
Connect with the CEO
</h2>

<p className="text-gray-300 mb-8">
Follow Sumit Raj on LinkedIn for insights on technology,
innovation, and entrepreneurship.
</p>

<a
href="https://www.linkedin.com/in/er-sumit-raj-/"
target="_blank"
rel="noopener noreferrer"
className="bg-white text-black px-8 py-3 inline-block hover:bg-gray-200 transition"
>

View LinkedIn Profile

</a>

</section>


</main>

)

}