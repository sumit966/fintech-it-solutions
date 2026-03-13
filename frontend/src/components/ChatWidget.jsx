import { useState } from "react";

export default function ChatWidget(){

const [open,setOpen] = useState(false)

return(

<div className="fixed bottom-6 right-6">

<button
onClick={()=>setOpen(!open)}
className="bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg"
>
AI
</button>

{open && (

<div className="bg-white border w-72 p-4 mt-3 shadow-xl">

<p className="text-sm">
AI assistant coming soon.
</p>

</div>

)}

</div>

)

}