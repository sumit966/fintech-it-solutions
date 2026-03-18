import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft,
  Clock,
  Calendar,
  ArrowRight,
  Code,
  Cpu,
  DollarSign,
  TrendingUp,
  Users
} from "lucide-react";

// Same articles data structure as your ArticleDetail
const articlesData = {
  "mvp-under-5l": {
    slug: "mvp-under-5l",
    title: "How We Help Startups Launch MVPs Under ₹5L",
    date: "March 12, 2024",
    readTime: "5 min read",
    category: "MVP Development",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
    excerpt: "A practical guide to launching your product with limited budget."
  },
  "choosing-right-tech-stack": {
    slug: "choosing-right-tech-stack",
    title: "Choosing the Right Tech Stack for Your Startup",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Tech Stack",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    excerpt: "React vs Vue vs Angular - what should you choose?"
  },
  "when-to-hire-dev-partner": {
    slug: "when-to-hire-dev-partner",
    title: "When to Hire a Development Partner",
    date: "March 8, 2024",
    readTime: "5 min read",
    category: "Startup Growth",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    excerpt: "Signs that it's time to bring in external expertise."
  },
  "equity-vs-cash-founders": {
    slug: "equity-vs-cash-founders",
    title: "Equity vs Cash: What Founders Should Know",
    date: "February 28, 2024",
    readTime: "7 min read",
    category: "Fundraising",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800",
    excerpt: "A guide to structuring developer compensation."
  },
  "meet-our-team": {
    slug: "meet-our-team",
    title: "Meet Our Team: The Faces Behind the Code",
    date: "March 8, 2024",
    readTime: "4 min read",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    excerpt: "Get to know the team building software for startups."
  },
  "first-3-months-lessons": {
    slug: "first-3-months-lessons",
    title: "Our First 3 Months: Lessons from a New Startup",
    date: "March 1, 2024",
    readTime: "6 min read",
    category: "Company",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    excerpt: "What we've learned in our first quarter."
  },
  "startup-packages": {
    slug: "startup-packages",
    title: "Introducing Our Startup Packages",
    date: "February 25, 2024",
    readTime: "3 min read",
    category: "Product",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800",
    excerpt: "Flexible development options for early-stage companies."
  }
};

// Convert to array for filtering
const allArticles = Object.values(articlesData);

const categoryIcons = {
  "MVP Development": { icon: Code, color: "from-blue-500 to-cyan-500" },
  "Tech Stack": { icon: Cpu, color: "from-purple-500 to-pink-500" },
  "Fundraising": { icon: DollarSign, color: "from-green-500 to-emerald-500" },
  "Product Strategy": { icon: TrendingUp, color: "from-orange-500 to-red-500" },
  "Startup Growth": { icon: Users, color: "from-indigo-500 to-blue-500" },
  "Culture": { icon: Users, color: "from-pink-500 to-rose-500" },
  "Company": { icon: TrendingUp, color: "from-amber-500 to-orange-500" },
  "Product": { icon: Code, color: "from-emerald-500 to-teal-500" }
};

export default function CategoryPage() {
  const { categoryName } = useParams();
  
  // Format category name for display
  const formattedCategory = categoryName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Filter articles by category
  const categoryArticles = allArticles.filter(
    article => article.category.toLowerCase().replace(/ /g, '-') === categoryName
  );

  const CategoryIcon = categoryIcons[formattedCategory]?.icon || Code;

  return (
    <main className="pt-24 bg-white min-h-screen">
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link
          to="/insights"
          className="inline-flex items-center text-gray-600 hover:text-blue-600 transition"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Insights
        </Link>
      </div>

      {/* Category Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <CategoryIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{formattedCategory}</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-2xl">
            {categoryArticles.length} article{categoryArticles.length !== 1 ? 's' : ''} available
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {categoryArticles.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">No articles yet</h2>
              <p className="text-gray-600 mb-8">
                We're working on articles for this category. Check back soon!
              </p>
              <Link
                to="/insights"
                className="inline-flex items-center text-blue-600 font-semibold"
              >
                Browse other categories <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryArticles.map((article, index) => (
                <Link
                  key={index}
                  to={`/insights/${article.slug}`}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
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
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
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
          )}
        </div>
      </section>
    </main>
  );
}