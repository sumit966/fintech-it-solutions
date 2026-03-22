import { useLocation, Link } from "react-router-dom";

const pages = [
  { title: "Services", link: "/services" },
  { title: "Projects", link: "/projects" },
  { title: "Careers", link: "/careers" },
  { title: "Contact", link: "/contact" },
  { title: "Industries", link: "/industries" }
];

export default function Search() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";
  const results = pages.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="pt-28 max-w-6xl mx-auto px-6 bg-[#0B0F19] min-h-screen">
      <h1 className="text-4xl mb-10 text-white">Search Results</h1>
      {results.map((item, i) => (
        <Link
          key={i}
          to={item.link}
          className="block border border-[#1F2937] bg-[rgba(255,255,255,0.05)] p-6 mb-6 rounded-lg hover:shadow-lg transition"
        >
          <span className="text-white">{item.title}</span>
        </Link>
      ))}
    </main>
  );
}