const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]

nums.forEach(n => console.log(n)); // Logs each number

const found = nums.find(n => n > 1);
console.log(found); // 2

const filtered = nums.filter(n => n > 1);
console.log(filtered); // [2, 3]

const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum); // 6

console.log(nums.every(n => n > 2)); // false
console.log(nums.some(n => n > 2));  // true
