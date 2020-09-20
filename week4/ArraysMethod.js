let fruit = [" banana ", " apple ", " orange ", " watermelon "];
let vegetable = [" carrot ", " tomato ", " pepper ", " lettuce "];

console.log(fruit);
console.log(vegetable);

console.log("#1");

vegetable.pop();
console.log(vegetable);


console.log("#2");

fruit.shift();
console.log(fruit);


console.log("#3");

let indexOfOrange = fruit.indexOf("orange");
console.log(indexOfOrange)


console.log("#4")

fruit.push(indexOfOrange)
console.log(fruit)


console.log("#5");

let vegLen = vegetable.length;
console.log(vegLen);


console.log("#6");

vegetable.push(vegLen)
console.log(vegetable)


console.log("#7");

let food = fruit.concat(vegetable);
console.log(food);


console.log("#8");

food.splice(4, 2);
console.log(food)



console.log("#9");

let reversedArr = food.reverse();
console.log(reversedArr);



console.log("#10");

let joinedName = reversedArr.join(",");
console.log(joinedName)
