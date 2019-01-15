var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var svgElement = document.getElementById('nightsky');
createSky({ count: 350 });
function createSky(_a) {
    var count = _a.count;
    for (var i = 0; i < count; i++) {
        var coordinates = getRandomPosition({
            width: 960,
            height: 700,
            padding: 50,
            offsetX: -480,
            offsetY: -350
        });
        var star = createStar(__assign({ color: getRandomStarTemperature(), size: 2 }, coordinates));
        svgElement.appendChild(star);
    }
}
/* ---- previous code */
function createStar(data) {
    /* Part 1)
      Create the follow SVG structure
      <g>
        <circle></circle>
      </g>
    */
    var star = createSVGElement('g');
    var starShape = createSVGElement('circle');
    star.appendChild(starShape);
    /* Part 2)
      Assign the star values color to as the fill, and size as the radius
      The position is applied through a transform property that works like in CSS.
    */
    star.setAttribute('transform', "translate(" + data.x + " " + data.y + ")");
    starShape.setAttribute('r', data.size + '');
    starShape.setAttribute('fill', data.color);
    return star;
}
function createSVGElement(tag) {
    var element = document.createElementNS("http://www.w3.org/2000/svg", tag);
    return element;
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
function getRandomStarTemperature() {
    var availableColors = ['#B5CDFF', '#FFE4CE', '#FF6C00'];
    var index = Math.round(Math.random() * (availableColors.length - 1));
    return availableColors[index];
}