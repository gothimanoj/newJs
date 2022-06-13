// //object----
var a={
    fname: "john",
    lname: "doe",
    age: 30,
    favmoves :["kunfu 1 ","kunfu 2","kunfu 3"],
    address: {
        city:"Ujjain"
    },
    salary : function(){
        return 8500;
    },
    fullname: function(){
        return this.fname+ " "+this.lname
    }
}
console.log(a)
console.log(a.address.city)
console.log(a.favmoves[1])
console.log(a.salary())
console.log(a.fullname())
let school = {
	name: 'Patel School',
	location : 'ujjain',
	established : '1900',
	displayInfo : function(){
		console.log(`${school.name} was established
in ${school.established} at ${school.location}`);
	}
}
school.displayInfo();
let obj ={name:"Anand",age:22,phone:123456};
console.log(obj);
console.log(Object.keys(obj));
let obj1 ={name:"Anand",age:22,phone:123456};
 console.log(obj);
 console.log(Object.keys(obj1));
 console.log(Object.values(obj1));
 console.log(Object.entries(obj1));

 

