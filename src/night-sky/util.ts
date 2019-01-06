// via https://github.com/mattdesl/kelvin-to-rgb/blob/master/index.js
export function kelvinToRGB (temp, out = null) {
  if (!Array.isArray(out)) {
    out = [0, 0, 0]
  }

  temp = temp / 100
  var red, blue, green

  if (temp <= 66) {
    red = 255
  } else {
    red = temp - 60
    red = 329.698727466 * Math.pow(red, -0.1332047592)
    if (red < 0) {
      red = 0
    }
    if (red > 255) {
      red = 255
    }
  }

  if (temp <= 66) {
    green = temp
    green = 99.4708025861 * Math.log(green) - 161.1195681661
    if (green < 0) {
      green = 0
    }
    if (green > 255) {
      green = 255
    }
  } else {
    green = temp - 60
    green = 288.1221695283 * Math.pow(green, -0.0755148492)
    if (green < 0) {
      green = 0
    }
    if (green > 255) {
      green = 255
    }
  }

  if (temp >= 66) {
    blue = 255
  } else {
    if (temp <= 19) {
      blue = 0
    } else {
      blue = temp - 10
      blue = 138.5177312231 * Math.log(blue) - 305.0447927307
      if (blue < 0) {
        blue = 0
      }
      if (blue > 255) {
        blue = 255
      }
    }
  }

  out[0] = Math.floor(red)
  out[1] = Math.floor(green)
  out[2] = Math.floor(blue)
  return out
}

export const debounce = function(fn, duration) {
  let timeout = null
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), duration)
  }
}


export const getScrollTop = function() {
  return (document.scrollingElement || document.documentElement).scrollTop
}


export function getStarTemperature() {
  const probe = Math.random(); //for probability between star types
  const randomRangeRounded = (max, min = 0) => ~~(Math.random() * (max - min) + min + 0.5)

  // 20% of all cases is a blue star (this is not a science fact, just for here)
  if (probe < 0.1) {
    // create a blue star
     const min = 10000;
     const max = 40000;
     const value = randomRangeRounded(max, min);
    return kelvinToRGB(value);
  // another 20% for red dwarfs (very red)
  } else if (0.1 < probe && probe < 0.2 ) {
     // red dwarf < 3500
    const min = 0
    const max = 3500
    const value = randomRangeRounded(max, min);
    return kelvinToRGB(value);
  // usual ones 80%
  } else {
    const min = 3500
    const max = 10000
    const value = randomRangeRounded(max, min);
    return kelvinToRGB(value);
  }
}



export function loopScrollRatioUpdate(cb) {
  let previousScrollTop = -1;
  const RELATIVE_TO_VIEWPORT = true;

  const loop = function() {
    const scrollTop = getScrollTop();

    if (previousScrollTop !== scrollTop) {
      previousScrollTop = scrollTop;

      let ratio = 0;
      const viewportHeight = document.documentElement.clientHeight;

      // this ratio will exceed [0..1] as we measure relative to the viewport without looking for the actual content height
      // this will yield a dense star field at the top and a lower one the further you scroll down
      if(RELATIVE_TO_VIEWPORT) {
        ratio = scrollTop/viewportHeight;

        // alternative: use a calcualte max value to center the dense field
        // const max = (document.body.clientHeight - viewportHeight)/viewportHeight;
        // center round the center (most dense in the center)
        // ratio = scrollTop/viewportHeight - max/2;
      }else {
        // ratio will be in the range of [0..1] as we measure relative to the total height
        ratio = scrollTop/(document.body.clientHeight - viewportHeight);
      }

      cb(ratio);
    }

    requestAnimationFrame(loop);
  }

  loop();
}
