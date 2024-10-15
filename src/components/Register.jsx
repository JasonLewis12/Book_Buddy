/* TODO - add your code to create a functional React component that renders a registration form */
import React from "react";
import { useState } from "react";
import { RegisterUser } from "./auth";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import AccountPage from "./Account";
import Login from "./Login";
import Books from "./Books";
import "./form.css";

export default function Register({ setToken, token }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate("");

  async function handleSubmit(e) {
    e.preventDefault();
    const newUser = await RegisterUser(firstName, lastName, email, password);
    setToken(newUser.token);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    nav("/book");
  }
  return (
    <>
      <br />
      <br />
      <h1>Register!</h1>
      <form className="form" onSubmit={handleSubmit}>
        <span className="input-span">
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </span>
        <br />
        <span className="input-span">
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </span>
        <br />
        <span className="input-span">
          <label htmlFor="email">Email:</label>
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
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            required
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
          />
        </span>
        <br />
        <input type="submit" />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/account" element={<AccountPage token={token} />} />
        </Routes>
        <h3> Already have an account?</h3>
        <Link to={"/login"}>Login!</Link>
      </form>
    </>
  );
}
