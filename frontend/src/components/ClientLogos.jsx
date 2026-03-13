export default function ClientLogos(){

const logos = [
"https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
"https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
"https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
"https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
"https://upload.wikimedia.org/wikipedia/commons/c/c9/Oracle_logo.svg"
]

return(

<section className="py-20 bg-gray-100">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-semibold text-center mb-12">
Trusted by Global Technology Leaders
</h2>

<div className="flex justify-center gap-16 flex-wrap opacity-70">

{logos.map((logo,i)=>(

<img
key={i}
src={logo}
className="h-10 hover:scale-110 transition"
/>

))}

</div>

</div>

</section>

)

}