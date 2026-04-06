import { useState } from 'react';

export default function HRLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simple validation
    if (email === 'admin@fintechitsolutions.com' && password === 'admin123') {
      localStorage.setItem('hrToken', 'demo-token');
      window.location.href = '/hr-dashboard';
    } else {
      setError('Invalid credentials. Use: admin@fintechitsolutions.com / admin123');
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #020617, #0f172a, #1e293b)', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px' }}>
      <div style={{ maxWidth: '450px', width: '100%', margin: '0 20px' }}>
        <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '24px', padding: '40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <div style={{ width: '70px', height: '70px', background: 'linear-gradient(135deg, #6366f1, #a855f7)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <span style={{ fontSize: '32px' }}>??</span>
            </div>
            <h1 style={{ color: 'white', fontSize: '28px', marginBottom: '8px' }}>HR Portal</h1>
            <p style={{ color: '#9ca3af', fontSize: '14px' }}>Employee Management System</p>
          </div>

          {error && (
            <div style={{ background: 'rgba(239,68,68,0.2)', border: '1px solid #ef4444', borderRadius: '12px', padding: '12px', marginBottom: '20px' }}>
              <p style={{ color: '#f87171', fontSize: '14px', margin: 0 }}>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: 'white', fontSize: '14px', marginBottom: '8px' }}>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px', color: 'white', outline: 'none' }}
                placeholder="admin@fintechitsolutions.com"
                required
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', color: 'white', fontSize: '14px', marginBottom: '8px' }}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px', color: 'white', outline: 'none' }}
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #6366f1, #a855f7)', border: 'none', borderRadius: '12px', color: 'white', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              {loading ? 'Logging in...' : 'Login to HR Portal'}
            </button>
          </form>

          <div style={{ marginTop: '24px', textAlign: 'center' }}>
            <p style={{ color: '#6b7280', fontSize: '12px' }}>Demo: admin@fintechitsolutions.com / admin123</p>
          </div>
        </div>
      </div>
    </div>
  );
}
