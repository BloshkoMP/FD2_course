import { Data } from "./data.js";

const data = new Data();

data.getUsefulContents("https://jsonplaceholder.typicode.com/todos/1", function(data) {
	console.log(data);
});
