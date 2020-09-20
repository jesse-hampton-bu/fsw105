console.log("#1")

let name = " Uthred Ragnarson "

capitaliseAndLowerCase = (name.toUpperCase() + name.toLowerCase())

console.log(capitaliseAndLowerCase)


console.log("#2")

function check(string){
    let x;
    (string.length % 2 === 0) ? x = string.length / 2 : x = string.length / 2;
    let string2 = string.substring(0, x);
    console.log(string2.length)
}

check(name)



console.log("#3")

let len = name.length
let halfName = name.slice(0, len / 2)
let halfName2 = name.slice(len/2)

console.log(halfName)




console.log("#4")

let bigName = name.toUpperCase()
let lilName = name.toLowerCase()
let halfAndHalf = halfName.toUpperCase() + halfName2.toLowerCase()

console.log(halfAndHalf)



console.log("*optional*")

const str = "and a great battle was fought in asgard known as ragnarok, and as the three spinners fore-told, odin fell and so did asgard!"
 
let toCapital = str => {
    let words = str.split(" ");
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
}

console.log(toCapital(str))