
const readlineSync = require('readline-sync');
 


function hole (){
    let num1 = readlineSync.question('please enter your first number? ');
    let num2 = readlineSync.question('please enter your second number? '); 
    console.log("the result is" + " " +(Number(num1) + Number(num2)))
}
function key(){
    let num1 = readlineSync.question('please enter your first number? ');
    let num2 = readlineSync.question('please enter your second number? '); 
    console.log("the result is" + " " +(Number(num1) - Number(num2)))
}
function door(){
    let num1 = readlineSync.question('please enter your first number? ');
    let num2 = readlineSync.question('please enter your second number? '); 
    console.log("the result is" + " " +(Number(num1) * Number(num2)))
}







function () {
    let choice = readlineSync.question('Make your selection: #1, #2, #3:')
    if (choice === '#1'){
        console.log("you were pricked by a venomous thorn and died") 
    }else if (choice === '#2'){
        console.log("you have found a key" readLineSync.question("make your selection: #1, #3"))
        if (choice === '#1'){
        console.log("you were pricked by a venomous thorn and died") 
    }else if (choice === '#3'){
        console.log("you have opened a door and escaped")
    }else if (choice === '#3'){
        console.log("you need to find a key first")
    }else
        console.log('Not an input')
    }
}
