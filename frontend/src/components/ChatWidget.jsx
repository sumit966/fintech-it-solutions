import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        AI
      </button>
      {open && (
        <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] w-72 p-4 mt-3 shadow-xl rounded-xl">
          <p className="text-sm text-gray-300">AI assistant coming soon.</p>
        </div>
      )}
    </div>
  );
}