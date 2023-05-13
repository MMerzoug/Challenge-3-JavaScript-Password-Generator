//This line finds the button on your webpage that has an id of "generate
var generateBtn = document.querySelector("#generate");

//Define the characters that can be used in the password
var lowercaseLetters = ('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
var uppercaseLetters = ('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
var numbers = ('1','2','3','4','5','6','7','8','9','0');
var specialCharacters = ('!@#$%^&*()_-+=');

//alert (creates a pop up), confirm (Boolean true or false), prompt (returns a prompt) functions
var input = prompt ("Would you like to include lowercase letters?");

var didUserConfirm = ("confirm");
alert (didUserConfirm);




//Create a function to generate the password
function generatePassword(passwordLength) { //This is a function that makes a random password. It takes a number as an input, which is the length of the password you want.
  var allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;//combine all the character arrays into one single array allCharacters.
  var password = ''; // Initializing a new variable named password and setting it to an empty string.

  for (var i = 0; i < passwordLength; i++) { //This loop runs once for each character in the password. Each time, it adds a random character to the password.
    var randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex]; //This pair of lines is generating a random character from the allCharacters array or string and adding it to the password.
}
return password; //The line return password; is used to specify the output of the function. Without a return statement, a function in JavaScript will return undefined
}

//Call the function to generate a password
var passwordLength = (8);  // Choose your password length
var password = generatePassword(passwordLength);//It's calling the generatePassword function with the argument passwordLength. 
console.log(password);

//Write password to the #password input
function writePassword() { //is the declaration of a function named writePassword
  var password = generatePassword(passwordLength);//This function generates a random password of a specified length and returns it. The returned password is then stored in the password variable.
  var passwordText = document.querySelector("#password");//This function generates a random password of a specified length and returns it. The returned password is then stored in the password variable.

  passwordText.value = password;//This line takes the generated password and puts it into the HTML element with
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);// This line tells the program to run the writePassword function when the button is clicked

