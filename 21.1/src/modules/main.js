import addEventListener from "./buttonClick.js";
import { makeSyncDelay } from "./syncDelay.js";
import runXhr from "./xmlHttpRequest.js";
import { runSetTimeOut } from "./setTimeout.js";
import runPromice from "./promise.js";
import runFetch from "./fetch.js";
import runJQuery from "./jQuery.js";

const url = "https://jsonplaceholder.typicode.com/photos";
const url1 = "https://jsonplaceholder.typicode.com/photos/1";
const url2 = "https://jsonplaceholder.typicode.com/photos/2";
const url3 = "https://jsonplaceholder.typicode.com/photos/3";

console.log("sync code start");

makeSyncDelay("delay", 4, true);
runSetTimeOut("setTimeout", 80);
runXhr("xhr 1", url1);
runXhr("xhr 2", url2);
runXhr("xhr 2", url3);
addEventListener("btn");

runPromice("Promice");
runFetch("Fetch", url);
runJQuery("jQuery", url);
