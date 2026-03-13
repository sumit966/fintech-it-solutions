import FadeInSection from "./FadeInSection";

export default function OfficeMap(){

return(

<FadeInSection>

<section className="py-28 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-semibold mb-12">
Our Offices in India
</h2>

<div className="relative">

<img
src="https://upload.wikimedia.org/wikipedia/commons/1/17/India-map-en.svg"
className="w-full"
/>

{/* PUNE */}

<div className="absolute top-[63%] left-[39%]">

<div className="relative group cursor-pointer">

<div className="w-4 h-4 bg-red-600 rounded-full animate-ping absolute"></div>
<div className="w-4 h-4 bg-red-600 rounded-full"></div>

<div className="hidden group-hover:block absolute bg-white shadow-lg p-4 w-52 -left-20 top-6 rounded">

<h3 className="font-semibold">
Pune Headquarters
</h3>

<p className="text-sm text-gray-600">
Main engineering hub delivering enterprise platforms.
</p>

</div>

</div>

</div>


{/* NOIDA */}

<div className="absolute top-[40%] left-[49%]">

<div className="relative group cursor-pointer">

<div className="w-4 h-4 bg-blue-600 rounded-full animate-ping absolute"></div>
<div className="w-4 h-4 bg-blue-600 rounded-full"></div>

<div className="hidden group-hover:block absolute bg-white shadow-lg p-4 w-52 -left-20 top-6 rounded">

<h3 className="font-semibold">
Noida AI Lab
</h3>

<p className="text-sm text-gray-600">
Artificial intelligence research and data engineering hub.
</p>

</div>

</div>

</div>


{/* BANGALORE */}

<div className="absolute top-[70%] left-[45%]">

<div className="relative group cursor-pointer">

<div className="w-4 h-4 bg-green-600 rounded-full animate-ping absolute"></div>
<div className="w-4 h-4 bg-green-600 rounded-full"></div>

<div className="hidden group-hover:block absolute bg-white shadow-lg p-4 w-52 -left-20 top-6 rounded">

<h3 className="font-semibold">
Bangalore Cloud Center
</h3>

<p className="text-sm text-gray-600">
Cloud infrastructure and DevOps engineering center.
</p>

</div>

</div>

</div>

</div>

</div>

</section>

</FadeInSection>

)

}