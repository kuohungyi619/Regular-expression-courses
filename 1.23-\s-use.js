// Search for whitespace using \s.
// Think of it as similar to the character class[\r\t\f\n\v]

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
// This will return [" ", " "].

