var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "sam",
        age: 30,
        gender: "male"
    }, {
        name: "suzy",
        age: 4,
        gender: "female"
    }
]

function age (peopleWhoWantToSeeMadMaxFuryRoad){
    for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 ? console.log("is old enough") : console.log("is not old enough");
    }
}
function ageAndName (peopleWhoWantToSeeMadMaxFuryRoad){
    for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 ? console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is old enough to see Mad Max Fury Road`) : console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is not old enough to see Mad Max Fury Road`);
    }
}
function ageAndNameAndGender (peopleWhoWantToSeeMadMaxFuryRoad){
    for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ?
         console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is old enough to see Mad Max Fury Road let him in`) : (peopleWhoWantToSeeMadMaxFuryRoad[i].age >=18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") ?
         console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is old enough to see Mad Max Fury Road let her in`) : (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") ? 
         console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is not old enough to see Mad Max Fury Road do NOT let him in`) : console.log (`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is not old enough to see Mad Max Fury Road do NOT let her in`)
    }
}
console.log (age(peopleWhoWantToSeeMadMaxFuryRoad))
console.log(ageAndName(peopleWhoWantToSeeMadMaxFuryRoad))
console.log(ageAndNameAndGender(peopleWhoWantToSeeMadMaxFuryRoad))



for (var i = 0; i < 101; i++){
    console.log(([i] % 2 !=0) ? [i] + " " + "odd" : [i] + " " + "even");
} 