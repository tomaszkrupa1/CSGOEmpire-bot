document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", function () {
    const initialBet = parseFloat(document.getElementById("initial-bet").value);
    const multiplier = parseFloat(document.getElementById("multiplier").value);

    // Save these values in Chrome storage or send them to the content script.
    // Implement your betting logic here.
  });
});
