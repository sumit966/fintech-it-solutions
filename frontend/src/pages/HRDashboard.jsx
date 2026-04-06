import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Briefcase, Calendar, DollarSign, LogOut, Plus, Eye, Edit } from 'lucide-react';

const API_URL = 'https://fintech-it-solutions.onrender.com/api';

export default function HRDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [employees, setEmployees] = useState([]);
  const [projects, setProjects] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem('hrToken');

  useEffect(() => {
    if (!token) {
      navigate('/hr-login');
      return;
    }
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const headers = { Authorization: `Bearer ${token}` };
      
      const [empRes, projRes, statsRes] = await Promise.all([
        fetch(`${API_URL}/hr/employees`, { headers }),
        fetch(`${API_URL}/hr/projects`, { headers }),
        fetch(`${API_URL}/hr/dashboard`, { headers })
      ]);

      if (empRes.ok) setEmployees(await empRes.json());
      if (projRes.ok) setProjects(await projRes.json());
      if (statsRes.ok) setStats(await statsRes.json());
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('hrToken');
    localStorage.removeItem('hrUser');
    navigate('/hr-login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] flex items-center justify-center">
        <div className="text-white text-xl">Loading HR Portal...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b]">
      {/* Header */}
      <div className="bg-white/5 border-b border-white/10 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">HR Management Portal</h1>
          <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 rounded-2xl p-6">
            <Users className="w-8 h-8 text-indigo-400 mb-3" />
            <div className="text-2xl font-bold text-white">{stats.employees || 0}</div>
            <div className="text-gray-400">Total Employees</div>
          </div>
          <div className="bg-white/10 rounded-2xl p-6">
            <Briefcase className="w-8 h-8 text-green-400 mb-3" />
            <div className="text-2xl font-bold text-white">{stats.activeProjects || 0}</div>
            <div className="text-gray-400">Active Projects</div>
          </div>
          <div className="bg-white/10 rounded-2xl p-6">
            <Calendar className="w-8 h-8 text-yellow-400 mb-3" />
            <div className="text-2xl font-bold text-white">{stats.pendingLeaves || 0}</div>
            <div className="text-gray-400">Pending Leaves</div>
          </div>
          <div className="bg-white/10 rounded-2xl p-6">
            <DollarSign className="w-8 h-8 text-purple-400 mb-3" />
            <div className="text-2xl font-bold text-white">?{((stats.monthlyPayrollTotal || 0) / 100000).toFixed(1)}L</div>
            <div className="text-gray-400">Monthly Payroll</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-6 border-b border-white/10 pb-4">
          {['dashboard', 'employees', 'projects'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg font-semibold transition ${activeTab === tab ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
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
            <button
              onClick={() => setShowAddModal(true)}
              className="mb-6 px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition"
            >
              <Plus className="w-4 h-4" /> Add Employee
            </button>
            <div className="bg-white/5 rounded-2xl overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/10">
                  <tr>
                    <th className="p-4 text-left">ID</th><th className="p-4 text-left">Name</th><th className="p-4 text-left">Email</th>
                    <th className="p-4 text-left">Role</th><th className="p-4 text-left">Department</th><th className="p-4 text-left">Salary</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map(emp => (
                    <tr key={emp._id} className="border-t border-white/10">
                      <td className="p-4">{emp.employeeId}</td>
                      <td className="p-4">{emp.name}</td>
                      <td className="p-4">{emp.email}</td>
                      <td className="p-4">{emp.role}</td>
                      <td className="p-4">{emp.department}</td>
                      <td className="p-4">?{emp.salary?.toLocaleString() || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="space-y-4">
            {projects.map(proj => (
              <div key={proj._id} className="bg-white/5 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">{proj.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{proj.projectId}</p>
                <p className="text-gray-300 mb-4">{proj.description}</p>
                <div className="flex gap-4 text-sm">
                  <span className="text-gray-400">?? Budget: ?{(proj.budget || 0).toLocaleString()}</span>
                  <span className="text-gray-400">?? Team: {proj.team?.length || 0}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
