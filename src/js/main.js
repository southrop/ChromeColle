onload = function () {
  var webview = document.getElementById("game-frame");
  webview.request.onBeforeRequest.addListener(function (details) {
    console.log(details.url);
  }, {
    urls: ["*://*.dmm.com/*"]
  });
}