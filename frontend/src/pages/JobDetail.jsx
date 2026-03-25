import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Briefcase, MapPin, Clock, DollarSign, Award, 
  CheckCircle, ArrowLeft, Mail, Phone, User, 
  FileText, Upload, X, Calendar, Building2, 
  Users, Zap, Heart, Globe, GraduationCap,
  Target, Layers, Code, Smartphone, Cpu, Palette,
  Shield, TrendingUp, BookOpen, Coffee, Gift
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
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    whyYou: ''
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    loadJob();
  }, [id]);

  const loadJob = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/careers/jobs/${id}`);
      const data = await response.json();
      setJob(data);
      setLoading(false);
    } catch (error) {
      console.error('Error loading job:', error);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
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
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
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
    
    if (!validateForm()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setSubmitting(true);
    const submitFormData = new FormData();
    submitFormData.append('name', formData.fullName);
    submitFormData.append('email', formData.email);
    submitFormData.append('phone', formData.phone);
    submitFormData.append('experience', formData.experience);
    submitFormData.append('coverLetter', formData.whyYou);
    submitFormData.append('jobId', job._id);
    submitFormData.append('jobTitle', job.title);
    submitFormData.append('resume', resumeFile);

    try {
      const response = await fetch(`${API_URL}/careers/apply`, {
        method: 'POST',
        body: submitFormData,
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit');
      }
      
      setSubmitSuccess(true);
      setTimeout(() => {
        setShowApplyModal(false);
        setSubmitSuccess(false);
        navigate('/careers');
      }, 3000);
    } catch (error) {
      console.error('Error submitting application:', error);
      alert(error.message || 'Failed to submit application. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <main className="pt-24 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] min-h-screen">
        <Container>
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
          </div>
        </Container>
      </main>
    );
  }

  if (!job) {
    return (
      <main className="pt-24 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] min-h-screen">
        <Container>
          <div className="text-center py-20">
            <Briefcase className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Job Not Found</h2>
            <button onClick={() => navigate('/careers')} className="px-6 py-2 bg-indigo-600 text-white rounded-lg">Back to Careers</button>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="pt-24 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] min-h-screen">
      <Container>
        <button onClick={() => navigate('/careers')} className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition">
          <ArrowLeft className="w-4 h-4" />
          Back to all jobs
        </button>
      </Container>

      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-white mb-4">{job.title}</h1>
            <div className="flex flex-wrap gap-6 text-white/90 mb-6">
              <div className="flex items-center gap-2"><MapPin className="w-5 h-5" /><span>{job.location}</span></div>
              <div className="flex items-center gap-2"><Clock className="w-5 h-5" /><span>{job.type}</span></div>
              <div className="flex items-center gap-2"><DollarSign className="w-5 h-5" /><span>{job.salary}</span></div>
              <div className="flex items-center gap-2"><Award className="w-5 h-5" /><span>{job.experience}</span></div>
            </div>
            <button onClick={() => setShowApplyModal(true)} className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:shadow-xl transition-all">
              Apply Now
            </button>
          </div>
        </Container>
      </section>

      <Container>
        <div className="py-12 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/5 rounded-2xl p-6"><h2 className="text-2xl font-bold text-white mb-4">Job Description</h2><p className="text-gray-300">{job.description}</p></div>
            <div className="bg-white/5 rounded-2xl p-6"><h2 className="text-2xl font-bold text-white mb-4">What You'll Do</h2><ul className="space-y-3">{job.responsibilities?.map((resp, idx) => (<li key={idx} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" /><span className="text-gray-300">{resp}</span></li>))}</ul></div>
            <div className="bg-white/5 rounded-2xl p-6"><h2 className="text-2xl font-bold text-white mb-4">What We're Looking For</h2><ul className="space-y-3">{job.requirements?.map((req, idx) => (<li key={idx} className="flex items-start gap-3"><Target className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" /><span className="text-gray-300">{req}</span></li>))}</ul></div>
            <div className="bg-white/5 rounded-2xl p-6"><h2 className="text-2xl font-bold text-white mb-4">Required Skills</h2><div className="flex flex-wrap gap-2">{job.skills?.map((skill, idx) => (<span key={idx} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">{skill}</span>))}</div></div>
            <div className="bg-white/5 rounded-2xl p-6"><h2 className="text-2xl font-bold text-white mb-4">Benefits & Perks</h2><div className="grid sm:grid-cols-2 gap-4">{job.benefits?.map((benefit, idx) => (<div key={idx} className="flex items-center gap-3"><Gift className="w-5 h-5 text-purple-400" /><span className="text-gray-300">{benefit}</span></div>))}</div></div>
          </div>
        </div>
      </Container>

      {/* Application Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div><h2 className="text-2xl font-bold text-white">Apply for {job.title}</h2><p className="text-indigo-100 text-sm mt-1">Please fill out all required fields (*)</p></div>
                <button onClick={() => setShowApplyModal(false)} className="text-white hover:bg-white/20 rounded-full p-1 transition"><X className="w-6 h-6" /></button>
              </div>
            </div>

            {submitSuccess ? (
              <div className="p-8 text-center"><CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" /><h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3><p className="text-gray-300">Thank you for applying. Our HR team will review your application and get back to you within 3-5 business days.</p></div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div><label className="block text-white text-sm font-medium mb-2">Full Name *</label><input type="text" name="fullName" required value={formData.fullName} onChange={handleInputChange} className={`w-full px-4 py-2 bg-white/10 border ${errors.fullName ? 'border-red-500' : 'border-white/20'} rounded-lg text-white`} />{errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}</div>
                  <div><label className="block text-white text-sm font-medium mb-2">Email Address *</label><input type="email" name="email" required value={formData.email} onChange={handleInputChange} className={`w-full px-4 py-2 bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-lg text-white`} />{errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}</div>
                  <div><label className="block text-white text-sm font-medium mb-2">Phone Number *</label><input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} className={`w-full px-4 py-2 bg-white/10 border ${errors.phone ? 'border-red-500' : 'border-white/20'} rounded-lg text-white`} />{errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}</div>
                  <div><label className="block text-white text-sm font-medium mb-2">Years of Experience *</label><input type="text" name="experience" required value={formData.experience} onChange={handleInputChange} className={`w-full px-4 py-2 bg-white/10 border ${errors.experience ? 'border-red-500' : 'border-white/20'} rounded-lg text-white`} placeholder="e.g., 3 years" />{errors.experience && <p className="text-red-400 text-xs mt-1">{errors.experience}</p>}</div>
                </div>
                <div><label className="block text-white text-sm font-medium mb-2">Why are you interested in this role? *</label><textarea name="whyYou" rows="3" required value={formData.whyYou} onChange={handleInputChange} className={`w-full px-4 py-2 bg-white/10 border ${errors.whyYou ? 'border-red-500' : 'border-white/20'} rounded-lg text-white`} placeholder="Tell us why you're passionate about this position..." />{errors.whyYou && <p className="text-red-400 text-xs mt-1">{errors.whyYou}</p>}</div>
                <div><label className="block text-white text-sm font-medium mb-2">Resume (PDF only) *</label><input type="file" accept=".pdf" onChange={handleFileChange} required className="w-full text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-500 file:text-white hover:file:bg-indigo-600" /><p className="text-xs text-gray-500 mt-1">Maximum file size: 5MB. Only PDF files accepted.</p>{errors.resume && <p className="text-red-400 text-xs mt-1">{errors.resume}</p>}</div>
                <button type="submit" disabled={submitting} className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-xl transition-all disabled:opacity-50">{submitting ? 'Submitting...' : 'Submit Application'}</button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
