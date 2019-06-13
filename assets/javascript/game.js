// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var wordChoices = ["Eagle", "Tiger", "Rhinoceros", "Monkey", "Giraffe", "Elephant"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var userGuesses = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var hi = document.getElementById("winsText");
document.getElementById("currentWordBlank");
var guessesLeft = document.getElementById("guessesLeft");
var userGuesses = document.getElementById("userGuesses");

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    var currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    var userGuess = event.key;
    
    

    // Print the letters of the chosen word as blank spaces to fill in 
    var lengthofword = currentWord.length;
    var blankspace = ' _ ';

    document.getElementById("currentWordBlank").innerHTML = blankspace.repeat(lengthofword);
    // document.getElementById("guessesLeft").innerHTML = guessesLeft;

  }; 
  



  // "winsText"> </span>
  //               </p>

  //               <p>Current word: <span id="currentWord">  </span>
  //               </p>

  //               <p>Number of Guesses Remaining: <span id="guessesLeft"> </span>
  //               </p>

  //               <p>Letters Already Guessed: <span id="userGuesses"></span>