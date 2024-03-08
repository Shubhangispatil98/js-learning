console.log("==two variable value before Swapping==")
var sweety = "Sweety";
console.log("Sweety:", sweety);
var cutie = "Cutie";
console.log("Cutie:", cutie);

console.log("==After Swapping==");

var temp = "Sweety";
sweety = cutie;
cutie = sweety;
console.log("Sweety:", sweety, "Cutie:", cutie);

console.log("==three variable value before Swapping==");
num1 = 100;
console.log("num1:", num1);
num2 = 200;
console.log("num2:", num2);
num3 = 300;
console.log("num3:", num3);

console.log("==three variable value after Swapping==");
temp = num1;
num1 = num2;
num2 = num3;
num3 = temp;

console.log("num1:", num1, "num2", num2, "num3", num3);
