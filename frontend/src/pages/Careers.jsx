import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, MapPin, Clock, DollarSign, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

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

  const departments = ['all', ...new Set(jobs.map(job => job.department))];
  const types = ['all', 'Full-time', 'Part-time', 'Contract', 'Internship'];

  if (loading) {
    return (
      <div className="pt-32 text-center text-white">
        <div className="text-xl">Loading amazing opportunities...</div>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're building the future of technology. Come be part of something amazing.
            All positions are fully remote with flexible hours.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search jobs by title, department, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Filter Toggle */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-5 py-2 bg-white/10 rounded-full hover:bg-white/20 transition"
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
            {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="max-w-4xl mx-auto mb-8 p-6 bg-white/5 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2 font-medium">Department</label>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white"
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
                  className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white"
                >
                  {types.map(type => (
                    <option key={type} value={type}>{type === 'all' ? 'All Types' : type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-400">Found {filteredJobs.length} {filteredJobs.length === 1 ? 'opportunity' : 'opportunities'}</p>
        </div>

        {/* Job Cards */}
        <div className="space-y-4">
          {filteredJobs.map(job => (
            <Link to={`/careers/${job._id}`} key={job._id}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/50 hover:bg-white/10 transition-all cursor-pointer">
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-indigo-400">{job.department}</span>
                      {job.type === 'Internship' && (
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Internship</span>
                      )}
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">{job.title}</h2>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                      <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> {job.salary}</span>
                      <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.experience}</span>
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
              </div>
            </Link>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No jobs found matching your criteria. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
