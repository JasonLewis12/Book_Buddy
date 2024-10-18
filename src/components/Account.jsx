/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import React from "react";
import { useState } from "react";
import { getUserInfo } from "./auth";

export default function AccountPage({ token }) {
  const [firstname, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [books, setBooks] = useState("");

  const login = async () => {
    const user = await getUserInfo(token);
    setFirstName(user.firstname);
    setEmail(user.email);
    setBooks(user.books);
    return user;
  };
  login();
  return (
    <>
      <br />
      <br />
      <h1>welcome back {firstname}</h1>
      <p>your email is: {email}</p>
      <br />
      <h2>your check out books:</h2>
      {books}
    </>
  );
}
