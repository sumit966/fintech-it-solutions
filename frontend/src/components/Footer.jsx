import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Twitter, Github, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F19] text-gray-400 relative overflow-hidden border-t border-[#1F2937]">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-72 h-72 bg-blue-500 blur-3xl top-[-80px] left-[-80px]"></div>
        <div className="absolute w-72 h-72 bg-purple-500 blur-3xl bottom-[-80px] right-[-80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">FINTECH IT SOLUTIONS</h3>
            <p className="text-sm leading-relaxed mb-4">
              A fresh, bootstrapped startup building custom software solutions
              for early-stage companies. Operating remotely from India.
            </p>
            <div className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.05)] px-3 py-1 rounded-full border border-[#1F2937]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs text-gray-300">Remote-First / Work from Home</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/custom-software" className="hover:text-blue-400 transition">Custom Software Development</Link></li>
              <li><Link to="/services/web-development" className="hover:text-blue-400 transition">Website & Web Apps</Link></li>
              <li><Link to="/services/mobile" className="hover:text-blue-400 transition">Mobile App Development</Link></li>
              <li><Link to="/services/ai-development" className="hover:text-blue-400 transition">AI Development</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-blue-400 transition">Careers</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-xs text-indigo-400 font-semibold mb-1">Email</p>
                <p className="text-gray-400 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  fintechitsolutions.info@gmail.com
                </p>
              </div>
              <div>
                <p className="text-xs text-indigo-400 font-semibold mb-1">Phone</p>
                <p className="text-gray-400 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +91 6299863493
                </p>
              </div>
              <div>
                <p className="text-xs text-indigo-400 font-semibold mb-1">Location</p>
                <p className="text-gray-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Remote (India)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1F2937] mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Fintech IT Solutions. All rights reserved.</p>
          <p className="text-xs mt-2">Building the future, one project at a time.</p>
        </div>
      </div>
    </footer>
  );
}
