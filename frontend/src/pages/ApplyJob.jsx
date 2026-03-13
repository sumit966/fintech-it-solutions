import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ApplyJob() {

const { id } = useParams();
const navigate = useNavigate();

const [job,setJob] = useState(null);
const [loading,setLoading] = useState(false);
const [error,setError] = useState("");

const [form,setForm] = useState({
name:"",
email:"",
phone:"",
linkedin:"",
company:"",
experience:"",
education:"",
coverLetter:"",
resume:null
});

useEffect(()=>{

fetch(`https://fintech-it-solutions.onrender.com/api/careers/jobs/${id}`)
.then(res=>res.json())
.then(data=>setJob(data))
.catch(()=>{});

},[id]);

const submit = async(e)=>{

e.preventDefault();

if(!form.resume){
setError("Please upload resume");
return;
}

setLoading(true);
setError("");

try{

const data = new FormData();

data.append("name",form.name);
data.append("email",form.email);
data.append("phone",form.phone);
data.append("linkedin",form.linkedin);
data.append("company",form.company);
data.append("experience",form.experience);
data.append("education",form.education);
data.append("coverLetter",form.coverLetter);
data.append("jobId",id);
data.append("resume",form.resume);

const res = await fetch("http://localhost:5001/api/careers/apply",{
method:"POST",
body:data
});

const result = await res.json();

if(result.success){

navigate("/careers/success");

}else{

setError("Application failed");

}

}catch(err){

setError("Server error");

}

setLoading(false);

};

return(

<main className="pt-24 bg-gray-50 min-h-screen">

<section className="max-w-5xl mx-auto bg-white p-10 shadow-lg rounded">

<h1 className="text-4xl font-semibold mb-2">

Apply for: {job?.title || "Loading..."}

</h1>

<p className="text-gray-500 mb-8">

Location: {job?.location || "Global"} • Department: {job?.department || "Technology"}

</p>

{error && (

<div className="bg-red-100 text-red-700 p-3 mb-6">
{error}
</div>

)}

<form onSubmit={submit} className="grid md:grid-cols-2 gap-6">

{/* FULL NAME */}

<input
placeholder="Full Name"
required
className="border p-3 w-full"
onChange={(e)=>setForm({...form,name:e.target.value})}
/>

{/* EMAIL */}

<input
placeholder="Email Address"
type="email"
required
className="border p-3 w-full"
onChange={(e)=>setForm({...form,email:e.target.value})}
/>

{/* PHONE */}

<input
placeholder="Phone Number"
required
className="border p-3 w-full"
onChange={(e)=>setForm({...form,phone:e.target.value})}
/>

{/* LINKEDIN */}

<input
placeholder="LinkedIn Profile"
className="border p-3 w-full"
onChange={(e)=>setForm({...form,linkedin:e.target.value})}
/>

{/* COMPANY */}

<input
placeholder="Current Company"
className="border p-3 w-full"
onChange={(e)=>setForm({...form,company:e.target.value})}
/>

{/* EXPERIENCE */}

<input
placeholder="Years of Experience"
className="border p-3 w-full"
onChange={(e)=>setForm({...form,experience:e.target.value})}
/>

{/* EDUCATION */}

<input
placeholder="Highest Qualification"
className="border p-3 w-full md:col-span-2"
onChange={(e)=>setForm({...form,education:e.target.value})}
/>

{/* COVER LETTER */}

<textarea
placeholder="Cover Letter (Optional)"
rows="5"
className="border p-3 w-full md:col-span-2"
onChange={(e)=>setForm({...form,coverLetter:e.target.value})}
/>

{/* RESUME */}

<div className="md:col-span-2">

<label className="block mb-2 text-sm font-medium">
Upload Resume (PDF Only)
</label>

<input
type="file"
accept="application/pdf"
required
onChange={(e)=>setForm({...form,resume:e.target.files[0]})}
/>

</div>

{/* SUBMIT BUTTON */}

<button
disabled={loading}
className="bg-black text-white py-3 md:col-span-2 hover:bg-gray-800 transition"
>

{loading ? "Submitting Application..." : "Submit Application"}

</button>

</form>

</section>

</main>

)

}