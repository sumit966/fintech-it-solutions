import { useLocation, Link } from "react-router-dom";

const pages=[

{title:"Services",link:"/services"},
{title:"Projects",link:"/projects"},
{title:"Careers",link:"/careers"},
{title:"Contact",link:"/contact"},
{title:"Industries",link:"/industries"}

]

export default function Search(){

const location = useLocation()

const query = new URLSearchParams(location.search).get("q") || ""

const results = pages.filter(p =>
p.title.toLowerCase().includes(query.toLowerCase())
)

return(

<main className="pt-28 max-w-6xl mx-auto px-6">

<h1 className="text-4xl mb-10">
Search Results
</h1>

{results.map((item,i)=>(

<Link
key={i}
to={item.link}
className="block border p-6 mb-6 hover:shadow-lg"
>

{item.title}

</Link>

))}

</main>

)

}