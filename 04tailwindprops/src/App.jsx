import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  const newObj = {
    name: "Sowmith",
    age: 24,
    outer: [1, 2, ["inside"]],
  };

  return (
    <>
      <h1 className="bg-green-400 text-black mb-4">Tailwind test</h1>
      <Card test={newObj} />
    </>
  );
}

export default App;
