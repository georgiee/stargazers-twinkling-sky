import * as NightSky from './night-sky/night-sky';
import { runExample01 } from './examples/example01';


// const svgElement = document.getElementById('nightSkySVG');
// NightSky.create(svgElement);


if(Reveal) {
  Reveal.addEventListener( 'slidechanged', function( {currentSlide} ) {
    const state = currentSlide.dataset.state;
    // FinalCredits.run();

    // const codepenToLoad = currentSlide.querySelector('.codepen-lazy-load');
    // if(codepenToLoad) {
    //   console.log('Starting Pen on current slide');
    //   // remove our marker, replace with class codepen so that the native embed function from codepen (__CPEmbed)
    //   // will find it and initialize it.
    //   codepenToLoad.classList.remove('codepen-lazy-load');
    //   codepenToLoad.classList.add('codepen');
    //   __CPEmbed();
    // }
    // console.log()
    // // switch(state) {
    // //   case 'fact-code-01':
    // //     runExample01(currentSlide);
    // //     break;
    // // }
  } );
}