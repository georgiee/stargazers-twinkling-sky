var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var svg = document.getElementById('nightsky');
var sizeShootingStar = 1;
var sizeSkyStar = 1;
createSky({ count: 350 });
createMeteorShower();
/**
  Meteor Shower
*/
function createMeteorShower() {
    var SHOOT_DELAY = 2000;
    var allShootingStars = [];
    var shootingStar;
    shootingStar = createShootingStar({ x: 100, y: 100, radius: 100, angle: 45, debug: true });
    svg.appendChild(shootingStar);
    allShootingStars.push(shootingStar);
    shootingStar = createShootingStar({ x: 350, y: 100, radius: 50, angleStart: 270, angle: 90, debug: true });
    svg.appendChild(shootingStar);
    allShootingStars.push(shootingStar);
    shootingStar = createShootingStar({ x: 550, y: 750, radius: 600, angleStart: -90, angle: -150, debug: true });
    svg.appendChild(shootingStar);
    allShootingStars.push(shootingStar);
    loopRandomShooting(allShootingStars, function (star, previousStar) {
        star.classList.add('is-shooting');
        if (previousStar) {
            previousStar.classList.remove('is-shooting');
        }
    }, SHOOT_DELAY, SHOOT_DELAY);
}
function createShootingStar(_a) {
    var x = _a.x, y = _a.y, radius = _a.radius, angle = _a.angle, _b = _a.angleStart, angleStart = _b === void 0 ? 0 : _b, _c = _a.debug, debug = _c === void 0 ? false : _c;
    var shootingStarShape = createSVGElement('circle');
    shootingStarShape.classList.add('shooting-star__shape');
    var shootingStar = createSVGElement('g');
    shootingStar.classList.add('shooting-star');
    shootingStar.setAttribute('transform', "translate(" + x + " " + y + ")");
    shootingStarShape.style.setProperty('--shooting-orbit-radius', radius + 'px');
    shootingStarShape.style.setProperty('--shooting-orbit-angle', angle + 'deg');
    shootingStarShape.style.setProperty('--shooting-orbit-angle-start', angleStart + 'deg');
    shootingStarShape.setAttribute('r', sizeShootingStar);
    shootingStarShape.setAttribute('fill', 'white');
    if (debug) {
        debugShootingStar(shootingStar, radius, angleStart, angle);
    }
    shootingStar.appendChild(shootingStarShape);
    return shootingStar;
}
function debugShootingStar(star, radius, angleStart, angle) {
    var debugOrbit = createSVGElement('circle');
    debugOrbit.setAttribute('r', radius.toString());
    debugOrbit.setAttribute('fill', "yellow");
    debugOrbit.style.opacity = (0.3).toString();
    var markCenter = createSVGElement('circle');
    markCenter.setAttribute('r', 5);
    markCenter.setAttribute('fill', 'yellow');
    // create arc to visualize the travelling path
    var arc = createSVGElement('path');
    arc.setAttribute('fill', 'none');
    arc.setAttribute('stroke', 'red');
    arc.setAttribute('stroke-width', 'yellow');
    arc.classList.add('debug__arc');
    arc.setAttribute("d", describeArc(0, 0, radius, angleStart, angle));
    var starDebug = createSVGElement('g');
    starDebug.classList.add('shooting-star__debug');
    starDebug.appendChild(markCenter);
    starDebug.appendChild(debugOrbit);
    starDebug.appendChild(arc);
    star.appendChild(starDebug);
}
function createSVGElement(tag) {
    var element = document.createElementNS("http://www.w3.org/2000/svg", tag);
    return element;
}
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}
// Works for +360 and a total delta of -180
// via https://stackoverflow.com/questions/52056486/draw-reversed-circle-arc-changes-circle-center-coordinates
function describeArc(x, y, radius, startAngle, endAngle) {
    startAngle += 90;
    endAngle += 90;
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
    var sweepFlag = endAngle > startAngle ? 0 : 1;
    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    if (endAngle - startAngle < -180) {
        largeArcFlag = "1";
    }
    var d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, sweepFlag, end.x, end.y
    ].join(" ");
    return d;
}
function loopRandomShooting(shootingStars, cb, timeout, maxTimeout) {
    if (timeout === void 0) { timeout = 5000; }
    if (maxTimeout === void 0) { maxTimeout = 5000; }
    var previousStar = null;
    var getNextStar = randomEntryGenerator(shootingStars);
    var shootDuration = 5000;
    var delayBetweenShoots = timeout;
    if (maxTimeout > timeout) {
        var dTime = maxTimeout - timeout;
        delayBetweenShoots = timeout + Math.random() * dTime;
    }
    function shootNext() {
        var star = getNextStar();
        cb(star, previousStar);
        previousStar = star;
        setTimeout(shootNext, delayBetweenShoots);
    }
    shootNext();
}
function randomEntryGenerator(list) {
    var stars = list.slice();
    var lastStar = null;
    return function nextStar() {
        var index = Math.round(Math.random() * (stars.length - 1));
        var star = stars[index];
        if (star === lastStar) {
            // another try
            return nextStar();
        }
        lastStar = star;
        return star;
    };
}
/**
Night Sky
*/
function createSky(_a) {
    var count = _a.count;
    for (var i = 0; i < count; i++) {
        var coordinates = getRandomCoordinate() /*{x,y}*/;
        var color = getRandomColor();
        var star = createStar(__assign({ color: color, size: sizeSkyStar }, coordinates));
        svg.appendChild(star);
    }
}
function createStar(_a) {
    var size = _a.size, color = _a.color, x = _a.x, y = _a.y;
    var delay = Math.round(-1 * Math.random() * 4000);
    var starShape = createSVGElement('circle');
    starShape.setAttribute('r', size + '');
    starShape.setAttribute('fill', color);
    starShape.classList.add('twinkle-little-star');
    starShape.style.setProperty('--animation-twinkle-delay', delay + 'ms');
    var star = createSVGElement('g');
    star.setAttribute('transform', "translate(" + x + " " + y + ")");
    star.appendChild(starShape);
    return star;
}
function createSVGElement(tag) {
    return document.createElementNS("http://www.w3.org/2000/svg", tag);
}
function getRandomCoordinate() {
    return getRandomPosition({
        width: 960,
        height: 700,
        padding: 10,
        offsetX: 0,
        offsetY: 0
    });
}
function getRandomPosition(_a) {
    var width = _a.width, height = _a.height, _b = _a.offsetX, offsetX = _b === void 0 ? 0 : _b, _c = _a.offsetY, offsetY = _c === void 0 ? 0 : _c, _d = _a.padding, padding = _d === void 0 ? 0 : _d;
    var startX = offsetX + padding;
    var startY = offsetY + padding;
    var maxWidth = width - padding * 2;
    var maxHeight = height - padding * 2;
    return {
        x: startX + maxWidth * Math.random(),
        y: startY + maxHeight * Math.random()
    };
}
function getRandomColor() {
    var availableColors = ['#B5CDFF', '#FFE4CE', '#FF6C00'];
    var index = Math.round(Math.random() * (availableColors.length - 1));
    return availableColors[index];
}
/**
DEBUG
*/
var shootingStar = document.querySelector('.shooting-star');
function toggle() {
    svg.classList.toggle('debug');
}
svg.classList.toggle('debug');