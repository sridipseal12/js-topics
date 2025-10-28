// uses .then-.catch (promises under the hood)

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json()) // convert to JS object
  .then((data) => console.log("Users:", data))
  .catch((error) => console.error("Error:", error));
