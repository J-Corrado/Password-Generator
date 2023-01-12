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
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
