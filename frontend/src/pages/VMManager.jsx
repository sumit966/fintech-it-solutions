import { useState, useEffect } from 'react';
import { 
  Server, Cpu, HardDrive, Cloud, Activity, Users, Briefcase, 
  Calendar, Clock, MessageSquare, Video, Phone, Mail, 
  TrendingUp, Shield, Hospital, Building, Globe, Zap,
  CheckCircle, AlertCircle, Play, Pause, RefreshCw,
  Eye, Edit, Trash2, Plus, Search, Filter, Download,
  ChevronRight, ChevronLeft, Maximize2, Minimize2,
  Wifi, WifiOff, Battery, Signal, Thermometer, Wind,
  DollarSign, FileText, Award, BookOpen, GraduationCap,
  ClipboardList, Coffee, Heart, Star, Trophy, Target
} from 'lucide-react';

const API_URL = 'https://fintech-it-solutions.onrender.com/api';

export default function VMManager() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Format salary without question marks
  const formatSalary = (salary) => {
    return salary.toString().replace(/\?/g, '?');
  };

  // Employee Data - 30 employees across India
  const employees = [
    { id: 'EMP001', name: 'Sumit Kumar', role: 'Founder & CEO', location: 'Pune', salary: 2400000, experience: '8+ years', email: 'sumit@fintechitsolutions.com', phone: '+91 9876543210', department: 'Leadership', avatar: 'SK', status: 'active', skills: ['Full Stack', 'AI/ML', 'Cloud'] },
    { id: 'EMP002', name: 'Priya Sharma', role: 'HR Manager', location: 'Mumbai', salary: 1200000, experience: '5+ years', email: 'priya@fintechitsolutions.com', phone: '+91 9876543211', department: 'HR', avatar: 'PS', status: 'active', skills: ['Recruitment', 'Employee Relations'] },
    { id: 'EMP003', name: 'Rahul Verma', role: 'Tech Lead - Fintech', location: 'Bangalore', salary: 1800000, experience: '6+ years', email: 'rahul@fintechitsolutions.com', phone: '+91 9876543212', department: 'Engineering', avatar: 'RV', status: 'active', skills: ['Java', 'Microservices'] },
    { id: 'EMP004', name: 'Neha Gupta', role: 'Tech Lead - Healthcare', location: 'Delhi', salary: 1600000, experience: '5+ years', email: 'neha@fintechitsolutions.com', phone: '+91 9876543213', department: 'Engineering', avatar: 'NG', status: 'active', skills: ['Python', 'Django'] },
    { id: 'EMP005', name: 'Amit Patel', role: 'Tech Lead - Web', location: 'Ahmedabad', salary: 1500000, experience: '5+ years', email: 'amit@fintechitsolutions.com', phone: '+91 9876543214', department: 'Engineering', avatar: 'AP', status: 'active', skills: ['React', 'Node.js'] },
    { id: 'EMP006', name: 'Vikram Singh', role: 'Senior Developer', location: 'Jaipur', salary: 1200000, experience: '4+ years', email: 'vikram@fintechitsolutions.com', phone: '+91 9876543215', department: 'Engineering', avatar: 'VS', status: 'active', skills: ['React', 'TypeScript'] },
    { id: 'EMP007', name: 'Pooja Mehta', role: 'Senior Developer', location: 'Chennai', salary: 1100000, experience: '4+ years', email: 'pooja@fintechitsolutions.com', phone: '+91 9876543216', department: 'Engineering', avatar: 'PM', status: 'active', skills: ['Node.js', 'MongoDB'] },
    { id: 'EMP008', name: 'Kunal Joshi', role: 'Senior QA', location: 'Pune', salary: 1000000, experience: '4+ years', email: 'kunal@fintechitsolutions.com', phone: '+91 9876543217', department: 'QA', avatar: 'KJ', status: 'active', skills: ['Selenium', 'Cypress'] },
    { id: 'EMP009', name: 'Anjali Nair', role: 'Developer', location: 'Kochi', salary: 700000, experience: '2+ years', email: 'anjali@fintechitsolutions.com', phone: '+91 9876543218', department: 'Engineering', avatar: 'AN', status: 'active', skills: ['React', 'JavaScript'] },
    { id: 'EMP010', name: 'Rohit Sharma', role: 'Developer', location: 'Indore', salary: 650000, experience: '2+ years', email: 'rohit@fintechitsolutions.com', phone: '+91 9876543219', department: 'Engineering', avatar: 'RS', status: 'active', skills: ['Python', 'Flask'] },
    { id: 'EMP011', name: 'Divya Choudhary', role: 'Fresher', location: 'Bhopal', salary: 500000, experience: '0-1 years', email: 'divya@fintechitsolutions.com', phone: '+91 9876543220', department: 'Engineering', avatar: 'DC', status: 'active', skills: ['HTML', 'CSS', 'JS'] },
    { id: 'EMP012', name: 'Akash Gupta', role: 'Fresher', location: 'Nagpur', salary: 500000, experience: '0-1 years', email: 'akash@fintechitsolutions.com', phone: '+91 9876543221', department: 'Engineering', avatar: 'AG', status: 'active', skills: ['Python', 'Django'] }
  ];

  // Projects Data
  const projects = [
    { id: 'PRJ001', name: 'NeoPay Gateway', sector: 'Fintech', client: 'NeoBank', budget: 2500000, progress: 75, team: 8, status: 'active', description: 'Next-gen payment processing system with real-time fraud detection', tech: ['Node.js', 'React', 'Blockchain', 'AWS'] },
    { id: 'PRJ002', name: 'RiskShield AI', sector: 'Fintech', client: 'FinSecure', budget: 1800000, progress: 45, team: 6, status: 'active', description: 'AI-powered risk assessment platform using ML models', tech: ['Python', 'TensorFlow', 'FastAPI'] },
    { id: 'PRJ003', name: 'HealthCare Pro', sector: 'Healthcare', client: 'Apollo Hospitals', budget: 3200000, progress: 60, team: 10, status: 'active', description: 'Hospital management system with patient records', tech: ['Java', 'Spring Boot', 'React'] },
    { id: 'PRJ004', name: 'MediTrack', sector: 'Healthcare', client: 'MedLife', budget: 2200000, progress: 30, team: 5, status: 'active', description: 'Medicine inventory and prescription tracking', tech: ['Django', 'React Native'] },
    { id: 'PRJ005', name: 'EcomPulse', sector: 'E-commerce', client: 'ShopEase', budget: 2800000, progress: 85, team: 7, status: 'active', description: 'Complete e-commerce platform', tech: ['Next.js', 'Node.js', 'PostgreSQL'] },
    { id: 'PRJ006', name: 'SecureNet', sector: 'Cybersecurity', client: 'CyberShield', budget: 3500000, progress: 40, team: 9, status: 'active', description: 'Enterprise security monitoring', tech: ['Python', 'Go', 'Kafka'] }
  ];

  // VM Instances
  const vms = [
    { id: 'VM001', name: 'Production Server', status: 'running', cpu: 45, ram: 8, ramTotal: 16, storage: 120, storageTotal: 250, uptime: 99.99, ip: '10.0.1.1', region: 'Mumbai' },
    { id: 'VM002', name: 'Staging Server', status: 'running', cpu: 22, ram: 4, ramTotal: 16, storage: 80, storageTotal: 250, uptime: 99.95, ip: '10.0.1.2', region: 'Bangalore' },
    { id: 'VM003', name: 'Database Server', status: 'running', cpu: 38, ram: 12, ramTotal: 32, storage: 200, storageTotal: 500, uptime: 99.99, ip: '10.0.1.3', region: 'Hyderabad' },
    { id: 'VM004', name: 'Development Server', status: 'stopped', cpu: 0, ram: 0, ramTotal: 8, storage: 45, storageTotal: 100, uptime: 0, ip: '10.0.1.4', region: 'Pune' }
  ];

  // Payroll Data
  const payroll = [
    { month: 'January', year: 2025, total: 1850000, processed: true, paid: true },
    { month: 'February', year: 2025, total: 1850000, processed: true, paid: true },
    { month: 'March', year: 2025, total: 1920000, processed: true, paid: false },
    { month: 'April', year: 2025, total: 1920000, processed: false, paid: false }
  ];

  // Interview Schedule
  const interviews = [
    { id: 'INT001', candidate: 'Rajesh Kumar', position: 'Senior Developer', date: '2025-04-10', time: '11:00 AM', interviewer: 'Rahul Verma', status: 'scheduled' },
    { id: 'INT002', candidate: 'Sneha Reddy', position: 'Frontend Developer', date: '2025-04-11', time: '2:00 PM', interviewer: 'Amit Patel', status: 'scheduled' },
    { id: 'INT003', candidate: 'Manish Tiwari', position: 'QA Engineer', date: '2025-04-12', time: '10:30 AM', interviewer: 'Kunal Joshi', status: 'scheduled' }
  ];

  // Exams
  const exams = [
    { id: 'EX001', name: 'Technical Assessment - React', duration: 60, questions: 30, passingScore: 70, scheduled: '2025-04-15' },
    { id: 'EX002', name: 'Technical Assessment - Node.js', duration: 60, questions: 25, passingScore: 70, scheduled: '2025-04-16' },
    { id: 'EX003', name: 'Aptitude Test', duration: 45, questions: 40, passingScore: 60, scheduled: '2025-04-17' }
  ];

  const getStatusColor = (status) => {
    if (status === 'running') return '#22c55e';
    if (status === 'active') return '#3b82f6';
    return '#ef4444';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b]">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 pt-20">
        {/* Header */}
        <div className="bg-white/5 backdrop-blur-xl border-b border-white/10 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Server className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Enterprise Command Center</h1>
                  <p className="text-gray-400 text-sm">VM Manager | HR Portal | Payroll | Exams | Interviews</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">All Systems Operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <div className="flex flex-wrap gap-3 border-b border-white/10 pb-4">
            {['dashboard', 'vms', 'projects', 'employees', 'payroll', 'interviews', 'exams'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-lg font-semibold transition-all ${activeTab === tab ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* DASHBOARD TAB */}
          {activeTab === 'dashboard' && (
            <>
              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-indigo-500/50 transition-all group cursor-pointer" onClick={() => { setActiveTab('employees'); setSelectedItem(null); }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                      <Users className="w-6 h-6 text-indigo-400" />
                    </div>
                    <span className="text-3xl font-bold text-white">{employees.length}</span>
                  </div>
                  <p className="text-gray-400">Total Employees</p>
                  <p className="text-xs text-gray-500 mt-2">20 Freshers • 10 Experienced</p>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all group cursor-pointer" onClick={() => { setActiveTab('projects'); setSelectedItem(null); }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                      <Briefcase className="w-6 h-6 text-purple-400" />
                    </div>
                    <span className="text-3xl font-bold text-white">{projects.length}</span>
                  </div>
                  <p className="text-gray-400">Active Projects</p>
                  <p className="text-xs text-gray-500 mt-2">2 Fintech • 1 Healthcare • 2 Web • 1 Cybersecurity</p>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all group cursor-pointer" onClick={() => { setActiveTab('vms'); setSelectedItem(null); }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                      <Server className="w-6 h-6 text-cyan-400" />
                    </div>
                    <span className="text-3xl font-bold text-white">{vms.filter(v => v.status === 'running').length}</span>
                  </div>
                  <p className="text-gray-400">Running VMs</p>
                  <p className="text-xs text-gray-500 mt-2">{vms.length} Total Instances</p>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-green-500/50 transition-all group cursor-pointer" onClick={() => { setActiveTab('payroll'); setSelectedItem(null); }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                      <DollarSign className="w-6 h-6 text-green-400" />
                    </div>
                    <span className="text-3xl font-bold text-white">{formatSalary(1920000)}</span>
                  </div>
                  <p className="text-gray-400">Monthly Payroll</p>
                  <p className="text-xs text-gray-500 mt-2">Current Month</p>
                </div>
              </div>

              {/* Recent Activity Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Calendar className="w-5 h-5 text-indigo-400" /> Upcoming Interviews</h2>
                  <div className="space-y-3">
                    {interviews.slice(0, 3).map(interview => (
                      <div key={interview.id} className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition cursor-pointer" onClick={() => { setActiveTab('interviews'); setSelectedItem(interview); }}>
                        <div><p className="text-white text-sm font-medium">{interview.candidate}</p><p className="text-gray-500 text-xs">{interview.position} • {interview.date} at {interview.time}</p></div>
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><ClipboardList className="w-5 h-5 text-purple-400" /> Upcoming Exams</h2>
                  <div className="space-y-3">
                    {exams.map(exam => (
                      <div key={exam.id} className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition cursor-pointer" onClick={() => { setActiveTab('exams'); setSelectedItem(exam); }}>
                        <div><p className="text-white text-sm font-medium">{exam.name}</p><p className="text-gray-500 text-xs">{exam.duration} mins • {exam.questions} questions • Pass: {exam.passingScore}%</p></div>
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* VMS TAB */}
          {activeTab === 'vms' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vms.map(vm => (
                <div key={vm.id} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-indigo-500/50 transition-all cursor-pointer" onClick={() => setShowDetails(!showDetails)}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${vm.status === 'running' ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                        {vm.status === 'running' ? <Play className="w-5 h-5 text-green-400" /> : <Pause className="w-5 h-5 text-red-400" />}
                      </div>
                      <div><h3 className="text-white font-semibold">{vm.name}</h3><p className="text-gray-500 text-xs">{vm.ip}</p></div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs ${vm.status === 'running' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>{vm.status}</div>
                  </div>
                  <div className="space-y-3">
                    <div><div className="flex justify-between text-xs text-gray-400 mb-1"><span>CPU Usage</span><span>{vm.cpu}%</span></div><div className="h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{ width: `${vm.cpu}%` }}></div></div></div>
                    <div><div className="flex justify-between text-xs text-gray-400 mb-1"><span>RAM Usage</span><span>{vm.ram}GB/{vm.ramTotal}GB</span></div><div className="h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" style={{ width: `${(vm.ram / vm.ramTotal) * 100}%` }}></div></div></div>
                    <div className="flex justify-between text-xs"><span className="text-gray-400">Storage: {vm.storage}GB/{vm.storageTotal}GB</span><span className="text-gray-400">Uptime: {vm.uptime}%</span></div>
                    <div className="flex gap-2 pt-2"><button className="flex-1 px-3 py-2 bg-indigo-600/20 text-indigo-400 rounded-lg text-sm hover:bg-indigo-600/30 transition">Connect</button><button className="flex-1 px-3 py-2 bg-white/10 text-gray-400 rounded-lg text-sm hover:bg-white/20 transition">Monitor</button></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* PROJECTS TAB */}
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.map(project => (
                <div key={project.id} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all cursor-pointer group">
                  <div className="flex items-start justify-between mb-4">
                    <div><div className="flex items-center gap-2 mb-2"><span className={`px-2 py-1 rounded-full text-xs ${project.sector === 'Fintech' ? 'bg-blue-500/20 text-blue-400' : project.sector === 'Healthcare' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>{project.sector}</span><span className="text-xs text-gray-500">{project.id}</span></div><h3 className="text-white font-semibold text-lg">{project.name}</h3><p className="text-gray-400 text-sm mt-1">{project.description}</p></div>
                    <div className="text-right"><p className="text-indigo-400 font-semibold">{formatSalary(project.budget)}</p><p className="text-gray-500 text-xs">{project.client}</p></div>
                  </div>
                  <div className="mb-3"><div className="flex justify-between text-xs text-gray-400 mb-1"><span>Progress</span><span>{project.progress}%</span></div><div className="h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: `${project.progress}%` }}></div></div></div>
                  <div className="flex flex-wrap gap-2 mb-4">{project.tech.slice(0, 3).map(tech => (<span key={tech} className="px-2 py-1 bg-white/5 rounded-md text-gray-400 text-xs">{tech}</span>))}</div>
                  <div className="flex items-center justify-between pt-3 border-t border-white/10"><div className="flex items-center gap-2"><Users className="w-4 h-4 text-gray-500" /><span className="text-gray-400 text-sm">{project.team} team members</span></div><button className="text-indigo-400 hover:text-indigo-300 text-sm">View Details ?</button></div>
                </div>
              ))}
            </div>
          )}

          {/* EMPLOYEES TAB */}
          {activeTab === 'employees' && (
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/10"><tr><th className="p-4 text-left text-white text-sm">Employee</th><th className="p-4 text-left text-white text-sm">Role</th><th className="p-4 text-left text-white text-sm">Location</th><th className="p-4 text-left text-white text-sm">Salary</th><th className="p-4 text-left text-white text-sm">Status</th></tr></thead>
                  <tbody>{employees.map(emp => (<tr key={emp.id} className="border-t border-white/10 hover:bg-white/5 transition cursor-pointer"><td className="p-4"><div className="flex items-center gap-3"><div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">{emp.avatar}</div><span className="text-gray-300">{emp.name}</span></div></td><td className="p-4 text-gray-400">{emp.role}</td><td className="p-4 text-gray-400">{emp.location}</td><td className="p-4 text-gray-400">{formatSalary(emp.salary)}</td><td className="p-4"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Active</span></td></tr>))}</tbody>
                </table>
              </div>
            </div>
          )}

          {/* PAYROLL TAB */}
          {activeTab === 'payroll' && (
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
              <div className="p-4 bg-white/10"><h3 className="text-white font-semibold">Monthly Payroll Summary</h3></div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/10"><tr><th className="p-4 text-left text-white text-sm">Month</th><th className="p-4 text-left text-white text-sm">Year</th><th className="p-4 text-left text-white text-sm">Total Amount</th><th className="p-4 text-left text-white text-sm">Status</th><th className="p-4 text-left text-white text-sm">Payment</th></tr></thead>
                  <tbody>{payroll.map((p, idx) => (<tr key={idx} className="border-t border-white/10"><td className="p-4 text-gray-300">{p.month}</td><td className="p-4 text-gray-300">{p.year}</td><td className="p-4 text-gray-300">{formatSalary(p.total)}</td><td className="p-4">{p.processed ? <span className="text-green-400">Processed</span> : <span className="text-yellow-400">Pending</span>}</td><td className="p-4">{p.paid ? <span className="text-green-400">Paid</span> : <span className="text-red-400">Unpaid</span>}</td></tr>))}</tbody>
                </table>
              </div>
            </div>
          )}

          {/* INTERVIEWS TAB */}
          {activeTab === 'interviews' && (
            <div className="space-y-4">
              {interviews.map(interview => (
                <div key={interview.id} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-indigo-500/50 transition-all">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div><h3 className="text-white font-semibold text-lg">{interview.candidate}</h3><p className="text-gray-400">{interview.position}</p></div>
                    <div className="text-right"><p className="text-indigo-400">{interview.date} at {interview.time}</p><p className="text-gray-500 text-sm">Interviewer: {interview.interviewer}</p></div>
                    <button className="px-4 py-2 bg-indigo-600 rounded-lg text-white text-sm hover:bg-indigo-700 transition">Schedule</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* EXAMS TAB */}
          {activeTab === 'exams' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exams.map(exam => (
                <div key={exam.id} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4"><GraduationCap className="w-6 h-6 text-purple-400" /></div>
                  <h3 className="text-white font-semibold text-lg mb-2">{exam.name}</h3>
                  <div className="space-y-2 mb-4"><p className="text-gray-400 text-sm">?? Duration: {exam.duration} minutes</p><p className="text-gray-400 text-sm">?? Questions: {exam.questions}</p><p className="text-gray-400 text-sm">?? Passing Score: {exam.passingScore}%</p><p className="text-gray-400 text-sm">?? Scheduled: {exam.scheduled}</p></div>
                  <button className="w-full py-2 bg-indigo-600 rounded-lg text-white text-sm hover:bg-indigo-700 transition">Start Exam</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
