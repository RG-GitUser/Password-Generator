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
  var password = "";

  // password character Sets
  var UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
  var SYMBOLS = "~!@#$%^&*()_+-";
  var NUMBERS = "123456789";

  // password criteria
  var passwordLength = prompt("select a password between 8 and 128 characters");
  console.log(isNaN(passwordLength))
  if(isNaN(passwordLength)) {
    alert("Must be a number")
    return;
  
  }



  if (passwordLength <8) {
    alert("Please pick a number greater than 8")
    return;
  }

  if (passwordLength >128) {
    alert("Please pick a number less than 128")
    return;
  }
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

  //console.log(passwordLength);
  // console.log(useUppercase)
  // console.log(useLowercase);
  // console.log(useSymbols);
  // console.log(useNumbers);
  console.log(validCharacters);

  // ensure length is a number and not a string
  passwordLength = parseInt(passwordLength);

  // start; stop condition; pace;
  for (var i = 0; i < passwordLength; i++) {
    // how to select a character at a position in a string (index)
    console.log(i)


  
    // how to randamly get a decimal (float) between 0-1
    // mulitply the float times the length of the string
    // round down the decimal 

    // select a character in string using index
    // add the randomw character to the password variable 

    
  }

  return password; 
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
