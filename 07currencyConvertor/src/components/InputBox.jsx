import React from "react";

function InputBox({ className = "" }) {
  return (
    <div className={`bg-white flex p-3 rounded-lg text-sm ${className}`}>
      <div className="w-1/2">
        <label className="">From</label>
        <input type="number" className="w-full text-black/40 mb-2" value="0" />
      </div>
      <div className="w-1/2">
        <p>Select Currency</p>
        <select>
          <option>usd</option>
          <option>inr</option>
        </select>
      </div>
    </div>
  );
}

export default InputBox;
