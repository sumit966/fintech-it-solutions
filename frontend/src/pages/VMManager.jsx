import { useState, useEffect } from 'react';
import { 
  Server, Cpu, HardDrive, Cloud, Activity, Users, Briefcase, 
  Calendar, Clock, MessageSquare, Video, Phone, Mail, 
  TrendingUp, Shield, Hospital, Building, Globe, Zap,
  CheckCircle, AlertCircle, Play, Pause, RefreshCw,
  Eye, Edit, Trash2, Plus, Search, Filter, Download,
  ChevronRight, ChevronLeft, Maximize2, Minimize2,
  Wifi, WifiOff, Battery, Signal, Thermometer, Wind
} from 'lucide-react';

const API_URL = 'https://fintech-it-solutions.onrender.com/api';

export default function VMManager() {
  const [employees, setEmployees] = useState([]);
  const [projects, setProjects] = useState([]);
  const [vms, setVms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVM, setSelectedVM] = useState(null);
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [showQueryModal, setShowQueryModal] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Complete Employee Data - 30 employees from across India
  const employeeData = [
    { id: 'F001', name: 'Sumit Kumar', role: 'Founder & CEO', location: 'Pune', experience: '8+ years', salary: '24,00,000', status: 'active', avatar: 'SK', department: 'Leadership', email: 'sumit@fintechitsolutions.com', phone: '+91 9876543210', skills: ['Full Stack', 'AI/ML', 'Cloud Architecture'] },
    { id: 'HR001', name: 'Priya Sharma', role: 'HR Manager', location: 'Mumbai', experience: '5+ years', salary: '12,00,000', status: 'active', avatar: 'PS', department: 'HR', email: 'priya@fintechitsolutions.com', phone: '+91 9876543211', skills: ['Recruitment', 'Employee Relations', 'Payroll'] },
    { id: 'TL001', name: 'Rahul Verma', role: 'Tech Lead - Fintech', location: 'Bangalore', experience: '6+ years', salary: '18,00,000', status: 'active', avatar: 'RV', department: 'Engineering', email: 'rahul@fintechitsolutions.com', phone: '+91 9876543212', skills: ['Java', 'Spring Boot', 'Microservices'] },
    { id: 'TL002', name: 'Neha Gupta', role: 'Tech Lead - Healthcare', location: 'Delhi', experience: '5+ years', salary: '16,00,000', status: 'active', avatar: 'NG', department: 'Engineering', email: 'neha@fintechitsolutions.com', phone: '+91 9876543213', skills: ['Python', 'Django', 'Healthcare APIs'] },
    { id: 'TL003', name: 'Amit Patel', role: 'Tech Lead - Web', location: 'Ahmedabad', experience: '5+ years', salary: '15,00,000', status: 'active', avatar: 'AP', department: 'Engineering', email: 'amit@fintechitsolutions.com', phone: '+91 9876543214', skills: ['React', 'Next.js', 'Node.js'] },
    { id: 'S001', name: 'Vikram Singh', role: 'Senior Developer', location: 'Jaipur', experience: '4+ years', salary: '12,00,000', status: 'active', avatar: 'VS', department: 'Engineering', email: 'vikram@fintechitsolutions.com', phone: '+91 9876543215', skills: ['React', 'TypeScript', 'Tailwind'] },
    { id: 'S002', name: 'Pooja Mehta', role: 'Senior Developer', location: 'Chennai', experience: '4+ years', salary: '11,00,000', status: 'active', avatar: 'PM', department: 'Engineering', email: 'pooja@fintechitsolutions.com', phone: '+91 9876543216', skills: ['Node.js', 'Express', 'MongoDB'] },
    { id: 'S003', name: 'Kunal Joshi', role: 'Senior QA', location: 'Pune', experience: '4+ years', salary: '10,00,000', status: 'active', avatar: 'KJ', department: 'QA', email: 'kunal@fintechitsolutions.com', phone: '+91 9876543217', skills: ['Selenium', 'Cypress', 'JMeter'] },
    { id: 'D001', name: 'Anjali Nair', role: 'Developer', location: 'Kochi', experience: '2+ years', salary: '7,00,000', status: 'active', avatar: 'AN', department: 'Engineering', email: 'anjali@fintechitsolutions.com', phone: '+91 9876543218', skills: ['React', 'JavaScript', 'CSS'] },
    { id: 'D002', name: 'Rohit Sharma', role: 'Developer', location: 'Indore', experience: '2+ years', salary: '6,50,000', status: 'active', avatar: 'RS', department: 'Engineering', email: 'rohit@fintechitsolutions.com', phone: '+91 9876543219', skills: ['Python', 'Flask', 'PostgreSQL'] },
    { id: 'D003', name: 'Sneha Reddy', role: 'Developer', location: 'Hyderabad', experience: '2+ years', salary: '6,50,000', status: 'active', avatar: 'SR', department: 'Engineering', email: 'sneha@fintechitsolutions.com', phone: '+91 9876543220', skills: ['Java', 'Spring', 'Hibernate'] },
    { id: 'D004', name: 'Manish Tiwari', role: 'Developer', location: 'Lucknow', experience: '1+ years', salary: '5,50,000', status: 'active', avatar: 'MT', department: 'Engineering', email: 'manish@fintechitsolutions.com', phone: '+91 9876543221', skills: ['React', 'Redux', 'Material UI'] },
    { id: 'F001', name: 'Divya Choudhary', role: 'Fresher Developer', location: 'Bhopal', experience: '0-1 years', salary: '5,00,000', status: 'active', avatar: 'DC', department: 'Engineering', email: 'divya@fintechitsolutions.com', phone: '+91 9876543222', skills: ['HTML', 'CSS', 'JavaScript'] },
    { id: 'F002', name: 'Akash Gupta', role: 'Fresher Developer', location: 'Nagpur', experience: '0-1 years', salary: '5,00,000', status: 'active', avatar: 'AG', department: 'Engineering', email: 'akash@fintechitsolutions.com', phone: '+91 9876543223', skills: ['Python', 'Django Basics'] },
    { id: 'F003', name: 'Neha Singh', role: 'Fresher QA', location: 'Patna', experience: '0-1 years', salary: '4,50,000', status: 'active', avatar: 'NS', department: 'QA', email: 'neha.s@fintechitsolutions.com', phone: '+91 9876543224', skills: ['Manual Testing', 'Test Cases'] },
    { id: 'F004', name: 'Rahul Jain', role: 'Fresher Developer', location: 'Chandigarh', experience: '0-1 years', salary: '5,00,000', status: 'active', avatar: 'RJ', department: 'Engineering', email: 'rahul.j@fintechitsolutions.com', phone: '+91 9876543225', skills: ['React Basics', 'JavaScript'] },
    { id: 'F005', name: 'Sonia Verma', role: 'Fresher Designer', location: 'Noida', experience: '0-1 years', salary: '4,50,000', status: 'active', avatar: 'SV', department: 'Design', email: 'sonia@fintechitsolutions.com', phone: '+91 9876543226', skills: ['Figma', 'Adobe XD'] },
    { id: 'F006', name: 'Vikash Kumar', role: 'Fresher Developer', location: 'Ranchi', experience: '0-1 years', salary: '5,00,000', status: 'active', avatar: 'VK', department: 'Engineering', email: 'vikash@fintechitsolutions.com', phone: '+91 9876543227', skills: ['Node.js Basics', 'MongoDB'] },
    { id: 'F007', name: 'Pallavi Joshi', role: 'Fresher QA', location: 'Dehradun', experience: '0-1 years', salary: '4,50,000', status: 'active', avatar: 'PJ', department: 'QA', email: 'pallavi@fintechitsolutions.com', phone: '+91 9876543228', skills: ['Automation Basics', 'Selenium'] },
    { id: 'F008', name: 'Karan Mehta', role: 'Fresher Developer', location: 'Surat', experience: '0-1 years', salary: '5,00,000', status: 'active', avatar: 'KM', department: 'Engineering', email: 'karan@fintechitsolutions.com', phone: '+91 9876543229', skills: ['JavaScript', 'React Basics'] },
    { id: 'F009', name: 'Riya Patil', role: 'Fresher Developer', location: 'Nashik', experience: '0-1 years', salary: '5,00,000', status: 'active', avatar: 'RP', department: 'Engineering', email: 'riya@fintechitsolutions.com', phone: '+91 9876543230', skills: ['HTML', 'CSS', 'Bootstrap'] },
    { id: 'F010', name: 'Ajay Singh', role: 'Fresher DevOps', location: 'Gurgaon', experience: '0-1 years', salary: '5,00,000', status: 'active', avatar: 'AS', department: 'DevOps', email: 'ajay@fintechitsolutions.com', phone: '+91 9876543231', skills: ['Linux', 'Docker Basics'] },
    { id: 'F011', name: 'Meera Nair', role: 'Fresher Developer', location: 'Thiruvananthapuram', experience: '0-1 years', salary: '5,00,000', status: 'active', avatar: 'MN', department: 'Engineering', email: 'meera@fintechitsolutions.com', phone: '+91 9876543232', skills: ['Python', 'Flask Basics'] },
    { id: 'F012', name: 'Saurabh Mishra', role: 'Fresher QA', location: 'Varanasi', experience: '0-1 years', salary: '4,50,000', status: 'active', avatar: 'SM', department: 'QA', email: 'saurabh@fintechitsolutions.com', phone: '+91 9876543233', skills: ['Manual Testing', 'Bug Tracking'] },
    { id: 'F013', name: 'Ankita Sharma', role: 'Fresher Developer', location: 'Agra', experience: '0-1 years', salary: '5,00,000', status: 'active', avatar: 'AS', department: 'Engineering', email: 'ankita@fintechitsolutions.com', phone: '+91 9876543234', skills: ['React', 'JavaScript'] },
    { id: 'F014', name: 'Deepak Yadav', role: 'Fresher Developer', location: 'Allahabad', experience: '0-1 years', salary: '5,00,000', status: 'active', avatar: 'DY', department: 'Engineering', email: 'deepak@fintechitsolutions.com', phone: '+91 9876543235', skills: ['Node.js', 'Express Basics'] },
    { id: 'F015', name: 'Shweta Desai', role: 'Fresher Designer', location: 'Vadodara', experience: '0-1 years', salary: '4,50,000', status: 'active', avatar: 'SD', department: 'Design', email: 'shweta@fintechitsolutions.com', phone: '+91 9876543236', skills: ['UI Design', 'Prototyping'] },
    { id: 'F016', name: 'Harsh Vardhan', role: 'Fresher Developer', location: 'Jodhpur', experience: '0-1 years', salary: '5,00,000', status: 'active', avatar: 'HV', department: 'Engineering', email: 'harsh@fintechitsolutions.com', phone: '+91 9876543237', skills: ['JavaScript', 'React'] },
    { id: 'F017', name: 'Tanvi Shah', role: 'Fresher QA', location: 'Rajkot', experience: '0-1 years', salary: '4,50,000', status: 'active', avatar: 'TS', department: 'QA', email: 'tanvi@fintechitsolutions.com', phone: '+91 9876543238', skills: ['Test Planning', 'Execution'] },
    { id: 'F018', name: 'Nikhil Patil', role: 'Fresher Developer', location: 'Kolhapur', experience: '0-1 years', salary: '5,00,000', status: 'active', avatar: 'NP', department: 'Engineering', email: 'nikhil@fintechitsolutions.com', phone: '+91 9876543239', skills: ['Python', 'Django Basics'] },
    { id: 'F019', name: 'Isha Gupta', role: 'Fresher Developer', location: 'Shimla', experience: '0-1 years', salary: '5,00,000', status: 'active', avatar: 'IG', department: 'Engineering', email: 'isha@fintechitsolutions.com', phone: '+91 9876543240', skills: ['HTML', 'CSS', 'JS'] },
    { id: 'F020', name: 'Rohan Das', role: 'Fresher DevOps', location: 'Guwahati', experience: '0-1 years', salary: '5,00,000', status: 'active', avatar: 'RD', department: 'DevOps', email: 'rohan@fintechitsolutions.com', phone: '+91 9876543241', skills: ['AWS Basics', 'CI/CD'] }
  ];

  // Project Data - 6 ongoing projects
  const projectData = [
    { id: 'PRJ001', name: 'NeoPay Gateway', sector: 'Fintech', client: 'NeoBank', budget: '25,00,000', progress: 75, team: 8, status: 'active', description: 'Next-gen payment processing system with real-time fraud detection', tech: ['Node.js', 'React', 'Blockchain', 'AWS'], meetings: 'Every Monday 11 AM' },
    { id: 'PRJ002', name: 'RiskShield AI', sector: 'Fintech', client: 'FinSecure', budget: '18,00,000', progress: 45, team: 6, status: 'active', description: 'AI-powered risk assessment platform using ML models', tech: ['Python', 'TensorFlow', 'FastAPI', 'GCP'], meetings: 'Every Tuesday 2 PM' },
    { id: 'PRJ003', name: 'HealthCare Pro', sector: 'Healthcare', client: 'Apollo Hospitals', budget: '32,00,000', progress: 60, team: 10, status: 'active', description: 'Hospital management system with patient records and appointments', tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL'], meetings: 'Every Wednesday 10 AM' },
    { id: 'PRJ004', name: 'MediTrack', sector: 'Healthcare', client: 'MedLife', budget: '22,00,000', progress: 30, team: 5, status: 'active', description: 'Medicine inventory and prescription tracking system', tech: ['Django', 'React Native', 'MongoDB'], meetings: 'Every Thursday 3 PM' },
    { id: 'PRJ005', name: 'EcomPulse', sector: 'E-commerce', client: 'ShopEase', budget: '28,00,000', progress: 85, team: 7, status: 'active', description: 'Complete e-commerce platform with AI recommendations', tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'], meetings: 'Every Friday 11 AM' },
    { id: 'PRJ006', name: 'SecureNet', sector: 'Cybersecurity', client: 'CyberShield', budget: '35,00,000', progress: 40, team: 9, status: 'active', description: 'Enterprise security monitoring and threat detection', tech: ['Python', 'Go', 'Kafka', 'Elasticsearch'], meetings: 'Every Monday 4 PM' }
  ];

  // VM Instances
  const vmData = [
    { id: 'VM001', name: 'Production Server', status: 'running', cpu: '45%', ram: '8GB/16GB', storage: '120GB/250GB', uptime: '99.99%', ip: '10.0.1.1', region: 'Mumbai' },
    { id: 'VM002', name: 'Staging Server', status: 'running', cpu: '22%', ram: '4GB/16GB', storage: '80GB/250GB', uptime: '99.95%', ip: '10.0.1.2', region: 'Bangalore' },
    { id: 'VM003', name: 'Database Server', status: 'running', cpu: '38%', ram: '12GB/32GB', storage: '200GB/500GB', uptime: '99.99%', ip: '10.0.1.3', region: 'Hyderabad' },
    { id: 'VM004', name: 'Development Server', status: 'stopped', cpu: '0%', ram: '0GB/8GB', storage: '45GB/100GB', uptime: '0%', ip: '10.0.1.4', region: 'Pune' },
    { id: 'VM005', name: 'Backup Server', status: 'running', cpu: '12%', ram: '6GB/16GB', storage: '300GB/1TB', uptime: '99.98%', ip: '10.0.1.5', region: 'Chennai' }
  ];

  useEffect(() => {
    setEmployees(employeeData);
    setProjects(projectData);
    setVms(vmData);
    setLoading(false);
  }, []);

  const getStatusColor = (status) => {
    return status === 'running' ? '#22c55e' : status === 'active' ? '#3b82f6' : '#ef4444';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading VM Manager...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b]">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500"></div>
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
                  <h1 className="text-2xl font-bold text-white">VM Manager</h1>
                  <p className="text-gray-400 text-sm">Virtual Machine & Infrastructure Management</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">All Systems Operational</span>
                </div>
                <button className="px-4 py-2 bg-indigo-600 rounded-lg text-white text-sm font-semibold hover:bg-indigo-700 transition">
                  <RefreshCw className="w-4 h-4 inline mr-2" /> Sync
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-indigo-500/50 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                  <Users className="w-6 h-6 text-indigo-400" />
                </div>
                <span className="text-3xl font-bold text-white">{employees.length}</span>
              </div>
              <p className="text-gray-400">Total Employees</p>
              <p className="text-xs text-gray-500 mt-2">20 Freshers • 10 Experienced</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                  <Briefcase className="w-6 h-6 text-purple-400" />
                </div>
                <span className="text-3xl font-bold text-white">{projects.length}</span>
              </div>
              <p className="text-gray-400">Active Projects</p>
              <p className="text-xs text-gray-500 mt-2">2 Fintech • 1 Healthcare • 2 Web • 1 Cybersecurity</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                  <Server className="w-6 h-6 text-cyan-400" />
                </div>
                <span className="text-3xl font-bold text-white">{vms.filter(v => v.status === 'running').length}</span>
              </div>
              <p className="text-gray-400">Running VMs</p>
              <p className="text-xs text-gray-500 mt-2">{vms.length} Total Instances</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-green-500/50 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                  <Activity className="w-6 h-6 text-green-400" />
                </div>
                <span className="text-3xl font-bold text-white">99.98%</span>
              </div>
              <p className="text-gray-400">System Uptime</p>
              <p className="text-xs text-gray-500 mt-2">30-day average</p>
            </div>
          </div>

          {/* VM Instances Grid */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Server className="w-5 h-5 text-indigo-400" />
              Virtual Machine Instances
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vms.map((vm, idx) => (
                <div
                  key={vm.id}
                  onMouseEnter={() => setHoveredCard(vm.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:border-indigo-500/50 relative overflow-hidden group"
                  style={{ transform: hoveredCard === vm.id ? 'translateY(-8px)' : 'translateY(0)' }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${vm.status === 'running' ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                          {vm.status === 'running' ? <Play className="w-5 h-5 text-green-400" /> : <Pause className="w-5 h-5 text-red-400" />}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{vm.name}</h3>
                          <p className="text-gray-500 text-xs">{vm.ip}</p>
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs ${vm.status === 'running' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                        {vm.status}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                          <span>CPU Usage</span>
                          <span>{vm.cpu}</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all" style={{ width: vm.cpu }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                          <span>RAM Usage</span>
                          <span>{vm.ram}</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all" style={{ width: `${(parseInt(vm.ram.split('/')[0]) / parseInt(vm.ram.split('/')[1])) * 100}%` }}></div>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Storage: {vm.storage}</span>
                        <span className="text-gray-400">Uptime: {vm.uptime}</span>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <button className="flex-1 px-3 py-2 bg-indigo-600/20 text-indigo-400 rounded-lg text-sm hover:bg-indigo-600/30 transition">Connect</button>
                        <button className="flex-1 px-3 py-2 bg-white/10 text-gray-400 rounded-lg text-sm hover:bg-white/20 transition">Monitor</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-purple-400" />
              Ongoing Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <div key={project.id} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${project.sector === 'Fintech' ? 'bg-blue-500/20 text-blue-400' : project.sector === 'Healthcare' ? 'bg-green-500/20 text-green-400' : project.sector === 'Cybersecurity' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                          {project.sector}
                        </span>
                        <span className="text-xs text-gray-500">{project.id}</span>
                      </div>
                      <h3 className="text-white font-semibold text-lg">{project.name}</h3>
                      <p className="text-gray-400 text-sm mt-1">{project.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-indigo-400 font-semibold">?{project.budget}</p>
                      <p className="text-gray-500 text-xs">{project.client}</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all" style={{ width: `${project.progress}%` }}></div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map(tech => (
                      <span key={tech} className="px-2 py-1 bg-white/5 rounded-md text-gray-400 text-xs">{tech}</span>
                    ))}
                    {project.tech.length > 3 && <span className="px-2 py-1 bg-white/5 rounded-md text-gray-400 text-xs">+{project.tech.length - 3}</span>}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-400 text-sm">{project.team} team members</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-400 text-sm">{project.meetings}</span>
                    </div>
                    <button className="text-indigo-400 hover:text-indigo-300 text-sm">Details ?</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Meeting & Queries Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Meetings */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Video className="w-5 h-5 text-indigo-400" />
                Upcoming Meetings
              </h2>
              <div className="space-y-4">
                {projects.map(project => (
                  <div key={project.id} className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                        <Video className="w-5 h-5 text-indigo-400" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{project.name} Sync</p>
                        <p className="text-gray-500 text-xs">{project.meetings}</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-indigo-600 rounded-lg text-white text-sm hover:bg-indigo-700 transition">Join</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Queries */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-400" />
                Recent Queries
              </h2>
              <div className="space-y-4">
                {employees.slice(0, 5).map(emp => (
                  <div key={emp.id} className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold">
                        {emp.avatar}
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{emp.name}</p>
                        <p className="text-gray-500 text-xs">{emp.role} • {emp.location}</p>
                      </div>
                    </div>
                    <button className="text-indigo-400 hover:text-indigo-300 text-sm">Reply ?</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Employee Directory */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-green-400" />
              Employee Directory ({employees.length} Members)
            </h2>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/10">
                    <tr>
                      <th className="p-4 text-left text-white text-sm">Employee</th>
                      <th className="p-4 text-left text-white text-sm">Role</th>
                      <th className="p-4 text-left text-white text-sm">Location</th>
                      <th className="p-4 text-left text-white text-sm">Experience</th>
                      <th className="p-4 text-left text-white text-sm">Salary</th>
                      <th className="p-4 text-left text-white text-sm">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.slice(0, 10).map(emp => (
                      <tr key={emp.id} className="border-t border-white/10 hover:bg-white/5 transition">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                              {emp.avatar}
                            </div>
                            <span className="text-gray-300">{emp.name}</span>
                          </div>
                        </td>
                        <td className="p-4 text-gray-400">{emp.role}</td>
                        <td className="p-4 text-gray-400">{emp.location}</td>
                        <td className="p-4 text-gray-400">{emp.experience}</td>
                        <td className="p-4 text-gray-400">?{emp.salary}</td>
                        <td className="p-4">
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Active</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {employees.length > 10 && (
                <div className="p-4 text-center border-t border-white/10">
                  <button className="text-indigo-400 hover:text-indigo-300 text-sm">View all {employees.length} employees ?</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
