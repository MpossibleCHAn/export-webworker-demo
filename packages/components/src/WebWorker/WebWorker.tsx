import * as React from "react";
import * as Comlink from "comlink";

export interface WebWorkerProps {
  AppWorker: new () => Worker;
}

export interface ObjPorps {
  counter: number;
  inc: () => number;
}

export const WebWorker = (props: WebWorkerProps) => {
  const { AppWorker } = props;
  React.useEffect(() => {
    const worker = new AppWorker();
    const obj = Comlink.wrap<ObjPorps>(worker);
    async function effect() {
      console.log(`Counter: ${await obj.counter}`);
      await obj.inc();
      console.log(`Counter: ${await obj.counter}`);
    }
    effect();
  }, []);

  // React.useEffect(() => {
  //   const worker = new AppWorker()
  //   worker.postMessage("hello world");
  //   worker.onmessage = (e) => {
  //     console.log(e);
  //   };
  // }, []);

  return <div>WebWorker</div>;
};
