/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import React from "react";
import "../index.css";
import { Route, Routes, Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
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
      <Routes>
        <Route path="/book" element="placeholder" />
        <Route path="/account" element="placeholder" />
        <Route path="/Register" element={<Register setToken={setToken} />} />
        <Route path="/login/" element={<Login setToken={setToken} />} />
        {/* <Route path="" element="placeholder" /> */}
      </Routes>
    </>
  );
}
