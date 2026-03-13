import { Link } from "react-router-dom";

const industries = [
{
slug: "banking",
title: "Banking",
desc: "Digital banking platforms, payment infrastructure, and core banking modernization.",
image: "/images/industries/banking.jpg"
},

{
slug: "fintech",
title: "FinTech",
desc: "Scalable fintech platforms including payment systems, fraud detection, and digital wallets.",
image: "/images/industries/fintech.jpg"
},

{
slug: "healthcare",
title: "Healthcare",
desc: "AI-powered healthcare analytics, patient platforms, and secure health data infrastructure.",
image: "/images/industries/healthcare.jpg"
},

{
slug: "retail",
title: "Retail & E-Commerce",
desc: "Modern commerce platforms, recommendation engines, and supply chain analytics systems.",
image: "/images/industries/retail.jpg"
},

{
slug: "manufacturing",
title: "Manufacturing",
desc: "Industry 4.0 platforms including IoT monitoring, predictive maintenance, and smart factories.",
image: "/images/industries/manufacturing.jpg"
},

{
slug: "enterprise",
title: "Enterprise Technology",
desc: "Enterprise platforms, automation systems, and large-scale digital transformation programs.",
image: "/images/industries/enterprises.jpg"
},
];

export default function Industries(){

return(

<main className="pt-28 bg-white">

{/* HERO */}

<section className="max-w-7xl mx-auto px-6 py-20">

<h1 className="text-5xl font-semibold mb-6">
Industries We Serve
</h1>

<p className="text-lg text-gray-600 max-w-3xl">
FINTECH IT SOLUTIONS partners with global enterprises
across industries to build scalable technology platforms,
modernize infrastructure, and deliver data-driven
innovation.
</p>

</section>


{/* INDUSTRY GRID */}

<section className="pb-24">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

{industries.map(i => (

<Link
key={i.slug}
to={`/industries/${i.slug}`}
className="group"
>

<div className="overflow-hidden rounded-xl">

<img
src={i.image}
alt={i.title}
className="h-64 w-full object-cover group-hover:scale-105 transition"
/>

</div>

<h3 className="mt-5 text-xl font-semibold">
{i.title}
</h3>

<p className="text-gray-600 mt-2 text-sm leading-relaxed">
{i.desc}
</p>

</Link>

))}

</div>

</section>


{/* CTA */}

<section className="bg-black text-white py-24">

<div className="max-w-6xl mx-auto px-6 text-center">

<h2 className="text-4xl font-semibold mb-6">
Technology Solutions for Every Industry
</h2>

<p className="text-gray-300 max-w-2xl mx-auto">
Our engineering teams design scalable digital systems
that help organizations innovate faster and operate
more efficiently.
</p>

<a
href="/contact"
className="inline-block mt-10 bg-white text-black px-8 py-3 font-medium"
>
Discuss Your Project
</a>

</div>

</section>

</main>

)

}