//List of countries
var arrayOfCountries = ["America", "Canada", "Scotland", "Ireland", "Italy", "France", "Russia", "China", "Japan", "England", "Mexico", "Venezuela", "Argentina"];


//Letters Array
var validLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//Track the total number of wins
var currentWinsTotal = 0;


//Pick a random country for the player to guess. Guessing this correct is the objective of the game.
var randomCountry = arrayOfCountries[Math.floor(Math.random() * arrayOfCountries.length)].toLocaleLowerCase();
    console.log("Random Country: " + randomCountry);
    console.log("Random Country split : " + randomCountry.split(""));


//Measure the length of the array
var countryLengthArray = [];
for (var y = 0, dude = randomCountry.length; y < dude; y++) {
    countryLengthArray.push(randomCountry[y])
  };
    console.log("countryLengtharry: "+ countryLengthArray);


//Display the dashes that represent the letters of the country being guessed
var dashesArray = [];
for (var a = 0, bob = randomCountry.length; a < bob; a++) {
    dashesArray.push("_")
};


//Number of allowed guesses
var remainingGuessesTotal = 10;


//Store the user's guessed letters
var previouslyGuessedLetter = [];


var flagImagesObject = {
    "america": "./assets/images/flag-america.jpg",
    "canada": "./assets/images/flag-canada.gif",
    "scotland": "./assets/images/flag-scotland.png",
    "ireland": "./assets/images/flag-ireland.jpg",
    "italy": "./assets/images/flag-italy.png",
    "france": "./assets/images/flag-france.png",
    "russia": "./assets/images/flag-russia.png",
    "china": "./assets/images/flag-china.jpg",
    "japan": "./assets/images/flag-japan.gif",
    "england": "./assets/images/flag-england.png",
    "mexico": "./assets/images/flag-mexico.png",
    "venezuela": "./assets/images/flag-venezuela.jpg",
    "argentina": "./assets/images/flag-argentina.jpg"
}


//Event - Listen for the keys being pressed
document.onkeyup = function(event) {


    //User's guess variable
    var userGuess = event.key.toLocaleLowerCase();

    //Letter Validator - prevents player from guessing anything else
    if (validLetters.indexOf(userGuess) === -1) {
        alert("Only Choose Letters")
    }
    else (playerGuessFilter(userGuess))
        console.log("UserGuess: " + userGuess);

    /*
    function nonLettersShallNotPAss(letter) {
        var letterChoice = userGuess !== userGuess;
        validLetters.forEach(userGuess); {
            if (event.key.toLocaleLowerCase() === "i") {
                
            }
        }   
    }
    
    //Function to store the letters being guessed
    function addPreviousGuesses(banana) {
        if (previouslyGuessedLetter.indexof(banana) === -1)
        previouslyGuessedLetter.push(banana);
      }
    */

    //Each unique guess should be added to the list of previously guessed letters
    function playerGuessFilter (doug) {
    if (previouslyGuessedLetter.indexOf(doug) === -1 && randomCountry.indexOf(doug) === -1) {
        previouslyGuessedLetter.push(doug);
        //Deduct incorrect guesses from the guessing allowence
        remainingGuessesTotal--;
    }}
        console.log("Letters guessed: " + previouslyGuessedLetter);
    

    //Each correct guess should be tracked and updated in a variable which displays to the player
    for (c = 0; c < randomCountry.length; c++) {
        if (userGuess.toLocaleLowerCase() === randomCountry[c].toLocaleLowerCase()) {
            dashesArray[c] = userGuess;
            document.getElementById('currentWord').innerHTML = dashesArray;
                console.log("Dynamic Array: " + dashesArray)
        }
    };
        
    //Display each incorrect guess to the user
    document.getElementById('previouslyGuessedDiv').innerHTML = previouslyGuessedLetter;

    
    //Display number of guesses left
    document.getElementById('remainingGuessesDiv').innerHTML = remainingGuessesTotal;


    //Check to see if the player has won
    var arrayRandomCountry = randomCountry.split("");
    if (arrayRandomCountry.length === dashesArray.length && arrayRandomCountry.every(function(m,n) {return m === dashesArray[n]})) {
        currentWinsTotal++;
        var winStatus = true;
        document.getElementById('flagPicture').src = flagImagesObject["" + randomCountry + ""];
    };


    //If the player has won, do something to end the game & send an alert
    //Display the number of wins to the screen
    document.getElementById('displayWins').innerHTML = currentWinsTotal;
    console.log("New random country " + randomCountry);
    console.log("number of wins " + currentWinsTotal);
    winStatus = false;
    console.log("Win Status " + winStatus);

    //Check to see if the user has exceeded the guessing allowence
    if (remainingGuessesTotal === 0) {
        alert("Lose. No more guesses");
    };
    
    //If the player has lost, end the game & send the them an alert 


console.log("-----------------------")
};//End of document.onkeyup = function(event)

//If the players exceeds the number of guesses, they lose
//Should this happen inside the key press event?


