import { Link } from "react-router-dom";
import { useState } from "react";
import Container from "../layout/Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b z-50">
      <Container>
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="text-xl font-semibold tracking-wide">
            FINTECH IT SOLUTIONS
          </Link>

          {/* Menu */}
          <nav className="hidden md:flex gap-10 text-sm font-medium text-gray-700">
            <Link to="/services" className="hover:text-black transition">
              What We Do
            </Link>
            <Link to="/about" className="hover:text-black transition">
              Who We Are
            </Link>
            <Link to="/newsroom" className="hover:text-black transition">
              Insights
            </Link>
            <Link to="/careers" className="hover:text-black transition">
              Careers
            </Link>
            <Link to="/contact" className="hover:text-black transition">
              Contact
            </Link>
          </nav>

        </div>
      </Container>
    </header>
  );
}