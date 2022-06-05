// back to top button


let scrollToTopBtn = document.getElementById("backtotop")
let scrollToTopBtn2 = document.getElementById("backtotop2")

let rootElement = document.documentElement

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

scrollToTopBtn.addEventListener('click', scrollToTop)

scrollToTopBtn2.addEventListener('click', scrollToTop)



// For scroll animation

let progressBarRight = document.getElementById("progressBarRight");
let progressBarLeft = document.getElementById("progressBarLeft");

let totalHeight = document.body.scrollHeight - window.innerHeight;

function scrollFunction() {
    let progress = (window.pageYOffset / totalHeight) * 100;
    progressBarRight.style.height = progress + "%";
    progressBarLeft.style.height = progress + "%";
}

window.addEventListener('scroll', scrollFunction)


// dynamic year

const date = new Date();
let currentYear = date.getFullYear();
document.getElementById("copyright").innerHTML = "Copyright © " + currentYear + " Arun Rawat"


// dark mode

function darkMode() {
    let element = document.body;
    element.classList.toggle("toggle-mode");

    let themeIcon = document.getElementById("themeIcon");
    if (themeIcon.classList.contains("dark-mode-icon")) {
        themeIcon.classList.remove("dark-mode-icon");
        themeIcon.classList.add("light-mode-icon")
        document.getElementById("backtotopimg").src = "./images/backtotop-light.png";
        document.getElementById("backtotopimg2").src = "./images/backtotop-light.png";

    } else {
        themeIcon.classList.remove("light-mode-icon");
        themeIcon.classList.add("dark-mode-icon")
        document.getElementById("backtotopimg").src = "./images/backtotop.png";
        document.getElementById("backtotopimg2").src = "./images/backtotop.png";
    }
}
