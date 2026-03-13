import mongoose from "mongoose";
import dotenv from "dotenv";
import Job from "./models/Job.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);
console.log("✅ MongoDB connected for job seeding");

const jobs = [
  {
    title: "Frontend Developer (React)",
    department: "Engineering",
    experience: "0–2 Years",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    jobType: "Full-time",
    location: "Remote",
    salaryRange: "₹4–6 LPA",
    description: "Build modern UI using React.",
    responsibilities: [
      "Develop UI components",
      "Integrate APIs",
      "Optimize performance"
    ],
    requirements: [
      "Strong React basics",
      "Good JavaScript knowledge"
    ]
  },
  {
    title: "Backend Developer (Node.js)",
    department: "Engineering",
    experience: "1–4 Years",
    skills: ["Node.js", "Express", "MongoDB"],
    location: "Bangalore",
    salaryRange: "₹6–10 LPA",
    description: "Build scalable backend services.",
    responsibilities: [
      "Create REST APIs",
      "Database optimization",
      "Security implementation"
    ],
    requirements: [
      "Node.js experience",
      "MongoDB knowledge"
    ]
  },
  {
    title: "Full Stack Developer (MERN)",
    department: "Engineering",
    experience: "2–5 Years",
    skills: ["React", "Node.js", "MongoDB"],
    location: "Hyderabad",
    salaryRange: "₹8–14 LPA",
    description: "Work on end-to-end web applications.",
    responsibilities: [
      "Frontend + backend development",
      "API design",
      "System optimization"
    ],
    requirements: [
      "MERN stack expertise",
      "Problem-solving skills"
    ]
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    experience: "1–3 Years",
    skills: ["Figma", "Adobe XD", "Wireframing"],
    location: "Remote",
    salaryRange: "₹4–7 LPA",
    description: "Design intuitive user interfaces.",
    responsibilities: [
      "Create wireframes",
      "Design prototypes",
      "Collaborate with dev team"
    ],
    requirements: [
      "Design tools experience",
      "Creative mindset"
    ]
  },
  {
    title: "DevOps Engineer",
    department: "Cloud & Infrastructure",
    experience: "3–6 Years",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    location: "Pune",
    salaryRange: "₹10–18 LPA",
    description: "Manage cloud infrastructure.",
    responsibilities: [
      "Deploy applications",
      "Maintain CI/CD pipelines",
      "Ensure system uptime"
    ],
    requirements: [
      "AWS experience",
      "Docker/K8s knowledge"
    ]
  }
];

/* AUTO DUPLICATE TO MAKE 50 JOBS */
const fullList = [];
for (let i = 0; i < 10; i++) {
  jobs.forEach(job => {
    fullList.push({
      ...job,
      title: `${job.title} (${i + 1})`
    });
  });
}

await Job.insertMany(fullList);
console.log("🎉 50 JOBS INSERTED SUCCESSFULLY");

process.exit();
