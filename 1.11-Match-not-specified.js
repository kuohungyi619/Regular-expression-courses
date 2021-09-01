// Negated character sets.
// Create a set of characters that you don't want to match
// Use ^ after the opening bracket and before the characters you 
// don't want to match

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line


