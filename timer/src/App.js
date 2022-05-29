
import "./App.css";
import Timer from "./components/timer";


function App() {
  return (
    <div className="App">
      <Timer initial={0} final={100}/>
    </div>
  );
}

export default App;