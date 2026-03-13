import { Link } from "react-router-dom";

export default function Footer() {

  return (

<footer className="bg-black text-gray-300 mt-20">

<div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-4 gap-12">

{/* COMPANY */}

<div>

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

<div>

<h4 className="text-white font-semibold mb-4">
Services
</h4>

<ul className="space-y-2 text-sm">

<li><Link className="hover:text-white transition" to="/services">Cloud Engineering</Link></li>
<li><Link className="hover:text-white transition" to="/services">AI & Machine Learning</Link></li>
<li><Link className="hover:text-white transition" to="/services">Cybersecurity</Link></li>
<li><Link className="hover:text-white transition" to="/services">Enterprise Platforms</Link></li>

</ul>

</div>


{/* COMPANY */}

<div>

<h4 className="text-white font-semibold mb-4">
Company
</h4>

<ul className="space-y-2 text-sm">

<li><Link className="hover:text-white transition" to="/about">About</Link></li>
<li><Link className="hover:text-white transition" to="/careers">Careers</Link></li>
<li><Link className="hover:text-white transition" to="/projects">Projects</Link></li>
<li><Link className="hover:text-white transition" to="/contact">Contact</Link></li>

</ul>

</div>


{/* CONTACT */}

<div>

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

<a href="#" className="hover:text-white">LinkedIn</a>
<a href="#" className="hover:text-white">Twitter</a>
<a href="#" className="hover:text-white">GitHub</a>

</div>

</div>

</div>


{/* BOTTOM */}

<div className="border-t border-gray-700 text-center py-6 text-sm">

© {new Date().getFullYear()} Fintech IT Solutions. All rights reserved.

</div>

</footer>

  );
}