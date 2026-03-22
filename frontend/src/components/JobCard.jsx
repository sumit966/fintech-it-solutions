import { Link } from "react-router-dom";
import { Briefcase, MapPin, Clock } from "lucide-react";

export default function JobCard({ job }) {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-8 rounded-2xl hover:shadow-2xl transition-all hover:-translate-y-1">
      <div className="flex flex-wrap justify-between items-start gap-6">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-400 transition">
            {job.title}
          </h3>
          <div className="flex flex-wrap gap-4 mb-4">
            <span className="flex items-center text-sm text-gray-400">
              <Briefcase className="w-4 h-4 mr-1" />
              {job.department || "Engineering"}
            </span>
            <span className="flex items-center text-sm text-gray-400">
              <MapPin className="w-4 h-4 mr-1" />
              {job.location || "Remote / Pune"}
            </span>
            <span className="flex items-center text-sm text-gray-400">
              <Clock className="w-4 h-4 mr-1" />
              {job.experience || "2+ years"}
            </span>
          </div>
          <p className="text-gray-400">We're looking for passionate developers to join our growing team.</p>
        </div>
        <Link
          to={`/careers/apply/${job._id}`}
          className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap"
        >
          Apply Now →
        </Link>
      </div>
    </div>
  );
}