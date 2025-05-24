import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center
      gap-9 bg-slate-900 text-white bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div
        className="flex flex-col gap-8 justify-center px-8 py-6 rounded-3xl
      border-solid border-2 border-slate-300 backdrop-blur-lg shadow-2xl"
      >
        <form
          className="flex flex-col gap-6 items-center relative"
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <Input label={"From"} />
          <button
            onClick={swap}
            className="w-fit px-6 py-2 rounded-lg bg-sky-600 font-medium
          border-solid border-2 border-sky-200 absolute top-[30%] hover:bg-sky-400 hover:shadow-2xl hover:border-sky-100"
          >
            swap
          </button>
          <Input label={"To"} />
          <button
            className="w-full px-8 py-3 bg-sky-600 border-solid border-2 border-sky-200 font-medium
          rounded-lg hover:bg-sky-400 hover:shadow-2xl hover:border-sky-100"
          >
            Convert
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
