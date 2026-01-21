import React, { useEffect, useState } from "react";
import {
  fetchEmployees,
  fetchProjects,
  fetchPayroll,
} from "../services/api";

const Dashboard = () => {
  const [stats, setStats] = useState({
    employees: 0,
    projects: 0,
    payroll: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [employees, projects, payroll] = await Promise.all([
          fetchEmployees(),
          fetchProjects(),
          fetchPayroll(),
        ]);

        setStats({
          employees: employees.length,
          projects: projects.length,
          payroll: payroll.length,
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">Employees</h2>
          <p className="text-3xl mt-2">{stats.employees}</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">Projects</h2>
          <p className="text-3xl mt-2">{stats.projects}</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">Payroll Records</h2>
          <p className="text-3xl mt-2">{stats.payroll}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
