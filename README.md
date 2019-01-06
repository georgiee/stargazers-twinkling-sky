# Twinkling Night Sky 🌌
This night sky has some Twinkling Stars ✨ and Shooting Stars 💫
Lean back and enjoy the view.

[Demo](https://georgiee.github.io/twinkle-and-shooting-stars/)

---

Here some random notes for me.

## Features
Kelvin Color
Pulse (via scale)
Glow (via Opacity)
Parallax (top scroll via css proeprty)

## Scratchpad
+ Add Filters https://yoksel.github.io/svg-filters/#/
+ Heat Filter: http://bl.ocks.org/monfera/19845caf6aa383abddaa248a3f0d2ae0

Chrome Bug
```
    <filter id="displacementFilter">
      <feTurbulence type="turbulence" baseFrequency="0.01 .1"
          numOctaves="2" result="turbulence" seed="53"/>
      <feDisplacementMap in2="turbulence" in="SourceGraphic"
          scale="50" />
    </filter>
```

also tested gaussian blur filter
performance bad.

