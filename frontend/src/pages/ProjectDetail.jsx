import { useParams } from "react-router-dom";

const projectData = {

"digital-banking":{
title:"Digital Banking Platform",
industry:"Banking",
overview:"A secure cloud-native digital banking platform supporting millions of users and real-time financial transactions.",
technologies:["Node.js","React","AWS","Kubernetes"],
results:[
"99.99% platform uptime",
"Reduced banking transaction time by 40%",
"Handled millions of daily transactions"
]
},

"ai-healthcare":{
title:"AI Healthcare Analytics",
industry:"Healthcare",
overview:"AI-driven healthcare analytics platform helping hospitals improve diagnosis accuracy and operational efficiency.",
technologies:["Python","TensorFlow","React","PostgreSQL"],
results:[
"Improved diagnosis accuracy by 25%",
"Reduced data analysis time by 60%",
"Used by multiple hospital networks"
]
},

"retail-supply":{
title:"Retail Supply Chain Platform",
industry:"Retail",
overview:"Data-driven supply chain system improving inventory management and logistics efficiency.",
technologies:["Node.js","MongoDB","React","Kafka"],
results:[
"Reduced supply chain delays by 35%",
"Improved inventory forecasting accuracy",
"Real-time logistics analytics"
]
},

"enterprise-cloud":{
title:"Enterprise Cloud Migration",
industry:"Enterprise",
overview:"Large-scale cloud migration program for enterprise infrastructure modernization.",
technologies:["AWS","Docker","Kubernetes","Terraform"],
results:[
"Reduced infrastructure cost by 30%",
"Improved scalability and performance",
"Modern cloud-native architecture"
]
},

"fintech-payments":{
title:"Fintech Payment Gateway",
industry:"FinTech",
overview:"High-performance payment gateway platform supporting secure digital transactions.",
technologies:["Node.js","Redis","PostgreSQL","Kubernetes"],
results:[
"Thousands of transactions per second",
"Highly secure payment processing",
"Integrated with global banking APIs"
]
},

"manufacturing-iot":{
title:"Industrial IoT Monitoring System",
industry:"Manufacturing",
overview:"IoT monitoring platform for predictive maintenance in smart factories.",
technologies:["IoT","Python","Kafka","React"],
results:[
"Reduced equipment downtime by 45%",
"Predictive maintenance analytics",
"Smart factory monitoring dashboards"
]
}

};

export default function ProjectDetail(){

const { slug } = useParams();
const project = projectData[slug];

if(!project){
return <div className="pt-32 text-center text-xl">Project not found</div>;
}

return(

<main className="pt-28 bg-white">

<section className="max-w-6xl mx-auto px-6 py-20">

<h1 className="text-5xl font-semibold mb-6">
{project.title}
</h1>

<p className="text-gray-600 text-lg mb-6">
Industry: {project.industry}
</p>

<p className="text-gray-700 leading-relaxed mb-10">
{project.overview}
</p>

</section>


<section className="bg-gray-100 py-20">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-3xl font-semibold mb-8">
Technologies Used
</h2>

<ul className="grid md:grid-cols-2 gap-4">

{project.technologies.map((tech,i)=>(
<li key={i} className="bg-white p-4 border">
{tech}
</li>
))}

</ul>

</div>

</section>


<section className="py-20">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-3xl font-semibold mb-8">
Project Results
</h2>

<ul className="space-y-4">

{project.results.map((r,i)=>(
<li key={i} className="border p-4">
{r}
</li>
))}

</ul>

</div>

</section>

</main>

)

}