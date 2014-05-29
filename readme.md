# Argify

A very small bit of code that I got tired of typing again and again.

It parses command line arguments formatted like: `$ node ./yourscript.js --blargh=honk`

## Install
`npm install ben-bradley/argify`

## Use
`$ node ./yourscript.js --blargh=honk`
```javascript
// yourscript.js
var args = require('argify');

console.log(args); // stdout: { blargh: 'honk' }
console.log(args.blargh); // stdout: honk
```
