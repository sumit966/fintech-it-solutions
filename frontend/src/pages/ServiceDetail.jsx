import { useParams } from "react-router-dom";
import Container from "../layout/Container";

const servicesData = {

cloud:{
title:"Cloud Engineering",
desc:"We design, deploy and scale enterprise-grade cloud infrastructure using AWS, Azure and hybrid cloud architectures.",
features:[
"Cloud Migration",
"Kubernetes & Containers",
"High Availability Architecture",
"Multi-cloud Infrastructure"
]
},

ai:{
title:"AI & Machine Learning",
desc:"Build intelligent systems powered by machine learning, predictive analytics and AI-driven automation.",
features:[
"Predictive Analytics",
"AI Platforms",
"Machine Learning Models",
"Data Science Solutions"
]
},

cybersecurity:{
title:"Cybersecurity",
desc:"Protect mission-critical enterprise infrastructure with modern security frameworks and threat detection.",
features:[
"Zero Trust Security",
"Threat Detection",
"Security Architecture",
"Compliance Systems"
]
},

devops:{
title:"DevOps",
desc:"Accelerate software delivery with modern DevOps practices and CI/CD automation.",
features:[
"CI/CD Pipelines",
"Automation",
"Container Platforms",
"Infrastructure as Code"
]
},

data:{
title:"Data Engineering",
desc:"Design scalable data pipelines and analytics platforms for modern enterprises.",
features:[
"Data Pipelines",
"Data Warehousing",
"Real-time Analytics",
"Business Intelligence"
]
}

};

export default function ServiceDetail(){

const { slug } = useParams();

const service = servicesData[slug];

if(!service){
return <div className="pt-32 text-center">Service not found</div>
}

return(

<main className="pt-24 bg-white">

<section className="gradient-section py-24">

<Container>

<h1 className="text-5xl font-semibold mb-6">
{service.title}
</h1>

<p className="max-w-2xl text-lg text-gray-200">
{service.desc}
</p>

</Container>

</section>


<section className="py-24">

<Container>

<h2 className="text-3xl font-semibold mb-12">
Capabilities
</h2>

<div className="grid md:grid-cols-2 gap-8">

{service.features.map((item,i)=>(

<div
key={i}
className="border p-8 rounded-lg hover:shadow-xl transition"
>

{item}

</div>

))}

</div>

</Container>

</section>

</main>

)

}