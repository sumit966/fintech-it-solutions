import Container from "../../layout/Container";

export default function CloudEngineering(){

return(

<main className="pt-24 bg-white">

{/* HERO */}

<section className="gradient-section py-28">

<Container>

<h1 className="text-5xl font-semibold mb-6">
Cloud Engineering
</h1>

<p className="text-lg text-gray-200 max-w-3xl">
FINTECH IT SOLUTIONS helps enterprises migrate, design,
and scale cloud infrastructure using AWS, Azure and Google Cloud.
</p>

</Container>

</section>


{/* CLIENT PROBLEM */}

<section className="py-24">

<Container>

<h2 className="text-4xl font-semibold mb-6">
The Enterprise Challenge
</h2>

<p className="text-gray-600 max-w-3xl leading-relaxed">
Many organizations still rely on legacy infrastructure that
limits scalability and increases operational costs. Without
modern cloud platforms, enterprises struggle with slow
deployment cycles and limited global availability.
</p>

</Container>

</section>


{/* OUR SOLUTION */}

<section className="bg-gray-100 py-24">

<Container>

<h2 className="text-4xl font-semibold mb-12">
Our Cloud Solutions
</h2>

<div className="grid md:grid-cols-3 gap-10">

<div className="service-card border p-8">

<h3 className="font-semibold mb-3">
Cloud Migration
</h3>

<p className="text-gray-600">
Seamlessly migrate enterprise workloads from legacy
data centers to AWS, Azure or Google Cloud.
</p>

</div>


<div className="service-card border p-8">

<h3 className="font-semibold mb-3">
Cloud Architecture
</h3>

<p className="text-gray-600">
Design resilient infrastructure capable of supporting
millions of global users.
</p>

</div>


<div className="service-card border p-8">

<h3 className="font-semibold mb-3">
DevOps Automation
</h3>

<p className="text-gray-600">
Automated CI/CD pipelines and infrastructure as code
for faster deployment cycles.
</p>

</div>

</div>

</Container>

</section>


{/* CLOUD ARCHITECTURE */}

<section className="py-24">

<Container>

<h2 className="text-4xl font-semibold mb-10">
Enterprise Cloud Architecture
</h2>

<div className="grid md:grid-cols-3 gap-10 text-center">

<div className="border p-8">

<h3 className="font-semibold mb-3">
Global Infrastructure
</h3>

<p className="text-gray-600">
Deploy applications across global cloud regions.
</p>

</div>

<div className="border p-8">

<h3 className="font-semibold mb-3">
High Availability
</h3>

<p className="text-gray-600">
Redundant systems ensure 99.99% uptime.
</p>

</div>

<div className="border p-8">

<h3 className="font-semibold mb-3">
Security
</h3>

<p className="text-gray-600">
Enterprise security frameworks and identity access control.
</p>

</div>

</div>

</Container>

</section>


{/* CTA */}

<section className="bg-black text-white py-24">

<Container>

<h2 className="text-4xl font-semibold mb-4">
Start Your Cloud Transformation
</h2>

<p className="text-gray-300 max-w-xl">
Partner with FINTECH IT SOLUTIONS to design scalable
cloud platforms that accelerate innovation.
</p>

<a
href="/contact"
className="btn-animated inline-block mt-8 bg-white text-black px-8 py-3 rounded"
>
Talk to Our Experts
</a>

</Container>

</section>

</main>

)

}