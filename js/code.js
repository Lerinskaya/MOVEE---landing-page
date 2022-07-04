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
const readLess = document.querySelectorAll(".close");
parent.addEventListener("click", function (event) {
    let el = event.target;
    for (let i = 0; i < readMore.length; i++) {
        if (el === readMore[i]) {
            moreText[i].classList.toggle("open");
            readMore[i].style.display = "none";
            readLess[i].style.display = "block";
            moreText[i].style.display = "inline";
            dots[i].style.display = "none";
        }
        else {
            readMore[i].style.display = "block";
            readLess[i].style.display = "none";
            dots[i].style.display = "inline";
            moreText[i].style.display = "none";
        }
    }
});
