// To only specify the lower number of patterns, keep the first
// number followed by a comma
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4); // this return true
multipleA.test(A2); // this return false
multipleA.test(A100); // this return true

// Practice

//Change the regex haRegex to match the word Hazzah only when it has four or more letter z's.

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);