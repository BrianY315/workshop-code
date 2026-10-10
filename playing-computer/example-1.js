// EXAMPLE 1
// now there is a global frame, and an add frame
// one person will "play" the global frame
// another person will "play" the add frame

function add(a, b) {   // declaration for adding a and b.
  return a + b;        // declaration for returning a+b 
}

let x = 10;
let y = 32;
x = x + 1;
y = y - 4;
console.log("x is ", x);
console.log("y is ", y);
console.log(add(x, y));
