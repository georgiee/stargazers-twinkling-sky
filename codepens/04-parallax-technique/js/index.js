var svg = document.getElementById('nightsky');
var ratioText = document.querySelector('.ratio-text');
var bar01Label = document.querySelector('.bar01 .bar-label');

let scrollChange = 10;
let autoscroll = true;

function removeAutoScroll(event) {
    autoscroll = false;
    window.removeEventListener('scroll', removeAutoScroll);
}
window.addEventListener('mousewheel', removeAutoScroll);

loopScrollRatioUpdate(function (ratio) {
    if(autoscroll) {
        var viewportHeight = document.documentElement.clientHeight;
        document.documentElement.scrollTop += scrollChange;
        if(document.documentElement.scrollTop >= (document.body.clientHeight - viewportHeight)) {
            scrollChange*=-1;
        }

        if(document.documentElement.scrollTop <= 0) {
            scrollChange*=-1;
        }
    }
    
    
    ratioText.textContent = 'Scroll Ratio: ' + Math.round(ratio * 100) / 100;
    svg.style.setProperty('--star-parallax-ratio', "" + ratio);
    bar01Label.textContent = 'Depth 1 (' + Math.round(ratio * 100) + ')';
});

function loopScrollRatioUpdate(cb) {
    var previousScrollTop = -1;
    var RELATIVE_TO_VIEWPORT = false;
    var loop = function () {
        var scrollTop = getScrollTop();
        if (previousScrollTop !== scrollTop) {
            previousScrollTop = scrollTop;
            var ratio = 0;
            var viewportHeight = document.documentElement.clientHeight;
            // this ratio will exceed [0..1] as we measure relative to the viewport without looking for the actual content height
            // this will yield a dense star field at the top and a lower one the further you scroll down
            if (RELATIVE_TO_VIEWPORT) {
                ratio = scrollTop / viewportHeight;
                // alternative: use a calcualte max value to center the dense field
                // const max = (document.body.clientHeight - viewportHeight)/viewportHeight;
                // center round the center (most dense in the center)
                // ratio = scrollTop/viewportHeight - max/2;
            }
            else {
                // ratio will be in the range of [0..1] as we measure relative to the total height
                ratio = scrollTop / (document.body.clientHeight - viewportHeight);
            }
            cb(ratio);
        }
        requestAnimationFrame(loop);
    };
    loop();
}
function getScrollTop() {
    return (document.scrollingElement || document.documentElement).scrollTop;
}