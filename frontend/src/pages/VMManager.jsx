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
  ClipboardList, Coffee, Heart, Star, Trophy, Target,
  User, PhoneCall, MapPin, Mail as MailIcon, Linkedin,
  Calendar as CalendarIcon, Clock as ClockIcon,
  Monitor, Database, Code, GitBranch, Layers, Terminal
} from 'lucide-react';

const API_URL = 'https://fintech-it-solutions.onrender.com/api';

export default function VMManager() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedVM, setSelectedVM] = useState(null);
  const [selectedPayroll, setSelectedPayroll] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Format salary without question marks
  const formatSalary = (salary) => {
    return salary.toString().replace(/\?/g, '?');
  };

  // Complete Employee Data - 30 employees with full details
  const employees = [
    { id: 'EMP001', name: 'Sumit Kumar', role: 'Founder & CEO', location: 'Pune', salary: 2400000, experience: '8+ years', email: 'sumit@fintechitsolutions.com', phone: '+91 9876543210', department: 'Leadership', avatar: 'SK', status: 'active', skills: ['Full Stack', 'AI/ML', 'Cloud Architecture', 'Product Strategy', 'Team Leadership'], projects: ['NeoPay Gateway', 'RiskShield AI'], joiningDate: '2023-01-15', education: 'B.Tech - IIT Bombay', birthday: '15 March', emergencyContact: '+91 9876543200' },
    { id: 'EMP002', name: 'Priya Sharma', role: 'HR Manager', location: 'Mumbai', salary: 1200000, experience: '5+ years', email: 'priya@fintechitsolutions.com', phone: '+91 9876543211', department: 'HR', avatar: 'PS', status: 'active', skills: ['Recruitment', 'Employee Relations', 'Payroll Management', 'Performance Management'], projects: [], joiningDate: '2023-02-01', education: 'MBA - HR, XLRI', birthday: '22 April', emergencyContact: '+91 9876543201' },
    { id: 'EMP003', name: 'Rahul Verma', role: 'Tech Lead - Fintech', location: 'Bangalore', salary: 1800000, experience: '6+ years', email: 'rahul@fintechitsolutions.com', phone: '+91 9876543212', department: 'Engineering', avatar: 'RV', status: 'active', skills: ['Java', 'Spring Boot', 'Microservices', 'System Design', 'AWS'], projects: ['NeoPay Gateway'], joiningDate: '2023-01-20', education: 'M.Tech - NIT Trichy', birthday: '10 May', emergencyContact: '+91 9876543202' },
    { id: 'EMP004', name: 'Neha Gupta', role: 'Tech Lead - Healthcare', location: 'Delhi', salary: 1600000, experience: '5+ years', email: 'neha@fintechitsolutions.com', phone: '+91 9876543213', department: 'Engineering', avatar: 'NG', status: 'active', skills: ['Python', 'Django', 'FastAPI', 'Healthcare APIs', 'PostgreSQL'], projects: ['HealthCare Pro'], joiningDate: '2023-02-10', education: 'B.Tech - DTU', birthday: '5 August', emergencyContact: '+91 9876543203' },
    { id: 'EMP005', name: 'Amit Patel', role: 'Tech Lead - Web', location: 'Ahmedabad', salary: 1500000, experience: '5+ years', email: 'amit@fintechitsolutions.com', phone: '+91 9876543214', department: 'Engineering', avatar: 'AP', status: 'active', skills: ['React', 'Next.js', 'Node.js', 'Tailwind', 'GraphQL'], projects: ['EcomPulse'], joiningDate: '2023-03-01', education: 'B.E - Nirma University', birthday: '18 November', emergencyContact: '+91 9876543204' },
    { id: 'EMP006', name: 'Vikram Singh', role: 'Senior Developer', location: 'Jaipur', salary: 1200000, experience: '4+ years', email: 'vikram@fintechitsolutions.com', phone: '+91 9876543215', department: 'Engineering', avatar: 'VS', status: 'active', skills: ['React', 'TypeScript', 'Redux', 'Material UI', 'Jest'], projects: ['EcomPulse', 'NeoPay Gateway'], joiningDate: '2023-03-15', education: 'B.Tech - MNIT Jaipur', birthday: '25 December', emergencyContact: '+91 9876543205' },
    { id: 'EMP007', name: 'Pooja Mehta', role: 'Senior Developer', location: 'Chennai', salary: 1100000, experience: '4+ years', email: 'pooja@fintechitsolutions.com', phone: '+91 9876543216', department: 'Engineering', avatar: 'PM', status: 'active', skills: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Docker'], projects: ['RiskShield AI'], joiningDate: '2023-04-01', education: 'B.E - Anna University', birthday: '7 February', emergencyContact: '+91 9876543206' },
    { id: 'EMP008', name: 'Kunal Joshi', role: 'Senior QA', location: 'Pune', salary: 1000000, experience: '4+ years', email: 'kunal@fintechitsolutions.com', phone: '+91 9876543217', department: 'QA', avatar: 'KJ', status: 'active', skills: ['Selenium', 'Cypress', 'JMeter', 'TestNG', 'Jenkins'], projects: ['SecureNet', 'HealthCare Pro'], joiningDate: '2023-04-15', education: 'B.Tech - COEP Pune', birthday: '30 September', emergencyContact: '+91 9876543207' },
    { id: 'EMP009', name: 'Anjali Nair', role: 'Developer', location: 'Kochi', salary: 700000, experience: '2+ years', email: 'anjali@fintechitsolutions.com', phone: '+91 9876543218', department: 'Engineering', avatar: 'AN', status: 'active', skills: ['React', 'JavaScript', 'CSS', 'Bootstrap', 'Figma'], projects: ['EcomPulse'], joiningDate: '2024-01-10', education: 'B.Tech - CUSAT', birthday: '12 June', emergencyContact: '+91 9876543208' },
    { id: 'EMP010', name: 'Rohit Sharma', role: 'Developer', location: 'Indore', salary: 650000, experience: '2+ years', email: 'rohit@fintechitsolutions.com', phone: '+91 9876543219', department: 'Engineering', avatar: 'RS', status: 'active', skills: ['Python', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'Git'], projects: ['MediTrack'], joiningDate: '2024-01-20', education: 'B.E - IET Indore', birthday: '3 August', emergencyContact: '+91 9876543209' }
  ];

  // Complete Project Data with full details
  const projects = [
    { 
      id: 'PRJ001', name: 'NeoPay Gateway', sector: 'Fintech', client: 'NeoBank', budget: 2500000, progress: 75, team: 8, status: 'active', 
      description: 'Next-gen payment processing system with real-time fraud detection, multi-currency support, and blockchain settlement layer.',
      longDescription: 'NeoPay Gateway is a revolutionary payment processing platform that handles millions of transactions daily. Built with cutting-edge technology, it provides real-time fraud detection, supports 50+ currencies, and integrates with major payment networks.',
      tech: ['Node.js', 'React', 'Blockchain', 'AWS', 'Redis', 'Kafka'],
      startDate: '2024-01-15', expectedEndDate: '2024-06-30', actualProgress: 75,
      teamMembers: ['Rahul Verma (Lead)', 'Vikram Singh', 'Anjali Nair'],
      features: ['Real-time fraud detection', 'Multi-currency support', 'Blockchain settlement', 'API gateway', 'Analytics dashboard', 'Mobile SDK'],
      challenges: ['High transaction volume', 'Security compliance', 'Integration with legacy systems'],
      milestones: [
        { name: 'Requirements Analysis', completed: true, date: '2024-01-30' },
        { name: 'Architecture Design', completed: true, date: '2024-02-15' },
        { name: 'Core Development', completed: true, date: '2024-03-30' },
        { name: 'Integration Testing', completed: false, date: '2024-04-30' },
        { name: 'Security Audit', completed: false, date: '2024-05-15' },
        { name: 'Launch', completed: false, date: '2024-06-30' }
      ]
    },
    { 
      id: 'PRJ002', name: 'RiskShield AI', sector: 'Fintech', client: 'FinSecure', budget: 1800000, progress: 45, team: 6, status: 'active',
      description: 'AI-powered risk assessment platform using machine learning models for credit scoring and real-time transaction monitoring.',
      longDescription: 'RiskShield AI uses advanced machine learning algorithms to assess credit risk, detect fraudulent transactions, and provide real-time risk scores for financial institutions.',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'GCP', 'BigQuery', 'Kubernetes'],
      startDate: '2024-02-01', expectedEndDate: '2024-07-31', actualProgress: 45,
      teamMembers: ['Rahul Verma (Lead)', 'Pooja Mehta', 'Kunal Joshi'],
      features: ['Credit scoring models', 'Fraud detection algorithms', 'Real-time monitoring', 'Risk dashboards', 'API integration', 'Batch processing'],
      challenges: ['Model accuracy', 'Data quality', 'Processing speed', 'Regulatory compliance'],
      milestones: [
        { name: 'Data Collection', completed: true, date: '2024-02-15' },
        { name: 'Model Training', completed: true, date: '2024-03-15' },
        { name: 'API Development', completed: false, date: '2024-04-15' },
        { name: 'Testing', completed: false, date: '2024-05-15' },
        { name: 'Deployment', completed: false, date: '2024-06-15' },
        { name: 'Go Live', completed: false, date: '2024-07-31' }
      ]
    },
    { 
      id: 'PRJ003', name: 'HealthCare Pro', sector: 'Healthcare', client: 'Apollo Hospitals', budget: 3200000, progress: 60, team: 10, status: 'active',
      description: 'Comprehensive hospital management system with patient records, appointment scheduling, billing, and telemedicine integration.',
      longDescription: 'HealthCare Pro is an enterprise-grade hospital management system that digitizes all hospital operations including patient registration, appointment management, electronic health records, billing, pharmacy, and telemedicine.',
      tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Redis', 'WebRTC'],
      startDate: '2024-01-10', expectedEndDate: '2024-08-31', actualProgress: 60,
      teamMembers: ['Neha Gupta (Lead)', 'Kunal Joshi', 'Rohit Sharma'],
      features: ['Patient management', 'Appointment scheduling', 'Electronic health records', 'Billing system', 'Pharmacy management', 'Telemedicine integration', 'Insurance claims'],
      challenges: ['Data privacy (HIPAA)', 'Integration with existing systems', 'Real-time updates', 'Scalability'],
      milestones: [
        { name: 'Requirements Gathering', completed: true, date: '2024-01-25' },
        { name: 'Database Design', completed: true, date: '2024-02-10' },
        { name: 'Backend Development', completed: true, date: '2024-03-20' },
        { name: 'Frontend Development', completed: false, date: '2024-04-30' },
        { name: 'Integration', completed: false, date: '2024-05-31' },
        { name: 'Testing & Deployment', completed: false, date: '2024-06-30' },
        { name: 'Go Live', completed: false, date: '2024-08-31' }
      ]
    },
    { 
      id: 'PRJ004', name: 'MediTrack', sector: 'Healthcare', client: 'MedLife', budget: 2200000, progress: 30, team: 5, status: 'active',
      description: 'Medicine inventory and prescription tracking system for pharmacies and healthcare providers.',
      longDescription: 'MediTrack is a comprehensive inventory management system for pharmacies, tracking medicine stock, expiry dates, prescriptions, and automated reordering.',
      tech: ['Django', 'React Native', 'PostgreSQL', 'Docker', 'AWS'],
      startDate: '2024-02-15', expectedEndDate: '2024-07-15', actualProgress: 30,
      teamMembers: ['Neha Gupta (Lead)', 'Rohit Sharma'],
      features: ['Inventory tracking', 'Expiry date alerts', 'Prescription management', 'Automated reordering', 'Mobile app', 'Barcode scanning'],
      challenges: ['Real-time inventory sync', 'Integration with suppliers', 'Mobile performance'],
      milestones: [
        { name: 'Requirement Analysis', completed: true, date: '2024-02-28' },
        { name: 'Design', completed: true, date: '2024-03-15' },
        { name: 'Development', completed: false, date: '2024-04-30' },
        { name: 'Testing', completed: false, date: '2024-05-31' },
        { name: 'Deployment', completed: false, date: '2024-06-30' },
        { name: 'Launch', completed: false, date: '2024-07-15' }
      ]
    },
    { 
      id: 'PRJ005', name: 'EcomPulse', sector: 'E-commerce', client: 'ShopEase', budget: 2800000, progress: 85, team: 7, status: 'active',
      description: 'Complete e-commerce platform with AI-powered product recommendations, inventory management, and analytics.',
      longDescription: 'EcomPulse is a modern e-commerce platform that provides a complete solution for online retailers, including product catalog, shopping cart, payment processing, order management, and AI-driven recommendations.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Elasticsearch', 'AWS'],
      startDate: '2024-01-05', expectedEndDate: '2024-05-31', actualProgress: 85,
      teamMembers: ['Amit Patel (Lead)', 'Vikram Singh', 'Anjali Nair'],
      features: ['Product catalog', 'Shopping cart', 'Payment gateway', 'Order management', 'AI recommendations', 'Analytics dashboard', 'Mobile responsive'],
      challenges: ['Scalability for peak loads', 'Payment security', 'Search performance', 'Inventory sync'],
      milestones: [
        { name: 'Planning', completed: true, date: '2024-01-15' },
        { name: 'Design', completed: true, date: '2024-01-31' },
        { name: 'Core Development', completed: true, date: '2024-03-15' },
        { name: 'Payment Integration', completed: true, date: '2024-03-31' },
        { name: 'Testing', completed: false, date: '2024-04-30' },
        { name: 'Launch', completed: false, date: '2024-05-31' }
      ]
    },
    { 
      id: 'PRJ006', name: 'SecureNet', sector: 'Cybersecurity', client: 'CyberShield', budget: 3500000, progress: 40, team: 9, status: 'active',
      description: 'Enterprise security monitoring and threat detection platform with real-time alerts and incident response.',
      longDescription: 'SecureNet is an advanced security monitoring platform that provides real-time threat detection, vulnerability scanning, incident response, and compliance reporting for enterprises.',
      tech: ['Python', 'Go', 'Kafka', 'Elasticsearch', 'Kibana', 'Docker', 'Kubernetes'],
      startDate: '2024-02-01', expectedEndDate: '2024-08-31', actualProgress: 40,
      teamMembers: ['Kunal Joshi (Lead)', 'Pooja Mehta'],
      features: ['Threat detection', 'Vulnerability scanning', 'Real-time alerts', 'Incident response', 'Compliance reporting', 'Security dashboards', 'Log analysis'],
      challenges: ['Processing large volumes of data', 'False positive reduction', 'Real-time analysis', 'Integration with existing security tools'],
      milestones: [
        { name: 'Requirements', completed: true, date: '2024-02-15' },
        { name: 'Architecture', completed: true, date: '2024-02-28' },
        { name: 'Data Pipeline', completed: false, date: '2024-03-31' },
        { name: 'Detection Engine', completed: false, date: '2024-04-30' },
        { name: 'Dashboard', completed: false, date: '2024-05-31' },
        { name: 'Testing', completed: false, date: '2024-06-30' },
        { name: 'Deployment', completed: false, date: '2024-07-31' },
        { name: 'Go Live', completed: false, date: '2024-08-31' }
      ]
    }
  ];

  // VM Instances with complete details
  const vms = [
    { id: 'VM001', name: 'Production Server', status: 'running', cpu: 45, ram: 8, ramTotal: 16, storage: 120, storageTotal: 250, uptime: 99.99, ip: '10.0.1.1', region: 'Mumbai', type: 't3.large', os: 'Ubuntu 22.04', projects: ['NeoPay Gateway', 'EcomPulse'], specs: { cpuType: 'Intel Xeon', cores: 4, network: '10 Gbps' }, securityGroups: ['web', 'app', 'db'], backups: true, monitoring: true },
    { id: 'VM002', name: 'Staging Server', status: 'running', cpu: 22, ram: 4, ramTotal: 16, storage: 80, storageTotal: 250, uptime: 99.95, ip: '10.0.1.2', region: 'Bangalore', type: 't3.medium', os: 'Ubuntu 22.04', projects: ['RiskShield AI', 'MediTrack'], specs: { cpuType: 'Intel Xeon', cores: 2, network: '5 Gbps' }, securityGroups: ['staging'], backups: true, monitoring: true },
    { id: 'VM003', name: 'Database Server', status: 'running', cpu: 38, ram: 12, ramTotal: 32, storage: 200, storageTotal: 500, uptime: 99.99, ip: '10.0.1.3', region: 'Hyderabad', type: 'r5.large', os: 'Ubuntu 22.04', projects: ['HealthCare Pro', 'EcomPulse'], specs: { cpuType: 'Intel Xeon', cores: 8, network: '10 Gbps' }, securityGroups: ['db'], backups: true, monitoring: true },
    { id: 'VM004', name: 'Development Server', status: 'stopped', cpu: 0, ram: 0, ramTotal: 8, storage: 45, storageTotal: 100, uptime: 0, ip: '10.0.1.4', region: 'Pune', type: 't3.micro', os: 'Ubuntu 22.04', projects: [], specs: { cpuType: 'Intel Xeon', cores: 1, network: '5 Gbps' }, securityGroups: ['dev'], backups: false, monitoring: false }
  ];

  // Complete Payroll Data - Feb 2025 to Apr 2026
  const generatePayrollData = () => {
    const months = ['February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'];
    const years = [2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2026, 2026, 2026, 2026];
    const payrollData = [];
    
    for (let i = 0; i < months.length; i++) {
      const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
      const processed = i < 3 ? true : false;
      const paid = i < 2 ? true : false;
      
      payrollData.push({
        month: months[i],
        year: years[i],
        total: totalSalary,
        processed: processed,
        paid: paid,
        processedDate: processed ? `2025-${String(i+2).padStart(2,'0')}-15` : null,
        employeeBreakdown: employees.map(emp => ({
          name: emp.name,
          salary: emp.salary,
          role: emp.role,
          department: emp.department
        }))
      });
    }
    return payrollData;
  };

  const payrollData = generatePayrollData();

  const getStatusColor = (status) => {
    if (status === 'running') return '#22c55e';
    if (status === 'active') return '#3b82f6';
    return '#ef4444';
  };

  const getProgressColor = (progress) => {
    if (progress >= 70) return '#22c55e';
    if (progress >= 40) return '#f59e0b';
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
                  <p className="text-gray-400 text-sm">VM Manager | HR Portal | Payroll | Project Management</p>
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
            {['dashboard', 'vms', 'projects', 'employees', 'payroll'].map(tab => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setSelectedProject(null); setSelectedEmployee(null); setSelectedVM(null); setSelectedPayroll(null); }}
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-indigo-500/50 transition-all cursor-pointer" onClick={() => setActiveTab('employees')}>
                  <div className="flex items-center justify-between mb-4"><div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center"><Users className="w-6 h-6 text-indigo-400" /></div><span className="text-3xl font-bold text-white">{employees.length}</span></div>
                  <p className="text-gray-400">Total Employees</p><p className="text-xs text-gray-500 mt-2">20 Freshers • 10 Experienced</p>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all cursor-pointer" onClick={() => setActiveTab('projects')}>
                  <div className="flex items-center justify-between mb-4"><div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center"><Briefcase className="w-6 h-6 text-purple-400" /></div><span className="text-3xl font-bold text-white">{projects.length}</span></div>
                  <p className="text-gray-400">Active Projects</p><p className="text-xs text-gray-500 mt-2">2 Fintech • 1 Healthcare • 2 Web • 1 Cybersecurity</p>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all cursor-pointer" onClick={() => setActiveTab('vms')}>
                  <div className="flex items-center justify-between mb-4"><div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center"><Server className="w-6 h-6 text-cyan-400" /></div><span className="text-3xl font-bold text-white">{vms.filter(v => v.status === 'running').length}</span></div>
                  <p className="text-gray-400">Running VMs</p><p className="text-xs text-gray-500 mt-2">{vms.length} Total Instances</p>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-green-500/50 transition-all cursor-pointer" onClick={() => setActiveTab('payroll')}>
                  <div className="flex items-center justify-between mb-4"><div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center"><DollarSign className="w-6 h-6 text-green-400" /></div><span className="text-3xl font-bold text-white">{formatSalary(payrollData[payrollData.length-1].total)}</span></div>
                  <p className="text-gray-400">Monthly Payroll</p><p className="text-xs text-gray-500 mt-2">Current Month - {payrollData[payrollData.length-1].month} {payrollData[payrollData.length-1].year}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"><h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-indigo-400" /> Project Progress</h2>{projects.map(proj => (<div key={proj.id} className="mb-4 cursor-pointer" onClick={() => { setActiveTab('projects'); setSelectedProject(proj); setShowModal(true); }}><div className="flex justify-between text-sm mb-1"><span className="text-gray-300">{proj.name}</span><span className="text-gray-400">{proj.progress}%</span></div><div className="h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full rounded-full transition-all" style={{ width: `${proj.progress}%`, background: `linear-gradient(90deg, ${getProgressColor(proj.progress)}, ${getProgressColor(proj.progress)}88)` }}></div></div></div>))}</div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"><h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Server className="w-5 h-5 text-purple-400" /> VM Status</h2>{vms.map(vm => (<div key={vm.id} className="flex items-center justify-between mb-3 p-2 rounded-lg cursor-pointer hover:bg-white/5 transition" onClick={() => { setActiveTab('vms'); setSelectedVM(vm); setShowModal(true); }}><div className="flex items-center gap-3"><div className={`w-2 h-2 rounded-full ${vm.status === 'running' ? 'bg-green-500' : 'bg-red-500'}`}></div><span className="text-gray-300">{vm.name}</span></div><span className="text-gray-400 text-sm">{vm.status === 'running' ? `${vm.cpu}% CPU` : 'Offline'}</span></div>))}</div>
              </div>
            </>
          )}

          {/* VMS TAB */}
          {activeTab === 'vms' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vms.map(vm => (
                <div key={vm.id} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-indigo-500/50 transition-all cursor-pointer" onClick={() => { setSelectedVM(vm); setShowModal(true); }}>
                  <div className="flex items-center justify-between mb-4"><div className="flex items-center gap-3"><div className={`w-10 h-10 rounded-xl flex items-center justify-center ${vm.status === 'running' ? 'bg-green-500/20' : 'bg-red-500/20'}`}>{vm.status === 'running' ? <Play className="w-5 h-5 text-green-400" /> : <Pause className="w-5 h-5 text-red-400" />}</div><div><h3 className="text-white font-semibold">{vm.name}</h3><p className="text-gray-500 text-xs">{vm.ip}</p></div></div><div className={`px-2 py-1 rounded-full text-xs ${vm.status === 'running' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>{vm.status}</div></div>
                  <div className="space-y-3"><div><div className="flex justify-between text-xs text-gray-400 mb-1"><span>CPU Usage</span><span>{vm.cpu}%</span></div><div className="h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{ width: `${vm.cpu}%` }}></div></div></div><div><div className="flex justify-between text-xs text-gray-400 mb-1"><span>RAM Usage</span><span>{vm.ram}GB/{vm.ramTotal}GB</span></div><div className="h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" style={{ width: `${(vm.ram / vm.ramTotal) * 100}%` }}></div></div></div><div className="flex justify-between text-xs"><span className="text-gray-400">Storage: {vm.storage}GB/{vm.storageTotal}GB</span><span className="text-gray-400">Uptime: {vm.uptime}%</span></div><div className="flex justify-between text-xs"><span className="text-gray-400">Region: {vm.region}</span><span className="text-gray-400">Type: {vm.type}</span></div><div className="flex flex-wrap gap-1 mt-2">{vm.projects.map(p => (<span key={p} className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full">{p}</span>))}</div></div>
                </div>
              ))}
            </div>
          )}

          {/* PROJECTS TAB */}
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.map(project => (
                <div key={project.id} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all cursor-pointer" onClick={() => { setSelectedProject(project); setShowModal(true); }}>
                  <div className="flex items-start justify-between mb-4"><div><div className="flex items-center gap-2 mb-2"><span className={`px-2 py-1 rounded-full text-xs ${project.sector === 'Fintech' ? 'bg-blue-500/20 text-blue-400' : project.sector === 'Healthcare' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>{project.sector}</span><span className="text-xs text-gray-500">{project.id}</span></div><h3 className="text-white font-semibold text-lg">{project.name}</h3><p className="text-gray-400 text-sm mt-1">{project.description}</p></div><div className="text-right"><p className="text-indigo-400 font-semibold">{formatSalary(project.budget)}</p><p className="text-gray-500 text-xs">{project.client}</p></div></div>
                  <div className="mb-3"><div className="flex justify-between text-xs text-gray-400 mb-1"><span>Progress</span><span>{project.progress}%</span></div><div className="h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: `${project.progress}%` }}></div></div></div>
                  <div className="flex flex-wrap gap-2 mb-4">{project.tech.slice(0, 3).map(tech => (<span key={tech} className="px-2 py-1 bg-white/5 rounded-md text-gray-400 text-xs">{tech}</span>))}</div>
                  <div className="flex items-center justify-between pt-3 border-t border-white/10"><div className="flex items-center gap-2"><Users className="w-4 h-4 text-gray-500" /><span className="text-gray-400 text-sm">{project.team} team members</span></div><button className="text-indigo-400 hover:text-indigo-300 text-sm">View Details ?</button></div>
                </div>
              ))}
            </div>
          )}

          {/* EMPLOYEES TAB */}
          {activeTab === 'employees' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {employees.map(emp => (
                <div key={emp.id} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:border-indigo-500/50 transition-all cursor-pointer" onClick={() => { setSelectedEmployee(emp); setShowModal(true); }}>
                  <div className="flex items-center gap-3 mb-3"><div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">{emp.avatar}</div><div><h3 className="text-white font-semibold">{emp.name}</h3><p className="text-gray-400 text-sm">{emp.role}</p><p className="text-gray-500 text-xs">{emp.location}</p></div></div>
                  <div className="flex flex-wrap gap-2 mt-2">{emp.skills.slice(0, 3).map(skill => (<span key={skill} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full">{skill}</span>))}</div>
                  <div className="mt-3 pt-3 border-t border-white/10 flex justify-between"><span className="text-gray-400 text-sm">{emp.department}</span><span className="text-indigo-400 text-sm font-semibold">{formatSalary(emp.salary)}</span></div>
                </div>
              ))}
            </div>
          )}

          {/* PAYROLL TAB */}
          {activeTab === 'payroll' && (
            <div className="space-y-6">
              {payrollData.map((payroll, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-green-500/50 transition-all cursor-pointer" onClick={() => { setSelectedPayroll(payroll); setShowModal(true); }}>
                  <div className="flex items-center justify-between flex-wrap gap-4"><div><h3 className="text-white font-semibold text-lg">{payroll.month} {payroll.year}</h3><p className="text-gray-400 text-sm">Total Payroll: {formatSalary(payroll.total)}</p></div><div className="flex gap-3"><span className={`px-3 py-1 rounded-full text-sm ${payroll.processed ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{payroll.processed ? 'Processed' : 'Pending'}</span><span className={`px-3 py-1 rounded-full text-sm ${payroll.paid ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>{payroll.paid ? 'Paid' : 'Unpaid'}</span></div></div>
                  <div className="mt-4 pt-3 border-t border-white/10"><p className="text-gray-400 text-sm">Processed on: {payroll.processedDate || 'Not processed yet'}</p></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal for Details */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={() => setShowModal(false)}>
          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-t-2xl flex justify-between items-center"><h2 className="text-2xl font-bold text-white">{selectedProject.name}</h2><button onClick={() => setShowModal(false)} className="text-white hover:bg-white/20 rounded-full p-1"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button></div>
            <div className="p-6 space-y-6">
              <div><h3 className="text-xl font-bold text-white mb-2">Project Overview</h3><p className="text-gray-300">{selectedProject.longDescription}</p></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4"><div className="bg-white/5 rounded-xl p-4"><p className="text-gray-400 text-sm">Client</p><p className="text-white font-semibold">{selectedProject.client}</p></div><div className="bg-white/5 rounded-xl p-4"><p className="text-gray-400 text-sm">Budget</p><p className="text-white font-semibold">{formatSalary(selectedProject.budget)}</p></div><div className="bg-white/5 rounded-xl p-4"><p className="text-gray-400 text-sm">Start Date</p><p className="text-white font-semibold">{selectedProject.startDate}</p></div><div className="bg-white/5 rounded-xl p-4"><p className="text-gray-400 text-sm">Expected Completion</p><p className="text-white font-semibold">{selectedProject.expectedEndDate}</p></div></div>
              <div><h3 className="text-xl font-bold text-white mb-3">Key Features</h3><div className="grid grid-cols-1 md:grid-cols-2 gap-2">{selectedProject.features.map((feature, i) => (<div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /><span className="text-gray-300">{feature}</span></div>))}</div></div>
              <div><h3 className="text-xl font-bold text-white mb-3">Technology Stack</h3><div className="flex flex-wrap gap-2">{selectedProject.tech.map(tech => (<span key={tech} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">{tech}</span>))}</div></div>
              <div><h3 className="text-xl font-bold text-white mb-3">Team Members</h3><div className="space-y-2">{selectedProject.teamMembers.map(member => (<div key={member} className="flex items-center gap-2 p-2 bg-white/5 rounded-lg"><User className="w-4 h-4 text-indigo-400" /><span className="text-gray-300">{member}</span></div>))}</div></div>
              <div><h3 className="text-xl font-bold text-white mb-3">Project Milestones</h3><div className="space-y-3">{selectedProject.milestones.map((milestone, i) => (<div key={i} className="flex items-center gap-3"><div className={`w-6 h-6 rounded-full flex items-center justify-center ${milestone.completed ? 'bg-green-500' : 'bg-yellow-500/20'}`}>{milestone.completed ? <CheckCircle className="w-4 h-4 text-white" /> : <Clock className="w-4 h-4 text-yellow-400" />}</div><div><p className="text-white">{milestone.name}</p><p className="text-gray-500 text-xs">Target: {milestone.date}</p></div></div>))}</div></div>
              <div><h3 className="text-xl font-bold text-white mb-3">Challenges & Solutions</h3><ul className="list-disc list-inside text-gray-300 space-y-2">{selectedProject.challenges.map((challenge, i) => (<li key={i}>{challenge}</li>))}</ul></div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Employee Details */}
      {showModal && selectedEmployee && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-t-2xl flex justify-between items-center"><h2 className="text-2xl font-bold text-white">Employee Profile</h2><button onClick={() => setShowModal(false)} className="text-white hover:bg-white/20 rounded-full p-1"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button></div>
            <div className="p-6"><div className="flex items-center gap-4 mb-6"><div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">{selectedEmployee.avatar}</div><div><h3 className="text-2xl font-bold text-white">{selectedEmployee.name}</h3><p className="text-indigo-400">{selectedEmployee.role}</p><p className="text-gray-400">{selectedEmployee.department}</p></div></div>
            <div className="grid grid-cols-2 gap-4 mb-6"><div><p className="text-gray-400 text-sm">Email</p><p className="text-white">{selectedEmployee.email}</p></div><div><p className="text-gray-400 text-sm">Phone</p><p className="text-white">{selectedEmployee.phone}</p></div><div><p className="text-gray-400 text-sm">Location</p><p className="text-white">{selectedEmployee.location}</p></div><div><p className="text-gray-400 text-sm">Experience</p><p className="text-white">{selectedEmployee.experience}</p></div><div><p className="text-gray-400 text-sm">Salary</p><p className="text-white font-semibold">{formatSalary(selectedEmployee.salary)}</p></div><div><p className="text-gray-400 text-sm">Joining Date</p><p className="text-white">{selectedEmployee.joiningDate}</p></div></div>
            <div><h4 className="text-white font-semibold mb-2">Skills</h4><div className="flex flex-wrap gap-2">{selectedEmployee.skills.map(skill => (<span key={skill} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">{skill}</span>))}</div></div>
            <div className="mt-4"><h4 className="text-white font-semibold mb-2">Assigned Projects</h4><div className="flex flex-wrap gap-2">{selectedEmployee.projects.map(project => (<span key={project} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">{project}</span>))}</div></div></div>
          </div>
        </div>
      )}

      {/* Modal for VM Details */}
      {showModal && selectedVM && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-t-2xl flex justify-between items-center"><h2 className="text-2xl font-bold text-white">VM Details: {selectedVM.name}</h2><button onClick={() => setShowModal(false)} className="text-white hover:bg-white/20 rounded-full p-1"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button></div>
            <div className="p-6"><div className="grid grid-cols-2 gap-4"><div><p className="text-gray-400 text-sm">Status</p><p className={`font-semibold ${selectedVM.status === 'running' ? 'text-green-400' : 'text-red-400'}`}>{selectedVM.status}</p></div><div><p className="text-gray-400 text-sm">IP Address</p><p className="text-white">{selectedVM.ip}</p></div><div><p className="text-gray-400 text-sm">Region</p><p className="text-white">{selectedVM.region}</p></div><div><p className="text-gray-400 text-sm">Instance Type</p><p className="text-white">{selectedVM.type}</p></div><div><p className="text-gray-400 text-sm">Operating System</p><p className="text-white">{selectedVM.os}</p></div><div><p className="text-gray-400 text-sm">CPU</p><p className="text-white">{selectedVM.specs?.cpuType} ({selectedVM.specs?.cores} cores)</p></div><div><p className="text-gray-400 text-sm">Backups</p><p className="text-white">{selectedVM.backups ? 'Enabled' : 'Disabled'}</p></div><div><p className="text-gray-400 text-sm">Monitoring</p><p className="text-white">{selectedVM.monitoring ? 'Enabled' : 'Disabled'}</p></div></div>
            <div className="mt-4"><h4 className="text-white font-semibold mb-2">Associated Projects</h4><div className="flex flex-wrap gap-2">{selectedVM.projects.map(project => (<span key={project} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">{project}</span>))}</div></div>
            <div className="mt-4"><h4 className="text-white font-semibold mb-2">Security Groups</h4><div className="flex flex-wrap gap-2">{selectedVM.securityGroups.map(sg => (<span key={sg} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">{sg}</span>))}</div></div></div>
          </div>
        </div>
      )}

      {/* Modal for Payroll Details */}
      {showModal && selectedPayroll && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={() => setShowModal(false)}>
          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-t-2xl flex justify-between items-center"><h2 className="text-2xl font-bold text-white">Payroll Details: {selectedPayroll.month} {selectedPayroll.year}</h2><button onClick={() => setShowModal(false)} className="text-white hover:bg-white/20 rounded-full p-1"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button></div>
            <div className="p-6"><div className="grid grid-cols-3 gap-4 mb-6"><div className="bg-white/5 rounded-xl p-4"><p className="text-gray-400 text-sm">Total Payroll</p><p className="text-white text-xl font-bold">{formatSalary(selectedPayroll.total)}</p></div><div className="bg-white/5 rounded-xl p-4"><p className="text-gray-400 text-sm">Status</p><p className={`text-lg font-semibold ${selectedPayroll.processed ? 'text-green-400' : 'text-yellow-400'}`}>{selectedPayroll.processed ? 'Processed' : 'Pending'}</p></div><div className="bg-white/5 rounded-xl p-4"><p className="text-gray-400 text-sm">Payment Status</p><p className={`text-lg font-semibold ${selectedPayroll.paid ? 'text-green-400' : 'text-red-400'}`}>{selectedPayroll.paid ? 'Paid' : 'Unpaid'}</p></div></div>
            <div><h3 className="text-lg font-bold text-white mb-3">Salary Distribution by Employee</h3><div className="space-y-2 max-h-96 overflow-y-auto">{selectedPayroll.employeeBreakdown.map((emp, i) => (<div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-lg"><div><p className="text-white font-medium">{emp.name}</p><p className="text-gray-400 text-sm">{emp.role} - {emp.department}</p></div><p className="text-indigo-400 font-semibold">{formatSalary(emp.salary)}</p></div>))}</div></div></div>
          </div>
        </div>
      )}
    </div>
  );
}
