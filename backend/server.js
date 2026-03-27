import express from "express";
import cors from "cors";
import multer from "multer";
import nodemailer from "nodemailer";
import fs from "fs";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

// Create uploads folder
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
const upload = multer({ dest: uploadDir });

// Email transporter
let transporter;
try {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER || 'fintechitsolutions.info@gmail.com',
      pass: process.env.MAIL_PASS
    }
  });
} catch(e) {
  console.log("Email setup:", e.message);
}

// Complete job data with full details
const jobs = [
  {
    _id: "1",
    title: "Senior Full Stack Developer",
    department: "Custom Software Development",
    location: "Remote (India)",
    type: "Full-time",
    salary: "?8-15 LPA",
    experience: "3-6 years",
    description: "We are seeking an experienced Full Stack Developer to lead the development of enterprise-grade custom software solutions.",
    longDescription: "As a Senior Full Stack Developer at Fintech IT Solutions, you will be the technical backbone of our custom software projects. You will work directly with clients to understand their business needs, design scalable architectures, and implement robust solutions.",
    responsibilities: [
      "Lead end-to-end development of custom software applications",
      "Design scalable architecture using React and Node.js",
      "Build RESTful APIs and microservices",
      "Design and optimize database schemas",
      "Conduct code reviews and mentor junior developers",
      "Collaborate with clients to gather requirements",
      "Ensure security best practices",
      "Write comprehensive technical documentation"
    ],
    requirements: [
      "3+ years of full-stack development experience",
      "Expert in React.js, Node.js, and MongoDB/PostgreSQL",
      "Strong TypeScript and modern JavaScript skills",
      "Experience with AWS/Azure cloud services",
      "Understanding of microservices architecture",
      "Bachelor's degree in Computer Science or equivalent",
      "Excellent communication skills"
    ],
    whatWeOffer: [
      "100% remote work - work from anywhere in India",
      "Flexible working hours",
      "Competitive salary with performance bonuses",
      "Health insurance coverage",
      "Latest MacBook Pro development equipment",
      "Learning and development budget",
      "Yearly team retreats"
    ],
    skills: ["React", "Node.js", "MongoDB", "TypeScript", "AWS", "REST APIs", "PostgreSQL"],
    benefits: ["Remote work", "Health insurance", "Learning budget", "Flexible hours", "Latest MacBook"],
    hiringProcess: {
      step1: "Initial screening call with HR (30 min)",
      step2: "Technical interview with senior developers (60 min)",
      step3: "Take-home assignment (3-5 hours)",
      step4: "Final interview with founder (30 min)",
      step5: "Offer roll-out within 48 hours"
    },
    faq: [
      { q: "Is this position fully remote?", a: "Yes, 100% remote. You can work from anywhere in India." },
      { q: "What is the notice period?", a: "We prefer immediate joiners but can wait up to 30 days." },
      { q: "Do you provide equipment?", a: "Yes, we provide a MacBook Pro and any other equipment you need." }
    ]
  },
  {
    _id: "2",
    title: "Backend Developer - ERP Systems",
    department: "Custom Software Development",
    location: "Remote (India)",
    type: "Full-time",
    salary: "?6-12 LPA",
    experience: "2-5 years",
    description: "Join our team to build powerful ERP and business automation systems.",
    longDescription: "We are looking for a Backend Developer specializing in ERP systems. You will design and implement scalable backend solutions that handle complex business workflows, inventory management, and financial transactions.",
    responsibilities: [
      "Design and develop scalable backend systems for ERP solutions",
      "Build efficient database schemas and optimize queries",
      "Implement business logic and workflow automation",
      "Integrate third-party APIs and services",
      "Ensure system security and data integrity",
      "Write comprehensive unit and integration tests"
    ],
    requirements: [
      "2+ years of backend development experience",
      "Strong knowledge of Node.js and Express.js",
      "Experience with PostgreSQL, MongoDB, or MySQL",
      "Understanding of ERP systems and business processes",
      "Knowledge of REST API design principles"
    ],
    whatWeOffer: [
      "100% remote work",
      "Flexible schedule",
      "Health insurance coverage",
      "Skill development programs",
      "Quarterly performance bonuses"
    ],
    skills: ["Node.js", "PostgreSQL", "MongoDB", "REST APIs", "Redis", "Microservices"],
    benefits: ["Remote work", "Flexible hours", "Health insurance", "Skill development"],
    hiringProcess: {
      step1: "HR screening (20 min)",
      step2: "Technical interview with backend lead (45 min)",
      step3: "System design assignment (2-3 hours)",
      step4: "Final interview with CTO (30 min)"
    },
    faq: [
      { q: "What tech stack will I work with?", a: "Node.js, Express, PostgreSQL, MongoDB, Redis, Docker, AWS." },
      { q: "Is there on-call support?", a: "We have a rotation, but it's minimal." }
    ]
  },
  {
    _id: "3",
    title: "React/Next.js Frontend Developer",
    department: "Web Development",
    location: "Remote (India)",
    type: "Full-time",
    salary: "?5-10 LPA",
    experience: "2-4 years",
    description: "Create stunning, responsive websites and web applications using React.js and Next.js.",
    longDescription: "As a Frontend Developer, you will build beautiful, performant, and accessible user interfaces. You'll work closely with our design team to implement pixel-perfect designs.",
    responsibilities: [
      "Build responsive web applications using React.js and Next.js",
      "Create reusable components and front-end libraries",
      "Optimize applications for maximum speed and scalability",
      "Collaborate with designers to implement pixel-perfect designs",
      "Ensure cross-browser compatibility",
      "Implement SEO best practices"
    ],
    requirements: [
      "2+ years of frontend development experience",
      "Strong proficiency in React.js, Next.js, and TypeScript",
      "Experience with Tailwind CSS and modern styling",
      "Understanding of SEO and web performance optimization",
      "Knowledge of state management (Redux, Zustand)",
      "Portfolio of previous work"
    ],
    whatWeOffer: [
      "Remote-first culture",
      "Flexible hours",
      "Latest MacBook Pro",
      "Continuous learning opportunities",
      "Work with modern tech stack"
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "GraphQL"],
    benefits: ["Remote-first", "Flexible hours", "Latest MacBook", "Learning opportunities"],
    hiringProcess: {
      step1: "Portfolio review (30 min)",
      step2: "Live coding interview (45 min)",
      step3: "Build a small component (2-3 hours)",
      step4: "Final interview with team (30 min)"
    },
    faq: [
      { q: "Do I need to know Next.js?", a: "Yes, Next.js is our primary framework." },
      { q: "What design tools do you use?", a: "We use Figma for design." }
    ]
  },
  {
    _id: "4",
    title: "E-commerce Developer",
    department: "Web Development",
    location: "Remote (India)",
    type: "Full-time",
    salary: "?4-9 LPA",
    experience: "2-5 years",
    description: "Build and customize online stores using Shopify, WooCommerce, and custom solutions.",
    longDescription: "Join our team to help businesses create successful online stores. You'll work on Shopify themes, WooCommerce websites, and custom e-commerce solutions.",
    responsibilities: [
      "Develop and customize Shopify themes and apps",
      "Build custom WooCommerce websites",
      "Integrate payment gateways and shipping solutions",
      "Optimize e-commerce sites for conversions",
      "Implement product catalogs and inventory management",
      "Ensure PCI compliance and security"
    ],
    requirements: [
      "2+ years of e-commerce development experience",
      "Expertise in Shopify Liquid and WooCommerce",
      "Knowledge of PHP, JavaScript, and HTML/CSS",
      "Experience with payment gateway integrations",
      "Understanding of SEO for e-commerce"
    ],
    whatWeOffer: [
      "Work with leading e-commerce platforms",
      "Remote work",
      "Performance bonuses",
      "Learning resources"
    ],
    skills: ["Shopify", "WooCommerce", "PHP", "JavaScript", "Payment Gateways"],
    benefits: ["Remote work", "Performance bonuses", "Learning resources"],
    hiringProcess: {
      step1: "Portfolio review (30 min)",
      step2: "Technical interview (45 min)",
      step3: "Build a Shopify section (2 hours)",
      step4: "Client project discussion (30 min)"
    },
    faq: [
      { q: "What platforms do you work with?", a: "Shopify, WooCommerce, Magento." },
      { q: "Do I need to know PHP?", a: "Yes, for WooCommerce development." }
    ]
  },
  {
    _id: "5",
    title: "React Native Mobile Developer",
    department: "Mobile Development",
    location: "Remote (India)",
    type: "Full-time",
    salary: "?6-12 LPA",
    experience: "2-5 years",
    description: "Build cross-platform mobile apps for iOS and Android using React Native.",
    longDescription: "We are looking for a React Native Developer to build high-quality mobile applications. You will work on both iOS and Android apps, ensuring smooth performance.",
    responsibilities: [
      "Develop cross-platform mobile apps using React Native",
      "Build reusable components and native modules",
      "Integrate REST APIs and third-party services",
      "Optimize app performance and memory usage",
      "Publish apps to App Store and Google Play",
      "Implement push notifications"
    ],
    requirements: [
      "2+ years of React Native development",
      "Experience with native modules (iOS/Android)",
      "Knowledge of Redux and state management",
      "Understanding of app store submission process",
      "Portfolio of published apps"
    ],
    whatWeOffer: [
      "Work on diverse mobile projects",
      "Remote position",
      "Latest development tools",
      "App store publication support"
    ],
    skills: ["React Native", "Redux", "Firebase", "iOS", "Android", "REST APIs"],
    benefits: ["Remote work", "Latest tools", "App store support"],
    hiringProcess: {
      step1: "Portfolio review (30 min)",
      step2: "Live coding interview (60 min)",
      step3: "Build a mini app (4 hours)",
      step4: "App store submission strategy (30 min)"
    },
    faq: [
      { q: "Do I need to know native iOS/Android?", a: "Basic knowledge is helpful." },
      { q: "What's the app development process?", a: "Agile methodology with 2-week sprints." }
    ]
  },
  {
    _id: "6",
    title: "Flutter Developer",
    department: "Mobile Development",
    location: "Remote (India)",
    type: "Full-time",
    salary: "?5-10 LPA",
    experience: "1-4 years",
    description: "Build beautiful cross-platform apps using Flutter.",
    longDescription: "We're looking for a passionate Flutter Developer to build next-generation mobile applications with the latest Flutter features.",
    responsibilities: [
      "Build cross-platform apps using Flutter",
      "Create custom UI components and animations",
      "Integrate REST APIs and backend services",
      "Optimize app performance and responsiveness",
      "Collaborate with design and backend teams",
      "Implement state management solutions"
    ],
    requirements: [
      "1+ years of Flutter development experience",
      "Strong Dart programming skills",
      "Experience with state management (Provider, Bloc)",
      "Knowledge of REST API integration",
      "Understanding of mobile UI/UX principles"
    ],
    whatWeOffer: [
      "Learn Google's latest technology",
      "Remote work",
      "Flexible schedule",
      "Growth opportunities"
    ],
    skills: ["Flutter", "Dart", "REST APIs", "Firebase", "Provider"],
    benefits: ["Remote work", "Flexible schedule", "Growth opportunities"],
    hiringProcess: {
      step1: "Technical discussion (30 min)",
      step2: "Flutter coding challenge (45 min)",
      step3: "Build a Flutter widget (2 hours)",
      step4: "Architecture discussion (30 min)"
    },
    faq: [
      { q: "Do I need native experience?", a: "No, Flutter experience is sufficient." },
      { q: "What state management do you use?", a: "Provider and Bloc." }
    ]
  },
  {
    _id: "7",
    title: "AI/ML Engineer",
    department: "AI Development",
    location: "Remote (India)",
    type: "Full-time",
    salary: "?10-18 LPA",
    experience: "2-5 years",
    description: "Build intelligent solutions using machine learning and LLMs.",
    longDescription: "We are building cutting-edge AI solutions. You'll work on implementing machine learning models, integrating LLMs, and creating intelligent features.",
    responsibilities: [
      "Develop and deploy machine learning models",
      "Integrate OpenAI APIs and LLMs into applications",
      "Build intelligent chatbots and AI assistants",
      "Create recommendation systems",
      "Process and analyze large datasets",
      "Optimize model performance"
    ],
    requirements: [
      "2+ years of AI/ML experience",
      "Experience with Python and ML libraries (TensorFlow, PyTorch)",
      "Knowledge of OpenAI API and LLMs",
      "Understanding of NLP and computer vision",
      "Strong mathematical background"
    ],
    whatWeOffer: [
      "Work on cutting-edge AI technology",
      "Remote position",
      "Research opportunities",
      "Competitive salary"
    ],
    skills: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "NLP", "Machine Learning"],
    benefits: ["Cutting-edge AI work", "Research opportunities", "Competitive salary"],
    hiringProcess: {
      step1: "Research discussion (30 min)",
      step2: "ML fundamentals interview (60 min)",
      step3: "Implement a model (3-5 hours)",
      step4: "Research presentation (45 min)"
    },
    faq: [
      { q: "What AI projects are you working on?", a: "LLM applications, recommendation systems, NLP." },
      { q: "Do you need a PhD?", a: "No, but research experience is valued." }
    ]
  },
  {
    _id: "8",
    title: "AI Integration Specialist",
    department: "AI Development",
    location: "Remote (India)",
    type: "Full-time",
    salary: "?6-12 LPA",
    experience: "1-3 years",
    description: "Integrate AI capabilities into existing applications.",
    longDescription: "We need a developer who can bridge AI capabilities and real-world applications. You'll integrate AI features into existing software products.",
    responsibilities: [
      "Integrate AI APIs into web and mobile applications",
      "Implement chatbot and conversational AI features",
      "Add image recognition capabilities",
      "Optimize AI model performance",
      "Work with OpenAI, Google AI platforms",
      "Create AI-powered features for clients"
    ],
    requirements: [
      "1+ years of software development experience",
      "Experience with AI/ML APIs (OpenAI, Google Cloud AI)",
      "Strong JavaScript/Python skills",
      "Understanding of REST APIs",
      "Eagerness to learn new AI technologies"
    ],
    whatWeOffer: [
      "Learn latest AI technologies",
      "Remote work",
      "Training budget",
      "Work on innovative projects"
    ],
    skills: ["JavaScript", "Python", "OpenAI API", "REST APIs", "Node.js"],
    benefits: ["Learn latest AI tech", "Remote work", "Training budget"],
    hiringProcess: {
      step1: "Technical discussion (30 min)",
      step2: "API integration challenge (45 min)",
      step3: "Build an AI-powered feature (3 hours)",
      step4: "Project discussion (30 min)"
    },
    faq: [
      { q: "Do I need to know machine learning?", a: "Basic understanding is helpful." },
      { q: "What APIs do you use?", a: "OpenAI, Google Cloud AI, AWS Rekognition." }
    ]
  },
  {
    _id: "9",
    title: "Senior UI/UX Designer",
    department: "UI/UX Design",
    location: "Remote (India)",
    type: "Full-time",
    salary: "?7-14 LPA",
    experience: "3-6 years",
    description: "Design beautiful, user-centric interfaces for web and mobile apps.",
    longDescription: "We are looking for a creative UI/UX Designer to translate complex requirements into intuitive, beautiful interfaces.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Design responsive web and mobile interfaces",
      "Create and maintain design systems",
      "Collaborate with developers on implementation",
      "Present designs to clients"
    ],
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma, Adobe XD, or Sketch",
      "Strong portfolio demonstrating design work",
      "Understanding of responsive design principles",
      "Experience with user research methods",
      "Knowledge of HTML/CSS basics"
    ],
    whatWeOffer: [
      "Creative freedom",
      "Work on diverse projects",
      "Remote position",
      "Latest design tools",
      "Professional development"
    ],
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
    benefits: ["Creative freedom", "Diverse projects", "Remote work"],
    hiringProcess: {
      step1: "Portfolio review (30 min)",
      step2: "Design challenge (45 min)",
      step3: "Redesign a feature (3 hours)",
      step4: "Client presentation simulation (30 min)"
    },
    faq: [
      { q: "What tools do you use?", a: "Figma is our primary tool." },
      { q: "Do I need to code?", a: "Basic HTML/CSS knowledge is helpful." }
    ]
  },
  {
    _id: "10",
    title: "QA Automation Engineer",
    department: "QA & Testing",
    location: "Remote (India)",
    type: "Full-time",
    salary: "?5-10 LPA",
    experience: "2-5 years",
    description: "Ensure software quality through automated testing.",
    longDescription: "We need a QA Automation Engineer to build robust testing frameworks and ensure our products meet the highest quality standards.",
    responsibilities: [
      "Design and implement automated test suites",
      "Perform manual and exploratory testing",
      "Create test plans and test cases",
      "Integrate tests into CI/CD pipelines",
      "Track and report bugs",
      "Ensure cross-browser compatibility"
    ],
    requirements: [
      "2+ years of QA experience",
      "Experience with Selenium, Cypress, or Playwright",
      "Knowledge of JavaScript/Python",
      "Understanding of CI/CD pipelines",
      "Experience with bug tracking tools (Jira)",
      "Attention to detail"
    ],
    whatWeOffer: [
      "Ensure product quality",
      "Remote work",
      "Learning opportunities",
      "Growth to leadership roles"
    ],
    skills: ["Selenium", "Cypress", "JavaScript", "CI/CD", "Jira", "Test Automation"],
    benefits: ["Remote work", "Learning opportunities", "Growth to leadership"],
    hiringProcess: {
      step1: "Technical screening (30 min)",
      step2: "Automation challenge (45 min)",
      step3: "Write test suite (3 hours)",
      step4: "Quality strategy discussion (30 min)"
    },
    faq: [
      { q: "What testing frameworks do you use?", a: "Cypress for frontend, Jest for unit tests." },
      { q: "Do you do manual testing?", a: "Yes, we combine automated and manual testing." }
    ]
  },
  {
    _id: "11",
    title: "Frontend Development Intern",
    department: "Web Development",
    location: "Remote (India)",
    type: "Internship",
    salary: "?15,000-25,000/month",
    experience: "0-1 years (Freshers)",
    description: "Kickstart your career with hands-on experience in modern web development.",
    longDescription: "This is a paid internship for passionate individuals who want to start their career in web development. You'll work on real projects and learn from senior developers.",
    responsibilities: [
      "Build React components under guidance",
      "Learn modern development practices",
      "Participate in code reviews",
      "Fix bugs and implement features",
      "Write clean, documented code",
      "Attend daily stand-ups"
    ],
    requirements: [
      "Knowledge of HTML, CSS, JavaScript",
      "Basic understanding of React",
      "Strong desire to learn",
      "Good communication skills",
      "Portfolio or GitHub projects (preferred)"
    ],
    whatWeOffer: [
      "Paid internship",
      "Mentorship from senior developers",
      "Certificate of completion",
      "Potential for full-time role",
      "Remote work"
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
    benefits: ["Paid internship", "Mentorship", "Certificate", "Full-time potential"],
    hiringProcess: {
      step1: "Resume screening",
      step2: "Basic coding assessment (30 min)",
      step3: "Build a simple React component",
      step4: "Mentorship discussion (20 min)"
    },
    faq: [
      { q: "What is the duration?", a: "3-6 months with possibility of extension." },
      { q: "Do I need prior experience?", a: "Basic knowledge is enough." }
    ]
  },
  {
    _id: "12",
    title: "Backend Development Intern",
    department: "Custom Software Development",
    location: "Remote (India)",
    type: "Internship",
    salary: "?15,000-25,000/month",
    experience: "0-1 years (Freshers)",
    description: "Learn backend development with Node.js and MongoDB.",
    longDescription: "Join our backend team as a paid intern to learn scalable APIs, database design, and modern backend technologies with expert mentorship.",
    responsibilities: [
      "Build REST APIs using Node.js",
      "Work with MongoDB and database design",
      "Learn best coding practices",
      "Participate in team meetings",
      "Document technical work",
      "Write unit tests"
    ],
    requirements: [
      "Basic JavaScript knowledge",
      "Understanding of programming concepts",
      "Interest in backend development",
      "Good problem-solving skills"
    ],
    whatWeOffer: [
      "Paid internship",
      "Learn from industry experts",
      "Real project experience",
      "Potential for full-time",
      "Remote work"
    ],
    skills: ["JavaScript", "Node.js", "MongoDB", "REST APIs"],
    benefits: ["Paid internship", "Learn from experts", "Real projects", "Full-time potential"],
    hiringProcess: {
      step1: "Resume screening",
      step2: "Basic JavaScript assessment (30 min)",
      step3: "Build a simple API",
      step4: "Team fit discussion (20 min)"
    },
    faq: [
      { q: "What will I learn?", a: "Node.js, Express, MongoDB, REST APIs." },
      { q: "Is there a chance for full-time?", a: "Yes, based on performance." }
    ]
  }
];

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", time: new Date(), message: "Server is running" });
});

// Get all jobs
app.get("/api/careers/jobs", (req, res) => {
  res.json(jobs);
});

// Get single job
app.get("/api/careers/jobs/:id", (req, res) => {
  const job = jobs.find(j => j._id === req.params.id);
  if (job) {
    res.json(job);
  } else {
    res.status(404).json({ error: "Job not found" });
  }
});

// Contact form
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log("Contact:", { name, email, message });
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields required" });
    }
    
    if (transporter) {
      await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: 'fintechitsolutions.info@gmail.com',
        subject: `New Contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      });
    }
    
    res.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact error:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

// Job application
app.post("/api/careers/apply", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, phone, experience, coverLetter, jobId, jobTitle } = req.body;
    console.log("Application:", { name, email, jobId });
    
    if (!name || !email || !jobId) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    if (!req.file) {
      return res.status(400).json({ error: "Resume required" });
    }
    
    const job = jobs.find(j => j._id === jobId);
    const title = jobTitle || (job ? job.title : "Position");
    
    if (transporter) {
      await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: 'fintechitsolutions.info@gmail.com',
        subject: `Job Application: ${title} from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nExperience: ${experience || 'N/A'}\nCover Letter: ${coverLetter || 'N/A'}\nJob: ${title}\nJob ID: ${jobId}`,
        attachments: [{ filename: req.file.originalname, path: req.file.path }]
      });
    }
    
    res.json({ success: true, message: "Application submitted successfully" });
  } catch (error) {
    console.error("Application error:", error);
    res.status(500).json({ error: "Failed to submit application" });
  }
});

app.listen(PORT, () => {
  console.log(`?? Server running on port ${PORT}`);
});
