import "./App.css";
import NavigationBar from "./NavigationBar";
import FruitCard from "./FruitCard";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <p>Welcome to fruits.com</p>
      <FruitCard
        name="Banana"
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"
        description="Sweet yellow fruit"
      />
      <FruitCard
        name="Peaches"
        imgSrc="https://static.libertyprim.com/files/familles/peche-large.jpg?1574630286"
        description="Sweet pink fruit"
      />
      <FruitCard
        name="Pineapples"
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/7/74/%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg"
        description="Don't put it on pizza"
      />
    </div>
  );
}

export default App;
