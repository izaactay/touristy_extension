
chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("google.com/maps/place")) {
        const queryParameters = tab.url.split("/")[5];
        console.log(queryParameters);
        console.log("logged!");

        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            Name: queryParameters
        });
    }
});
