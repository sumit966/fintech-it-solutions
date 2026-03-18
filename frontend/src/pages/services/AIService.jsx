import Container from "../../layout/Container";

export default function AIService(){

return(

<main className="pt-24 bg-white">

<section className="gradient-section py-24">

<Container>

<h1 className="text-5xl font-semibold mb-6">
AI & Machine Learning
</h1>

<p className="text-lg text-gray-200 max-w-3xl">
We build intelligent AI systems that enable predictive analytics,
automation, and data-driven decision making.
</p>

</Container>

</section>


<section className="py-24">

<Container>

<h2 className="text-4xl font-semibold mb-8">
AI Powered Innovation
</h2>

<p className="text-gray-600 max-w-3xl">
Artificial intelligence allows organizations to unlock insights
from massive data and automate complex processes.
</p>

</Container>

</section>


<section className="bg-gray-100 py-24">

<Container>

<h2 className="text-4xl font-semibold mb-12">
AI Capabilities
</h2>

<div className="grid md:grid-cols-3 gap-10">

<div className="service-card border p-8">
<h3 className="font-semibold mb-3">Predictive Analytics</h3>
<p className="text-gray-600">
Machine learning models to forecast business outcomes.
</p>
</div>

<div className="service-card border p-8">
<h3 className="font-semibold mb-3">AI Automation</h3>
<p className="text-gray-600">
Automate enterprise workflows using AI models.
</p>
</div>

<div className="service-card border p-8">
<h3 className="font-semibold mb-3">Data Intelligence</h3>
<p className="text-gray-600">
Transform raw data into strategic insights.
</p>
</div>

</div>

</Container>

</section>

</main>

)

}