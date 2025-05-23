import "./App.css";
import CORE_DATA from "./assets/data";
import ItemCard from "./components/ItemCard";

function App() {
  return (
    <>
      <h1>Data Display</h1>
      <div className="container">
        {CORE_DATA.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </>
  );
}

export default App;
