// tag sphere animation

const Texts = [
    'HTML', 'CSS/SASS', 'JAVASCRIPT',
    'TAILWIND',
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





