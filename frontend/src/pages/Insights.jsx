import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  BookOpen, 
  TrendingUp, 
  Code, 
  DollarSign,
  Users,
  Calendar,
  Mail,
  Sparkles,
  Cpu,
  Lightbulb,
  GitBranch,
  Clock
} from "lucide-react";
import Container from "../layout/Container";

const categories = [
  { name: "MVP Development", icon: Code, count: 12, color: "from-blue-500 to-cyan-500" },
  { name: "Tech Stack Decisions", icon: Cpu, count: 8, color: "from-purple-500 to-pink-500" },
  { name: "Fundraising Tips", icon: DollarSign, count: 6, color: "from-green-500 to-emerald-500" },
  { name: "Product Strategy", icon: TrendingUp, count: 10, color: "from-orange-500 to-red-500" },
  { name: "Startup Growth", icon: Users, count: 7, color: "from-indigo-500 to-blue-500" }
];

const featuredArticles = [
  {
    slug: "how-to-build-mvp-under-5l",
    title: "How to Build an MVP Under ₹5L",
    excerpt: "A practical guide to launching your product with limited budget. Learn how to prioritize features and validate your idea.",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "MVP Development",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
    content: `Building an MVP doesn't have to break the bank. Here's our step-by-step guide to launching your product with a limited budget.

    ## 1. Start with the Core Problem
    Identify the single most important problem your product solves. Everything else can wait.

    ## 2. Choose the Right Tech Stack
    Use proven technologies that let you move fast. React + Node.js + PostgreSQL is a great starting point.

    ## 3. Build Only What's Essential
    Every feature should directly solve the core problem. If it's not essential, save it for later.

    ## 4. Launch and Iterate
    Get feedback from real users and improve based on what you learn.

    ## 5. Scale Gradually
    Add features only when users demand them. This keeps costs low and focus high.`
  },
  {
    slug: "choosing-right-tech-stack",
    title: "Choosing the Right Tech Stack for Your Startup",
    excerpt: "React vs Vue vs Angular - what should you choose for your first product? We break down the pros and cons.",
    date: "March 10, 2024",
    readTime: "10 min read",
    category: "Tech Stack",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    content: `Choosing the right technology stack is one of the most important decisions for your startup. Here's what you need to know.

    ## React
    - **Pros**: Huge ecosystem, great for complex UIs
    - **Cons**: Steeper learning curve
    - **Best for**: Complex web applications

    ## Vue
    - **Pros**: Easy to learn, great documentation
    - **Cons**: Smaller ecosystem than React
    - **Best for**: Startups wanting to move fast

    ## Angular
    - **Pros**: Complete framework, TypeScript built-in
    - **Cons**: Opinionated, harder to change
    - **Best for**: Enterprise applications

    ## Our Recommendation
    For most startups, we recommend React with Next.js. It gives you the best balance of flexibility, performance, and developer experience.`
  },
  {
    slug: "when-to-hire-dev-partner",
    title: "When to Hire a Development Partner",
    excerpt: "Signs that it's time to bring in external expertise for your startup. Make the right decision at the right time.",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Startup Growth",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    content: `Knowing when to hire external help can make or break your startup. Here are the signs it's time.

    ## You're Stuck in Development Hell
    If your MVP is taking longer than expected, it might be time for expert help.

    ## You Need Technical Guidance
    A development partner brings experience from dozens of projects.

    ## You're Preparing for Fundraising
    Investors want to see a solid technical foundation.

    ## You Need to Scale Fast
    When growth accelerates, you need a team that can keep up.

    ## Your In-House Team is Burning Out
    Protect your team's health by bringing in reinforcements.`
  },
  {
    slug: "equity-vs-cash-founders",
    title: "Equity vs Cash: What Founders Should Know",
    excerpt: "A guide to structuring developer compensation for early-stage startups. Balance your burn rate with talent acquisition.",
    date: "February 28, 2024",
    readTime: "7 min read",
    category: "Fundraising",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800",
    content: `Deciding between equity and cash compensation is crucial for early-stage startups.

    ## When to Offer Equity
    - Early stage with limited cash
    - Need for long-term commitment
    - Strategic partners who add value

    ## When to Pay Cash
    - Specific, short-term projects
    - Specialized expertise needed
    - When you want full ownership

    ## Finding the Right Balance
    Most successful startups use a mix of both. Cash for immediate needs, equity for long-term partners.

    ## Common Equity Ranges
    - First technical hire: 5-10%
    - Early employees: 1-3%
    - Contractors: Cash only or small grants`
  }
];

const innovations = [
  {
    icon: Cpu,
    title: "AI Integration Guides",
    desc: "How to add ChatGPT, image recognition, and ML to your product",
    slug: "ai-integration"
  },
  {
    icon: GitBranch,
    title: "Startup Templates",
    desc: "Open-source boilerplates we're building for the community",
    slug: "startup-templates"
  },
  {
    icon: Lightbulb,
    title: "Tech Research",
    desc: "Exploring new frameworks and tools for faster development",
    slug: "tech-research"
  },
  {
    icon: Code,
    title: "Open Source",
    desc: "Our contributions to the developer community",
    slug: "open-source"
  }
];

export default function Insights() {
  return (
    <main className="pt-24 bg-white">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Insights for
              <span className="block text-yellow-300">Startup Founders</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Articles, guides, and resources to help you build and grow your startup
            </p>
          </div>
        </Container>
      </section>

      {/* CATEGORIES */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/insights/category/${category.name.toLowerCase().replace(/ /g, '-')}`}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} mx-auto mb-3 flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} articles</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="py-20">
        <Container>
          <h2 className="text-4xl font-bold mb-4">Featured Articles</h2>
          <p className="text-xl text-gray-600 mb-12">Hand-picked resources for startup founders</p>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <Link
                key={index}
                to={`/insights/${article.slug}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-blue-600 mb-3">
                    <span className="bg-blue-50 px-3 py-1 rounded-full">{article.category}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500 flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">{article.date}</p>
                    <span className="text-blue-600 group-hover:translate-x-2 transition inline-block">
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* RESEARCH & INNOVATION */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Research & Innovation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What we're exploring to help startups launch faster
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovations.map((item, index) => (
              <Link
                key={index}
                to={`/insights/research/${item.slug}`}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <item.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <span className="text-purple-600 font-medium inline-flex items-center group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20">
        <Container>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-12">
            <div className="max-w-3xl mx-auto text-center">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get Weekly Insights for Founders
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join 500+ startup founders who get our newsletter
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-blue-200 mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}