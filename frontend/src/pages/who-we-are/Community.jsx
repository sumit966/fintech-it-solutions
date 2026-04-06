import { motion } from 'framer-motion';
import { Twitter, Instagram, Youtube, Github, Heart, Users, Globe } from 'lucide-react';
import Container from '../../layout/Container';

export default function Community() {
  const socialLinks = [
    { platform: "Twitter", icon: Twitter, url: "#", handle: "Coming soon", active: false, comingSoon: true },
    { platform: "Instagram", icon: Instagram, url: "#", handle: "Coming soon", active: false, comingSoon: true },
    { platform: "YouTube", icon: Youtube, url: "#", handle: "Coming soon", active: false, comingSoon: true },
    { platform: "GitHub", icon: Github, url: "#", handle: "Coming soon", active: false, comingSoon: true }
  ];

  return (
    <div className="pt-24 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] min-h-screen">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Our Community</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join our growing community of developers, innovators, and tech enthusiasts
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Community Stats */}
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-indigo-400" />
              Community Stats
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-gray-400 mb-2">Active Members</p>
                <p className="text-3xl font-bold text-white">500+</p>
              </div>
              <div>
                <p className="text-gray-400 mb-2">Countries</p>
                <p className="text-3xl font-bold text-white">10+</p>
              </div>
              <div>
                <p className="text-gray-400 mb-2">Open Source Contributions</p>
                <p className="text-3xl font-bold text-white">50+</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Heart className="w-6 h-6 text-pink-400" />
              Connect With Us
            </h2>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`flex items-center justify-between p-4 bg-white/10 rounded-xl transition-all ${social.active ? 'hover:bg-indigo-500/20' : 'opacity-50 cursor-not-allowed'}`}
                >
                  <div className="flex items-center gap-3">
                    <social.icon className="w-6 h-6 text-gray-400" />
                    <span className="text-white">{social.platform}</span>
                  </div>
                  {social.comingSoon ? (
                    <span className="text-xs text-gray-500">Coming Soon</span>
                  ) : (
                    <span className="text-indigo-400">@{social.handle}</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Get Involved */}
        <div className="mt-12 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-white/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Get Involved</h2>
          <p className="text-gray-300 mb-6">
            Want to contribute, collaborate, or just stay updated? Join our community channels.
          </p>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition opacity-50 cursor-not-allowed">
            Join Community (Coming Soon)
          </button>
        </div>
      </Container>
    </div>
  );
}
