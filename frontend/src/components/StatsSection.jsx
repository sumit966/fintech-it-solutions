import CountUp from "react-countup";

export default function StatsSection() {

const stats = [

{
value:3,
label:"Projects Delivered"
},

{
value:18,
label:"Engineers"
},

{
value:1,
label:"Countries Served"
},

{
value:3,
label:"Client Satisfaction"
}

];

return (

<section className="gradient-section py-24">

<div className="max-w-7xl mx-auto px-8">

<div className="grid md:grid-cols-4 gap-12 text-center">

{stats.map((item,i)=>(

<div key={i}>

<h3 className="text-5xl font-semibold">

<CountUp
end={item.value}
duration={3}
/>+

</h3>

<p className="mt-4 text-white/80">
{item.label}
</p>

</div>

))}

</div>

</div>

</section>

)

}