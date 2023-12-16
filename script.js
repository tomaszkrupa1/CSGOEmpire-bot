// Check if start button is pressed... if so, 
// Check what mode is selected
// Set the initial variables





function startScript(initialBet, lossMultiplier, selectedMode) {

    let processCounter = 1;
    let currentBet = initialBet;
  
    placeBet();

if (selectedMode = "ct-coin") {
    setInterval(function () {
        if (processCounter == 1) {
          if (hasNewRoundStarted()) {
            processCounter = 2;
          }
        } else if (processCounter == 2) {
          CT();
        } else if (processCounter == 3) {
          placeBet();
        } else if (
          document.getElementsByClassName("text-2xl font-bold font-numeric")[0]
            .innerText > 11
        ) {
          processCounter = 4;
        } else if (processCounter == 4) {
          if (endOfRound()) {
            document.getElementsByClassName("bet-btn")[0].click();
            processCounter = 1;
          }
        }
      }, 1000);
} else if (selectedMode = "t-coin") {
    setInterval(function () {
        if (processCounter == 1) {
          if (hasNewRoundStarted()) {
            processCounter = 2;
          }
        } else if (processCounter == 2) {
          T();
        } else if (processCounter == 3) {
          placeBet();
        } else if (
          document.getElementsByClassName("text-2xl font-bold font-numeric")[0]
            .innerText > 11
        ) {
          processCounter = 4;
        } else if (processCounter == 4) {
          if (endOfRound()) {
            document.getElementsByClassName("bet-btn")[0].click();
            processCounter = 1;
          }
        }
      }, 1000);
} else if (selectedMode = "r-coin") {
    function getRandomResult() {
        var randomNumber = Math.random();
        if (randomNumber < 0.5) {
            setInterval(function () {
                if (processCounter == 1) {
                  if (hasNewRoundStarted()) {
                    processCounter = 2;
                  }
                } else if (processCounter == 2) {
                  CT();
                } else if (processCounter == 3) {
                  placeBet();
                } else if (
                  document.getElementsByClassName("text-2xl font-bold font-numeric")[0]
                    .innerText > 11
                ) {
                  processCounter = 4;
                } else if (processCounter == 4) {
                  if (endOfRound()) {
                    document.getElementsByClassName("bet-btn")[0].click();
                    processCounter = 1;
                  }
                }
              }, 1000);
        } else {
            setInterval(function () {
                if (processCounter == 1) {
                  if (hasNewRoundStarted()) {
                    processCounter = 2;
                  }
                } else if (processCounter == 2) {
                  T();
                } else if (processCounter == 3) {
                  placeBet();
                } else if (
                  document.getElementsByClassName("text-2xl font-bold font-numeric")[0]
                    .innerText > 11
                ) {
                  processCounter = 4;
                } else if (processCounter == 4) {
                  if (endOfRound()) {
                    document.getElementsByClassName("bet-btn")[0].click();
                    processCounter = 1;
                  }
                }
              }, 1000);
        }
      }



//Checks to see if the round timer is above 17, if so, returns true
function hasNewRoundStarted() {
    document.getElementsByClassName("bet-input__control")[0].click();
    if (
      document.getElementsByClassName("text-2xl font-bold font-numeric")[0]
        .innerText > 17
    ) {
      return true;
    } else {
      return false;
    }
  }

//Checks to see if the round timer is below 10, if so, returns true
function endOfRound() {
        if (
          document.getElementsByClassName("text-2xl font-bold font-numeric")[0]
            .innerText < 10
        ) {
          return true;
        } else {
          return false;
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

}

}