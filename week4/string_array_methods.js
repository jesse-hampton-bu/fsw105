/* 1) Make a function that will return any given string into all caps followed by the same string all lowercase.
 */
var capitalizedAndLowerCase = "Hello"
​
function upper(b){
var uppeCase = b.toUpperCase()
var lowerCase = b.toLowerCase()
​
console.log(uppeCase.concat(lowerCase))
}
upper(capitalizedAndLowerCase)
​
/* 2) Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().
 */
var findMiddleIndex = "Hello World";
​
function finals(c){
var half = Math.floor(findMiddleIndex.length/2)
console.log(half)
}
​
finals(findMiddleIndex)
​
/* 3) Make a function that uses slice() and the other functions you've written to return the first half of the string.
 */
var returnFirstHalf = "Hello World";
​
​
function halfResult(returnFirstHalf){
  var slicedInTwo = returnFirstHalf.slice(0, returnFirstHalf.length/2)
console.log(slicedInTwo)
}
halfResult(returnFirstHalf )
​
​
/* 5) Make a function that takes any string and capitalizes any character that follows a space.
 */
var capitalize = "hey friends! practice practice practice"
 
//capitalize_Words 
function capitalize_Words(str){
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
console.log(capitalize_Words(capitalize));
​
/* 4) Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower 
cased. (If the string length is odd, capitalize the shorter of the first half.) */
​
var capitalizedAndLowerCase2 = "Hello wor";
​
​
function final(a){
  if(a.length%2===0){
var firstHalf2 = a.slice(0, a.length/2);
var firstUpper = firstHalf2.toUpperCase();
console.log(firstUpper)
​
  }
else {
var firstHalf = a.slice(0, a.length/2);
var sencondHalf = a.slice(a.length/2);
var firstUpper2 = firstHalf.toUpperCase();
var secondLower = sencondHalf.toLowerCase()
console.log(firstUpper2.concat(secondLower))
}
}
final(capitalizedAndLowerCase2)
Collapse



