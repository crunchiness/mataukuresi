import $ from 'jquery'

  console.log('\'Allo \'Allo! Content script');

const port = chrome.runtime.connect({name: 'mainToBackground'});
port.postMessage({get: 'statistics'});
port.onMessage.addListener(function (msg) {
  if (msg.statistics) {
    // div.comment-date;
    console.log(msg.statistics);
  }
});

function getCountry(element, ip) {
  $.ajax(`https://freegeoip.net/json/${ip}`)
    .done(function (data) {
      const countryCode = data.country_code.toLowerCase();
      const flagUrl = chrome.extension.getURL(`images/flags/${countryCode}.png`);
      $(element).after(`<img class="little-flag" title="${data.country_name}" src="${flagUrl}"/>`);
      console.log(data);
    })
    .fail(function (error) {
      console.log('fail', error);
    });
}

window.addEventListener('load', function load(event) {
  window.removeEventListener('load', load, false); //remove listener, no longer needed

  const ipRegex = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/g;

  // let n = 0;

  $('.comment-date').each(function (index) {
    let ip = $(this).text().match(ipRegex);
    if (ip && ip.length === 1) {
      getCountry(this, ip[0]);
      // console.log(ip[0]);
      // if (n < 5) {
      //   getCountry(this, ip[0]);
      //   n++;
      // }
    }
  });



}, false);

// #comments-list > div.comment-post.comment-post-118898902.comment-avatar-registered.comment-post-full-content > div.comment-date


