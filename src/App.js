import "./styles.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Hello CodeSandbox</h1>
      <Home />
    </div>
  );
}

export default App;