import { useState, useEffect } from 'react';
import Container from '../layout/Container';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

export default function TestAPI() {
  const [health, setHealth] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    testAPI();
  }, []);

  const testAPI = async () => {
    try {
      // Test health
      const healthRes = await fetch(`${API_URL}/health`);
      const healthData = await healthRes.json();
      setHealth(healthData);

      // Test jobs
      const jobsRes = await fetch(`${API_URL}/careers/jobs`);
      const jobsData = await jobsRes.json();
      setJobs(jobsData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <main className="pt-24 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] min-h-screen">
      <Container>
        <div className="py-12">
          <h1 className="text-3xl font-bold text-white mb-6">API Test Page</h1>
          
          <div className="bg-white/10 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-white mb-4">API URL: {API_URL}</h2>
            
            {loading && <p className="text-yellow-400">Loading...</p>}
            {error && <p className="text-red-400">Error: {error}</p>}
            
            {health && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-green-400">Health Check:</h3>
                <pre className="bg-black/50 p-4 rounded text-gray-300 mt-2">{JSON.stringify(health, null, 2)}</pre>
              </div>
            )}
            
            {jobs.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-green-400">Jobs Found: {jobs.length}</h3>
                <div className="mt-4 space-y-2">
                  {jobs.slice(0, 5).map(job => (
                    <div key={job._id} className="bg-white/5 p-3 rounded">
                      <p className="text-white font-semibold">{job.title}</p>
                      <p className="text-gray-400 text-sm">{job.department} • {job.location}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <button
            onClick={testAPI}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Refresh
          </button>
        </div>
      </Container>
    </main>
  );
}
