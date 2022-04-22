import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { WebWorker } from "components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <WebWorker />
    </div>
  );
}

export default App;
