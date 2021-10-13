// Assignment Code
var generateBtn = document.querySelector("#generate");
var y = "y";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  function generatePassword() {
    var length = prompt(
      "Please enter the number of characters in your password"
    );
    var lcinput = prompt("Do you want to include lower case letters? (y/n)");
    if (lcinput == y) {
      var lc = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
    } else {
      var lc = [];
    }

    var ucinput = prompt("Do you want to include upper case letters? (y/n)");
    if (ucinput == y) {
      var uc = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ];
    } else {
      var uc = [];
    }

    var numinput = prompt("Do you want to include numbers? (y/n)");
    if (numinput == y) {
      var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    } else {
      var num = [];
    }

    var scinput = prompt("Do you want to include special characters? (y/n)");
    if (scinput == y) {
      var sc = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
    } else {
      var sc = [];
    }

    var chars = num.concat(sc, lc, uc);
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //
