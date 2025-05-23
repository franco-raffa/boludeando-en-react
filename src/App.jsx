import "./App.css";
import CORE_DATA from "./assets/data";

function App() {
  return (
    <>
      <h1>Data Display</h1>
      <div className="container">
        {CORE_DATA.map((item) => (
          <div className="item" key={item.id}>
            <div>
              <h2>{item.name}</h2>
              <p>Age: {item.age}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
