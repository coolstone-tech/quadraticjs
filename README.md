# Quadratic.js
Solve a Quadratic

## Add to your project
### NPM
[`npm i quadratic.js`](https://docs.npmjs.com/downloading-and-installing-packages-locally/)

### HTML
```html
<script src="https://raw.githubusercontent.com/coolstone-tech/quadraticjs/main/WEB.js"></script>
```

## API
### NPM
```js
const Quadratic = require('quadratic.js')
const quadratic = new Quadratic(a,b,c)

console.log(quadratic.solve()) // Solve quadratic
console.log(quadratic.getDiscriminant()) // Get discriminant
```

### HTML
```
<script>
const quadratic = new Quadratic(a,b,c)

console.log(quadratic.solve()) // Solve quadratic
console.log(quadratic.getDiscriminant()) // Get discriminant
</script>
