let readlineSync = require('readline-sync');
 


function add (){
    let num1 = readlineSync.question('please enter your first number? ');
    let num2 = readlineSync.question('please enter your second number? '); 
    console.log("the result is" + " " +(Number(num1) + Number(num2)))
}
function subtract(){
    let num1 = readlineSync.question('please enter your first number? ');
    let num2 = readlineSync.question('please enter your second number? '); 
    console.log("the result is" + " " +(Number(num1) - Number(num2)))
}
function multiply(){
    let num1 = readlineSync.question('please enter your first number? ');
    let num2 = readlineSync.question('please enter your second number? '); 
    console.log("the result is" + " " +(Number(num1) * Number(num2)))
}
function divide(){
    let num1 = readlineSync.question('please enter your first number? ');
    let num2 = readlineSync.question('please enter your second number? '); 
    console.log("the result is" + " " +(Number(num1) / Number(num2)))
}


function census() {
    let sum = readlineSync.question('please enter the operation to perform: add, sub, mul, div:')
    if (sum === 'add'){
        add() 
    }else if (sum === 'sub'){
        subtract()
    }else if (sum === 'mul'){
        multiply()
    }else if (sum === 'div'){
        divide()
    }else {
        console.log('Not an input')
    }
}


census()
census()
census()
census()
