import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft,
  ArrowRight,
  Cpu,
  GitBranch,
  Lightbulb,
  Code,
  Clock
} from "lucide-react";

const researchData = {
  "ai-integration": {
    title: "AI Integration Guides",
    icon: Cpu,
    description: "How to add ChatGPT, image recognition, and ML to your product",
    content: `We're exploring how startups can leverage AI without breaking the bank. Here's what we're learning.

    ## Current Research Areas

    ### ChatGPT Integration
    We're building templates for:
    - Customer support chatbots
    - Content generation APIs
    - Code assistance tools

    ### Image Recognition
    Exploring applications for:
    - Product catalog automation
    - Quality control systems
    - Content moderation

    ### Machine Learning
    Researching starter kits for:
    - Predictive analytics
    - Recommendation engines
    - Customer segmentation

    ## Coming Soon
    We're developing ready-to-use AI components that startups can easily integrate. Sign up for updates!`,
    status: "In Progress",
    expectedDate: "June 2024",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800"
  },
  "startup-templates": {
    title: "Startup Templates",
    icon: GitBranch,
    description: "Open-source boilerplates we're building for the community",
    content: `We're building free, open-source templates to help startups launch faster.

    ## Current Templates

    ### MVP Boilerplate
    - React + Node.js starter kit
    - Authentication included
    - Database setup ready
    - REST API structure

    ### SaaS Starter
    - Multi-tenant architecture
    - Subscription billing
    - User management
    - Admin dashboard

    ### E-commerce Base
    - Product catalog
    - Shopping cart
    - Payment integration
    - Order management

    ## Status
    These templates are in active development. We're testing them with real projects.

    ## Get Involved
    Want to contribute? Check our GitHub repository once launched.`,
    status: "In Development",
    expectedDate: "May 2024",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800"
  },
  "tech-research": {
    title: "Tech Research",
    icon: Lightbulb,
    description: "Exploring new frameworks and tools for faster development",
    content: `We're constantly evaluating new technologies to find what works best for startups.

    ## What We're Exploring

    ### Framework Comparisons
    - Next.js vs Remix
    - tRPC vs GraphQL
    - Prisma vs Drizzle

    ### Cloud Solutions
    - AWS for startups
    - Vercel vs Netlify
    - Supabase vs Firebase

    ### Development Tools
    - AI coding assistants
    - Testing frameworks
    - Deployment tools

    ## Our Findings
    We'll share our research through blog posts and case studies. Check back regularly!

    ## Have a suggestion?
    Let us know what technologies you'd like us to research.`,
    status: "Ongoing",
    expectedDate: "Monthly updates",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800"
  },
  "open-source": {
    title: "Open Source",
    icon: Code,
    description: "Our contributions to the developer community",
    content: `We believe in giving back to the community. Here's what we're building.

    ## Current Projects

    ### React Component Library
    - Reusable UI components
    - Tailwind CSS based
    - Accessible by design

    ### Node.js Utilities
    - Auth helpers
    - Database tools
    - API utilities

    ### Documentation Templates
    - API documentation
    - Project READMEs
    - Contributing guides

    ## Get Involved
    All our open source projects will be on GitHub. Contributions welcome!

    ## Coming Soon
    We're planning to release more tools as we build them.`,
    status: "Active",
    expectedDate: "Always adding",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800"
  }
};

export default function ResearchDetail() {
  const { slug } = useParams();
  const research = researchData[slug];

  if (!research) {
    return (
      <div className="pt-32 text-center min-h-screen">
        <h1 className="text-3xl mb-4">Research topic not found</h1>
        <Link to="/insights" className="text-blue-600 hover:underline">
          ← Back to Insights
        </Link>
      </div>
    );
  }

  const IconComponent = research.icon;

  return (
    <main className="pt-24 bg-white min-h-screen">
      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link
          to="/insights"
          className="inline-flex items-center text-gray-600 hover:text-blue-600 transition"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Insights
        </Link>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{research.title}</h1>
          </div>
          <p className="text-xl text-purple-100 mb-4">{research.description}</p>
          <div className="flex gap-4 text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-lg">Status: {research.status}</span>
            <span className="bg-white/20 px-4 py-2 rounded-lg">Expected: {research.expectedDate}</span>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <img
            src={research.image}
            alt={research.title}
            className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            {research.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.replace('##', '')}
                  </h2>
                );
              } else if (paragraph.startsWith('###')) {
                return (
                  <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
                    {paragraph.replace('###', '')}
                  </h3>
                );
              } else if (paragraph.startsWith('-')) {
                return (
                  <li key={index} className="ml-6 text-gray-700">
                    {paragraph.replace('-', '')}
                  </li>
                );
              } else if (paragraph.trim()) {
                return (
                  <p key={index} className="text-gray-700 mb-4">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to stay updated?</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest research and tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300"
            />
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}