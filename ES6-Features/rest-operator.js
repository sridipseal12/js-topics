const numbers = [10, 20, 30, 40, 50];

// Destructure first two, gather the rest
const [first, second, ...rest] = numbers;

console.log(first);  // 10
console.log(second); // 20
console.log(rest);   // [30, 40, 50]
