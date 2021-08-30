// Assignment code here
var Numbers = "0123456789"
var Letters = "abcdefghijklmnopqrstuvwxyz"
var Randoms = "!@#$%^<>?/"
var Confirm;
var Smalls;
var Big;
var Numeric;
var Characters;
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordCriteria = "";




// Get references to the #generate element


// Write password to the #password input
function generatePassword() {
  var Confirm = (window.prompt("Choose 8-128 characters you'd like for your password"))
  if (Confirm < 8 || Confirm > 128 || Confirm === ""){
  window.alert  ("Please enter a value between 8 and 128")
  generatePassword();
  }
  else {
  window.alert("Your password will be " + Confirm + " characters")
  passwordWords();
  }
  

  function passwordWords() {
  var Smalls = (window.confirm("Would you like your password to contain lowercase characters?"))
  var Big = (window.confirm("Would you like your password to contain uppercase characters?"))
  var Numeric = (window.confirm("Would you like your password to contain numeric characters?"))
  var Characters = (window.confirm("Would you like your password to contain special characters?"))

    if (Smalls === false && Big === false && Numeric === false && Characters ===false) {
    window.alert("Please confirm one or all of the password requirements!")
    passwordWords();
  } else if (Smalls && Big && Numeric && Characters) {
      var passwordCriteria = Numbers + Letters + Randoms + uppercaseLetters
    }
    else if (Smalls === true && Big === false && Numeric === false && Characters ===false) {
      var passwordCriteria = Letters
    }
    else if (Smalls === true && Big === true && Numeric === false && Characters ===false) {
    var passwordCriteria = Letters + uppercaseLetters
    }
    else if (Smalls === true && Big === true && Numeric === true && Characters ===false) {
      var passwordCriteria = Letters + uppercaseLetters + Numbers
    }
    else if (Smalls === true && Big === false && Numeric === true && Characters ===false) {
      var passwordCriteria = Letters + Numbers
    }
    else if (Smalls === true && Big === false && Numeric === false && Characters === true) {
      var passwordCriteria = Letters + Randoms
    }
    else if (Smalls === false && Big === true && Numeric === false && Characters ===false){
    var passwordCriteria = uppercaseLetters
    }
    else if (Smalls === false && Big === true && Numeric === true && Characters ===false){
    var passwordCriteria = uppercaseLetters + Numbers 
    }
    else if (Smalls === false && Big === true && Numeric === true && Characters === true) {
      var passwordCriteria = uppercaseLetters + Numbers + Randoms
    }
    else if (Smalls === false && Big === false && Numeric === true && Characters ===false) {
      var passwordCriteria = Numbers
    }
    else if (Smalls === false && Big === false && Numeric === true && Characters === true) {
      var passwordCriteria = Numbers + Randoms
    }
    else if (Smalls === true && Big === false && Numeric === true && Characters === true) {
      var passwordCriteria = Letters + Numbers + Randoms
    }
    else if (Smalls === false && Big === false && Numeric === false && Characters === true) {
      var passwordCriteria = Randoms
    }

    console.log(passwordCriteria);
    
  
  };

var myPassword = ""; 
for (var i = 0; i < Confirm; i++) {
  myPassword = myPassword + passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)];
}
return myPassword;

};

var generateBtn = document.querySelector("#generate");

function writePassword() {
var myPassword = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = myPassword;
window.alert("Your password is " + myPassword);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
