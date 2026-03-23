import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Settings, Shield, Zap, CheckCircle } from "lucide-react";
import Container from "../../layout/Container";

export default function SoftwareMaintenance() {
  return (
    <main className="pt-24 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] min-h-screen">
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <Settings className="w-20 h-20 mx-auto mb-6 text-white" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Software Maintenance</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">Keep your software healthy, secure, and up-to-date with our proactive maintenance plans.</p>
          </motion.div>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">Why Maintenance Matters</h2>
            <p className="text-gray-300 text-lg leading-relaxed">Software needs constant care. Security patches, performance improvements, and compatibility updates are essential to keep your product running smoothly and securely.</p>
          </div>
        </Container>
      </section>
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-white">Protect Your Investment</h2>
            <Link to="/contact" className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all">Request a Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
