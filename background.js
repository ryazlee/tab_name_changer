chrome.browserAction.onClicked.addListener(function(tab) {
  var curr_title = tab.title;
  var message = 'Current tab name: ' + curr_title + '\rEnter your desired name for this tab below';
  var new_title = prompt(message, curr_title);
  if (new_title == null) {
    new_title = curr_title;
  }
  console.log(new_title);
  script_code = 'document.title="'+new_title+'"'
  chrome.tabs.executeScript({
    code: script_code
  });
});
