const hamburger = document.querySelector(".bar-icon");
const menu = document.querySelector("#item");
let selectAnchor = 'a[href^="#"]';
let listAnchor = document.querySelectorAll(selectAnchor);

hamburger.addEventListener("click", mobileView);

function mobileView() {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
}

listAnchor.forEach(link => {
    link.onclick = function (e) {
        e.preventDefault();

        let destination = document.querySelector(this.hash);

        destination.scrollIntoView({
            'behavior': 'smooth'
        });
    }
})