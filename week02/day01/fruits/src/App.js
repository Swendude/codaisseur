import "./App.css";
import BananaCard from "./components/BananaCard";

const App = () => {
  return (
    <div className="App">
      <BananaCard
        title="banana"
        img="https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"
        price={1}
        descr="yellow, long"
        sale={false}
      />
      <BananaCard
        title="pineapple"
        price={5}
        descr="green, spikey"
        img="https://img.freepik.com/free-photo/pineapple-juicy-mellow-isolated-white_179666-678.jpg?w=2000"
        sale={true}
      />
      <BananaCard
        title="coconut"
        price={2}
        descr="hairy, hard"
        img="https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"
        sale={true}
      />
    </div>
  );
};

export default App;
