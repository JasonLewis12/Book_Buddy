/* TODO - add your code to create a functional React component that displays all of the available 6books6 in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useEffect, useState } from "react";
import { fetchAllBooks } from "../api";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function getAllBooks() {
      const allBooks = await fetchAllBooks();
      console.log(allBooks);
      setBooks(allBooks);
    }
    getAllBooks();
  }, []);
  return (
    <>
      {books.map((book) => {
        return <div>{book.title}</div>;
      })}
    </>
  );
};
export default Books;
