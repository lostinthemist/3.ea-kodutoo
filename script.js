console.log('tere')

window.addEventListener('click', function () {
    chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
        console.log(response.farewell);
    });
})

