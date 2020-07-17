/* if(5 > 3){
    console.log("is greater than")
} */

console.log((5 > 3) ? "is greater then":"is less then");

var loc = 3

/* if(loc === 3){
    console.log("is the length")
} */

console.log((loc === 3) ? "is the length":"is not the lenght");

var cat = 3;
var dog = 5;

/* if(cat === dog){
    console.log("the same")
} else {
    console.log("not the same")
} */

 console.log((cat === dog) ? "the same":"not the same");
 
var person = {
    firstName: "Bobby",
    age: 12
};

/* if(person.age >= 18){
    console.log(`${person.firstName} is allowed to go to the movies`)
} else {
    console.log(`${person.firstName} is not old enough to go to the movies`)
} */

console.log((person.age >= 18) ? `${person.firstName} is allowed to go to the movies`:`${person.firstName} is not allowed to go to the movies`);

/* if(person.firstName.charAt(0) === ("B" || "b")) {
    console.log(`${person.firstName} is allowed to go to the movie`)
} */

console.log((person.firstName.charAt(0) === ("B"||"b")) ? `${person.firstName} is allowed to go to the movies`:`${person.firstName} is not allowed to go to the movies`);

/* if(person.firstName.charAt(0) === ("B" || "b") && person.age >= 18){
    console.log(`${person.firstName} is allowed to go to the movie`)
} else {
    console.log(`${person.firstName} first initial is not B or is not old enough to attend the movie`)
} */

console.log((person.firstName.charAt(0) === ("B"||"b") && person.age >= 18) ? "is allowed to go to the movie":"first initial is not b or is not old enough to go to the movie");

if (1 === "1") {
    console.log("strict")
} else if (1 == "1") { 
    console.log("abstract")
} else {
    console.log("not equal at all")
}

/* if ((1 <= 2) && 2 === 4) {
    console.log ("yes")
} */

console.log(((1 >= 2) && 2 === 4) ? "yes":"no");

/* if (typeof "dog" === "string"){
    console.log("is a string")
} */

console.log((typeof "dog" === "string")? "is a string":"is not a string");

/* if(typeof "true" === "boolean"){
    console.log("is a boolean")
} */

console.log((typeof "true" === "boolean")? "is a boolean":"is not a boolean");

/* if(typeof person === 'defined'){
    console.log("it is defined")
} */

console.log((typeof person === "defined")?"it is defined":"it is not defined")

var s = 13;
if(s >= 12){
    console.log("s is greater than 12")
} else {
    console.log("s is not greater then 12")
}
var myNum = 2;
console.log((myNum % 2 === 0)?"is even":"is odd");




    

    