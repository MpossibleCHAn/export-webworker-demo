import * as React from "react";
import "./App.css";
import { WebWorker } from "components";
import MyWorker from "components/worker?worker";

function App() {
  // const worker = React.useMemo(() => new MyWorker(), [MyWorker]);
  return (
    <div className="App">
      <WebWorker AppWorker={MyWorker} />
    </div>
  );
}

export default App;
