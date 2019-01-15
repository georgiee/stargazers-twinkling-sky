var svgElement = document.getElementById('nightsky');
var star;
star = createStar({ color: '#ff0000', size: 50, x: 0, y: 0 });
svgElement.appendChild(star);
star = createStar({ color: '#00ff00', size: 100, x: 160, y: 0 });
svgElement.appendChild(star);
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