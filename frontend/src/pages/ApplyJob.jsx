import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ApplyJob() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    : "",
    company: "",
    experience: "",
    education: "",
    coverLetter: "",
    resume: null
  });

  useEffect(() => {
    fetch(`https://fintech-it-solutions.onrender.com/api/careers/jobs/${id}`)
      .then(res => res.json())
      .then(data => setJob(data))
      .catch(() => {});
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.resume) {
      setError("Please upload resume");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("email", form.email);
      data.append("phone", form.phone);
      data.append("", form.);
      data.append("company", form.company);
      data.append("experience", form.experience);
      data.append("education", form.education);
      data.append("coverLetter", form.coverLetter);
      data.append("jobId", id);
      data.append("resume", form.resume);

      const res = await fetch("http://localhost:5001/api/careers/apply", {
        method: "POST",
        body: data
      });

      const result = await res.json();
      if (result.success) {
        navigate("/careers/success");
      } else {
        setError("Application failed");
      }
    } catch (err) {
      setError("Server error");
    }
    setLoading(false);
  };

  return (
    <main className="pt-24 bg-[#0B0F19] min-h-screen">
      <section className="max-w-5xl mx-auto bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] p-10 shadow-lg rounded-2xl">
        <h1 className="text-4xl font-semibold mb-2 text-white">
          Apply for: {job?.title || "Loading..."}
        </h1>
        <p className="text-gray-400 mb-8">
          Location: {job?.location || "Global"} â€¢ Department: {job?.department || "Technology"}
        </p>

        {error && (
          <div className="bg-red-500/20 text-red-400 p-3 mb-6 rounded-lg border border-red-500/30">
            {error}
          </div>
        )}

        <form onSubmit={submit} className="grid md:grid-cols-2 gap-6">
          <input
            placeholder="Full Name"
            required
            className="border border-[#1F2937] bg-[rgba(255,255,255,0.05)] p-3 w-full rounded-lg text-white placeholder-gray-500"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            placeholder="Email Address"
            type="email"
            required
            className="border border-[#1F2937] bg-[rgba(255,255,255,0.05)] p-3 w-full rounded-lg text-white placeholder-gray-500"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            placeholder="Phone Number"
            required
            className="border border-[#1F2937] bg-[rgba(255,255,255,0.05)] p-3 w-full rounded-lg text-white placeholder-gray-500"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <input
            placeholder="Profile"
            className="border border-[#1F2937] bg-[rgba(255,255,255,0.05)] p-3 w-full rounded-lg text-white placeholder-gray-500"
            onChange={(e) => setForm({ ...form, : e.target.value })}
          />
          <input
            placeholder="Current Company"
            className="border border-[#1F2937] bg-[rgba(255,255,255,0.05)] p-3 w-full rounded-lg text-white placeholder-gray-500"
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />
          <input
            placeholder="Years of Experience"
            className="border border-[#1F2937] bg-[rgba(255,255,255,0.05)] p-3 w-full rounded-lg text-white placeholder-gray-500"
            onChange={(e) => setForm({ ...form, experience: e.target.value })}
          />
          <input
            placeholder="Highest Qualification"
            className="border border-[#1F2937] bg-[rgba(255,255,255,0.05)] p-3 w-full md:col-span-2 rounded-lg text-white placeholder-gray-500"
            onChange={(e) => setForm({ ...form, education: e.target.value })}
          />
          <textarea
            placeholder="Cover Letter (Optional)"
            rows="5"
            className="border border-[#1F2937] bg-[rgba(255,255,255,0.05)] p-3 w-full md:col-span-2 rounded-lg text-white placeholder-gray-500"
            onChange={(e) => setForm({ ...form, coverLetter: e.target.value })}
          />

          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Upload Resume (PDF Only)
            </label>
            <input
              type="file"
              accept="application/pdf"
              required
              className="text-gray-300"
              onChange={(e) => setForm({ ...form, resume: e.target.files[0] })}
            />
          </div>

          <button
            disabled={loading}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 md:col-span-2 rounded-lg font-semibold hover:shadow-xl transition"
          >
            {loading ? "Submitting Application..." : "Submit Application"}
          </button>
        </form>
      </section>
    </main>
  );
}
