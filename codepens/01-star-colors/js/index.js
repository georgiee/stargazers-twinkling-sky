var svgElement = document.getElementById('nightsky');
var star;
star = createStar({ color: '#B5CDFF', size: 20, x: 50, y: 0 });
svgElement.appendChild(star);
star = createStar({ color: '#FFE4CE', size: 50, x: 180, y: 0 });
svgElement.appendChild(star);
star = createStar({ color: '#FF6C00', size: 100, x: 400, y: 0 });
svgElement.appendChild(star);
function createStar(_a) {
    var size = _a.size, color = _a.color, x = _a.x, y = _a.y;
    var starShape = createSVGElement('circle');
    starShape.setAttribute('r', size + '');
    starShape.setAttribute('fill', color);
    var star = createSVGElement('g');
    star.setAttribute('transform', "translate(" + x + " " + y + ")");
    star.appendChild(starShape);
    return star;
}
function createSVGElement(tag) {
    return document.createElementNS("http://www.w3.org/2000/svg", tag);
}