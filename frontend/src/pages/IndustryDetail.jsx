import { useParams } from "react-router-dom";

const industryData = {

banking: {
title: "Banking Technology Solutions",
desc: "We help banks modernize core banking systems, build digital banking platforms, and implement secure payment infrastructure.",
challenges: [
"Legacy core banking systems",
"Regulatory compliance requirements",
"Cybersecurity threats",
"Scalability of digital banking platforms"
],
solutions: [
"Digital banking platforms",
"Fraud detection systems",
"AI-powered risk analytics",
"Cloud-native banking infrastructure"
]
},

fintech: {
title: "FinTech Platforms",
desc: "We build scalable fintech infrastructure for payment systems, digital wallets, and financial analytics platforms.",
challenges: [
"High transaction volume",
"Payment security",
"Regulatory requirements",
"Fraud prevention"
],
solutions: [
"Payment gateway infrastructure",
"Blockchain solutions",
"Fraud detection AI",
"Digital wallet platforms"
]
},

healthcare: {
title: "Healthcare Technology",
desc: "Our healthcare solutions include AI diagnostics, healthcare analytics, and secure patient data platforms.",
challenges: [
"Patient data security",
"Healthcare interoperability",
"Data analytics for clinical decisions",
"Regulatory compliance"
],
solutions: [
"AI healthcare analytics",
"Electronic health record systems",
"Telemedicine platforms",
"Secure healthcare data infrastructure"
]
},

retail: {
title: "Retail & E-Commerce Platforms",
desc: "We help retailers modernize digital commerce systems and supply chain platforms.",
challenges: [
"Omnichannel customer experience",
"Inventory optimization",
"Customer analytics",
"Scalable e-commerce platforms"
],
solutions: [
"E-commerce platforms",
"Customer personalization engines",
"Supply chain analytics",
"Retail AI solutions"
]
},

manufacturing: {
title: "Manufacturing Technology",
desc: "Industry 4.0 platforms enabling smart factories, IoT monitoring, and predictive maintenance.",
challenges: [
"Equipment downtime",
"Inefficient supply chains",
"Legacy factory systems",
"Operational analytics"
],
solutions: [
"IoT manufacturing platforms",
"Predictive maintenance systems",
"Factory automation",
"Industrial data analytics"
]
},

enterprise: {
title: "Enterprise Digital Platforms",
desc: "We design large-scale enterprise platforms supporting global business operations.",
challenges: [
"Legacy enterprise applications",
"Scalability issues",
"Integration between systems",
"Operational efficiency"
],
solutions: [
"Enterprise cloud platforms",
"Digital transformation programs",
"Automation systems",
"Enterprise analytics platforms"
]
}

};

export default function IndustryDetail(){

const { slug } = useParams();
const industry = industryData[slug];

if(!industry){
return <div className="pt-32 text-center">Industry not found</div>;
}

return(

<main className="pt-28 bg-white">

{/* HERO */}

<section className="max-w-7xl mx-auto px-6 py-20">

<h1 className="text-5xl font-semibold mb-6">
{industry.title}
</h1>

<p className="text-lg text-gray-600 max-w-3xl">
{industry.desc}
</p>

</section>


{/* CHALLENGES */}

<section className="bg-gray-100 py-20">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-3xl font-semibold mb-10">
Industry Challenges
</h2>

<ul className="grid md:grid-cols-2 gap-6">

{industry.challenges.map((c,i)=>(
<li key={i} className="bg-white p-6 border">
{c}
</li>
))}

</ul>

</div>

</section>


{/* SOLUTIONS */}

<section className="py-20">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-3xl font-semibold mb-10">
Our Solutions
</h2>

<ul className="grid md:grid-cols-2 gap-6">

{industry.solutions.map((s,i)=>(
<li key={i} className="border p-6">
{s}
</li>
))}

</ul>

</div>

</section>


{/* CTA */}

<section className="bg-black text-white py-24 text-center">

<h2 className="text-4xl font-semibold mb-6">
Transform Your Industry With Technology
</h2>

<p className="text-gray-300 mb-8">
Partner with Fintech IT Solutions to build scalable digital systems.
</p>

<a
href="/contact"
className="bg-white text-black px-8 py-3 inline-block"
>
Contact Us
</a>

</section>

</main>

)

}