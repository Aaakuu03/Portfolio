import Button from "./Components/button";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import MainLayout from "./Layout/MainLayout";
export default function App() {
  return (
    <MainLayout>
      <Hero />
      <AboutMe />
      <Skills />
    </MainLayout>
  );
}
// const obj = {
//   name: "Aakriti",
//   age: 21,
//   gender: "female",
// };

// const printName = () => {
//   console.log("Heelo");
// };

// const printHi = () => {
//   console.log("Hii");
// };

// return (
//   <div className="bg-black h-screen flex items-center justify-center">
//     <h1 className="text-4xl text-white text-center flex flex-col gap-2 items-center">
//       Hi! I'm {obj.name} It's my First React App I am {obj.age} years old.
//       <Button text="Click" onClick={printName} />
//       <Button text="Click" onClick={printHi} />
//     </h1>
//   </div>
// );
