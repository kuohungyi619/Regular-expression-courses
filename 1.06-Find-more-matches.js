// To search or extract a pattern more than once
// Use g flag

// For example:
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);

// You can have multiple flag, for example: /search/gi

// Below is the practice
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // Change this line
let result = twinkleStar.match(starRegex); // Change this line