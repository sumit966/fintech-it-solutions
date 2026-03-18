import { Link } from "react-router-dom";
import { 
  Users, 
  Heart, 
  Calendar,
  MessageCircle,
  ArrowRight,
  MapPin,
  Mail,
  Twitter,
  Linkedin,
  Github,
  Sparkles,
  Instagram,
  Clock
} from "lucide-react";

export default function Community() {
  // Current community status - just starting!
  const communityStats = {
    founders: "5+",
    events: "2 planned",
    newsletter: "Just launched",
    discord: "New"
  };

  const upcomingEvents = [
    {
      title: "First Founders Call",
      date: "April 10, 2024",
      location: "Google Meet",
      type: "Virtual Meetup",
      description: "Our very first community call! Let's connect, share struggles, and support each other."
    },
    {
      title: "MVP Workshop",
      date: "April 20, 2024",
      location: "Online",
      type: "Workshop",
      description: "Free workshop on building your first MVP. Limited to 10 founders."
    }
  ];

  const communityGoals = [
    "Build a supportive space for bootstrapped founders",
    "Share real experiences, not just success stories",
    "Help each other with technical decisions",
    "No investors, no sales pitches - just founders helping founders",
    "Grow slowly and authentically"
  ];

  // UPDATED: Your actual social links
  const socialLinks = [
    { 
      platform: "LinkedIn", 
      icon: Linkedin, 
      url: "https://www.linkedin.com/company/112394092/admin/dashboard/", 
      handle: "Fintech IT Solutions",
      active: true 
    },
    { 
      platform: "Twitter", 
      icon: Twitter, 
      url: "#", 
      handle: "Coming soon",
      active: false,
      comingSoon: true
    },
    { 
      platform: "Instagram", 
      icon: Instagram, 
      url: "#", 
      handle: "Coming soon",
      active: false,
      comingSoon: true
    },
    { 
      platform: "GitHub", 
      icon: Github, 
      url: "#", 
      handle: "Coming soon",
      active: false,
      comingSoon: true
    }
  ];

  // Handle email click - opens default email client
  const handleEmailClick = () => {
    window.location.href = "mailto:fintechitsolutions.info@gmail.com";
  };

  return (
    <main className="pt-24 bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Building Our
            <span className="block text-yellow-300">Community</span>
          </h1>
          <p className="text-xl max-w-2xl text-orange-100">
            We're just getting started. A place for founders to connect, share, and grow together.
          </p>
        </div>
      </section>

      {/* HONEST STATUS */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-orange-50 p-12 rounded-3xl text-center">
            <Sparkles className="w-16 h-16 text-orange-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">We're Just Starting Out</h2>
            <p className="text-xl text-gray-700 mb-8">
              Our community is brand new. We don't have thousands of members (yet). 
              But we have something better: the opportunity to build something meaningful together, from day one.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-xl">
                <div className="text-2xl font-bold text-orange-600">{communityStats.founders}</div>
                <p className="text-sm text-gray-600">Early Members</p>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <div className="text-2xl font-bold text-orange-600">{communityStats.events}</div>
                <p className="text-sm text-gray-600">Events Planned</p>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <div className="text-2xl font-bold text-orange-600">✨</div>
                <p className="text-sm text-gray-600">{communityStats.newsletter}</p>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <div className="text-2xl font-bold text-orange-600">🆕</div>
                <p className="text-sm text-gray-600">{communityStats.discord}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN NOW */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Join a New Community?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Your Voice Matters</h3>
                    <p className="text-gray-600">In a new community, you're not just a number. Your ideas shape what we become.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real Connections</h3>
                    <p className="text-gray-600">Small means meaningful. You'll actually get to know other founders.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Grow Together</h3>
                    <p className="text-gray-600">We're all at the beginning. We learn, struggle, and succeed together.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">What We're Building</h3>
              <ul className="space-y-4">
                {communityGoals.map((goal, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-orange-500 text-xl">•</span>
                    <p className="text-gray-700">{goal}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">First Events</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We're starting small. Join our first gatherings.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {event.type}
                  </span>
                  <span className="text-sm text-gray-500">Limited spots</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-600 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </p>
                </div>
                <button className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition">
                  Join Waitlist
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN COMMUNITY - UPDATED with your actual links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Be an Early Member</h2>
          <p className="text-xl text-gray-600 mb-8">
            The first members will shape what this community becomes.
          </p>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <div key={index}>
                  {social.active ? (
                    // Active link (LinkedIn)
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition"
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="text-sm">{social.handle}</span>
                    </a>
                  ) : (
                    // Coming soon (Twitter, Instagram, GitHub)
                    <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full opacity-60 cursor-not-allowed">
                      <social.icon className="w-5 h-5" />
                      <span className="text-sm">{social.handle}</span>
                      <Clock className="w-3 h-3 ml-1 text-gray-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Email with click handler */}
            <div className="mt-4">
              <button
                onClick={handleEmailClick}
                className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-6 py-3 rounded-full hover:bg-orange-200 transition font-medium"
              >
                <Mail className="w-5 h-5" />
                <span>Email Me</span>
              </button>
              <p className="text-xs text-gray-500 mt-2">
                Click to send an email: fintechitsolutions.info@gmail.com
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
            <p className="mb-6">Get updates on community events and founder resources.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900"
              />
              <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:shadow-xl transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Build Together</h2>
          <p className="text-xl text-gray-600 mb-8">
            No community is too small to start. Join us at the beginning.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition"
          >
            Say Hello <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}