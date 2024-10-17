/* TODO - add your code to create a functional React component that renders a registration form */
import React from "react";
import { useState } from "react";
import { RegisterUser } from "./auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./form.css";

export default function Register({ setToken }) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate("");

  async function handleSubmit(e) {
    e.preventDefault();
    const newUser = await RegisterUser(firstname, lastname, email, password);
    setToken(newUser.token);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    nav("/");
  }
  return (
    <>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Register!</h1>
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            id="firstname"
            name="firstName"
            value={firstname}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={lastname}
            required
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="current-password"
            id="password"
            name="password"
            value={password}
            required
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input className="submit" type="submit" />
          <h3> Already have an account?</h3>
          <Link to={"/login"}>Login!</Link>
        </form>
      </div>
    </>
  );
}
