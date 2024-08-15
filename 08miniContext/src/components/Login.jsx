import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{padding: "10px 7px 10px 7px"}}
      />
      {" "}
      <input
        type="password"
        placeholder="username"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{padding: "10px 7px 10px 7px"}}
      />
      {" "}
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Login;
