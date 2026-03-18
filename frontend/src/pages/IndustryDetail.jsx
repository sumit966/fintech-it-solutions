import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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
  GraduationCap,
  Truck,
  Home,
  BarChart,
  Layers,
  GitBranch,
  Settings,
  Rocket,
  Award,
  Briefcase
} from "lucide-react";

const industriesData = {
  fintech: {
    title: "Fintech & Banking",
    icon: Building2,
    shortDesc: "Build secure, scalable financial software that users trust.",
    overview: "The financial technology sector is evolving rapidly. We help startups and established businesses build secure, compliant, and user-friendly fintech solutions that handle everything from payments to investments.",
    
    detailedOverview: `Fintech is reshaping how people save, spend, and invest money. From mobile banking apps to payment gateways, lending platforms to investment dashboards, the opportunities are endless.

    As a fresh technology partner, we bring modern approaches to financial software development. We understand the importance of security, compliance, and user trust. Our team builds solutions that not only meet regulatory requirements but also deliver exceptional user experiences that keep customers coming back.

    Whether you're launching a new fintech startup or modernizing existing financial services, we have the expertise to bring your vision to life.`,
    
    services: [
      {
        title: "Mobile Banking Applications",
        desc: "Feature-rich banking apps with account management, transactions, and biometric security.",
        icon: Smartphone
      },
      {
        title: "Payment Gateway Integration",
        desc: "Seamless integration with Razorpay, Stripe, PayPal, and other payment providers.",
        icon: Zap
      },
      {
        title: "Lending & Credit Platforms",
        desc: "End-to-end loan management systems with credit assessment and disbursement.",
        icon: Briefcase
      },
      {
        title: "Investment & Trading Apps",
        desc: "Platforms for stocks, mutual funds, and cryptocurrency trading with real-time data.",
        icon: BarChart
      },
      {
        title: "Personal Finance Management",
        desc: "Tools for budgeting, expense tracking, and financial planning.",
        icon: Target
      },
      {
        title: "RegTech & Compliance",
        desc: "Automated compliance solutions for KYC, AML, and regulatory reporting.",
        icon: Shield
      }
    ],
    
    process: [
      {
        phase: "Discovery & Planning",
        duration: "1-2 Weeks",
        tasks: [
          "Understanding your business model and target users",
          "Regulatory and compliance requirements analysis",
          "Feature prioritization and roadmap creation",
          "Technology stack selection",
          "Budget and timeline finalization"
        ],
        icon: Target,
        color: "from-blue-500 to-cyan-500"
      },
      {
        phase: "UX/UI Design",
        duration: "2-3 Weeks",
        tasks: [
          "User journey mapping for financial transactions",
          "Wireframing and interactive prototyping",
          "Security-first interface design",
          "Mobile-responsive designs",
          "User testing and feedback incorporation"
        ],
        icon: Layers,
        color: "from-purple-500 to-pink-500"
      },
      {
        phase: "Development",
        duration: "6-10 Weeks",
        tasks: [
          "Secure backend architecture development",
          "Frontend implementation",
          "Payment gateway integration",
          "Banking API connections",
          "Database design and optimization",
          "Security implementation"
        ],
        icon: Code,
        color: "from-green-500 to-emerald-500"
      },
      {
        phase: "Security & Compliance",
        duration: "2-3 Weeks",
        tasks: [
          "Security audit and penetration testing",
          "Compliance checklist validation",
          "Data encryption implementation",
          "GDPR/PCI-DSS compliance",
          "Secure authentication setup"
        ],
        icon: Shield,
        color: "from-yellow-500 to-orange-500"
      },
      {
        phase: "Testing & Launch",
        duration: "2-3 Weeks",
        tasks: [
          "Comprehensive QA testing",
          "Performance and load testing",
          "Beta testing with real users",
          "Deployment to production",
          "App store submission (if applicable)",
          "Go-live support"
        ],
        icon: Rocket,
        color: "from-red-500 to-pink-500"
      }
    ],
    
    benefits: [
      {
        title: "Bank-Grade Security",
        desc: "Enterprise-level security protocols to protect sensitive financial data.",
        icon: Shield
      },
      {
        title: "Regulatory Compliance",
        desc: "Built-in compliance with RBI, GDPR, PCI-DSS, and other regulations.",
        icon: CheckCircle
      },
      {
        title: "Scalable Architecture",
        desc: "Platforms that grow from hundreds to millions of users.",
        icon: Cloud
      },
      {
        title: "Fast Time-to-Market",
        desc: "Agile development approach to launch your product quickly.",
        icon: Zap
      },
      {
        title: "Seamless Integrations",
        desc: "Connect with banks, payment gateways, and financial APIs.",
        icon: GitBranch
      },
      {
        title: "User-Centric Design",
        desc: "Intuitive interfaces that make complex finance simple.",
        icon: Users
      }
    ],
    
    technologies: [
      { name: "React/Next.js", icon: "⚛️", category: "Frontend" },
      { name: "Node.js/Python", icon: "🟢", category: "Backend" },
      { name: "PostgreSQL", icon: "🐘", category: "Database" },
      { name: "Redis", icon: "⚡", category: "Caching" },
      { name: "AWS/Azure", icon: "☁️", category: "Cloud" },
      { name: "Docker/K8s", icon: "🐳", category: "DevOps" }
    ],
    
    roadmap: [
      { phase: "Discovery", weeks: "1-2", description: "Requirements & Planning" },
      { phase: "Design", weeks: "2-3", description: "UI/UX & Prototyping" },
      { phase: "Development", weeks: "6-10", description: "Core Development" },
      { phase: "Security", weeks: "2-3", description: "Compliance & Testing" },
      { phase: "Launch", weeks: "2-3", description: "Deployment & Go-Live" }
    ],
    
    deliverables: [
      "Fully functional fintech platform",
      "Complete source code ownership",
      "Technical documentation",
      "API documentation",
      "Admin dashboard",
      "User manuals",
      "Security audit report",
      "3 months free support"
    ],
    
    pricing: {
      starter: {
        name: "MVP Launch",
        price: "₹3L - ₹8L",
        description: "Perfect for testing your fintech idea",
        features: [
          "Core features only",
          "Basic security implementation",
          "Single payment gateway",
          "Admin dashboard",
          "3 months support"
        ]
      },
      professional: {
        name: "Full Platform",
        price: "₹8L - ₹18L",
        description: "Complete solution with all features",
        features: [
          "All core + advanced features",
          "Multi-payment gateway",
          "Advanced security",
          "Analytics dashboard",
          "6 months priority support",
          "Team training"
        ],
        popular: true
      },
      enterprise: {
        name: "Enterprise Suite",
        price: "₹18L - ₹35L",
        description: "Scalable platform for large operations",
        features: [
          "Custom feature development",
          "Multiple integrations",
          "Enterprise security",
          "Dedicated support",
          "SLA guarantees",
          "Performance optimization"
        ]
      }
    },
    
    faq: [
      {
        question: "How long does it take to build a fintech app?",
        answer: "A basic MVP can be ready in 3-4 months. A full-featured platform with all compliance and security typically takes 5-7 months."
      },
      {
        question: "Is it compliant with RBI guidelines?",
        answer: "Yes, we build with compliance in mind. Our solutions follow RBI, GDPR, and PCI-DSS guidelines."
      },
      {
        question: "Can you integrate with existing banking systems?",
        answer: "Absolutely! We build APIs that connect with core banking systems, payment gateways, and third-party financial services."
      }
    ]
  },

  ecommerce: {
    title: "E-Commerce & Retail",
    icon: ShoppingCart,
    shortDesc: "Build online stores that convert visitors into loyal customers.",
    overview: "Stand out in the competitive e-commerce landscape with custom solutions tailored to your products and customers.",
    
    detailedOverview: `E-commerce is more than just putting products online. It's about creating shopping experiences that delight customers and keep them coming back. We build online stores that load fast, look beautiful, and convert visitors into buyers.

    From small boutiques to large marketplaces, our solutions are designed for scale. We integrate with payment gateways, shipping providers, and inventory systems so you can focus on growing your business.

    Whether you're launching your first online store or expanding an existing brand, we're here to help.`,
    
    services: [
      {
        title: "Custom E-Commerce Websites",
        desc: "Unique online stores that reflect your brand identity.",
        icon: ShoppingCart
      },
      {
        title: "Multi-Vendor Marketplaces",
        desc: "Platforms where multiple sellers can list and sell products.",
        icon: Users
      },
      {
        title: "Inventory Management",
        desc: "Track stock, manage variants, and automate reorders.",
        icon: Layers
      },
      {
        title: "Payment Integration",
        desc: "Connect with Razorpay, Stripe, PayPal, and more.",
        icon: Zap
      },
      {
        title: "Mobile Shopping Apps",
        desc: "Native iOS and Android apps for your store.",
        icon: Smartphone
      },
      {
        title: "Analytics Dashboard",
        desc: "Real-time insights into sales, customers, and trends.",
        icon: BarChart
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
        icon: Layers,
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
        phase: "Integration",
        duration: "1-2 Weeks",
        tasks: [
          "Payment gateway setup",
          "Shipping provider integration",
          "Tax calculation",
          "Invoice generation",
          "Email/SMS notifications"
        ],
        icon: GitBranch,
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
    
    deliverables: [
      "Live e-commerce website",
      "Product management system",
      "Payment gateway integration",
      "Inventory management",
      "Order processing dashboard",
      "Customer accounts",
      "Analytics setup",
      "3 months support"
    ],
    
    pricing: {
      starter: {
        name: "Basic Store",
        price: "₹2L - ₹5L",
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
        price: "₹5L - ₹12L",
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
        price: "₹12L - ₹25L",
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
    }
  },

  saas: {
    title: "SaaS & Cloud Platforms",
    icon: Cloud,
    shortDesc: "Build scalable software platforms that grow with your users.",
    overview: "Turn your software idea into a scalable SaaS product with multi-tenant architecture and subscription billing.",
    
    detailedOverview: `Software-as-a-Service (SaaS) is the future of software delivery. We build platforms that handle everything from user onboarding to subscription management, allowing you to focus on your core product.

    Our SaaS solutions are designed for scale. Whether you're expecting your first 100 users or planning for millions, we build architectures that grow with you. Complete with analytics dashboards, user management, and robust billing systems.

    Launch with confidence knowing your platform is built on modern, scalable technology.`,
    
    services: [
      {
        title: "Multi-Tenant Architecture",
        desc: "One codebase serving multiple customers securely.",
        icon: Layers
      },
      {
        title: "Subscription Management",
        desc: "Flexible billing plans with automated invoicing.",
        icon: Settings
      },
      {
        title: "User Authentication",
        desc: "Secure login with SSO, 2FA, and role-based access.",
        icon: Shield
      },
      {
        title: "Analytics Dashboard",
        desc: "Real-time insights into usage and revenue.",
        icon: BarChart
      },
      {
        title: "API Development",
        desc: "RESTful APIs for integrations and extensions.",
        icon: GitBranch
      },
      {
        title: "Scalable Infrastructure",
        desc: "Cloud-native architecture that scales automatically.",
        icon: Cloud
      }
    ],
    
    process: [
      {
        phase: "Product Discovery",
        duration: "2-3 Weeks",
        tasks: [
          "Market research and validation",
          "Feature prioritization",
          "User persona development",
          "Competitive analysis",
          "Monetization strategy"
        ],
        icon: Target,
        color: "from-blue-500 to-cyan-500"
      },
      {
        phase: "Architecture Design",
        duration: "2-3 Weeks",
        tasks: [
          "Multi-tenant database design",
          "Scalability planning",
          "Security architecture",
          "API design",
          "Infrastructure planning"
        ],
        icon: Layers,
        color: "from-purple-500 to-pink-500"
      },
      {
        phase: "Development",
        duration: "8-12 Weeks",
        tasks: [
          "Core platform development",
          "User management system",
          "Subscription billing integration",
          "Analytics implementation",
          "API development",
          "Admin dashboard"
        ],
        icon: Code,
        color: "from-green-500 to-emerald-500"
      },
      {
        phase: "Testing & Security",
        duration: "2-3 Weeks",
        tasks: [
          "Load testing",
          "Security audit",
          "Penetration testing",
          "Data protection validation",
          "Performance optimization"
        ],
        icon: Shield,
        color: "from-yellow-500 to-orange-500"
      },
      {
        phase: "Launch & Scale",
        duration: "Ongoing",
        tasks: [
          "Production deployment",
          "Monitoring setup",
          "User onboarding",
          "Feedback collection",
          "Iterative improvements"
        ],
        icon: Rocket,
        color: "from-red-500 to-pink-500"
      }
    ],
    
    benefits: [
      {
        title: "Scalable by Design",
        desc: "Architecture that grows from 100 to 1M users.",
        icon: Cloud
      },
      {
        title: "Recurring Revenue",
        desc: "Built-in subscription management.",
        icon: Award
      },
      {
        title: "Multi-Tenant Security",
        desc: "Complete data isolation between customers.",
        icon: Shield
      },
      {
        title: "Usage Analytics",
        desc: "Understand how customers use your product.",
        icon: BarChart
      },
      {
        title: "Fast Time-to-Market",
        desc: "Launch MVP quickly and iterate.",
        icon: Zap
      },
      {
        title: "API-First Approach",
        desc: "Ready for integrations and extensions.",
        icon: GitBranch
      }
    ],
    
    deliverables: [
      "Fully functional SaaS platform",
      "Subscription billing system",
      "User management dashboard",
      "Analytics dashboard",
      "API documentation",
      "Technical documentation",
      "Admin panel",
      "6 months support"
    ]
  },

  logistics: {
    title: "Logistics & Supply Chain",
    icon: Truck,
    shortDesc: "Optimize operations with custom logistics software.",
    overview: "Modernize logistics operations with intelligent software solutions for tracking, routing, and management.",
    
    detailedOverview: `Logistics is the backbone of modern commerce. We build software that helps logistics companies track vehicles in real-time, optimize delivery routes, and manage warehouses efficiently.

    From last-mile delivery apps to comprehensive fleet management systems, our solutions are designed to reduce costs and improve customer satisfaction. Real-time tracking, automated notifications, and detailed analytics help you stay ahead.

    Whether you're a small delivery service or a large logistics provider, we have solutions that scale with your operations.`,
    
    services: [
      {
        title: "Fleet Management",
        desc: "Track vehicles, drivers, and deliveries in real-time.",
        icon: Truck
      },
      {
        title: "Route Optimization",
        desc: "AI-powered routing for fastest deliveries.",
        icon: Target
      },
      {
        title: "Warehouse Management",
        desc: "Inventory tracking and order fulfillment.",
        icon: Layers
      },
      {
        title: "Delivery Proof Apps",
        desc: "Mobile apps with photo capture and signatures.",
        icon: Smartphone
      },
      {
        title: "Customer Tracking",
        desc: "Real-time delivery tracking for customers.",
        icon: GitBranch
      },
      {
        title: "Analytics Dashboard",
        desc: "Performance metrics and cost analysis.",
        icon: BarChart
      }
    ],
    
    process: [
      {
        phase: "Operations Analysis",
        duration: "1-2 Weeks",
        tasks: [
          "Current workflow assessment",
          "Pain point identification",
          "Driver and dispatcher interviews",
          "Data collection requirements",
          "Integration needs"
        ],
        icon: Target,
        color: "from-green-500 to-emerald-500"
      },
      {
        phase: "Solution Design",
        duration: "2-3 Weeks",
        tasks: [
          "System architecture",
          "Mobile app design",
          "Dashboard wireframes",
          "Tracking interface",
          "Integration planning"
        ],
        icon: Layers,
        color: "from-teal-500 to-cyan-500"
      },
      {
        phase: "Development",
        duration: "6-10 Weeks",
        tasks: [
          "Fleet tracking system",
          "Mobile driver app",
          "Customer tracking portal",
          "Route optimization engine",
          "Admin dashboard",
          "Reporting system"
        ],
        icon: Code,
        color: "from-blue-500 to-indigo-500"
      },
      {
        phase: "Testing & Training",
        duration: "2-3 Weeks",
        tasks: [
          "Pilot with real drivers",
          "System optimization",
          "Driver training",
          "Dispatcher training",
          "Documentation"
        ],
        icon: Users,
        color: "from-purple-500 to-pink-500"
      },
      {
        phase: "Deployment",
        duration: "1-2 Weeks",
        tasks: [
          "Full rollout",
          "Data migration",
          "Go-live support",
          "Monitoring setup",
          "Feedback collection"
        ],
        icon: Rocket,
        color: "from-orange-500 to-red-500"
      }
    ],
    
    benefits: [
      {
        title: "Cost Reduction",
        desc: "Optimize routes and reduce fuel costs.",
        icon: Target
      },
      {
        title: "Real-Time Tracking",
        desc: "Know where every vehicle is at all times.",
        icon: GitBranch
      },
      {
        title: "Customer Satisfaction",
        desc: "Accurate ETAs and delivery updates.",
        icon: Users
      },
      {
        title: "Driver Productivity",
        desc: "Tools that help drivers work efficiently.",
        icon: Zap
      },
      {
        title: "Data-Driven Decisions",
        desc: "Analytics to improve operations.",
        icon: BarChart
      },
      {
        title: "Scalable Solution",
        desc: "Grows with your fleet size.",
        icon: Cloud
      }
    ],
    
    deliverables: [
      "Fleet management system",
      "Mobile driver app",
      "Customer tracking portal",
      "Admin dashboard",
      "Route optimization",
      "Analytics reports",
      "Driver training",
      "3 months support"
    ]
  },

  edtech: {
    title: "EdTech & E-Learning",
    icon: GraduationCap,
    shortDesc: "Build engaging learning platforms for students of all ages.",
    overview: "Transform education with technology. Build platforms that make learning accessible, interactive, and effective.",
    
    detailedOverview: `Education is evolving, and technology is at the forefront. We build learning platforms that engage students, empower teachers, and streamline educational operations.

    From virtual classrooms to learning management systems, our solutions are designed for the modern learner. Interactive content, progress tracking, and mobile accessibility ensure students can learn anytime, anywhere.

    Whether you're launching a new online course platform or building tools for schools, we have the expertise to bring your vision to life.`,
    
    services: [
      {
        title: "Learning Management Systems",
        desc: "Complete platforms for course delivery.",
        icon: Layers
      },
      {
        title: "Virtual Classrooms",
        desc: "Live video, chat, and interactive tools.",
        icon: Users
      },
      {
        title: "Course Authoring",
        desc: "Tools to create engaging course content.",
        icon: Settings
      },
      {
        title: "Student Analytics",
        desc: "Track progress and identify gaps.",
        icon: BarChart
      },
      {
        title: "Mobile Learning Apps",
        desc: "Learn on the go with mobile apps.",
        icon: Smartphone
      },
      {
        title: "Assessment Platforms",
        desc: "Quizzes, tests, and certification.",
        icon: Award
      }
    ],
    
    process: [
      {
        phase: "Learning Strategy",
        duration: "1-2 Weeks",
        tasks: [
          "Target audience analysis",
          "Learning objectives definition",
          "Content strategy",
          "Feature prioritization",
          "Technology selection"
        ],
        icon: Target,
        color: "from-yellow-500 to-orange-500"
      },
      {
        phase: "Experience Design",
        duration: "2-3 Weeks",
        tasks: [
          "Course interface design",
          "Video player design",
          "Mobile learning experience",
          "Gamification elements",
          "Accessibility compliance"
        ],
        icon: Layers,
        color: "from-orange-500 to-red-500"
      },
      {
        phase: "Platform Development",
        duration: "8-12 Weeks",
        tasks: [
          "LMS core development",
          "Video streaming integration",
          "Quiz and assessment engine",
          "Progress tracking",
          "Certificate generation",
          "Admin dashboard"
        ],
        icon: Code,
        color: "from-purple-500 to-pink-500"
      },
      {
        phase: "Content Integration",
        duration: "2-3 Weeks",
        tasks: [
          "Content migration",
          "Course setup",
          "Teacher onboarding",
          "Student enrollment system",
          "Payment integration"
        ],
        icon: GitBranch,
        color: "from-green-500 to-emerald-500"
      },
      {
        phase: "Launch & Scale",
        duration: "Ongoing",
        tasks: [
          "Pilot program",
          "Feedback collection",
          "Performance optimization",
          "Feature additions",
          "Support setup"
        ],
        icon: Rocket,
        color: "from-blue-500 to-indigo-500"
      }
    ],
    
    benefits: [
      {
        title: "Engaging Learning",
        desc: "Interactive content keeps students motivated.",
        icon: Users
      },
      {
        title: "Accessible Anywhere",
        desc: "Learn on any device, anytime.",
        icon: Smartphone
      },
      {
        title: "Progress Tracking",
        desc: "Monitor student performance in real-time.",
        icon: BarChart
      },
      {
        title: "Scalable Platform",
        desc: "From 100 to 100,000 students.",
        icon: Cloud
      },
      {
        title: "Automated Assessment",
        desc: "Save time with auto-graded quizzes.",
        icon: Zap
      },
      {
        title: "Certification",
        desc: "Generate certificates upon completion.",
        icon: Award
      }
    ],
    
    deliverables: [
      "Learning management system",
      "Mobile learning app",
      "Course authoring tools",
      "Student analytics",
      "Assessment engine",
      "Certificate system",
      "Teacher dashboard",
      "6 months support"
    ]
  },

  realestate: {
    title: "Real Estate & PropTech",
    icon: Home,
    shortDesc: "Modern software for property professionals and agents.",
    overview: "Help real estate professionals work smarter with custom CRM, portals, and management tools.",
    
    detailedOverview: `The real estate industry is embracing technology. From property listing portals to agent CRM systems, we build tools that streamline operations and help close deals faster.

    Our solutions help agents manage leads, showcase properties with virtual tours, and track every interaction with potential buyers. For property managers, we build platforms that handle tenants, maintenance requests, and rent collection.

    Whether you're a real estate agency, property management company, or proptech startup, we have solutions tailored to your needs.`,
    
    services: [
      {
        title: "Property Management Systems",
        desc: "Manage tenants, leases, and maintenance.",
        icon: Home
      },
      {
        title: "Real Estate CRM",
        desc: "Track leads, clients, and deal progress.",
        icon: Users
      },
      {
        title: "Property Listing Portals",
        desc: "Showcase properties with search and filters.",
        icon: Layers
      },
      {
        title: "Virtual Tour Platforms",
        desc: "3D tours and video walkthroughs.",
        icon: Smartphone
      },
      {
        title: "Lead Management",
        desc: "Capture and nurture property inquiries.",
        icon: Target
      },
      {
        title: "Document Management",
        desc: "Secure storage for contracts and agreements.",
        icon: Shield
      }
    ],
    
    process: [
      {
        phase: "Requirements",
        duration: "1-2 Weeks",
        tasks: [
          "Agent workflow analysis",
          "Feature prioritization",
          "Integration needs",
          "User role definition",
          "Budget planning"
        ],
        icon: Target,
        color: "from-indigo-500 to-blue-500"
      },
      {
        phase: "Design",
        duration: "2-3 Weeks",
        tasks: [
          "Property listing design",
          "Search interface",
          "CRM dashboard",
          "Mobile experience",
          "Virtual tour integration"
        ],
        icon: Layers,
        color: "from-blue-500 to-cyan-500"
      },
      {
        phase: "Development",
        duration: "6-10 Weeks",
        tasks: [
          "Property database",
          "Search and filters",
          "Lead tracking system",
          "Document management",
          "Agent dashboard",
          "Reporting tools"
        ],
        icon: Code,
        color: "from-purple-500 to-pink-500"
      },
      {
        phase: "Integration",
        duration: "1-2 Weeks",
        tasks: [
          "Map integration",
          "Payment processing",
          "Email/SMS setup",
          "Calendar sync",
          "Document signing"
        ],
        icon: GitBranch,
        color: "from-green-500 to-emerald-500"
      },
      {
        phase: "Launch & Train",
        duration: "1-2 Weeks",
        tasks: [
          "Data migration",
          "Team training",
          "Go-live support",
          "Feedback collection",
          "Ongoing optimization"
        ],
        icon: Rocket,
        color: "from-orange-500 to-red-500"
      }
    ],
    
    benefits: [
      {
        title: "Faster Deal Closure",
        desc: "Streamlined lead-to-deal process.",
        icon: Zap
      },
      {
        title: "Better Lead Management",
        desc: "Never miss a potential client.",
        icon: Target
      },
      {
        title: "Property Showcase",
        desc: "Beautiful property listings that sell.",
        icon: Home
      },
      {
        title: "Team Collaboration",
        desc: "Share leads and work together.",
        icon: Users
      },
      {
        title: "Data Insights",
        desc: "Know which strategies work best.",
        icon: BarChart
      },
      {
        title: "Mobile Access",
        desc: "Work from anywhere with mobile apps.",
        icon: Smartphone
      }
    ],
    
    deliverables: [
      "Property management platform",
      "Real estate CRM",
      "Listing portal",
      "Lead management system",
      "Document storage",
      "Analytics dashboard",
      "Mobile app",
      "3 months support"
    ]
  }
};

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = industriesData[slug];
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedPricing, setSelectedPricing] = useState("professional");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!industry) {
    return (
      <div className="pt-32 text-center min-h-screen bg-gray-50">
        <h1 className="text-3xl mb-4">Industry not found</h1>
        <Link to="/industries" className="text-blue-600 hover:underline">
          ← Back to Industries
        </Link>
      </div>
    );
  }

  const IconComponent = industry.icon;
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "services", label: "Services" },
    { id: "process", label: "Process" },
    { id: "benefits", label: "Benefits" },
    { id: "pricing", label: "Pricing" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <main className="pt-24 bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur">
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold">{industry.title}</h1>
          </div>
          <p className="text-xl max-w-3xl text-blue-100 leading-relaxed">
            {industry.overview}
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
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
                    ? 'border-blue-600 text-blue-600'
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
                  {industry.detailedOverview}
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Preview */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industry.benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                      <benefit.icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quick Process */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-12">Quick Process Overview</h2>
              <div className="grid md:grid-cols-5 gap-4">
                {industry.process.slice(0, 5).map((step, index) => (
                  <div key={index} className="text-center relative">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold mb-2">{step.phase}</h3>
                    <p className="text-sm text-gray-500">{step.duration}</p>
                    {index < 4 && (
                      <div className="hidden md:block absolute top-6 left-[60%] w-full h-0.5 bg-gray-200"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* SERVICES TAB */}
      {activeTab === "services" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Comprehensive solutions tailored to your industry needs
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industry.services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
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
              {industry.process.map((step, index) => (
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
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Project Timeline</h3>
              <div className="grid md:grid-cols-5 gap-4">
                {industry.roadmap?.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold mb-2">{item.weeks}</div>
                    <div className="text-lg font-semibold mb-1">{item.phase}</div>
                    <div className="text-sm text-blue-200">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* BENEFITS TAB */}
      {activeTab === "benefits" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Business Benefits</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              What you gain by partnering with us
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industry.benefits.map((benefit, index) => (
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
                {industry.deliverables.map((item, index) => (
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
              {Object.entries(industry.pricing).map(([key, plan]) => (
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
      {activeTab === "faq" && industry.faq && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {industry.faq.map((item, index) => (
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
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Let's discuss your project and see how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all"
          >
            Start the Conversation <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <p className="text-sm text-blue-200 mt-6">
            ✨ First client? Ask about our special startup rates
          </p>
        </div>
      </section>
    </main>
  );
}