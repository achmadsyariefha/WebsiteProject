// function barFunction(){
//     var x = document.getElementById("item");
//     if (x.style.display === "block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
// }

const hamburger = document.querySelector(".bar-icon");
const menu = document.querySelector("#item");

hamburger.addEventListener("click", mobileView);

function mobileView() {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
}