import { TwinkleStarData } from './data';
import { getScrollTop, getStarTemperature } from './util';

require('./twinkle-stars.css');
class Star {
  private _mainGroup: SVGElement;
  private _parallaxGroup: SVGElement;
  private _translateGroup: SVGElement;
  private _shape: SVGElement;
  private _debug: boolean = false;

  constructor(
    private _data: TwinkleStarData,
    private _index: number
  ) {
    this._build();
    this._updateProperties();
  }

  setDebug(value) {
    this._debug = value;
    this.element.classList.toggle('is-debugging', this._debug);

    this._updateProperties();
  }

  get debug() {
    return this._debug;
  }

  _build () {
    // overall container
    this._mainGroup = document.createElementNS("http://www.w3.org/2000/svg", 'g');
    this._mainGroup.classList.add('star');

    // hold the position translation
    const translateGroup = document.createElementNS("http://www.w3.org/2000/svg", 'g');
    translateGroup.classList.add('star__translate');

    // hold the parallax translation
    const parallaxGroup = document.createElementNS("http://www.w3.org/2000/svg", 'g');
    parallaxGroup.classList.add('star__parallax');

    // create the star shape
    const shape = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    shape.classList.add('star__shape');

    // append all those elements
    translateGroup.appendChild(shape);
    parallaxGroup.appendChild(translateGroup);
    this._mainGroup.appendChild(parallaxGroup)

    this._shape = shape;
    this._parallaxGroup = parallaxGroup;
    this._translateGroup = translateGroup;
  }

  _updateProperties() {
    const index = this._index;
    const size = this._debug ? 10 : this._data.size;
    const delay = index * 100 + 500 * Math.random();
    const brightness = 1;
    const duration = 3000 + Math.random() * 4000;



    let color = this._data.color;

    if(color === null) {
      let colorRGB = getStarTemperature();
      color = `rgb(${colorRGB[0]},${colorRGB[1]},${colorRGB[2]})`;
    }

    const parallaxDepth = 1 + index%5; //create 5 parallax layer
    const parallaxIntensity = 200; // maximum translation basically.

    this._parallaxGroup.style.setProperty('--star-parallax-depth', `${parallaxDepth}`);
    this._parallaxGroup.style.setProperty('--star-parallax-intensity', `${parallaxIntensity}`);

    this._translateGroup.setAttribute('transform', `translate(${this._data.x} ${this._data.y})`);

    this._shape.setAttribute('r', size.toString());
    this._shape.style.setProperty('--star-animation-delay', `${-delay}ms`);
    this._shape.style.setProperty('--star-animation-delay', `${-delay}ms`);

    this.element.style.setProperty('--star-glowing-brightness', `${brightness}`);
    this.element.style.setProperty('--star-glowing-duration', `${duration}ms`);
    this.element.style.setProperty('--star-pulse-duration', `${duration}ms`);
    this.element.style.setProperty('--star-color', `${color}`);
  }

  get element() {
    return this._mainGroup;
  }
}

type TwinkleStarsConfig = { root: HTMLElement,  starlist: TwinkleStarData[], debug: boolean };

export function twinkleStars({root, starlist, debug = false} : TwinkleStarsConfig) {
  // create the overall container
  const allStarsGroup = document.createElementNS("http://www.w3.org/2000/svg", 'g');
  allStarsGroup.classList.add('twinkling-stars');
  root.appendChild(allStarsGroup);

  // add the stars
  const stars = starlist.map((data, index) => {
    const star = new Star(data, index);
    star.setDebug(debug);

    allStarsGroup.appendChild(star.element);
    return star;

  });

  return {
    debug: value => stars.forEach(star => star.setDebug(value)),
    setParallaxRatio: value => {
      allStarsGroup.style.setProperty('--star-parallax-translate', `${value}`);
    }
  }
}