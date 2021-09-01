// Requirement
/*
Usernames can only use alpha-numeric characters.
The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
Username letters can be lowercase and uppercase.
Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);

// Explanation

// ^[a-z] = start with alphabet
// second[a-z]+ = alphabet after the beginning letter
// \d*$ = all kinds of digit at the end, input ends with 0 or more digits
// \d\d+$ = begin with digit after the first letter, following characters are 2 or more digits.

