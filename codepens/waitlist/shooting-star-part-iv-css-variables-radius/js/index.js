var orbitRadiusChanger = document.querySelector('.debug-panel__orbit-radius');
var shootingStar = document.querySelector('.shooting-star');
var debug = document.querySelector('.debug');
updateOrbitRadius(parseInt(orbitRadiusChanger.value, 10));
function updateOrbitRadius(value) {
    shootingStar.style.setProperty('--shooting-orbit-radius', value + 'px');
    debug.style.setProperty('--shooting-orbit-radius-unitless', value);
}
orbitRadiusChanger.addEventListener('input', function (event) {
    var value = parseInt(orbitRadiusChanger.value, 10);
    updateOrbitRadius(value);
});