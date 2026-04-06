import { useState, useEffect } from 'react';

export default function HRDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    const token = localStorage.getItem('hrToken');
    if (!token) {
      window.location.href = '/hr-login';
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('hrToken');
    window.location.href = '/hr-login';
  };

  const employees = [
    { id: 'EMP001', name: 'John Doe', email: 'john@fintechitsolutions.com', role: 'Senior Developer', department: 'Engineering', salary: '?12,00,000' },
    { id: 'EMP002', name: 'Jane Smith', email: 'jane@fintechitsolutions.com', role: 'UI/UX Designer', department: 'Design', salary: '?9,00,000' },
    { id: 'EMP003', name: 'Mike Johnson', email: 'mike@fintechitsolutions.com', role: 'Project Manager', department: 'Management', salary: '?15,00,000' },
    { id: 'EMP004', name: 'Priya Sharma', email: 'priya@fintechitsolutions.com', role: 'Frontend Developer', department: 'Engineering', salary: '?8,00,000' },
    { id: 'EMP005', name: 'Rahul Verma', email: 'rahul@fintechitsolutions.com', role: 'Backend Developer', department: 'Engineering', salary: '?8,50,000' },
  ];

  const projects = [
    { id: 'PRJ001', name: 'NeoPay Gateway', client: 'NeoBank', budget: '?25,00,000', status: 'Active', progress: 75 },
    { id: 'PRJ002', name: 'RiskShield AI', client: 'FinSecure', budget: '?18,00,000', status: 'In Progress', progress: 45 },
    { id: 'PRJ003', name: 'WealthOS Platform', client: 'WealthTech', budget: '?32,00,000', status: 'Review', progress: 90 },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #020617, #0f172a, #1e293b)', paddingTop: '20px' }}>
      {/* Header */}
      <div style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '16px 32px', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>HR Management Portal</h1>
            <p style={{ color: '#9ca3af', fontSize: '14px' }}>Welcome back, Administrator</p>
          </div>
          <button onClick={handleLogout} style={{ padding: '8px 20px', background: 'rgba(239,68,68,0.2)', border: 'none', borderRadius: '10px', color: '#f87171', cursor: 'pointer' }}>Logout</button>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px' }}>
        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '20px', padding: '24px' }}><div style={{ fontSize: '32px', fontWeight: 'bold', color: 'white' }}>28</div><div style={{ color: '#9ca3af' }}>Total Employees</div></div>
          <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '20px', padding: '24px' }}><div style={{ fontSize: '32px', fontWeight: 'bold', color: 'white' }}>6</div><div style={{ color: '#9ca3af' }}>Active Projects</div></div>
          <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '20px', padding: '24px' }}><div style={{ fontSize: '32px', fontWeight: 'bold', color: 'white' }}>?18.5L</div><div style={{ color: '#9ca3af' }}>Monthly Payroll</div></div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
          <button onClick={() => setActiveTab('dashboard')} style={{ padding: '10px 24px', borderRadius: '10px', border: 'none', cursor: 'pointer', background: activeTab === 'dashboard' ? '#6366f1' : 'transparent', color: activeTab === 'dashboard' ? 'white' : '#9ca3af' }}>Dashboard</button>
          <button onClick={() => setActiveTab('employees')} style={{ padding: '10px 24px', borderRadius: '10px', border: 'none', cursor: 'pointer', background: activeTab === 'employees' ? '#6366f1' : 'transparent', color: activeTab === 'employees' ? 'white' : '#9ca3af' }}>Employees</button>
          <button onClick={() => setActiveTab('projects')} style={{ padding: '10px 24px', borderRadius: '10px', border: 'none', cursor: 'pointer', background: activeTab === 'projects' ? '#6366f1' : 'transparent', color: activeTab === 'projects' ? 'white' : '#9ca3af' }}>Projects</button>
        </div>

        {/* Employees Tab */}
        {activeTab === 'employees' && (
          <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '20px', overflow: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ background: 'rgba(255,255,255,0.1)' }}>
                <tr><th style={{ padding: '16px', textAlign: 'left', color: 'white' }}>ID</th><th style={{ padding: '16px', textAlign: 'left', color: 'white' }}>Name</th><th style={{ padding: '16px', textAlign: 'left', color: 'white' }}>Email</th><th style={{ padding: '16px', textAlign: 'left', color: 'white' }}>Role</th><th style={{ padding: '16px', textAlign: 'left', color: 'white' }}>Department</th><th style={{ padding: '16px', textAlign: 'left', color: 'white' }}>Salary</th></tr>
              </thead>
              <tbody>
                {employees.map(emp => (<tr key={emp.id} style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}><td style={{ padding: '16px', color: '#d1d5db' }}>{emp.id}</td><td style={{ padding: '16px', color: '#d1d5db' }}>{emp.name}</td><td style={{ padding: '16px', color: '#d1d5db' }}>{emp.email}</td><td style={{ padding: '16px', color: '#d1d5db' }}>{emp.role}</td><td style={{ padding: '16px', color: '#d1d5db' }}>{emp.department}</td><td style={{ padding: '16px', color: '#d1d5db' }}>{emp.salary}</td></tr>))}
              </tbody>
            </table>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {projects.map(proj => (
              <div key={proj.id} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '24px' }}>
                <h3 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>{proj.name}</h3>
                <p style={{ color: '#9ca3af', marginBottom: '8px' }}>Client: {proj.client}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#9ca3af' }}>Budget: {proj.budget}</span>
                  <span style={{ padding: '4px 12px', background: 'rgba(34,197,94,0.2)', borderRadius: '20px', color: '#4ade80', fontSize: '12px' }}>{proj.status}</span>
                </div>
                <div style={{ marginTop: '12px', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${proj.progress}%`, height: '100%', background: 'linear-gradient(90deg, #6366f1, #a855f7)', borderRadius: '3px' }}></div>
                </div>
                <div style={{ marginTop: '8px', textAlign: 'right', color: '#9ca3af', fontSize: '12px' }}>{proj.progress}% complete</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
