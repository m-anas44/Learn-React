import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="grid place-content-center h-screen">
      <div className="max-w-md mx-auto bg-gray-600 px-4 py-3 rounded-lg bg-opacity-85">
        <h1 className="font-semibold text-2xl text-center mb-2">
          Password Generator
        </h1>
        <div className="flex">
          <input
            type="text"
            className=" rounded flex-1 px-3 py-1 outline-none"
            readOnly
            ref={passwordRef}
            value={password}
            placeholder="password"
          />
          <button
            onClick={copyToClipboard}
            className="px-3 py-1 bg-gray-900 text-white rounded font-semibold"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 mt-4 justify-between">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              defaultValue={8}
              className="cursor-pointer outline-none text-black"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="font-semibold">characters: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={(e) => {
                setNumberAllowed(e.target.checked);
              }}
            />
            <label htmlFor="numberInput" className="font-semibold">
              Numbers
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={(e) => {
                setCharAllowed(e.target.checked);
              }}
            />
            <label htmlFor="charInput" className="font-semibold">
              Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
