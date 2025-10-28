function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(`Hi, I'm ${this.name}`);
};

let p1 = new Person("Alice");
p1.sayHello(); // Hi, I'm Alice
