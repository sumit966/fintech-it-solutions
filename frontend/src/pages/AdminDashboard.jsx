import { useEffect, useState } from "react";

export default function AdminDashboard(){

const [applications,setApplications] = useState([]);

useEffect(()=>{

fetch("http://localhost:5001/api/admin/applications")
.then(res=>res.json())
.then(data=>setApplications(data))
.catch(()=>setApplications([]));

},[]);

return(

<main className="pt-28 max-w-7xl mx-auto px-8">

<h1 className="text-4xl font-semibold mb-10">
HR Applications Dashboard
</h1>

{applications.length === 0 ? (

<p>No applications yet.</p>

):(


<table className="w-full border">

<thead className="bg-gray-100">

<tr>

<th className="p-4 border">Name</th>
<th className="p-4 border">Email</th>
<th className="p-4 border">Position</th>
<th className="p-4 border">Resume</th>

</tr>

</thead>

<tbody>

{applications.map(app=>(

<tr key={app._id} className="border">

<td className="p-3 border">{app.name}</td>

<td className="p-3 border">{app.email}</td>

<td className="p-3 border">{app.job_title}</td>

<td className="p-3 border">

<a
href={`http://localhost:5001/uploads/${app.resume}`}
target="_blank"
className="text-blue-600"
>
Download
</a>

</td>

</tr>

))}

</tbody>

</table>

)}

</main>

)

}