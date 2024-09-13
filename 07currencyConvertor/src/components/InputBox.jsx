import React from "react";

function InputBox({ className = "" }) {
  return (
    <div className={`bg-white flex p-3 rounded-lg text-sm ${className}`}>
      <div className="w-1/2">
        <label className="outline-none w-full bg-transparent py-1.5">
          From
        </label>
        <input
          type="number"
          className="w-full text-black/40 mb-2 mt-4 py-1.5 max-w-40 bg-gray-100 rounded-lg pl-2"
          value="0"
        />
      </div>
      <div className="w-1/2 flex justify-end flex-wrap text-right">
        <p className="w-full">Select Currency</p>
        <select className="px-1.5 bg-gray-200 py-0.5 rounded-lg outline-none cursor-pointer mr-3">
          <option>usd</option>
          <option>inr</option>
        </select>
      </div>
    </div>
  );
}

export default InputBox;
