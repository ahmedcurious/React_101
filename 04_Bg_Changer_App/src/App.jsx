import "./App.css";
import Button from "./components/Button";

function App() {
  
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-800 text-white">
      <h1 className=" text-[100px]">Hello BG Changer</h1>
      <Button
        buttonText="Dummy Text"
        onClick={() => console.log("Button Clicked")}
        buttonColor="teal"
      />
    </div>
  );
}

export default App;
