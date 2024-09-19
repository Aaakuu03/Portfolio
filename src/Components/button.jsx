export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white text-black shadow-md mr-3 text-3xl p-2 rounded-lg"
    >
      {text}
    </button>
  );
}
