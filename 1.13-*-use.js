// An option to match characters that occur zero or more times.
// The character do this is the asterisk or star: *

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // return ["goooooooo"]
gPhrase.match(goRegex); // return ["g"]
oPhrase.match(goRegex); // return null

// Practice

// chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. 
// Create a regex chewieRegex that uses the * character to match an uppercase
// A character immediately followed by zero or more lowercase a characters in chewieQuote.

let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);
