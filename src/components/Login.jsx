/* TODO - add your code to create a functional React component that renders a login form */
import React from "react";
import { LoginUser } from "./auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";
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
        <input class="submit" type="submit" />
      </form>
    </>
  );
}
