import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, Filter, MapPin, Clock, DollarSign, Briefcase, 
  ChevronDown, ChevronUp, Award, Users, Zap, Heart,
  TrendingUp, BookOpen, Coffee, Gift, Star, Shield,
  Target, Layers, Code, Smartphone, Cpu, Palette,
  Globe, Mail, Phone, Calendar, Rocket, Sparkles
} from 'lucide-react';
import Container from '../layout/Container';

const API_URL = 'https://fintech-it-solutions.onrender.com/api';

export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    filterJobs();
  }, [searchTerm, selectedDepartment, selectedType, jobs]);

  const fetchJobs = async () => {
    try {
      const response = await fetch(`${API_URL}/careers/jobs`);
      const data = await response.json();
      setJobs(data);
      setFilteredJobs(data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  const filterJobs = () => {
    let filtered = jobs;
    if (searchTerm) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedDepartment !== 'all') {
      filtered = filtered.filter(job => job.department === selectedDepartment);
    }
    if (selectedType !== 'all') {
      filtered = filtered.filter(job => job.type === selectedType);
    }
    setFilteredJobs(filtered);
  };

  const formatSalary = (salary) => {
    if (!salary) return 'Competitive';
    return salary.replace(/\?/g, '?');
  };

  const departments = ['all', ...new Set(jobs.map(job => job.department))];
  const types = ['all', 'Full-time', 'Part-time', 'Contract', 'Internship'];

  if (loading) {
    return (
      <div className="pt-32 text-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto mb-4"></div>
        <p className="text-gray-400">Loading opportunities...</p>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-300">Join Our Mission</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Build the Future
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                With Us
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're looking for passionate people to join our journey. 
              All positions are fully remote with flexible hours and competitive compensation.
            </p>
          </motion.div>
        </Container>
      </section>

      <Container>
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12">
          {[
            { value: jobs.length, label: "Open Positions", icon: Briefcase },
            { value: "100%", label: "Remote Work", icon: Globe },
            { value: "7+", label: "Departments", icon: Layers },
            { value: "4.9", label: "Employee Rating", icon: Star }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
            >
              <stat.icon className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="py-8">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search jobs by title, department, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-5 py-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            <p className="text-gray-400">Found {filteredJobs.length} opportunities</p>
          </div>

          {showFilters && (
            <div className="mb-8 p-6 bg-white/5 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2 font-medium">Department</label>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white"
                  >
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept === 'all' ? 'All Departments' : dept}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">Job Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white"
                  >
                    {types.map(type => (
                      <option key={type} value={type}>{type === 'all' ? 'All Types' : type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Job Cards */}
          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/50 hover:bg-white/10 transition-all cursor-pointer"
                onClick={() => window.location.href = `/careers/${job._id}`}
              >
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-indigo-400">{job.department}</span>
                      {job.type === 'Internship' && (
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Internship</span>
                      )}
                      {job.featured && (
                        <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full">Featured</span>
                      )}
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">{job.title}</h2>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                      <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> {formatSalary(job.salary)}</span>
                      <span className="flex items-center gap-1"><Award className="w-4 h-4" /> {job.experience}</span>
                    </div>
                    <p className="text-gray-300 line-clamp-2">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {job.skills?.slice(0, 4).map(skill => (
                        <span key={skill} className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition whitespace-nowrap">
                    Apply Now ?
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No jobs found matching your criteria.</p>
              <button onClick={() => { setSearchTerm(''); setSelectedDepartment('all'); setSelectedType('all'); }} className="mt-4 text-indigo-400 hover:underline">
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Benefits Section */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Join Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Work-Life Balance", desc: "Flexible hours, remote work, and generous time off" },
              { icon: TrendingUp, title: "Growth Opportunities", desc: "Learning budget, conferences, and career advancement" },
              { icon: Users, title: "Great Culture", desc: "Supportive team, regular meetups, and inclusive environment" },
              { icon: Gift, title: "Competitive Benefits", desc: "Health insurance, performance bonuses, and more" },
              { icon: Zap, title: "Modern Tech Stack", desc: "Work with latest technologies and tools" },
              { icon: Coffee, title: "Remote Perks", desc: "Home office setup allowance and co-working space access" }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-indigo-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
