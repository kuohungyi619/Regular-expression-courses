// Ignore case while matching
// Match both cases using what is called a flag
// There are many flag. Here we are using i flag


// How to use:
// /ignorecase/i

// For example:
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);