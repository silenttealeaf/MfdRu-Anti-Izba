// ==UserScript==
// @name         MFD-ANTI-UZBUSHKA-alpha
// @version      0.1
// @description  try to help newbie
// @author       SilentTeaLeaf
// @include     http://*mfd.ru*
// @include     https://*mfd.ru*
// @include     https://*mfd.ru*
// @grant        none
// ==/UserScript==

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQx061ymq2FRQ7W5jossJzi1z9Xwn7tQQ5J4Jk_LBLI-xnLMLK7cXHQ1qPtuvbWHlrA06qjM5qwE5PB/pub?gid=0&single=true&output=csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

var KoKoIds = [];

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var i=1;
    while (i<allTextLines.length){
        entries = allTextLines[i].split(',');
        KoKoIds.push(entries[0]);
        i++;}

for (j=0;j<KoKoIds.length;j++){
      var posts = document.querySelectorAll("a[href='/forum/poster/?id="+KoKoIds[j]+"']");
      var textNode = document.createElement('b');
      textNode.innerHTML = '<b>КУКОРЕКОЛКА ИЗБ<b>';

for (var k = 0, l = posts.length; k < l; k++) {
    var el = posts[k];
    console.log("Warning, " + el.className  + "!");
    if (el.className === "mfd-poster-link"){
    el.parentNode.parentNode.parentNode.style.opacity = 0.4;
    el.parentNode.parentNode.parentNode.innerHTML += "<b>КУКОРЕКОЛКА ИЗБ<b>";
    } else {
    el.parentNode.parentNode.style.opacity = 0.4;
    el.parentNode.parentNode.innerHTML += "<b>КУКОРЕКОЛКА ИЗБ<b>";
    }
}}
}