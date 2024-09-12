import React from "react";
import InputBox from "./components";

function App() {
  return (
    <div
      className="w-full h-screen flex justify-center items-center "
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/106152/euro-coins-currency-money-106152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <form>
        <InputBox />
        <button> swap</button>
        <InputBox />
        <button> Convert</button>
      </form>
    </div>
  );
}

export default App;
