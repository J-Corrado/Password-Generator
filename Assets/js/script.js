// Assignment Code
var generateBtn = document.querySelector("#generate");

var char = "a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z ! # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~ 0 1 2 3 4 5 6 7 8 9";
char = char.split(" ");
char.push('"');

var specialChar = "! # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~";
specialChar = specialChar.split(" ");
specialChar.push('"');

var numChar = "0 1 2 3 4 5 6 7 8 9";
numChar = numChar.split(" ");

var minLength = 0;
var upperSelection;
var lowerSelection;
var specialSelection;
var numSelection;


function generatePassword() {
  // Creates the empty password variable to add characters to
  var password = "";
  
  // Randomly selects characters in the char variable and adds them to local password variable until the length reaches the minLength variable
  for (let i = 0; i < minLength; i++){
    password += char[Math.floor(Math.random() * char.length)];
  };
  
  return password;
};



// Write password to the #password input
function writePassword() {
  
  // Asks the user how long they would like their password, and makes sure it is within the criteria
  while (true) {
    lengthOfPass = prompt("How long would you like your password? Passwords must be at least 8 characters and no more than 128 characters long:")
    if ( (lengthOfPass != null) && (lengthOfPass > 7) && (lengthOfPass < 129)) {
      minLength = lengthOfPass
      break;
    }
    alert("Invalid entry! Please specify length of password between 8 and 128 characters long:")
  };
  
  // Asks the user if they require at least one uppercase character, and makes sure response is within the criteria
  while (true) {
    selectUpper = prompt("Contain at least one uppercase? (Y/N):").toUpperCase();
    if ( (selectUpper == "Y") || (selectUpper == "N")) {
      upperSelection = selectUpper;
      break;
    }
    alert("Invalid entry! Please select either 'Yes' (Y) or 'No' (N):")
  };
  
  // Asks the user if they require at least one lowerrcase character, and makes sure response is within the criteria
  while (true) {
    selectLower = prompt("Contain at least one lowercase? (Y/N):").toUpperCase();
    if ( (selectLower == "Y") || (selectLower == "N")) {
      lowerSelection = selectLower;
      break;
    }
    alert("Invalid entry! Please select either 'Yes' (Y) or 'No' (N):")
  };
  
  // Asks the user if they require at least one special character, and makes sure response is within the criteria
  while (true) {
    selectSpecial = prompt("Contain at least one special character? (Y/N):").toUpperCase();
    if ( (selectSpecial == "Y") || (selectSpecial == "N")) {
      specialSelection = selectSpecial;
      break;
    }
    alert("Invalid entry! Please select either 'Yes' (Y) or 'No' (N):")
  };
  
  // Asks the user if they require at least one number, and makes sure response is within the criteria
  while (true) {
    selectNum = prompt("Contain at least one number? (Y/N):").toUpperCase();
    if ( (selectNum == "Y") || (selectNum == "N")) {
      numSelection = selectNum;
      break;
    }
    alert("Invalid entry! Please select either 'Yes' (Y) or 'No' (N):")
  };
  
  // function that performs a test on a string (generated password in this case) and returns a boolean value whether or not the string contains an upper case letter 
  function upperCheck(str) {
    return /[A-Z]/.test(str);
  };
  
  // function that performs a test on a string (generated password in this case) and returns a boolean value whether or not the string contains a lower case letter
  function lowerCheck(str) {
    return /[a-z]/.test(str);
  };
  
  // function that performs a test on a string (generated password in this case) and returns a boolean value whether or not the string contains special characters
  function specialCheck(str){
    return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
  };
  // function that performs a test on a string (generated password in this case) and returns a boolean value whether or not the string contains numbers
  function numCheck(str) {
    return /\d/.test(str);
  };
  
  var passwordText = document.querySelector("#password");
  
  var password = generatePassword();
  
  // Determines user input for password criteria and tests password to ensure it contains user selected criteria. If it doesn't, re-run generatePassword() function to create a new password then retest
  function criteriaCheck(str) {

    if (upperSelection == "Y") {
      while (upperCheck(str) != true) {
        generatePassword();
        criteriaCheck();
      }
    } else if (lowerSelection == "Y") {
        while (lowerCheck(str) != true) {
        generatePassword();
        criteriaCheck();
      }
    } else if (specialSelection == "Y") {
        while (specialCheck(str) != true) {
        generatePassword();
        criteriaCheck();
      }
    } else if (numSelection == "Y") {
        while (numCheck(str) != true) {
        generatePassword();
        criteriaCheck();
      }
    }

    return generatePassword();
  } 

  criteriaCheck(password);
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
