import { useState, useEffect } from "react";
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Clock, 
  Users, 
  Target,
  Zap,
  Heart,
  GraduationCap,
  Coffee,
  Award,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fintech-it-solutions.onrender.com/api/careers/jobs")
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setLoading(false);
      })
      .catch(() => {
        setJobs([]);
        setLoading(false);
      });
  }, []);

  const filtered = jobs.filter(job =>
    job.title?.toLowerCase().includes(search.toLowerCase())
  );

  const benefits = [
    {
      icon: Target,
      title: "Meaningful Work",
      desc: "Build products that actually make a difference"
    },
    {
      icon: Zap,
      title: "Modern Stack",
      desc: "Work with the latest technologies"
    },
    {
      icon: Users,
      title: "Small Team",
      desc: "Big impact, no bureaucracy"
    },
    {
      icon: Heart,
      title: "Great Culture",
      desc: "Collaborative and supportive environment"
    },
    {
      icon: GraduationCap,
      title: "Learning",
      desc: "Continuous growth and skill development"
    },
    {
      icon: Coffee,
      title: "Flexible",
      desc: "Remote-friendly, results-oriented"
    }
  ];

  const values = [
    "Write clean, maintainable code",
    "Learn something new every day",
    "Help teammates succeed",
    "Take ownership of your work",
    "Communicate openly and honestly"
  ];

  return (
    <main className="pt-24 bg-white">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join Our Growing
            <span className="block text-yellow-300">Tech Team</span>
          </h1>
          <p className="text-xl max-w-2xl text-blue-100 mb-8">
            We're a small, passionate team building software that matters. 
            If you love coding and want to make an impact, we'd love to meet you.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#openings"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              View Openings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Join Fintech IT Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're building something special, and we're looking for people who want to be part of it
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">What We Value</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're looking for teammates who share our passion for building great software
              </p>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-2xl">
              <Award className="w-16 h-16 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Grow With Us</h3>
              <p className="text-xl text-blue-100 mb-6">
                As a startup, your growth is our growth. We invest in our team's learning and development.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="bg-white/20 px-4 py-2 rounded-lg">Mentorship</span>
                <span className="bg-white/20 px-4 py-2 rounded-lg">Learning Budget</span>
                <span className="bg-white/20 px-4 py-2 rounded-lg">Conferences</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="openings" className="py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">
              {filtered.length} position{filtered.length !== 1 ? 's' : ''} available
            </p>
          </div>

          {/* SEARCH BAR */}
          <div className="flex items-center border rounded-xl p-2 mb-10 bg-white shadow-lg">
            <Search className="w-5 ml-3 text-gray-400" />
            <input
              placeholder="Search jobs by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none w-full px-4 py-3"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all">
              Search
            </button>
          </div>

          {/* JOB LIST */}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-500">Loading positions...</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filtered.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-2xl">
                  <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">No positions match your search</p>
                  <button
                    onClick={() => setSearch("")}
                    className="mt-4 text-blue-600 hover:underline"
                  >
                    Clear search
                  </button>
                </div>
              ) : (
                filtered.map((job) => (
                  <div
                    key={job._id}
                    className="group bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-2xl transition-all hover:-translate-y-1"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 transition">
                          {job.title}
                        </h3>
                        
                        <div className="flex flex-wrap gap-4 mb-4">
                          <span className="flex items-center text-sm text-gray-500">
                            <Briefcase className="w-4 h-4 mr-1" />
                            {job.department || "Engineering"}
                          </span>
                          <span className="flex items-center text-sm text-gray-500">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location || "Remote / Pune"}
                          </span>
                          <span className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.experience || "2+ years"}
                          </span>
                        </div>

                        <p className="text-gray-600">
                          We're looking for passionate developers to join our growing team.
                        </p>
                      </div>

                      <Link
                        to={`/careers/apply/${job._id}`}
                        className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap"
                      >
                        Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* NO JOBS MESSAGE */}
          {!loading && jobs.length === 0 && (
            <div className="text-center py-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
              <h3 className="text-3xl font-bold mb-4">We're Growing!</h3>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                We don't have any open positions right now, but we're always looking for talented people. 
                Send us your resume and we'll keep you in mind.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
              >
                Send Your Resume <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Apply now or reach out to learn more about life at Fintech IT Solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#openings"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              View Openings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            ✨ First 5 applicants get a special onboarding bonus!
          </p>
        </div>
      </section>
    </main>
  );
}