export default function ApplicationSuccess() {
  return (
    <div className="pt-32 flex justify-center">
      <div className="bg-white shadow-lg p-12 text-center max-w-lg">

        <h1 className="text-4xl font-semibold mb-6">
          Application Submitted
        </h1>

        <p className="text-gray-500 mb-6">
          Thank you for applying. A confirmation email has been sent to you.
          Our HR team will review your profile and contact you soon.
        </p>

        <a
          href="/careers"
          className="bg-black text-white px-6 py-3 inline-block"
        >
          Back to Careers
        </a>

      </div>
    </div>
  );
}