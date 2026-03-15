import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

export default function Navbar(){

const [search,setSearch] = useState("")
const [showSearch,setShowSearch] = useState(false)
const [mobileOpen,setMobileOpen] = useState(false)

/* ADDED NAVBAR SCROLL EFFECT */
const [scrolled,setScrolled] = useState(false)

/* ADDED CLICK OUTSIDE CLOSE */
const mobileRef = useRef()

useEffect(()=>{
const handleScroll=()=>{
if(window.scrollY>40){
setScrolled(true)
}else{
setScrolled(false)
}
}

window.addEventListener("scroll",handleScroll)
return ()=>window.removeEventListener("scroll",handleScroll)

},[])

/* CLOSE MOBILE MENU IF CLICK OUTSIDE */

useEffect(()=>{

const handleClickOutside=(event)=>{
if(mobileRef.current && !mobileRef.current.contains(event.target)){
setMobileOpen(false)
}
}

document.addEventListener("mousedown",handleClickOutside)

return ()=>{
document.removeEventListener("mousedown",handleClickOutside)
}

},[])

const navigate = useNavigate()

const handleSearch=(e)=>{
if(e.key === "Enter"){
navigate(`/search?q=${search}`)
setShowSearch(false)
}
}

return(

<header className={`fixed top-0 w-full nav-glass z-50 transition-all duration-300 ${
scrolled ? "shadow-lg backdrop-blur-lg bg-white/80" : "shadow"
}`}>

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
className="relative group hover:text-blue-600 transition hover:-translate-y-[2px]"
>
Home
<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
</Link>


{/* WHAT WE DO */}

<div className="relative group">

<button className="hover:text-blue-600 transition relative hover:-translate-y-[2px]">
What We Do
<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
</button>


{/* MODERN MEGA DROPDOWN */}

<div className="absolute left-0 top-full mt-4 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 grid grid-cols-2 gap-6 bg-white shadow-2xl p-8 w-[520px] rounded-xl border border-gray-100">

<Link to="/services" className="flex flex-col hover:text-blue-600 hover:translate-x-1 transition">
<span className="font-semibold">☁️ Cloud Engineering</span>
<span className="text-xs text-gray-500">Scalable AWS, Azure and hybrid cloud platforms</span>
</Link>

<Link to="/services" className="flex flex-col hover:text-blue-600 hover:translate-x-1 transition">
<span className="font-semibold">🤖 AI & Machine Learning</span>
<span className="text-xs text-gray-500">AI platforms and predictive analytics systems</span>
</Link>

<Link to="/services" className="flex flex-col hover:text-blue-600 hover:translate-x-1 transition">
<span className="font-semibold">🔐 Cybersecurity</span>
<span className="text-xs text-gray-500">Enterprise security architecture and threat defense</span>
</Link>

<Link to="/services" className="flex flex-col hover:text-blue-600 hover:translate-x-1 transition">
<span className="font-semibold">⚙️ DevOps</span>
<span className="text-xs text-gray-500">CI/CD pipelines and automation platforms</span>
</Link>

<Link to="/services" className="flex flex-col hover:text-blue-600 hover:translate-x-1 transition">
<span className="font-semibold">📊 Data Engineering</span>
<span className="text-xs text-gray-500">Modern data pipelines and analytics systems</span>
</Link>

<Link to="/services" className="flex flex-col hover:text-blue-600 hover:translate-x-1 transition">
<span className="font-semibold">🏢 Enterprise Platforms</span>
<span className="text-xs text-gray-500">Large-scale enterprise application platforms</span>
</Link>

</div>

</div>


<Link 
to="/industries" 
className="relative group hover:text-blue-600 transition hover:-translate-y-[2px]"
>
Industries
<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
</Link>

<Link 
to="/projects" 
className="relative group hover:text-blue-600 transition hover:-translate-y-[2px]"
>
Projects
<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
</Link>

<Link 
to="/careers" 
className="relative group hover:text-blue-600 transition hover:-translate-y-[2px]"
>
Careers
<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
</Link>

<Link 
to="/newsroom" 
className="relative group hover:text-blue-600 transition hover:-translate-y-[2px]"
>
Newsroom
<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
</Link>

<Link 
to="/ceo" 
className="relative group hover:text-blue-600 transition hover:-translate-y-[2px]"
>
CEO
<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
</Link>

<Link 
to="/about" 
className="relative group hover:text-blue-600 transition hover:-translate-y-[2px]"
>
About
<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
</Link>

<Link 
to="/contact" 
className="relative group hover:text-blue-600 transition hover:-translate-y-[2px]"
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
className="md:hidden hover:scale-110 transition"
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
ref={mobileRef}
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