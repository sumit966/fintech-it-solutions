import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { 
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Users,
  Share2,
  Bookmark,
  ArrowRight
} from "lucide-react";

// This would normally come from a data file or API
const eventsData = {
  "startup-mvp-workshop": {
    title: "Startup MVP Workshop",
    date: "April 5, 2024",
    time: "10:00 AM - 4:00 PM IST",
    location: "Pune (Online)",
    type: "Workshop",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200",
    capacity: "50 participants",
    price: "Free",
    description: `Learn how to validate your idea and build an MVP in 8 weeks. This hands-on workshop is designed for first-time founders.

    ## What You'll Learn
    - How to validate your startup idea
    - Choosing the right features for MVP
    - Technical architecture basics
    - Cost estimation
    - Timeline planning
    - Common pitfalls to avoid

    ## Workshop Agenda
    **10:00 AM - 11:00 AM: Idea Validation**
    - Market research techniques
    - Customer interviews
    - Problem-solution fit
    - Competitor analysis

    **11:00 AM - 12:00 PM: Feature Prioritization**
    - Must-have vs nice-to-have
    - User journey mapping
    - MVP scope definition
    - Creating user stories

    **12:00 PM - 1:00 PM: Lunch Break**

    **1:00 PM - 2:30 PM: Technical Planning**
    - Choosing your tech stack
    - Architecture overview
    - Development timeline
    - Budget estimation

    **2:30 PM - 3:30 PM: Hands-on Workshop**
    - Create your MVP roadmap
    - Define your feature set
    - Estimate timeline and budget
    - Q&A session

    **3:30 PM - 4:00 PM: Next Steps**
    - Resources for continued learning
    - How to find developers
    - Funding options
    - Networking

    ## Who Should Attend
    - First-time founders
    - Entrepreneurs with an idea
    - Non-technical founders
    - Anyone considering building a product

    ## What You'll Get
    - Workshop materials
    - MVP planning template
    - Resource list
    - Recording of the session
    - Access to private community

    ## About the Host
    **Sumit Raj**, Founder of Fintech IT Solutions, has helped 20+ startups launch their MVPs. He'll share practical advice from real experience.

    ## Register Now
    Limited seats available. Register to secure your spot!`,
    speakers: [
      {
        name: "Sumit Raj",
        role: "Founder, Fintech IT Solutions",
        topic: "Idea Validation & MVP Planning"
      }
    ],
    related: [
      {
        slug: "founders-meetup",
        title: "Founders Meetup: Building Tech Products"
      },
      {
        slug: "mvp-webinar",
        title: "Webinar: How to Build Your MVP Under Budget"
      }
    ]
  },
  "founders-meetup": {
    title: "Founders Meetup: Building Tech Products",
    date: "April 15, 2024",
    time: "6:00 PM - 9:00 PM IST",
    location: "Pune",
    type: "Networking",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200",
    capacity: "30 founders",
    price: "Free",
    description: `Connect with fellow founders and share experiences building tech products. This informal meetup is perfect for networking and learning from peers.

    ## What to Expect
    - **Networking** - Meet other founders
    - **Panel Discussion** - Experienced founders share insights
    - **Open Mic** - Share your challenges and get advice
    - **Q&A Session** - Ask anything about building products

    ## Agenda
    **6:00 PM - 6:30 PM: Check-in & Networking**
    Grab a drink and meet fellow founders

    **6:30 PM - 7:30 PM: Panel Discussion**
    "Lessons from Building Tech Products"
    Panelists:
    - Founder of successful SaaS startup
    - CTO with 10+ years experience
    - VC investor in tech startups

    **7:30 PM - 8:00 PM: Open Mic**
    Share your startup journey (5 min slots)

    **8:00 PM - 8:30 PM: Q&A Session**
    Ask anything about building products

    **8:30 PM - 9:00 PM: More Networking**
    Continue conversations over snacks

    ## Why Attend
    - Meet potential co-founders
    - Learn from experienced founders
    - Get feedback on your idea
    - Build your network
    - Find mentors and advisors

    ## Who Should Attend
    - Startup founders
    - Aspiring entrepreneurs
    - Tech professionals
    - Investors and mentors

    ## Venue
    **Location:** Pune (exact address shared after registration)
    **Parking:** Available
    **Food & Drinks:** Provided

    ## Register Now
    Limited to 30 founders. Don't miss this opportunity to connect!`,
    speakers: [
      {
        name: "Multiple Speakers",
        role: "Various Founders & Experts",
        topic: "Panel Discussion"
      }
    ],
    related: [
      {
        slug: "startup-mvp-workshop",
        title: "Startup MVP Workshop"
      },
      {
        slug: "mvp-webinar",
        title: "Webinar: How to Build Your MVP Under Budget"
      }
    ]
  },
  "mvp-webinar": {
    title: "Webinar: How to Build Your MVP Under Budget",
    date: "April 20, 2024",
    time: "3:00 PM - 4:30 PM IST",
    location: "Online",
    type: "Webinar",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200",
    capacity: "Unlimited",
    price: "Free",
    description: `Practical tips for launching your product with limited funds. Join this free webinar to learn how to build an MVP without breaking the bank.

    ## What You'll Learn
    - **Budget Planning** - How much do you really need?
    - **Cost-Saving Strategies** - Build more with less
    - **Tech Stack Choices** - Free and low-cost options
    - **Timeline Optimization** - Launch faster
    - **Common Mistakes** - What to avoid

    ## Webinar Outline
    **Part 1: MVP Cost Breakdown (20 min)**
    - Real examples of MVP costs
    - Where money actually goes
    - Hidden costs to watch for
    - How to estimate your budget

    **Part 2: Saving Money Without Sacrificing Quality (20 min)**
    - Open-source tools
    - Free tiers and credits
    - Smart outsourcing
    - When to DIY vs hire

    **Part 3: Case Studies (15 min)**
    - Startup that built MVP for ₹3L
    - How they prioritized features
    - What they learned
    - Results after launch

    **Part 4: Q&A Session (20 min)**
    - Get your questions answered live

    **Part 5: Resources & Next Steps (15 min)**
    - Templates and tools
    - Where to find developers
    - Funding options

    ## Who Should Watch
    - Bootstrapped founders
    - Pre-seed startups
    - Non-technical founders
    - Anyone concerned about costs

    ## What You'll Get
    - Recording of the webinar
    - Presentation slides
    - MVP budget template
    - Resource list
    - Q&A transcript

    ## About the Speaker
    **Sumit Raj** has helped startups build MVPs ranging from ₹3L to ₹10L. He'll share practical strategies that actually work.

    ## Register Now
    Free webinar. Register to receive the link.`,
    speakers: [
      {
        name: "Sumit Raj",
        role: "Founder, Fintech IT Solutions",
        topic: "Building MVPs Under Budget"
      }
    ],
    related: [
      {
        slug: "startup-mvp-workshop",
        title: "Startup MVP Workshop"
      },
      {
        slug: "founders-meetup",
        title: "Founders Meetup: Building Tech Products"
      }
    ]
  }
};

export default function EventDetail() {
  const { slug } = useParams();
  const event = eventsData[slug];

  if (!event) {
    return (
      <div className="pt-32 text-center min-h-screen">
        <h1 className="text-3xl mb-4">Event not found</h1>
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

      {/* Event Header */}
      <article className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm mb-4">
            <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-medium">
              {event.type}
            </span>
            <span className="text-gray-400 flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {event.date}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{event.title}</h1>

          {/* Event Details Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-xl">
              <Calendar className="w-5 h-5 text-blue-600 mb-2" />
              <p className="text-sm text-gray-500">Date</p>
              <p className="font-semibold">{event.date}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <Clock className="w-5 h-5 text-blue-600 mb-2" />
              <p className="text-sm text-gray-500">Time</p>
              <p className="font-semibold">{event.time}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <MapPin className="w-5 h-5 text-blue-600 mb-2" />
              <p className="text-sm text-gray-500">Location</p>
              <p className="font-semibold">{event.location}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <Users className="w-5 h-5 text-blue-600 mb-2" />
              <p className="text-sm text-gray-500">Capacity</p>
              <p className="font-semibold">{event.capacity}</p>
            </div>
          </div>

          {/* Registration CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-2xl mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-2xl font-bold mb-1">{event.price}</p>
                <p className="text-white/80">Limited spots available</p>
              </div>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition">
                Register Now →
              </button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden mb-12">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Event Content */}
        <div className="prose prose-lg max-w-none mb-16">
          {event.description.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('##')) {
              return (
                <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                  {paragraph.replace('##', '')}
                </h2>
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

        {/* Speakers Section */}
        {event.speakers && event.speakers.length > 0 && (
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6">Speakers</h3>
            <div className="space-y-4">
              {event.speakers.map((speaker, index) => (
                <div key={index} className="bg-white p-4 rounded-xl">
                  <h4 className="font-semibold text-lg">{speaker.name}</h4>
                  <p className="text-gray-600 mb-2">{speaker.role}</p>
                  <p className="text-sm text-blue-600">Topic: {speaker.topic}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Share Section */}
        <div className="border-t border-gray-200 pt-8 mb-16">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Share this event</h3>
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

        {/* Related Events */}
        {event.related && event.related.length > 0 && (
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6">More Events</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {event.related.map((item, index) => (
                <Link
                  key={index}
                  to={`/events/${item.slug}`}
                  className="bg-white p-4 rounded-xl hover:shadow-md transition group"
                >
                  <h4 className="font-semibold mb-2 group-hover:text-blue-600">
                    {item.title}
                  </h4>
                  <span className="text-sm text-blue-600 inline-flex items-center">
                    View Event <ArrowRight className="w-3 h-3 ml-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">Can't make it?</h3>
          <p className="text-blue-100 mb-6">
            Subscribe to our newsletter for updates on future events.
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