console.log("---Convert Number strings and boolean values to numbers---");
var result;
result = Number("hello");
console.log(` string to Number conversion: ${result}`);

result = Number(undefined);
console.log(`undefined to Number conversion: ${result}`);

result = Number(NaN);
console.log(`NaN to Number conversion: ${result}`);

console.log("----------------------------------------------------");
console.log("-----String to Number using + operato----");
var numberInString = "100";
console.log(typeof numberInString);

var myNumber = +numberInString;
console.log(typeof myNumber);

console.log("-----------------------------------------------------");
console.log("---number to string datatype using toString() method---");
var myNumber = 100;
console.log(typeof myNumber);
var afterConversion = myNumber.toString();
console.log(typeof afterConversion);

