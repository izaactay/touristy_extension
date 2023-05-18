(() => {
    console.log("i am reading google maps!");
    
    chrome.runtime.onMessage.addListener((obj,sender,response) => {
        



        var div = document.createElement("rating_div"); 
        //console.log(document.getElementsByClassName("F7nice mmu3tf"));
        //console.log(document.getElementsByClassName("F7nice mmu3tf").length);
        document.getElementsByClassName("lMbq3e")[0].appendChild(div);
        let score_text = "Percentage of local reviews:"
        score_text = score_text.concat(obj.Score)
        div.innerText=score_text



    });
})();













