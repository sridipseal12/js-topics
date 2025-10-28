const jsonString = '{"name": "Alice", "age": 25, "city": "New York"}';

// Convert JSON string into JS object
const user = JSON.parse(jsonString);

console.log(user.name);  // "Alice"
console.log(user.age);   // 25
