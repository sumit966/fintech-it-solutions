export default function NotFound() {
  return (
    <main className="pt-32 text-center bg-[#0B0F19] min-h-screen">
      <h1 className="text-6xl font-bold mb-6 text-white">404</h1>
      <p className="text-gray-400 text-lg">Page not found</p>
      <a
        href="/"
        className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition"
      >
        Go Home
      </a>
    </main>
  );
}