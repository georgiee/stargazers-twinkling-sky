var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var svgElement = document.getElementById('nightsky');
// no sky yet
createSky({ count: 250 });
// --- already existing code
function createSky(_a) {
    var count = _a.count;
    for (var i = 0; i < count; i++) {
        var coordinates = getRandomCoordinate() /*{x,y}*/;
        var color = getRandomColor();
        var star = createStar(__assign({ color: color, size: 1 }, coordinates));
        svgElement.appendChild(star);
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
        offsetX: -480,
        offsetY: -350
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