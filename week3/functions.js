console.log("#1")
increase = (num1 = 0, num2 = 0) => (num1 + num2)

console.log(increase())

console.log("#2")

biggest = (num1 = 1, num2 =2, num3 =3) => (num1 > num2 && num1 > num3) ? num1 : (num2 > num1 && num2 > num3) ? num2 : num3

console.log(biggest(400, 300, 222))

console.log("#3")

pairs = (num = 0) => ((num % 2 === 0) ? "even" : "odd");

console.log(pairs())

console.log("#4")

let thor = "undiscriminativeness"
let odin = "philosophicoreligious"

dub = (info) => (info.length <= 20) ? (info) + (info) : (info).slice(0, (info).length / 2)

console.log(dub(thor))
console.log(dub(odin))