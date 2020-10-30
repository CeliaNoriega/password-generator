let length = prompt('Desired password length?/ How many characters?')
if (length >100) {
  alert ('length chosen must be less than 100 characters!')
}

let lowCase = confirm('Proceed with lowercase letters?')
let uppCase = confirm('Proceed with uppercase letters?')
let num = confirm('Proceed with numbers?')
let specialChar = confirm('Proceed with special characters?')

function lowCase() {
  const lowCase = 'abcdefghijklmnopqrstuvwxyz';
  return lowCase[Math.floor(Math.random() * lowCase.length)];
}
function uppCase() {
  const uppCase = 'ABCDEFGHIJKLMNOP';
  return uppCase[Math.floor(Math.random() * uppCase.length)];
}
function num() {
  const num = '0123456789';
  return num[Math.floor(Math.random() * num.length)];
}
function specialChar() {
  const specialChar = '!@#$%^&*()-_=+<,>.?/{[}]:;"'';
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}


// Writing the password...
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;

// Assignment Code
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
