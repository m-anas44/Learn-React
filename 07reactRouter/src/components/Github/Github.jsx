import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/m-anas44")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  const data = useLoaderData();
  return (
    <div className="text-center">
      <img src={data.avatar_url} alt="" width={300} className="mx-auto" />
      <p className="text-3xl font-semibold">
        Github Followers: {data.followers}
      </p>
      <p className="text-3xl font-semibold">
        Github Following: {data.following}
      </p>
    </div>
  );
}

export default Github;

export const githubLoaderData = async () => {
  const response = await fetch("https://api.github.com/users/m-anas44");
  return response.json();
};
