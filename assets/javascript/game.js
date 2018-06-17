//List of countries
var arrayOfCountries = ["America", "Canada", "Scotland", "Ireland", "Italy", "France", "Russia", "China", "Japan", "England", "Mexico", "Venezuela", "Argentina"];


//Pick a random country for the player to guess. Guessing this correct is the objective of the game.
var randomCountry = arrayOfCountries[Math.floor(Math.random() * arrayOfCountries.length)];
    console.log("Random Country: " + randomCountry);
    console.log("Random Country split : " + randomCountry.split(""));


//Measure the length of the array
var countryLengthArray = [];
for (var y = 0, dude = randomCountry.length; y < dude; y++) {
    countryLengthArray.push(randomCountry[y])
  };
    console.log("countryLengtharry"+ countryLengthArray);


//Display the dashes that represent the letters of the country being guessed
var dashesArray = [];
for (var a = 0, bob = randomCountry.length; a < bob; a++) {
    dashesArray.push("_")
};


//Number of allowed guesses
var remainingGuessesTotal = 10;


//Store the user's guessed letters
var previouslyGuessedLetter = [];


//Track the previously guessed letters
//eh


//Track the remaining number of guesses
//eh


//Track the total number of wins
var currentWinsTotal = 0;


//Event - Listen for the keys being pressed
document.onkeyup = function(event) {


    //User's guess variable
    var userGuess = event.key;
        console.log("UserGuess: " + userGuess);

/*
    //Function to store the letters being guessed
    function addPreviousGuesses(banana) {
        if (previouslyGuessedLetter.indexof(banana) === -1)
        previouslyGuessedLetter.push(banana);
      }
*/

    //Each unique guess should be added to the list of previously guessed letters
    if (previouslyGuessedLetter.indexOf(userGuess) === -1) {
        previouslyGuessedLetter.push(userGuess);
    }
        console.log("Letters guessed: " + previouslyGuessedLetter);
    

    //Each correct guess should be tracked and updated in a variable which displays to the player
    for (c = 0; c < randomCountry.length; c++) {
        if (userGuess.toLocaleLowerCase() === randomCountry[c].toLocaleLowerCase()) {
            dashesArray[c] = userGuess;
            document.getElementById('currentWord').innerHTML = dashesArray;
                console.log("Dynamic Array: " + dashesArray)
        }
    }
        

    //Check to see if the player has won

    //If the player has won, do something to end the game & send an alert

    //Deduct incorrect guesses from the guessing allowence

    //Check to see if the user has exceeded the guessing allowence

    //If the player has lost, end the game & send the them an alert 
console.log("-----------------------")
};//End of document.onkeyup = function(event)

//If the players exceeds the number of guesses, they lose
//Should this happen inside the key press event?


