/* TODO - add your code to create a functional React component that renders a login form */
import React from "react";
import { useState } from "react";
export default function register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {}

  return (
    <>
      <h1>Register!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName"></label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="lastName"></label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          required
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password"></label>
        <input
          type="text"
          name="password"
          value={password}
          required
          minLength={8}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </>
  );
}
