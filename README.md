# ray-casting
Project is created using p5.js to demonstrate the ray-casting.

### How to run the project
- In order to run the project, you simply need to run `index.html` file

### About code
- The driver file is `sketch.js` which is the entry point for p5. Here you can modify the canvas which is shown by p5

- There are 3 main class in project.
    * Boundary `./boundary.js` : this class represent the obstracles for the light.
    * Ray `./ray.js` : this class represent the single ray of light which will interact with `Boundary` class instance.
    * Sun `./sun.js` : this class represents the light source, and it is the containers for collection of `Ray` Class instances. This class is also responsible for collision detection i.e the rays present as collection inside the Sun's instance knows which boundaries they should be interacting. If there are two boundaries one front of each other and locus of the ray passes through both boundaries then it interacts with first boundary and should cast shadow on boundary which is at last.

