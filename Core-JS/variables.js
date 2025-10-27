var a = 5;{
    var a = 6;
}
console.log(a);

let b = 5;{                     
    let b = 6;  // declared but value is never read
}
console.log(b);

const c = 5;
const c = 6;  // Identifier 'c' has already been declared
console.log(c);