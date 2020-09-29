

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

runForLoop(["cat", "dog"],)
}



// ES6  # 2  rewrite this .map() using arrow functions

const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables = (arr) => arr.map((carrot) => ({type: "carrot", name: carrot}));

console.log("#2 ", mapVegetables(carrots));



// ES6 # 3  rewrite this .filter() uning an arrow function:

 const people = [
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

const filterForFriendly = (arr) => arr.filter((person) => person.friendly)

console.log("#3 ", filterForFriendly(people));


// ES6 # 4  Rewrite the following funtions to be arrow functions:

const doMathSum = (a, b) =>  a + b


const produceProduct = (a, b) => a * b


console.log("#4 ", produceProduct(5, 5))

 // ES6 # 5
{

 function printString(firstName = "Jane", lastName = "Doe", age = 100) {
     return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
 }

console.log("#5 ", printString())
} 


 // ES6 # 6 use template litterals to build the string from #5


let printString = (firstName = "Jane", lastName = "Doe", age = 100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`

console.log("#6 ", printString("Jesse", "Hampton", 33))




 // ES6 # 7  Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.
const animals = [
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

const filterForDogs = (arr) => arr.filter(animal => (animal.type === "dog") ? true : false)
console.log("#7", filterForDogs(animals))




 // ES6 # 8

let greeting = (location = "Hawaii", name = "Janice") => `Hi ${name}! Welcome to ${location}. I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
console.log("#8", greeting())
