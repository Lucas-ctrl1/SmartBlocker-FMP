// The Smart Heuristic Engine
const adKeywords = ['sponsored', 'advertisement', 'promoted', 'ad-banner'];

const observer = new MutationObserver((mutations) => {
  mutations.forEach(() => {
    adKeywords.forEach(keyword => {
      // Find elements with suspicious class names or IDs
      const ads = document.querySelectorAll(`[class*="${keyword}"], [id*="${keyword}"]`);
      
      ads.forEach(ad => {
        // Only block it if we haven't already
        if (ad.style.display !== 'none') {
          ad.style.display = 'none'; // Invisibility Cloak
          
          // Broadcast a message to the Side Panel
          chrome.runtime.sendMessage({ type: 'AD_BLOCKED' });
        }
      });
    });
  });
});

// Start watching the webpage the moment it loads
observer.observe(document.body, { childList: true, subtree: true });
