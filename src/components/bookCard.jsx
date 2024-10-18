import react from "react";
import { checkoutBook } from "../api";
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
        <button onClick={() => handleClick()}>Checkout this book</button>
      ) : (
        <h3>Not available please check back later</h3>
      )}
    </div>
  );
}
