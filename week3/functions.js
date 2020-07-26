function increase(num1, num2){
    return(num1 + num2)
}
var outcome = increase(30,30)
console.log(outcome)
 

function biggest (num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        console.log(num1)
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2)
    } else {
        console.log(num3)
    } 
}

biggest(14, 155, 88)


function pairs (num){
    console.log ((num %2 === 0) ?"even" : "odd");
}

pairs(101)

var thor = "undiscriminativeness";
var odin = "philosophicoreligious";

function dub (info){
    console.log((info.length <= 20) ? (info) + (info) : (info).slice(0, (info).length / 2 ))
} 

dub(thor)
