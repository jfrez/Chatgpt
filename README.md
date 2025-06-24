# Procedural Space Explorer

This project is a small browser game written in pure JavaScript. It draws an
endless galaxy and generates textures for every planet, ship and the starry
background on the fly. Use the arrow keys or WASD to fly around. Enemy ships
spawn at random and will fire at you. Press **Space** or click the mouse to
shoot back. Each planet and enemy uses a unique procedurally created texture.

Planets belong to solar systems orbiting colorful stars. Their gravity pulls on
the player, and landing fully recharges your health. Some worlds also replenish
fuel, oxygen and food, which slowly run out as you explore. The game code is
split into small ES modules inside the `modules` folder for clarity. Health and
resource bars from 0&ndash;100% are shown in the upper left, along with your
current X,Y coordinates. The map is infinite, so wander as far as you like. An
introductory animation shows your ship diving into a black hole before you spawn
at a random set of coordinates. Weapons heat up as you fire and will temporarily
lock if they reach 100%, so watch the heat meter and let them cool off before
blasting away again.
To avoid browser security errors with ES module loading, run a small local
web server in this directory and then browse to `http://localhost:8000`. One
simple option is:

```bash
python3 -m http.server
```

With the server running, open `index.html` to play.
