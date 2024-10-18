import React from "react";
import { useState } from "react";
import { fetchAllBooks } from "../api";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [book, setBook] = useState([]);

  async function getBooks() {
    const bookInfo = await fetchAllBooks();
    console.log(bookInfo);
    setBook(bookInfo);
    return bookInfo;
  }
  getBooks();
  const filter = (search) => {
    if (!search) {
      <h1>No mathcing books</h1>;
      return;
    } else {
      return search.filter();
    }
  };
  return (
    <>
      <br />
      <br />
      <h1>Search for a book!</h1>
      <label htmlFor="search">search</label>
      <input
        type="text"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}
