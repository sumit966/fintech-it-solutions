import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, AlertCircle, Shield, Target, Rocket } from "lucide-react";
import Container from "../../layout/Container";

export default function RescueProject() {
  return (
    <main className="pt-24 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] min-h-screen">
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <AlertCircle className="w-20 h-20 mx-auto mb-6 text-white" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Rescue Project</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">Is your project stuck, over budget, or failing? We can turn it around.</p>
          </motion.div>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">We Fix Troubled Projects</h2>
            <p className="text-gray-300 text-lg leading-relaxed">Whether your development has stalled, the code is unmaintainable, or the original team has left, we step in to assess, stabilize, and deliver.</p>
          </div>
        </Container>
      </section>
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-white">Don't Let Your Project Die</h2>
            <Link to="/contact" className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all">Request a Rescue <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
