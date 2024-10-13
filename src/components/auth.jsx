import { json } from "react-router-dom";

const BASE_API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com";

export async function RegisterUser(firstName, lastName, email, password) {
  try {
    const reponse = await fetch(`${BASE_API}/api/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    });
    const result = await reponse.json();

    return result;
  } catch (error) {
    console.error("POST/there was an error when creating a user"), error;
  }
}

export async function LoginUser(email, password) {
  try {
    const reponse = await fetch(`${BASE_API}/api/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const result = await reponse.json();

    return result;
  } catch (error) {
    console.error("there was an error in your login request", error);
  }
}
