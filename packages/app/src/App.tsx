import * as React from "react";
import "./App.css";
import { WebWorker } from "components";
import Worker from "components/src/WebWorker/WebWorker.worker?worker";

function App() {
  const workerRef = new Worker();

  return (
    <div className="App">
      <WebWorker worker={workerRef} />
    </div>
  );
}

export default App;
