// Use the + character to check.
// The character or pattern has to be present consecutively.
// For example:

/a+/g // This would find one match in abc and return ["a"]

//FInd matches when the letter s occurs in Missippi.

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
console.log(result)