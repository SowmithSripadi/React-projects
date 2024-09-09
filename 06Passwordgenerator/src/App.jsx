import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const passwordRef = useRef(null);
  const [length, setLength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("");

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPass(pass);
  }, [numAllowed, charAllowed, length]);

  useEffect(() => {
    passwordgenerator();
  }, [length, numAllowed, charAllowed, passwordgenerator]);

  const copytoclipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  return (
    <>
      <div className=" bg-gray-700 max-w-lg mx-auto my-9 py-4 px-8 text-center rounded-lg">
        <h1 className="text-green-400 mb-5"> Password Generator</h1>
        <div className="flex rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="password"
            value={pass}
            className="py-2 w-full px-3 bg-black text-white "
            readOnly
            ref={passwordRef}
          />
          <button className="bg-green-400 px-2 py-2" onClick={copytoclipboard}>
            copy
          </button>
        </div>
        <div className="flex my-4 gap-x-3 justify-center text-blue-200">
          <div className="flex gap-x-2 ">
            <input
              type="range"
              min={8}
              max={30}
              defaultValue={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>length :{length}</label>
          </div>
          <div className="flex gap-x-2 ">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              onChange={() => {
                setnumAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex gap-x-2 ">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
