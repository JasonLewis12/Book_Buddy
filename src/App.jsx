import { useState } from "react";
import { useEffect } from "react";
import bookLogo from "./assets/books.png";
import { Route, Routes, Link } from "react-router-dom";
import NavBar from "./components/Navigations";

import Books from "./components/Books";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);
  return (
    <>
      <NavBar token={token} setToken={setToken} />
      <Books />
      <br />
      <br />
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>

      <p>
        Complete the React components needed to allow users to browse a library
        catalog, check out books, review their account, and return books that
        they've finished reading.
      </p>

      <p>
        You may need to use the `token` in this top-level component in other
        components that need to know if a user has logged in or not.
      </p>

      <p>
        Don't forget to set up React Router to navigate between the different
        views of your single page application!
      </p>
    </>
  );
}

export default App;
