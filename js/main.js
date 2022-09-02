// Nav
let nav = document.querySelectorAll(".nav-link");
nav.forEach((li) => {
    li.addEventListener("click", removeActiveLinks);
});
// Remove Acrive Class From All List And Add To Current
function removeActiveLinks() {
    nav.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
};


// Typewriter Landing
let myText = "Taste the Creativity",
    i = 0;
window.onload = function () {
    'use strict';
    let typeWriter = setInterval(function () {
        document.getElementById("type").textContent += myText[i];
        i = i + 1;
        if (i > myText.length - 1) {
            clearInterval(typeWriter);
        }
    }, 100);
};


// Shuffel Our Work
let switcher = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.querySelectorAll(".all"));
switcher.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImage);
});

// Remove Acrive Class From All List And Add To Current
function removeActive() {
    switcher.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
};

// Manage Images
function manageImage() {
    imgs.forEach((img) => {
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.switch).forEach((ele) => {
        ele.style.display = "block";
    });
};