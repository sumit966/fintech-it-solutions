import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, DollarSign, Award, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import Container from '../layout/Container';

export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5002/api/careers/jobs');
      if (!response.ok) throw new Error('Failed to fetch jobs');
      const data = await response.json();
      console.log('Jobs loaded:', data);
      setJobs(data);
    } catch (err) {
      console.error('Error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const serviceCategories = [
    { id: 'all', name: 'All Jobs' },
    { id: 'Custom Software Development', name: 'Custom Software' },
    { id: 'Web Development', name: 'Web Development' },
    { id: 'Mobile Development', name: 'Mobile Development' },
    { id: 'AI Development', name: 'AI Development' },
    { id: 'UI/UX Design', name: 'UI/UX Design' },
    { id: 'QA & Testing', name: 'QA & Testing' }
  ];

  const filteredJobs = activeFilter === 'all' 
    ? jobs 
    : jobs.filter(job => job.serviceCategory === activeFilter);

  if (loading) {
    return (
      <main className="pt-24 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] min-h-screen">
        <Container>
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
            <p className="text-white ml-4">Loading jobs...</p>
          </div>
        </Container>
      </main>
    );
  }

  if (error) {
    return (
      <main className="pt-24 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] min-h-screen">
        <Container>
          <div className="text-center py-20">
            <div className="text-red-400 text-xl mb-4">Error: {error}</div>
            <button onClick={fetchJobs} className="px-6 py-2 bg-indigo-600 text-white rounded-lg">Try Again</button>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="pt-24 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <Container>
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Join Our Team</h1>
            <p className="text-xl text-indigo-100">All positions are fully remote with flexible hours</p>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#0f172a]/50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-3xl font-bold text-indigo-400">{jobs.length}</div><div className="text-gray-400">Open Positions</div></div>
            <div><div className="text-3xl font-bold text-indigo-400">100%</div><div className="text-gray-400">Remote Work</div></div>
            <div><div className="text-3xl font-bold text-indigo-400">7+</div><div className="text-gray-400">Departments</div></div>
            <div><div className="text-3xl font-bold text-indigo-400">4.9</div><div className="text-gray-400">Rating</div></div>
          </div>
        </Container>
      </section>

      {/* Filters */}
      <section className="py-8">
        <Container>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Open Positions ({filteredJobs.length})</h2>
            <button onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {showFilters && (
            <div className="flex flex-wrap gap-3 mb-8">
              {serviceCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 py-2 rounded-full transition ${activeFilter === cat.id ? 'bg-indigo-600 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          )}

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div key={job._id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-indigo-500/50 transition">
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {job.featured && <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">Featured</span>}
                      <span className="text-xs text-indigo-400">{job.department}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                      <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> {job.salary}</span>
                      <span className="flex items-center gap-1"><Award className="w-4 h-4" /> {job.experience}</span>
                    </div>
                    <p className="text-gray-300 text-sm line-clamp-2">{job.description}</p>
                  </div>
                  <Link to={`/careers/${job._id}`} className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-xl transition whitespace-nowrap">
                    View & Apply
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

