function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}   // saves the variable 'count' in closure

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3