// ^ is used to search for patterns at the beginning of strings
// outside of a character set.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString); // Return true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst); // Return false
