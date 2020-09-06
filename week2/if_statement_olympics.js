
console.log("*prelims*")
console.log(" #1 ")
/* if(5 > 3){
    console.log("is greater than")
} */

console.log((5 > 3) ? " is greater than":"is less than ");



console.log(" #2 ")

let lengthOfCat = 3

/* if(lengthOfCat === 3){
    console.log(" is the length ")
}else{
    console.log(" is not the length ")
} */

console.log((lengthOfCat === 3) ? " is the length " : " is not the lenght ");



console.log("#3")

/* if("cat" === "dog"){
    console.log("the same")
} else {
    console.log("not the same")
} */

 console.log(("cat" === "dog") ? "the same":"not the same");



 console.log("*bronze*")
 console.log("#1")
 
let person = {
    firstName: "Bobby",
    age: 12
};

/* if(person.age >= 18){
    console.log(`${person.firstName} is allowed to attend to the movies`)
} else {
    console.log(`${person.firstName} is not old enough to attend to the movies`)
} */

console.log((person.age >= 18) ? `${person.firstName} is allowed to attend to the movies`:`${person.firstName} is not allowed to attend to the movies`);



console.log("#2")

/* if(person.firstName.charAt(0) === ("B" || "b")) {
    console.log(`${person.firstName} is allowed to attend to the movie`)
} */

console.log((person.firstName.charAt(0) === ("B"||"b")) ? `${person.firstName} is allowed to attend to the movies`:`${person.firstName} is not allowed to attend to the movies`);





console.log("#3")

/* if(person.firstName.charAt(0) === ("B" || "b") && person.age >= 18){
    console.log(`${person.firstName} is allowed to attend to the movie`)
} else {
    console.log(`${person.firstName} first initial is not B or is not old enough to attend the movie`)
} */

console.log((person.firstName.charAt(0) === ("B"||"b") && person.age >= 18) ? "is allowed to attend to the movie":"first initial is not b or is not old enough to attend to the movie");




console.log("*silver*")
console.log("#1")

/* 
if (1 === "1") {
    console.log("strict")
} else if (1 == "1") { 
    console.log("abstract")
} else {
    console.log("not equal at all")
}
 */

 console.log((1 === "1") ? "strict" : (1 == "1") ? "abstract" : "not equal at all")



 console.log("#2")

/* if ((1 <= 2) && 2 === 4) {
    console.log ("yes")
} */

console.log(((1 >= 2) && 2 === 4) ? "yes":"no");

console.log("*gold*")
console.log("#1")

/* if (typeof "dog" === "string"){
    console.log("is a string")
} */

console.log((typeof "dog" === "string")? "is a string":"is not a string");

console.log("#2")

/* if(typeof "true" === "boolean"){
    console.log("is a boolean")
} */

console.log((typeof "true" === "boolean")? "is a boolean":"is not a boolean");

console.log("#3")

/* if(typeof person === 'defined'){
    console.log("it is defined")
} */

console.log((typeof person === "defined")?"it is defined":"it is not defined")

{
console.log("#4")
/* 
if("s" > 12){
    console.log("s is greater than 12")
} else {
    console.log("s is not greater than 12")
}
 */

console.log(("s" > 12) ? " s is greater than 12 " : " s is not greater than 12 ")
}

{
console.log("#5")
{
/*     
if( 13 > 12){
    console.log(" 13 is greater than 12 ")
} else {
    console.log(" 13 is not greater than 12 ")
}
 */

console.log((13 > 12) ? " 13 is greater than 12 " : " 13 is not greater than 12 ")

}
{
/* 
    if( " abcdefghijklm " > 12){
    console.log(" abcdefghijklm is greater than 12 ")
} else {
    console.log(" abcdefghijklm is not greater than 12 ")
}
 */

console.log((" abcdefghijklm " > 12) ? " abcdefghijklm is greater than 12 " : " abcdefghijklm is not greater than 12 ")
}
{
/* 
if( "j" > 12){
    console.log(" j is greater than 12 ")
} else {
    console.log(" j is not greater than 12 ")
}
 */

console.log(("j" > 12) ? " j is greater than 12 " : " j is not greater than 12 ")
}
}


console.log("#6")

let myNum = 2;
console.log((myNum % 2 === 0)?"is even":"is odd");
