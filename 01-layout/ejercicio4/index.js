const urlBase = "https://www.bbcamerica.com/shows/the-last-kingdom/cast-crew/";

function moreInfo(url) {
    location.href = urlBase + url;
}

var uthredBtn = document.getElementById("btn-uhtred");
uthredBtn.addEventListener("click", () => moreInfo("uhtred"));

var bridaBtn = document.getElementById("btn-brida");
bridaBtn.addEventListener("click", () => moreInfo("brida"));

var beoccaBtn = document.getElementById("btn-beocca");
beoccaBtn.addEventListener("click", () => moreInfo("beocca"));