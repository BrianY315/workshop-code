// WARM UP ROUND
// no function declarations in here
// so only one person "plays" the global frame

let height = 10;  //This line shows memory- key is height and value is 10
let length = 20;
let area = height * length;  //shows memory- key is area and value is 20 * 10 which is 100
console.log(`area is ${area}`); //shows console- 

height += 3;
length = length * 5;

console.log(`height is now ${height}`);
console.log(`length is now ${length}`);

area = height * length;
console.log(`area is ${area}`);
