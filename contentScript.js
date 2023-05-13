(() => {
    console.log("i am reading google maps!");
    
    chrome.runtime.onMessage.addListener((obj,sender,response) => {
        const type = obj;

        console.log(type);

        var div = document.createElement("rating_div"); 
        //console.log(document.getElementsByClassName("F7nice mmu3tf"));
        //console.log(document.getElementsByClassName("F7nice mmu3tf").length);
        document.getElementsByClassName("lMbq3e")[0].appendChild(div);
        div.innerText="Test123"



    });
})();













