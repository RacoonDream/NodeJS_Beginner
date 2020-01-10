// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 }  = Math;

// With require
// const { readFile } = require('fs');


 const circle = {
   label: 'circleX',
   radius1: 10,
 };

 const circleArea = ({ radius1 }) =>
   (PI * radius1 * radius1).toFixed(2);

 console.log(
   circleArea(circle)
 );
