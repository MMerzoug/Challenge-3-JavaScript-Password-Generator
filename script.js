//This line finds the button on your webpage that has an id of "generate
var generateBtn = document.querySelector("#generate");

//Define the characters that can be used in the password
var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numbers = '0123456789'.split('');
var specialCharacters = '~`!@#$%^&*()_-=+{[}]|\\'.split('');

//Create a function to generate the password
function generatePassword() {
  var passwordLength = prompt('How long do you want your password?');  
  // passwordLength is currently a string
  // when I parse an integer from it, I convert the string into a number
  if (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
    alert('You need to type in an allowed number');
    return null;
  }

  //alert (creates a pop up), confirm (Boolean true or false), prompt (returns a prompt) functions
  var wantsLowercase = confirm("Would you like to include lowercase letters?");
  var wantsUppercase = confirm("Would you like to include uppercase letters?");
  var wantsNumbers = confirm("Would you like to include numbers?");
  var wantsSpecialCharacters = confirm("Would you like to include special Characters?");

   // add variables to allCharacters array, and assign that as the new value to allCharacters, dependent upon confirm responses.
  var allCharacters = [];
  if (wantsLowercase) {
    allCharacters = allCharacters.concat(lowercaseLetters);
  }
  if (wantsUppercase) {
    allCharacters = allCharacters.concat(uppercaseLetters);
  }
  if (wantsNumbers) {
    allCharacters = allCharacters.concat(numbers);
  }
  if (wantsSpecialCharacters) {
    allCharacters = allCharacters.concat(specialCharacters);
  }

  //var password = ''; - This line creates a container to store your random password.
  //  This says we're going to repeat the actions in the braces {...} a certain number of times (passwordLength times).
  //var randomIndex = Math.floor(Math.random() * allCharacters.length); - This is picking a random location from the allCharacters list.
  //password += allCharacters[randomIndex]; - This adds the character found at the random location to our password container.
  //return writePassword(password); - Finally, this line sends our generated password to the writePassword function. However, this seems incorrect, because usually we'd simply return the generated password with return password;. The writePassword function should be called separately to use and display the password.

  var password = ''; 
  for (var i = 0; i < passwordLength; i++) { 
    var randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex]; 
  }
  return writePassword(password); 
}
 
//function writePassword(pw) {...} - This creates a task named writePassword that needs a password (pw) to do its job.
//var passwordText = document.querySelector("#password"); - This line looks for a spot on your website labeled "password".
//passwordText.value = pw; - This line places the password (pw) you provided into the spot found on your website.
function writePassword(pw) { 
  var passwordText = document.querySelector("#password");
  passwordText.value = pw;
}

// Add event listener to generate button
// This line tells the program to run the writePassword function when the button is clicked
generateBtn.addEventListener("click", generatePassword);
