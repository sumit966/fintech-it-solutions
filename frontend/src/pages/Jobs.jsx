import { useEffect, useState } from "react";
import API from "../services/api";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/careers/jobs").then(res => setJobs(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white p-10">
      <h1 className="text-3xl mb-6">Careers</h1>
      {jobs.map(job => (
        <div key={job._id} className="border border-[#1F2937] bg-[rgba(255,255,255,0.05)] p-4 mb-4 rounded-lg">
          <h2 className="text-xl">{job.title}</h2>
          <p className="text-gray-400">{job.location} • {job.experience}</p>
        </div>
      ))}
    </div>
  );
}