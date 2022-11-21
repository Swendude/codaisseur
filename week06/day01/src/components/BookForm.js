import { useState } from "react";
import { selectGenres } from "../store/books/selectors";
import { useSelector, useDispatch } from "react-redux";
import { addBook } from "../store/books/slice";
const BookForm = () => {
  const dispatch = useDispatch();
  const genres = useSelector(selectGenres);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState(null);
  console.log(genre);
  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value={null}>No genre</option>
        {genres.map((genre) => {
          return <option value={genre}>{genre}</option>;
        })}
      </select>
      <button
        onClick={() =>
          dispatch(addBook({ title: title, genre: genre, read: false }))
        }
      >
        Add book
      </button>
    </div>
  );
};

export default BookForm;
