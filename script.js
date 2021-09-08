// Assignment code here
var Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var Letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var Randoms = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
]
// var Confirm;
// var Smalls;
// var Big;
// var Numeric;
// var Characters;
var uppercaseLetters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var passwordCriteria = "";

var thePassword = [];
var potentialCharacters = [];


// Get references to the #generate element

// Function to get random element from array
function randomCharacters(array){
  var index = Math.floor(Math.random()* array.length)
  var randomElement = array[index]
  return randomElement
}


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
    passwordWords(); }

      if (Smalls === true){
        thePassword.push(randomCharacters(Letters))
        potentialCharacters = potentialCharacters.concat(Letters)
      }

      if (Big === true){
        thePassword.push(randomCharacters(uppercaseLetters))
        potentialCharacters = potentialCharacters.concat(uppercaseLetters)
      }

      if (Numeric === true){
        thePassword.push(randomCharacters(Numbers))
        potentialCharacters = potentialCharacters.concat(Numbers)
      }

      if (Characters === true){
        thePassword.push(randomCharacters(Randoms))
        potentialCharacters = potentialCharacters.concat(Randoms)
      }
    console.log(potentialCharacters)
    var passwordLength = Confirm - thePassword.length
    for (var i = 0; i < passwordLength; i++) {
      var randomCharacter = randomCharacters(potentialCharacters)
      thePassword.push(randomCharacter)
    }
  };
  return thePassword.join("")
  

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
