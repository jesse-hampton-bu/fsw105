

// ES6 # 1
{
const name = "John"
const age = 101

function runForLoop(pets) {
  let petObjects = []
  for (let i = 0; i < pets.length; i++) {
    let pet = { type: pets[i] }
   let name;
    if (pets[i] === "cat") {
      name = "fluffy"
    } else {
      name = "spot"
    }
    console.log("pet name: ", name)
    pet.name =  name
    petObjects.push(pet)
  }
  console.log("man name: ", name)
  return petObjects
}

runForLoop(["cat", "dog"])
}



// ES6  # 2  rewrite this .map() using arrow functions

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(function(carrot) {
        return {type: "carrot", name: carrot}
    })
}



// ES6 # 3  rewrite this .filter() uning an arrow function:

/* const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(function(person){
        return person.friendly
    })
}
 */


// ES6 # 4  Rewrite the following funtions to be arrow functions:

/* function doMathSum(a, b) {
    return a + b
}

let produceProduct = function(a, b) {
    return a * b
}
 */



 // ES6 # 5  Write a pushString function that takes firstName, lastName, and age as parameters and returns a string like the following:
                   //Hi Kat Stark, how does it feel to be 40?

/* firstName should default to "Jane"
lastName should default to "Doe"
age should default to 100
 */



 // ES6 # 6 use template litterals to buil the string from #5







 // ES6 # 7  Use the shorthand syntax to make the following filter take up one ling. Copy and paste the array to test it.
/* const animals = [
    {
        type: "dog",
        name: "Theodore"
    },
    {
        type: "cat",
        name: "Whiskers"
    },
    {
        type: "pig",
        name: "Piglette"
    },
    {
        type: "dog",
        name: "Sparky"
    }
];

function filterForDogs(arr) {
    return arr.filter(animal => {
        if (animal.type === "dog") {
            return true
        } else {
            return false
        }
    })
}
 */




 // ES6 # 8 Using template literals, write  a function that takes location and name parameters and outputs a message  forrmatted like this:
//  Hi Janice!

//  Welcome to Hawaii!

//  I hope you enjoy your styleMedia. Please ask the president of Hawaii if you need anything.



