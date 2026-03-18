import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-20 relative overflow-hidden">
      {/* BACKGROUND TECH GLOW */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-72 h-72 bg-blue-500 blur-3xl top-[-80px] left-[-80px]"></div>
        <div className="absolute w-72 h-72 bg-purple-500 blur-3xl bottom-[-80px] right-[-80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12 relative z-10">
        {/* COMPANY */}
        <div className="hover:-translate-y-1 transition duration-300">
          <h3 className="text-white font-semibold mb-4 text-lg">
            FINTECH IT SOLUTIONS
          </h3>
          <p className="text-sm leading-relaxed">
            A fresh, bootstrapped startup building custom software solutions 
            for early-stage companies. Currently operating remotely from India.
          </p>
          <p className="text-xs text-gray-500 mt-4">
            🚀 Building the future, one project at a time.
          </p>
          {/* Work from home badge */}
          <div className="mt-4 inline-flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs text-gray-300">Remote-First / Work from Home</span>
          </div>
        </div>

        {/* SERVICES */}
        <div className="hover:-translate-y-1 transition duration-300">
          <h4 className="text-white font-semibold mb-4">
            Services
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:text-[#2469bc] transition hover:translate-x-1 inline-block" to="/services/custom-software">
                Custom Software Development
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#2469bc] transition hover:translate-x-1 inline-block" to="/services/web-development">
                Website & Web Apps
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#2469bc] transition hover:translate-x-1 inline-block" to="/services/mobile">
                Mobile App Development
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#2469bc] transition hover:translate-x-1 inline-block" to="/services/crm">
                CRM Development
              </Link>
            </li>
          </ul>
        </div>

        {/* COMPANY LINKS */}
        <div className="hover:-translate-y-1 transition duration-300">
          <h4 className="text-white font-semibold mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:text-[#2469bc] transition hover:translate-x-1 inline-block" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#2469bc] transition hover:translate-x-1 inline-block" to="/careers">
                Careers
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#2469bc] transition hover:translate-x-1 inline-block" to="/projects">
                Products & Tools
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#2469bc] transition hover:translate-x-1 inline-block" to="/contact">
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
          
          {/* Current Status Badge */}
          <div className="mb-4 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-3 rounded-lg border border-yellow-600/30">
            <p className="text-xs font-semibold text-yellow-500 mb-1">🏗️ BUILDING PHASE</p>
            <p className="text-xs text-gray-400">Operating remotely while establishing offices</p>
          </div>

          {/* Location with honest status */}
          <div className="mb-3">
            <p className="text-sm text-gray-400 flex items-start gap-2">
              <span className="text-blue-400 mt-0.5">📍</span>
              <span>
                <span className="text-white font-medium">Pune (HQ - Remote)</span>
                <span className="block text-xs text-gray-500">Virtual office, working from home</span>
              </span>
            </p>
            <p className="text-sm text-gray-400 flex items-start gap-2 mt-2">
              <span className="text-blue-400 mt-0.5">🚧</span>
              <span>
                <span className="text-white font-medium">Noida & Bangalore</span>
                <span className="block text-xs text-gray-500">Coming soon (in planning phase)</span>
              </span>
            </p>
          </div>

          <p className="text-sm mt-3 flex items-center gap-2">
            <span className="text-blue-400">📧</span>
            <a href="mailto:fintechitsolutions.info@gmail.com" className="hover:text-[#2469bc] transition">
              fintechitsolutions.info@gmail.com
            </a>
          </p>

          <p className="text-sm mt-2 flex items-center gap-2">
            <span className="text-blue-400">📞</span>
            <a href="tel:+916299863493" className="hover:text-[#2469bc] transition">
              +91 6299863493
            </a>
          </p>

          {/* Work Hours */}
          <p className="text-xs text-gray-500 mt-3 flex items-center gap-2">
            <span className="text-blue-400">⏰</span>
            Mon-Fri, 9AM-6PM IST (Remote)
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex gap-4 mt-6 text-sm">
            <a
              href="https://www.linkedin.com/in/er-sumit-raj-/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2469bc] transition hover:scale-110 flex items-center gap-1"
            >
              <span>🔗</span> LinkedIn
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2469bc] transition hover:scale-110 flex items-center gap-1 opacity-50"
            >
              <span>🐦</span> Twitter
              <span className="text-xs text-gray-600">(soon)</span>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2469bc] transition hover:scale-110 flex items-center gap-1 opacity-50"
            >
              <span>💻</span> GitHub
              <span className="text-xs text-gray-600">(soon)</span>
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 text-center py-6 text-sm relative z-10">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Fintech IT Solutions. 
          <span className="block sm:inline sm:ml-2 text-xs">
            Built with ❤️ from home • Proudly bootstrapped • Remote-first
          </span>
        </p>
      </div>
    </footer>
  );
}