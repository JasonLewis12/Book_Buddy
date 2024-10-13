/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import React from "react";
import "./index.css";
export default function NavBar() {
  return (
    <>
      <section>
        <nav class="nav-bar">
          <a class="nav-items" href="index.html">
            Home
          </a>
          <a class="nav-items" href="about.html">
            About
          </a>
          <a class="nav-items" href="portfolio.html">
            Portfolio
          </a>
          <a class="nav-items" href="/form.html">
            Contact
          </a>
        </nav>
      </section>
    </>
  );
}
