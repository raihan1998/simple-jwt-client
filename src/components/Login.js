import React from "react";

const inputStyle = {
  width: "100%",
  height: "30px",
  marginBottom: "10px",
};

const Login = () => {
  return (
    <form style={{ width: "50%", margin: "20px auto" }}>
      <input
        style={inputStyle}
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <br />
      <input
        style={inputStyle}
        type="password"
        name="password"
        placeholder="Password"
        required
      />
      <br />
      <input type="submit" value="Login" />
    </form>
  );
};

export default Login;
