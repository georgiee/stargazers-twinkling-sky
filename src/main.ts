import * as NightSky from './night-sky/night-sky';
import { runExample01 } from './examples/example01';

// const svgElement = document.getElementById('nightSkySVG');
// NightSky.create(svgElement);

if(Reveal) {
  Reveal.addEventListener( 'slidechanged', function( {currentSlide} ) {
    const state = currentSlide.dataset.state;

    // switch(state) {
    //   case 'fact-code-01':
    //     runExample01(currentSlide);
    //     break;
    // }
  } );
}