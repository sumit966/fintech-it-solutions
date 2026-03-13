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

<section className="py-24 text-center">

<h2 className="text-4xl font-semibold mb-10">
Client Testimonials
</h2>

<div className="max-w-3xl mx-auto border p-10">

<p className="text-lg mb-6">
"{testimonials[index].text}"
</p>

<h3 className="font-semibold">
{testimonials[index].name}
</h3>

<button
onClick={next}
className="mt-6 bg-blue-600 text-white px-6 py-2"
>
Next
</button>

</div>

</section>

)

}