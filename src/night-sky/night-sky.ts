import { generateStarCoordinates, generateShootingStars, getRandomStars } from './data';
import { twinkleStars } from './twinkle-stars';
import { shootingStars } from './shooting-stars';
import { loopScrollRatioUpdate } from './util';

const STARS = generateStarCoordinates();
const SHOOTING_STARS = generateShootingStars();
let debug = false;

export const create = (svgElement) => {
  console.log('Create Night Sky 🌌');

  const twinkle = twinkleStars({
    root: svgElement,
    starlist: [...STARS, ...getRandomStars(100)],
    debug: debug
  });

  const shooting = shootingStars({
    root: svgElement,
    starlist: SHOOTING_STARS,
    debug: debug
  });


  const btnDebug = document.querySelector('.btn-debug');
  if(btnDebug){
    btnDebug.addEventListener('click', (event: KeyboardEvent) => {
      debug = !debug;

      twinkle.debug(debug);
      shooting.debug(debug);
    })
  }


  // loopScrollRatioUpdate(ratio => {
  //     if(twinkle) {
  //       twinkle.setParallaxRatio(ratio);
  //     }
  // });
}