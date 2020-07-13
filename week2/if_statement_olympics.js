if(5 > 3){
    console.log("is greater than")
}

var loc = 3;

if(loc === 3){
    console.log("is the length")
}

var cat = 3;
var dog = 5;

if("cat" === "dog"){
    console.log("the same")
} else {
    console.log("not the same")
}

var person = {
    firstName: "Bobby",
    age: 12
};

if(person.age >= 18){
    console.log(`${person.firstName} is allowed to go to the movies`)
} else {
    console.log(`${person.firstName} is not old enough to go to the movies`)
}

if(person.firstName.charAt(0) === ("B" || "b")) {
    console.log(`${person.firstName} is allowed to go to the movie`)
}

if(person.firstName.charAt(0) === ("B" || "b") && person.age >= 18){
    console.log(`${person.firstName} is allowed to go to the movie`)
} else {
    console.log(`${person.firstName} first initial is not B or is not old enough to attend the movie`)
}

if (1 === "1") {
    console.log("strict")
} else if (1 == "1") { 
    console.log("abstract")
} else {
    console.log("not equal at all")
}
if ((1 <= 2) && 2 === 4) {
    console.log ("yes")
}
if (typeof dog === "string"){
    console.log("is a string")
}

if(typeof "true" === "boolean"){
    console.log("is a boolean")
}


    

    