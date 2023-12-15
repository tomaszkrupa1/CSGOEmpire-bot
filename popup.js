document.addEventListener('DOMContentLoaded', function() {
    const startStopButton = document.getElementById('startStopButton');
  const initialBetInput = document.getElementById('initialBet');
  const lossMultiplierInput = document.getElementById('lossMultiplier');
    let isRunning = false;

    chrome.storage.local.get(['initialBet', 'lossMultiplier'], function(result) {
        initialBetInput.value = result.initialBet || 0.01;
        lossMultiplierInput.value = result.lossMultiplier || 2;
      });
  
    startStopButton.addEventListener('click', function() {
      if (isRunning) {
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          function: stopScript
        });
        startStopButton.textContent = 'Start';
        isRunning = false;
      } else {
        const initialBet = parseFloat(document.getElementById('initialBet').value);
        const lossMultiplier = parseFloat(document.getElementById('lossMultiplier').value);
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          function: startScript,
          args: [initialBet, lossMultiplier]
        });
        startStopButton.textContent = 'Stop';
        isRunning = true;
      }

      chrome.storage.local.set({
        initialBet: initialBetInput.value,
        lossMultiplier: lossMultiplierInput.value
      });
    
    });
  


    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      tabId = tabs[0].id;
    });
  });
  
  function startScript(initialBet, lossMultiplier) {
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

// Process 1 -
// Process 2 -
// Process 3 -
// Process 4 -

///  GLOBAL VARIABLES  \\\

//let initialBet = 0.01; // Later to be turned into user input from menu
// let lossMultiplier = 2; // Later to be turned into user input from menu

///  FUNCTIONS & SCRIPTS   \\\

//Check to see if I can bet

//Place initial bet

//Wait for round to finish

//Check the result

//If loss, multiply the bet by a multiplier | If win, reset back to original bet

///   FUNCTIONS   \\\

//ADD DICE CHASER MODE 



  let processCounter = 1;
  let currentBet = initialBet;

  placeBet();

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

  // If last round was CT, resets the bet back to inital, if not, doubles.
  function CT() {
    if (
      document.getElementsByClassName("previous-rolls-item")[19].children[0]
        .className == "coin-ct ml-1 inline-block h-24 w-24 rounded-full"
    ) {
      currentBet = 0.01;

      for (i = 0; i < currentBet * 100; i++) {
        document.getElementsByClassName("bet-input__control")[1].click();
      }

      processCounter = 0;
    } else {
      currentBet *= lossMultiplier;
      processCounter = 3;
    }
  }
}


  
  function stopScript() {
    processCounter = 0;
    isRunning = false;
  }
  