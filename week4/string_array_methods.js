

// capitaliseAndLowerCase

let name = "Uthrid Ragnarson"
console.log(name.toUpperCase() + name.toLowerCase())




// findMiddleIndex

function check(string) {
    let x;
   
    (string.length % 2 === 0) ? x = string.length / 2: x = (string.length / 2);
    const string2 = string.substring(0, x);
    console.log(string2.length)
  }
  check(name)




// returnFirstHalf

const len = name.length
let halfname = name.slice(0, len/2)
let halfname2 = name.slice(len/2)
console.log(halfname)



// half upper and half lower


const bigname = name.toUpperCase()
const lilname = name.toLowerCase()
const halfandhalf = halfname.toUpperCase() + halfname2.toLowerCase()
console.log(halfandhalf)


// optional  

const toCapital = str => {
  const words = str.split(" ");
  return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
}

const str = "and a great battle was fought in asgard known as ragnarok, and as the three spinners fore-told, odin fell and so did asgard!"
console.log(toCapital(str))







