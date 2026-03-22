import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/admin/applications")
      .then(res => res.json())
      .then(data => setApplications(data))
      .catch(() => setApplications([]));
  }, []);

  return (
    <main className="pt-28 max-w-7xl mx-auto px-8 bg-[#0B0F19] min-h-screen text-white">
      <h1 className="text-4xl font-semibold mb-10">HR Applications Dashboard</h1>

      {applications.length === 0 ? (
        <p className="text-gray-400">No applications yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-[#1F2937]">
            <thead className="bg-[#1F2937]">
              <tr>
                <th className="p-4 border border-[#1F2937] text-left">Name</th>
                <th className="p-4 border border-[#1F2937] text-left">Email</th>
                <th className="p-4 border border-[#1F2937] text-left">Position</th>
                <th className="p-4 border border-[#1F2937] text-left">Resume</th>
              </tr>
            </thead>
            <tbody>
              {applications.map(app => (
                <tr key={app._id} className="border border-[#1F2937]">
                  <td className="p-3 border border-[#1F2937]">{app.name}</td>
                  <td className="p-3 border border-[#1F2937]">{app.email}</td>
                  <td className="p-3 border border-[#1F2937]">{app.job_title}</td>
                  <td className="p-3 border border-[#1F2937]">
                    <a
                      href={`http://localhost:5001/uploads/${app.resume}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}