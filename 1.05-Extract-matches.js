// Extract the actual matches you found with the .match() method
// Apply the method on a string
// Then pass in the regex inside the parentheses.

// For example:
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);

'string'.match(/regex/);
/regex/.test('string');

// Below is the practice

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line