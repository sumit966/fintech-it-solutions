import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

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
import SearchResults from "./pages/SearchResults";
import CEO from "./pages/CEO";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";

import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/apply/:id" element={<ApplyJob />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/careers/success" element={<ApplicationSuccess />} />
        <Route path="/industries/:slug" element={<IndustryDetail />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/newsroom" element={<Newsroom />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/ceo" element={<CEO />} />

        {/* ADMIN */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* 404 PAGE */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* FOOTER */}
      <Footer />

      {/* AI CHATBOT */}
      <Chatbot />

    </BrowserRouter>
  );
}