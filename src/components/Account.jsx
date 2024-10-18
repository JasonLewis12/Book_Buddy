import React, { useState, useEffect } from "react";
import { getUserInfo } from "./auth";

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
        console.log(user);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };
    login();
  }, []);
  console.log(books);
  return (
    <>
      <br />
      <br />
      <h1>Welcome back, {firstname}</h1>
      <p>Your email is: {email}</p>
      <br />
      <h2>Your checked-out books:</h2>
      <ul>
        {books.map((books) => {
          <li key={books.id}>
            <h1>{books.title}</h1>
            <img
              src={books.coverimage}
              className="bookimg"
              alt={books.title}
            ></img>
            <h3>{books.author}</h3>
          </li>;
        })}
      </ul>
    </>
  );
}
