// Enable chromereload by uncommenting this line:
import 'chromereload/devonly';

chrome.runtime.onConnect.addListener(function (port) {
  console.assert(port.name === 'mainToBackground');
  port.onMessage.addListener(function (msg) {
    if (msg.get === 'statistics') {
      let ip = '78.56.129.211';
      port.postMessage({statistics: 'asdfasdf1'});
    }
  });
});

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(function (tabId) {
  chrome.pageAction.show(tabId);
});

console.log('\'Allo \'Allo! Event Page for Page Action');
