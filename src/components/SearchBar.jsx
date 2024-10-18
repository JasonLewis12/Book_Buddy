import React, { useState, useEffect } from "react";
import { fetchAllBooks, checkoutBook } from "../api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function SearchBar({ token }) {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const move = useNavigate();

  useEffect(() => {
    const getBookInfo = async () => {
      const bookInfo = await fetchAllBooks();
      setBooks(bookInfo);
    };
    getBookInfo();
  }, []);

  const filterBooks = (searchTerm) => {
    if (!searchTerm) return [];
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleCheckout = async (bookId) => {
    const checkout = await checkoutBook(bookId, token, false);
    console.log(checkout);
    move("/account");
    return checkout;
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

      <div className="card-container">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div className="card" key={book.id}>
              <h1>{book.title}</h1>
              <img src={book.coverimage} className="bookimg" alt={book.title} />
              <h3>{book.author}</h3>
              {book.available ? (
                token ? (
                  <button
                    className="buttion"
                    onClick={() => handleCheckout(book.id)}
                  >
                    Checkout this book
                  </button>
                ) : (
                  <Link to="/Login">
                    <p>Sign up or login to checkout a book!</p>
                  </Link>
                )
              ) : (
                <p>This book is currently unavailable.</p>
              )}
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </>
  );
}
