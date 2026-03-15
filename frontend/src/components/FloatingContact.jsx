import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact(){

return(

<div className="fixed bottom-6 right-6 flex flex-col gap-3 z-[999]">

{/* CALL BUTTON */}

<a
href="tel:+916299863493"
className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:scale-110 transition"
>
<Phone size={22}/>
</a>

{/* WHATSAPP BUTTON */}

<a
href="https://wa.me/916299863493"
target="_blank"
rel="noopener noreferrer"
className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition"
>
<MessageCircle size={22}/>
</a>

</div>

)

}