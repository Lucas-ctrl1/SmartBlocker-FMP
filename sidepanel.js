// Initialize the counter
let totalBlocked = 0;

// Listen for broadcasts from the Detective script (content.js)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'AD_BLOCKED') {
    totalBlocked++; // Add 1 to the math
    
    // Update the UI
    document.getElementById('block-count').innerText = totalBlocked;
    
    // Optional: Add a cool little pop animation using CSS if you want later
  }
});
