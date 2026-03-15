export default function FeatureCard({title,desc,icon}) {

return (

<div className="bg-white p-8 rounded-xl shadow hover:shadow-2xl transition duration-300 hover:-translate-y-2">

<div className="text-4xl mb-4">
{icon}
</div>

<h3 className="text-xl font-semibold mb-4">
{title}
</h3>

<p className="text-gray-600">
{desc}
</p>

</div>

);

}