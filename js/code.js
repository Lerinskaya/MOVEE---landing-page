let burger = document.querySelector("#burger");
let popup = document.querySelector(".popup");
let body = document.body;
let menu = document.querySelector("#menu").cloneNode(1);
burger.addEventListener("click", burgerHandler);
function burgerHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    burger.classList.toggle("active");
    body.classList.toggle("noscroll");
}
const btn = document.querySelector(".up");
const content = document.querySelector(".checkbox__points");

btn.addEventListener("click", btnClick);

function btnClick() {
    var panel = document.querySelector(".checkbox__points");
    if (panel.style.display === "grid") {
        panel.style.display = "none";
    } else {
        panel.style.display = "grid";
    }
}
let vector = document.querySelector(".form__point-dop");
vector.addEventListener("click", vectorHandler);
function vectorHandler(e) {
    vector.classList.toggle("active");
}

const parent = document.querySelector(".review__block");
const dots = document.querySelectorAll(".dots");
const moreText = document.querySelectorAll(".more");
const readMore = document.querySelectorAll(".read");
parent.addEventListener("click", function (event) {
    if (event.target.closest(".read")) {
        myFunction();
        console.log("click");
    }
});
function myFunction() {
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        readMore.innerHTML = "Читать полноcтью";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        readMore.innerHTML = "Скрыть";
        moreText.style.display = "inline";
    }
}


