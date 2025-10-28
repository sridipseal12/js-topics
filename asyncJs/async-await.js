// uses async/await for cleaner asynchronous code
console.log("Start");

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Async/Await: Data received!"), 2000);
  });
}

async function displayData() {
  console.log("Fetching...");
  const data = await getData(); // waits for getData() to finish
  console.log(data);
}

displayData();
console.log("End");
