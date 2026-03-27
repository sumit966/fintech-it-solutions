import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, 
  Clock, Globe, MessageCircle, Award, Users, Sparkles,
  Linkedin, Twitter, Github, Instagram, ArrowRight,
  Building2, Coffee, Headphones, Star, Shield, Zap,
  Calendar, Download, FileText, BookOpen, Heart
} from 'lucide-react';
import Container from '../layout/Container';

const API_URL = 'https://fintech-it-solutions.onrender.com/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    { value: "custom-software", label: "Custom Software Development", icon: "??" },
    { value: "web-development", label: "Website & Web Apps", icon: "??" },
    { value: "mobile-development", label: "Mobile App Development", icon: "??" },
    { value: "ai-development", label: "AI & Machine Learning", icon: "??" },
    { value: "consulting", label: "Technology Consulting", icon: "??" },
    { value: "other", label: "Other", icon: "?" }
  ];

  const budgetRanges = [
    "Less than ?2 Lakhs",
    "?2 - ?5 Lakhs",
    "?5 - ?10 Lakhs",
    "?10 - ?20 Lakhs",
    "?20+ Lakhs",
    "Need Consultation"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Phone: ${formData.phone}\nCompany: ${formData.company}\nService: ${formData.service}\nBudget: ${formData.budget}\nMessage: ${formData.message}`
        })
      });

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: '?? Thank you for reaching out! Our team will contact you within 24 hours.' 
        });
        setFormData({
          name: '', email: '', phone: '', company: '', service: '', budget: '', message: ''
        });
      } else {
        setStatus({ type: 'error', message: '? Failed to send message. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: '? Network error. Please check your connection.' });
    } finally {
      setLoading(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-purple-600/30"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-300">Let's Connect</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Let's Build Something
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Extraordinary Together
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have a project in mind? We're here to bring your ideas to life. 
              Share your vision and let's create something amazing.
            </p>
          </motion.div>
        </Container>
      </section>

      <Container>
        <div className="grid lg:grid-cols-3 gap-8 py-12">
          {/* Contact Info Cards */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="lg:col-span-1 space-y-6"
          >
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-indigo-500/50 transition-all">
              <div className="w-14 h-14 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-400 mb-3">For general inquiries and support</p>
              <a href="mailto:fintechitsolutions.info@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition flex items-center gap-2">
                fintechitsolutions.info@gmail.com
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-indigo-500/50 transition-all">
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-400 mb-3">Mon-Fri, 9AM - 6PM IST</p>
              <a href="tel:+916299863493" className="text-purple-400 hover:text-purple-300 transition flex items-center gap-2">
                +91 6299863493
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-indigo-500/50 transition-all">
              <div className="w-14 h-14 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Our Location</h3>
              <p className="text-gray-400">Remote-First Company</p>
              <p className="text-gray-500 text-sm mt-2">Serving clients worldwide from India</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-indigo-500/30 transition-all">
                  <Linkedin className="w-5 h-5 text-gray-300" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-indigo-500/30 transition-all">
                  <Twitter className="w-5 h-5 text-gray-300" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-indigo-500/30 transition-all">
                  <Github className="w-5 h-5 text-gray-300" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-indigo-500/30 transition-all">
                  <Instagram className="w-5 h-5 text-gray-300" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Send a Message</h2>
                <p className="text-gray-400">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              {status.message && (
                <div className={`mb-6 p-4 rounded-xl flex items-start gap-3 ${
                  status.type === 'success' 
                    ? 'bg-green-500/20 border border-green-500' 
                    : 'bg-red-500/20 border border-red-500'
                }`}>
                  {status.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  )}
                  <p className={status.type === 'success' ? 'text-green-400' : 'text-red-400'}>
                    {status.message}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                      placeholder="+91 1234567890"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Company / Organization</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Service Interested In</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                    >
                      <option value="">Select a service</option>
                      {services.map(s => (
                        <option key={s.value} value={s.label}>{s.icon} {s.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map(b => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Tell us about your project *</label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition resize-none"
                    placeholder="Tell us about your project, ideas, requirements, or anything you'd like to discuss..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-center text-gray-500 text-xs">
                  By submitting, you agree to our privacy policy. We'll never share your information.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="py-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Fintech IT Solutions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We're different from the rest. Here's why startups and businesses trust us.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "MVP in weeks, not months" },
              { icon: Shield, title: "Secure Code", desc: "Enterprise-grade security" },
              { icon: Users, title: "Direct Access", desc: "Talk to the founder directly" },
              { icon: Award, title: "Quality Guaranteed", desc: "100% satisfaction or money back" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-indigo-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
