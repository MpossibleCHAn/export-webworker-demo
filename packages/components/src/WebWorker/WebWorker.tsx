import * as React from "react";

export interface WebWorkerProps {
  worker: Worker;
}

export const WebWorker = (props: WebWorkerProps) => {
  React.useEffect(() => {
    props.worker.postMessage("hello world");
    props.worker.onmessage = (e) => {
      console.log(e);
    };
  }, []);

  return <div>WebWorker</div>;
};
