import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = 'https://fintech-it-solutions.onrender.com/api';

export default function HRLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/auth/hr-login`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('hrToken', data.token);
        navigate('/hr-dashboard');
      } else {
        setError(data.error || 'Invalid credentials');
      }
    } catch (err) {
      setError('Login failed');
    }
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white/10 rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-white text-center mb-8">HR Portal Login</h1>
          {error && <div className="bg-red-500/20 border border-red-500 p-3 rounded-lg text-red-400 mb-4">{error}</div>}
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-3 mb-4 bg-white/20 rounded-lg text-white" required />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-3 mb-6 bg-white/20 rounded-lg text-white" required />
            <button type="submit" className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
