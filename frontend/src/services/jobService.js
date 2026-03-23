const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5002/api';

export const jobService = {
  getAllJobs: async () => {
    const response = await fetch(`${API_URL}/careers/jobs`);
    if (!response.ok) throw new Error('Failed to fetch jobs');
    return response.json();
  },

  getJobById: async (id) => {
    const response = await fetch(`${API_URL}/careers/jobs/${id}`);
    if (!response.ok) throw new Error('Failed to fetch job');
    return response.json();
  },

  getJobsByService: async (service) => {
    const response = await fetch(`${API_URL}/careers/jobs/service/${encodeURIComponent(service)}`);
    if (!response.ok) throw new Error('Failed to fetch jobs');
    return response.json();
  },

  applyForJob: async (formData) => {
    const response = await fetch(`${API_URL}/careers/apply`, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) throw new Error('Failed to submit application');
    return response.json();
  }
};
