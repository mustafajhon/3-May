import "./App.css";
import Hello from "./Components/home";
function App() {
  return (
    <>
      <div className="container1">
        <ul>
          <li>
            <a href="#">Hoede</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menue</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <Hello />
    </>
  );
}

export default App;
