export default function AdminSidebar() {
  return (
    <div className="w-64 h-screen bg-[#0B0F19] border-r border-[#1F2937] p-6">
      <h2 className="text-white font-semibold text-lg mb-6">Admin Menu</h2>
      <ul className="space-y-2">
        <li className="text-gray-400 hover:text-white transition">Dashboard</li>
        <li className="text-gray-400 hover:text-white transition">Applications</li>
        <li className="text-gray-400 hover:text-white transition">Users</li>
        <li className="text-gray-400 hover:text-white transition">Settings</li>
      </ul>
    </div>
  );
}