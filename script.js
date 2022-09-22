const mainPic = document.querySelectorAll(".main-pic");
const mainSection = document.querySelectorAll(".main-section");
const backward = document.querySelector(".left");
const forward = document.querySelector(".right");


forward.addEventListener("click", next);
backward.addEventListener("click", prev);

function next() {

    const currentPic = document.querySelector(".active-pic");
    currentPic.classList.remove("active-pic");
    const currentSection = document.querySelector(".active-section");
    currentSection.classList.remove("active-section");

    if(currentPic.nextElementSibling &&
       currentPic.nextElementSibling.classList.contains("main-pic")
    ) {
        currentPic.nextElementSibling.classList.add("active-pic");
        currentSection.nextElementSibling.classList.add("active-section");
       } else {
        mainPic[0].classList.add("active-pic");
        mainSection[0].classList.add("active-section");
       }
}

function prev() {

    const currentPic = document.querySelector(".active-pic");
    currentPic.classList.remove("active-pic");
    const currentSection = document.querySelector(".active-section");
    currentSection.classList.remove("active-section");

    if(currentPic.previousElementSibling &&
       currentPic.previousElementSibling.classList.contains("main-pic")
    ) {
        currentPic.previousElementSibling.classList.add("active-pic");
        currentSection.previousElementSibling.classList.add("active-section");
    } else {
        mainPic[mainPic.length - 1].classList.add("active-pic");
        mainSection[mainSection.length - 1].classList.add("active-section");
    }

}


const toggle = document.querySelector(".toggle");
const toggleMenu = document.querySelector(".menu-list");

toggle.addEventListener("click", () => {
    if(toggle.classList.contains("close")) {
        toggle.classList.remove("close");
        toggle.classList.add("open");
        toggleMenu.classList.remove("hidden");
    } else if (toggle.classList.contains("open")) {
        toggle.classList.remove("open");
        toggle.classList.add("close");
        toggleMenu.classList.add("hidden");
    }
})