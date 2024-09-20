import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ShowGithubStats() {
  const [data, setData] = useState({});
  const [error, setError] = useState(null); // To handle errors
  const { githubusername } = useParams(); // Correct way to destructure the username

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubusername}`)
      .then((res) => {
        if (res.status === 404) {
          throw new Error("User not found");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err.message); // Capture error message
      });
  }, [githubusername]);

  return (
    <>
      <div className="mt-4 bg-gray-600 text-white p-4  pl-10 ">
        <p className="text-2xl text-center">Github Stats</p>

        {/* Show error if any */}
        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <>
            <img width={300} src={data.avatar_url} alt="User Avatar" />
            <p className="text-center">Username: {data.login}</p>
          </>
        )}
      </div>
    </>
  );
}

export default ShowGithubStats;

export const githubinfoLoader = async () => {
  const res = await fetch(`https://api.github.com/users/${githubusername}`);
  return res.json();
};
