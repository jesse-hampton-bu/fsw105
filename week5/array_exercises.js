{
console.log(" A 1")


    let nums = [3, 6, 8, 2];

    fiveAndGreaterOnly = (num) => num >= 5;

    outcome = nums.filter(fiveAndGreaterOnly)

    console.log(outcome)



console.log(" A 2")


    evensOnly = (num) => num %2 === 0;

    duces = nums.filter(evensOnly)

    console.log(duces)

}


console.log("A extra credit")

    let people = [
        {
            name: "Angelina Jolie",
            age: 80
        },{
            name: "Eric Jones",
            age: 2
        },{
            name: "Paris Hilton",
            age: 5
        },{
            name: "Kayne West",
            age: 16
        },{
            name: "Bob Ziroll",
            age: 100
        }
    ]

    ofAge = (people) => people.age >= 17;

    oldEnough = people.filter(ofAge)

    console.log(oldEnough)


console.log("B 1")

{
    let arr = [2, 5, 100];

    let double = arr.map(function(num){
         return num * 2
})

console.log(arr);
console.log(double)




console.log("B 2")

let stringItUp = arr.map(function(num) {
    return num.toString()
})

console.log(stringItUp)

}



console.log("B 3")

{

let str = ["john", "jacob", "jingleHeimer", "schmidt"];

let toCapital = str => {
    let words = str;
    return words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
};

console.log(toCapital(str))

}



console.log("B extra credit 1")

{

let people = [
    {
        name: "Angelina Jolie",
        age: 80
    },{
        name: "Eric Jones",
        age: 2
    },{
        name: "Paris Hilton",
        age: 5
    },{
        name: "Kayne West",
        age: 16
    },{
        name: "Bob Ziroll",
        age: 100
    }
]

namesOnly = (arr) => {justNames = arr.map((arr) => arr.name);
    return justNames};

console.log(namesOnly(people))



console.log("B extra credit 2")

makeStrings = (arr) => {message = arr.map((arr) => arr.age >= 17 ? (`${arr.name} can go to the Matrix`) : (`${arr.name} is underagged !!`));
    return message};

console.log(makeStrings(people))
}



console.log("C 1")

totals = (arr) => {result = arr.reduce(function(final, num) {final = final + num; return final});
    return result;
}

console.log(totals([1, 2, 3]))



console.log("C 2")

stringConcat =  (arr) => arr.reduce((string, num) => string.concat(num), "");

console.log(stringConcat([1, 2, 3]))



console.log("C 3")

let voters = [
    {name: "Bob" , age: 30 , voted: true},
    {name: "Jake" , age: 32 , voted: true},
    {name: "Kate" , age: 25 , voted: false},
    {name: "Sam" , age: 20 , voted: false},
    {name: "Phil" , age: 21 , voted: true},
    {name: "Ed" , age: 55 , voted: true},
    {name: "Tami" , age: 54 , voted: true},
    {name: "Mary" , age: 31 , voted: false},
    {name: "Becky" , age: 43 , voted: false},
    {name: "Joey" , age: 41 , voted: true},
    {name: "Jeff" , age: 30 , voted: true},
    {name: "Zack" , age: 19 , voted: false}
]

totalVotes = (arr) => arr.reduce((total, voter) => voter.voted ? total + 1 : (total), 0);



console.log(totalVotes(voters))



console.log("C extra credit 1")

{

    let wishlist = [ 
        {title: "Tesla Model S", price: 90000 },
        {title: "4 carat diamond ring", price: 45000 },
        {title: "Fancy hacky sack", price: 5 },
        {title: "Gold fidgit spinner", price: 2000 },
        {title: "A second Tesla Model S", price: 90000 }
    ];
    
    shoppingSpree = (arr) => arr.reduce((total, item) => total + item.price, 0);

    console.log(shoppingSpree(wishlist));
    
    }

console.log("C extra credit 2")

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

flatten = (arr) => arr.flat();

console.log(flatten(arrays))



console.log("D 1")

leastToGreatest = (arr) => arr.sort((a, b) => (a > b ? 1 : -1));

console.log(leastToGreatest([1, 3, 5, 2, 90, 20]))



console.log("D 2")

greatestToLeast = (arr) => arr.sort((a, b) => (a < b ? 1 : -1));

console.log(greatestToLeast([1, 3, 5, 2, 90, 20]))



console.log("D 3")

lengthToShort = (arr) => arr.sort((a, b) => a.length - b.length);

console.log(lengthToShort(["dog", "wolf", "by", "family", "eaten"]));



console.log("D extra credit")

alphabetical = (arr) => arr.sort();

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));






