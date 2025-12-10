export default function Snackbar({ message, onClose }) {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 
        bg-green-800 text-white font-semibold 
        px-6 py-3 rounded-xl shadow-lg
        transition-all duration-300 flex items-center gap-4">
      <span>{message}</span>

      <button
        onClick={onClose}
        className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200 transition"
      >
        OK
      </button>
    </div>
  );
}
