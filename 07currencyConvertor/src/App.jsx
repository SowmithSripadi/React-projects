import React from "react";
import InputBox from "./components";

function App() {
  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/106152/euro-coins-currency-money-106152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="bg-white w-full max-w-md mx-auto border-2 border-gray-60 rounded-lg p-5 backdrop-blur-3xl bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="w-full mb-1">
            <InputBox />
          </div>
          <div className="relative w-full h-0.5">
            <button
              className="px-2 py-0.5 rounded-lg absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-white border-2"
              style={{ backgroundColor: "#f1e9d2" }}
              type="button"
            >
              swap
            </button>
          </div>
          <div className="w-full mt-1 mb-3">
            <InputBox />
          </div>
          <button
            className="px-8 py-4 rounded-lg w-full border-2 border-white"
            style={{ backgroundColor: "#f1e9d2" }}
            type="submit"
          >
            {" "}
            Convert
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
