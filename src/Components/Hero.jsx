import Navbar from "./Navbar.jsx";
export default function Hero() {
  return (
    <div>
      <Navbar />
      <div className="  p-5 bg-black h-screen flex flex-col  justify-center ">
        <h1 className="text-4xl font-semibold  text-gray-400 ">I'm a</h1>
        <h1 className="text-6xl font-extrabold mt-3">Graphic</h1>
        <h1 className="text-6xl font-extrabold mt-3">Desginer .</h1>
        <button className="bg-orange-950 w-fit text-white rounded-lg p-1 mt-3">
          Contact Me
        </button>
      </div>
    </div>
  );
}
