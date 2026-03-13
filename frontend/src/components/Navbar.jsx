import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

export default function Navbar(){

const [search,setSearch] = useState("")
const [showSearch,setShowSearch] = useState(false)

const navigate = useNavigate()

const handleSearch=(e)=>{

if(e.key === "Enter"){
navigate(`/search?q=${search}`)
setShowSearch(false)
}

}

return(

<header className="fixed top-0 w-full bg-white shadow z-50">

<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

<Link to="/" className="flex items-center gap-2">

<img src="/logo.png" className="h-8"/>

<span className="font-semibold text-sm tracking-wide">
FINTECH IT SOLUTIONS
</span>

</Link>


{/* NAV MENU */}

<nav className="hidden md:flex gap-8 text-sm items-center">

<Link to="/" className="hover:text-blue-600 font-medium">
Home
</Link>

<div className="relative group">

<button className="hover:text-blue-600">
What We Do
</button>

<div className="absolute hidden group-hover:grid grid-cols-2 gap-6 bg-white shadow-xl p-6 w-[420px]">

<Link to="/services" className="hover:underline">
Cloud Engineering
</Link>

<Link to="/services" className="hover:underline">
AI & Machine Learning
</Link>

<Link to="/services" className="hover:underline">
Cybersecurity
</Link>

<Link to="/services" className="hover:underline">
DevOps
</Link>

<Link to="/services" className="hover:underline">
Data Engineering
</Link>

<Link to="/services" className="hover:underline">
Enterprise Platforms
</Link>

</div>

</div>

<Link to="/industries" className="hover:text-blue-600">
Industries
</Link>

<Link to="/projects" className="hover:text-blue-600">
Projects
</Link>

<Link to="/careers" className="hover:text-blue-600">
Careers
</Link>

<Link to="/newsroom" className="hover:text-blue-600">
Newsroom
</Link>

<Link to="/ceo" className="hover:text-blue-600 font-medium">
CEO
</Link>

<Link to="/leadership" className="hover:text-blue-600">
Leadership
</Link>

<Link to="/about" className="hover:text-blue-600">
About
</Link>

<Link to="/contact" className="hover:text-blue-600">
Contact
</Link>

</nav>


{/* SEARCH */}

<div className="flex items-center gap-4">

<Search
className="w-5 cursor-pointer hover:scale-110 transition"
onClick={()=>setShowSearch(!showSearch)}
/>

</div>

</div>


{/* SEARCH BOX */}

{showSearch && (

<div className="bg-gray-100 p-4 border-t">

<input
placeholder="Search services, projects..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
onKeyDown={handleSearch}
className="w-full p-3 outline-none bg-white border rounded"
/>

</div>

)}

</header>

)

}