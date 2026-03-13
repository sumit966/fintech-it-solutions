import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <main className="pt-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-10">Admin Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <Link to="/dashboard/projects" className="p-6 border rounded">
          <h3 className="font-semibold">Projects</h3>
          <p>View assigned projects</p>
        </Link>

        <Link to="/dashboard/tasks" className="p-6 border rounded">
          <h3 className="font-semibold">Tasks</h3>
          <p>Track daily tasks</p>
        </Link>

        <Link to="/dashboard/profile" className="p-6 border rounded">
          <h3 className="font-semibold">Profile</h3>
          <p>Account settings</p>
        </Link>
      </div>
    </main>
  );
}
