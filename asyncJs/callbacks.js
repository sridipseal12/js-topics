// not desirable for async chaining, leads to callback hell

console.log("Start");

function fetchData(callback) {
  setTimeout(() => {
    console.log("Fetching data...");
    callback("Data received!");
  }, 2000); // simulate 2 sec delay
}

fetchData((message) => {
  console.log(message);
});

console.log("End");
