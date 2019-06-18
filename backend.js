function On_EncodeButtonClick(){
    var url_string = document.getElementById("url_to_encode").value;
    var encoded_url = encodeURI(url_string);
    document.getElementById("url_to_decode").value = encoded_url;
}

function On_DecodeButtonClick(){
    var url_string = document.getElementById("url_to_encode").value;
    var decoded_url = decodeURI(url_string);
    document.getElementById("url_to_encode").value = decoded_url;
}

function On_CurrentUrlClick(){
    document.getElementById("url_to_encode").value = tablink;
}

document.querySelector('#encode').addEventListener('click', On_EncodeButtonClick);
document.querySelector('#decode').addEventListener('click', On_DecodeButtonClick);
document.querySelector('#current_url').addEventListener('click', On_CurrentUrlClick);

var tablink;

chrome.tabs.getSelected(null,function(tab) {
    tablink = tab.url;
});