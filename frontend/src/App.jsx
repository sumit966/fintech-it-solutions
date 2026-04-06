import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import FloatingContact from "./components/FloatingContact";
import ScrollToTop from "./components/ScrollToTop";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Projects from "./pages/Projects";
import Careers from "./pages/Careers";
import ApplyJob from "./pages/ApplyJob";
import Contact from "./pages/Contact";
import ApplicationSuccess from "./pages/ApplicationSuccess";
import IndustryDetail from "./pages/IndustryDetail";
import ProjectDetail from "./pages/ProjectDetail";
import Newsroom from "./pages/Newsroom";
import Insights from "./pages/Insights";
import SearchResults from "./pages/SearchResults";
import CEO from "./pages/CEO";
import JobDetail from "./pages/JobDetail";

// HR Portal Pages
import HRDashboard from "./pages/HRDashboard";\nimport VMManager from "./pages/VMManager";
import HRLogin from "./pages/HRLogin";

// Detail Pages
import AnnouncementDetail from "./pages/AnnouncementDetail";
import ArticleDetail from "./pages/ArticleDetail";
import EventDetail from "./pages/EventDetail";
import ToolDetail from "./pages/ToolDetail";

// Category & Research Pages
import CategoryPage from "./pages/CategoryPage";
import ResearchDetail from "./pages/ResearchDetail";

// Who We Are Pages
import OurAspiration from "./pages/who-we-are/OurAspiration";
import Brand from "./pages/who-we-are/Brand";
import Leadership from "./pages/who-we-are/Leadership";
import Community from "./pages/who-we-are/Community";
import Sustainability from "./pages/who-we-are/Sustainability";

// Service Pages
import ServiceDetail from "./pages/ServiceDetail";
import CloudEngineering from "./pages/services/CloudEngineering";
import AIService from "./pages/services/AIService";
import Cybersecurity from "./pages/services/Cybersecurity";
import DevOps from "./pages/services/DevOps";
import DataEngineering from "./pages/services/DataEngineering";
import EnterprisePlatforms from "./pages/services/EnterprisePlatforms";

// Auth Pages
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

// Engagement Pages
import ProjectBasedDevelopment from "./pages/engagement/ProjectBasedDevelopment";
import ManagedServices from "./pages/engagement/ManagedServices";
import StaffAugmentation from "./pages/engagement/StaffAugmentation";
import SoftwareMaintenance from "./pages/engagement/SoftwareMaintenance";
import RescueProject from "./pages/engagement/RescueProject";

export default function App() {
  return (
    <BrowserRouter>
      <div className="page-bg">
        <ScrollToTop />
        <Navbar />

        <Routes>
          {/* MAIN PAGES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:id" element={<JobDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newsroom" element={<Newsroom />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/ceo" element={<CEO />} />

          {/* HR PORTAL PAGES */}
          <Route path="/hr-dashboard" element={<HRDashboard />} />\n          <Route path="/vm-manager" element={<VMManager />} />
          <Route path="/hr-login" element={<HRLogin />} />

          {/* WHO WE ARE PAGES */}
          <Route path="/aspiration" element={<OurAspiration />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/community" element={<Community />} />
          <Route path="/sustainability" element={<Sustainability />} />

          {/* DETAIL PAGES */}
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />

          {/* Newsroom & Insights Details */}
          <Route path="/newsroom/:slug" element={<AnnouncementDetail />} />
          <Route path="/insights/:slug" element={<ArticleDetail />} />
          <Route path="/events/:slug" element={<EventDetail />} />
          <Route path="/tools/:slug" element={<ToolDetail />} />

          {/* CATEGORY & RESEARCH PAGES */}
          <Route path="/insights/category/:categoryName" element={<CategoryPage />} />
          <Route path="/insights/research/:slug" element={<ResearchDetail />} />

          {/* CAREER PAGES */}
          <Route path="/careers/apply/:id" element={<ApplyJob />} />
          <Route path="/careers/success" element={<ApplicationSuccess />} />

          {/* SERVICE SPECIFIC PAGES */}
          <Route path="/services/cloud" element={<CloudEngineering />} />
          <Route path="/services/ai" element={<AIService />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/devops" element={<DevOps />} />
          <Route path="/services/data" element={<DataEngineering />} />
          <Route path="/services/platforms" element={<EnterprisePlatforms />} />

          {/* ENGAGEMENT PAGES */}
          <Route path="/engagement/project-based" element={<ProjectBasedDevelopment />} />
          <Route path="/engagement/managed-services" element={<ManagedServices />} />
          <Route path="/engagement/staff-augmentation" element={<StaffAugmentation />} />
          <Route path="/engagement/maintenance" element={<SoftwareMaintenance />} />
          <Route path="/engagement/rescue-project" element={<RescueProject />} />

          {/* ADMIN PAGES */}
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* 404 PAGE */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
        <Chatbot />
        <FloatingContact />
      </div>
    </BrowserRouter>
  );
}


