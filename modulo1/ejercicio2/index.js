function changetheme() {
    var element = document.getElementById("theme");
    element.classList.toggle("theme-a");
    element.classList.toggle("theme-b");
}

var button = document.getElementById("btn");
button.addEventListener("click", changetheme);