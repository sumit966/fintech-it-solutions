import { Link } from "react-router-dom";
import { 
  Building2, 
  ShoppingCart, 
  Cloud, 
  Truck, 
  GraduationCap, 
  Home,
  ArrowRight,
  Code,
  Globe,
  Users,
  ShoppingBag,
  Smartphone,
  Link as LinkIcon,
  Zap,
  Shield,
  Clock,
  Target
} from "lucide-react";

const industries = [
  {
    slug: "fintech",
    title: "Fintech & Banking",
    desc: "Build secure, scalable financial software. From mobile banking apps to payment gateways and investment platforms tailored for modern financial services.",
    longDesc: "The financial technology sector is evolving rapidly. We help startups and established businesses build secure, compliant, and user-friendly fintech solutions. Our expertise includes payment processing, digital wallets, lending platforms, and investment apps that users trust.",
    image: "/images/industries/fintech.jpg",
    icon: Building2,
    color: "from-blue-600 to-cyan-600",
    features: [
      "Mobile Banking Applications",
      "Payment Gateway Integration",
      "Investment & Trading Platforms",
      "Lending & Credit Systems",
      "Blockchain Solutions",
      "RegTech & Compliance"
    ]
  },
  {
    slug: "ecommerce",
    title: "E-Commerce & Retail",
    desc: "Create online stores that convert. Custom e-commerce platforms, marketplaces, and inventory management systems designed for growth.",
    longDesc: "Stand out in the competitive e-commerce landscape with custom solutions tailored to your products and customers. We build online stores that load fast, look beautiful, and convert visitors into loyal customers.",
    image: "/images/industries/ecommerce.jpg",
    icon: ShoppingCart,
    color: "from-purple-600 to-pink-600",
    features: [
      "Custom E-Commerce Websites",
      "Multi-Vendor Marketplaces",
      "Inventory Management",
      "Subscription Commerce",
      "Mobile Shopping Apps",
      "Analytics & Reporting"
    ]
  },
  {
    slug: "saas",
    title: "SaaS & Cloud Platforms",
    desc: "Launch scalable software platforms with multi-tenant architecture, subscription billing, and real-time analytics.",
    longDesc: "Turn your software idea into a scalable SaaS product. We build platforms that grow from your first 10 users to millions, with robust billing, user management, and analytics built-in.",
    image: "/images/industries/saas.jpg",
    icon: Cloud,
    color: "from-orange-500 to-red-500",
    features: [
      "Multi-Tenant Architecture",
      "Subscription Management",
      "Usage Analytics",
      "API Development",
      "User Authentication",
      "Scalable Infrastructure"
    ]
  },
  {
    slug: "logistics",
    title: "Logistics & Supply Chain",
    desc: "Optimize operations with custom software. Fleet tracking, route optimization, and warehouse management systems.",
    longDesc: "Modernize logistics operations with intelligent software solutions. Track vehicles in real-time, optimize delivery routes, and manage inventory efficiently with custom-built platforms.",
    image: "/images/industries/logistics.jpg",
    icon: Truck,
    color: "from-green-600 to-emerald-600",
    features: [
      "Fleet Management Systems",
      "Route Optimization",
      "Real-Time Tracking",
      "Warehouse Management",
      "Delivery Proof Apps",
      "Analytics Dashboard"
    ]
  },
  {
    slug: "edtech",
    title: "EdTech & E-Learning",
    desc: "Transform education with technology. Learning management systems, virtual classrooms, and assessment tools.",
    longDesc: "Education is evolving, and technology is at the forefront. We build engaging learning platforms that make education accessible, interactive, and effective for students of all ages.",
    image: "/images/industries/edtech.jpg",
    icon: GraduationCap,
    color: "from-yellow-500 to-orange-500",
    features: [
      "Learning Management Systems",
      "Virtual Classrooms",
      "Course Authoring Tools",
      "Student Analytics",
      "Mobile Learning Apps",
      "Assessment Platforms"
    ]
  },
  {
    slug: "realestate",
    title: "Real Estate & PropTech",
    desc: "Modern software for property professionals. CRM systems, property portals, and lead management tools.",
    longDesc: "Help real estate professionals work smarter. From property listing portals to agent CRM systems, we build tools that streamline operations and help close deals faster.",
    image: "/images/industries/realestate.jpg",
    icon: Home,
    color: "from-indigo-600 to-blue-600",
    features: [
      "Property Management Systems",
      "Real Estate CRM",
      "Virtual Tour Platforms",
      "Lead Management",
      "Document Management",
      "Analytics & Reporting"
    ]
  }
];

const services = [
  {
    slug: "custom-software",
    title: "Custom Software Development",
    desc: "Tailored applications built specifically for your business needs and workflows.",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Business Process Automation",
      "Inventory Management Systems",
      "Employee Portals",
      "Document Management",
      "Reporting Dashboards",
      "Customer Portals"
    ]
  },
  {
    slug: "web-development",
    title: "Website & Web Apps",
    desc: "Modern, responsive websites and powerful web applications using latest technologies.",
    icon: Globe,
    color: "from-purple-500 to-pink-500",
    features: [
      "Business Websites",
      "Corporate Portals",
      "Landing Pages",
      "Blog & News Sites",
      "Membership Sites",
      "Web Applications"
    ]
  },
  {
    slug: "crm",
    title: "CRM Development",
    desc: "Custom CRM systems that help you manage leads, customers, and sales efficiently.",
    icon: Users,
    color: "from-green-500 to-emerald-500",
    features: [
      "Lead Management",
      "Contact Tracking",
      "Sales Pipeline",
      "Task Automation",
      "Email Integration",
      "Analytics Dashboard"
    ]
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Solutions",
    desc: "Online stores, marketplace platforms, and inventory systems that drive sales.",
    icon: ShoppingBag,
    color: "from-orange-500 to-red-500",
    features: [
      "Online Stores",
      "Product Catalogs",
      "Shopping Cart",
      "Payment Integration",
      "Inventory Management",
      "Order Processing"
    ]
  },
  {
    slug: "mobile",
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps for iOS and Android with great UX.",
    icon: Smartphone,
    color: "from-indigo-500 to-blue-500",
    features: [
      "iOS Apps",
      "Android Apps",
      "Cross-Platform Apps",
      "Mobile-Friendly Design",
      "Push Notifications",
      "Offline Support"
    ]
  },
  {
    slug: "api",
    title: "API & Integration",
    desc: "Connect your systems with custom APIs and third-party integrations.",
    icon: LinkIcon,
    color: "from-yellow-500 to-amber-500",
    features: [
      "RESTful APIs",
      "Third-Party Integration",
      "Payment Gateways",
      "CRM Integration",
      "ERP Integration",
      "Data Synchronization"
    ]
  }
];

const values = [
  {
    icon: Target,
    title: "Your Success is Our Goal",
    desc: "We're a new startup just like you. We understand the challenges and work extra hard to deliver solutions that help you grow.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Fresh, Modern Approach",
    desc: "No legacy thinking. We use the latest technologies and best practices to build solutions that are ready for tomorrow.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Quality First",
    desc: "Even though we're new, we don't compromise on quality. Every line of code is tested, reviewed, and optimized.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Clock,
    title: "Dedicated Partnership",
    desc: "We're not just vendors - we're your technology partners. Your success is our success.",
    color: "from-orange-500 to-red-500"
  }
];

export default function Industries() {
  return (
    <main className="pt-24 bg-white">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Building Software That<br />
            <span className="text-yellow-300">Grows Your Business</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100 leading-relaxed">
            We're a fresh, passionate team of developers ready to build your next 
            software project. No legacy baggage, just modern solutions and 
            dedicated partnership.
          </p>
          <div className="mt-12 flex flex-wrap gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all inline-flex items-center"
            >
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - HONEST STARTUP MESSAGE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Partner With a New Startup?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Because we're hungry, dedicated, and put everything into making your project a success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build software solutions across industries, tailored to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Link
                key={index}
                to={`/industries/${industry.slug}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${industry.color} opacity-60 mix-blend-multiply`}></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur p-3 rounded-xl">
                    <industry.icon className="w-6 h-6 text-gray-900" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.desc}</p>
                  
                  {/* Features preview */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {industry.features.slice(0, 3).map((feature, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                        +{industry.features.length - 3} more
                      </span>
                    </div>
                  </div>
                  
                  <span className="text-blue-600 font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software development services tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={`/services/${service.slug}`}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                
                {/* Features list */}
                <ul className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="text-sm text-gray-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <span className="text-blue-600 font-semibold inline-flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH - ROADMAP STYLE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How We Build Your Software</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A transparent, collaborative process from idea to launch
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-blue-600 text-white rounded-2xl p-8 h-full">
                <div className="text-4xl font-bold mb-4">01</div>
                <h3 className="text-2xl font-semibold mb-4">Discovery & Planning</h3>
                <ul className="space-y-3 text-blue-100">
                  <li>• Understanding your business goals</li>
                  <li>• Requirements gathering</li>
                  <li>• Technology selection</li>
                  <li>• Project roadmap creation</li>
                  <li>• Timeline & budget planning</li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-purple-600 text-white rounded-2xl p-8 h-full">
                <div className="text-4xl font-bold mb-4">02</div>
                <h3 className="text-2xl font-semibold mb-4">Design & Development</h3>
                <ul className="space-y-3 text-purple-100">
                  <li>• UI/UX design & prototyping</li>
                  <li>• Agile development sprints</li>
                  <li>• Weekly progress updates</li>
                  <li>• Continuous testing</li>
                  <li>• Your feedback at every step</li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-green-600 text-white rounded-2xl p-8 h-full">
                <div className="text-4xl font-bold mb-4">03</div>
                <h3 className="text-2xl font-semibold mb-4">Launch & Support</h3>
                <ul className="space-y-3 text-green-100">
                  <li>• Deployment & go-live</li>
                  <li>• Team training</li>
                  <li>• Post-launch support</li>
                  <li>• Performance monitoring</li>
                  <li>• Ongoing improvements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What You Get</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete deliverables that set you up for success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Fully Functional Software",
              "Complete Source Code",
              "Technical Documentation",
              "User Training & Manuals",
              "Admin Dashboard",
              "API Documentation",
              "3 Months Free Support",
              "Future Growth Roadmap"
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-xl">✓</span>
                </div>
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Let's discuss your project. No obligation, just a friendly chat about 
            how we can help bring your ideas to life.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Start the Conversation
          </Link>
          <p className="text-sm text-blue-200 mt-6">
            ✨ First client? We offer special rates for startups
          </p>
        </div>
      </section>
    </main>
  );
}