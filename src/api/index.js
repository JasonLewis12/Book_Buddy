const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";
// Fetch All Books from API
export const fetchAllBooks = async () => {
  try {
    const response = await fetch(`${API_URL}/books`);
    const result = await response.json();
    return result.books;
  } catch (error) {
    console.error(err);
  }
};
// Fetch Single Books from API
export const fetchSingleBook = async (bookId) => {
  try {
    const response = await fetch(`${API_URL}/books/${bookId}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

// Update books from API
export const checkoutBook = async (bookId, token, boolean) => {
  try {
    const response = await fetch(`${API_URL}/books/${bookId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        available: `${boolean}`,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export async function returnBook(bookId, token) {
  try {
    const response = await fetch(`${API_URL}/reservations/${bookId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log(result);
    console.log(`${API_URL}/books/${bookId}`);
    return result;
  } catch (error) {
    console.error("there was on error updating books", error);
  }
}
