import industriesImg from "../assets/home/industries.jpg";
import servicesImg from "../assets/home/services.jpg";
import platformsImg from "../assets/home/platforms.jpg";
import PageTransition from "../components/PageTransition";

export default function Services() {

const services = [
{
title:"Cloud Engineering",
desc:"Design and deploy scalable cloud infrastructure using AWS, Azure, and Google Cloud platforms."
},
{
title:"AI & Machine Learning",
desc:"Develop intelligent applications, predictive analytics systems, and automation using AI technologies."
},
{
title:"DevOps & Automation",
desc:"Accelerate software delivery through CI/CD pipelines, infrastructure automation, and container platforms."
},
{
title:"Cybersecurity",
desc:"Protect enterprise infrastructure with modern security frameworks and threat monitoring solutions."
},
{
title:"Application Development",
desc:"Build secure and scalable web and mobile applications using modern frameworks and architectures."
},
{
title:"Data Engineering",
desc:"Design enterprise data pipelines, analytics platforms, and business intelligence solutions."
}
];

return (

<PageTransition>

<main className="pt-28 bg-white">

{/* HERO */}

<section className="max-w-7xl mx-auto px-6 py-20">

<h1 className="text-5xl font-semibold mb-8">
Enterprise Technology Services
</h1>

<p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
FINTECH IT SOLUTIONS helps enterprises modernize digital
infrastructure, adopt cloud-native architectures, and deliver
scalable platforms that power innovation and growth.
</p>

</section>


{/* INDUSTRIES */}

<section className="py-24 bg-gray-100">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

<img
src={industriesImg}
alt="Industry expertise"
className="w-full h-[420px] object-cover rounded-lg"
/>

<div>

<h2 className="text-4xl font-semibold mb-6">
Industry Expertise
</h2>

<p className="text-gray-600 leading-relaxed mb-6">
Our teams collaborate with global enterprises across banking,
fintech, healthcare, retail, and manufacturing sectors to
modernize digital ecosystems and unlock new business value.
</p>

<p className="text-gray-600 leading-relaxed">
By combining deep domain expertise with cutting-edge
technologies, we deliver industry-aligned digital
transformation strategies.
</p>

</div>

</div>

</section>


{/* CORE SERVICES */}

<section className="py-24">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

<div>

<h2 className="text-4xl font-semibold mb-6">
Core Services
</h2>

<p className="text-gray-600 leading-relaxed mb-6">
Our service portfolio spans application modernization,
enterprise cloud migration, cybersecurity engineering,
DevOps automation, AI and data analytics.
</p>

<p className="text-gray-600 leading-relaxed">
We design scalable digital systems that support mission-critical
enterprise workloads while ensuring security, resilience,
and performance.
</p>

</div>

<img
src={servicesImg}
alt="Technology services"
className="w-full h-[420px] object-cover rounded-lg"
/>

</div>

</section>


{/* SERVICES GRID */}

<section className="pb-24">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-semibold mb-16 text-center">
Technology Capabilities
</h2>

<div className="grid md:grid-cols-3 gap-10">

{services.map((service,i)=>(

<div
key={i}
className="border p-8 rounded-lg hover:shadow-xl hover:-translate-y-1 transition duration-300"
>

<h3 className="text-xl font-semibold mb-4">
{service.title}
</h3>

<p className="text-gray-600">
{service.desc}
</p>

</div>

))}

</div>

</div>

</section>


{/* PRODUCTS */}

<section className="py-24 bg-gray-100">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

<img
src={platformsImg}
alt="Products and platforms"
className="w-full h-[420px] object-cover rounded-lg"
/>

<div>

<h2 className="text-4xl font-semibold mb-6">
Products & Platforms
</h2>

<p className="text-gray-600 leading-relaxed">
Our engineering teams build enterprise platforms,
automation systems, SaaS products and internal tools
that enable organizations to accelerate innovation and
improve operational efficiency.
</p>

</div>

</div>

</section>


{/* CTA */}

<section className="bg-black text-white py-24">

<div className="max-w-6xl mx-auto px-6 text-center">

<h2 className="text-4xl font-semibold mb-6">
Transform Your Enterprise Technology Landscape
</h2>

<p className="text-gray-300 max-w-2xl mx-auto">
Partner with FINTECH IT SOLUTIONS to design scalable
digital platforms and future-ready technology ecosystems.
</p>

<a
href="/contact"
className="inline-block mt-10 bg-white text-black px-8 py-3 font-medium rounded hover:bg-gray-200 transition"
>
Contact Our Experts
</a>

</div>

</section>

</main>

</PageTransition>

);
}