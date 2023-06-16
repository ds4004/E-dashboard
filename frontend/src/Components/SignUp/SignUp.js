import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const check = () => {
    console.log(name, email, password);
  };
  return (
    <div className="reg-form">
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
        className="reg-input"
      />
      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        className="reg-input"
      />
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        className="reg-input"
      />
      <input type="button" value="Register" id="reg-submit" onClick={check} />
    </div>
  );
};

export default SignUp;
