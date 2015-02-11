chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create('src/index.html', {
    id: 'mainWindow',
    bounds: {
      width: 960,
      height: 945
    }
  });
});
