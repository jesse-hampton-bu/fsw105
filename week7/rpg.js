const readlineSync = require("readline-sync");

let name = readlineSync.question("The year is 90 A.D. and the city is Rome. It is six months after the famous gladiator naval battle, in which emperor Titus had flooded the great Roman Colosseum with over a million and a half gallons of water, for a battle  that was  fought by 9000 slaves in 60 ships. 5,500 slaves were to represent the romans, and I was among the 3,500 that would represent the persians. The Romans were supposed to win, but I was the leader of the persians and after multiple quick victories in small skirmishes it was easy for the men to follow me. They saw a chance at victory. The only battle I've ever lost was the one in which I was enslaved by the Romans. My men were shield warriors, and the Romans were experienced gladiators and crowd favorites. Throughout the day I slowly began to accumulate praise from smaller groups in the crowd. I had suspected these smaller groups usually went for the underdog, and most likely usually lost what coin they were willing to wager. On this day though, those small groups would win those wagers because they wagered on me, a natural leader of men. In the end even though we were badly outnumbered we the Persians had changed history by winning the reinactment of a battle that was originally won by the Romans. Of the 9,000 slaves only 11 of us survived and all of us represented the persians. We were given the oppurtunity to enter a maze to gain our freedom. So one at a time we went, and about half an hour after the fourth man was called the large Roman sentry gaurding us looked at me and said 'You slave! you are next! What name shall I introduce you to the crowd by?'")
let country = readlineSync.question("what nation were you born?")
let rules = readlineSync.question(`okay ${name} from Persia. HaHaHa... you will be given the choice of one item, You can carry two items at a time, all you hve to do is get to the end of the maze and you will gain your freedom... press 'w' key to walk..... if you enter 'print' you will see your health and inventory.   `);
let beginingChoice  = readlineSync.question("choose what you would like to enter the maze with?")
let bc1 = " Axe "
let bc2 = " Sword "
let bc3 = " Shield "
let bc4 = " Gold coins"

console.log(name)



