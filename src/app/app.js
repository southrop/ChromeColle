'use strict';

var win = chrome.app.window.current();
win.resizeTo(960,945);
win.show(true);

onload = function () {
  var injected = false;
  var webview = document.getElementById('game-frame');
  webview.request.onCompleted.addListener(function (details) {
    console.log(details.url);

    if (!injected) {
      webview.executeScript({
        file: '/src/js/override.js'
      });
      win.resizeTo(800,945);
      injected = true;
      console.log('injected');
    }
  }, {
    urls: ['*://*/kcsapi/*']
  });
};

var app = angular.module('app', []);

app.controller('mainController', function ($scope) {
  $scope.setCookie = function () {
    console.log('triggered');
    document.getElementById('game-frame').executeScript({
      file: "/src/js/cookie.js"
    });
  }
});
