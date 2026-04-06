import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

    // Demo login - for testing
    if (email === 'admin@fintechitsolutions.com' && password === 'admin123') {
      localStorage.setItem('hrToken', 'demo-token');
      localStorage.setItem('hrUser', JSON.stringify({ name: 'Admin', role: 'founder' }));
      navigate('/hr-dashboard');
    } else {
      setError('Invalid credentials. Use admin@fintechitsolutions.com / admin123');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] flex items-center justify-center pt-20">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">??</span>
            </div>
            <h1 className="text-2xl font-bold text-white">HR Portal</h1>
            <p className="text-gray-400 text-sm mt-2">Secure Employee Management System</p>
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
            <p>Demo Credentials: admin@fintechitsolutions.com / admin123</p>
          </div>
        </div>
      </div>
    </div>
  );
}
