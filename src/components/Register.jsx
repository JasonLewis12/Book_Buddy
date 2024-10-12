/* TODO - add your code to create a functional React component that renders a registration form */
import React from "react";
import { useState } from "react";
import { RegisterUser } from "./auth";

export default function Register({ setToken, token }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const newUser = await RegisterUser(firstName, lastName, email, password);
    setToken(newUser.token);
    console.log(token);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }
  return (
    <>
      <h1>Register!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          required
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          value={password}
          required
          minLength={8}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
