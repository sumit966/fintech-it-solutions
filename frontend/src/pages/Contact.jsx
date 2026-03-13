import { useState } from "react";
import Container from "../layout/Container";

export default function Contact() {

  const [form,setForm] = useState({
    name:"",
    email:"",
    company:"",
    message:""
  });

  const [loading,setLoading] = useState(false);
  const [success,setSuccess] = useState(false);

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();

    setLoading(true);

    try{

      const res = await fetch("https://fintech-it-solutions.onrender.com/api/contact",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(form)
      });

      if(res.ok){
        setSuccess(true);
        setForm({
          name:"",
          email:"",
          company:"",
          message:""
        });
      }

    }catch(err){
      console.log(err);
    }

    setLoading(false);
  };

  return (

<main className="pt-24 bg-white">

{/* HERO */}

<section className="bg-black text-white py-24">

<Container>

<h1 className="text-5xl font-semibold">
Contact Us
</h1>

<p className="mt-6 max-w-2xl text-gray-300">
Get in touch with FINTECH IT SOLUTIONS to discuss partnerships,
enterprise technology solutions, or career opportunities.
</p>

</Container>

</section>


{/* CONTACT SECTION */}

<section className="py-24">

<Container>

<div className="grid md:grid-cols-2 gap-16">

{/* CONTACT INFO */}

<div>

<h2 className="text-3xl font-semibold mb-6">
Our Office
</h2>

<p className="text-gray-600 mb-8">
We work with enterprises across India and globally.
Reach out to our team for partnerships, services,
or technology consulting.
</p>

<div className="space-y-4">

<p>
<strong>Head Office</strong><br/>
Pune, Maharashtra, India
</p>

<p>
<strong>Email</strong><br/>
fintechitsolutions.info@gmail.com
</p>

<p>
<strong>Business Hours</strong><br/>
Monday – Friday<br/>
9:00 AM – 6:00 PM
</p>

</div>

</div>


{/* CONTACT FORM */}

<div>

<h2 className="text-3xl font-semibold mb-6">
Send a Message
</h2>

<form onSubmit={handleSubmit} className="space-y-6">

<input
type="text"
name="name"
placeholder="Full Name"
value={form.name}
onChange={handleChange}
required
className="w-full border p-4"
/>

<input
type="email"
name="email"
placeholder="Email Address"
value={form.email}
onChange={handleChange}
required
className="w-full border p-4"
/>

<input
type="text"
name="company"
placeholder="Company (Optional)"
value={form.company}
onChange={handleChange}
className="w-full border p-4"
/>

<textarea
name="message"
placeholder="Message"
value={form.message}
onChange={handleChange}
required
rows="5"
className="w-full border p-4"
/>

<button
type="submit"
className="bg-black text-white px-8 py-3"
disabled={loading}
>

{loading ? "Sending..." : "Send Message"}

</button>

{success && (
<p className="text-green-600">
Message sent successfully. We will contact you soon.
</p>
)}

</form>

</div>

</div>

</Container>

</section>


{/* GOOGLE MAP */}

<section className="h-[450px]">

<iframe
title="map"
width="100%"
height="100%"
loading="lazy"
allowFullScreen
src="https://maps.google.com/maps?q=pune%20india&t=&z=13&ie=UTF8&iwloc=&output=embed"
/>

</section>

</main>

  );
}