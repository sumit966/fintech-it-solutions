export default function Leadership(){

const leaders = [

{
name:"Sumit Raj",
role:"Founder & CEO",
desc:"Driving technology innovation and enterprise solutions strategy.",
img:"/ceo.jpg",
linkedin:"https://www.linkedin.com/in/er-sumit-raj-/"
},

{
name:"Sumit Raj",
role:"Director – AI Research",
desc:"Leading AI innovation and data platform engineering.",
img:"/ceo.jpg",
linkedin:"#"
},

{
name:"Nitin Sharma",
role:"Chief Technology Officer",
desc:"Responsible for global engineering architecture and cloud platforms.",
img:"/ceo.jpg",
linkedin:"#"
}

];

return(

<main className="pt-24 bg-white">

<section className="max-w-7xl mx-auto px-8 py-20">

<h1 className="text-5xl font-semibold mb-16">
Leadership Team
</h1>

<div className="grid md:grid-cols-3 gap-12">

{leaders.map((leader,i)=>(

<div key={i} className="border p-8 hover:shadow-xl transition card-hover text-center">

<img
src={leader.img}
className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
/>

<h3 className="font-semibold text-lg">
{leader.name}
</h3>

<p className="text-gray-500 text-sm mb-4">
{leader.role}
</p>

<p className="text-gray-600 text-sm mb-4">
{leader.desc}
</p>

<a
href={leader.linkedin}
target="_blank"
className="text-blue-600 text-sm"
>
LinkedIn
</a>

</div>

))}

</div>

</section>

</main>

)

}