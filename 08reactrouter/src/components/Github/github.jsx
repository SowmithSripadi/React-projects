import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function github() {
  const [idfromUser, setIdfromUser] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (idfromUser.trim()) {
      navigate(`${idfromUser}`);
    } else {
      alert("Please enter a username");
    }
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      <div className="mt-4 bg-gray-600 text-white p-4  pl-10 ">
        <div className="items-center flex gap-5 mb-4">
          <p className="text-lg">Enter github usename :</p>
          <input
            className="text-black border-none rounded-lg p-1"
            onChange={(e) => {
              setIdfromUser(e.target.value);
            }}
            onKeyDown={handleEnterKey}
          ></input>
        </div>
        <button
          type="button"
          className="bg-white text-black p-1 rounded-lg px-3"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default github;
