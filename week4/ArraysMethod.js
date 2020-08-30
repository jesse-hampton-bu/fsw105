let fruit = ["banana", "apple", "orange", "watermelon"];
let vegtable = ["carrot", "tomato", "pepper", "lettuce"];

console.log("fruit: ", fruit);
console.log("vegtable: ", vegtable);

vegtable.pop();


console.log("fruit: ", fruit);
console.log("vegtable: ", vegtable);

fruit.shift();

console.log("fruit: ", fruit);
console.log("vegtable: ", vegtable);

let indexOfOrange = fruit.indexOf("orange")

console.log(indexOfOrange)

fruit.push(indexOfOrange)

console.log("fruit: ", fruit);

console.log(vegtable.length)

let vegLen = vegtable.length

vegtable.push(vegLen)

console.log("vegtable: ", vegtable);

let food = fruit.concat(vegtable)
console.log(food)

food.splice(4, 2)
console.log(food)

let reversedArr = food.reverse()
console.log(reversedArr)

let joinedName = reversedArr.join(",")
console.log(joinedName)




