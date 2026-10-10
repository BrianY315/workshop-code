// WARM UP ROUND
// no function declarations in here
// so only one person "plays" the global frame

let height = 10;  //This line shows memory- key is height and value is 10
let length = 20;  // This line shows memory- key is lengt and value is 20
let area = height * length;  //shows memory- key is area and value is 20 * 10 which is 100
console.log(`area is ${area}`); // console- shows area has changed to 200

height += 3;       // This line shows memory has changed this value is (10 + 3 ) now 13
length = length * 5;    // This shows memory has changed- value is now (20 * 5) 100

console.log(`height is now ${height}`);   // console- now displays height as 13
console.log(`length is now ${length}`);    // console- now displays length as 100

area = height * length;     // This line show memory has changed- key is Area and value is now (100 * 13) 1300
console.log(`area is ${area}`);  //console display- Area is now  (area = height * length) 1300
