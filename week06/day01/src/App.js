import "./App.css";
import TextView from "./components/TextView";
import ButtonRow from "./components/ButtonRow";
import GenreForm from "./components/GenreForm";
import { selectBooks, selectGenres } from "./store/books/selectors";
import { useSelector, useDispatch } from "react-redux";
import { deleteGenre, toggleRead } from "./store/books/slice";
import BookForm from "./components/BookForm";
import { getPokemon } from "./store/pokemons/thunks";
import {
  selectPizzas,
  selectPizza,
  selectIsThereHawaii
} from "./store/pizzas/selectors";
import { useEffect } from "react";
import { selectPokemons } from "./store/pokemons/selectors";
// import { lowerCaseString, getLength } from "./examples/library";
// import cow from "./examples/library";

function App() {
  const dispatch = useDispatch();
  // const books = useSelector(selectBooks);
  // const pizzas = useSelector(selectPizzas);
  // const pizzaById = useSelector(selectPizza(19));
  // const isThereHawaii = useSelector(selectIsThereHawaii);
  const pokemons = useSelector(selectPokemons);
  useEffect(() => {
    dispatch(getPokemon);
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Pokemons!</h1>
      {pokemons ? (
        pokemons.map((pokemon) => <p>{pokemon.name}</p>)
      ) : (
        <p>Loading...</p>
      )}
      {/* <button onClick={() => }>Get pokemon</button> */}
      {/* {pizzas.map((pizza) => (
        <p>
          {pizza.id} - {pizza.name}
        </p>
      ))}
      <h3>One Pizza:</h3>
      <p>
        {pizzaById.id} - {pizzaById.name}
      </p>
      {isThereHawaii ? <p>THERE IS HAWAII</p> : <></>} */}
      {/* <TextView />
      <ButtonRow /> */}
      {/* <div>
        {genres.map((genre) => (
          <>
            <p>- {genre}</p>
            <button onClick={() => dispatch(deleteGenre(genre))}>x</button>
          </>
        ))}
      </div> */}

      {/* <GenreForm />
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
      </div> */}
    </div>
  );
}

export default App;
