import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Target, Clock, Award, Shield, Users, CheckCircle } from "lucide-react";
import Container from "../../layout/Container";

export default function ProjectBasedDevelopment() {
  return (
    <main className="pt-24 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] min-h-screen">
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <Rocket className="w-20 h-20 mx-auto mb-6 text-white" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Project Based Development</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">Fixed scope, fixed timeline, guaranteed delivery. Perfect for well-defined projects with clear requirements.</p>
          </motion.div>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">What is Project-Based Development?</h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">Our project-based model is ideal for startups and businesses that have a clear vision and a well-defined scope. We work with you to outline the exact features, timeline, and budget, then we deliver the complete solution on schedule.</p>
            <p className="text-gray-300 text-lg leading-relaxed">This approach gives you predictability – you know exactly what you'll get, when you'll get it, and how much it costs.</p>
          </div>
        </Container>
      </section>
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
            <Link to="/contact" className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all">Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
