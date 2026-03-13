export default function Newsroom() {

const news = [
{
title:"FINTECH IT SOLUTIONS Expands Enterprise AI Practice",
date:"March 2025",
desc:"Expansion of AI engineering services supporting enterprise digital transformation."
},

{
title:"Strategic Partnership for Cloud Platforms",
date:"January 2025",
desc:"New partnership accelerating cloud-native architecture adoption."
},

{
title:"Cybersecurity & Compliance Services Launch",
date:"November 2024",
desc:"Enterprise security frameworks for regulated industries."
},

{
title:"Scaling FinTech Platforms Across Asia",
date:"August 2024",
desc:"Successful deployment of large-scale fintech platforms."
}
];

return(

<main className="pt-24 bg-white">

<section className="bg-gray-100 py-24">

<div className="max-w-7xl mx-auto px-6">

<h1 className="text-5xl font-semibold">
Newsroom
</h1>

<p className="mt-6 text-gray-600 max-w-3xl">
Latest announcements and company updates.
</p>

</div>

</section>


<section className="py-24">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

{news.map((item,i)=>(

<div key={i} className="border-b pb-10">

<p className="text-sm text-gray-500 mb-2">
{item.date}
</p>

<h2 className="text-2xl font-semibold mb-4">
{item.title}
</h2>

<p className="text-gray-600 leading-relaxed">
{item.desc}
</p>

</div>

))}

</div>

</section>

</main>

)

}