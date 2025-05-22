import "./App.css";
import CORE_DATA from "./assets/data";

function App() {
  return (
    <>
      <h1>Data Display</h1>
      <ul>
        {CORE_DATA.map((item) => (
          <li key={item.id}>
            {item.name} - {item.age} years old
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
