// Regex searched for a literal match is case-sensitive

let testStr = 'Hello, my name is Kevin.'
let testRegex = /Kevin/
testRegex.test(testStr); // This will return true
let testRegex2 = /kevin/
testRegex2.test(testStr) // False


