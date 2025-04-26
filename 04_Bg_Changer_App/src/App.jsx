import "./App.css";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { colorMap } from "./components/colorMap";

function App() {
  let [bgColor, setBgColor] = useState("bg-slate-800");

  const handleBgColorChange = (key) => {
    setBgColor(colorMap[key].bg)
  }

  const divClasses = twMerge(
    bgColor,
    "w-screen h-screen flex flex-col gap-9 justify-center items-center text-white text-center"
  );
  return (
    // <div className="w-screen h-screen flex flex-col gap-9 justify-center items-center bg-slate-800 text-white">
    <div className={divClasses}>
      <h1 className=" text-[100px] font-bold">Background Changer</h1>
      <ButtonContainer
        bgSetter={handleBgColorChange}
      />
    </div>
  );
}

export default App;
