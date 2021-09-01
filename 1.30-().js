// In order to check for groups of characters using a Regex, we use ()

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);

// Practice

// Fix the regex so that it checks for the names of Franklin Roosevelt 
// or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.

let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin)\s.*Roosevelt/; // Change this line
let result = myRegex.test(myString);// Change this line
// After passing the challenge experiment with myString and see how the grouping works

// .* explanation:
    // . means match anything
    // * means any number of times. 
