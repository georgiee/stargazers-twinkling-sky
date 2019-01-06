import { getStarTemperature } from '../night-sky/util';
require('./example01.css');

type StarData = {
  x: number,
  y: number,
  size: number,
  color?: number | string
}

export function runExample01(section: HTMLElement) {
  console.log('run example 01');
  section.querySelector('.svg-anchor');
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute('viewbox', '0 0 100 100');
  svg.classList.add('example01');
  svg.appendChild(createRandomStar());

  section.appendChild(svg);
}

function createRandomStar() {
  const data: StarData = {
    x: 100 * Math.random(),
    y: 100 * Math.random(),
    size: 10 + 10 * Math.random(),
    color: getRandomColor()
  }


  return createStar(data);
}

function createStar(data: StarData) {
  const star = createSVGElement('g')
  const starShape = createSVGElement('circle')
  star.appendChild(starShape);

  star.setAttribute('transform', `
    translate(${data.x} ${data.y})
  `);
  starShape.classList.add('star__shape');
  starShape.setAttribute('r', data.size + '');
  starShape.style.setProperty('--star-color', data.color + '');

  return star;
}

const createSVGElement = tag => (
  document.createElementNS("http://www.w3.org/2000/svg", tag)
);


function getRandomColor() {
  const colorRGB = getStarTemperature();
  const color = `rgb(${colorRGB[0]},${colorRGB[1]},${colorRGB[2]})`;

  return color;
}