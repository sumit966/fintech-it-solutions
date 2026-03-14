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

<header className="fixed top-0 w-full nav-glass shadow z-50">

<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

{/* LOGO */}

<Link to="/" className="flex items-center gap-2">

<img src="/logo.png" className="h-8"/>

<span className="font-semibold text-sm">
FINTECH IT SOLUTIONS
</span>

</Link>


{/* DESKTOP MENU */}

<nav className="hidden md:flex gap-8 text-sm items-center">

<Link to="/" className="hover:text-blue-600 transition">Home</Link>

<div className="relative group">

<button className="hover:text-blue-600 transition">
What We Do
</button>

<div className="absolute hidden group-hover:grid grid-cols-2 gap-6 bg-white shadow-xl p-6 w-[420px]">

<Link to="/services">Cloud Engineering</Link>
<Link to="/services">AI & Machine Learning</Link>
<Link to="/services">Cybersecurity</Link>
<Link to="/services">DevOps</Link>
<Link to="/services">Data Engineering</Link>
<Link to="/services">Enterprise Platforms</Link>

</div>

</div>

<Link to="/industries" className="hover:text-blue-600 transition">Industries</Link>
<Link to="/projects" className="hover:text-blue-600 transition">Projects</Link>
<Link to="/careers" className="hover:text-blue-600 transition">Careers</Link>
<Link to="/newsroom" className="hover:text-blue-600 transition">Newsroom</Link>
<Link to="/ceo" className="hover:text-blue-600 transition">CEO</Link>
<Link to="/about" className="hover:text-blue-600 transition">About</Link>
<Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>

</nav>


{/* RIGHT SIDE */}

<div className="flex items-center gap-4">

<Search
className="w-5 cursor-pointer hover:scale-110 transition"
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