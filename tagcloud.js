// tag sphere animation

const Texts = [
    'HTML', 'CSS', 'JAVASCRIPT',
    'REACT',
    'PYTHON', 'SELENIUM',
    'NODEJS', 'MONGODB',
    'EXPRESS', 'WEB SCRAPING', 'JQUERY',
];




var tagCloud = TagCloud('.Sphere', Texts, {
    radius: 300,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',

    // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
    direction: 135,

    // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
    keep: true,

});



// addEventListener('resize', () => {
//     if (window.innerWidth < 600) {
//         tagCloud.radius = 100;
//     }
// })





// Giving color to each text in sphere
// var color = '#b0dedf';
// document.querySelector('.skills-sphere').style.color = color;
