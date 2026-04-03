import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F19] text-gray-400 mt-20 relative overflow-hidden border-t border-[#1F2937]">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-72 h-72 bg-blue-500 blur-3xl top-[-80px] left-[-80px]"></div>
        <div className="absolute w-72 h-72 bg-purple-500 blur-3xl bottom-[-80px] right-[-80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12 relative z-10">
        <div className="hover:-translate-y-1 transition duration-300">
          <h3 className="text-white font-semibold mb-4 text-lg">
            FINTECH IT SOLUTIONS
          </h3>
          <p className="text-sm leading-relaxed">
            A fresh, bootstrapped startup building custom software solutions 
            for early-stage companies. Currently operating remotely from India.
          </p>
          <p className="text-xs text-gray-500 mt-4">
            ðŸš€ Building the future, one project at a time.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-[rgba(255,255,255,0.05)] px-3 py-1 rounded-full border border-[#1F2937]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs text-gray-300">Remote-First / Work from Home</span>
          </div>
        </div>

        <div className="hover:-translate-y-1 transition duration-300">
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:text-blue-400 transition hover:translate-x-1 inline-block" to="/services/custom-software">
                Custom Software Development
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-400 transition hover:translate-x-1 inline-block" to="/services/web-development">
                Website & Web Apps
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-400 transition hover:translate-x-1 inline-block" to="/services/mobile">
                Mobile App Development
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-400 transition hover:translate-x-1 inline-block" to="/services/crm">
                CRM Development
              </Link>
            </li>
          </ul>
        </div>

        <div className="hover:-translate-y-1 transition duration-300">
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:text-blue-400 transition hover:translate-x-1 inline-block" to="/about">About</Link>
            </li>
            <li>
              <Link className="hover:text-blue-400 transition hover:translate-x-1 inline-block" to="/careers">Careers</Link>
            </li>
            <li>
              <Link className="hover:text-blue-400 transition hover:translate-x-1 inline-block" to="/projects">Products & Tools</Link>
            </li>
            <li>
              <Link className="hover:text-blue-400 transition hover:translate-x-1 inline-block" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="hover:-translate-y-1 transition duration-300">
          <h4 className="text-white font-semibold mb-4">Contact</h4>

          <div className="mb-4 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-3 rounded-lg border border-yellow-600/30">
            <p className="text-xs font-semibold text-yellow-500 mb-1">ðŸ—ï¸ BUILDING PHASE</p>
            <p className="text-xs text-gray-400">Operating remotely while establishing offices</p>
          </div>

          <div className="mb-3">
            <p className="text-sm text-gray-400 flex items-start gap-2">
              <span className="text-blue-400 mt-0.5">ðŸ“</span>
              <span>
                <span className="text-white font-medium">Pune (HQ - Remote)</span>
                <span className="block text-xs text-gray-500">Virtual office, working from home</span>
              </span>
            </p>
            <p className="text-sm text-gray-400 flex items-start gap-2 mt-2">
              <span className="text-blue-400 mt-0.5">ðŸš§</span>
              <span>
                <span className="text-white font-medium">Noida & Bangalore</span>
                <span className="block text-xs text-gray-500">Coming soon (in planning phase)</span>
              </span>
            </p>
          </div>

          <p className="text-sm mt-3 flex items-center gap-2">
            <span className="text-blue-400">ðŸ“§</span>
            

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition hover:scale-110 flex items-center gap-1 opacity-50"
            >
              <span>ðŸ¦</span> Twitter
              <span className="text-xs text-gray-600">(soon)</span>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition hover:scale-110 flex items-center gap-1 opacity-50"
            >
              <span>ðŸ’»</span> GitHub
              <span className="text-xs text-gray-600">(soon)</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1F2937] text-center py-6 text-sm relative z-10">
        <p className="text-gray-500">
          Â© {new Date().getFullYear()} Fintech IT Solutions. 
          <span className="block sm:inline sm:ml-2 text-xs">
            Built with â¤ï¸ from home â€¢ Proudly bootstrapped â€¢ Remote-first
          </span>
        </p>
      </div>
    </footer>
  );
}
