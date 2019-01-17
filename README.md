# Stargazers Talk

A talk about creating a twinkling night sky with CSS & SVG (and some JS for our comfort only).

[View Slides](https://georgiee.github.io/stargazers-twinkling-sky/)
---

## ✨Facts collected✨
+ Hot Gas Ball
+ Temperature is color
+ Stars have different sizes
+ Star Count
+ Stars can twinkle
+ Flying Burning Rock
+ Meteor Shower
+ Star Parallax

## Code Examples
I created and collected dozens of codepens while preparing this talk. You can find them here:
[codepen.io/collection/DbRbQL/](http://codepen.io/collection/DbRbQL/)

For the actual talk I exported them and pallced them in the folder `codepens`
where I added some small & quick changes as needed. So the sources are only almost the same.

## URLS
+ [codepen.io/collection/DbRbQL/](http://codepen.io/collection/DbRbQL/)
+ [Origamizake, three.js origami folding](https://georgiee.github.io/origami/)
+ [Satellytes](http://satellytes.com)
+ [Teaching Kids](https://www.digitalwerkstatt.de/)

## Reveal Things

The presentaiton engine is [Reveal.js](https://github.com/hakimel/reveal.js)

This thing caused a leak that made the final score screen laggy (30-40fps).
It seems reveal has problems removing such background iframe.

Switched to a simple iframe instead.

```
<section data-background-iframe="codepens/04-parallax-with-night-sky/">
  <!-- <iframe
    width="900"
    height="700"
    data-src="codepens/04-parallax-with-night-sky"></iframe> -->
    <aside class="notes">
      And when we apply it to our existing night sky
      it will look like this when scrolled
    </aside>
</section>
```
