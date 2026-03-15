import { useState } from "react";

const testimonials = [

{
name:"Enterprise Client",
text:"Fintech IT Solutions delivered a scalable platform."
},

{
name:"Banking Partner",
text:"Excellent AI and cloud engineering expertise."
},

]

export default function Testimonials(){

const [index,setIndex] = useState(0)

const next=()=>{
setIndex((index+1)%testimonials.length)
}

return(

<section className="py-24 text-center bg-gray-50">

<h2 className="text-4xl font-semibold mb-10">
Client Testimonials
</h2>

<div className="max-w-3xl mx-auto border p-10 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 animate-fadeIn bg-white">

{/* STAR RATING (ADDED) */}

<div className="text-yellow-400 text-xl mb-4">
★★★★★
</div>

<p className="text-lg mb-6 text-gray-700 leading-relaxed">
"{testimonials[index].text}"
</p>

<h3 className="font-semibold text-lg text-blue-600">
{testimonials[index].name}
</h3>

<button
onClick={next}
className="mt-8 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition hover:scale-105"
>
Next
</button>

</div>

</section>

)

}