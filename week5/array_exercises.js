

// Section A # 1

const { keyIn } = require("readline-sync");

{
    let nums = [3, 6, 8, 2];

function fiveAndGreaterOnly(num) {
  return num >= 5;
}

results = nums.filter(fiveAndGreaterOnly);

console.log(results, "A1")





// Section A # 2

function evensOnly(num) {
    return num %2 === 0;
}

evens = nums.filter(evensOnly);

console.log(evens, "A2")

}





// Section A Extra Credit

{
    let people = [
    {
        name: "Angelina Jolie",
        age: 80
    }, {
    
        name: "Eric Jones",
        age: 2
    }, {
    
        name: "Paris Hilton",
        age: 5
    }, {

        name: "Kayne West",
        age: 16
    }, {
    
        name: "Bob Ziroll",
        age: 100
    }
]



function ofAge(people){
    return people.age >= 17
}

eligibility = people.filter(ofAge);

// console.log(people)
console.log(eligibility, "A.ec")

}






// Section B #1

{
    const arr = [2, 5, 100];

    const result = arr.map(function(num){
        return  num * 2    
    })
    

    console.log(arr, "B1")
    console.log(result, "B1")
}






// Sectio B # 2

{
    const arr = [2, 5, 100];

    const result = arr.map(function(num){
        return     num.toString()
    })
    

    // console.log(arr)
    console.log(result, "B2")

}






// Section B # 3

 {
    
    const str = ["john", "jacob", "jinGleHeimer", "schmidt"];
     
    const toCapital = str => {
      const words = str;
      return words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())};
    
    console.log(toCapital(str), "B3")   

} 







// Section B Extra credit 1


{

    let people = [
        {
            name: "Angelina Jolie",
            age: 80
        }, {
        
            name: "Eric Jones",
            age: 2
        }, {
        
            name: "Paris Hilton",
            age: 5
        }, {
    
            name: "Kayne West",
            age: 16
        }, {
        
            name: "Bob Ziroll",
            age: 100
        }
    ]


    const justNames = people.map(function(people) {
        return people.name 
    });
    console.log(justNames, "B.ec1")
 
 
 
 
 
 
 
    // Section B Extra credit # 2    NEED TO  CHANGE TO  .map()  TO MEET ASSIGNMENT REQUIREMENTS !!!!

   function allowed (arr){ 
    const justNames = arr.map((arr) => arr.age >= 17 ? (`${arr.name} can go to the Matrix`) : (`${arr.name} is underaged!!`));
    console.log(justNames)
    }
console.log(allowed(people), "B.ec2");

}







// Section C # 1

{

const nums = [1, 2, 3]

const sum = nums.reduce((total, num) => (total + num), 0);
console.log(sum, "C1")










// Section C # 2

const change = nums.reduce((total, nums) => total.concat(nums), "");

console.log(change, "C2")



} 









// Section C # 3 
{
 totalVotes = (arr) => arr.reduce((total, voter) => voter.voted ? total + 1 :(total), 0);




const voters = [
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
    {name: "Zack" , age: 19 , voted: false},
];
 console.log(totalVotes(voters), "C3");

}








// Section C Extra Credit # 1 

{

const wishlist = [ 
    {title: "Tesla Model S", price: 90000 },
    {title: "4 carat diamond ring", price: 45000 },
    {title: "Fancy hacky sack", price: 5 },
    {title: "Gold fidgit spinner", price: 2000 },
    {title: "A second Tesla Model S", price: 90000 }
];

const totalPrices = wishlist.reduce((total, item) => total + item.price, 0);

console.log(totalPrices, "C.ec1")

}









// Section C Extra Credit # 2

{

const arrays = [
["1", "2", "3"],
[true],
[4, 5, 6]
];

const arraysFlat = arrays.flat();

console.log(arraysFlat, "C.ec2")
}






// Section D # 1

{
const nums = [1, 3, 5, 2, 90, 20];
const leastToGreatest = nums.sort((a, b) =>(a > b ? 1 : -1));
console.log(leastToGreatest, "D1")






// Section D # 2



const greatestToLeast = nums.sort((a, b) => (a < b ? 1 : -1));
console.log(greatestToLeast, "D2")

}





// Section D # 3

{

const sos = ["dog", "wolf", "by", "family", "eaten"];
const shortToLong = sos.sort((a, b) => (a.length - b.length));
console.log(shortToLong, "D3")





// Section D Extra Credit 
sos.sort();
console.log(sos, "D.ec")




}