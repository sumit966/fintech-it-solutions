import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-10">FINTECH</h2>

      <ul className="space-y-4">
        <li
          className="cursor-pointer hover:text-blue-400"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </li>
        <li className="cursor-pointer hover:text-blue-400">
          Employees
        </li>
        <li className="cursor-pointer hover:text-blue-400">
          Projects
        </li>
        <li className="cursor-pointer hover:text-blue-400">
          Payroll
        </li>
      </ul>

      <button
        onClick={logout}
        className="mt-10 w-full bg-red-600 p-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
