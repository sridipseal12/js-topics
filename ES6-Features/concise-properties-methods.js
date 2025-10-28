const firstName = "Sridip";
const lastName = "Seal";

const user = {
  firstName,
  lastName,
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(user.getFullName());
