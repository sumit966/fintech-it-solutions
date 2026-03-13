export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-20 mt-20">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12">

        <div>
          <h3 className="text-white text-lg mb-6">Company</h3>
          <ul className="space-y-3">
            <li>About Us</li>
            <li>Leadership</li>
            <li>Newsroom</li>
            <li>Investors</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg mb-6">Services</h3>
          <ul className="space-y-3">
            <li>Digital Engineering</li>
            <li>AI & Data</li>
            <li>Cloud & DevOps</li>
            <li>Cybersecurity</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg mb-6">Industries</h3>
          <ul className="space-y-3">
            <li>Banking</li>
            <li>FinTech</li>
            <li>Healthcare</li>
            <li>Retail</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg mb-6">Contact</h3>
          <p>info@fintechitsolutions.com</p>
          <p>India | Global Delivery Model</p>
        </div>
      </div>

      <div className="text-center mt-16 text-sm">
        © {new Date().getFullYear()} FINTECH IT SOLUTIONS. All rights reserved.
      </div>
    </footer>
  );
}