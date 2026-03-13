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
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form onSubmit={handleLogin} className="w-96 p-6 border rounded">
        <h2 className="text-2xl mb-4">Login</h2>
        <input className="w-full p-2 mb-3" placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full p-2 mb-3" type="password" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full bg-white text-black py-2">Login</button>
      </form>
    </div>
  );
}