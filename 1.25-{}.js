// Use + to look for one or more characters. 
// Use * to look for zero or more characters.

// QUantity specifiers
// Put two numbers between the curly brackets
// for lower and upper number of patterns

// For example
// Match only the letter a appearing between 3 and 5 times in the string ah
// regex would be /a{3, 5}h/

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);

// Practice
// Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);