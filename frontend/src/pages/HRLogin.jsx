import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = 'https://fintech-it-solutions.onrender.com/api';

export default function HRLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/auth/hr-login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('hrToken', data.token);
        localStorage.setItem('hrUser', JSON.stringify(data.user));
        navigate('/hr-dashboard');
      } else {
        setError(data.error || 'Invalid credentials');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] flex items-center justify-center pt-20">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">HR Portal</h1>
            <p className="text-gray-400 mt-2">Secure Access Only</p>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500 rounded-lg p-3 mb-4">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white text-sm mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                placeholder="admin@fintechitsolutions.com"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-white text-sm mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
            >
              {loading ? 'Logging in...' : 'Login to HR Portal'}
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-gray-500">
            <p>Authorized Personnel Only</p>
          </div>
        </div>
      </div>
    </div>
  );
}
