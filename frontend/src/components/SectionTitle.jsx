export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-14 max-w-3xl">
      <h2 className="text-4xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
}