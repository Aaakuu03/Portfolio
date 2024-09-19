export default function Navbar() {
  return (
    <nav className="p-3 flex items-center justify-between ">
      <div className="text-orange-600 text-2xl font-bold">AAKRITI</div>
      <ul className="flex gap-5">
        <li>Home</li>
        <li>About Me</li>
        <li>Skills</li>
      </ul>
      <button className="bg-orange-950 text-white rounded-lg p-3">
        Contact Me
      </button>
    </nav>
  );
}
