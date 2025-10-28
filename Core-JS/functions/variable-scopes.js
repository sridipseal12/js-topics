let globalVar = "I’m global";

function showScope() {
  let localVar = "I’m local";
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible here only
}

showScope();
// console.log(localVar); // ❌ Error: not defined
