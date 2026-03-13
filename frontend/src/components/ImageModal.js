export default function ImageModal({ open, onClose, title, content }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-6">
      <div className="bg-white text-black max-w-3xl w-full rounded-2xl p-8 relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="mt-6 text-gray-700 leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
}
