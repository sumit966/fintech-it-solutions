import { Link } from "react-router-dom";

export default function Footer() {

  return (

<footer className="bg-black text-gray-300 mt-20 relative overflow-hidden">

{/* BACKGROUND TECH GLOW (ADDED) */}

<div className="absolute inset-0 opacity-10 pointer-events-none">
  <div className="absolute w-72 h-72 bg-blue-500 blur-3xl top-[-80px] left-[-80px]"></div>
  <div className="absolute w-72 h-72 bg-purple-500 blur-3xl bottom-[-80px] right-[-80px]"></div>
</div>

<div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-4 gap-12 relative z-10">

{/* COMPANY */}

<div className="hover:-translate-y-1 transition duration-300">

<h3 className="text-white font-semibold mb-4">
FINTECH IT SOLUTIONS
</h3>

<p className="text-sm leading-relaxed">
Fintech IT Solutions is a global technology company delivering
enterprise software platforms, cloud infrastructure solutions,
and AI-driven digital transformation services.
</p>

<p className="text-xs text-gray-500 mt-4">
Engineering the future of enterprise technology.
</p>

</div>


{/* SERVICES */}

<div className="hover:-translate-y-1 transition duration-300">

<h4 className="text-white font-semibold mb-4">
Services
</h4>

<ul className="space-y-2 text-sm">

<li>
<Link className="hover:text-white transition hover:translate-x-1 inline-block" to="/services">
Cloud Engineering
</Link>
</li>

<li>
<Link className="hover:text-white transition hover:translate-x-1 inline-block" to="/services">
AI & Machine Learning
</Link>
</li>

<li>
<Link className="hover:text-white transition hover:translate-x-1 inline-block" to="/services">
Cybersecurity
</Link>
</li>

<li>
<Link className="hover:text-white transition hover:translate-x-1 inline-block" to="/services">
Enterprise Platforms
</Link>
</li>

</ul>

</div>


{/* COMPANY */}

<div className="hover:-translate-y-1 transition duration-300">

<h4 className="text-white font-semibold mb-4">
Company
</h4>

<ul className="space-y-2 text-sm">

<li>
<Link className="hover:text-white transition hover:translate-x-1 inline-block" to="/about">
About
</Link>
</li>

<li>
<Link className="hover:text-white transition hover:translate-x-1 inline-block" to="/careers">
Careers
</Link>
</li>

<li>
<Link className="hover:text-white transition hover:translate-x-1 inline-block" to="/projects">
Projects
</Link>
</li>

<li>
<Link className="hover:text-white transition hover:translate-x-1 inline-block" to="/contact">
Contact
</Link>
</li>

</ul>

</div>


{/* CONTACT */}

<div className="hover:-translate-y-1 transition duration-300">

<h4 className="text-white font-semibold mb-4">
Contact
</h4>

<p className="text-sm">
Pune, Maharashtra, India
</p>

<p className="text-sm mt-2">
fintechitsolutions.info@gmail.com
</p>

<p className="text-sm mt-2">
+91 6299863493
</p>

{/* SOCIAL LINKS */}

<div className="flex gap-4 mt-6 text-sm">

<a
href="https://www.linkedin.com/in/er-sumit-raj-/"
target="_blank"
className="hover:text-white transition hover:scale-110"
>
LinkedIn
</a>

<a
href="#"
className="hover:text-white transition hover:scale-110"
>
Twitter
</a>

<a
href="#"
className="hover:text-white transition hover:scale-110"
>
GitHub
</a>

</div>

</div>

</div>


{/* BOTTOM */}

<div className="border-t border-gray-700 text-center py-6 text-sm relative z-10">

© {new Date().getFullYear()} Fintech IT Solutions. All rights reserved.

</div>

</footer>

  );
}