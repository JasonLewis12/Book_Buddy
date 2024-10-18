/* TODO - add your code to create a functional React component that displays all of the available 6books6 in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useEffect, useState } from "react";
import { fetchAllBooks } from "../api";
import BookCard from "./bookCard";

const Books = ({ token }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function getAllBooks() {
      const allBooks = await fetchAllBooks();
      setBooks(allBooks);
    }
    getAllBooks();
  }, []);
  return (
    <>
      {books.map((book) => {
        return <BookCard key={book.Id} bookList={book} token={token} />;
      })}
    </>
  );
};
export default Books;
