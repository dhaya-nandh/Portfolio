var navbar=document.querySelector(".nav-links")
var xmark=document.getElementById("xmark")
var bars=document.getElementById("bars")
function hide(){
    xmark.style.display="none"
    navbar.style.display="none"
    bars.style.display="block"
}
function show(){
    xmark.style.display="block"
    navbar.style.display="block"
    bars.style.display="none"
}