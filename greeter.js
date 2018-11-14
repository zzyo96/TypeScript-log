// eg1***************
// function greeter(person: string) {
//   return "Hello, " + person;
// }
// let user = undefined;
// console.log(greeter(user))
// eg2**********************
// interface Person {
//   firstName: string;
//   lastName: string;
// }
// function greeter(person: Person) {
//   return "Hello, " + person.firstName + " " + person.lastName 
// }
// let user = { firstName: "Jane", lastName: "User" };
// let a = { firstName: "jane"} //报错 没有完全符合Person
// console.log(greeter(user))
// console.log(greeter(a))
// eg3 *******************
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
