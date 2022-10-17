///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

let specialCharArray = ["!",'"',"#","$","%","&","'","()","*","+",",","-",".","/",":",";","<","=",">","?","@","["];
// 	var specialChar = !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
let lowercaseArray = "abcdefghijklmnopqrstuvwxyz".split("");
let upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let numericArray = "1234567890".split("");

// Write password to the #password input
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
  // newly created password should append inside textarea tag
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
passwordLength = window.prompt("How many characters would you like your password to contain? Minimum: 8, Maximum: 128");

// If doesn't meet criteria, alert user a message
if (passwordLength < 8 || passwordLength > 128) {
  window.alert("password must be minimum 8 characters and maximum 128 characters");
  return;
};

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
  // the confirm() method returns true if the user clicked "OK", otherwise false

var specialChar = window.confirm("Click OK to confirm including special characters");
var lowerCase = window.confirm("Click OK to confirm including lowercase characters");
var upperCase = window.confirm("Click OK to confirm including uppercase characters");
var numeric = window.confirm("Click OK to confirm including numeric characters");

console.log(specialChar)
let userChoiceArray = []

if (specialChar) {
  userChoiceArray = userChoiceArray.concat(specialCharArray)
};

if (lowerCase) {
  userChoiceArray = userChoiceArray.concat(lowercaseArray)
};

if (upperCase) {
  userChoiceArray = userChoiceArray.concat(upperCaseArray)
};

if (numeric) {
  userChoiceArray = userChoiceArray.concat(numericArray)
};

// console.log(userChoiceArray)

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
let randomPassword = ""

for(let i=0; i<passwordLength; i++) {
  let index = Math.floor(Math.random()*userChoiceArray.length) 
  console.log(index)
  console.log(userChoiceArray[index])
  randomPassword = randomPassword + userChoiceArray[index]
}
console.log(randomPassword)

return randomPassword;
}


