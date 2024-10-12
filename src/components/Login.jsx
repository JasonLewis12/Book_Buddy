/* TODO - add your code to create a functional React component that renders a login form */
import React from "react";
import { LoginUser } from "./auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login({ setToken, token }) {
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
      <form onSubmit={fetchUser}>
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password"></label>
        <input
          type="text"
          id="password"
          name="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
