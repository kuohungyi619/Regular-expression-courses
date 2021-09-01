// A greedy match finds the longest possible part of a string.
// ? to switch to lazy match

// For example

var greedy = /t[a-z]*i/ // If add a ? after * and before i it will be lazy.
var test = 'titanic'
var result = test.match(greedy)
console.log(result); // This will result 'titani'


// Practice
// Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a
// regular expression matches any character.

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
