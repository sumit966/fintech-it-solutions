import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, CheckCircle } from 'lucide-react';
import Container from '../layout/Container';

const API_URL = 'https://fintech-it-solutions.onrender.com/api';

export default function ApplyJob() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    experience: '',
    coverLetter: ''
  });
  const [resume, setResume] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resume) {
      alert('Please upload your resume');
      return;
    }
    
    setSubmitting(true);
    const submitData = new FormData();
    Object.keys(formData).forEach(key => {
      submitData.append(key, formData[key]);
    });
    submitData.append('jobId', id);
    submitData.append('resume', resume);

    try {
      const response = await fetch(`${API_URL}/careers/apply`, {
        method: 'POST',
        body: submitData
      });
      if (response.ok) {
        setSuccess(true);
        setTimeout(() => navigate('/careers'), 3000);
      } else {
        alert('Submission failed');
      }
    } catch (error) {
      alert('Error submitting application');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="pt-32 text-center text-white">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Application Submitted!</h2>
        <p className="text-gray-400">Thank you for applying. We'll review your application and get back to you soon.</p>
        <button onClick={() => navigate('/careers')} className="mt-6 text-indigo-400 hover:underline">Back to Careers</button>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] min-h-screen">
      <Container>
        <button onClick={() => navigate('/careers')} className="flex items-center gap-2 text-gray-400 hover:text-white mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Careers
        </button>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 rounded-2xl p-8">
            <h1 className="text-3xl font-bold text-white mb-6">Apply for this Position</h1>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white mb-2">Full Name *</label>
                <input type="text" name="name" required onChange={handleChange} className="w-full p-3 bg-white/20 rounded-lg text-white" />
              </div>
              
              <div>
                <label className="block text-white mb-2">Email Address *</label>
                <input type="email" name="email" required onChange={handleChange} className="w-full p-3 bg-white/20 rounded-lg text-white" />
              </div>
              
              <div>
                <label className="block text-white mb-2">Phone Number *</label>
                <input type="tel" name="phone" required onChange={handleChange} className="w-full p-3 bg-white/20 rounded-lg text-white" />
              </div>
              
              <div>
                <label className="block text-white mb-2">Current Company</label>
                <input type="text" name="company" onChange={handleChange} className="w-full p-3 bg-white/20 rounded-lg text-white" />
              </div>
              
              <div>
                <label className="block text-white mb-2">Years of Experience *</label>
                <input type="text" name="experience" required onChange={handleChange} className="w-full p-3 bg-white/20 rounded-lg text-white" placeholder="e.g., 3 years" />
              </div>
              
              <div>
                <label className="block text-white mb-2">Cover Letter</label>
                <textarea name="coverLetter" rows="5" onChange={handleChange} className="w-full p-3 bg-white/20 rounded-lg text-white" placeholder="Tell us why you're interested..." />
              </div>
              
              <div>
                <label className="block text-white mb-2">Resume (PDF) *</label>
                <input type="file" accept=".pdf" onChange={handleFileChange} required className="w-full p-3 bg-white/20 rounded-lg text-white" />
                <p className="text-gray-400 text-sm mt-1">Maximum file size: 5MB. Only PDF files accepted.</p>
              </div>
              
              <button type="submit" disabled={submitting} className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50">
                {submitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

