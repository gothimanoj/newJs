 
  
// function Admin(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// const myName =  new Admin("John", "Doe", 50, "blue");
// const myNikeName =  new Admin("Sally", "Bally", 48, "green");

// console.log("My Name is " + myName.lastName + "\n" + myNikeName.age) 


 
function exp(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "Hindi"
 
}

exp.nationality = "English";// undifen to nationaly

const myFather = new exp("John", "Doe", 50, "blue");
const myMother = new exp("Sally", "Rally", 48, "green");

 console.log("The nationality of my father is " + myFather.nationality) 
 


  