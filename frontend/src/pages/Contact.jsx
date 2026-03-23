import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Container from '../layout/Container';

const API_URL = 'https://fintech-it-solutions.onrender.com/api';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

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
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus({ type: 'error', message: 'Failed to send message.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-24 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] min-h-screen">
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <Container>
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-indigo-100">Have a project in mind? Let's discuss how we can help you.</p>
          </div>
        </Container>
      </section>
      <Container>
        <div className="py-20 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-gray-300 mb-8">Send us a message and we'll respond within 24 hours.</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-indigo-400" />
                </div>
                <div><p className="text-gray-400 text-sm">Email</p><p className="text-white">fintechitsolutions.info@gmail.com</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-indigo-400" />
                </div>
                <div><p className="text-gray-400 text-sm">Phone</p><p className="text-white">+91 6299863493</p></div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            {status.message && (
              <div className={`mb-4 p-4 rounded-lg ${status.type === 'success' ? 'bg-green-500/20 border border-green-500' : 'bg-red-500/20 border border-red-500'}`}>
                <p className={status.type === 'success' ? 'text-green-400' : 'text-red-400'}>{status.message}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Full Name *" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white" />
              <input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white" />
              <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white" />
              <textarea name="message" rows="5" placeholder="Message *" required value={formData.message} onChange={handleChange} className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white" />
              <button type="submit" disabled={loading} className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold">{loading ? 'Sending...' : 'Send Message'}</button>
            </form>
          </div>
        </div>
      </Container>
    </main>
  );
}
