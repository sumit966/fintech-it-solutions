import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);

  useEffect(() => {
    API.get("/careers/jobs").then(res => {
      const found = res.data.find(j => j.id === Number(id));
      setJob(found);
    });
  }, [id]);

  if (!job) {
    return (
      <div className="min-h-screen bg-black text-white p-20">
        Loading job…
      </div>
    );
  }

  const schema = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    title: job.title,
    description: `${job.department} position with ${job.experience} experience.`,
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "FINTECH IT SOLUTIONS"
    },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: {
      "@type": "Country",
      name: "India"
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 max-w-4xl mx-auto">
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema)
        }}
      />

      <h1 className="text-4xl font-bold mb-4">{job.title}</h1>

      <p className="text-gray-400 mb-6">
        {job.department} • {job.location} • {job.experience}
      </p>

      <p className="text-lg leading-relaxed mb-10">
        We are looking for skilled professionals to work on
        enterprise-level projects with our global clients.
      </p>

      <button
        onClick={() => navigate(`/apply/${job.id}`)}
        className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700"
      >
        Apply Now
      </button>
    </div>
  );
}
