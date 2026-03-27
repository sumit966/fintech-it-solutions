import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  MapPin, Clock, DollarSign, Award, CheckCircle, ArrowLeft, X, 
  Briefcase, Users, Zap, Heart, Gift, TrendingUp, BookOpen, 
  Coffee, Star, Shield, Target, Layers, Code, Smartphone, 
  Cpu, Palette, Globe, Mail, Phone, Calendar, Rocket, Sparkles,
  ChevronRight, GraduationCap, Home, HeartHandshake, HelpCircle
} from 'lucide-react';
import Container from '../layout/Container';

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
    name: '', email: '', phone: '', experience: '', whyYou: ''
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchJob();
  }, [id]);

  const fetchJob = async () => {
    try {
      const response = await fetch(`${API_URL}/careers/jobs/${id}`);
      if (!response.ok) throw new Error('Job not found');
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
      const response = await fetch(`${API_URL}/careers/apply`, { method: 'POST', body: submitData });
      if (response.ok) {
        setSubmitSuccess(true);
        setTimeout(() => { setShowApplyModal(false); navigate('/careers'); }, 3000);
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
    return (
      <div className="pt-32 text-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto mb-4"></div>
        <p>Loading job details...</p>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="pt-32 text-center text-white">
        <Briefcase className="w-16 h-16 text-gray-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Job Not Found</h2>
        <button onClick={() => navigate('/careers')} className="text-indigo-400 hover:underline">Back to Careers</button>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] min-h-screen">
      <Container>
        <button onClick={() => navigate('/careers')} className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition">
          <ArrowLeft className="w-4 h-4" /> Back to all jobs
        </button>

        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{job.title}</h1>
            <div className="flex flex-wrap gap-4 text-white/90">
              <span className="flex items-center gap-2"><Briefcase className="w-4 h-4" /> {job.department}</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {job.location}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {job.type}</span>
              <span className="flex items-center gap-2"><DollarSign className="w-4 h-4" /> {formatSalary(job.salary)}</span>
              <span className="flex items-center gap-2"><Award className="w-4 h-4" /> {job.experience}</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* About the Role */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400" /> About the Role</h2>
                  <p className="text-gray-300 leading-relaxed">{job.longDescription || job.description}</p>
                </div>

                {/* Responsibilities */}
                {job.responsibilities && job.responsibilities.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /> What You'll Do</h2>
                    <ul className="space-y-3">
                      {job.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Requirements */}
                {job.requirements && job.requirements.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><Target className="w-5 h-5 text-indigo-400" /> What We're Looking For</h2>
                    <ul className="space-y-3">
                      {job.requirements.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Target className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* What We Offer */}
                {job.whatWeOffer && job.whatWeOffer.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><Gift className="w-5 h-5 text-purple-400" /> What We Offer</h2>
                    <ul className="space-y-3">
                      {job.whatWeOffer.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Gift className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Skills */}
                {job.skills && job.skills.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><Code className="w-5 h-5 text-blue-400" /> Required Skills</h2>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hiring Process */}
                {job.hiringProcess && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><Rocket className="w-5 h-5 text-orange-400" /> Hiring Process</h2>
                    <div className="space-y-3">
                      {Object.values(job.hiringProcess).map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</div>
                          <span className="text-gray-300">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* FAQ */}
                {job.faq && job.faq.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><HelpCircle className="w-5 h-5 text-yellow-400" /> Frequently Asked Questions</h2>
                    <div className="space-y-4">
                      {job.faq.map((item, i) => (
                        <div key={i} className="bg-white/5 rounded-lg p-4">
                          <p className="text-white font-semibold mb-2">? {item.q}</p>
                          <p className="text-gray-400">?? {item.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-white/5 rounded-xl p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-white mb-4">Quick Info</h3>
                  <div className="space-y-4">
                    <div><p className="text-gray-400 text-sm">Department</p><p className="text-white font-medium">{job.department}</p></div>
                    <div><p className="text-gray-400 text-sm">Location</p><p className="text-white font-medium">{job.location}</p></div>
                    <div><p className="text-gray-400 text-sm">Job Type</p><p className="text-white font-medium">{job.type}</p></div>
                    <div><p className="text-gray-400 text-sm">Experience</p><p className="text-white font-medium">{job.experience}</p></div>
                    <div><p className="text-gray-400 text-sm">Salary Range</p><p className="text-white font-medium">{formatSalary(job.salary)}</p></div>
                  </div>
                  <button onClick={() => setShowApplyModal(true)} className="w-full mt-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Application Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-t-2xl flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Apply for {job.title}</h2>
              <button onClick={() => setShowApplyModal(false)} className="text-white"><X className="w-6 h-6" /></button>
            </div>

            {submitSuccess ? (
              <div className="p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3>
                <p className="text-gray-300">Thank you for applying. We'll review your application and get back to you within 3-5 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <input type="text" name="name" placeholder="Full Name *" required onChange={handleChange} className={`w-full p-3 bg-white/10 border ${errors.name ? 'border-red-500' : 'border-white/20'} rounded-lg text-white`} />
                <input type="email" name="email" placeholder="Email Address *" required onChange={handleChange} className={`w-full p-3 bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-lg text-white`} />
                <input type="tel" name="phone" placeholder="Phone Number *" required onChange={handleChange} className={`w-full p-3 bg-white/10 border ${errors.phone ? 'border-red-500' : 'border-white/20'} rounded-lg text-white`} />
                <input type="text" name="experience" placeholder="Years of Experience *" required onChange={handleChange} className={`w-full p-3 bg-white/10 border ${errors.experience ? 'border-red-500' : 'border-white/20'} rounded-lg text-white`} />
                <textarea name="whyYou" placeholder="Why are you interested in this role? *" rows="4" required onChange={handleChange} className={`w-full p-3 bg-white/10 border ${errors.whyYou ? 'border-red-500' : 'border-white/20'} rounded-lg text-white`} />
                <div><label className="text-white text-sm">Resume (PDF) *</label><input type="file" accept=".pdf" onChange={handleFileChange} required className="w-full p-3 bg-white/10 border rounded-lg text-white" /><p className="text-xs text-gray-500 mt-1">Max 5MB, PDF only</p>{errors.resume && <p className="text-red-400 text-xs">{errors.resume}</p>}</div>
                <button type="submit" disabled={submitting} className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50">{submitting ? 'Submitting...' : 'Submit Application'}</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
