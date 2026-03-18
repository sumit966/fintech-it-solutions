import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { 
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Bookmark,
  ArrowRight
} from "lucide-react";

// This would normally come from a data file or API
const articlesData = {
  "mvp-under-5l": {
    title: "How We Help Startups Launch MVPs Under ₹5L",
    date: "March 12, 2024",
    readTime: "5 min read",
    category: "MVP Development",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200",
    content: `Building an MVP doesn't have to cost a fortune. Here's our proven approach to launching your product with a limited budget.

    ## The Myth of Expensive MVPs
    Many founders believe they need ₹10L+ to build an MVP. This simply isn't true. With the right approach, you can launch a functional product for under ₹5L.

    **Why MVPs cost less than you think:**
    - Focus on core features only
    - Use proven technologies
    - Avoid over-engineering
    - Launch fast, iterate later

    ## Our 5-Step MVP Process

    ### Step 1: Idea Validation (Week 1)
    Before writing any code, we validate your idea:
    - Market research
    - Competitor analysis
    - User interviews
    - Problem-solution fit

    **Cost: ₹25,000**

    ### Step 2: Feature Prioritization (Week 2)
    We help you identify what's essential:
    - Must-have features
    - Nice-to-have (save for later)
    - User journey mapping
    - Technical requirements

    **Cost: ₹25,000**

    ### Step 3: Design & Prototyping (Week 3-4)
    Create a visual blueprint:
    - Wireframes
    - UI design
    - Clickable prototype
    - User testing

    **Cost: ₹75,000**

    ### Step 4: Development (Week 5-10)
    Build the actual product:
    - Agile development sprints
    - Weekly progress updates
    - Continuous testing
    - Your feedback incorporated

    **Cost: ₹3,00,000**

    ### Step 5: Launch & Iterate (Week 11-12)
    Get it in front of users:
    - Deployment
    - User onboarding
    - Feedback collection
    - First iterations

    **Cost: ₹75,000**

    **Total: Under ₹5,00,000**

    ## Real Examples
    **Case Study: TechStart**
    - Recruitment platform MVP
    - Launched in 10 weeks
    - Cost: ₹4.8L
    - Result: Secured ₹50L in seed funding

    **Case Study: EcomMart**
    - D2C marketplace MVP
    - Launched in 12 weeks
    - Cost: ₹4.5L
    - Result: 100+ sellers in first month

    ## Tips for Keeping Costs Low
    1. **Start with one platform** - Web first, mobile later
    2. **Use existing tools** - Don't reinvent the wheel
    3. **Avoid custom designs** - Use component libraries
    4. **Launch with manual processes** - Automate later
    5. **Get user feedback early** - Build what's needed

    ## Ready to Start Your MVP?
    We specialize in helping founders launch MVPs under budget. Let's discuss your idea.`,
    related: [
      {
        slug: "choosing-right-tech-stack",
        title: "Choosing the Right Tech Stack for Your Startup"
      },
      {
        slug: "when-to-hire-dev-partner",
        title: "When to Hire a Development Partner"
      }
    ]
  },
  "choosing-right-tech-stack": {
    title: "Choosing the Right Tech Stack for Your Startup",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Tech Stack",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200",
    content: `One of the most important decisions for your startup is choosing the right technology stack. Here's our guide to making the right choice.

    ## What is a Tech Stack?
    A tech stack is the combination of technologies used to build your application:
    - **Frontend**: What users see
    - **Backend**: Server-side logic
    - **Database**: Data storage
    - **Infrastructure**: Hosting and deployment

    ## Popular Frontend Options

    ### React
    **Pros:**
    - Largest ecosystem
    - Great performance
    - Reusable components
    - Strong community

    **Cons:**
    - Steeper learning curve
    - Requires additional libraries

    **Best for:** Complex applications, startups planning to scale

    ### Vue.js
    **Pros:**
    - Easy to learn
    - Excellent documentation
    - Flexible

    **Cons:**
    - Smaller ecosystem
    - Fewer job candidates

    **Best for:** Smaller teams, rapid development

    ### Next.js (React Framework)
    **Pros:**
    - Server-side rendering
    - Great for SEO
    - Built-in routing
    - Performance optimized

    **Cons:**
    - Opinionated structure

    **Best for:** Content-heavy sites, SEO-critical applications

    ## Backend Options

    ### Node.js
    **Pros:**
    - JavaScript everywhere
    - Fast development
    - Huge package ecosystem
    - Great for real-time apps

    **Cons:**
    - Not ideal for CPU-intensive tasks

    **Best for:** Most web applications, APIs

    ### Python (Django/Flask)
    **Pros:**
    - Easy to learn
    - Great for data science
    - Rapid development
    - Excellent libraries

    **Cons:**
    - Slower performance
    - Not ideal for mobile

    **Best for:** Data-heavy applications, AI/ML startups

    ### Ruby on Rails
    **Pros:**
    - Convention over configuration
    - Fastest for CRUD apps
    - Great community

    **Cons:**
    - Performance at scale
    - Less flexible

    **Best for:** MVPs, content management systems

    ## Database Choices

    ### PostgreSQL
    **Pros:**
    - Most versatile
    - ACID compliant
    - Great for complex queries

    **Best for:** Most applications

    ### MongoDB
    **Pros:**
    - Flexible schema
    - Easy to scale
    - Great for rapid iteration

    **Best for:** Startups with evolving requirements

    ### Redis
    **Pros:**
    - Extremely fast
    - Great for caching
    - Real-time features

    **Best for:** Caching, real-time applications

    ## Our Recommended Stack for Startups

    **Frontend:** React + Next.js
    **Backend:** Node.js + Express
    **Database:** PostgreSQL
    **Caching:** Redis
    **Hosting:** Vercel + AWS

    **Why this stack:**
    - Proven with millions of users
    - Large talent pool
    - Excellent documentation
    - Scales from 0 to millions

    ## Factors to Consider
    1. **Team expertise** - Use what you know
    2. **Time to market** - Choose faster options
    3. **Scalability needs** - Plan for growth
    4. **Community support** - Easier to find help
    5. **Budget** - Some technologies cost more

    ## Need Help Deciding?
    We help startups choose the right tech stack for their specific needs. Let's discuss your project.`,
    related: [
      {
        slug: "mvp-under-5l",
        title: "How We Help Startups Launch MVPs Under ₹5L"
      },
      {
        slug: "when-to-hire-dev-partner",
        title: "When to Hire a Development Partner"
      }
    ]
  },
  "when-to-hire-dev-partner": {
    title: "When to Hire a Development Partner",
    date: "March 8, 2024",
    readTime: "5 min read",
    category: "Startup Growth",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200",
    content: `Knowing when to bring in external development help can be the difference between success and failure. Here are the signs it's time.

    ## You're Stuck in Development Hell
    **Signs you're stuck:**
    - Your MVP was supposed to take 3 months, it's been 6
    - Features keep getting delayed
    - Your team is exhausted
    - Quality is suffering

    **How a partner helps:**
    - Experienced developers who've done it before
    - Fresh perspective on roadblocks
    - Additional resources to speed up
    - Project management expertise

    ## You Need Technical Guidance
    **You might need guidance if:**
    - You're unsure about tech stack choices
    - Architecture decisions are overwhelming
    - You worry about scaling
    - Security concerns keep you up at night

    **How a partner helps:**
    - Years of combined experience
    - Best practices from dozens of projects
    - Security audits and recommendations
    - Scalability planning

    ## You're Preparing for Fundraising
    **Why technical help matters for fundraising:**
    - Investors scrutinize technical foundations
    - Clean code = higher valuation
    - Faster development = better traction
    - Technical credibility matters

    **How a partner helps:**
    - Code that's investor-ready
    - Technical due diligence preparation
    - Scalable architecture for growth
    - Credibility with technical investors

    ## You Need to Scale Fast
    **Growth challenges:**
    - Users are increasing faster than expected
    - Your team can't keep up
    - Performance issues emerging
    - New features urgently needed

    **How a partner helps:**
    - Quickly scale development capacity
    - Performance optimization
    - Infrastructure scaling
    - Feature development at speed

    ## Your Team is Burning Out
    **Warning signs:**
    - Late nights becoming normal
    - Weekend work expected
    - Morale is dropping
    - Turnover risk increasing

    **How a partner helps:**
    - Reduce workload on core team
    - Handle overflow work
    - Let your team focus on what matters
    - Protect team culture

    ## You Have a Tight Deadline
    **Common scenarios:**
    - Investor demo coming up
    - Product launch event scheduled
    - Competitor about to launch
    - Client contract deadline

    **How a partner helps:**
    - Ramp up quickly
    - Work in parallel with your team
    - Meet aggressive timelines
    - Quality assurance throughout

    ## You're Building Something Complex
    **Complex projects might include:**
    - AI/ML integrations
    - Blockchain applications
    - Complex payment systems
    - Real-time platforms
    - IoT solutions

    **How a partner helps:**
    - Specialized expertise
    - Experience with similar projects
    - Avoid common pitfalls
    - Best practices for complex systems

    ## How to Choose the Right Partner
    1. **Look for startup experience** - They understand your constraints
    2. **Check their portfolio** - Have they built similar products?
    3. **Talk to past clients** - Get honest feedback
    4. **Start with a small project** - Test the relationship
    5. **Evaluate communication** - Can you work well together?

    ## Ready to Talk?
    We've helped dozens of startups at every stage. Let's discuss where you are and how we can help.`,
    related: [
      {
        slug: "mvp-under-5l",
        title: "How We Help Startups Launch MVPs Under ₹5L"
      },
      {
        slug: "choosing-right-tech-stack",
        title: "Choosing the Right Tech Stack for Your Startup"
      }
    ]
  },
  "meet-our-team": {
    title: "Meet Our Team: The Faces Behind the Code",
    date: "March 8, 2024",
    readTime: "4 min read",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200",
    content: `Get to know the passionate team building software for startups at Fintech IT Solutions.

    ## Our Story
    We're a team of developers, designers, and strategists who came together with a shared mission: make quality software development accessible to early-stage startups.

    **What unites us:**
    - Love for building things
    - Passion for technology
    - Desire to help founders succeed
    - Belief in simple, clean code

    ## Meet the Team

    ### Sumit Raj - Founder & Lead Developer
    Sumit founded Fintech IT Solutions after years of working with startups and seeing the same problems: expensive agencies, slow delivery, and poor communication.

    **Background:**
    - 8+ years of development experience
    - Built products for 20+ startups
    - Passionate about React and Node.js
    - Loves helping founders validate ideas

    **Fun fact:** Sumit built his first startup at 19. It failed, but he learned more from that than any success.

    ### Our Developers
    **Frontend Team**
    - Experts in React, Next.js, Vue
    - Obsessed with user experience
    - Mobile-first approach
    - Performance fanatics

    **Backend Team**
    - Node.js, Python, Go specialists
    - Database architects
    - API designers
    - Security focused

    **DevOps Team**
    - AWS certified
    - Docker and Kubernetes experts
    - CI/CD pipeline builders
    - Infrastructure optimizers

    ### Our Designers
    - UI/UX specialists
    - Figma experts
    - User research focused
    - Prototyping pros

    ### Our Project Managers
    - Agile methodology experts
    - Client communication specialists
    - Timeline and budget guardians
    - Quality assurance focused

    ## Our Culture
    **What it's like to work here:**
    - Remote-first, flexible hours
    - Continuous learning encouraged
    - Open communication
    - No bureaucracy
    - Results-oriented

    **We believe in:**
    - Writing clean, maintainable code
    - Learning something new every day
    - Helping teammates succeed
    - Being honest with clients
    - Having fun while building

    ## Join Us
    We're always looking for talented people who share our passion. Check our Careers page for open positions.`,
    related: [
      {
        slug: "first-3-months-lessons",
        title: "Our First 3 Months: Lessons from a New Startup"
      },
      {
        slug: "startup-packages",
        title: "Introducing Our Startup Packages"
      }
    ]
  },
  "first-3-months-lessons": {
    title: "Our First 3 Months: Lessons from a New Startup",
    date: "March 1, 2024",
    readTime: "6 min read",
    category: "Company",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
    content: `We've been live for 3 months! Here's what we've learned on our journey so far.

    ## Lesson 1: Startups Need Speed
    The number one thing founders tell us: "I need this yesterday." Startups move fast, and we've learned to match their pace.

    **What we've changed:**
    - Faster response times (under 2 hours now)
    - Quicker proposal turnaround
    - Agile sprints (2 weeks max)
    - Daily updates for clients

    ## Lesson 2: Transparency Builds Trust
    Founders have been burned by agencies before. Hidden costs, scope creep, missed deadlines.

    **Our approach:**
    - Fixed-price quotes
    - No hidden fees
    - Weekly progress reports
    - Open communication channels

    **Result:** 100% client satisfaction so far

    ## Lesson 3: MVPs Should Be Minimal
    Founders often want to build everything at once. We've learned to push back.

    **Our MVP philosophy:**
    - What's the absolute core?
    - What can wait for version 2?
    - What will users actually use?

    **Result:** Faster launches, happier founders

    ## Lesson 4: The Right Tech Stack Matters
    We've experimented with different technologies and found what works best for startups.

    **Our current stack:**
    - React/Next.js for frontend
    - Node.js for backend
    - PostgreSQL for database
    - AWS for infrastructure

    **Why:** Proven, scalable, large talent pool

    ## Lesson 5: Communication is Everything
    Technical skill matters, but communication matters more.

    **What founders appreciate:**
    - Plain English, not jargon
    - Regular updates
    - Honest about challenges
    - Quick responses

    ## Lesson 6: Flexible Terms Help
    Startups have cash flow constraints. We've adapted.

    **What we offer now:**
    - Milestone-based payments
    - Deferred payment options
    - Equity discussions for promising startups
    - Discounts for first-time founders

    ## Lesson 7: We're Growing Too
    As a new startup ourselves, we understand the journey.

    **Our growth so far:**
    - 3 active projects
    - 5 team members
    - 2 new partnerships
    - Countless lessons learned

    ## What's Next?
    **Coming in the next 3 months:**
    - Launch our Startup Program
    - Release open-source tools
    - Host founder workshops
    - Grow the team to 10

    Stay tuned!`,
    related: [
      {
        slug: "meet-our-team",
        title: "Meet Our Team: The Faces Behind the Code"
      },
      {
        slug: "startup-packages",
        title: "Introducing Our Startup Packages"
      }
    ]
  },
  "startup-packages": {
    title: "Introducing Our Startup Packages",
    date: "February 25, 2024",
    readTime: "3 min read",
    category: "Product",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200",
    content: `We're excited to announce our new Startup Packages - flexible development options designed specifically for early-stage companies.

    ## Why Startup Packages?
    Traditional development agencies don't understand startups. They expect:
    - Large upfront payments
    - Long-term commitments
    - Rigid requirements
    - Slow processes

    We're different. We've built packages that actually make sense for founders.

    ## Package 1: MVP Launch
    **Price: ₹2L - ₹5L**
    **Timeline: 8-12 weeks**

    **Perfect for:** Idea stage, pre-seed, bootstrapped

    **Includes:**
    - Core features only
    - Basic UI/UX design
    - Essential integrations
    - 3 months support
    - Weekly updates

    **Best for:** Validating your idea with real users

    ## Package 2: Growth Package
    **Price: ₹5L - ₹10L**
    **Timeline: 12-16 weeks**

    **Perfect for:** Seed stage, early traction, preparing for funding

    **Includes:**
    - Full feature set
    - Custom design
    - Advanced integrations
    - 6 months priority support
    - Team training
    - Monthly strategy calls
    - Performance optimization

    **Best for:** Startups ready to scale

    ## Package 3: Scale Ready
    **Price: ₹10L+**
    **Timeline: 16-20 weeks**

    **Perfect for:** Series A, rapid growth, enterprise features

    **Includes:**
    - Scalable architecture
    - Performance optimization
    - Security audit
    - 12 months dedicated support
    - Future roadmap planning
    - 24/7 emergency support
    - Infrastructure setup
    - Team extension

    **Best for:** High-growth startups needing enterprise-grade solutions

    ## Flexible Payment Options
    We understand cash flow is tight. That's why we offer:
    - **Milestone payments** - Pay as we build
    - **Deferred payments** - Pay after funding
    - **Equity options** - For promising startups
    - **First-time founder discount** - 15% off

    ## What's Included in All Packages
    - Complete source code ownership
    - Technical documentation
    - User manuals
    - Admin dashboard
    - API documentation
    - Deployment support
    - Training sessions

    ## Add-on Services
    Need something extra? Add these to any package:
    - **Mobile app development** - +₹2L-5L
    - **API integrations** - +₹50k-2L
    - **Advanced analytics** - +₹1L-3L
    - **Third-party services** - At cost

    ## How to Get Started
    1. **Book a free consultation** - Tell us about your idea
    2. **Get a customized quote** - We'll recommend the right package
    3. **Start building** - Launch in weeks, not months

    ## Limited Time Offer
    First 5 startups to sign up get:
    - Free AWS setup ($1,000 value)
    - 3 months free hosting
    - Priority support
    - Investor deck review

    Ready to build your startup? Let's talk!`,
    related: [
      {
        slug: "mvp-under-5l",
        title: "How We Help Startups Launch MVPs Under ₹5L"
      },
      {
        slug: "meet-our-team",
        title: "Meet Our Team: The Faces Behind the Code"
      }
    ]
  }
};

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articlesData[slug];

  if (!article) {
    return (
      <div className="pt-32 text-center min-h-screen">
        <h1 className="text-3xl mb-4">Article not found</h1>
        <Link to="/insights" className="text-blue-600 hover:underline">
          ← Back to Insights
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-24 bg-white">
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

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm mb-4">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
              {article.category}
            </span>
            <span className="text-gray-400 flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {article.date}
            </span>
            <span className="text-gray-400 flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {article.readTime}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
        </div>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden mb-12">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-16">
          {article.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('##')) {
              return (
                <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                  {paragraph.replace('##', '')}
                </h2>
              );
            } else if (paragraph.startsWith('**')) {
              return (
                <p key={index} className="text-gray-800 font-semibold mb-2">
                  {paragraph}
                </p>
              );
            } else if (paragraph.startsWith('-')) {
              return (
                <li key={index} className="ml-4 text-gray-700">
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

        {/* Share Section */}
        <div className="border-t border-gray-200 pt-8 mb-16">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Found this helpful?</h3>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition">
                <Share2 className="w-5 h-5" />
                Share
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition">
                <Bookmark className="w-5 h-5" />
                Save
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {article.related && article.related.length > 0 && (
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6">You Might Also Like</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {article.related.map((item, index) => (
                <Link
                  key={index}
                  to={`/insights/${item.slug}`}
                  className="bg-white p-4 rounded-xl hover:shadow-md transition group"
                >
                  <h4 className="font-semibold mb-2 group-hover:text-blue-600">
                    {item.title}
                  </h4>
                  <span className="text-sm text-blue-600 inline-flex items-center">
                    Read Article <ArrowRight className="w-3 h-3 ml-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Build Your Startup?</h3>
          <p className="text-blue-100 mb-6">
            Let's discuss your idea and see how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition"
          >
            Start the Conversation <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </article>
    </main>
  );
}