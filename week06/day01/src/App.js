import "./App.css";
import TextView from "./components/TextView";
import ButtonRow from "./components/ButtonRow";
import GenreForm from "./components/GenreForm";
import { selectBooks, selectGenres } from "./store/books/selectors";
import { useSelector, useDispatch } from "react-redux";
import { deleteGenre, toggleRead } from "./store/books/slice";
import BookForm from "./components/BookForm";
// import { lowerCaseString, getLength } from "./examples/library";
// import cow from "./examples/library";

function App() {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  return (
    <div className="App">
      <TextView />
      <ButtonRow />
      {/* <div>
        {genres.map((genre) => (
          <>
            <p>- {genre}</p>
            <button onClick={() => dispatch(deleteGenre(genre))}>x</button>
          </>
        ))}
      </div> */}

      <GenreForm />
      <h3>-------------------</h3>
      <BookForm />
      <h3>-------------------</h3>
      <div>
        {books.map((book) => (
          <>
            <p>
              {book.title} - {book.genre} - {book.read ? "Read" : "Unread"}{" "}
            </p>
            <button onClick={() => dispatch(toggleRead(book.title))}>📖</button>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
