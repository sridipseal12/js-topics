// future outcome of resolve/reject (solved callback hell)
console.log("Start");

const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true; // change to false to test reject
    if (success) resolve("Promise resolved: Data received!");
    else reject("Promise rejected: Error fetching data!");
  }, 2000);
});

fetchData
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

console.log("End");
