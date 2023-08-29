// Handle click events on the browser action icon
chrome.browserAction.onClicked.addListener(function(tab) {
    // Toggle the popup for the tab
    chrome.browserAction.getPopup({ tabId: tab.id }, function(popup) {
      if (popup === 'popup.html') {
        chrome.browserAction.setPopup({ tabId: tab.id, popup: '' });
      } else {
        chrome.browserAction.setPopup({ tabId: tab.id, popup: 'popup.html' });
      }
    });
  });
  
  // Communicate with content script
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'startScript') {
      // Execute your content script logic here
      console.log('Script started with initial bet:', request.initialBet, 'and loss multiplier:', request.lossMultiplier);
    } else if (request.action === 'stopScript') {
      // Stop the script if needed
      console.log('Script stopped');
    }
  });
  