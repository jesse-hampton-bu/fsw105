let readlineSync = require('readline-sync');



let escaped = false;
let alive = true;
let key = false;
let optionOne = " 1. Put hand in hole "
let optionTwo = " 2. look for the key "
let optionThree = " 3. Open the Door "
let userQuestion = " your trapped!! you have 3 choices,  choose wisely "



while (!escaped && alive)

{
    let generalQuestions = readlineSync.question(userQuestion.concat(" ",optionOne," ", optionTwo, " ", optionThree))

if (generalQuestions == "1") {
    escaped = false
    alive = false
    console.log (" You are touched by Death, Try again ")
    }
 else if (generalQuestions == "2") {
     if (Math.random() * 10 < 5 )  {
      key = true
      console.log(" congratulations you have found the key!!")
     }
     else {
         console.log("you did not find the key");
     }
    
  
  } 

  else if (generalQuestions == "3") {

    if (key === true){
        console.log("You have opened the door and escaped")
        escaped = true
    }
    else if (key === false){

        console.log(" The door is locked, you must find the key first")
    }

} 
}