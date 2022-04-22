import * as React from "react";
import "./App.css";
// import { WebWorker } from "components";
// import Worker from "components/dist/WebWorker/WebWorker.worker?worker";
import AppWorker from "./worker?worker";

function App() {
  // can't run
  // React.useEffect(() => {
  //   const worker = new Worker();
  //   worker.postMessage("hello world");
  //   worker.onmessage = (e) => {
  //     console.log(e);
  //   };
  // }, []);

  // can
  React.useEffect(() => {
    const worker = new AppWorker();
    worker.postMessage("hello world");
    worker.onmessage = (e) => {
      console.log(e);
    };
  }, []);

  return <div className="App">app{/* <WebWorker worker={workerRef} /> */}</div>;
}

export default App;
