// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var capitalValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var smallValues = "abcdefghijklmnopqrstwxyz";
var numberValues = "1234567890";
var specialValues = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

let values =""
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
