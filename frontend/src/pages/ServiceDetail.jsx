import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Shield, 
  Zap, 
  Users, 
  Target,
  Code,
  Cloud,
  Smartphone,
  ShoppingCart,
  Building2,
  BarChart,
  Layers,
  GitBranch,
  Settings,
  Rocket,
  Award,
  Briefcase,
  Cpu,
  Lock,
  Globe,
  Database,
  PieChart,
  Server,
  Workflow,
  Box,
  HardDrive,
  Network,
  PenTool,
  BookOpen,
  MessageCircle,
  Download,
  FileText,
  HelpCircle
} from "lucide-react";

const servicesData = {
  "custom-software": {
    title: "Custom Software Development",
    shortDesc: "Tailored business applications built specifically for your unique requirements and workflows.",
    icon: Code,
    color: "from-blue-600 to-cyan-600",
    
    overview: `We build custom software that solves your specific business challenges. Unlike off-the-shelf solutions that force you to adapt your processes, our custom software adapts to you. From inventory management systems to business automation tools, we create applications that streamline operations, reduce costs, and give you a competitive edge.

    As a fresh technology partner, we bring modern approaches and best practices to every project. We don't have legacy code or outdated thinking—just clean, efficient code built with the latest technologies.`,
    
    features: [
      {
        title: "Business Process Automation",
        desc: "Automate repetitive tasks and workflows to save time and reduce errors.",
        icon: Settings
      },
      {
        title: "Inventory Management",
        desc: "Track stock, manage orders, and optimize inventory levels.",
        icon: Box
      },
      {
        title: "Employee Portals",
        desc: "Centralized platforms for HR, leave management, and internal communications.",
        icon: Users
      },
      {
        title: "Document Management",
        desc: "Secure storage, version control, and easy retrieval of business documents.",
        icon: FileText
      },
      {
        title: "Reporting Dashboards",
        desc: "Real-time insights into your business performance.",
        icon: BarChart
      },
      {
        title: "Customer Portals",
        desc: "Self-service portals where customers can manage their accounts.",
        icon: Globe
      }
    ],
    
    process: [
      {
        phase: "Discovery & Planning",
        duration: "1-2 Weeks",
        tasks: [
          "In-depth business requirements analysis",
          "User workflow mapping and process documentation",
          "Technical feasibility assessment",
          "Technology stack selection",
          "Project roadmap creation",
          "Budget and timeline finalization"
        ],
        icon: Target,
        color: "from-blue-500 to-cyan-500"
      },
      {
        phase: "Design & Prototyping",
        duration: "2-3 Weeks",
        tasks: [
          "UI/UX design and wireframing",
          "Interactive prototype creation",
          "User experience testing",
          "Design system development",
          "Client feedback and iterations",
          "Final design approval"
        ],
        icon: PenTool,
        color: "from-purple-500 to-pink-500"
      },
      {
        phase: "Development",
        duration: "4-8 Weeks",
        tasks: [
          "Agile development sprints",
          "Frontend and backend development",
          "Database design and implementation",
          "API development and integration",
          "Regular progress demonstrations",
          "Continuous testing throughout"
        ],
        icon: Code,
        color: "from-green-500 to-emerald-500"
      },
      {
        phase: "Testing & QA",
        duration: "2-3 Weeks",
        tasks: [
          "Functional testing of all features",
          "Performance and load testing",
          "Security vulnerability assessment",
          "Cross-browser and device testing",
          "User acceptance testing (UAT)",
          "Bug fixing and optimization"
        ],
        icon: Shield,
        color: "from-yellow-500 to-orange-500"
      },
      {
        phase: "Deployment",
        duration: "1 Week",
        tasks: [
          "Production environment setup",
          "Data migration if needed",
          "Final deployment and go-live",
          "DNS and server configuration",
          "SSL certificate installation",
          "Launch day support"
        ],
        icon: Rocket,
        color: "from-red-500 to-pink-500"
      },
      {
        phase: "Support & Growth",
        duration: "Ongoing",
        tasks: [
          "Post-launch monitoring",
          "Bug fixes and updates",
          "Performance optimization",
          "Feature additions and enhancements",
          "Regular maintenance",
          "24/7 emergency support"
        ],
        icon: Settings,
        color: "from-indigo-500 to-blue-500"
      }
    ],
    
    benefits: [
      {
        title: "Tailored to Your Needs",
        desc: "Software built exactly how you want it, not how a generic product dictates.",
        icon: Target
      },
      {
        title: "Scalable Architecture",
        desc: "Grows with your business from startup to enterprise without rebuilding.",
        icon: Layers
      },
      {
        title: "Full Ownership",
        desc: "You own the code and intellectual property completely.",
        icon: Award
      },
      {
        title: "Integration Ready",
        desc: "Connects seamlessly with your existing tools and systems.",
        icon: GitBranch
      },
      {
        title: "Modern Technology",
        desc: "Built with the latest frameworks and best practices.",
        icon: Cpu
      },
      {
        title: "Dedicated Support",
        desc: "We're with you long after launch.",
        icon: Users
      }
    ],
    
    technologies: [
      { name: "React/Next.js", icon: "⚛️", category: "Frontend", description: "Modern UI development" },
      { name: "Node.js", icon: "🟢", category: "Backend", description: "Scalable server-side logic" },
      { name: "Python/Django", icon: "🐍", category: "Backend", description: "Rapid development" },
      { name: "PostgreSQL", icon: "🐘", category: "Database", description: "Reliable data storage" },
      { name: "MongoDB", icon: "🍃", category: "Database", description: "Flexible NoSQL database" },
      { name: "AWS/Azure", icon: "☁️", category: "Cloud", description: "Cloud infrastructure" },
      { name: "Docker", icon: "🐳", category: "DevOps", description: "Container deployment" },
      { name: "Redis", icon: "⚡", category: "Caching", description: "High-performance caching" }
    ],
    
    roadmap: [
      { phase: "Discovery", weeks: "1-2", description: "Requirements & Planning" },
      { phase: "Design", weeks: "2-3", description: "UI/UX & Prototyping" },
      { phase: "Development", weeks: "4-8", description: "Core Development" },
      { phase: "Testing", weeks: "2-3", description: "QA & Optimization" },
      { phase: "Launch", weeks: "1", description: "Deployment & Go-Live" },
      { phase: "Support", weeks: "Ongoing", description: "Maintenance & Growth" }
    ],
    
    deliverables: [
      "Fully functional custom software",
      "Complete source code ownership",
      "Technical documentation",
      "User manuals and guides",
      "Admin dashboard",
      "API documentation",
      "Database schema",
      "Deployment guide",
      "3 months free support"
    ],
    
    pricing: {
      starter: {
        name: "MVP Launch",
        price: "₹2L – ₹5L",
        description: "Perfect for testing your idea",
        features: [
          "Core features only",
          "Basic UI/UX design",
          "Up to 3 user roles",
          "Basic reporting",
          "3 months support"
        ]
      },
      professional: {
        name: "Business Solution",
        price: "₹5L – ₹12L",
        description: "Complete solution for growing businesses",
        features: [
          "All core + advanced features",
          "Custom UI/UX design",
          "Advanced security",
          "API integrations",
          "Analytics dashboard",
          "6 months priority support",
          "Team training"
        ],
        popular: true
      },
      enterprise: {
        name: "Enterprise Platform",
        price: "₹12L – ₹25L",
        description: "Scalable solution for large operations",
        features: [
          "Custom feature development",
          "Multiple integrations",
          "Enterprise security",
          "Dedicated support",
          "SLA guarantees",
          "Performance optimization",
          "24/7 emergency support"
        ]
      }
    },
    
    faq: [
      {
        question: "How long does custom software development take?",
        answer: "Typically 3-4 months for a complete solution, depending on complexity. We break it into phases so you can see progress throughout."
      },
      {
        question: "Do I own the source code?",
        answer: "Yes! You have complete ownership of all code, designs, and intellectual property we create for you."
      },
      {
        question: "Can it integrate with my existing tools?",
        answer: "Absolutely. We build APIs and integrations to connect with your current software stack."
      },
      {
        question: "What if I need changes after launch?",
        answer: "We provide ongoing support and can continue to enhance your software as your business grows."
      }
    ]
  },

  "web-development": {
    title: "Website & Web Applications",
    shortDesc: "Modern, responsive websites and powerful web applications that engage users and drive business growth.",
    icon: Globe,
    color: "from-purple-600 to-pink-600",
    
    overview: `Your website is often the first impression customers have of your business. We build stunning, fast-loading websites that not only look beautiful but also convert visitors into customers. From simple business websites to complex web applications, we use the latest technologies to create exceptional digital experiences.

    As a new startup, we bring fresh design perspectives and modern development practices. No outdated templates—just custom-built websites that reflect your unique brand identity.`,
    
    features: [
      {
        title: "Business Websites",
        desc: "Professional websites that establish your online presence.",
        icon: Building2
      },
      {
        title: "Corporate Portals",
        desc: "Internal platforms for employee communication and resources.",
        icon: Users
      },
      {
        title: "Landing Pages",
        desc: "High-converting pages for marketing campaigns.",
        icon: Target
      },
      {
        title: "Blog & News Sites",
        desc: "Content platforms with easy publishing tools.",
        icon: BookOpen
      },
      {
        title: "Membership Sites",
        desc: "Gated content with user subscriptions.",
        icon: Lock
      },
      {
        title: "Web Applications",
        desc: "Complex browser-based software solutions.",
        icon: Code
      }
    ],
    
    process: [
      {
        phase: "Strategy & Planning",
        duration: "1 Week",
        tasks: [
          "Business goals analysis",
          "Target audience research",
          "Competitor analysis",
          "Sitemap and information architecture",
          "Content strategy development",
          "Technical requirements gathering"
        ],
        icon: Target,
        color: "from-purple-500 to-pink-500"
      },
      {
        phase: "UI/UX Design",
        duration: "2-3 Weeks",
        tasks: [
          "Wireframing and mockups",
          "Visual design and branding",
          "Interactive prototyping",
          "User experience testing",
          "Mobile responsive design",
          "Design approval and sign-off"
        ],
        icon: PenTool,
        color: "from-indigo-500 to-blue-500"
      },
      {
        phase: "Development",
        duration: "4-6 Weeks",
        tasks: [
          "Frontend development",
          "Backend integration (if needed)",
          "CMS implementation",
          "E-commerce functionality",
          "Form and contact systems",
          "Analytics setup"
        ],
        icon: Code,
        color: "from-green-500 to-emerald-500"
      },
      {
        phase: "Testing",
        duration: "1-2 Weeks",
        tasks: [
          "Cross-browser testing",
          "Mobile device testing",
          "Performance optimization",
          "Security checks",
          "Content review",
          "User testing"
        ],
        icon: Shield,
        color: "from-yellow-500 to-orange-500"
      },
      {
        phase: "Launch",
        duration: "1 Week",
        tasks: [
          "Domain and hosting setup",
          "Final deployment",
          "DNS configuration",
          "SSL installation",
          "Search engine submission",
          "Launch announcement"
        ],
        icon: Rocket,
        color: "from-red-500 to-pink-500"
      }
    ],
    
    benefits: [
      {
        title: "Modern Design",
        desc: "Beautiful, contemporary designs that reflect your brand identity.",
        icon: PenTool
      },
      {
        title: "Lightning Fast",
        desc: "Optimized for speed to keep users engaged and improve SEO.",
        icon: Zap
      },
      {
        title: "Mobile Responsive",
        desc: "Perfect experience on all devices - desktop, tablet, and mobile.",
        icon: Smartphone
      },
      {
        title: "SEO Optimized",
        desc: "Built with search engines in mind to help customers find you.",
        icon: BarChart
      },
      {
        title: "Easy to Update",
        desc: "Content management system so you can make changes yourself.",
        icon: Settings
      },
      {
        title: "Scalable",
        desc: "Grows with your business, from brochure site to web app.",
        icon: Layers
      }
    ],
    
    technologies: [
      { name: "React/Next.js", icon: "⚛️", category: "Frontend", description: "Modern web frameworks" },
      { name: "Vue.js", icon: "🔷", category: "Frontend", description: "Progressive JavaScript" },
      { name: "Tailwind CSS", icon: "🎨", category: "Styling", description: "Beautiful styling" },
      { name: "Node.js", icon: "🟢", category: "Backend", description: "Server-side logic" },
      { name: "WordPress", icon: "🔵", category: "CMS", description: "Content management" },
      { name: "Vercel/Netlify", icon: "▲", category: "Hosting", description: "Fast hosting" }
    ],
    
    roadmap: [
      { phase: "Strategy", weeks: "1", description: "Planning & Requirements" },
      { phase: "Design", weeks: "2-3", description: "UI/UX Design" },
      { phase: "Development", weeks: "4-6", description: "Building your website" },
      { phase: "Testing", weeks: "1-2", description: "Quality Assurance" },
      { phase: "Launch", weeks: "1", description: "Go Live" }
    ],
    
    deliverables: [
      "Fully functional website",
      "Content management system",
      "Analytics dashboard",
      "SEO optimization",
      "Mobile responsive design",
      "Contact forms and integrations",
      "Training and documentation",
      "3 months support"
    ],
    
    pricing: {
      starter: {
        name: "Basic Website",
        price: "₹1L – ₹3L",
        description: "For small businesses",
        features: [
          "Up to 5 pages",
          "Responsive design",
          "Contact form",
          "Basic SEO",
          "3 months support"
        ]
      },
      professional: {
        name: "Business Website",
        price: "₹3L – ₹6L",
        description: "For growing companies",
        features: [
          "Up to 15 pages",
          "Custom design",
          "CMS integration",
          "Blog setup",
          "Advanced SEO",
          "6 months priority support"
        ],
        popular: true
      },
      enterprise: {
        name: "Web Application",
        price: "₹6L – ₹15L",
        description: "Complex web platforms",
        features: [
          "Custom features",
          "User accounts",
          "Database integration",
          "API development",
          "Advanced security",
          "Dedicated support"
        ]
      }
    },
    
    faq: [
      {
        question: "How long does it take to build a website?",
        answer: "A business website typically takes 8-12 weeks. Complex web applications may take 3-4 months."
      },
      {
        question: "Can I update the website myself?",
        answer: "Yes! We build with content management systems so you can easily update text, images, and content."
      },
      {
        question: "Will my website work on mobile phones?",
        answer: "Absolutely. Every website we build is fully responsive and looks great on all devices."
      }
    ]
  },

  "crm": {
    title: "CRM Development",
    shortDesc: "Custom customer relationship management systems tailored to your sales process and customer journey.",
    icon: Users,
    color: "from-green-600 to-emerald-600",
    
    overview: `Stop forcing your team to adapt to generic CRM software. We build custom CRM systems that match exactly how you work. Track leads, manage customer interactions, automate follow-ups, and close more deals with software designed for your specific business processes.

    As a new startup, we understand the importance of efficient customer management. We build CRMs that help you build relationships, not just store data.`,
    
    features: [
      {
        title: "Lead Management",
        desc: "Capture, track, and nurture leads through your sales pipeline.",
        icon: Target
      },
      {
        title: "Contact Tracking",
        desc: "Store all customer interactions in one place.",
        icon: Users
      },
      {
        title: "Sales Pipeline",
        desc: "Visualize deals at every stage of your sales process.",
        icon: GitBranch
      },
      {
        title: "Task Automation",
        desc: "Automate follow-ups, emails, and reminders.",
        icon: Settings
      },
      {
        title: "Email Integration",
        desc: "Connect with Gmail, Outlook, and email marketing tools.",
        icon: MessageCircle
      },
      {
        title: "Analytics Dashboard",
        desc: "Real-time reports on team performance and conversion rates.",
        icon: BarChart
      }
    ],
    
    process: [
      {
        phase: "Sales Process Analysis",
        duration: "1-2 Weeks",
        tasks: [
          "Current workflow analysis",
          "Sales team interviews",
          "Lead tracking requirements",
          "Customer journey mapping",
          "Reporting needs assessment",
          "Integration requirements"
        ],
        icon: Target,
        color: "from-green-500 to-emerald-500"
      },
      {
        phase: "CRM Design",
        duration: "2 Weeks",
        tasks: [
          "Database schema design",
          "User interface wireframes",
          "Dashboard mockups",
          "Report and analytics design",
          "Mobile access planning",
          "User role definition"
        ],
        icon: PenTool,
        color: "from-teal-500 to-cyan-500"
      },
      {
        phase: "Development",
        duration: "4-6 Weeks",
        tasks: [
          "Contact and lead management",
          "Task and calendar system",
          "Email integration",
          "Automation workflows",
          "Report generation",
          "Mobile app (if needed)"
        ],
        icon: Code,
        color: "from-blue-500 to-indigo-500"
      },
      {
        phase: "Data Migration",
        duration: "1-2 Weeks",
        tasks: [
          "Export data from old systems",
          "Data cleaning and formatting",
          "Import to new CRM",
          "Data verification",
          "Historical record preservation",
          "Backup creation"
        ],
        icon: Database,
        color: "from-purple-500 to-pink-500"
      },
      {
        phase: "Training & Launch",
        duration: "1-2 Weeks",
        tasks: [
          "Team training sessions",
          "User manual creation",
          "Pilot testing with key users",
          "Feedback collection",
          "Final adjustments",
          "Full rollout"
        ],
        icon: Users,
        color: "from-orange-500 to-red-500"
      }
    ],
    
    benefits: [
      {
        title: "Matches Your Workflow",
        desc: "CRM that adapts to your process, not the other way around.",
        icon: GitBranch
      },
      {
        title: "Automated Follow-ups",
        desc: "Never miss a lead with automated emails and task reminders.",
        icon: Clock
      },
      {
        title: "Sales Analytics",
        desc: "Real-time reports on team performance and conversion rates.",
        icon: BarChart
      },
      {
        title: "Team Collaboration",
        desc: "Share notes, assign tasks, and work together seamlessly.",
        icon: Users
      },
      {
        title: "Mobile Access",
        desc: "Access your CRM on the go with mobile apps.",
        icon: Smartphone
      },
      {
        title: "Data Security",
        desc: "Your customer data is safe with enterprise-grade security.",
        icon: Shield
      }
    ],
    
    technologies: [
      { name: "React/Next.js", icon: "⚛️", category: "Frontend", description: "Modern interface" },
      { name: "Node.js/Django", icon: "🟢", category: "Backend", description: "Powerful backend" },
      { name: "PostgreSQL", icon: "🐘", category: "Database", description: "Data storage" },
      { name: "Redis", icon: "⚡", category: "Caching", description: "Fast performance" },
      { name: "Elasticsearch", icon: "🔍", category: "Search", description: "Advanced search" },
      { name: "SendGrid/Mailgun", icon: "📧", category: "Email", description: "Email integration" }
    ],
    
    roadmap: [
      { phase: "Analysis", weeks: "1-2", description: "Understanding your sales process" },
      { phase: "Design", weeks: "2", description: "CRM interface design" },
      { phase: "Development", weeks: "4-6", description: "Building your CRM" },
      { phase: "Migration", weeks: "1-2", description: "Moving your data" },
      { phase: "Training", weeks: "1-2", description: "Team onboarding" }
    ],
    
    deliverables: [
      "Fully functional CRM",
      "Mobile access",
      "Data migration complete",
      "Email integration",
      "Analytics dashboard",
      "Team training",
      "User documentation",
      "6 months support"
    ],
    
    pricing: {
      starter: {
        name: "Basic CRM",
        price: "₹2L – ₹5L",
        description: "For small sales teams",
        features: [
          "Up to 10 users",
          "Lead management",
          "Contact tracking",
          "Basic reporting",
          "3 months support"
        ]
      },
      professional: {
        name: "Business CRM",
        price: "₹5L – ₹12L",
        description: "For growing teams",
        features: [
          "Unlimited users",
          "Sales pipeline",
          "Email integration",
          "Task automation",
          "Advanced reporting",
          "6 months priority support",
          "Team training"
        ],
        popular: true
      },
      enterprise: {
        name: "Enterprise CRM",
        price: "₹12L – ₹25L",
        description: "For large organizations",
        features: [
          "Custom features",
          "Multiple integrations",
          "Advanced security",
          "Dedicated support",
          "API access",
          "SLA guarantees"
        ]
      }
    },
    
    faq: [
      {
        question: "Can you migrate data from my existing CRM?",
        answer: "Yes! We can import all your contacts, deals, and history from Excel, Google Sheets, or other CRM systems."
      },
      {
        question: "How many users can use the CRM?",
        answer: "Unlimited users. We build scalable systems that grow with your team."
      },
      {
        question: "Can I access it on my phone?",
        answer: "Yes, we build responsive web apps that work perfectly on mobile, or native mobile apps if needed."
      }
    ]
  },

  "ecommerce": {
    title: "E-Commerce Solutions",
    shortDesc: "Custom online stores and marketplace platforms that drive sales and provide exceptional shopping experiences.",
    icon: ShoppingCart,
    color: "from-orange-500 to-red-500",
    
    overview: `Stand out from competitors with a custom e-commerce platform designed for your products and customers. Unlike generic templates, our solutions offer complete flexibility in design, checkout flow, and business logic. From small boutiques to large marketplaces, we build online stores that convert.

    As a new startup, we understand the importance of standing out. We build unique e-commerce experiences that reflect your brand and delight your customers.`,
    
    features: [
      {
        title: "Online Stores",
        desc: "Beautiful product catalogs with easy checkout.",
        icon: ShoppingCart
      },
      {
        title: "Product Catalogs",
        desc: "Organize products with categories, filters, and search.",
        icon: Layers
      },
      {
        title: "Shopping Cart",
        desc: "Smooth cart experience that reduces abandonment.",
        icon: Box
      },
      {
        title: "Payment Integration",
        desc: "Connect with Razorpay, Stripe, PayPal, and more.",
        icon: Zap
      },
      {
        title: "Inventory Management",
        desc: "Track stock, manage variants, and automate reorders.",
        icon: Database
      },
      {
        title: "Order Processing",
        desc: "Streamlined order management and fulfillment.",
        icon: Settings
      }
    ],
    
    process: [
      {
        phase: "Product Strategy",
        duration: "1-2 Weeks",
        tasks: [
          "Product catalog planning",
          "Target audience analysis",
          "Competitor research",
          "Feature prioritization",
          "Platform requirements"
        ],
        icon: Target,
        color: "from-orange-500 to-red-500"
      },
      {
        phase: "UX/UI Design",
        duration: "2-3 Weeks",
        tasks: [
          "Product page design",
          "Category page layout",
          "Search and filter design",
          "Cart and checkout flow",
          "Mobile shopping experience"
        ],
        icon: PenTool,
        color: "from-red-500 to-pink-500"
      },
      {
        phase: "Development",
        duration: "6-8 Weeks",
        tasks: [
          "Product catalog system",
          "Shopping cart functionality",
          "Payment gateway integration",
          "Inventory management",
          "Order processing system",
          "Customer accounts"
        ],
        icon: Code,
        color: "from-purple-500 to-indigo-500"
      },
      {
        phase: "Payment Integration",
        duration: "1-2 Weeks",
        tasks: [
          "Razorpay/Stripe integration",
          "Payment gateway setup",
          "Security compliance",
          "Tax calculation",
          "Invoice generation",
          "Refund processing"
        ],
        icon: Shield,
        color: "from-green-500 to-emerald-500"
      },
      {
        phase: "Testing & Launch",
        duration: "2 Weeks",
        tasks: [
          "Test transactions",
          "Load testing",
          "Security audit",
          "Product data verification",
          "Staff training",
          "Go-live"
        ],
        icon: Rocket,
        color: "from-yellow-500 to-orange-500"
      }
    ],
    
    benefits: [
      {
        title: "Higher Conversion",
        desc: "Optimized checkout flows that reduce cart abandonment.",
        icon: Target
      },
      {
        title: "Mobile-First",
        desc: "Perfect shopping experience on all devices.",
        icon: Smartphone
      },
      {
        title: "Scalable Infrastructure",
        desc: "Handles traffic spikes during sales and festivals.",
        icon: Cloud
      },
      {
        title: "SEO Optimized",
        desc: "Built to rank high in search results.",
        icon: BarChart
      },
      {
        title: "Easy Management",
        desc: "Intuitive admin panel to manage products and orders.",
        icon: Settings
      },
      {
        title: "Secure Payments",
        desc: "PCI-compliant payment processing.",
        icon: Shield
      }
    ],
    
    technologies: [
      { name: "Next.js/React", icon: "⚛️", category: "Frontend", description: "Fast frontend" },
      { name: "Node.js/Python", icon: "🟢", category: "Backend", description: "Powerful backend" },
      { name: "PostgreSQL", icon: "🐘", category: "Database", description: "Product database" },
      { name: "Redis", icon: "⚡", category: "Caching", description: "Session management" },
      { name: "Elasticsearch", icon: "🔍", category: "Search", description: "Product search" },
      { name: "Stripe/Razorpay", icon: "💳", category: "Payments", description: "Payment processing" }
    ],
    
    roadmap: [
      { phase: "Strategy", weeks: "1-2", description: "Product and feature planning" },
      { phase: "Design", weeks: "2-3", description: "Beautiful store design" },
      { phase: "Development", weeks: "6-8", description: "Building your e-commerce platform" },
      { phase: "Integration", weeks: "1-2", description: "Payment and shipping setup" },
      { phase: "Launch", weeks: "2", description: "Testing and going live" }
    ],
    
    deliverables: [
      "Live e-commerce website",
      "Product management system",
      "Payment gateway integration",
      "Inventory management",
      "Order processing dashboard",
      "Customer accounts",
      "Marketing tools",
      "3 months support"
    ],
    
    pricing: {
      starter: {
        name: "Basic Store",
        price: "₹2L – ₹5L",
        description: "For small businesses starting out",
        features: [
          "Up to 500 products",
          "Basic payment integration",
          "Inventory management",
          "Order processing",
          "3 months support"
        ]
      },
      professional: {
        name: "Professional Store",
        price: "₹5L – ₹12L",
        description: "For growing businesses",
        features: [
          "Unlimited products",
          "Multiple payment gateways",
          "Advanced inventory",
          "Marketing tools",
          "Analytics dashboard",
          "6 months priority support"
        ],
        popular: true
      },
      enterprise: {
        name: "Enterprise Platform",
        price: "₹12L – ₹25L",
        description: "For large-scale operations",
        features: [
          "Multi-vendor support",
          "Custom features",
          "ERP integration",
          "Dedicated support",
          "Performance optimization",
          "SLA guarantees"
        ]
      }
    },
    
    faq: [
      {
        question: "Which payment gateways do you integrate?",
        answer: "We integrate with Razorpay, Stripe, PayPal, and all major Indian and international payment providers."
      },
      {
        question: "Can I manage products and inventory myself?",
        answer: "Yes! You get a complete admin dashboard to add products, manage stock, and process orders."
      },
      {
        question: "Is it SEO friendly?",
        answer: "Absolutely. We build with SEO best practices so your products appear in Google searches."
      }
    ]
  },

  "mobile": {
    title: "Mobile App Development",
    shortDesc: "Native and cross-platform mobile apps that provide exceptional user experiences on iOS and Android.",
    icon: Smartphone,
    color: "from-indigo-600 to-blue-600",
    
    overview: `Your customers are on their phones. Reach them with beautiful, fast, and intuitive mobile apps. Whether you need a customer-facing app or an internal tool for your team, we build mobile experiences that users love. From React Native to native iOS/Android, we choose the right technology for your needs.

    As a new startup, we bring fresh perspectives on mobile design and development. We build apps that users actually want to keep on their phones.`,
    
    features: [
      {
        title: "iOS Apps",
        desc: "Native apps for iPhone and iPad with Swift.",
        icon: Smartphone
      },
      {
        title: "Android Apps",
        desc: "Native Android apps with Kotlin/Java.",
        icon: Smartphone
      },
      {
        title: "Cross-Platform Apps",
        desc: "One codebase for both iOS and Android with React Native.",
        icon: Code
      },
      {
        title: "Mobile-Friendly Design",
        desc: "Beautiful interfaces optimized for touch.",
        icon: PenTool
      },
      {
        title: "Push Notifications",
        desc: "Engage users with timely updates and offers.",
        icon: MessageCircle
      },
      {
        title: "Offline Support",
        desc: "Work without internet and sync when connected.",
        icon: Database
      }
    ],
    
    process: [
      {
        phase: "App Strategy",
        duration: "1-2 Weeks",
        tasks: [
          "Platform selection (iOS/Android/both)",
          "Feature prioritization",
          "User persona development",
          "Competitor analysis",
          "Technical feasibility",
          "Monetization strategy"
        ],
        icon: Target,
        color: "from-indigo-500 to-blue-500"
      },
      {
        phase: "UI/UX Design",
        duration: "2-3 Weeks",
        tasks: [
          "App wireframing",
          "Screen flow design",
          "Interactive prototype",
          "Platform-specific guidelines",
          "Design system creation",
          "User testing"
        ],
        icon: PenTool,
        color: "from-purple-500 to-pink-500"
      },
      {
        phase: "Development",
        duration: "6-10 Weeks",
        tasks: [
          "Frontend development",
          "API integration",
          "Database setup",
          "Authentication system",
          "Push notifications",
          "Offline functionality"
        ],
        icon: Code,
        color: "from-green-500 to-emerald-500"
      },
      {
        phase: "Testing",
        duration: "2-3 Weeks",
        tasks: [
          "Device compatibility testing",
          "Performance optimization",
          "Battery usage analysis",
          "Security testing",
          "User acceptance testing",
          "Beta testing"
        ],
        icon: Shield,
        color: "from-yellow-500 to-orange-500"
      },
      {
        phase: "App Store Launch",
        duration: "1-2 Weeks",
        tasks: [
          "App Store account setup",
          "Screenshots and previews",
          "App description writing",
          "Keyword optimization",
          "Submission process",
          "Launch marketing"
        ],
        icon: Rocket,
        color: "from-red-500 to-pink-500"
      }
    ],
    
    benefits: [
      {
        title: "Native Performance",
        desc: "Fast, smooth apps that feel natural on each platform.",
        icon: Zap
      },
      {
        title: "Beautiful UI",
        desc: "Stunning designs that follow platform guidelines.",
        icon: PenTool
      },
      {
        title: "Offline Support",
        desc: "Work without internet and sync when connected.",
        icon: Cloud
      },
      {
        title: "Push Notifications",
        desc: "Engage users with timely updates and offers.",
        icon: MessageCircle
      },
      {
        title: "App Store Ready",
        desc: "We handle the entire app store submission process.",
        icon: Award
      },
      {
        title: "Analytics Integration",
        desc: "Track user behavior and app performance.",
        icon: BarChart
      }
    ],
    
    technologies: [
      { name: "React Native", icon: "⚛️", category: "Cross-platform", description: "One codebase for both platforms" },
      { name: "Flutter", icon: "🔷", category: "Cross-platform", description: "Beautiful native apps" },
      { name: "Swift", icon: "🍎", category: "iOS", description: "Native iOS development" },
      { name: "Kotlin", icon: "🤖", category: "Android", description: "Native Android development" },
      { name: "Firebase", icon: "🔥", category: "Backend", description: "Backend services" },
      { name: "Node.js", icon: "🟢", category: "Backend", description: "Custom APIs" }
    ],
    
    roadmap: [
      { phase: "Strategy", weeks: "1-2", description: "Planning and feature definition" },
      { phase: "Design", weeks: "2-3", description: "Beautiful app design" },
      { phase: "Development", weeks: "6-10", description: "Building your app" },
      { phase: "Testing", weeks: "2-3", description: "Quality assurance" },
      { phase: "Launch", weeks: "1-2", description: "App store submission" }
    ],
    
    deliverables: [
      "iOS app (App Store ready)",
      "Android app (Play Store ready)",
      "Admin dashboard",
      "API documentation",
      "Source code",
      "App store assets",
      "Analytics integration",
      "3 months support"
    ],
    
    pricing: {
      starter: {
        name: "MVP App",
        price: "₹3L – ₹7L",
        description: "Test your app idea",
        features: [
          "Single platform (iOS or Android)",
          "Core features only",
          "Basic UI design",
          "API integration",
          "3 months support"
        ]
      },
      professional: {
        name: "Full App",
        price: "₹7L – ₹15L",
        description: "Complete mobile solution",
        features: [
          "Both iOS and Android",
          "All planned features",
          "Custom UI/UX design",
          "Push notifications",
          "Analytics",
          "6 months priority support",
          "App store submission"
        ],
        popular: true
      },
      enterprise: {
        name: "App + Backend",
        price: "₹15L – ₹30L",
        description: "Full-stack mobile platform",
        features: [
          "Custom backend development",
          "Advanced features",
          "Real-time sync",
          "Offline support",
          "Dedicated support",
          "SLA guarantees"
        ]
      }
    },
    
    faq: [
      {
        question: "Should I build for iOS, Android, or both?",
        answer: "We'll help you decide based on your target audience. Most businesses start with both using cross-platform technology."
      },
      {
        question: "How long does it take to publish on app stores?",
        answer: "Development takes 3-5 months, plus 1-2 weeks for app store review and approval."
      },
      {
        question: "Can I update the app myself?",
        answer: "Yes! We build admin panels so you can update content, but code updates require our help."
      }
    ]
  },

  "api": {
    title: "API & Integration",
    shortDesc: "Connect your systems with custom APIs and seamless third-party integrations.",
    icon: GitBranch,
    color: "from-yellow-500 to-amber-500",
    
    overview: `Make your software talk to each other. We build robust APIs that connect your applications, automate data flow between systems, and integrate with third-party services. From payment gateways to CRMs, we ensure all your tools work together seamlessly.

    As a new startup, we understand the importance of efficiency. We build integrations that eliminate manual data entry and streamline your operations.`,
    
    features: [
      {
        title: "RESTful APIs",
        desc: "Well-designed APIs that are easy to use and maintain.",
        icon: GitBranch
      },
      {
        title: "Third-Party Integration",
        desc: "Connect with popular services and platforms.",
        icon: Globe
      },
      {
        title: "Payment Gateways",
        desc: "Integrate Razorpay, Stripe, PayPal, and more.",
        icon: Zap
      },
      {
        title: "CRM Integration",
        desc: "Connect your CRM with other business tools.",
        icon: Users
      },
      {
        title: "ERP Integration",
        desc: "Sync data between ERP and other systems.",
        icon: Database
      },
      {
        title: "Data Synchronization",
        desc: "Keep data consistent across all your platforms.",
        icon: Layers
      }
    ],
    
    process: [
      {
        phase: "Integration Analysis",
        duration: "1 Week",
        tasks: [
          "Current system audit",
          "Integration points identification",
          "Data flow mapping",
          "Security requirements",
          "Performance needs",
          "API strategy"
        ],
        icon: Target,
        color: "from-yellow-500 to-amber-500"
      },
      {
        phase: "API Design",
        duration: "1-2 Weeks",
        tasks: [
          "RESTful/GraphQL design",
          "Endpoint definition",
          "Data structure design",
          "Authentication method",
          "Rate limiting plan",
          "Documentation planning"
        ],
        icon: PenTool,
        color: "from-orange-500 to-red-500"
      },
      {
        phase: "Development",
        duration: "3-5 Weeks",
        tasks: [
          "API endpoint development",
          "Database integration",
          "Third-party API connection",
          "Authentication implementation",
          "Error handling",
          "Logging and monitoring"
        ],
        icon: Code,
        color: "from-green-500 to-emerald-500"
      },
      {
        phase: "Testing",
        duration: "1-2 Weeks",
        tasks: [
          "Unit testing",
          "Integration testing",
          "Load testing",
          "Security testing",
          "Documentation testing",
          "Bug fixes"
        ],
        icon: Shield,
        color: "from-blue-500 to-indigo-500"
      },
      {
        phase: "Deployment",
        duration: "1 Week",
        tasks: [
          "API gateway setup",
          "Server configuration",
          "SSL/TLS setup",
          "Monitoring tools",
          "Documentation hosting",
          "Go-live support"
        ],
        icon: Rocket,
        color: "from-purple-500 to-pink-500"
      }
    ],
    
    benefits: [
      {
        title: "Seamless Integration",
        desc: "Connect all your business tools into one workflow.",
        icon: GitBranch
      },
      {
        title: "Automation",
        desc: "Eliminate manual data entry between systems.",
        icon: Settings
      },
      {
        title: "Scalable APIs",
        desc: "Handle millions of requests as you grow.",
        icon: Server
      },
      {
        title: "Security First",
        desc: "Enterprise-grade authentication and encryption.",
        icon: Lock
      },
      {
        title: "Well Documented",
        desc: "Clear documentation for your development team.",
        icon: BookOpen
      },
      {
        title: "Real-time Sync",
        desc: "Keep data consistent across all platforms.",
        icon: Zap
      }
    ],
    
    technologies: [
      { name: "Node.js", icon: "🟢", category: "Backend", description: "Fast API development" },
      { name: "Python/FastAPI", icon: "🐍", category: "Backend", description: "High-performance APIs" },
      { name: "GraphQL", icon: "◼️", category: "API", description: "Flexible queries" },
      { name: "PostgreSQL", icon: "🐘", category: "Database", description: "Data storage" },
      { name: "Redis", icon: "⚡", category: "Caching", description: "Caching layer" },
      { name: "JWT/OAuth", icon: "🔐", category: "Security", description: "Authentication" }
    ],
    
    roadmap: [
      { phase: "Analysis", weeks: "1", description: "Understanding your integration needs" },
      { phase: "Design", weeks: "1-2", description: "API architecture" },
      { phase: "Development", weeks: "3-5", description: "Building your APIs" },
      { phase: "Testing", weeks: "1-2", description: "Quality assurance" },
      { phase: "Deploy", weeks: "1", description: "Go live" }
    ],
    
    deliverables: [
      "Fully documented APIs",
      "API test suite",
      "Integration code",
      "Authentication system",
      "Monitoring dashboard",
      "Developer documentation",
      "Sample code",
      "Postman collections",
      "3 months support"
    ],
    
    pricing: {
      starter: {
        name: "Basic API",
        price: "₹1L – ₹3L",
        description: "Simple integrations",
        features: [
          "Up to 10 endpoints",
          "Basic authentication",
          "API documentation",
          "3 months support"
        ]
      },
      professional: {
        name: "Professional API",
        price: "₹3L – ₹7L",
        description: "Complex integrations",
        features: [
          "Unlimited endpoints",
          "Advanced security",
          "Rate limiting",
          "Monitoring dashboard",
          "6 months priority support",
          "Developer support"
        ],
        popular: true
      },
      enterprise: {
        name: "Enterprise Integration",
        price: "₹7L – ₹15L",
        description: "Large-scale systems",
        features: [
          "Multiple integrations",
          "Real-time sync",
          "Enterprise security",
          "Dedicated support",
          "SLA guarantees",
          "Performance optimization"
        ]
      }
    },
    
    faq: [
      {
        question: "What's the difference between REST and GraphQL?",
        answer: "We'll recommend the best approach for your needs. REST is great for simple integrations, GraphQL for complex data requirements."
      },
      {
        question: "How do you ensure API security?",
        answer: "We implement JWT tokens, API keys, rate limiting, and SSL encryption. All APIs are security tested."
      },
      {
        question: "Can you integrate with [specific service]?",
        answer: "Most likely yes! We've integrated with payment gateways, CRMs, ERPs, and marketing tools."
      }
    ]
  }
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData[slug];
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="pt-32 text-center min-h-screen">
        <h1 className="text-3xl mb-4">Service not found</h1>
        <Link to="/services" className="text-blue-600 hover:underline">
          View All Services
        </Link>
      </div>
    );
  }

  const IconComponent = service.icon;

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "process", label: "Process" },
    { id: "benefits", label: "Benefits" },
    { id: "pricing", label: "Pricing" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <main className="pt-24 bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className={`bg-gradient-to-r ${service.color} text-white py-20`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur">
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold">{service.title}</h1>
          </div>
          <p className="text-xl max-w-3xl text-white/90 leading-relaxed">
            {service.shortDesc}
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Discuss Your Project <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TAB NAVIGATION */}
      <section className="border-b sticky top-20 bg-white z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 font-medium transition border-b-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? `border-${service.color.split(' ')[0].replace('from-', '')} text-gray-900`
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW TAB */}
      {activeTab === "overview" && (
        <>
          {/* Detailed Overview */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8">Overview</h2>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                  {service.overview}
                </p>
              </div>
            </div>
          </section>

          {/* Key Features Preview */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                      <feature.icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quick Process */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-12">Quick Process Overview</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {service.process.slice(0, 3).map((step, index) => (
                  <div key={index} className="text-center p-6">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.phase}</h3>
                    <p className="text-sm text-gray-500">{step.duration}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <button
                  onClick={() => setActiveTab("process")}
                  className="text-blue-600 font-semibold inline-flex items-center hover:gap-2 transition-all"
                >
                  View Full Process <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* FEATURES TAB */}
      {activeTab === "features" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Our Features</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Comprehensive capabilities tailored to your needs
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROCESS TAB */}
      {activeTab === "process" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Our Development Process</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              A transparent, collaborative approach from idea to launch
            </p>

            <div className="space-y-8">
              {service.process.map((step, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                  <div className="flex flex-wrap gap-6 items-start">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-2xl font-semibold">{step.phase}</h3>
                        <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                          {step.duration}
                        </span>
                      </div>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {step.tasks.map((task, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline Visualization */}
            <div className={`mt-16 bg-gradient-to-r ${service.color} text-white p-8 rounded-2xl`}>
              <h3 className="text-2xl font-bold mb-6">Project Timeline</h3>
              <div className="grid md:grid-cols-6 gap-4">
                {service.roadmap?.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold mb-2">{item.weeks}</div>
                    <div className="text-lg font-semibold mb-1">{item.phase}</div>
                    <div className="text-sm text-white/80">{item.description}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-white/90">Estimated Timeline: <span className="font-bold">{service.process.reduce((total, step) => {
                  const weeks = step.duration.match(/\d+/g);
                  return total + (weeks ? parseInt(weeks[0]) : 0);
                }, 0)}-{service.process.reduce((total, step) => {
                  const weeks = step.duration.match(/\d+/g);
                  return total + (weeks && weeks[1] ? parseInt(weeks[1]) : (weeks ? parseInt(weeks[0]) : 0));
                }, 0)} Weeks</span></p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* BENEFITS TAB */}
      {activeTab === "benefits" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              What you gain by partnering with us
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                    <benefit.icon className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>

            {/* Deliverables */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">What You'll Receive</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {service.deliverables.map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200 p-4 rounded-lg text-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto mb-2" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PRICING TAB */}
      {activeTab === "pricing" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Investment Options</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Flexible engagement models tailored to your budget and requirements
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(service.pricing).map(([key, plan]) => (
                <div
                  key={key}
                  className={`relative bg-white rounded-2xl p-8 ${
                    plan.popular ? 'border-2 border-blue-600 shadow-xl scale-105' : 'border border-gray-200 shadow-lg'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-8 bg-blue-600 text-white px-4 py-1 text-sm rounded-b-lg">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-blue-600 mb-6">{plan.price}</div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block text-center py-3 rounded-lg font-semibold transition ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center text-gray-500 bg-gray-50 p-6 rounded-xl">
              <p className="text-lg">Need a custom solution? We'll create a package tailored to your specific requirements.</p>
              <Link to="/contact" className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium">
                Schedule a Free Consultation →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ TAB */}
      {activeTab === "faq" && service.faq && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {service.faq.map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OUR COMMITMENT */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            As a new startup ourselves, we understand the importance of building trust and delivering value. 
            We're not just vendors – we're your technology partners. Your success is our success, and we put 
            everything into making your project a success.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Every line of code we write, every design we create, and every decision we make is focused on 
            helping you achieve your business goals. Let's build something amazing together.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={`bg-gradient-to-r ${service.color} text-white py-20`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-10">
            Let's discuss your {service.title} project and see how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all"
          >
            Start the Conversation <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <p className="text-sm text-white/80 mt-6">
            ✨ First client? Ask about our special startup rates
          </p>
        </div>
      </section>
    </main>
  );
}