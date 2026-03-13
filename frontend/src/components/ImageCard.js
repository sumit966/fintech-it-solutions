export default function ImageCard({ image, title, subtitle, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10"
    >
      <img
        src={image}
        alt={title}
        className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-gray-300">{subtitle}</p>
      </div>
    </div>
  );
}
