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
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

// Full detailed jobs with complete descriptions
const jobs = [
  {
    _id: "1",
    title: "Senior Full Stack Developer",
    department: "Custom Software Development",
    location: "Remote (India)",
    type: "Full-time",
    salary: "?8-15 LPA",
    experience: "3-6 years",
    description: "We are seeking an experienced Full Stack Developer to lead the development of enterprise-grade custom software solutions. You will architect and build complex business applications, ERP systems, and automation tools from scratch.",
    longDescription: "As a Senior Full Stack Developer at Fintech IT Solutions, you will be the technical backbone of our custom software projects. You will work directly with clients to understand their business needs, design scalable architectures, and implement robust solutions. This role requires both technical excellence and the ability to mentor junior developers.",
    responsibilities: [
      "Lead end-to-end development of custom software applications",
      "Design scalable architecture using React and Node.js",
      "Build RESTful APIs and microservices",
      "Implement database schemas and optimize queries",
      "Conduct code reviews and mentor junior developers",
      "Collaborate with clients to gather and refine requirements",
      "Ensure security best practices and performance optimization",
      "Write comprehensive technical documentation"
    ],
    requirements: [
      "3+ years of full-stack development experience",
      "Expert in React.js, Node.js, and MongoDB/PostgreSQL",
      "Strong TypeScript and modern JavaScript skills",
      "Experience with AWS/Azure cloud services",
      "Understanding of microservices architecture",
      "Bachelor's degree in Computer Science or equivalent",
      "Excellent communication and problem-solving skills"
    ],
    whatWeOffer: [
      "100% remote work - work from anywhere in India",
      "Flexible working hours",
      "Competitive salary with performance bonuses",
      "Health insurance coverage",
      "Latest MacBook Pro development equipment",
      "Learning and development budget",
      "Yearly team retreats and offsites",
      "Direct mentorship from industry experts"
    ],
    skills: ["React", "Node.js", "MongoDB", "TypeScript", "AWS", "REST APIs"],
    process: {
      initial: "Initial screening call with HR (30 min)",
      technical: "Technical interview with our senior developers (60 min)",
      assignment: "Take-home assignment (3-5 hours)",
      final: "Final interview with founder (30 min)",
      decision: "Offer roll-out within 48 hours"
    },
    benefits: ["Remote work", "Health insurance", "Learning budget", "Flexible hours", "Growth opportunities"]
  },
  {
    _id: "2",
    title: "Backend Developer - ERP Systems",
    department: "Custom Software Development",
    location: "Remote (India)",
    type: "Full-time",
    salary: "?6-12 LPA",
    experience: "2-5 years",
    description: "Join our team to build powerful ERP and business automation systems. You'll work on complex backend architecture, database design, and business logic implementation for enterprise clients.",
    longDescription: "We are looking for a Backend Developer specializing in ERP systems. You will design and implement scalable backend solutions that handle complex business workflows, inventory management, financial transactions, and reporting systems.",
    responsibilities: [
      "Design and develop scalable backend systems for ERP solutions",
      "Build efficient database schemas and optimize complex queries",
      "Implement business logic and workflow automation",
      "Integrate third-party APIs and services",
      "Ensure system security and data integrity",
      "Write comprehensive unit and integration tests",
      "Document technical specifications and API endpoints"
    ],
    requirements: [
      "2+ years of backend development experience",
      "Strong knowledge of Node.js and Express.js",
      "Experience with PostgreSQL, MongoDB, or MySQL",
      "Understanding of ERP systems and business processes",
      "Knowledge of REST API design principles",
      "Experience with Redis or RabbitMQ is a plus",
      "Bachelor's degree in Computer Science or equivalent"
    ],
    whatWeOffer: [
      "100% remote work",
      "Flexible schedule",
      "Health insurance coverage",
      "Skill development programs",
      "Quarterly performance bonuses",
      "Professional certification reimbursement"
    ],
    skills: ["Node.js", "PostgreSQL", "MongoDB", "REST APIs", "Redis", "Microservices"],
    process: {
      initial: "HR screening (20 min)",
      technical: "Technical interview with backend lead (45 min)",
      assignment: "System design task (2-3 hours)",
      final: "Final interview with CTO (30 min)"
    },
    benefits: ["Remote work", "Flexible hours", "Health insurance", "Skill development", "Quarterly bonuses"]
  },
  {
    _id: "3",
    title: "React/Next.js Frontend Developer",
    department: "Web Development",
    location: "Remote (India)",
    type: "Full-time",
    salary: "?5-10 LPA",
    experience: "2-4 years",
    description: "We need a talented Frontend Developer to create stunning, responsive websites and web applications using React.js and Next.js.",
    longDescription: "As a Frontend Developer, you will be responsible for building beautiful, performant, and accessible user interfaces. You'll work closely with our design team to implement pixel-perfect designs and create seamless user experiences.",
    responsibilities: [
      "Build responsive web applications using React.js and Next.js",
      "Create reusable components and front-end libraries",
      "Optimize applications for maximum speed and scalability",
      "Collaborate with designers to implement pixel-perfect designs",
      "Ensure cross-browser compatibility",
      "Implement SEO best practices",
      "Write clean, maintainable, and documented code"
    ],
    requirements: [
      "2+ years of frontend development experience",
      "Strong proficiency in React.js, Next.js, and TypeScript",
      "Experience with Tailwind CSS and modern styling",
      "Understanding of SEO and web performance optimization",
      "Knowledge of state management (Redux, Zustand)",
      "Portfolio of previous work",
      "Bachelor's degree in Computer Science or equivalent"
    ],
    whatWeOffer: [
      "Remote-first culture",
      "Flexible hours",
      "Latest MacBook Pro",
      "Continuous learning opportunities",
      "Work with modern tech stack",
      "Conference and workshop attendance budget"
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "GraphQL"],
    process: {
      initial: "Portfolio review (30 min)",
      technical: "Live coding interview (45 min)",
      assignment: "Build a small component (2-3 hours)",
      final: "Final interview with team (30 min)"
    },
    benefits: ["Remote-first", "Flexible hours", "Latest MacBook", "Learning opportunities", "Modern tech stack"]
  },
  {
    _id: "4",
    title: "E-commerce Developer",
    department: "Web Development",
    location: "Remote (India)",
    type: "Full-time",
    salary: "?4-9 LPA",
    experience: "2-5 years",
    description: "Looking for an experienced E-commerce Developer to build and customize online stores using Shopify, WooCommerce, and custom solutions.",
    longDescription: "Join our team to help businesses create successful online stores. You'll work on Shopify themes, WooCommerce websites, and custom e-commerce solutions that drive sales and provide exceptional shopping experiences.",
    responsibilities: [
      "Develop and customize Shopify themes and apps",
      "Build custom WooCommerce websites",
      "Integrate payment gateways and shipping solutions",
      "Optimize e-commerce sites for conversions",
      "Implement product catalogs and inventory management",
      "Ensure PCI compliance and security",
      "Provide technical support and maintenance"
    ],
    requirements: [
      "2+ years of e-commerce development experience",
      "Expertise in Shopify Liquid and WooCommerce",
      "Knowledge of PHP, JavaScript, and HTML/CSS",
      "Experience with payment gateway integrations",
      "Understanding of SEO for e-commerce",
      "Familiarity with analytics tools",
      "Portfolio of e-commerce projects"
    ],
    whatWeOffer: [
      "Work with leading e-commerce platforms",
      "Remote work",
      "Performance bonuses based on project success",
      "Learning resources and certification",
      "Flexible work hours"
    ],
    skills: ["Shopify", "WooCommerce", "PHP", "JavaScript", "Payment Gateways"],
    process: {
      initial: "Portfolio review (30 min)",
      technical: "Technical interview (45 min)",
      assignment: "Build a Shopify section (2 hours)",
      final: "Client project discussion (30 min)"
    },
    benefits: ["Remote work", "Performance bonuses", "Learning resources", "Flexible hours"]
  },
  {
    _id: "5",
    title: "React Native Mobile Developer",
    department: "Mobile Development",
    location: "Remote (India)",
    type: "Full-time",
    salary: "?6-12 LPA",
    experience: "2-5 years",
    description: "Build cross-platform mobile apps for iOS and Android using React Native. Create beautiful, performant apps for startups and enterprises.",
    longDescription: "We are looking for a React Native Developer to build high-quality mobile applications. You will work on both iOS and Android apps, ensuring smooth performance and delightful user experiences across platforms.",
    responsibilities: [
      "Develop cross-platform mobile apps using React Native",
      "Build reusable components and native modules",
      "Integrate REST APIs and third-party services",
      "Optimize app performance and memory usage",
      "Publish apps to App Store and Google Play",
      "Implement push notifications and offline capabilities",
      "Write unit and integration tests"
    ],
    requirements: [
      "2+ years of React Native development",
      "Experience with native modules (iOS/Android)",
      "Knowledge of Redux and state management",
      "Understanding of app store submission process",
      "Familiarity with Firebase and push notifications",
      "Portfolio of published apps",
      "Bachelor's degree in Computer Science or equivalent"
    ],
    whatWeOffer: [
      "Work on diverse mobile projects",
      "Remote position",
      "Latest development tools",
      "App store publication support",
      "Revenue share on successful apps"
    ],
    skills: ["React Native", "Redux", "Firebase", "iOS", "Android", "REST APIs"],
    process: {
      initial: "Portfolio review (30 min)",
      technical: "Live coding interview (60 min)",
      assignment: "Build a mini app (4 hours)",
      final: "App store submission strategy (30 min)"
    },
    benefits: ["Remote work", "Latest tools", "App store support", "Revenue share", "Flexible hours"]
  },
  {
    _id: "6",
    title: "Flutter Developer",
    department: "Mobile Development",
    location: "Remote (India)",
    type: "Full-time",
    salary: "?5-10 LPA",
    experience: "1-4 years",
    description: "Join our team to build beautiful cross-platform apps using Flutter. Create engaging mobile experiences for startups and growing businesses.",
    longDescription: "We're looking for a passionate Flutter Developer to help us build next-generation mobile applications. You'll work with the latest Flutter features and create apps that work seamlessly on both iOS and Android.",
    responsibilities: [
      "Build cross-platform apps using Flutter",
      "Create custom UI components and animations",
      "Integrate REST APIs and backend services",
      "Optimize app performance and responsiveness",
      "Collaborate with design and backend teams",
      "Implement state management solutions",
      "Write clean, maintainable Dart code"
    ],
    requirements: [
      "1+ years of Flutter development experience",
      "Strong Dart programming skills",
      "Experience with state management (Provider, Bloc)",
      "Knowledge of REST API integration",
      "Understanding of mobile UI/UX principles",
      "Portfolio of Flutter projects",
      "Familiarity with Firebase is a plus"
    ],
    whatWeOffer: [
      "Learn Google's latest technology",
      "Remote work",
      "Flexible schedule",
      "Growth opportunities to lead projects",
      "Access to latest Flutter resources"
    ],
    skills: ["Flutter", "Dart", "REST APIs", "Firebase", "Provider"],
    process: {
      initial: "Technical discussion (30 min)",
      technical: "Flutter coding challenge (45 min)",
      assignment: "Build a Flutter widget (2 hours)",
      final: "Architecture discussion (30 min)"
    },
    benefits: ["Remote work", "Flexible schedule", "Growth opportunities", "Learning resources"]
  },
  {
    _id: "7",
    title: "AI/ML Engineer",
    department: "AI Development",
    location: "Remote (India)",
    type: "Full-time",
    salary: "?10-18 LPA",
    experience: "2-5 years",
    description: "Join our AI team to build intelligent solutions using machine learning and large language models. Work on chatbots, recommendation systems, and AI-powered applications.",
    longDescription: "We are building cutting-edge AI solutions for startups and enterprises. As an AI/ML Engineer, you'll work on implementing machine learning models, integrating LLMs, and creating intelligent features that solve real-world problems.",
    responsibilities: [
      "Develop and deploy machine learning models",
      "Integrate OpenAI APIs and LLMs into applications",
      "Build intelligent chatbots and AI assistants",
      "Create recommendation systems and predictive models",
      "Process and analyze large datasets",
      "Optimize model performance and accuracy",
      "Stay current with AI research and implement new techniques"
    ],
    requirements: [
      "2+ years of AI/ML experience",
      "Experience with Python and ML libraries (TensorFlow, PyTorch)",
      "Knowledge of OpenAI API and LLMs",
      "Understanding of NLP and computer vision",
      "Strong mathematical and statistical background",
      "Bachelor's/Master's in Computer Science/AI",
      "Published research or contributions to open-source is a plus"
    ],
    whatWeOffer: [
      "Work on cutting-edge AI technology",
      "Remote position",
      "Research opportunities and conference attendance",
      "Competitive salary with equity options",
      "Access to GPU resources and AI tools"
    ],
    skills: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "NLP", "Machine Learning"],
    process: {
      initial: "Research discussion (30 min)",
      technical: "ML fundamentals interview (60 min)",
      assignment: "Implement a model (3-5 hours)",
      final: "Research presentation (45 min)"
    },
    benefits: ["Cutting-edge AI work", "Research opportunities", "Competitive salary", "GPU access", "Remote work"]
  },
  {
    _id: "8",
    title: "AI Integration Specialist",
    department: "AI Development",
    location: "Remote (India)",
    type: "Full-time",
    salary: "?6-12 LPA",
    experience: "1-3 years",
    description: "Specialize in integrating AI capabilities into existing applications. Work with various AI APIs and tools to add intelligent features to software products.",
    longDescription: "We need a developer who can bridge the gap between AI capabilities and real-world applications. You'll work with our clients to understand their needs and integrate AI features into their existing software products.",
    responsibilities: [
      "Integrate AI APIs into web and mobile applications",
      "Implement chatbot and conversational AI features",
      "Add image recognition and computer vision capabilities",
      "Optimize AI model performance in production",
      "Work with OpenAI, Google AI, and other platforms",
      "Create AI-powered features for clients",
      "Document integration patterns and best practices"
    ],
    requirements: [
      "1+ years of software development experience",
      "Experience with AI/ML APIs (OpenAI, Google Cloud AI)",
      "Strong JavaScript/Python skills",
      "Understanding of REST APIs",
      "Eagerness to learn new AI technologies",
      "Problem-solving mindset",
      "Bachelor's degree in Computer Science or equivalent"
    ],
    whatWeOffer: [
      "Learn latest AI technologies",
      "Remote work",
      "Training budget for certifications",
      "Work on innovative projects",
      "Mentorship from senior AI engineers"
    ],
    skills: ["JavaScript", "Python", "OpenAI API", "REST APIs", "Node.js"],
    process: {
      initial: "Technical discussion (30 min)",
      technical: "API integration challenge (45 min)",
      assignment: "Build an AI-powered feature (3 hours)",
      final: "Project discussion (30 min)"
    },
    benefits: ["Learn latest AI tech", "Remote work", "Training budget", "Innovative projects", "Mentorship"]
  },
  {
    _id: "9",
    title: "Senior UI/UX Designer",
    department: "UI/UX Design",
    location: "Remote (India)",
    type: "Full-time",
    salary: "?7-14 LPA",
    experience: "3-6 years",
    description: "Design beautiful, user-centric interfaces for web and mobile applications. You'll work closely with developers to bring designs to life.",
    longDescription: "We are looking for a creative and experienced UI/UX Designer who can translate complex requirements into intuitive, beautiful interfaces. You'll lead the design process from research to final implementation.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Design responsive web and mobile interfaces",
      "Create and maintain design systems",
      "Collaborate with developers on implementation",
      "Present designs to clients and stakeholders",
      "Analyze user feedback and iterate on designs"
    ],
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma, Adobe XD, or Sketch",
      "Strong portfolio demonstrating design work",
      "Understanding of responsive design principles",
      "Experience with user research methods",
      "Knowledge of HTML/CSS basics",
      "Bachelor's degree in Design or related field"
    ],
    whatWeOffer: [
      "Creative freedom",
      "Work on diverse projects",
      "Remote position",
      "Latest design tools",
      "Professional development opportunities",
      "Design conference attendance"
    ],
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
    process: {
      initial: "Portfolio review (30 min)",
      technical: "Design challenge (45 min)",
      assignment: "Redesign a feature (3 hours)",
      final: "Client presentation simulation (30 min)"
    },
    benefits: ["Creative freedom", "Diverse projects", "Remote work", "Latest tools", "Professional development"]
  },
  {
    _id: "10",
    title: "QA Automation Engineer",
    department: "QA & Testing",
    location: "Remote (India)",
    type: "Full-time",
    salary: "?5-10 LPA",
    experience: "2-5 years",
    description: "Ensure software quality through automated testing. You'll build test frameworks and ensure our products are bug-free and performant.",
    longDescription: "Quality is our top priority. We need a QA Automation Engineer who can build robust testing frameworks and ensure our products meet the highest standards of quality and reliability.",
    responsibilities: [
      "Design and implement automated test suites",
      "Perform manual and exploratory testing",
      "Create test plans and test cases",
      "Integrate tests into CI/CD pipelines",
      "Track and report bugs",
      "Ensure cross-browser and device compatibility",
      "Mentor developers on testing best practices"
    ],
    requirements: [
      "2+ years of QA experience",
      "Experience with Selenium, Cypress, or Playwright",
      "Knowledge of JavaScript/Python",
      "Understanding of CI/CD pipelines",
      "Experience with bug tracking tools (Jira)",
      "Attention to detail",
      "Bachelor's degree in Computer Science or equivalent"
    ],
    whatWeOffer: [
      "Ensure product quality",
      "Remote work",
      "Learning opportunities",
      "Growth to leadership roles",
      "Influence testing strategy"
    ],
    skills: ["Selenium", "Cypress", "JavaScript", "CI/CD", "Jira", "Test Automation"],
    process: {
      initial: "Technical screening (30 min)",
      technical: "Automation challenge (45 min)",
      assignment: "Write test suite (3 hours)",
      final: "Quality strategy discussion (30 min)"
    },
    benefits: ["Remote work", "Learning opportunities", "Growth to leadership", "Strategy influence"]
  },
  {
    _id: "11",
    title: "Frontend Development Intern",
    department: "Web Development",
    location: "Remote (India)",
    type: "Internship",
    salary: "?15,000-25,000/month",
    experience: "0-1 years (Freshers)",
    description: "Kickstart your career with hands-on experience in modern web development. Learn from experienced developers and work on real projects.",
    longDescription: "This is a paid internship designed for passionate individuals who want to start their career in web development. You'll work on real projects, learn from senior developers, and get hands-on experience with modern technologies.",
    responsibilities: [
      "Build React components under guidance",
      "Learn modern development practices",
      "Participate in code reviews",
      "Fix bugs and implement features",
      "Write clean, documented code",
      "Attend daily stand-ups and team meetings",
      "Complete assigned learning modules"
    ],
    requirements: [
      "Knowledge of HTML, CSS, JavaScript",
      "Basic understanding of React",
      "Strong desire to learn",
      "Good communication skills",
      "Portfolio or GitHub projects (preferred)",
      "Currently pursuing or recent graduate in Computer Science"
    ],
    whatWeOffer: [
      "Paid internship",
      "Mentorship from senior developers",
      "Certificate of completion",
      "Potential for full-time role",
      "Remote work",
      "Real project experience"
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
    process: {
      initial: "Resume screening",
      technical: "Basic coding assessment (30 min)",
      assignment: "Build a simple React component",
      final: "Mentorship discussion (20 min)"
    },
    benefits: ["Paid internship", "Mentorship", "Certificate", "Full-time potential", "Remote work", "Real projects"]
  },
  {
    _id: "12",
    title: "Backend Development Intern",
    department: "Custom Software Development",
    location: "Remote (India)",
    type: "Internship",
    salary: "?15,000-25,000/month",
    experience: "0-1 years (Freshers)",
    description: "Learn backend development with Node.js and MongoDB. Work on real APIs and database design under expert guidance.",
    longDescription: "Join our backend team as a paid intern and learn how to build scalable APIs, design databases, and work with modern backend technologies. You'll get hands-on experience and mentorship from experienced developers.",
    responsibilities: [
      "Build REST APIs using Node.js",
      "Work with MongoDB and database design",
      "Learn best coding practices",
      "Participate in team meetings",
      "Document technical work",
      "Write unit tests",
      "Integrate third-party services"
    ],
    requirements: [
      "Basic JavaScript knowledge",
      "Understanding of programming concepts",
      "Interest in backend development",
      "Good problem-solving skills",
      "Currently pursuing or recent graduate",
      "Familiarity with databases is a plus"
    ],
    whatWeOffer: [
      "Paid internship",
      "Learn from industry experts",
      "Real project experience",
      "Potential for full-time",
      "Remote work",
      "Career guidance"
    ],
    skills: ["JavaScript", "Node.js", "MongoDB", "REST APIs"],
    process: {
      initial: "Resume screening",
      technical: "Basic JavaScript assessment (30 min)",
      assignment: "Build a simple API",
      final: "Team fit discussion (20 min)"
    },
    benefits: ["Paid internship", "Learn from experts", "Real projects", "Full-time potential", "Remote work"]
  }
];

// API Endpoints
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", time: new Date() });
});

app.get("/api/careers/jobs", (req, res) => {
  res.json(jobs);
});

app.get("/api/careers/jobs/:id", (req, res) => {
  const job = jobs.find(j => j._id === req.params.id);
  job ? res.json(job) : res.status(404).json({ error: "Not found" });
});

// Contact form with email
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log("Contact received:", { name, email, message });
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields required" });
    }
    
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: 'fintechitsolutions.info@gmail.com',
      subject: `New Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });
    
    console.log("Email sent successfully");
    res.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact error:", error);
    res.status(500).json({ error: "Failed to send message: " + error.message });
  }
});

// Job application with email
app.post("/api/careers/apply", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, phone, experience, coverLetter, jobId, jobTitle } = req.body;
    console.log("Application received:", { name, email, jobId });
    
    if (!name || !email || !jobId) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    if (!req.file) {
      return res.status(400).json({ error: "Resume required" });
    }
    
    const job = jobs.find(j => j._id === jobId);
    const title = jobTitle || (job ? job.title : "Position");
    
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: 'fintechitsolutions.info@gmail.com',
      subject: `Job Application: ${title} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nExperience: ${experience || 'N/A'}\nCover Letter: ${coverLetter || 'N/A'}\nJob: ${title}\nJob ID: ${jobId}`,
      attachments: [{ filename: req.file.originalname, path: req.file.path }]
    });
    
    console.log("Application email sent");
    res.json({ success: true, message: "Application submitted successfully" });
  } catch (error) {
    console.error("Application error:", error);
    res.status(500).json({ error: "Failed to submit application: " + error.message });
  }
});

app.listen(PORT, () => {
  console.log(`?? Server running on http://localhost:${PORT}`);
});
