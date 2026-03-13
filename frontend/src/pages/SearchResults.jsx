import { useLocation, Link } from "react-router-dom";

const pages = [

{
title:"Cloud Engineering",
link:"/services"
},

{
title:"AI & Machine Learning",
link:"/services"
},

{
title:"Cybersecurity",
link:"/services"
},

{
title:"Projects",
link:"/projects"
},

{
title:"Careers",
link:"/careers"
},

{
title:"Contact",
link:"/contact"
},

]

export default function SearchResults(){

const location = useLocation()

const query = new URLSearchParams(location.search).get("q") || ""

const results = pages.filter(p =>
p.title.toLowerCase().includes(query.toLowerCase())
)

return(

<main className="pt-28 max-w-6xl mx-auto px-6">

<h1 className="text-4xl font-semibold mb-10">
Search Results
</h1>

{results.length === 0 && <p>No results found.</p>}

<div className="space-y-6">

{results.map((item,i)=>(

<Link
key={i}
to={item.link}
className="block border p-6 hover:shadow-lg"
>

<h3 className="text-xl font-semibold">
{item.title}
</h3>

</Link>

))}

</div>

</main>

)

}