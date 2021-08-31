// You can search for multiple patterns using the alternation or OR operator: |
// For example: /yes|no/

// Below is the practice

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);