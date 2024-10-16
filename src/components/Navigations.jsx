/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function NavBar({ token }) {
  const nav = useNavigate();
  function handleClick(e) {
    localStorage.removeItem("token");
    console.log("test");
    nav("/login");
  }
  return (
    <>
      <section>
        <nav className="nav-bar">
          <Link className="nav-items" to={"/"}>
            Home
          </Link>
          {token ? (
            <Link className="nav-items" to={"/account"}>
              account
            </Link>
          ) : (
            <Link className="nav-items" to={"/Login"}>
              Login
            </Link>
          )}
          {token ? (
            <p className="nav-items" onClick={handleClick}>
              Logout
            </p>
          ) : (
            ""
          )}
        </nav>
      </section>
    </>
  );
}
