import FadeInSection from "./FadeInSection";

export default function GlobalPresence(){

return(

<FadeInSection>

<section className="py-28 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-semibold mb-12 text-center">
Global Presence
</h2>

<p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
FINTECH IT SOLUTIONS collaborates with organizations across
North America, Europe, Asia-Pacific and the Middle East
to build scalable enterprise technology systems.
</p>


<div className="relative">

<img
src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
className="w-full opacity-90"
/>


{/* INDIA */}

<div className="absolute top-[62%] left-[55%]">

<div className="relative group">

<div className="w-4 h-4 bg-red-600 rounded-full animate-ping absolute"></div>
<div className="w-4 h-4 bg-red-600 rounded-full"></div>

<div className="hidden group-hover:block absolute bg-white shadow-lg p-4 w-48 -left-20 top-6 rounded">

<h3 className="font-semibold">
India HQ
</h3>

<p className="text-sm text-gray-600">
Pune • Bangalore • Noida
</p>

</div>

</div>

</div>


{/* USA */}

<div className="absolute top-[45%] left-[25%]">

<div className="relative group">

<div className="w-4 h-4 bg-blue-600 rounded-full animate-ping absolute"></div>
<div className="w-4 h-4 bg-blue-600 rounded-full"></div>

<div className="hidden group-hover:block absolute bg-white shadow-lg p-4 w-48 -left-20 top-6 rounded">

<h3 className="font-semibold">
North America
</h3>

<p className="text-sm text-gray-600">
Enterprise clients and partnerships
</p>

</div>

</div>

</div>


{/* EUROPE */}

<div className="absolute top-[35%] left-[48%]">

<div className="relative group">

<div className="w-4 h-4 bg-green-600 rounded-full animate-ping absolute"></div>
<div className="w-4 h-4 bg-green-600 rounded-full"></div>

<div className="hidden group-hover:block absolute bg-white shadow-lg p-4 w-48 -left-20 top-6 rounded">

<h3 className="font-semibold">
Europe
</h3>

<p className="text-sm text-gray-600">
Cloud & fintech transformation programs
</p>

</div>

</div>

</div>


{/* MIDDLE EAST */}

<div className="absolute top-[50%] left-[52%]">

<div className="relative group">

<div className="w-4 h-4 bg-purple-600 rounded-full animate-ping absolute"></div>
<div className="w-4 h-4 bg-purple-600 rounded-full"></div>

<div className="hidden group-hover:block absolute bg-white shadow-lg p-4 w-48 -left-20 top-6 rounded">

<h3 className="font-semibold">
Middle East
</h3>

<p className="text-sm text-gray-600">
Digital transformation initiatives
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