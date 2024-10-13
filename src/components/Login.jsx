/* TODO - add your code to create a functional React component that renders a login form */
import React from "react";
import { LoginUser } from "./auth";
import { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Register from "./Register";
import "./form.css";
export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate("");
  async function fetchUser(e) {
    e.preventDefault();

    const user = await LoginUser(email, password);
    setToken(user.token);
    setEmail("");
    setPassword("");
    nav("/book");
  }
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <form className="form" onSubmit={fetchUser}>
        <span className="input-span">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </span>
        <br />
        <span className="input-span">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </span>
        <br />
        <input className="submit" type="submit" />
      </form>
      <Routes>
        <Route path="/Register/*" element={<Register setToken={setToken} />} />
      </Routes>
      <h3> don't have an account? Register!</h3>
      <Link to={"/Register/*"}>sign up!</Link>
    </>
  );
}
