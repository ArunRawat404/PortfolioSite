// For Jiggle effect

const characters = document.getElementsByClassName('alpha');

for (let i = 0; i <= characters.length; i++) {

    characters[i].addEventListener('mouseover', function (e) {
        characters[i].classList.add('animated')
    })

    characters[i].addEventListener('animationend', function (e) {
        characters[i].classList.remove('animated');
    });



}
