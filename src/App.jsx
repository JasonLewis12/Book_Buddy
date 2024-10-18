import { useState } from "react";
import { useEffect } from "react";
import bookLogo from "./assets/books.png";
import AccountPage from "./components/Account";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navigations";
import Register from "./components/Register";
import Login from "./components/Login";
import Books from "./components/Books";
import SearchBar from "./components/SearchBar";

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
      <br />
      <br />
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/account" element={<AccountPage token={token} />} />
        <Route path="/search" element={<SearchBar />} />
      </Routes>
    </>
  );
}

export default App;
