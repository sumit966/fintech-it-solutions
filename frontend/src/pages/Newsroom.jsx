import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Calendar, 
  Users, 
  Award, 
  Mic,
  Newspaper,
  Sparkles,
  Mail,
  Clock,
  ChevronRight
} from "lucide-react";
import Container from "../layout/Container";

const announcements = [
  {
    slug: "we-are-live",
    title: "We're Live! Introducing Fintech IT Solutions",
    date: "March 1, 2024",
    excerpt: "After months of preparation, we're excited to announce our launch as a startup-focused development agency. We're here to help founders build amazing products.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
    category: "Announcement",
    content: `After months of hard work, we're finally live! Fintech IT Solutions is officially open for business.

    ## Why We Started
    We saw too many startups struggle with expensive agencies and outdated technology. We believed there had to be a better way.

    ## Our Mission
    To make quality software development accessible to early-stage startups. No corporate markup, no bureaucracy - just great code and genuine partnership.

    ## What We Offer
    - Custom software development
    - MVP development
    - Startup-friendly packages
    - Flexible payment terms

    ## Join Our Journey
    We're just getting started. Follow along as we help founders build amazing products.`
  },
  {
    slug: "startup-program-launch",
    title: "Join Our Startup-Friendly Development Program",
    date: "March 5, 2024",
    excerpt: "Introducing special rates and flexible terms for early-stage startups. Apply now to be part of our first cohort.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    category: "Program",
    content: `We're launching our Startup-Friendly Development Program to help early-stage founders get their products built without breaking the bank.

    ## Program Benefits
    - **Special rates** for first-time founders
    - **Flexible payment terms** - pay as you grow
    - **Priority support** - direct access to developers
    - **Monthly strategy calls** - keep your product on track

    ## Who Can Apply
    - Pre-seed and seed-stage startups
    - Founders with a clear vision
    - Companies building their first product

    ## How to Apply
    Simply fill out our contact form and mention "Startup Program" in your message. We'll schedule a call to discuss your project.

    ## Limited Spots Available
    We're accepting only 10 startups in our first cohort. Apply now!`
  },
  {
    slug: "aws-partnership",
    title: "New Partnership with AWS Startup Program",
    date: "March 10, 2024",
    excerpt: "We're now official partners with AWS, bringing cloud credits and expertise to our startup clients.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    category: "Partnership",
    content: `We're thrilled to announce our partnership with the AWS Startup Program! This partnership brings tremendous value to our clients.

    ## What This Means for You
    - **AWS Credits** - Get up to $100,000 in AWS credits
    - **Technical Support** - Direct access to AWS engineers
    - **Training Resources** - Learn best practices from AWS
    - **Networking** - Connect with other startup founders

    ## Why AWS
    AWS is the world's leading cloud platform, trusted by startups like Airbnb, Dropbox, and Slack. With this partnership, your startup gets enterprise-grade infrastructure at startup-friendly prices.

    ## How to Access
    All our development packages now include AWS setup and optimization. Let's build something amazing on the cloud.`
  },
  {
    slug: "we-are-hiring",
    title: "We're Hiring: Join Our Growing Team",
    date: "March 15, 2024",
    excerpt: "Looking for passionate developers to help us build software for amazing startups.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    category: "Hiring",
    content: `We're growing and looking for talented developers to join our team!

    ## Open Positions
    - **Full Stack Developer** - React, Node.js, PostgreSQL
    - **Frontend Developer** - React, Next.js, Tailwind
    - **UI/UX Designer** - Figma, User Research
    - **Project Manager** - Agile, Client Communication

    ## Why Join Us
    - Work on diverse startup projects
    - Learn modern technologies
    - Small team, big impact
    - Remote-friendly culture
    - Competitive compensation

    ## How to Apply
    Send your resume and portfolio to careers@fintechitsolutions.com

    ## Be Part of Our Journey
    Join us in building the future of startup development!`
  }
];

const blogPosts = [
  {
    slug: "mvp-under-5l",
    title: "How We Help Startups Launch MVPs Under ₹5L",
    date: "March 12, 2024",
    readTime: "5 min",
    excerpt: "A practical guide to launching your product on a budget. Learn our proven process for MVP development.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600",
    category: "MVP Development"
  },
  {
    slug: "meet-our-team",
    title: "Meet Our Team: The Faces Behind the Code",
    date: "March 8, 2024",
    readTime: "4 min",
    excerpt: "Get to know the passionate developers and designers building software for startups.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
    category: "Culture"
  },
  {
    slug: "first-3-months-lessons",
    title: "Our First 3 Months: Lessons from a New Startup",
    date: "March 1, 2024",
    readTime: "6 min",
    excerpt: "What we've learned in our first quarter as a startup-focused development agency.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
    category: "Company"
  },
  {
    slug: "startup-packages",
    title: "Introducing Our Startup Packages",
    date: "February 25, 2024",
    readTime: "3 min",
    excerpt: "Flexible development packages designed specifically for early-stage startups.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600",
    category: "Product"
  }
];

const pressMentions = [
  {
    outlet: "TechCrunch",
    title: "Pune-based Startup Studio Launches with Focus on Early-Stage Companies",
    date: "March 2024",
    link: "#",
    excerpt: "Fintech IT Solutions aims to make quality development accessible to bootstrapped founders."
  },
  {
    outlet: "YourStory",
    title: "How Fintech IT Solutions is Making Software Development Accessible for Startups",
    date: "March 2024",
    link: "#",
    excerpt: "With flexible payment terms and startup-friendly rates, this new agency is changing the game."
  },
  {
    outlet: "Economic Times",
    title: "Startup Spotlight: Fintech IT Solutions' Unique Approach to MVP Development",
    date: "February 2024",
    link: "#",
    excerpt: "The Pune-based startup studio helps founders launch products under ₹5L."
  }
];

const events = [
  {
    title: "Startup MVP Workshop",
    date: "April 5, 2024",
    location: "Pune (Online)",
    type: "Workshop",
    description: "Learn how to validate your idea and build an MVP in 8 weeks"
  },
  {
    title: "Founders Meetup: Building Tech Products",
    date: "April 15, 2024",
    location: "Pune",
    type: "Networking",
    description: "Connect with fellow founders and share experiences"
  },
  {
    title: "Webinar: How to Build Your MVP Under Budget",
    date: "April 20, 2024",
    location: "Online",
    type: "Webinar",
    description: "Practical tips for launching your product with limited funds"
  }
];

export default function Newsroom() {
  return (
    <main className="pt-24 bg-white">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Latest Updates from
              <span className="block text-yellow-300">Fintech IT Solutions</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              News, announcements, and stories from our journey building software for startups
            </p>
            <div className="flex gap-4">
              <Link
                to="/insights"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition"
              >
                Read Our Blog <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ANNOUNCEMENTS */}
      <section className="py-20">
        <Container>
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Announcements</h2>
              <p className="text-xl text-gray-600">What's new at Fintech IT Solutions</p>
            </div>
            <Link
              to="/newsroom/announcements"
              className="text-blue-600 font-semibold flex items-center hover:gap-2 transition-all"
            >
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {announcements.map((item, index) => (
              <Link
                key={index}
                to={`/newsroom/${item.slug}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <span className="text-blue-600 font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                    Read Full Announcement <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* BLOG POSTS */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">From Our Blog</h2>
              <p className="text-xl text-gray-600">Stories and insights from our team</p>
            </div>
            <Link
              to="/insights"
              className="text-blue-600 font-semibold flex items-center hover:gap-2 transition-all"
            >
              Visit Blog <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                to={`/insights/${post.slug}`}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full mb-2 inline-block">
                    {post.category}
                  </span>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-gray-400">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                    <span className="mx-2">•</span>
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* PRESS MENTIONS & EVENTS */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Press Mentions */}
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Newspaper className="w-8 h-8 mr-2 text-blue-600" />
                Press Mentions
              </h2>
              <div className="space-y-4">
                {pressMentions.map((mention, index) => (
                  <a
                    key={index}
                    href={mention.link}
                    className="block bg-gray-50 p-6 rounded-xl hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="font-bold text-blue-600">{mention.outlet}</span>
                      <span className="text-sm text-gray-500">{mention.date}</span>
                    </div>
                    <p className="text-gray-800 font-medium mb-2">{mention.title}</p>
                    <p className="text-gray-600 text-sm">{mention.excerpt}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Events */}
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Mic className="w-8 h-8 mr-2 text-purple-600" />
                Upcoming Events
              </h2>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-sm bg-white/20 px-3 py-1 rounded-full font-semibold">
                        {event.type}
                      </span>
                      <span className="text-sm text-white/80 flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {event.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-white/90 mb-2">{event.description}</p>
                    <p className="text-sm text-white/80">{event.location}</p>
                    <button className="mt-4 text-sm bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition">
                      Register Now →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-xl p-12">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Subscribe to our newsletter for monthly updates, news, and insights for startup founders
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                No spam. Unsubscribe anytime. Join 500+ founders.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Sparkles className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Want to Be Featured?</h2>
            <p className="text-xl text-blue-100 mb-8">
              If you're a journalist or blogger covering startup tech, we'd love to connect.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              Contact Our Press Team <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}