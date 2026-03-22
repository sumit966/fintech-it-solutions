export default function ApplicationSuccess() {
  return (
    <div className="pt-32 flex justify-center bg-[#0B0F19] min-h-screen">
      <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[#1F2937] shadow-lg p-12 text-center max-w-lg rounded-2xl">
        <h1 className="text-4xl font-semibold mb-6 text-white">Application Submitted</h1>
        <p className="text-gray-400 mb-6">
          Thank you for applying. A confirmation email has been sent to you.
          Our HR team will review your profile and contact you soon.
        </p>
        <a
          href="/careers"
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 inline-block rounded-lg hover:shadow-xl transition"
        >
          Back to Careers
        </a>
      </div>
    </div>
  );
}