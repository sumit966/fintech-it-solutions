export default function NotFound() {
  return (
    <main className="pt-32 text-center">

      <h1 className="text-6xl font-bold mb-6">
        404
      </h1>

      <p className="text-gray-600 text-lg">
        Page not found
      </p>

      <a
        href="/"
        className="inline-block mt-8 px-6 py-3 bg-black text-white"
      >
        Go Home
      </a>

    </main>
  );
}