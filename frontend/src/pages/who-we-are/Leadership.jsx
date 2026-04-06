import { motion } from 'framer-motion';
import { Mail, Award, Briefcase, GraduationCap, User } from 'lucide-react';
import Container from '../../layout/Container';

export default function Leadership() {
  const leaders = [
    {
      name: "Sumit Kumar",
      role: "Founder & CEO",
      expertise: ["Full-Stack Development", "Product Strategy", "Startup Mentoring", "Cloud Architecture", "Team Leadership"],
      email: "sumit@fintechitsolutions.com",
      color: "from-blue-600 to-cyan-600",
      bio: "Sumit Kumar is the visionary founder behind Fintech IT Solutions. With over 8 years of experience in software development, product management, and business strategy, he leads the company's technical innovation and growth. His passion for building scalable solutions and mentoring startups drives the company's mission to help businesses succeed through technology."
    },
    {
      name: "Priya Sharma",
      role: "Head of Engineering",
      expertise: ["Backend Architecture", "System Design", "DevOps", "Team Management"],
      email: "priya@fintechitsolutions.com",
      color: "from-purple-600 to-pink-600",
      bio: "Priya leads our engineering team with over 6 years of experience in building scalable systems. She specializes in cloud architecture and has helped numerous startups scale their applications."
    },
    {
      name: "Rahul Verma",
      role: "Head of Product",
      expertise: ["Product Strategy", "UI/UX", "Market Research", "Agile Methodology"],
      email: "rahul@fintechitsolutions.com",
      color: "from-green-600 to-teal-600",
      bio: "Rahul brings 5+ years of product management experience. He has launched multiple successful products and focuses on creating user-centric solutions that solve real business problems."
    }
  ];

  return (
    <div className="pt-24 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] min-h-screen">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Leadership Team</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the passionate individuals driving our vision forward
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all"
            >
              <div className={`h-2 bg-gradient-to-r ${leader.color}`}></div>
              <div className="p-6">
                {/* Avatar without image - using icon instead */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <User className="w-12 h-12 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-1">{leader.name}</h3>
                <p className="text-indigo-400 text-center mb-3">{leader.role}</p>
                <p className="text-gray-300 text-sm text-center mb-4">{leader.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {leader.expertise.map((skill, i) => (
                    <span key={i} className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full">{skill}</span>
                  ))}
                </div>
                <div className="flex justify-center gap-3">
                  <a href={`mailto:${leader.email}`} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-indigo-500/30 transition text-sm">
                    <Mail className="w-4 h-4 text-gray-300" />
                    <span className="text-gray-300">Email</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
