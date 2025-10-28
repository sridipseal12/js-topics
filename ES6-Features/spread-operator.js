const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]

const person = { name: "Sridip" };
const newPerson = { ...person, age: 22 };
console.log(newPerson);
