let themes = ["pi", "ye", "bl"];
let theme = themes[1];
let index = 0;
let target = new Date('January 1 2024 00:00:00');

function inc(){
    theme = themes[index];
    index += 1;
    if(index === 3){
        index = 0;
    }
}

var duration = 7.5 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100, scalar: 1.5 };

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

function banner(){
    document.getElementById('cont').innerHTML = `
        <div class="msg">
        <span class="cons">console</span>
        <span class="operator">.</span>
        <span class="method">log</span>
        <span class="operator">(</span>
        <span class="string">"Happy New Year 2024"</span>
        <span class="operator">);</span>
        </div>
    `;
    
    var interval = setInterval(shoot, 250);
    function shoot() {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
        return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }
}

var continuous = setInterval(function(){
    let current = new Date();
    let difference = (target.getTime()-current.getTime()).toString().split("");
    difference.pop(); difference.pop(); difference.pop()
    document.getElementById('timeContainer').innerHTML = "";
    let todo = Number(difference.join("")).toString(2).split("");
    if(Number(difference.join("")) <= 0){
        clearInterval(continuous);
        banner();
    }
    todo.forEach(function(el){
        document.getElementById("timeContainer").innerHTML += `<span class=${theme}>${el}</span>`;
        inc();
    });
}, 1000);
