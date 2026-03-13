import { useState } from "react";
import { Link } from "react-router-dom";

const projects = [
{
slug:"digital-banking",
title:"Digital Banking Platform",
industry:"Banking",
desc:"Cloud-native banking system handling millions of transactions.",
tech:"Node.js • React • AWS • Kubernetes"
},

{
slug:"ai-healthcare",
title:"AI Healthcare Analytics",
industry:"Healthcare",
desc:"AI platform helping hospitals analyze patient data.",
tech:"Python • TensorFlow • React"
},

{
slug:"retail-supply",
title:"Retail Supply Chain Platform",
industry:"Retail",
desc:"Real-time supply chain analytics for retail networks.",
tech:"Node.js • MongoDB • Kafka"
},

{
slug:"enterprise-cloud",
title:"Enterprise Cloud Migration",
industry:"Enterprise",
desc:"Large-scale enterprise cloud infrastructure migration.",
tech:"AWS • Docker • Kubernetes"
},

{
slug:"fintech-payments",
title:"Fintech Payment Gateway",
industry:"FinTech",
desc:"Secure payment gateway platform for fintech companies.",
tech:"Node.js • Redis • PostgreSQL"
},

{
slug:"manufacturing-iot",
title:"Industrial IoT Monitoring",
industry:"Manufacturing",
desc:"Smart factory monitoring platform enabling predictive maintenance.",
tech:"IoT • Python • Kafka"
}
];

const filters = [
"All",
"Banking",
"Healthcare",
"Retail",
"Enterprise",
"FinTech",
"Manufacturing"
];

export default function Projects(){

const [activeFilter,setActiveFilter] = useState("All");

const filteredProjects =
activeFilter === "All"
? projects
: projects.filter(p => p.industry === activeFilter);

return(

<main className="pt-28 bg-white">

<section className="max-w-7xl mx-auto px-6 py-20">

<h1 className="text-5xl font-semibold mb-6">
Client Projects & Case Studies
</h1>

<p className="text-lg text-gray-600 max-w-3xl">
Enterprise technology platforms delivered for global industries.
</p>

</section>

{/* FILTERS */}

<section className="max-w-7xl mx-auto px-6 mb-12">

<div className="flex flex-wrap gap-4">

{filters.map(filter => (

<button
key={filter}
onClick={()=>setActiveFilter(filter)}
className={`px-5 py-2 border rounded transition ${
activeFilter === filter
? "bg-black text-white"
: "bg-white hover:bg-gray-100"
}`}
>
{filter}
</button>

))}

</div>

</section>


{/* PROJECT GRID */}

<section className="pb-24">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

{filteredProjects.map(project => (

<div
key={project.slug}
className="border p-8 hover:shadow-xl transition group"
>

<p className="text-sm text-gray-500 mb-3">
{project.industry}
</p>

<h3 className="text-xl font-semibold mb-4">
{project.title}
</h3>

<p className="text-gray-600 mb-4">
{project.desc}
</p>

<p className="text-sm text-gray-500 mb-6">
{project.tech}
</p>

<Link
to={`/projects/${project.slug}`}
className="font-semibold group-hover:underline"
>
View Case Study →
</Link>

</div>

))}

</div>

</section>

</main>

)

}