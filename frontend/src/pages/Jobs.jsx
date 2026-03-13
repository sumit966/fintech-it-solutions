import { useEffect, useState } from "react";
import API from "../services/api";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/careers/jobs").then(res => setJobs(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl mb-6">Careers</h1>
      {jobs.map(job => (
        <div key={job._id} className="border p-4 mb-4">
          <h2 className="text-xl">{job.title}</h2>
          <p>{job.location} • {job.experience}</p>
        </div>
      ))}
    </div>
  );
}