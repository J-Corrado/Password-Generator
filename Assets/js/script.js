// Assignment Code
var generateBtn = document.querySelector("#generate");

var char = "a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z ! # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~ 0 1 2 3 4 5 6 7 8 9 ";
char = char.split(" ");
char.push('"');

specialChar = "! # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~ 0 1 2 3 4 5 6 7 8 9 ";
specialChar = specialChar.split(" ");
specialChar.push('"');


function generatePassword() {
  // Creates the empty password variable to add characters to
  var password = "";

  //Sets the minimum password length
  var minLength = 12;

  // Randomly selects characters in the char variable and adds them to local password variable until the length reaches the minLength variable
  for (let i = 0; i < minLength; i++){
    password += char[Math.floor(Math.random() * char.length)];
  };

  function containsUppercase(str) {
     return /[A-Z]/.test(str);
  };

  function containsLowercase(str) {
    return /[a-z]/.test(str);
  };

  // function to test against a string parameter and return a boolean of true 
  function containsSpecial(str){
  return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
  };

  // checks against criteria using the test functions created above. If any come back false (not containing criteria), re-run the password generator function 
  if (containsUppercase(password) === true && containsLowercase(password) === true && containsSpecial(password) === true){
  return password;
} else {
    generatePassword();
  }

  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
