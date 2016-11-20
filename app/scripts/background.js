// Enable chromereload by uncommenting this line:
import 'chromereload/devonly';

// const geoip = require('geoip-country');
//
// let ip = "207.97.227.239";
// let geo = geoip.lookup(ip);

// console.log(geo);


const bing = require('bing-image');

bing.getPicUrl(function(err, url) {
  console.log(url);
});

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(function (tabId) {
  chrome.pageAction.show(tabId);
});

console.log('\'Allo \'Allo! Event Page for Page Action');
