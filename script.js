///  WEBPAGE ELEMENTS  \\\

// Bet input field - document.getElementsByClassName("relative z-10 h-full w-full bg-transparent")[0].value
// Countdown - document.getElementsByClassName("font-numeric text-2xl font-bold")[0].textContent

// CT Button - document.getElementsByClassName("bet-btn")[0]
// Dice Button - document.getElementsByClassName("bet-btn")[1]
// T Button - document.getElementsByClassName("bet-btn")[2]

// Previous Roll - document.getElementsByClassName("previous-rolls-item")[19].children[0].className
// CT = coin-ct ml-1 inline-block h-24 w-24 rounded-full
// Dice = coin-bonus ml-1 inline-block h-24 w-24 rounded-full
// T = coin-t ml-1 inline-block h-24 w-24 rounded-full

// Balance - document.getElementsByClassName("user-action absolute")[0].innerText

// 0.01 Button - document.getElementsByClassName("bet-input__control")[1]
// 0.1 Button - document.getElementsByClassName("bet-input__control")[2]
// 1 Button - document.getElementsByClassName("bet-input__control")[3]
// 10 Button - document.getElementsByClassName("bet-input__control")[4]
// 100 Button - document.getElementsByClassName("bet-input__control")[5]

///  GLOBAL VARIABLES  \\\

let initialBet = 0.01; // Later to be turned into user input from menu
let lossMultiplier = 2; // Later to be turned into user input from menu
let newBet = 0;

///  FUNCTIONS & SCRIPTS   \\\
 
//Check to see if I can bet

//Place initial bet

//Wait for round to finish

//Check the result

//If loss, multiply the bet by a multiplier | If win, reset back to original bet

///   FUNCTIONS   \\\

function main() {

  //Checks to see if the round timer is above 17, if so, returns true
function hasNewRoundStarted() {
  document.getElementsByClassName("bet-input__control")[0].click();
 if (
      document.getElementsByClassName("text-2xl font-bold font-numeric")[0]
        .innerText > 17
    ) {
      console.log("true");
    
    } else {
      console.log("false");
      
    }
}

//Checks to see if the round timer is below 10, if so, returns true
function endOfBetting() {
  if (
    document.getElementsByClassName("text-2xl font-bold font-numeric")[0]
      .innerText < 10
  ) {
    console.log("true");
   
  } else {
    console.log("false");
   
  }
}

// Returns the bet amount in an array reversed format
function numberToArray(number) {
    let array = number.toString().split("");
    let intedArray = array.map((amount) => parseInt(amount));
    let filteredArray = intedArray.filter(function (value) {
      return !Number.isNaN(value);
    });
    return filteredArray.reverse();
  }

// Places bet, uses buttons and bet array to place amount
 function placeBet() {
    let returnLog = numberToArray(currentBet); 

    let buttonNumber = 0;

    for (let index of returnLog) {
      for (i = 0; i < index; i++) {
        document
          .getElementsByClassName("bet-input__control")
          [buttonNumber + 1].click();
      }
  
      buttonNumber++;
    }

    processCounter = 4;
  }


};


main()