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

let t = 21600;
const timer = document.querySelector(".timer");

setInterval(counter, 1000);


function counter() {
    t--;
    let hours = Math.floor(t / 3600);
    let minutes = Math.floor((t - hours * 3600) / 60);
    let seconds = t % 60;
    if (seconds <= 0) {
        minutes--
    };
    if (minutes <= 0) {
        hours--
    };
    if (hours <= 0) {
        hours = 0
    };
    minutes = minutes < 10 && minutes >= 0 ? "0" + minutes : minutes;
    seconds = seconds < 10 && seconds >= 0 ? "0" + seconds : seconds;
    timer.innerHTML = `${hours}:${minutes}:${seconds}`;
    if (t <= 0) {
        document.querySelector(".timer").innerHTML = "Время вышло";
        timer.style.fontSize = '3rem';
    };
}


let form = document.querySelector('.form__place');
let button = form.querySelector('.button__form');
let info = form.querySelectorAll('.user__info');
let city = form.querySelector('.user__city');
let region = form.querySelector('.user__region');
let payment = form.querySelector('.payment');
let fields = form.querySelectorAll('.field');



form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("clicked");
    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            info[i].style.borderColor = 'red';
        }
    }
});



let option = document.createElement('option');
let input = document.querySelector('.input');
console.log(input.value);
form.onsubmit = function (evt) {
    evt.preventDefault();
    option.textContent = input.value;
    option.value = 'new__item';
    input.value = '';
};

document.querySelector('.user__city').add(option);


let offset = 0;
const slider = document.querySelector('.car__card');
const right = document.querySelector('.vector__right');
const left = document.querySelector('.vector__left');

right.addEventListener('click', function () {
    offset += 1024;
    if (offset > 2048) {
        offset = 0;
    }
    slider.style.left = -offset + 'px';
});
left.addEventListener('click', function () {
    offset -= 1024;
    if (offset < 0) {
        offset = 2048;
    }
    slider.style.left = -offset + 'px';
});

const car = document.querySelector('.car__gazel');
const van = document.querySelector('.car__van');
const truck = document.querySelector('.car__truck');
const cardCar = document.querySelector(".gazel");
const cardVan = document.querySelector(".van");
const cardTruck = document.querySelector(".truck");

car.addEventListener('click', function () {
    offset = 0;
    slider.style.left = -offset + 'px';
})
van.addEventListener('click', function () {
    offset = 1024;
    slider.style.left = -offset + 'px';
})
truck.addEventListener('click', function () {
    offset = 2048;
    slider.style.left = -offset + 'px';
});