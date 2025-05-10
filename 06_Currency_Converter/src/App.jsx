import "./App.css";
import Input from "./components/Input";

function App() {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center
      gap-9 bg-slate-900 text-white"
    >
      <h1>Hello Currency Converter</h1>
      <Input label={"From"} />
      <Input label={"To"} />
    </div>
  );
}

export default App;
