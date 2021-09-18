window.addEventListener("load", showPage, false);

document.body.className += "js-loading"

function showPage(){
    document.body.className = document.body.className.replace("js-loading", "");
}

document.querySelector(".burger").addEventListener("click", opac);

function opac(){
    document.querySelector("header").classList.toggle("invisibility");
    document.querySelector(".burger").classList.toggle("display");
}

