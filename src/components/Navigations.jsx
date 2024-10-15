/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import React from "react";
import "../index.css";
import { Route, Routes, Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Books from "./Books";
import AccountPage from "./Account";
export default function NavBar({ setToken, token }) {
  function handleClick() {}

  return (
    <>
      <section>
        <nav className="nav-bar">
          {token ? (
            <Link className="nav-items " to={"/account"}>
              account
            </Link>
          ) : (
            <Link className="nav-items " to={"/Login"}>
              Login
            </Link>
          )}
        </nav>
      </section>
    </>
  );
}
