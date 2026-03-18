import { useState } from "react";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle,
  AlertCircle,
  Linkedin,
  Twitter,
  Instagram,
  ArrowRight,
  Home,
  Building2
} from "lucide-react";
import Container from "../layout/Container";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://fintech-it-solutions.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          company: "",
          message: ""
        });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    }

    setLoading(false);
  };

  // Updated contact info with honest details
  const contactInfo = [
    {
      icon: Home,
      title: "Current Location",
      details: ["Pune, Maharashtra (Remote)", "Working from home"],
      color: "from-blue-500 to-cyan-500",
      badge: "🟢 Active"
    },
    {
      icon: Building2,
      title: "Future Offices",
      details: ["Noida & Bangalore", "Coming soon (in planning)"],
      color: "from-purple-500 to-pink-500",
      badge: "🚧 2025"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["fintechitsolutions.info@gmail.com"],
      color: "from-green-500 to-emerald-500",
      badge: "📧 24hr response"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 6299863493"],
      color: "from-orange-500 to-red-500",
      badge: "📞 Mon-Fri, 9AM-6PM"
    }
  ];

  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We typically respond within 24 hours on business days. For urgent matters, give us a call."
    },
    {
      question: "Do you work with startups?",
      answer: "Absolutely! We're a startup ourselves and love working with early-stage companies. We offer special rates for first-time founders."
    },
    {
      question: "Where are you located?",
      answer: "We're currently operating remotely from Pune, with plans to open offices in Noida and Bangalore in 2025. But location doesn't matter - we work with clients everywhere!"
    },
    {
      question: "Can we schedule a video call?",
      answer: "Yes! After initial contact, we can schedule a Zoom/Google Meet call to discuss your project."
    }
  ];

  return (
    <main className="pt-24 bg-white">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Build Something
              <span className="block text-yellow-300">Amazing Together</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Have a project in mind? I'd love to hear about it. 
              Reach out and let's start a conversation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+916299863493"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Me Now
              </a>
              <a
                href="mailto:fintechitsolutions.info@gmail.com"
                className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* CONTACT INFO CARDS - UPDATED */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-32 relative z-10">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-600">
                    {detail}
                    {i === 0 && item.title === "Current Location" && (
                      <span className="block text-xs text-green-600 mt-1">✨ Working remotely</span>
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Honest Note */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 bg-blue-50 inline-block px-6 py-3 rounded-full">
              🏗️ Currently operating remotely while establishing our physical presence
            </p>
          </div>
        </Container>
      </section>

      {/* CONTACT FORM & INFO */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                I'm excited to hear about your project. Whether you're a startup 
                looking for your first tech partner or an established business 
                needing custom software, I'm here to help.
              </p>

              {/* Remote Work Badge */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-2xl mb-6 flex items-center gap-4">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full relative"></div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Available for calls & meetings</p>
                  <p className="text-sm text-gray-600">Remote-first • Work from home • Flexible hours</p>
                </div>
              </div>

              {/* Special Message for Startups */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl mb-8">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✨</span>
                  </span>
                  First-time Client?
                </h3>
                <p className="text-gray-700">
                  Being a startup myself, I understand your journey. Special rates and flexible terms 
                  available for early-stage founders.
                </p>
              </div>

              {/* FAQ Preview */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Frequently Asked</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl">
                      <h4 className="font-semibold mb-2">{faq.question}</h4>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/er-sumit-raj-/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>

                  <a
                    href="#"
                    className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center hover:scale-110 transition opacity-50 relative group"
                  >
                    <Twitter className="w-5 h-5 text-white" />
                    <span className="absolute -bottom-8 text-xs text-gray-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition">
                      Coming soon
                    </span>
                  </a>

                  <a
                    href="#"
                    className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center hover:scale-110 transition opacity-50 relative group"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                    <span className="absolute -bottom-8 text-xs text-gray-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition">
                      Coming soon
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold mb-2">Send a Message</h2>
              <p className="text-gray-500 mb-8">
                I'll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your Company Name"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                {error && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    {error}
                  </div>
                )}

                {success && (
                  <div className="bg-green-50 text-green-600 p-4 rounded-lg flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Message sent successfully! I'll contact you soon.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to my privacy policy.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* MAP SECTION */}
      <section className="h-[450px] relative">
        <iframe
          title="Office Location"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          className="absolute inset-0"
          src="https://maps.google.com/maps?q=pune%20india&t=&z=13&ie=UTF8&iwloc=&output=embed"
        />
        <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl">
          <MapPin className="w-6 h-6 text-blue-600 mb-2" />
          <h3 className="font-semibold">Current Base</h3>
          <p className="text-gray-600 text-sm">Pune, Maharashtra, India</p>
          <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
            <span>Working remotely from here</span>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your ideas and see how I can help bring them to life.
            </p>
            <a
              href="tel:+916299863493"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Schedule a Call <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <p className="text-sm text-blue-200 mt-6">
              ✨ First-time founders get 15% off their first project
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}