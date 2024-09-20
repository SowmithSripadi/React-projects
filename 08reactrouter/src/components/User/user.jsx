import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="text-2xl bg-cyan-400 text-black p-4 text-center">
      user:{userid}
    </div>
  );
}

export default User;
