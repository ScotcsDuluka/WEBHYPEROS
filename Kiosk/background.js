// ChromeOS Kiosk App — Background Script
// Launches the launcher in fullscreen kiosk window

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    id: 'hyperos_launcher',
    fullscreen: true,
    frame: 'none',
    resizable: false,
    alwaysOnTop: true,
    state: 'fullscreen',
    hidden: false,
    innerBounds: {
      minWidth: 0,
      minHeight: 0
    }
  }, function(win) {
    // Force fullscreen after window created
    win.fullscreen();
    // Prevent window from being closed by accident
    win.onClosed.addListener(function() {
      // Kiosk mode will relaunch automatically
    });
  });
});

// Keep the app alive
chrome.runtime.onSuspend.addListener(function() {
  // Prevent suspension
});
