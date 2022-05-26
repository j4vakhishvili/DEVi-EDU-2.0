const date = new Date();
let year = date.getFullYear();
document.getElementById("date").innerHTML = "2021 - " + year;

//openNav
function openNav() {
    document.getElementById("nav").style.top = "0";
    document.getElementById("openNav").style.display = "none";
    document.getElementById("closeNav").style.display = "block";
}
  
function closeNav() {
    document.getElementById("nav").style.top = "-96%";
    document.getElementById("openNav").style.display = "block";
    document.getElementById("closeNav").style.display = "none";
}