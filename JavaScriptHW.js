//Shahad Alshabani
console.log("========Calculate area of a rectangle==========");

let width = 50;
let height = 100;
let area = width * height;
console.log("The area of the rectangle is: " + area);

console.log("========The Temperature Converter==========");
let Temperature;
let celsius = 30;
console.log("========Temperature convert from Celsius to Fahrenheit==========");
Temperature= (celsius * 9/5) + 32;
console.log(`${celsius}°C is ${Temperature}°F`);
let fahrenheit = Temperature; 
console.log("========Temperature convert from Fahrenheit to Celsius==========");
Temperature= (fahrenheit - 32) * 5/9;
console.log(`${fahrenheit}°F is ${celsius}°C`);

console.log("========Convert hours to seconds==========");
let hours = 2;
let seconds = hours * 3600;
console.log(hours + " hour = " + seconds + " sec");



console.log("========Leap year==========");

let year = 2000;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

console.log("========Find the a number is present in given range==========");

  
let number = 15;
let start = 11;
let end = 30;
  
if (number >= start && number <= end) {
      console.log("true");
    } else {
      console.log("false");
    
}


console.log("========Factorial numbers==========");

let numf = 3;
let result = 1;
for (let i = 2; i <= numf; i++) {
  result *= i;
}
console.log("The factorial of " + numf + " is " + result);