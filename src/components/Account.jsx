/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import React from "react";
import { getUserInfo } from "../api";
export default function AccountPage({ token }) {
  const user = getUserInfo(token);
  console.log(user);
  return (
    <>
      <br />
      <br />
      <br />
    </>
  );
}
