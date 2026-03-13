import { useEffect, useState } from "react";

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5001/api/clients")
      .then((res) => res.json())
      .then((data) => {
        setClients(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="pt-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Enterprise Clients</h1>

      <p className="text-gray-600 max-w-3xl mb-12">
        We collaborate with enterprise and mid-scale organizations across
        banking, fintech, healthcare, retail, manufacturing, logistics, and
        cloud-driven industries to deliver secure, scalable digital solutions.
      </p>

      {loading ? (
        <p className="text-gray-500">Loading clients...</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-white border rounded-xl p-6 hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold text-gray-900">
                {client.name}
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                Enterprise Technology Partner
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
