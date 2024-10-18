import React, { useState, useEffect } from "react";
import { getUserInfo } from "./auth";
import { returnBook } from "../api";

export default function AccountPage({ token }) {
  const [firstname, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const login = async () => {
      try {
        const user = await getUserInfo(token);
        setFirstName(user.firstname);
        setEmail(user.email);
        setBooks(user.books);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };
    login();
  }, []);

  console.log(books);

  async function handleReturnBook(booksid) {
    try {
      const returninfo = await returnBook(booksid, token);
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== booksid));
      return returninfo;
    } catch (error) {
      console.error("Error returning book:", error);
    }
  }

  return (
    <>
      <br />
      <br />
      <h1>Welcome back, {firstname}</h1>
      <p>Your email is: {email}</p>
      <br />
      <h2>Your checked-out books:</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h1>{book.title}</h1>
            <img src={book.coverimage} className="bookimg" alt={book.title} />
            <h3>{book.author}</h3>
            {console.log(book.id)}
            <button onClick={() => handleReturnBook(book.id)}>
              return book
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
