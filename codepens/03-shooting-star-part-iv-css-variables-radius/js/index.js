var orbitRadiusChanger = document.querySelector('.debug-panel__orbit-radius');
var shootingStar = document.querySelector('.shooting-star');
var debug = document.querySelector('.debug');
let radius = parseInt(orbitRadiusChanger.value, 10);

let maxRadius = 100;
let minRadius = 10;

updateOrbitRadius(radius);

function updateOrbitRadius(value) {
    shootingStar.style.setProperty('--shooting-orbit-radius', value + 'px');
    debug.style.setProperty('--shooting-orbit-radius-unitless', value);
}


let radiusDelta = 10;

const intervalAutoChange = setInterval(() => {
	if(radius + radiusDelta > maxRadius || radius + radiusDelta < minRadius ) {
		radiusDelta *= -1;
	}
	radius += radiusDelta;
    
    orbitRadiusChanger.value = radius;
	updateOrbitRadius(radius);
}, 250);


orbitRadiusChanger.addEventListener('input', function (event) {
    var value = parseInt(orbitRadiusChanger.value, 10);

    updateOrbitRadius(value);
    clearInterval(intervalAutoChange);
});