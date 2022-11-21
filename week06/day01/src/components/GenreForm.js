import { useState } from "react";
import { addGenre } from "../store/books/slice";
import { useDispatch } from "react-redux";

const GenreForm = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      ></input>
      <button
        onClick={() => {
          dispatch(addGenre(input));
          setInput("");
        }}
      >
        Add to genres
      </button>
    </div>
  );
};

export default GenreForm;
