import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function Chatbot(){

const [open,setOpen] = useState(false)
const [messages,setMessages] = useState([
{from:"bot",text:"Hello 👋 Welcome to Fintech IT Solutions. Ask me anything."}
])
const [input,setInput] = useState("")
const [loading,setLoading] = useState(false)

const sendMessage = async ()=>{

if(!input) return

const userMessage = {from:"user",text:input}

setMessages(prev=>[...prev,userMessage])

setLoading(true)

try{

const res = await fetch("http://localhost:5001/api/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({message:input})
})

const data = await res.json()

const botMessage = {
from:"bot",
text:data.reply
}

setMessages(prev=>[...prev,botMessage])

}catch(err){

setMessages(prev=>[
...prev,
{from:"bot",text:"AI server error"}
])

}

setInput("")
setLoading(false)

}

return(

<div>

<button
onClick={()=>setOpen(!open)}
className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
>
{open ? <X size={22}/> : <MessageCircle size={22}/>}
</button>

{open && (

<div className="fixed bottom-20 right-6 w-80 bg-white shadow-2xl rounded-xl overflow-hidden z-50">

<div className="bg-black text-white p-4 font-semibold">
AI Assistant
</div>

<div className="h-80 overflow-y-auto p-4 space-y-3">

{messages.map((m,i)=>(
<div
key={i}
className={`text-sm p-2 rounded max-w-[80%] ${
m.from==="user"
? "bg-blue-500 text-white ml-auto"
: "bg-gray-200"
}`}
>
{m.text}
</div>
))}

{loading && (
<div className="text-sm text-gray-500">
AI is typing...
</div>
)}

</div>

<div className="flex border-t">

<input
value={input}
onChange={(e)=>setInput(e.target.value)}
placeholder="Ask something..."
className="flex-1 p-2 outline-none"
/>

<button
onClick={sendMessage}
className="px-4 bg-black text-white"
>
Send
</button>

</div>

</div>

)}

</div>

)

}