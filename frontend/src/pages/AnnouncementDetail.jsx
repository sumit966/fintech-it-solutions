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
const announcementsData = {
  "we-are-live": {
    title: "We're Live! Introducing Fintech IT Solutions",
    date: "March 1, 2024",
    category: "Announcement",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200",
    content: `After months of hard work, we're finally live! Fintech IT Solutions is officially open for business.

    ## Why We Started
    We saw too many startups struggle with expensive agencies and outdated technology. The traditional development model just doesn't work for early-stage companies.

    **The problems we noticed:**
    - Agencies charging ₹10L+ for simple MVPs
    - 6+ month delivery timelines
    - Hidden costs and scope creep
    - No understanding of startup constraints

    We believed there had to be a better way. So we built it.

    ## Our Mission
    To make quality software development accessible to early-stage startups. No corporate markup, no bureaucracy - just great code and genuine partnership.

    **What makes us different:**
    - Transparent pricing
    - Startup-friendly payment terms
    - Direct access to developers
    - Focus on MVPs and rapid iteration

    ## What We Offer
    - **Custom Software Development** - Tailored solutions for your unique needs
    - **MVP Development** - Launch in weeks, not months
    - **Startup-Friendly Packages** - Flexible options for every stage
    - **Technical Consulting** - Guidance from experienced developers

    ## Our First Projects
    We're already working with three amazing startups:
    1. **TechStart** - AI-powered recruitment platform
    2. **EcomMart** - Direct-to-consumer marketplace
    3. **LogiTrack** - Last-mile delivery optimization

    ## Join Our Journey
    We're just getting started. Here's what's coming:
    - **April 2024**: Launch of our Startup Program
    - **May 2024**: Free MVP workshops for founders
    - **June 2024**: Open-source tool releases

    Follow along as we help founders build amazing products. The best is yet to come!`,
    related: [
      {
        slug: "startup-program-launch",
        title: "Join Our Startup-Friendly Development Program"
      },
      {
        slug: "aws-partnership",
        title: "New Partnership with AWS Startup Program"
      }
    ]
  },
  "startup-program-launch": {
    title: "Join Our Startup-Friendly Development Program",
    date: "March 5, 2024",
    category: "Program",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200",
    content: `We're launching our Startup-Friendly Development Program to help early-stage founders get their products built without breaking the bank.

    ## Why We Created This Program
    Building a startup is hard enough without worrying about development costs. We created this program specifically for founders who have great ideas but limited budgets.

    ## Program Benefits
    **Special rates for first-time founders**
    - Up to 40% off our standard rates
    - Fixed-price packages with no hidden costs
    - Pay only for what you need

    **Flexible payment terms**
    - Pay in milestones, not upfront
    - Deferred payments for promising startups
    - Equity options available

    **Priority support**
    - Direct WhatsApp access to developers
    - Weekly strategy calls
    - 24/7 emergency support

    **Monthly strategy calls**
    - Product roadmap review
    - Technical architecture decisions
    - Growth and scaling advice

    ## Who Can Apply
    **Ideal candidates:**
    - Pre-seed and seed-stage startups
    - Founders with a clear vision
    - Companies building their first product
    - Bootstrapped teams

    **What we look for:**
    - Strong founding team
    - Clear problem statement
    - Market opportunity
    - Passion and commitment

    ## How to Apply
    **Simple 3-step process:**
    1. Fill out our contact form
    2. Schedule a 30-minute call
    3. Get matched with a developer

    Mention "Startup Program" in your message and we'll fast-track your application.

    ## Limited Spots Available
    We're accepting only 10 startups in our first cohort. Selected startups get:
    - Dedicated development team
    - Monthly strategy sessions
    - Access to our investor network
    - AWS credits and tools

    **Application deadline: April 15, 2024**

    Don't miss this opportunity to build your product with a team that truly understands startups.`,
    related: [
      {
        slug: "we-are-live",
        title: "We're Live! Introducing Fintech IT Solutions"
      },
      {
        slug: "aws-partnership",
        title: "New Partnership with AWS Startup Program"
      }
    ]
  },
  "aws-partnership": {
    title: "New Partnership with AWS Startup Program",
    date: "March 10, 2024",
    category: "Partnership",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200",
    content: `We're thrilled to announce our partnership with the AWS Startup Program! This partnership brings tremendous value to our clients.

    ## What This Means for You
    **AWS Credits**
    - Up to $100,000 in AWS credits for eligible startups
    - Free tier extended for first year
    - Credits for popular services like EC2, S3, RDS

    **Technical Support**
    - Direct access to AWS solutions architects
    - Priority support for critical issues
    - Architecture reviews and optimization

    **Training Resources**
    - Free AWS training courses
    - Certification vouchers
    - Best practice guides and workshops

    **Networking Opportunities**
    - Connect with other startup founders
    - AWS startup events and webinars
    - Investor introductions

    ## Why AWS Matters for Startups
    AWS is trusted by the world's most successful startups:
    - Airbnb
    - Dropbox
    - Slack
    - Stripe
    - Pinterest

    With AWS, you get:
    - Enterprise-grade infrastructure
    - Pay-as-you-go pricing
    - Global reach
    - 200+ services

    ## How to Access
    All our development packages now include:
    - AWS account setup and configuration
    - Best practices implementation
    - Cost optimization strategies
    - Monthly usage reviews

    ## Get Started Today
    Ready to build on AWS? Let's talk about your project and how we can maximize your AWS credits.

    **What to expect:**
    - Free AWS consultation
    - Architecture recommendations
    - Cost estimates
    - Timeline planning

    Contact us to schedule your AWS strategy session!`,
    related: [
      {
        slug: "we-are-live",
        title: "We're Live! Introducing Fintech IT Solutions"
      },
      {
        slug: "startup-program-launch",
        title: "Join Our Startup-Friendly Development Program"
      }
    ]
  },
  "we-are-hiring": {
    title: "We're Hiring: Join Our Growing Team",
    date: "March 15, 2024",
    category: "Hiring",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
    content: `We're growing and looking for talented developers to join our team! If you're passionate about building software and love working with startups, we want to meet you.

    ## Why Join Fintech IT Solutions?
    **Work on diverse projects**
    - E-commerce platforms
    - SaaS applications
    - Mobile apps
    - AI/ML integrations
    - Fintech solutions

    **Learn modern technologies**
    - React/Next.js
    - Node.js/Python
    - GraphQL
    - AWS/Cloud
    - Docker/Kubernetes

    **Small team, big impact**
    - Direct client interaction
    - Shape product decisions
    - See your work make a difference
    - No bureaucracy

    **Remote-friendly culture**
    - Work from anywhere
    - Flexible hours
    - Results-oriented
    - Regular team meetups

    **Competitive compensation**
    - Market-rate salaries
    - Equity options
    - Performance bonuses
    - Learning budget

    ## Open Positions

    ### Full Stack Developer
    **Tech Stack:** React, Node.js, PostgreSQL, TypeScript
    **Experience:** 3+ years
    **What you'll do:**
    - Build full-stack applications from scratch
    - Architect scalable solutions
    - Mentor junior developers
    - Work directly with clients

    ### Frontend Developer
    **Tech Stack:** React, Next.js, Tailwind, TypeScript
    **Experience:** 2+ years
    **What you'll do:**
    - Create beautiful user interfaces
    - Build responsive, accessible designs
    - Optimize performance
    - Collaborate with designers

    ### UI/UX Designer
    **Tools:** Figma, Adobe XD, Sketch
    **Experience:** 2+ years
    **What you'll do:**
    - Design user-centered interfaces
    - Create wireframes and prototypes
    - Conduct user research
    - Work closely with developers

    ### Project Manager
    **Skills:** Agile, Scrum, Client Management
    **Experience:** 3+ years
    **What you'll do:**
    - Manage client relationships
    - Coordinate development teams
    - Track project timelines
    - Ensure quality delivery

    ## How to Apply
    Send your resume and portfolio to: **careers@fintechitsolutions.com**

    **Please include:**
    - Links to your GitHub/portfolio
    - Brief introduction
    - Why you want to join us
    - Preferred position

    ## Our Hiring Process
    1. **Application review** (3-5 days)
    2. **Initial chat** (30 min)
    3. **Technical discussion** (60 min)
    4. **Meet the team** (45 min)
    5. **Offer** 🎉

    ## Be Part of Our Journey
    Join us in building the future of startup development. We can't wait to meet you!`,
    related: [
      {
        slug: "we-are-live",
        title: "We're Live! Introducing Fintech IT Solutions"
      },
      {
        slug: "startup-program-launch",
        title: "Join Our Startup-Friendly Development Program"
      }
    ]
  }
};

export default function AnnouncementDetail() {
  const { slug } = useParams();
  const announcement = announcementsData[slug];

  if (!announcement) {
    return (
      <div className="pt-32 text-center min-h-screen">
        <h1 className="text-3xl mb-4">Announcement not found</h1>
        <Link to="/newsroom" className="text-blue-600 hover:underline">
          ← Back to Newsroom
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-24 bg-white">
      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link
          to="/newsroom"
          className="inline-flex items-center text-gray-600 hover:text-blue-600 transition"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Newsroom
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm mb-4">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
              {announcement.category}
            </span>
            <span className="text-gray-400 flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {announcement.date}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{announcement.title}</h1>
        </div>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden mb-12">
          <img
            src={announcement.image}
            alt={announcement.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-16">
          {announcement.content.split('\n').map((paragraph, index) => {
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
            <h3 className="text-lg font-semibold">Share this announcement</h3>
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

        {/* Related Announcements */}
        {announcement.related && announcement.related.length > 0 && (
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6">More Announcements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {announcement.related.map((item, index) => (
                <Link
                  key={index}
                  to={`/newsroom/${item.slug}`}
                  className="bg-white p-4 rounded-xl hover:shadow-md transition group"
                >
                  <h4 className="font-semibold mb-2 group-hover:text-blue-600">
                    {item.title}
                  </h4>
                  <span className="text-sm text-blue-600 inline-flex items-center">
                    Read More <ArrowRight className="w-3 h-3 ml-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">Want to stay updated?</h3>
          <p className="text-blue-100 mb-6">
            Subscribe to our newsletter for the latest news and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:shadow-xl transition">
              Subscribe
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}