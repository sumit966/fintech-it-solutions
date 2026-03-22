import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      navigate(res.data.role === "admin" ? "/admin" : "/");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0F19] text-white">
      <form onSubmit={handleLogin} className="w-96 p-6 border border-[#1F2937] bg-[rgba(255,255,255,0.05)] rounded-lg">
        <h2 className="text-2xl mb-4">Login</h2>
        <input className="w-full p-2 mb-3 border border-[#1F2937] bg-[rgba(255,255,255,0.05)] rounded text-white placeholder-gray-500" placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full p-2 mb-3 border border-[#1F2937] bg-[rgba(255,255,255,0.05)] rounded text-white placeholder-gray-500" type="password" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded font-semibold hover:shadow-xl transition">Login</button>
      </form>
    </div>
  );
}