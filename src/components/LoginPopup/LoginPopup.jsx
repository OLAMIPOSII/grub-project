import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
const LoginPopup = ({ setShowLogin }) => {
  const [currstate, setcurrstate] = useState("Login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    setError("");

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    if (currstate === "sign up" && !name) {
      setError("Name is required for sign up.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    console.log("Form submitted successfully", { name, email, password });

    setEmail("");
    setPassword("");
    if (currstate === "sign up") setName("");
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currstate}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currstate === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              placeholder="your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <input
            type="email"
            placeholder="your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit">
          {currstate === "sign up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use and Privacy Policy.</p>
        </div>
        {currstate === "Login" ? (
          <p>
            {" "}
            create a new account?{" "}
            <span onClick={() => setcurrstate("sign up")}>click here.</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setcurrstate("Login")}>Login.</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
