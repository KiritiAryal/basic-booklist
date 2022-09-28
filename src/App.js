// import Book from "./Book";
import { useState } from "react";
import Book from "./Book";
import books from "./common/books";

function App() {
  const [cover, setCover] = useState(books);
  const deleteBook = (id) => {
    setCover((prevState) => {
      let newBooks = prevState.filter((book) => book.id !== id);
      console.log(newBooks);
      return newBooks;
    });
  };
  return (
    <div className="App">
      {books.map((book) => {
        return (
          <>
            <Book {...book} />
            <div key={book.id}>
              <button type="button" onClick={() => deleteBook(book.id)}>
                Delete
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default App;
