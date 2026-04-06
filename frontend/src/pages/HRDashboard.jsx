import { useState, useEffect } from 'react';
import { Users, Briefcase, Calendar, DollarSign, CheckCircle, Clock, AlertCircle, Plus, Edit, Trash2, Eye } from 'lucide-react';

const API_URL = 'https://fintech-it-solutions.onrender.com/api';

export default function HRDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [employees, setEmployees] = useState([]);
  const [projects, setProjects] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [showEmployeeModal, setShowEmployeeModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [formData, setFormData] = useState({
    name: '', email: '', role: 'employee', department: 'Engineering',
    designation: '', salary: '', phone: '', skills: '', experience: ''
  });

  const token = localStorage.getItem('hrToken');

  useEffect(() => {
    if (!token) {
      window.location.href = '/hr-login';
      return;
    }
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [empRes, projRes, statsRes] = await Promise.all([
        fetch(`${API_URL}/hr/employees`, { headers: { Authorization: `Bearer ${token}` } }),
        fetch(`${API_URL}/hr/projects`, { headers: { Authorization: `Bearer ${token}` } }),
        fetch(`${API_URL}/hr/dashboard`, { headers: { Authorization: `Bearer ${token}` } })
      ]);
      setEmployees(await empRes.json());
      setProjects(await projRes.json());
      setStats(await statsRes.json());
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddEmployee = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/hr/employees`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setShowEmployeeModal(false);
        fetchData();
        setFormData({ name: '', email: '', role: 'employee', department: 'Engineering', designation: '', salary: '', phone: '', skills: '', experience: '' });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (loading) return <div className="pt-32 text-center text-white">Loading HR Portal...</div>;

  return (
    <div className="pt-24 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">HR Management Portal</h1>
          <button onClick={() => { localStorage.removeItem('hrToken'); window.location.href = '/hr-login'; }} className="px-4 py-2 bg-red-600 text-white rounded-lg">Logout</button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 rounded-2xl p-6"><Users className="w-8 h-8 text-indigo-400 mb-3" /><div className="text-2xl font-bold text-white">{stats.employees || 0}</div><div className="text-gray-400">Total Employees</div></div>
          <div className="bg-white/10 rounded-2xl p-6"><Briefcase className="w-8 h-8 text-green-400 mb-3" /><div className="text-2xl font-bold text-white">{stats.activeProjects || 0}</div><div className="text-gray-400">Active Projects</div></div>
          <div className="bg-white/10 rounded-2xl p-6"><Calendar className="w-8 h-8 text-yellow-400 mb-3" /><div className="text-2xl font-bold text-white">{stats.pendingLeaves || 0}</div><div className="text-gray-400">Pending Leaves</div></div>
          <div className="bg-white/10 rounded-2xl p-6"><DollarSign className="w-8 h-8 text-purple-400 mb-3" /><div className="text-2xl font-bold text-white">?{((stats.monthlyPayrollTotal || 0) / 100000).toFixed(1)}L</div><div className="text-gray-400">Monthly Payroll</div></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-6 border-b border-white/10 pb-4">
          {['dashboard', 'employees', 'projects', 'payroll', 'attendance'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-2 rounded-lg font-semibold ${activeTab === tab ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'}`}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Employees Tab */}
        {activeTab === 'employees' && (
          <div>
            <button onClick={() => setShowEmployeeModal(true)} className="mb-6 px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center gap-2"><Plus className="w-4 h-4" /> Add Employee</button>
            <div className="bg-white/5 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-white/10"><tr><th className="p-4 text-left">ID</th><th className="p-4 text-left">Name</th><th className="p-4 text-left">Email</th><th className="p-4 text-left">Role</th><th className="p-4 text-left">Department</th><th className="p-4 text-left">Salary</th><th className="p-4 text-left">Actions</th></tr></thead>
                <tbody>
                  {employees.map(emp => (
                    <tr key={emp._id} className="border-t border-white/10"><td className="p-4">{emp.employeeId}</td><td className="p-4">{emp.name}</td><td className="p-4">{emp.email}</td><td className="p-4">{emp.role}</td><td className="p-4">{emp.department}</td><td className="p-4">?{emp.salary?.toLocaleString() || '-'}</td><td className="p-4"><button className="text-indigo-400 hover:text-indigo-300"><Eye className="w-5 h-5" /></button></td></tr>
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
                <div className="flex justify-between items-start mb-4"><div><h3 className="text-xl font-bold text-white">{proj.name}</h3><p className="text-gray-400 text-sm">{proj.projectId}</p></div><span className={`px-3 py-1 rounded-full text-xs ${proj.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{proj.status}</span></div>
                <p className="text-gray-300 mb-4">{proj.description}</p>
                <div className="flex gap-4 text-sm"><span>?? Budget: ?{(proj.budget || 0).toLocaleString()}</span><span>?? Team: {proj.team?.length || 0}</span><span>?? Started: {new Date(proj.startDate).toLocaleDateString()}</span></div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Employee Modal */}
      {showEmployeeModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"><div className="bg-[#0f172a] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"><div className="sticky top-0 bg-indigo-600 p-6 rounded-t-2xl"><h2 className="text-2xl font-bold text-white">Add New Employee</h2></div>
        <form onSubmit={handleAddEmployee} className="p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4"><input type="text" name="name" placeholder="Full Name *" required onChange={e => setFormData({...formData, name: e.target.value})} className="p-3 bg-white/10 rounded-lg text-white" /><input type="email" name="email" placeholder="Email *" required onChange={e => setFormData({...formData, email: e.target.value})} className="p-3 bg-white/10 rounded-lg text-white" /></div>
          <div className="grid md:grid-cols-2 gap-4"><select name="role" onChange={e => setFormData({...formData, role: e.target.value})} className="p-3 bg-white/10 rounded-lg text-white"><option value="employee">Employee</option><option value="hr">HR</option><option value="intern">Intern</option></select><select name="department" onChange={e => setFormData({...formData, department: e.target.value})} className="p-3 bg-white/10 rounded-lg text-white"><option>Engineering</option><option>HR</option><option>Sales</option><option>Marketing</option></select></div>
          <div className="grid md:grid-cols-2 gap-4"><input type="text" name="designation" placeholder="Designation" onChange={e => setFormData({...formData, designation: e.target.value})} className="p-3 bg-white/10 rounded-lg text-white" /><input type="number" name="salary" placeholder="Annual Salary (?)" onChange={e => setFormData({...formData, salary: e.target.value})} className="p-3 bg-white/10 rounded-lg text-white" /></div>
          <div className="grid md:grid-cols-2 gap-4"><input type="tel" name="phone" placeholder="Phone" onChange={e => setFormData({...formData, phone: e.target.value})} className="p-3 bg-white/10 rounded-lg text-white" /><input type="text" name="skills" placeholder="Skills (comma separated)" onChange={e => setFormData({...formData, skills: e.target.value})} className="p-3 bg-white/10 rounded-lg text-white" /></div>
          <button type="submit" className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold">Create Employee</button>
        </form></div></div>
      )}
    </div>
  );
}
