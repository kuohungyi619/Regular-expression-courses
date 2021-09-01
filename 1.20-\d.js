// Looking for only digit numbers with \d
// This is equal to [0-9]

// Practice 

// Use the shorthand character class \d to count how many digits are in movie titles. 
// Written out numbers ("six" instead of 6) do not count.

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;