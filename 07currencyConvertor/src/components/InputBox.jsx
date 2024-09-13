import React from "react";
import { useId } from "react";

function InputBox({
  className = "",
  label,
  amount,
  currencyOptions = [],
  selectedCurrency,
  currencyDisable = false,
  amountDisable = false,
  onAmountChange,
  onCurrencyChange,
  selectLabel = "",
}) {
  const amountInputId = useId();
  return (
    <div className={`bg-white flex p-3 rounded-lg text-sm ${className}`}>
      <div className="w-1/2">
        <label
          className="outline-none w-full bg-transparent py-1.5 inline-block"
          htmlFor={amountInputId}
        >
          {label}
        </label>
        <input
          type="number"
          className="w-full  mb-2 mt-1.5 py-1.5 max-w-40 bg-gray-100 rounded-lg pl-2"
          value={amount}
          disabled={amountDisable}
          placeholder="Amount"
          id={amountInputId}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="w-1/2 flex justify-end flex-wrap text-right">
        <p className="w-full">{selectLabel}</p>
        <select
          className="px-1.5 bg-gray-200 py-0.5 rounded-lg outline-none cursor-pointer mr-3"
          value={selectedCurrency}
          disabled={currencyDisable}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
