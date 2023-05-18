var curr_place_id = '';


chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("google.com/maps/place")) {

        const queryParameters = tab.url.split("/");
        var place_name = queryParameters[5];
        var data = queryParameters[7];
        var place_id = data.split('5!1s')[1].split('!8m2!')[0];

        
        console.log(place_id);
        if (place_id != curr_place_id){

            update(place_id,tabId,place_name);
            curr_place_id = place_id;
        }
    }
});

async function update(place_id,tabId,place_name) {
    let url = "https://touristy-extension.herokuapp.com/";
    url = url.concat(place_id);
    const response  = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData);
    chrome.tabs.sendMessage(tabId, {
        type: "NEW",
        Name: place_name,
        Score: jsonData
    });
    console.log('message sent')
}