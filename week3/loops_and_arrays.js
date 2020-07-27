var movieGoers = [
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

function tyr (movieGoers){
    for (i = 0; i < movieGoers.length; i++){
        movieGoers[i].age >= 18 ? console.log("is old enough") : console.log("is not old enough");
    }
}
function freya (movieGoers){
    for (i = 0; i < movieGoers.length; i++){
        movieGoers[i].age >= 18 ? console.log(`${movieGoers[i].name} is old enough to see Mad Max`) : console.log(`${movieGoers[i].name} is not old enough to see Mad Max`);
    }
}
function njord (movieGoers){
    for (i = 0; i < movieGoers.length; i++){
        if (movieGoers[i].gender === "male" && movieGoers[i].age >= 18){
            console.log (`${movieGoers[i].name} is old enough to see Mad Max let him in`)
        } else if (movieGoers[i].gender === "female" && movieGoers[i].age >= 18){
        console.log (`${movieGoers[i].name} is old enough to see Mad Max let her in`)
        } else if (movieGoers[i].gender === "male" && movieGoers[i].age < 18){
        console.log (`${movieGoers[i].name} is not old enough to see Mad Max do not  let him in`)
        } else {
            console.log (`${movieGoers[i].name} is not old enough to see Mad Max do not let her in`)
        }
    }
}
console.log(tyr (movieGoers))
console.log(freya (movieGoers))
console.log(njord (movieGoers))



for (var i = 0; i < 101; i++){
    console.log(([i] % 2 !=0) ? [i] + " " + "odd" : [i] + " " + "even");
} 