import { useState, useEffect } from 'react';

export default function Debug() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fintech-it-solutions.onrender.com/api/careers/jobs')
      .then(res => res.json())
      .then(data => {
        console.log('Jobs from backend:', data);
        setJobs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ padding: '100px', color: 'white' }}>
      <h1>Debug - Check Salary Data</h1>
      {jobs.map(job => (
        <div key={job._id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
          <h3>{job.title}</h3>
          <p>Salary RAW: <strong>{job.salary}</strong></p>
          <p>Salary with ?: <strong>{job.salary?.replace(/\?/g, '?')}</strong></p>
        </div>
      ))}
    </div>
  );
}
