import * as Comlink from "comlink"

const obj = {
  counter: 0,
  inc() {
    this.counter++;
  },
};

Comlink.expose(obj);

// let tick = 0

// onmessage=function(e) {
// 	console.log("onmessage test");
// 	console.log(e.data);
// 	postMessage(`tick:${tick++}`)
// }

