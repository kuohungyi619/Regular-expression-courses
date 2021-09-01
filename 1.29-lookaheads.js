// Positive lookaheads:
// (?=...)
// make sure the element in the search pattern is there.
// but won't actually match it

// Negative lookaheads:
// (?!...)
// make sure the element in the search pattern is not there.
// ... is the pattern that you don't want to be there.

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); // return ["q"]
noquit.match(qRegex); // also return ["q"]

// Below is a simple password checker that looks for between 
// 3 and 6 characcters and at least one number:
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);

