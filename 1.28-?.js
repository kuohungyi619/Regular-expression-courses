// Specify the possible existence of an element with a question mark.
// This checks for zero or one of the preceding element.
// It means the previous element is optional

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);