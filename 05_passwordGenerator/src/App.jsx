import "./App.css";
import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumber) str += "0123456789";
    if (isCharacter) str += "!#$%&()*+,-./:;<=>?@[]^_{|}~";
    for (let i = 1; i < length; i++) {
      let randomCharacter = Math.round(Math.random() * str.length + 1);
      pass += str.charAt(randomCharacter);
    }
    setPassword(pass);
  }, [length, isNumber, isCharacter, setPassword]);

  const copyClipBoard = useCallback(() => {
    passwordReference.current?.select();
    passwordReference.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumber, isCharacter, passwordGenerator]);

  const passwordReference = useRef(null);

  return (
    <div className="flex flex-col gap-12 text-white bg-slate-900 items-center justify-center w-full h-screen">
      <h1 className="text-[72px] text-center  font-semibold">
        Password Generator App
      </h1>
      <div
        className="w-full max-w-2xl mx-auto flex flex-col items-center gap-8
        bg-gray-700 text-sky-600 border-orange-200 border rounded-3xl drop-shadow-lg py-4 px-14"
      >
        <h1 className="text-[60px] text-center font-semibold">
          Password Generator
        </h1>
        <div className="w-full flex flex-row gap-4 flex-wrap justify-center items-center">
          <input
            type="text"
            value={password}
            placeholder="password"
            readOnly
            className="w-[380px] text-orange-900 font-medium py-2 px-3 bg-slate-200 rounded-md"
            ref={passwordReference}
          />
          <button
            className="bg-orange-600 hover:bg-orange-300 text-white
            font-semibold px-9 py-3 shrink-0 rounded-2xl cursor-pointer"
            onClick={copyClipBoard}
          >
            Copy
          </button>
        </div>
        <div className="w-full flex flex-row flex-wrap gap-4 justify-center">
          <div className="flex flex-row flex-wrap gap-2 justify-center">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className=" flex flex-row flex-wrap gap-2 justify-center">
            <input
              type="checkbox"
              defaultChecked={isNumber}
              id="numberInput"
              className="cursor-pointer"
              onChange={() => {
                setIsNumber((prev) => {
                  return !prev;
                });
              }}
            />
            <label>Numbers: {isNumber.toString()}</label>
          </div>
          <div className=" flex flex-row flex-wrap gap-2 justify-center">
            <input
              type="checkbox"
              defaultChecked={isCharacter}
              id="charachterInput"
              className="cursor-pointer"
              onChange={() => {
                setIsCharacter((prev) => {
                  return !prev;
                });
              }}
            />
            <label>Charachters: {isCharacter.toString()}</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
