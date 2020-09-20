const readlineSync = require('readline-sync');

addition = () => { 
    let num1 = readlineSync.question(" please enter your first number? ");
    let num2 = readlineSync.question(" please enter your second number? ");
    console.log(" the result is " + " " + (Number(num1) + Number(num2)));
    }


subtraction = () => { 
    let num1 = readlineSync.question(" please enter your first number? ");
    let num2 = readlineSync.question(" please enter your second number? ");
    console.log(" the result is " + " " + (Number(num1) - Number(num2)));
    }


multiplication = () => { 
    let num1 = readlineSync.question(" please enter your first number? ");
    let num2 = readlineSync.question(" please enter your second number? ");
    console.log(" the result is " + " " + (Number(num1) * Number(num2)));
    }


division = () => { 
    let num1 = readlineSync.question(" please enter your first number? ");
    let num2 = readlineSync.question(" please enter your second number? ");
    console.log(" the result is " + " " + (Number(num1) / Number(num2)));
    }

    census = () => {
        let operation = readlineSync.question('please enter the operation you wish to perform: add, sub, mul, or div:');
        (operation === 'add') ? addition() : (operation === 'sub') ? subtraction() : (operation === 'mul') ? multiplication() : (operation === 'div') ? division() : console.log(" Not an input ")}
    
    
    census()
    census()
    census()
    census()