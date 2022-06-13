// // creating objects
const person1 = new Person("manoj",25);
const person2 = new Person("prakash",27);
console.log(person1.name, person1.age,"\n",person2.name, person2.age);
hoisting
sum(5,2)
function sum(a,b)
{
    add=a+b
    console.log(add)
}
console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num; // Declaration
num = 6; // Initialization
console.log(num); // Returns 6 after the line with initialization is executed.
console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num = 6; // Initialization and declaration.
console.log(num); // Returns 6 after the line with initialization is executed.
a = 'Cran'; // Initialize a
b = 'berry'; // Initialize b
console.log(a + " " + b); // 'Cranberry'
function
 myFunction(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
  }
pretty = () => {
    return "Hello Dear!";
  }
  console.log( pretty())