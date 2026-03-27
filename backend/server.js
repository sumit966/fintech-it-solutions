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

// COMPLETE JOB DATA WITH FULL DESCRIPTIONS
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
    longDescription: "As a Senior Full Stack Developer at Fintech IT Solutions, you will be the technical backbone of our custom software projects. You will work directly with clients to understand their business needs, design scalable architectures, and implement robust solutions. This role requires both technical excellence and the ability to mentor junior developers. You will have the opportunity to work on challenging projects across various industries including fintech, healthcare, e-commerce, and more.",
    responsibilities: [
      "Lead end-to-end development of custom software applications from concept to deployment",
      "Design scalable architecture using React, Node.js, and modern cloud technologies",
      "Build RESTful APIs and microservices that serve millions of requests",
      "Design and optimize database schemas for PostgreSQL and MongoDB",
      "Conduct code reviews and mentor junior developers",
      "Collaborate with clients to gather and refine technical requirements",
      "Ensure security best practices and performance optimization",
      "Write comprehensive technical documentation and API specifications",
      "Implement CI/CD pipelines and automated testing",
      "Troubleshoot production issues and provide timely solutions"
    ],
    requirements: [
      "3+ years of full-stack development experience with React and Node.js",
      "Expert knowledge of MongoDB, PostgreSQL, and database design",
      "Strong TypeScript and modern JavaScript (ES6+) skills",
      "Experience with AWS/Azure/GCP cloud services (EC2, S3, Lambda, etc.)",
      "Understanding of microservices architecture and Docker",
      "Experience with GraphQL and REST API design",
      "Bachelor's degree in Computer Science or equivalent experience",
      "Excellent communication and problem-solving skills",
      "Experience with Agile/Scrum methodologies",
      "Portfolio of previous work or GitHub contributions"
    ],
    whatWeOffer: [
      "?? 100% remote work - work from anywhere in India",
      "? Flexible working hours - we care about output, not hours",
      "?? Competitive salary with performance bonuses",
      "?? Health insurance coverage for you and your family",
      "?? Latest MacBook Pro development equipment",
      "?? Learning and development budget (?50,000/year)",
      "?? Yearly team retreats and offsites (fully paid)",
      "????? Direct mentorship from industry experts",
      "?? Clear career growth path to Tech Lead and Architect roles",
      "?? Opportunity to work on cutting-edge technologies"
    ],
    skills: ["React", "Node.js", "MongoDB", "TypeScript", "AWS", "REST APIs", "GraphQL", "Docker", "PostgreSQL"],
    benefits: ["Remote work", "Health insurance", "Learning budget", "Flexible hours", "Growth opportunities", "Latest MacBook"],
    hiringProcess: {
      step1: "Initial screening call with HR (30 min) - Discuss your experience and expectations",
      step2: "Technical interview with senior developers (60 min) - Live coding and system design",
      step3: "Take-home assignment (3-5 hours) - Build a small feature or fix a bug",
      step4: "Final interview with founder (30 min) - Culture fit and vision alignment",
      step5: "Offer roll-out within 48 hours"
    },
    faq: [
      { q: "Is this position fully remote?", a: "Yes, 100% remote. You can work from anywhere in India." },
      { q: "What is the notice period?", a: "We prefer immediate joiners but can wait up to 30 days." },
      { q: "Do you provide equipment?", a: "Yes, we provide a MacBook Pro and any other equipment you need." },
      { q: "What are the growth opportunities?", a: "Clear path to Tech Lead, Architect, or Product Manager roles." }
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
    description: "Join our team to build powerful ERP and business automation systems. You'll work on complex backend architecture, database design, and business logic implementation for enterprise clients.",
    longDescription: "We are looking for a Backend Developer specializing in ERP systems. You will design and implement scalable backend solutions that handle complex business workflows, inventory management, financial transactions, and reporting systems. You'll work with modern technologies and have the opportunity to shape the architecture of our ERP products.",
    responsibilities: [
      "Design and develop scalable backend systems for ERP solutions",
      "Build efficient database schemas and optimize complex SQL queries",
      "Implement business logic and workflow automation",
      "Integrate third-party APIs and services (payment gateways, shipping, etc.)",
      "Ensure system security and data integrity",
      "Write comprehensive unit and integration tests",
      "Document technical specifications and API endpoints",
      "Collaborate with frontend developers and product managers",
      "Debug production issues and provide hotfixes",
      "Participate in code reviews and knowledge sharing"
    ],
    requirements: [
      "2+ years of backend development experience with Node.js",
      "Strong knowledge of Express.js and REST API design",
      "Experience with PostgreSQL, MongoDB, or MySQL",
      "Understanding of ERP systems and business processes",
      "Knowledge of Redis, RabbitMQ, or Kafka is a plus",
      "Experience with TypeScript and modern JavaScript",
      "Bachelor's degree in Computer Science or equivalent",
      "Understanding of microservices architecture",
      "Experience with Docker and containerization"
    ],
    whatWeOffer: [
      "?? 100% remote work",
      "? Flexible schedule",
      "?? Health insurance coverage",
      "?? Skill development programs",
      "?? Quarterly performance bonuses",
      "?? Professional certification reimbursement",
      "?? 20 days of paid time off",
      "?? Team building activities"
    ],
    skills: ["Node.js", "PostgreSQL", "MongoDB", "REST APIs", "Redis", "Microservices", "TypeScript", "Docker"],
    benefits: ["Remote work", "Flexible hours", "Health insurance", "Skill development", "Quarterly bonuses"],
    hiringProcess: {
      step1: "HR screening (20 min)",
      step2: "Technical interview with backend lead (45 min)",
      step3: "System design assignment (2-3 hours)",
      step4: "Final interview with CTO (30 min)"
    },
    faq: [
      { q: "What tech stack will I work with?", a: "Node.js, Express, PostgreSQL, MongoDB, Redis, Docker, AWS." },
      { q: "Is there on-call support?", a: "We have a rotation, but it's minimal (1 week every 2 months)." }
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
    description: "We need a talented Frontend Developer to create stunning, responsive websites and web applications using React.js and Next.js.",
    longDescription: "As a Frontend Developer, you will be responsible for building beautiful, performant, and accessible user interfaces. You'll work closely with our design team to implement pixel-perfect designs and create seamless user experiences. You'll have the opportunity to work on exciting projects for startups and enterprises across various industries.",
    responsibilities: [
      "Build responsive web applications using React.js and Next.js",
      "Create reusable components and front-end libraries",
      "Optimize applications for maximum speed and scalability",
      "Collaborate with designers to implement pixel-perfect designs",
      "Ensure cross-browser compatibility and responsive design",
      "Implement SEO best practices",
      "Write clean, maintainable, and documented code",
      "Implement state management using Redux or Zustand",
      "Work with GraphQL and REST APIs",
      "Participate in code reviews and mentor junior developers"
    ],
    requirements: [
      "2+ years of frontend development experience",
      "Strong proficiency in React.js, Next.js, and TypeScript",
      "Experience with Tailwind CSS and modern styling",
      "Understanding of SEO and web performance optimization",
      "Knowledge of state management (Redux, Zustand)",
      "Portfolio of previous work or GitHub contributions",
      "Experience with GraphQL and REST APIs",
      "Understanding of web accessibility (WCAG)",
      "Bachelor's degree in Computer Science or equivalent"
    ],
    whatWeOffer: [
      "?? Remote-first culture",
      "? Flexible hours",
      "?? Latest MacBook Pro",
      "?? Continuous learning opportunities",
      "?? Work with modern tech stack",
      "??? Conference and workshop attendance budget",
      "?? 20 days of paid time off",
      "?? Regular team events"
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "GraphQL", "Jest", "Cypress"],
    benefits: ["Remote-first", "Flexible hours", "Latest MacBook", "Learning opportunities", "Modern tech stack"],
    hiringProcess: {
      step1: "Portfolio review (30 min)",
      step2: "Live coding interview (45 min)",
      step3: "Build a small component (2-3 hours)",
      step4: "Final interview with team (30 min)"
    },
    faq: [
      { q: "Do I need to know Next.js?", a: "Yes, Next.js is our primary framework for web applications." },
      { q: "What design tools do you use?", a: "We use Figma for design and collaborate closely with designers." }
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
    description: "Looking for an experienced E-commerce Developer to build and customize online stores using Shopify, WooCommerce, and custom solutions.",
    longDescription: "Join our team to help businesses create successful online stores. You'll work on Shopify themes, WooCommerce websites, and custom e-commerce solutions that drive sales and provide exceptional shopping experiences. You'll have the opportunity to work with a variety of clients and industries.",
    responsibilities: [
      "Develop and customize Shopify themes and apps",
      "Build custom WooCommerce websites with PHP",
      "Integrate payment gateways (Razorpay, Stripe, PayPal)",
      "Optimize e-commerce sites for conversions and speed",
      "Implement product catalogs and inventory management",
      "Ensure PCI compliance and security",
      "Provide technical support and maintenance",
      "Work with analytics tools to track performance",
      "Implement SEO best practices for e-commerce",
      "Collaborate with marketing teams"
    ],
    requirements: [
      "2+ years of e-commerce development experience",
      "Expertise in Shopify Liquid and WooCommerce",
      "Knowledge of PHP, JavaScript, and HTML/CSS",
      "Experience with payment gateway integrations",
      "Understanding of SEO for e-commerce",
      "Familiarity with analytics tools (Google Analytics)",
      "Experience with custom Shopify apps is a plus",
      "Portfolio of e-commerce projects"
    ],
    whatWeOffer: [
      "?? Work with leading e-commerce platforms",
      "?? Remote work",
      "?? Performance bonuses based on project success",
      "?? Learning resources and certification",
      "? Flexible work hours",
      "?? Opportunity to work with diverse clients"
    ],
    skills: ["Shopify", "WooCommerce", "PHP", "JavaScript", "Payment Gateways", "HTML/CSS", "Liquid"],
    benefits: ["Remote work", "Performance bonuses", "Learning resources", "Flexible hours"],
    hiringProcess: {
      step1: "Portfolio review (30 min)",
      step2: "Technical interview (45 min)",
      step3: "Build a Shopify section (2 hours)",
      step4: "Client project discussion (30 min)"
    },
    faq: [
      { q: "What platforms do you work with?", a: "Shopify, WooCommerce, Magento, and custom solutions." },
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
    description: "Build cross-platform mobile apps for iOS and Android using React Native. Create beautiful, performant apps for startups and enterprises.",
    longDescription: "We are looking for a React Native Developer to build high-quality mobile applications. You will work on both iOS and Android apps, ensuring smooth performance and delightful user experiences across platforms. You'll have the opportunity to work on exciting projects for clients in fintech, healthcare, e-commerce, and more.",
    responsibilities: [
      "Develop cross-platform mobile apps using React Native",
      "Build reusable components and native modules",
      "Integrate REST APIs and third-party services",
      "Optimize app performance and memory usage",
      "Publish apps to App Store and Google Play",
      "Implement push notifications and offline capabilities",
      "Write unit and integration tests",
      "Debug production issues and provide fixes",
      "Collaborate with designers and backend developers",
      "Stay updated with React Native ecosystem"
    ],
    requirements: [
      "2+ years of React Native development",
      "Experience with native modules (iOS/Android)",
      "Knowledge of Redux and state management",
      "Understanding of app store submission process",
      "Familiarity with Firebase and push notifications",
      "Portfolio of published apps",
      "Experience with TypeScript",
      "Knowledge of native iOS/Android is a plus",
      "Bachelor's degree in Computer Science or equivalent"
    ],
    whatWeOffer: [
      "?? Work on diverse mobile projects",
      "?? Remote position",
      "?? Latest development tools",
      "?? App store publication support",
      "?? Revenue share on successful apps",
      "?? Learning budget for courses",
      "?? Regular team meetups"
    ],
    skills: ["React Native", "Redux", "Firebase", "iOS", "Android", "REST APIs", "TypeScript", "Jest"],
    benefits: ["Remote work", "Latest tools", "App store support", "Revenue share", "Flexible hours"],
    hiringProcess: {
      step1: "Portfolio review (30 min)",
      step2: "Live coding interview (60 min)",
      step3: "Build a mini app (4 hours)",
      step4: "App store submission strategy (30 min)"
    },
    faq: [
      { q: "Do I need to know native iOS/Android?", a: "Basic knowledge is helpful but not required." },
      { q: "What's the app development process?", a: "We follow agile methodology with 2-week sprints." }
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
    description: "Join our team to build beautiful cross-platform apps using Flutter. Create engaging mobile experiences for startups and growing businesses.",
    longDescription: "We're looking for a passionate Flutter Developer to help us build next-generation mobile applications. You'll work with the latest Flutter features and create apps that work seamlessly on both iOS and Android. You'll have the opportunity to work on exciting projects and contribute to our Flutter expertise.",
    responsibilities: [
      "Build cross-platform apps using Flutter",
      "Create custom UI components and animations",
      "Integrate REST APIs and backend services",
      "Optimize app performance and responsiveness",
      "Collaborate with design and backend teams",
      "Implement state management solutions",
      "Write clean, maintainable Dart code",
      "Debug and fix production issues",
      "Stay updated with Flutter updates",
      "Participate in code reviews"
    ],
    requirements: [
      "1+ years of Flutter development experience",
      "Strong Dart programming skills",
      "Experience with state management (Provider, Bloc)",
      "Knowledge of REST API integration",
      "Understanding of mobile UI/UX principles",
      "Portfolio of Flutter projects",
      "Familiarity with Firebase is a plus",
      "Experience with Git and version control"
    ],
    whatWeOffer: [
      "?? Learn Google's latest technology",
      "?? Remote work",
      "? Flexible schedule",
      "?? Growth opportunities to lead projects",
      "?? Access to latest Flutter resources",
      "?? Supportive team environment"
    ],
    skills: ["Flutter", "Dart", "REST APIs", "Firebase", "Provider", "Bloc", "Git"],
    benefits: ["Remote work", "Flexible schedule", "Growth opportunities", "Learning resources"],
    hiringProcess: {
      step1: "Technical discussion (30 min)",
      step2: "Flutter coding challenge (45 min)",
      step3: "Build a Flutter widget (2 hours)",
      step4: "Architecture discussion (30 min)"
    },
    faq: [
      { q: "Do I need native experience?", a: "No, Flutter experience is sufficient." },
      { q: "What state management do you use?", a: "We use Provider and Bloc depending on project needs." }
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
    description: "Join our AI team to build intelligent solutions using machine learning and large language models. Work on chatbots, recommendation systems, and AI-powered applications.",
    longDescription: "We are building cutting-edge AI solutions for startups and enterprises. As an AI/ML Engineer, you'll work on implementing machine learning models, integrating LLMs, and creating intelligent features that solve real-world problems. You'll have the opportunity to work with the latest AI technologies and shape our AI product strategy.",
    responsibilities: [
      "Develop and deploy machine learning models in production",
      "Integrate OpenAI APIs and LLMs into applications",
      "Build intelligent chatbots and AI assistants",
      "Create recommendation systems and predictive models",
      "Process and analyze large datasets",
      "Optimize model performance and accuracy",
      "Stay current with AI research and implement new techniques",
      "Collaborate with product and engineering teams",
      "Write technical documentation",
      "Mentor junior team members"
    ],
    requirements: [
      "2+ years of AI/ML experience",
      "Experience with Python and ML libraries (TensorFlow, PyTorch)",
      "Knowledge of OpenAI API and LLMs",
      "Understanding of NLP and computer vision",
      "Strong mathematical and statistical background",
      "Bachelor's/Master's in Computer Science/AI",
      "Experience with cloud platforms (AWS SageMaker, GCP)",
      "Published research or contributions to open-source is a plus",
      "Experience with MLOps and model deployment"
    ],
    whatWeOffer: [
      "?? Work on cutting-edge AI technology",
      "?? Remote position",
      "?? Research opportunities and conference attendance",
      "?? Competitive salary with equity options",
      "??? Access to GPU resources and AI tools",
      "?? Learning budget for courses and certifications",
      "?? Work with a passionate AI team"
    ],
    skills: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "NLP", "Machine Learning", "AWS", "Docker"],
    benefits: ["Cutting-edge AI work", "Research opportunities", "Competitive salary", "GPU access", "Remote work"],
    hiringProcess: {
      step1: "Research discussion (30 min)",
      step2: "ML fundamentals interview (60 min)",
      step3: "Implement a model (3-5 hours)",
      step4: "Research presentation (45 min)"
    },
    faq: [
      { q: "What AI projects are you working on?", a: "LLM applications, recommendation systems, computer vision, and NLP." },
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
    description: "Specialize in integrating AI capabilities into existing applications. Work with various AI APIs and tools to add intelligent features to software products.",
    longDescription: "We need a developer who can bridge the gap between AI capabilities and real-world applications. You'll work with our clients to understand their needs and integrate AI features into their existing software products. This is an exciting role for someone who loves both AI and software development.",
    responsibilities: [
      "Integrate AI APIs into web and mobile applications",
      "Implement chatbot and conversational AI features",
      "Add image recognition and computer vision capabilities",
      "Optimize AI model performance in production",
      "Work with OpenAI, Google AI, and other platforms",
      "Create AI-powered features for clients",
      "Document integration patterns and best practices",
      "Troubleshoot and debug AI integrations",
      "Collaborate with AI engineers and developers"
    ],
    requirements: [
      "1+ years of software development experience",
      "Experience with AI/ML APIs (OpenAI, Google Cloud AI)",
      "Strong JavaScript/Python skills",
      "Understanding of REST APIs",
      "Eagerness to learn new AI technologies",
      "Problem-solving mindset",
      "Bachelor's degree in Computer Science or equivalent",
      "Experience with Node.js or React is a plus"
    ],
    whatWeOffer: [
      "?? Learn latest AI technologies",
      "?? Remote work",
      "?? Training budget for certifications",
      "?? Work on innovative projects",
      "????? Mentorship from senior AI engineers",
      "?? Collaborative team environment"
    ],
    skills: ["JavaScript", "Python", "OpenAI API", "REST APIs", "Node.js", "React", "FastAPI"],
    benefits: ["Learn latest AI tech", "Remote work", "Training budget", "Innovative projects", "Mentorship"],
    hiringProcess: {
      step1: "Technical discussion (30 min)",
      step2: "API integration challenge (45 min)",
      step3: "Build an AI-powered feature (3 hours)",
      step4: "Project discussion (30 min)"
    },
    faq: [
      { q: "Do I need to know machine learning?", a: "Basic understanding is helpful but not required." },
      { q: "What APIs do you use?", a: "OpenAI, Google Cloud AI, AWS Rekognition, etc." }
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
    description: "Design beautiful, user-centric interfaces for web and mobile applications. You'll work closely with developers to bring designs to life.",
    longDescription: "We are looking for a creative and experienced UI/UX Designer who can translate complex requirements into intuitive, beautiful interfaces. You'll lead the design process from research to final implementation, working with a talented team of developers and product managers. You'll have the opportunity to shape the user experience of products used by thousands of people.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Design responsive web and mobile interfaces",
      "Create and maintain design systems",
      "Collaborate with developers on implementation",
      "Present designs to clients and stakeholders",
      "Analyze user feedback and iterate on designs",
      "Create user flows and journey maps",
      "Stay updated with design trends and tools",
      "Mentor junior designers"
    ],
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma, Adobe XD, or Sketch",
      "Strong portfolio demonstrating design work",
      "Understanding of responsive design principles",
      "Experience with user research methods",
      "Knowledge of HTML/CSS basics",
      "Experience with design systems",
      "Excellent communication skills",
      "Bachelor's degree in Design or related field"
    ],
    whatWeOffer: [
      "?? Creative freedom",
      "?? Work on diverse projects",
      "?? Remote position",
      "?? Latest design tools",
      "?? Professional development opportunities",
      "??? Design conference attendance",
      "?? Collaborative team environment"
    ],
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems", "Wireframing", "Usability Testing"],
    benefits: ["Creative freedom", "Diverse projects", "Remote work", "Latest tools", "Professional development"],
    hiringProcess: {
      step1: "Portfolio review (30 min)",
      step2: "Design challenge (45 min)",
      step3: "Redesign a feature (3 hours)",
      step4: "Client presentation simulation (30 min)"
    },
    faq: [
      { q: "What tools do you use?", a: "Figma is our primary tool for design and prototyping." },
      { q: "Do I need to code?", a: "Basic HTML/CSS knowledge is helpful for communication with developers." }
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
    description: "Ensure software quality through automated testing. You'll build test frameworks and ensure our products are bug-free and performant.",
    longDescription: "Quality is our top priority. We need a QA Automation Engineer who can build robust testing frameworks and ensure our products meet the highest standards of quality and reliability. You'll work with developers to implement testing strategies and automate regression testing. This is a critical role in our engineering team.",
    responsibilities: [
      "Design and implement automated test suites",
      "Perform manual and exploratory testing",
      "Create test plans and test cases",
      "Integrate tests into CI/CD pipelines",
      "Track and report bugs",
      "Ensure cross-browser and device compatibility",
      "Mentor developers on testing best practices",
      "Write performance and load tests",
      "Maintain test documentation",
      "Collaborate with product and engineering teams"
    ],
    requirements: [
      "2+ years of QA experience",
      "Experience with Selenium, Cypress, or Playwright",
      "Knowledge of JavaScript/Python",
      "Understanding of CI/CD pipelines",
      "Experience with bug tracking tools (Jira)",
      "Attention to detail",
      "Experience with API testing (Postman)",
      "Knowledge of performance testing tools",
      "Bachelor's degree in Computer Science or equivalent"
    ],
    whatWeOffer: [
      "?? Ensure product quality",
      "?? Remote work",
      "?? Learning opportunities",
      "?? Growth to leadership roles",
      "?? Influence testing strategy",
      "?? Supportive team environment"
    ],
    skills: ["Selenium", "Cypress", "JavaScript", "CI/CD", "Jira", "Test Automation", "Python", "Postman"],
    benefits: ["Remote work", "Learning opportunities", "Growth to leadership", "Strategy influence"],
    hiringProcess: {
      step1: "Technical screening (30 min)",
      step2: "Automation challenge (45 min)",
      step3: "Write test suite (3 hours)",
      step4: "Quality strategy discussion (30 min)"
    },
    faq: [
      { q: "What testing frameworks do you use?", a: "Cypress for frontend, Jest for unit tests, Postman for API." },
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
    description: "Kickstart your career with hands-on experience in modern web development. Learn from experienced developers and work on real projects.",
    longDescription: "This is a paid internship designed for passionate individuals who want to start their career in web development. You'll work on real projects, learn from senior developers, and get hands-on experience with modern technologies. This is a great opportunity to build your portfolio and gain industry experience.",
    responsibilities: [
      "Build React components under guidance",
      "Learn modern development practices",
      "Participate in code reviews",
      "Fix bugs and implement features",
      "Write clean, documented code",
      "Attend daily stand-ups and team meetings",
      "Complete assigned learning modules",
      "Work on real client projects",
      "Learn Git and version control",
      "Collaborate with the development team"
    ],
    requirements: [
      "Knowledge of HTML, CSS, JavaScript",
      "Basic understanding of React",
      "Strong desire to learn",
      "Good communication skills",
      "Portfolio or GitHub projects (preferred)",
      "Currently pursuing or recent graduate in Computer Science",
      "Understanding of Git basics",
      "Eagerness to learn and grow"
    ],
    whatWeOffer: [
      "?? Paid internship",
      "????? Mentorship from senior developers",
      "?? Certificate of completion",
      "?? Potential for full-time role",
      "?? Remote work",
      "?? Real project experience",
      "?? Learning resources"
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Git", "Tailwind CSS"],
    benefits: ["Paid internship", "Mentorship", "Certificate", "Full-time potential", "Remote work", "Real projects"],
    hiringProcess: {
      step1: "Resume screening",
      step2: "Basic coding assessment (30 min)",
      step3: "Build a simple React component",
      step4: "Mentorship discussion (20 min)"
    },
    faq: [
      { q: "What is the duration of internship?", a: "3-6 months with possibility of extension." },
      { q: "Do I need prior experience?", a: "Basic knowledge is enough. We'll teach you the rest." }
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
    description: "Learn backend development with Node.js and MongoDB. Work on real APIs and database design under expert guidance.",
    longDescription: "Join our backend team as a paid intern and learn how to build scalable APIs, design databases, and work with modern backend technologies. You'll get hands-on experience and mentorship from experienced developers. This is a great opportunity to start your career in backend development.",
    responsibilities: [
      "Build REST APIs using Node.js",
      "Work with MongoDB and database design",
      "Learn best coding practices",
      "Participate in team meetings",
      "Document technical work",
      "Write unit tests",
      "Integrate third-party services",
      "Learn about authentication and security",
      "Work with Git and version control",
      "Collaborate with frontend developers"
    ],
    requirements: [
      "Basic JavaScript knowledge",
      "Understanding of programming concepts",
      "Interest in backend development",
      "Good problem-solving skills",
      "Currently pursuing or recent graduate",
      "Familiarity with databases is a plus",
      "Eagerness to learn",
      "Good communication skills"
    ],
    whatWeOffer: [
      "?? Paid internship",
      "????? Learn from industry experts",
      "?? Real project experience",
      "?? Potential for full-time",
      "?? Remote work",
      "?? Career guidance",
      "?? Learning resources"
    ],
    skills: ["JavaScript", "Node.js", "MongoDB", "REST APIs", "Git", "Express.js"],
    benefits: ["Paid internship", "Learn from experts", "Real projects", "Full-time potential", "Remote work"],
    hiringProcess: {
      step1: "Resume screening",
      step2: "Basic JavaScript assessment (30 min)",
      step3: "Build a simple API",
      step4: "Team fit discussion (20 min)"
    },
    faq: [
      { q: "What will I learn?", a: "Node.js, Express, MongoDB, REST APIs, and more." },
      { q: "Is there a chance for full-time employment?", a: "Yes, based on performance." }
    ]
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
    console.log("?? Contact received:", { name, email, message });
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields required" });
    }
    
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: 'fintechitsolutions.info@gmail.com',
      subject: `?? New Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<h2>New Contact</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`
    });
    
    console.log("? Contact email sent");
    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("? Contact error:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

// Job application
app.post("/api/careers/apply", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, phone, experience, coverLetter, jobId, jobTitle } = req.body;
    console.log("?? Application received:", { name, email, jobId });
    
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
      subject: `?? Job Application: ${title} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nExperience: ${experience || 'N/A'}\nCover Letter: ${coverLetter || 'N/A'}\nJob: ${title}\nJob ID: ${jobId}`,
      attachments: [{ filename: req.file.originalname, path: req.file.path }]
    });
    
    console.log("? Application email sent");
    res.json({ success: true, message: "Application submitted successfully!" });
  } catch (error) {
    console.error("? Application error:", error);
    res.status(500).json({ error: "Failed to submit application" });
  }
});

app.listen(PORT, () => {
  console.log(`?? Server running on http://localhost:${PORT}`);
});
