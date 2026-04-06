import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Briefcase, Calendar, DollarSign, LogOut, Plus, Eye } from 'lucide-react';

export default function HRDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('hrToken');
    localStorage.removeItem('hrUser');
    navigate('/hr-login');
  };

  // Sample data
  const employees = [
    { id: 'EMP001', name: 'John Doe', email: 'john@fintechitsolutions.com', role: 'Developer', department: 'Engineering', salary: '?8,00,000' },
    { id: 'EMP002', name: 'Jane Smith', email: 'jane@fintechitsolutions.com', role: 'Designer', department: 'Design', salary: '?7,00,000' },
    { id: 'EMP003', name: 'Mike Johnson', email: 'mike@fintechitsolutions.com', role: 'HR Manager', department: 'HR', salary: '?9,00,000' },
  ];

  const projects = [
    { id: 'PRJ001', name: 'NeoPay Gateway', client: 'NeoBank', budget: '?25,00,000', status: 'Active' },
    { id: 'PRJ002', name: 'RiskShield AI', client: 'FinSecure', budget: '?18,00,000', status: 'In Development' },
    { id: 'PRJ003', name: 'WealthOS Platform', client: 'WealthTech', budget: '?32,00,000', status: 'Review' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b]">
      {/* Header */}
      <div className="bg-white/5 border-b border-white/10 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">HR Management Portal</h1>
            <p className="text-gray-400 text-sm">Welcome back, Admin</p>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 rounded-2xl p-6"><Users className="w-8 h-8 text-indigo-400 mb-3" /><div className="text-2xl font-bold text-white">28</div><div className="text-gray-400">Total Employees</div></div>
          <div className="bg-white/10 rounded-2xl p-6"><Briefcase className="w-8 h-8 text-green-400 mb-3" /><div className="text-2xl font-bold text-white">6</div><div className="text-gray-400">Active Projects</div></div>
          <div className="bg-white/10 rounded-2xl p-6"><Calendar className="w-8 h-8 text-yellow-400 mb-3" /><div className="text-2xl font-bold text-white">3</div><div className="text-gray-400">Pending Leaves</div></div>
          <div className="bg-white/10 rounded-2xl p-6"><DollarSign className="w-8 h-8 text-purple-400 mb-3" /><div className="text-2xl font-bold text-white">?18.5L</div><div className="text-gray-400">Monthly Payroll</div></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-6 border-b border-white/10 pb-4">
          <button onClick={() => setActiveTab('dashboard')} className={`px-6 py-2 rounded-lg font-semibold ${activeTab === 'dashboard' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'}`}>Dashboard</button>
          <button onClick={() => setActiveTab('employees')} className={`px-6 py-2 rounded-lg font-semibold ${activeTab === 'employees' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'}`}>Employees</button>
          <button onClick={() => setActiveTab('projects')} className={`px-6 py-2 rounded-lg font-semibold ${activeTab === 'projects' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'}`}>Projects</button>
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="bg-white/5 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Welcome to HR Portal</h2>
            <p className="text-gray-400">Manage employees, track projects, process payroll, and more.</p>
          </div>
        )}

        {/* Employees Tab */}
        {activeTab === 'employees' && (
          <div>
            <button className="mb-6 px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center gap-2"><Plus className="w-4 h-4" /> Add Employee</button>
            <div className="bg-white/5 rounded-2xl overflow-x-auto">
              <table className="w-full"><thead className="bg-white/10"><tr><th className="p-4 text-left">ID</th><th className="p-4 text-left">Name</th><th className="p-4 text-left">Email</th><th className="p-4 text-left">Role</th><th className="p-4 text-left">Department</th><th className="p-4 text-left">Salary</th></tr></thead>
              <tbody>{employees.map(emp => (<tr key={emp.id} className="border-t border-white/10"><td className="p-4">{emp.id}</td><td className="p-4">{emp.name}</td><td className="p-4">{emp.email}</td><td className="p-4">{emp.role}</td><td className="p-4">{emp.department}</td><td className="p-4">{emp.salary}</td></tr>))}</tbody></table>
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="space-y-4">{projects.map(proj => (<div key={proj.id} className="bg-white/5 rounded-2xl p-6"><h3 className="text-xl font-bold text-white mb-2">{proj.name}</h3><p className="text-gray-400 mb-2">Client: {proj.client}</p><div className="flex justify-between items-center"><span className="text-gray-400">Budget: {proj.budget}</span><span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">{proj.status}</span></div></div>))}</div>
        )}
      </div>
    </div>
  );
}
