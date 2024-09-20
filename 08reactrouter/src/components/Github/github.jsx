import React, { useEffect, useState } from "react";

function github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/sowmithsripadi").then((response) =>
      response.json().then((data) => {
        console.log(data);
        setData(data);
      })
    );
  }, []);

  return (
    <>
      <div className="text-xl text-center m-4 bg-gray-600 text-white p-4">
        Github stats
      </div>
      <div className="flex">
        <img src={data.avatar_url} alt="github profile pic" width={300} />
      </div>
    </>
  );
}

export default github;
