// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var password = "word";

  // password character Sets
  var UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
  var SYMBOLS = "~!@#$%^&*()_+-";
  var NUMBERS = "123456789";

  // password criteria
  var passwordLength = prompt("select a password between 8 and 128 characters");
  var useUppercase = confirm("Do you want uppercase characters?");
  var useLowercase = confirm("Do you want to use lowercase characters?");
  var useSymbols = confirm("Do you want to use symbols?");
  var useNumbers = confirm("Do you want to use numbers?");

  var validCharacters = ""; 
  if (useUppercase === true) {
    // useUppercase == true -> "true" || true
    // "11" == 11 -> true
    // "11" === 11 -> false 

    validCharacters += UPPERCASE;
  }

  if (useLowercase === true) {
    // useUppercase == true -> "true" || true
    // "11" == 11 -> true
    // "11" === 11 -> false 

    validCharacters += LOWERCASE;
  }

  if (useSymbols === true) {
    // useUppercase == true -> "true" || true
    // "11" == 11 -> true
    // "11" === 11 -> false 

    validCharacters += SYMBOLS;
  }

  if (useNumbers === true) {
    // useUppercase == true -> "true" || true
    // "11" == 11 -> true
    // "11" === 11 -> false 

    validCharacters += NUMBERS;
  }

  console.log(passwordLength);
  console.log(useUppercase)
  console.log(useLowercase);
  console.log(useSymbols);
  console.log(useNumbers);
  console.log(validCharacters);

  // ensure length is a number and not a string
  passwordLength = parseInt(passwordLength);

  // start; stop condition; pace;
  for (var i = 0; i < passwordLength; i++) {
    console.log('Getting a new character');
  }

  return password; 
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
