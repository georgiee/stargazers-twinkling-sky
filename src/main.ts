import * as NightSky from './night-sky/night-sky';
import { runExample01 } from './examples/example01';


// const svgElement = document.getElementById('nightSkySVG');
// NightSky.create(svgElement);

function createCreditsFrame() {
  let destroyed = false;
  const container = document.querySelector('.global-container');
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'codepens/05-stargazers-final-credits');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('width', '100%');
  iframe.setAttribute('height', '10)%');
  iframe.style.cssText = `
    width: 100vw;
    height: 100vh;
  `
  container.appendChild(iframe);

  function destroy() {
    if(!destroyed) {
      console.log('destroy iframe')
      container.removeChild(iframe);
    }
  }

  return {
    destroy
  }
}

let creditsFrame;
if(Reveal) {
  Reveal.addEventListener( 'slidechanged', function( {currentSlide} ) {
    const state = currentSlide.dataset.state;
    if(state === 'final-credits') {
      console.log('cretae iframe');
      creditsFrame = createCreditsFrame()
    }else if(creditsFrame) {
      creditsFrame.destroy();
      creditsFrame = null;
    }

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