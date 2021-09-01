// Match a range of numbers with hyphen as well
// Also, it is possible to combine a range of letters and numbers
// in a single character set.

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig; // There is only one []!
jennyStr.match(myRegex);