const name = "Sridip";
const age = 22;

// Old way
const person1 = { name: name, age: age };

// ES6 shorthand
const person2 = { name, age };

console.log(person1);
console.log(person2);   // Both will log: { name: 'Sridip', age: 22 }
