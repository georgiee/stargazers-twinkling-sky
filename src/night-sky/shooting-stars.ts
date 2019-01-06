import { ShootingStarData } from './data';
require('./shooting-stars.css');

let uniqueStarID = 0;
class ShootingStar {
  private _id = uniqueStarID++;
  private _mainGroup: SVGElement;
  private _circleShape: SVGElement;
  private _starGroup: SVGElement;
  private _debug = false;
  private _completedCallback: Function;

  constructor(
    private _data: ShootingStarData
  ) {

    this._build();
    this._addDebugView();
    this._updateProperties();

    this._handleShootCompleted = this._handleShootCompleted.bind(this);
    this.element.addEventListener("animationend", this._handleShootCompleted);
  }

  shoot(duration) {
    if(duration) {
      this.element.style.setProperty('--shooting-duration', duration + 'ms');
    }

    // startShootingAnimation by triggering the activation class
    this.element.classList.add('is-shooting');

    return new Promise(resolve => {
      this._completedCallback = resolve;
    });
  }

  setDebug(value) {
    this._debug = value;
    this.element.classList.toggle('is-debugging', this._debug);

    this._updateProperties();
  }

  get debug() {
    return this._debug;
  }

  destroy() {
    this.element.removeEventListener("animationend", this._handleShootCompleted);
    this.element.classList.remove('is-shooting');
  }

  _build() {
    this._mainGroup = document.createElementNS("http://www.w3.org/2000/svg", 'g');
    this._mainGroup.classList.add('shooting-star');

    const circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    circle.classList.add(`shooting-star__shape`);
    circle.setAttribute('cx', `0`);
    circle.setAttribute('cy', `0`);
    circle.setAttribute('fill', `white`);

    const circleGroup = document.createElementNS("http://www.w3.org/2000/svg", 'g');
    circleGroup.style.transform = 'rotate(90deg)';

    circleGroup.appendChild(circle);
    this._mainGroup.appendChild(circleGroup);

    this._circleShape = circle;
    this._starGroup = circleGroup;
  }

  _updateProperties() {
    const radius = this._data.radius;
    const radiusShape = this.debug ? 10 : 1;
    const reverse = this._data.reverse;
    const startAngle = reverse ? 360 : 270;
    const endAngle = reverse ? 270 : 360;

    this._circleShape.setAttribute('r', radiusShape.toString());
    this._circleShape.style.setProperty('--orbit-radius', `${radius}px`);
    this._circleShape.style.setProperty('--orbit-start-angle', startAngle.toString());
    this._circleShape.style.setProperty('--orbit-end-angle', endAngle.toString());
    this._mainGroup.setAttribute('transform', `translate(${this._data.x} ${this._data.y}) rotate(${this._data.rotate})`);
  }

  _addDebugView() {
    const {radius} = this._data;

    // visualize the full orbit area
    const debugOrbit = document.createElementNS("http://www.w3.org/2000/svg", 'circle'); //Create a path in SVG's
    debugOrbit.setAttribute('r', this._data.radius.toString());
    debugOrbit.setAttribute('fill', `yellow`);
    debugOrbit.style.opacity = (0.1).toString();

    // create arc to visualize the travelling path
    const path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    path.setAttribute('d', `M-${radius} 0 A ${radius} ${radius}, 0, 0, 1, 0 ${-radius}`);
    path.setAttribute('stroke', `red`);
    path.setAttribute('stroke-width', `1`);
    path.setAttribute('fill', `none`);

    // hold everything, we can use this to show and hide everything related to debugging visuals
    const debugGroup = document.createElementNS("http://www.w3.org/2000/svg", 'g');
    debugGroup.classList.add('shooting-star__debug');
    debugGroup.appendChild(debugOrbit);
    debugGroup.appendChild(path);

    this._mainGroup.insertBefore(debugGroup, this._starGroup);
  }

  _handleShootCompleted({animationName, type}) {
    if(animationName === 'cometOrbitAnimation') {
      this.element.classList.remove('is-shooting');

      if(this._completedCallback) {
        this._completedCallback(this);
      }
    }
  }

  get element() {
    return this._mainGroup;
  }

  get id() {
    return this._id;
  }
}

type ShootStarsConfig = {root: SVGElement, starlist: ShootingStarData[], debug: boolean};

export function shootingStars({root, starlist, debug = false}: ShootStarsConfig) {
  console.log('☄Adding Shooting Stars 💫')
  const svgGroup = document.createElementNS("http://www.w3.org/2000/svg", 'g');
  root.appendChild(svgGroup);


  const shootingStars = starlist.map(item => {
    const star = new ShootingStar(item);
    star.setDebug(debug);
    svgGroup.appendChild(star.element);

    return star;
  })

  /**
   * shoot a start every 3 to 5 seconds
   */
  loopRandomShooting(shootingStars, 3000, 5000);

  return {
    debug: value => shootingStars.forEach(star => star.setDebug(value))
  }
}

function loopRandomShooting(shootingStars, timeout = 1000, maxTimeout = 1000) {
  const getNextStar = randomStarGenerator(shootingStars);
  const shootDuration = 5000;
  let delayBetweenShoots = timeout;

  if(maxTimeout > timeout) {
    const dTime = maxTimeout - timeout;
    delayBetweenShoots = timeout + Math.random() * dTime;
  }

  function shootNext() {
    const star = getNextStar();
    star.shoot(shootDuration).then(() => {

      // shoot completed, time next shoot
      setTimeout(shootNext, delayBetweenShoots);
    });
  }

  shootNext();
}


/** get the next unique star reference
 * currentlast star is maintained in the closure
 */
function randomStarGenerator(list){
  let stars = [...list];
  let lastStar = null;

  return function nextStar(){
    const index = Math.round(Math.random() * (stars.length - 1));
    const star =  stars[index];

    if(star === lastStar) {
      // another try
      return nextStar();
    }

    lastStar = star;

    return star;
  }
}
