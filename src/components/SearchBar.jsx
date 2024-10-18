import React, { useState, useEffect } from "react";
import { fetchAllBooks } from "../api";
import "../index.css";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getBookInfo() {
      const bookinfo = await fetchAllBooks();
      setBooks(bookinfo);
    }
    getBookInfo();
  }, []);

  const filterBooks = (searchTerm) => {
    if (!searchTerm) {
      return [];
    }
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredBooks = filterBooks(search);

  return (
    <>
      <h1>Search for a book!</h1>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredBooks.length > 0
          ? filteredBooks.map((book) => (
              <li key={book.id}>
                <h1>Title: {book.title}</h1>
                <img
                  className="bookimg"
                  src={book.coverimage}
                  alt={book.title}
                />
                <h3>author: {book.author}</h3>
              </li>
            ))
          : ""}
      </ul>
    </>
  );
}
