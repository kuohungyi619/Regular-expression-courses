// Capture groups are constructed by enclosing the regex pattern to be captured in ()
// The substring matched is saved to a temporary "variable"
// which can be accessed within the same regex
// using a backlash and the number of the capture group (ex:\1)

let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]

// Practice

// Use capture groups in reRegex to match a 
// string that consists of only the same number repeated exactly 
// three times separated by single spaces.
let repeatNum = "42 42 42";
let reRegex = /^(\d+)(\s)\1\2\1$/; // Change this line
let result = reRegex.test(repeatNum);