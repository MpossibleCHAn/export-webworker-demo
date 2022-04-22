let tick = 0

onmessage=function(e) {
	console.log("onmessage test");
	console.log(e.data);
	postMessage(`tick:${tick++}`)
}
