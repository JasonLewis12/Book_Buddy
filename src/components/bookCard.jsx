import react from "react";

export default function BookCard({ bookList }) {
  console.log(bookList);
  return (
    <div>
      <h1>{bookList.title}</h1>
      <img
        src={bookList.coverimage}
        className="bookimg"
        alt={bookList.title}
      ></img>
      <h3>{bookList.author}</h3>
    </div>
  );
}
