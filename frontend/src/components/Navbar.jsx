import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

export default function Navbar(){

const [search,setSearch] = useState("")
const [showSearch,setShowSearch] = useState(false)
const [mobileOpen,setMobileOpen] = useState(false)

const navigate = useNavigate()

const handleSearch=(e)=>{
if(e.key === "Enter"){
navigate(`/search?q=${search}`)
setShowSearch(false)
}
}

return(

<header className="fixed top-0 w-full nav-glass shadow z-50 transition-all duration-300">

<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

{/* LOGO */}

<Link 
to="/" 
className="flex items-center gap-2 hover:scale-105 transition duration-300"
>

<img src="/logo.png" className="h-8"/>

<span className="font-semibold text-sm tracking-wide">
FINTECH IT SOLUTIONS
</span>

</Link>


{/* DESKTOP MENU */}

<nav className="hidden md:flex gap-8 text-sm items-center">

{/* HOME */}

<Link 
to="/" 
className="relative group hover:text-blue-600 transition"
>
Home
<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
</Link>


{/* WHAT WE DO */}

<div className="relative group">

<button className="hover:text-blue-600 transition relative">
What We Do
<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
</button>

<div className="absolute opacity-0 invisible group-hover:visible group-hover:opacity-100 transition duration-300 grid grid-cols-2 gap-6 bg-white shadow-xl p-6 w-[420px] rounded-lg">

<Link to="/services" className="hover:text-blue-600">Cloud Engineering</Link>
<Link to="/services" className="hover:text-blue-600">AI & Machine Learning</Link>
<Link to="/services" className="hover:text-blue-600">Cybersecurity</Link>
<Link to="/services" className="hover:text-blue-600">DevOps</Link>
<Link to="/services" className="hover:text-blue-600">Data Engineering</Link>
<Link to="/services" className="hover:text-blue-600">Enterprise Platforms</Link>

</div>

</div>


<Link 
to="/industries" 
className="relative group hover:text-blue-600 transition"
>
Industries
<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
</Link>

<Link 
to="/projects" 
className="relative group hover:text-blue-600 transition"
>
Projects
<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
</Link>

<Link 
to="/careers" 
className="relative group hover:text-blue-600 transition"
>
Careers
<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
</Link>

<Link 
to="/newsroom" 
className="relative group hover:text-blue-600 transition"
>
Newsroom
<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
</Link>

<Link 
to="/ceo" 
className="relative group hover:text-blue-600 transition"
>
CEO
<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
</Link>

<Link 
to="/about" 
className="relative group hover:text-blue-600 transition"
>
About
<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
</Link>

<Link 
to="/contact" 
className="relative group hover:text-blue-600 transition"
>
Contact
<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
</Link>

</nav>


{/* RIGHT SIDE */}

<div className="flex items-center gap-4">

<Search
className="w-5 cursor-pointer hover:scale-110 transition duration-300"
onClick={()=>setShowSearch(!showSearch)}
/>

<button
className="md:hidden"
onClick={()=>setMobileOpen(!mobileOpen)}
>

{mobileOpen ? <X size={24}/> : <Menu size={24}/>}

</button>

</div>

</div>


{/* SEARCH BAR */}

{showSearch && (

<div className="bg-gray-100 p-4 border-t animate-fadeIn">

<input
placeholder="Search services, projects..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
onKeyDown={handleSearch}
className="w-full p-3 outline-none bg-white border rounded"
/>

</div>

)}


{/* MOBILE MENU */}

<div
className={`md:hidden border-t bg-white transition-all duration-300 overflow-hidden ${
mobileOpen ? "max-h-[500px]" : "max-h-0"
}`}
>

<nav className="flex flex-col p-6 gap-4 text-lg animate-fadeIn">

<Link onClick={()=>setMobileOpen(false)} to="/">Home</Link>
<Link onClick={()=>setMobileOpen(false)} to="/services">Services</Link>
<Link onClick={()=>setMobileOpen(false)} to="/industries">Industries</Link>
<Link onClick={()=>setMobileOpen(false)} to="/projects">Projects</Link>
<Link onClick={()=>setMobileOpen(false)} to="/careers">Careers</Link>
<Link onClick={()=>setMobileOpen(false)} to="/newsroom">Newsroom</Link>
<Link onClick={()=>setMobileOpen(false)} to="/ceo">CEO</Link>
<Link onClick={()=>setMobileOpen(false)} to="/about">About</Link>
<Link onClick={()=>setMobileOpen(false)} to="/contact">Contact</Link>

</nav>

</div>

</header>

)

}