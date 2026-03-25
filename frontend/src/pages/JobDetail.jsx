import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Award, CheckCircle, ArrowLeft, X, Briefcase } from 'lucide-react';

const API_URL = 'https://fintech-it-solutions.onrender.com/api';

export default function JobDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    whyYou: ''
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchJob();
  }, [id]);

  const fetchJob = async () => {
    try {
      const response = await fetch(`${API_URL}/careers/jobs/${id}`);
      const data = await response.json();
      setJob(data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  const formatSalary = (salary) => {
    if (!salary) return 'Competitive';
    return salary.replace(/\?/g, '?');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setResumeFile(file);
      setErrors({ ...errors, resume: '' });
    } else {
      setErrors({ ...errors, resume: 'Please upload a valid PDF file' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.experience) newErrors.experience = 'Years of experience is required';
    if (!formData.whyYou.trim()) newErrors.whyYou = 'Please tell us why you are interested';
    if (!resumeFile) newErrors.resume = 'Resume is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    const submitData = new FormData();
    submitData.append('name', formData.name);
    submitData.append('email', formData.email);
    submitData.append('phone', formData.phone);
    submitData.append('experience', formData.experience);
    submitData.append('coverLetter', formData.whyYou);
    submitData.append('jobId', job._id);
    submitData.append('jobTitle', job.title);
    submitData.append('resume', resumeFile);

    try {
      const response = await fetch(`${API_URL}/careers/apply`, {
        method: 'POST',
        body: submitData,
      });
      if (response.ok) {
        setSubmitSuccess(true);
        setTimeout(() => {
          setShowApplyModal(false);
          navigate('/careers');
        }, 3000);
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="pt-32 text-center text-white">Loading...</div>;
  }

  if (!job) {
    return <div className="pt-32 text-center text-white">Job not found</div>;
  }

  return (
    <div className="pt-24 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <button onClick={() => navigate('/careers')} className="text-indigo-400 mb-6 hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Careers
        </button>

        <div className="bg-white/10 rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-white mb-4">{job.title}</h1>
          <div className="flex flex-wrap gap-4 text-gray-300 mb-6">
            <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.department}</span>
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
            <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> {formatSalary(job.salary)}</span>
            <span className="flex items-center gap-1"><Award className="w-4 h-4" /> {job.experience}</span>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-white mb-3">About the Role</h2>
            <p className="text-gray-300">{job.longDescription || job.description}</p>
          </div>

          {job.responsibilities && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-3">What You'll Do</h2>
              <ul className="space-y-2">
                {job.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300"><CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>
          )}

          {job.requirements && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-3">What We're Looking For</h2>
              <ul className="space-y-2">
                {job.requirements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300"><CheckCircle className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>
          )}

          {job.whatWeOffer && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-3">What We Offer</h2>
              <ul className="space-y-2">
                {job.whatWeOffer.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300"><CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>
          )}

          <button onClick={() => setShowApplyModal(true)} className="mt-6 px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
            Apply Now
          </button>
        </div>
      </div>

      {showApplyModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-[#0f172a] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-indigo-600 p-6 rounded-t-2xl flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Apply for {job.title}</h2>
              <button onClick={() => setShowApplyModal(false)} className="text-white"><X className="w-6 h-6" /></button>
            </div>

            {submitSuccess ? (
              <div className="p-8 text-center"><CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" /><h3 className="text-2xl font-bold text-white">Application Submitted!</h3><p className="text-gray-300">We'll review your application and get back to you soon.</p></div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <input type="text" name="name" placeholder="Full Name *" required onChange={handleChange} className={`w-full p-3 bg-white/10 border ${errors.name ? 'border-red-500' : 'border-white/20'} rounded-lg text-white`} />
                <input type="email" name="email" placeholder="Email Address *" required onChange={handleChange} className={`w-full p-3 bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-lg text-white`} />
                <input type="tel" name="phone" placeholder="Phone Number *" required onChange={handleChange} className={`w-full p-3 bg-white/10 border ${errors.phone ? 'border-red-500' : 'border-white/20'} rounded-lg text-white`} />
                <input type="text" name="experience" placeholder="Years of Experience *" required onChange={handleChange} className={`w-full p-3 bg-white/10 border ${errors.experience ? 'border-red-500' : 'border-white/20'} rounded-lg text-white`} />
                <textarea name="whyYou" placeholder="Why are you interested in this role? *" rows="4" required onChange={handleChange} className={`w-full p-3 bg-white/10 border ${errors.whyYou ? 'border-red-500' : 'border-white/20'} rounded-lg text-white`} />
                <div><label className="text-white">Resume (PDF) *</label><input type="file" accept=".pdf" onChange={handleFileChange} required className="w-full p-3 bg-white/10 border rounded-lg text-white" /><p className="text-xs text-gray-500">Max 5MB, PDF only</p>{errors.resume && <p className="text-red-400 text-xs">{errors.resume}</p>}</div>
                <button type="submit" disabled={submitting} className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50">{submitting ? 'Submitting...' : 'Submit Application'}</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
