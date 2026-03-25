import { useState } from 'react';

const API_URL = 'https://fintech-it-solutions.onrender.com/api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Contact Us</h1>
        {status === 'success' && <div className="bg-green-500/20 border border-green-500 p-4 rounded-lg text-green-400 mb-6">Message sent! We'll get back to you soon.</div>}
        {status === 'error' && <div className="bg-red-500/20 border border-red-500 p-4 rounded-lg text-red-400 mb-6">Failed to send. Please try again.</div>}
        <form onSubmit={handleSubmit} className="bg-white/10 rounded-2xl p-8">
          <input type="text" name="name" placeholder="Your Name *" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full p-3 mb-4 bg-white/20 rounded-lg text-white" />
          <input type="email" name="email" placeholder="Your Email *" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full p-3 mb-4 bg-white/20 rounded-lg text-white" />
          <textarea name="message" placeholder="Your Message *" rows="5" required value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full p-3 mb-4 bg-white/20 rounded-lg text-white" />
          <button type="submit" disabled={loading} className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700">{loading ? 'Sending...' : 'Send Message'}</button>
        </form>
      </div>
    </div>
  );
}
