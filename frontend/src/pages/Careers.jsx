import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Careers(){

const [jobs,setJobs] = useState([]);
const [search,setSearch] = useState("");

useEffect(()=>{

fetch("https://fintech-it-solutions.onrender.com/api/careers/jobs")
.then(res=>res.json())
.then(data=>setJobs(data))
.catch(()=>setJobs([]));

},[]);

const filtered = jobs.filter(job =>
job.title?.toLowerCase().includes(search.toLowerCase())
);

return(

<main className="pt-24 bg-white">

{/* HERO */}

<section className="bg-black text-white py-28">

<div className="max-w-7xl mx-auto px-8">

<h1 className="text-5xl font-semibold">
Careers at Fintech IT Solutions
</h1>

<p className="mt-6 max-w-2xl text-gray-300">
Join a team building next-generation cloud platforms,
AI solutions, and enterprise digital products.
</p>

</div>

</section>


{/* LIFE */}

<section className="py-24">

<div className="max-w-7xl mx-auto px-8">

<h2 className="text-4xl font-semibold mb-12">
Life at Fintech IT Solutions
</h2>

<div className="grid md:grid-cols-3 gap-10">

<div>
<h3 className="text-xl font-semibold mb-4">
Innovation Culture
</h3>
<p className="text-gray-600">
Engineers experiment with modern technologies including AI,
cloud platforms and distributed systems.
</p>
</div>

<div>
<h3 className="text-xl font-semibold mb-4">
Career Growth
</h3>
<p className="text-gray-600">
Continuous learning programs and mentorship help
employees grow professionally.
</p>
</div>

<div>
<h3 className="text-xl font-semibold mb-4">
Flexible Work
</h3>
<p className="text-gray-600">
Hybrid work environment supporting productivity
and work-life balance.
</p>
</div>

</div>

</div>

</section>


{/* JOB SEARCH */}

<section className="bg-gray-50 py-24">

<div className="max-w-6xl mx-auto px-8">

<h2 className="text-4xl font-semibold mb-6">
Open Positions
</h2>

<p className="text-gray-500 mb-10">
{filtered.length} positions available
</p>

{/* SEARCH BAR */}

<div className="flex items-center border rounded-lg p-4 mb-10 bg-white shadow-sm">

<Search className="w-5 mr-3 text-gray-500"/>

<input
placeholder="Search jobs by title..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="outline-none w-full"
/>

<button className="bg-black text-white px-6 py-2 ml-4 rounded
hover:scale-105 transition duration-300">
Search
</button>

</div>

{/* JOB LIST */}

<div className="space-y-6">

{filtered.length === 0 && (
<p className="text-gray-500">
No job openings match your search.
</p>
)}

{filtered.map(job=>(

<div
key={job._id}
className="border p-6 flex justify-between items-center hover:shadow-lg transition"
>

<div>

<h3 className="font-semibold text-lg">
{job.title}
</h3>

<p className="text-gray-500 text-sm">
{job.department} • {job.location} • {job.experience}
</p>

</div>

<Link
to={`/careers/apply/${job._id}`}
className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
>
Apply
</Link>

</div>

))}

</div>

</div>

</section>

</main>

)

}