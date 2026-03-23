import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Job from '../models/Job.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

const jobs = [
  // CUSTOM SOFTWARE DEVELOPMENT JOBS
  {
    title: "Senior Full Stack Developer",
    department: "Custom Software Development",
    location: "Remote (India)",
    type: "Full-time",
    experience: "3-6 years",
    salary: "?8-15 LPA",
    serviceCategory: "Custom Software Development",
    description: "We're looking for an experienced Full Stack Developer to build enterprise-grade custom software solutions for our clients. You'll work on complex business applications, ERP systems, and automation tools.",
    responsibilities: [
      "Design and develop scalable full-stack applications using React and Node.js",
      "Build RESTful APIs and microservices architecture",
      "Collaborate with clients to understand requirements and deliver solutions",
      "Write clean, maintainable, and well-documented code",
      "Mentor junior developers and conduct code reviews",
      "Implement best practices for security and performance"
    ],
    requirements: [
      "3+ years of experience in full-stack development",
      "Strong proficiency in React.js, Node.js, and MongoDB/PostgreSQL",
      "Experience with TypeScript, Redux, and modern JavaScript",
      "Knowledge of REST APIs and microservices",
      "Understanding of AWS/Azure cloud services",
      "Bachelor's degree in Computer Science or related field"
    ],
    benefits: [
      "100% Remote Work – Work from anywhere in India",
      "Flexible working hours",
      "Health insurance coverage",
      "Learning & development budget",
      "Performance bonuses",
      "Yearly team retreats",
      "Latest MacBook/development equipment"
    ],
    skills: ["React", "Node.js", "MongoDB", "TypeScript", "AWS", "REST APIs"],
    featured: true
  },
  
  {
    title: "Backend Developer - ERP Systems",
    department: "Custom Software Development",
    location: "Remote (India)",
    type: "Full-time",
    experience: "2-5 years",
    salary: "?6-12 LPA",
    serviceCategory: "Custom Software Development",
    description: "Join our team to build powerful ERP and business automation systems. You'll work on backend architecture, database design, and complex business logic implementation.",
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
      "Knowledge of REST API design principles",
      "Experience with Redis, RabbitMQ is a plus"
    ],
    benefits: [
      "100% Remote Work",
      "Flexible schedule",
      "Health insurance",
      "Skill development programs",
      "Quarterly bonuses"
    ],
    skills: ["Node.js", "PostgreSQL", "MongoDB", "REST APIs", "Redis", "Microservices"]
  },
  
  // WEB DEVELOPMENT JOBS
  {
    title: "React/Next.js Frontend Developer",
    department: "Web Development",
    location: "Remote (India)",
    type: "Full-time",
    experience: "2-4 years",
    salary: "?5-10 LPA",
    serviceCategory: "Web Development",
    description: "We need a talented Frontend Developer to create stunning, responsive websites and web applications. You'll work with modern frameworks to deliver exceptional user experiences.",
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
    benefits: [
      "Remote-first culture",
      "Flexible hours",
      "Latest MacBook Pro",
      "Continuous learning opportunities",
      "Work with modern tech stack"
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "GraphQL"],
    featured: true
  },
  
  {
    title: "E-commerce Developer (Shopify/WordPress)",
    department: "Web Development",
    location: "Remote (India)",
    type: "Full-time",
    experience: "2-5 years",
    salary: "?4-9 LPA",
    serviceCategory: "Web Development",
    description: "Looking for an experienced E-commerce Developer to build and customize online stores. You'll work with Shopify, WooCommerce, and custom e-commerce solutions.",
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
      "Understanding of SEO for e-commerce",
      "Familiarity with analytics tools"
    ],
    benefits: [
      "Work with leading e-commerce platforms",
      "Remote work",
      "Performance bonuses",
      "Learning resources"
    ],
    skills: ["Shopify", "WooCommerce", "PHP", "JavaScript", "Payment Gateways"]
  },
  
  // MOBILE DEVELOPMENT JOBS
  {
    title: "React Native Mobile Developer",
    department: "Mobile Development",
    location: "Remote (India)",
    type: "Full-time",
    experience: "2-5 years",
    salary: "?6-12 LPA",
    serviceCategory: "Mobile Development",
    description: "Build cross-platform mobile apps for iOS and Android using React Native. You'll create beautiful, performant apps for startups and enterprises.",
    responsibilities: [
      "Develop cross-platform mobile apps using React Native",
      "Build reusable components and native modules",
      "Integrate REST APIs and third-party services",
      "Optimize app performance and memory usage",
      "Publish apps to App Store and Google Play",
      "Implement push notifications and offline capabilities"
    ],
    requirements: [
      "2+ years of React Native development",
      "Experience with native modules (iOS/Android)",
      "Knowledge of Redux and state management",
      "Understanding of app store submission process",
      "Familiarity with Firebase and push notifications",
      "Portfolio of published apps"
    ],
    benefits: [
      "Work on diverse mobile projects",
      "Remote position",
      "Latest development tools",
      "App store publication support"
    ],
    skills: ["React Native", "Redux", "Firebase", "iOS", "Android", "REST APIs"],
    featured: true
  },
  
  {
    title: "Flutter Developer",
    department: "Mobile Development",
    location: "Remote (India)",
    type: "Full-time",
    experience: "1-4 years",
    salary: "?5-10 LPA",
    serviceCategory: "Mobile Development",
    description: "Join our team to build beautiful cross-platform apps using Flutter. You'll create engaging mobile experiences for startups and growing businesses.",
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
    benefits: [
      "Learn Google's latest technology",
      "Remote work",
      "Flexible schedule",
      "Growth opportunities"
    ],
    skills: ["Flutter", "Dart", "REST APIs", "Firebase", "Provider"]
  },
  
  // AI DEVELOPMENT JOBS
  {
    title: "AI/ML Engineer",
    department: "AI Development",
    location: "Remote (India)",
    type: "Full-time",
    experience: "2-5 years",
    salary: "?10-18 LPA",
    serviceCategory: "AI Development",
    description: "Join our AI team to build intelligent solutions using machine learning and large language models. Work on chatbots, recommendation systems, and AI-powered applications.",
    responsibilities: [
      "Develop and deploy machine learning models",
      "Integrate OpenAI APIs and LLMs into applications",
      "Build intelligent chatbots and AI assistants",
      "Create recommendation systems and predictive models",
      "Process and analyze large datasets",
      "Optimize model performance and accuracy"
    ],
    requirements: [
      "2+ years of AI/ML experience",
      "Experience with Python and ML libraries (TensorFlow, PyTorch)",
      "Knowledge of OpenAI API and LLMs",
      "Understanding of NLP and computer vision",
      "Strong mathematical and statistical background",
      "Bachelor's/Master's in Computer Science/AI"
    ],
    benefits: [
      "Work on cutting-edge AI technology",
      "Remote position",
      "Research opportunities",
      "Competitive salary"
    ],
    skills: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "NLP", "Machine Learning"],
    featured: true
  },
  
  {
    title: "AI Integration Specialist",
    department: "AI Development",
    location: "Remote (India)",
    type: "Full-time",
    experience: "1-3 years",
    salary: "?6-12 LPA",
    serviceCategory: "AI Development",
    description: "Specialize in integrating AI capabilities into existing applications. Work with various AI APIs and tools to add intelligent features to software products.",
    responsibilities: [
      "Integrate AI APIs into web and mobile applications",
      "Implement chatbot and conversational AI features",
      "Add image recognition and computer vision capabilities",
      "Optimize AI model performance in production",
      "Work with OpenAI, Google AI, and other platforms",
      "Create AI-powered features for clients"
    ],
    requirements: [
      "1+ years of software development experience",
      "Experience with AI/ML APIs (OpenAI, Google Cloud AI)",
      "Strong JavaScript/Python skills",
      "Understanding of REST APIs",
      "Eagerness to learn new AI technologies"
    ],
    benefits: [
      "Learn latest AI technologies",
      "Remote work",
      "Training budget",
      "Work on innovative projects"
    ],
    skills: ["JavaScript", "Python", "OpenAI API", "REST APIs", "Node.js"]
  },
  
  // UI/UX DESIGN JOBS
  {
    title: "Senior UI/UX Designer",
    department: "UI/UX Design",
    location: "Remote (India)",
    type: "Full-time",
    experience: "3-6 years",
    salary: "?7-14 LPA",
    serviceCategory: "UI/UX Design",
    description: "Design beautiful, user-centric interfaces for web and mobile applications. You'll work closely with developers to bring designs to life.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Design responsive web and mobile interfaces",
      "Create and maintain design systems",
      "Collaborate with developers on implementation",
      "Present designs to clients and stakeholders"
    ],
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma, Adobe XD, or Sketch",
      "Strong portfolio demonstrating design work",
      "Understanding of responsive design principles",
      "Experience with user research methods",
      "Knowledge of HTML/CSS basics"
    ],
    benefits: [
      "Creative freedom",
      "Work on diverse projects",
      "Remote position",
      "Latest design tools",
      "Professional development"
    ],
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
    featured: true
  },
  
  // QA TESTING JOBS
  {
    title: "QA Automation Engineer",
    department: "QA & Testing",
    location: "Remote (India)",
    type: "Full-time",
    experience: "2-5 years",
    salary: "?5-10 LPA",
    serviceCategory: "QA & Testing",
    description: "Ensure software quality through automated testing. You'll build test frameworks and ensure our products are bug-free and performant.",
    responsibilities: [
      "Design and implement automated test suites",
      "Perform manual and exploratory testing",
      "Create test plans and test cases",
      "Integrate tests into CI/CD pipelines",
      "Track and report bugs",
      "Ensure cross-browser and device compatibility"
    ],
    requirements: [
      "2+ years of QA experience",
      "Experience with Selenium, Cypress, or Playwright",
      "Knowledge of JavaScript/Python",
      "Understanding of CI/CD pipelines",
      "Experience with bug tracking tools (Jira)",
      "Attention to detail"
    ],
    benefits: [
      "Ensure product quality",
      "Remote work",
      "Learning opportunities",
      "Growth to leadership roles"
    ],
    skills: ["Selenium", "Cypress", "JavaScript", "CI/CD", "Jira", "Test Automation"]
  },
  
  // INTERNSHIPS
  {
    title: "Frontend Development Intern",
    department: "Web Development",
    location: "Remote (India)",
    type: "Internship",
    experience: "0-1 years (Freshers)",
    salary: "?15,000-25,000/month",
    serviceCategory: "Web Development",
    description: "Kickstart your career with hands-on experience in modern web development. Learn from experienced developers and work on real projects.",
    responsibilities: [
      "Build React components under guidance",
      "Learn modern development practices",
      "Participate in code reviews",
      "Fix bugs and implement features",
      "Write clean, documented code"
    ],
    requirements: [
      "Knowledge of HTML, CSS, JavaScript",
      "Basic understanding of React",
      "Strong desire to learn",
      "Good communication skills",
      "Portfolio or GitHub projects (preferred)"
    ],
    benefits: [
      "Paid internship",
      "Mentorship from senior developers",
      "Certificate of completion",
      "Potential for full-time role",
      "Remote work"
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Git"]
  },
  
  {
    title: "Backend Development Intern",
    department: "Custom Software Development",
    location: "Remote (India)",
    type: "Internship",
    experience: "0-1 years (Freshers)",
    salary: "?15,000-25,000/month",
    serviceCategory: "Custom Software Development",
    description: "Learn backend development with Node.js and MongoDB. Work on real APIs and database design under expert guidance.",
    responsibilities: [
      "Build REST APIs using Node.js",
      "Work with MongoDB and database design",
      "Learn best coding practices",
      "Participate in team meetings",
      "Document technical work"
    ],
    requirements: [
      "Basic JavaScript knowledge",
      "Understanding of programming concepts",
      "Interest in backend development",
      "Good problem-solving skills"
    ],
    benefits: [
      "Paid internship",
      "Learn from industry experts",
      "Real project experience",
      "Potential for full-time",
      "Remote work"
    ],
    skills: ["JavaScript", "Node.js", "MongoDB", "REST APIs"]
  }
];

async function seedJobs() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
    
    // Clear existing jobs
    await Job.deleteMany({});
    console.log('Cleared existing jobs');
    
    // Insert new jobs
    await Job.insertMany(jobs);
    console.log(`? Added ${jobs.length} jobs successfully`);
    
    // List all jobs
    const allJobs = await Job.find();
    console.log('\n?? Available Jobs:');
    allJobs.forEach(job => {
      console.log(`  - ${job.title} (${job.department}) - ${job.location}`);
    });
    
    await mongoose.disconnect();
    console.log('\n? Seeding completed!');
  } catch (error) {
    console.error('Error seeding jobs:', error);
  }
}

seedJobs();
