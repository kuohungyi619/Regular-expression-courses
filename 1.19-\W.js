// While \w matchs all the numbers and alphabet
// \W do the opposite

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);

// The first call would return the value ["%"] and the second would return ["!"].