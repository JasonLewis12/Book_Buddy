import react from "react";
import { checkoutBook } from "../api";
import { Link } from "react-router-dom";
export default function BookCard({ bookList, token }) {
  async function handleClick() {
    if (bookList.available === true) {
      const checkout = await checkoutBook(bookList.id, token, false);
      return checkout;
    }
  }
  return (
    <div>
      <h1>{bookList.title}</h1>
      <img
        src={bookList.coverimage}
        className="bookimg"
        alt={bookList.title}
      ></img>
      <h3>{bookList.author}</h3>
      {bookList.available ? (
        token ? (
          <button onClick={handleClick}>Checkout this book</button>
        ) : (
          <Link to={"/Login"}>
            <p>Sign up or login to checkout a book!</p>
          </Link>
        )
      ) : (
        <p>This book is currently unavailable.</p>
      )}
      {!token && (
        <Link to={"/Login"}>
          <p>Sign up or login to checkout a book!</p>
        </Link>
      )}
    </div>
  );
}
