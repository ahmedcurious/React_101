import { useId } from "react";

function Input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = ["usd", "pkr"],
  selectedCurrency,
  setSelectedCurrency,
  amountDisable = false,
  currencyDisable = false,
  className,
}) {
  const amountInputId = useId();
  return (
    <div
      className={`flex flex-row gap-10 bg-white px-6 py-4 rounded-lg ${className}`}
    >
      <div className="flex flex-col gap-3">
        <label htmlFor={amountInputId} className="text-gray-400">
          {label}
        </label>
        <input
          id={amountInputId}
          className="text-gray-600"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="flex flex-col gap-3">
        <label className="text-gray-400">Currency Type</label>
        <select
          className="text-gray-600 bg-slate-200 px-1 py-1 rounded"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
            setSelectedCurrency(e.target.value);
          }}
          disabled={currencyDisable}
        >
          {currencyOption.map((currency, index) => {
            return (
              <option
                value={currency}
                key={index}
                className="rounded bg-slate-300"
              >
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Input;
