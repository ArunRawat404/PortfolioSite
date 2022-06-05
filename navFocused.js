const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 2)) {
            current = section.getAttribute("id")
            // console.log(current);
        }
    })

    navItems.forEach((navItem) => {
        navItem.classList.remove("current-active");
        if (navItem.classList.contains(current)) {
            navItem.classList.add("current-active");
        }
    })

})